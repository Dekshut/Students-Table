import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelect } from '../../../../redux/reducers/StudentsTable/selectMenuSlice';
import { setRowsForPage, setCurrentPage, fetchTable } from '../../../../redux/reducers/StudentsTable/tableSlice';
import CustomSelect from '../../../common/CustomSelect/CustomSelect';
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
        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5917 2.225L9.10837 0.75L0.866699 9L9.1167 17.25L10.5917 15.775L3.8167 9L10.5917 2.225Z" fill="#5B5B5B" />
        </svg>
      </S.PaginationBtn>
      <S.PaginationBtn onClick={() => onClickBtn('next')}>
        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.408447 15.775L1.88345 17.25L10.1334 9L1.88345 0.75L0.408447 2.225L7.18345 9L0.408447 15.775Z" fill="#5B5B5B" />
        </svg>
      </S.PaginationBtn>
    </S.PaginationInner>
  );
};

export default Pagination;