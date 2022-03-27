import DropdownIcon from "../SVGIcons/DropdownIcon/DropdownIcon";
import * as S from "./OptionsButton.styled";

function OptionsButton(props) {
  const { lighter, active=false } = props;

  return (
    <S.ButtonInner active={active} lighter={lighter}>
      <DropdownIcon/>
    </S.ButtonInner>
  );
}

export default OptionsButton;
