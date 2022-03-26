import { useDispatch, useSelector } from "react-redux";
import { resetSelect } from "../../../../redux/reducers/StudentsTable/selectMenuSlice";
import { setArchivedTable } from "../../../../redux/reducers/StudentsTable/tableSlice";
import { Container } from "../../../App.styled";
import ExportCSV from "../../ContentHeader/ExportCSV/ExportCSV";
import * as S from "./SelectMenu.styled";


function SelectMenu() {
  const dispatch = useDispatch();
  const {selectedStudents, selectedID} = useSelector(state => state.select);

  console.log(`SelectedID: ${selectedID}`);

  return (
    <S.SelectMenuWrapper>
      <Container>
        <S.SelectMenuInner>
          <S.SelectMenuTitle>
            {selectedStudents} Student selected
          </S.SelectMenuTitle>
          <S.SelectMenuOptions>
            <S.SelectMenuBtn onClick={() => dispatch(resetSelect())}>
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.66683 1.77337L8.72683 0.833374L5.00016 4.56004L1.2735 0.833374L0.333496 1.77337L4.06016 5.50004L0.333496 9.22671L1.2735 10.1667L5.00016 6.44004L8.72683 10.1667L9.66683 9.22671L5.94016 5.50004L9.66683 1.77337Z" fill="white" />
              </svg>
              cancel selection
            </S.SelectMenuBtn>
            <S.SelectMenuCSV>
              <ExportCSV />
            </S.SelectMenuCSV>
            <S.SelectMenuBtn onClick={() => { dispatch(setArchivedTable({arr: selectedID, type: 'add'})); dispatch(resetSelect())}} darker={true}>
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.66667 7.16667H6.96667V5.16667H5.03333V7.16667H3.33333L6 9.83333L8.66667 7.16667ZM11.6933 1.98667L10.7667 0.866667C10.5867 0.64 10.3133 0.5 10 0.5H2C1.68667 0.5 1.41333 0.64 1.22667 0.866667L0.306667 1.98667C0.113333 2.21333 0 2.51333 0 2.83333V11.1667C0 11.9 0.6 12.5 1.33333 12.5H10.6667C11.4 12.5 12 11.9 12 11.1667V2.83333C12 2.51333 11.8867 2.21333 11.6933 1.98667ZM2.16 1.83333H9.84L10.38 2.48H1.62667L2.16 1.83333ZM10.6667 11.1667H1.33333V3.83333H10.6667V11.1667Z" fill="#424242" />
              </svg>
              archive selected
            </S.SelectMenuBtn>
          </S.SelectMenuOptions>
        </S.SelectMenuInner>
      </Container>
    </S.SelectMenuWrapper>
  );
}

export default SelectMenu;
