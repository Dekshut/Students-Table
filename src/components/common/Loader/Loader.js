import * as S from "./Loader.styled";


function Loader() {
  return (
    <S.SpinnerWrapper> 

      <S.Spinner>
        <S.SubSpinner>
          <div></div>
          <div>
            <div></div>
          </div>
        </S.SubSpinner>
      </S.Spinner>

    </S.SpinnerWrapper>
  );
}

export default Loader;
