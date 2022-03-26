import OptionsButton from "../../common/OptionsButton/OptionsButton";
import * as S from "./UserProfile.styled";


function UserProfile() {
  return (
    <S.ProfileWrapper>
      <S.ProfileImg src={require("./user.png")} alt="user-avatar" />
      <OptionsButton />
    </S.ProfileWrapper>
  );
}

export default UserProfile;
