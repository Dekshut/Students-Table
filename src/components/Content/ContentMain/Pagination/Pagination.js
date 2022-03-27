import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelect } from '../../../../redux/reducers/StudentsTable/selectMenuSlice';
import { setRowsForPage, setCurrentPage, fetchTable } from '../../../../redux/reducers/StudentsTable/tableSlice';
import CustomSelect from '../../../common/CustomSelect/CustomSelect';
import ArrowLeft from '../../../common/SVGIcons/PaginationArrow/ArrowLeft';
import ArrowRight from '../../../common/SVGIcons/PaginationArrow/ArrowRight';
import * as S from './Pagination.styled';

const Pagination = () => {
  const dispatch = useDispatch();

  const { rows, totalPages, currentPage } = useSelector(state => state.table);

  const rowsForFetch = rows;
  const pageForFetch = currentPage;
  const totalPosts = totalPages * rows;

  useEffect(() => {
    dispatch(fetchTable({ rowsForFetch, pageForFetch }));
  }, [dispatch, rowsForFetch, pageForFetch]);

  const [startPos, setStartPos] = useState(1);

  function onClickBtn(direction) {
    dispatch(resetSelect());
    if (direction === 'next' && startPos < (totalPosts - rows)) {
      setStartPos(startPos + rows);
      dispatch(setCurrentPage(currentPage + 1));
    } else if (direction === 'back' && startPos > 1) {
      setStartPos(startPos - rows);
      dispatch(setCurrentPage(currentPage - 1));
    }
  }

  return (
    <S.PaginationInner>
      <S.PaginationText>
        Rows per page:
      </S.PaginationText>
      <CustomSelect callback={(rows) => { dispatch(setRowsForPage(rows)); dispatch(resetSelect()); setStartPos(1)}} header="10" options={['5', '10', '20']} />
      <S.PaginationTotal  >
        {startPos}-{rows * currentPage} of {totalPosts}
      </S.PaginationTotal>
      <S.PaginationBtn onClick={() => onClickBtn('back')}>
        <ArrowLeft/>
      </S.PaginationBtn>
      <S.PaginationBtn onClick={() => onClickBtn('next')}>
        <ArrowRight/>
      </S.PaginationBtn>
    </S.PaginationInner>
  );
};

export default Pagination;