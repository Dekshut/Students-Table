import CrossIcon from "../../common/CrossIcon/CrossIcon";
import * as S from "./ClearButton.styled";

function ClearButton() {
  return (
    <S.ClearButtonWrapper>
      <CrossIcon />
      <S.ClearButtonInner >
        CLEAR ALL
      </S.ClearButtonInner>
    </S.ClearButtonWrapper>
  );
}

export default ClearButton;
