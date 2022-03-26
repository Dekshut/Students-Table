import * as S from "./Header.styled";
import HeaderNav from "./HeaderNav/HeaderNav";
import SchoolsList from "./SchoolsList/SchoolsList";
import UserProfile from "./UserProfile/UserProfile";


function Header() {
  return (
    <div >
      <S.HeaderInner>
        <SchoolsList />
        <HeaderNav />
        <UserProfile />
      </S.HeaderInner>
    </div>
  );
}

export default Header;
