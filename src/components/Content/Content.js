import * as S from "../App.styled";
import ContentHeader from "./ContentHeader/ContenHeader";
import ContentMain from "./ContentMain/ContentMain";

function Content() {

  return (
    <div >
      <ContentHeader />
      <S.Container>
        <ContentMain />
      </S.Container>
    </div>
  );
}

export default Content;
