import CustomSelect from "../../common/CustomSelect/CustomSelect";
import * as S from "./SubHeaderNav.styled";

function SubHeaderNav() {
  return (
    <S.SubHeaderNavInner >
      <CustomSelect lighter header="SHOW ALL" />
      <CustomSelect lighter header="ALL GRADES" />
      <CustomSelect lighter header="ALL CLASSES" />
      <CustomSelect lighter header="AV.SCORE" />
      <CustomSelect lighter header="AV.SPEED" />
    </S.SubHeaderNavInner>
  );
}

export default SubHeaderNav;
