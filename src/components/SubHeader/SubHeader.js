import ClearButton from "./ClearButton/ClearButton";
import * as S from "./SubHeader.styled";
import SubHeaderNav from "./SubHeaderNav/SubHeaderNav";

function SubHeader() {
  return (
    <S.SubHeaderInner >
      <SubHeaderNav/>
      <ClearButton/>
    </S.SubHeaderInner>
  );
}

export default SubHeader;
