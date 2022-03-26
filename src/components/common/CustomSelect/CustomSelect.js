
import { useState } from 'react';
import OptionsButton from '../OptionsButton/OptionsButton';
import * as S from './CustomSelect.styled'

function CustomSelect(props) {
  const { options, header, lighter, callback } = props

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(header);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    if(typeof callback === 'function'){
      callback(+value);
    }
    setSelectedOption(value);
    setIsOpen(false);
  };

  

  return (
    <S.DropDownContainer>
      <S.DropDownHeader onClick={toggling}>{
        selectedOption}
        <OptionsButton lighter={lighter}/>
      </S.DropDownHeader>
      {isOpen && (
        <S.DropDownListContainer>
          <S.DropDownList>
            {
              options ? options.map(option =>
                <S.ListItem
                  onClick={onOptionClicked(option)}
                  key={Math.random()}>{option}
                </S.ListItem>) : null
            }
          </S.DropDownList>
        </S.DropDownListContainer>
      )}

    </S.DropDownContainer>
  );
}

export default CustomSelect;
