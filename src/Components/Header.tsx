import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoSvg from '../assets/img/pizza-logo.svg';
import { Search } from './';
import { selectCart } from '../redux/cart/selectors';
import { useAppDispatch } from '../redux/store';
import { setFilters, initialState } from '../redux/filter/slice';
import { setCart } from '../redux/cart/slice';
import { CartSliceState } from '../redux/cart/types';
import { IconCart } from './icons';

export const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);

  const isMounted = useRef(false);
  const dispatch = useAppDispatch();

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const clearFilters = () => {
    dispatch(setFilters(initialState));
  };

  useEffect(() => {
    if (isMounted.current) {
      const cartString = JSON.stringify({ items, totalPrice });
      localStorage.setItem('cart', cartString);
    }
    isMounted.current = true;
  }, [items, totalPrice]);

  useEffect(() => {
    const cartString = localStorage.getItem('cart');

    if (cartString) {
      const cart: CartSliceState = JSON.parse(cartString);
      dispatch(setCart(cart));
    }
  }, [dispatch]);

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link onClick={clearFilters} to="/" className="header__link">
            <div className="header__logo">
              <img width="38" src={logoSvg} alt="Pizza logo" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <Search />
        </div>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <IconCart />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
