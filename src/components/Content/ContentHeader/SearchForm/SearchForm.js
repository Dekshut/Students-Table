import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTable } from "../../../../redux/reducers/StudentsTable/tableSlice";
import SearchIcon from "../../../common/SVGIcons/SearchIcon/SearchIcon";
import * as S from "./SearchForm.styled";

function SearchForm() {

  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const { rows, totalPages } = useSelector(state => state.table);
  const rowsForFetch = rows * totalPages;
  const pageForFetch = 1;

  function submitForm(e) {
    e.preventDefault();
    dispatch(fetchTable({ rowsForFetch, pageForFetch, searchValue }));
  }

  return (
    <S.SearchFormWrapper onSubmit={submitForm}>
      <S.SearchFormInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Enter Student Name, Parent or ID here" type='search'/>
      <S.SearchFormButton type='submit'>
        <SearchIcon/>
      </S.SearchFormButton>
    </S.SearchFormWrapper>
  );
}

export default SearchForm;
