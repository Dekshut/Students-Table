import { useSelector } from "react-redux";
import { Container } from "../../App.styled";

import * as S from "./ContentHeader.styled";
import ExportCSV from "./ExportCSV/ExportCSV";
import SearchForm from "./SearchForm/SearchForm";
import SelectMenu from "./SelectMenu/SelectMenu";

function ContentHeader() {
  const { selectActivated } = useSelector(state => state.select);

  return (
    <>
      {selectActivated ? <SelectMenu /> :
        <Container>
          <S.ContentHeaderWrapper>
            <S.ContentHeaderTitle>
              STUDENTS
            </S.ContentHeaderTitle>
            <SearchForm />
            <ExportCSV />
          </S.ContentHeaderWrapper>
        </Container>}
    </>
  );
}

export default ContentHeader;
