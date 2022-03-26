import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./CustomCheckbox.styled";


function CustomCheckbox({ callback, defaultState = false, disabled, forcedState, activeAll}) {
  const [active, setActive] = useState(defaultState);
  const {rows} = useSelector(state => state.table);
  const {selectAll} = useSelector(state => state.select);

  const clickFunc = () => {
      setActive(!active);
    
    if (typeof callback === 'function') {
      callback();
    }

    if (typeof activeAll === 'function') {
      activeAll({toggle:!active, rows});
    }
  }

  useEffect(() => {
    if(forcedState === false){
      setActive(false);
    }

    if(selectAll){
      setActive(true);
    }

  }, [forcedState, selectAll])

  return (
    <S.CheckboxLabel >
      <S.CheckboxInput disabled={disabled} type="checkbox" checked={active} onChange={clickFunc}/>
      <S.CheckboxSpan />
    </S.CheckboxLabel>
  );
}

export default CustomCheckbox;
