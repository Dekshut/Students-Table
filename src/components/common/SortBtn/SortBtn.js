import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSelect } from "../../../redux/reducers/StudentsTable/selectMenuSlice";
import { fetchTable } from "../../../redux/reducers/StudentsTable/tableSlice";
import * as S from "./SortBtn.styled";


function SortBtn(props) {
  const { title, pointer = true, pointerValue, sortBy} = props;
  const [dir, setDir] = useState(0);

  const dispatch = useDispatch();
  
  const { rows } = useSelector(state => state.table);
  const rowsForFetch = rows;
  const pageForFetch = 1;

  useEffect( () => {
    if(dir !== 0){
      dispatch(resetSelect());
      dispatch(fetchTable({ rowsForFetch, pageForFetch, sortBy, dir }));
    }
  }, [dir])

  function toggleDir(){
    if (dir === 1) {
      setDir(-1);
    } else {
      setDir(1);
    }
  }

  return (
    <S.SortBtnWrapper onClick={toggleDir}>
      {title}
      <S.SortBtnAngles pointer={pointer} dir={dir}>
        <S.SortBtnUp dir={dir}></S.SortBtnUp>
        {pointerValue}
        <S.SortBtnDown dir={dir}></S.SortBtnDown>
      </S.SortBtnAngles>
    </S.SortBtnWrapper >
  );
}

export default SortBtn;
