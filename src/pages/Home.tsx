import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { Categories, Pagination, PizzaItems, Sort } from '../Components';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const currentPage = useSelector((state: RootState) => state.filter.currentPage);
  const countItems = useSelector((state: RootState) => state.pizza.countItems);

  const onChangeCategory = useCallback(
    (idx: number) => {
      dispatch(setCategoryId(idx));
    },
    [dispatch],
  );

  const onChangePage = useCallback((page: number) => dispatch(setCurrentPage(page)), [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories currentCategoryId={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaItems />
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} count={countItems} />
    </div>
  );
};

export default Home;
