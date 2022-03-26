import * as S from "./App.styled";
import Content from "./Content/Content";
import Header from "./Header/Header";
import SubHeader from "./SubHeader/SubHeader";


function App() {
  return (
    <div >
      <S.Container>
        <Header />
      </S.Container>
      <SubHeader />
      <Content />
    </div>
  );
}

export default App;
