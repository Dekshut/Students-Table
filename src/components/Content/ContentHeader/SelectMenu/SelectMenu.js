import { useDispatch, useSelector } from "react-redux";
import { resetSelect } from "../../../../redux/reducers/StudentsTable/selectMenuSlice";
import { setArchivedTable } from "../../../../redux/reducers/StudentsTable/tableSlice";
import { Container } from "../../../App.styled";
import AddArchiveIcon from "../../../common/SVGIcons/ArchiveIcon/AddArchiveIcon";
import CrossIcon from "../../../common/SVGIcons/CrossIcon/CrossIcon";
import ExportCSV from "../../ContentHeader/ExportCSV/ExportCSV";
import * as S from "./SelectMenu.styled";


function SelectMenu() {
  const dispatch = useDispatch();
  const {selectedStudents, selectedID} = useSelector(state => state.select);

  return (
    <S.SelectMenuWrapper>
      <Container>
        <S.SelectMenuInner>
          <S.SelectMenuTitle>
            {selectedStudents} Student selected
          </S.SelectMenuTitle>
          <S.SelectMenuOptions>
            <S.SelectMenuBtn onClick={() => dispatch(resetSelect())}>
              <CrossIcon fill={'#ffffff'}/>
              cancel selection
            </S.SelectMenuBtn>
            <S.SelectMenuCSV>
              <ExportCSV />
            </S.SelectMenuCSV>
            <S.SelectMenuBtn onClick={() => { dispatch(setArchivedTable({arr: selectedID, type: 'add'})); dispatch(resetSelect())}} darker={true}>
              <AddArchiveIcon/>
              archive selected
            </S.SelectMenuBtn>
          </S.SelectMenuOptions>
        </S.SelectMenuInner>
      </Container>
    </S.SelectMenuWrapper>
  );
}

export default SelectMenu;
