import * as S from "./HeadeNav.styled";

function HeaderNav() {
  return (
    <S.NavWrapper >
      <S.NavLink>Analytics</S.NavLink>
      <S.NavLink>Gradebooks</S.NavLink>
      <S.NavLink>Tests</S.NavLink>
      <S.NavLink active>Students</S.NavLink>
      <S.NavLink>Teachers</S.NavLink>
      <S.NavLink>Archive</S.NavLink>
    </S.NavWrapper>
  );
}

export default HeaderNav;
