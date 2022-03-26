import { useDispatch, useSelector } from "react-redux";
import { setSelectAll } from "../../../../redux/reducers/StudentsTable/selectMenuSlice";
import CustomCheckbox from "../../../common/CustomCheckbox/CustomCheckbox";
import SortBtn from "../../../common/SortBtn/SortBtn";
import StudentsTableBody from "./StudentsTableBody";

import * as S from "./StudentTable.styled";

function StudentsTable() {
  const dispatch = useDispatch();
  const selectAll = useSelector(state => state.select.selectAll);

  return (
    <>
      <S.CustomTable>
        <thead>
          <tr>
            <th scope="col"><CustomCheckbox forcedState={selectAll} activeAll={({ toggle, rows }) => dispatch(setSelectAll({ toggle, rows }))} /></th>
            <th scope="col"><SortBtn title="Name" sortBy={'name'} pointerValue={'AZ'} /></th>
            <th scope="col">ID</th>
            <th scope="col"><SortBtn title="Class" sortBy={'class'} pointer={false} /></th>
            <th scope="col"><SortBtn title="Av.Score, %" sortBy={'score'} /></th>
            <th scope="col"><SortBtn title="Av.Speed" sortBy={'speed'} /></th>
            <th scope="col">Parents</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <StudentsTableBody />
      </S.CustomTable>
    </>
  );
}

export default StudentsTable;
