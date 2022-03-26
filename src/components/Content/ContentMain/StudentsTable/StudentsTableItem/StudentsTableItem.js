import InfoIcon from "../InfoIcon";
import CustomCheckbox from "../../../../common/CustomCheckbox/CustomCheckbox";
import OptionsButton from "../../../../common/OptionsButton/OptionsButton";
import * as S from "./StudentsTableItem.styled";
import { useEffect, useState } from "react";
import CustomSelect from "../../../../common/CustomSelect/CustomSelect";
import SortBtn from "../../../../common/SortBtn/SortBtn";
import DropdownItem from "./DropdownItem";

import { useDispatch, useSelector } from "react-redux";
import { setSelectActivated } from "../../../../../redux/reducers/StudentsTable/selectMenuSlice";
import { setArchivedTable } from "../../../../../redux/reducers/StudentsTable/tableSlice";

function StudentsTableItem(props) {
  const dispatch = useDispatch();

  const [select, setSelect] = useState(false);
  const [active, setActive] = useState(false);

  function getColorOfScore(score) {
    const num = parseInt(score, 10);

    if (num >= 90) {
      return '#4285F4';
    } else if (num <= 89 && num >= 80) {
      return '#0F9D58';
    } else if (num <= 79 && num >= 50) {
      return '#E2B534';
    } else {
      return '#DB4437';
    }
  }

  function getColorOfLabel(label) {
    if (label === 'Below Expected') {
      return '#DB4437';
    } else if (label === 'Above Expected') {
      return '#4285F4';
    } else if (label === 'As Expected') {
      return '#0F9D58';
    }

    return null;
  }

  const { selectActivated } = useSelector(state => state.select);
  const { selectAll } = useSelector(state => state.select);

  function checkboxCallback() {
    setSelect(!select);

    if (!select && !props.disabled) {
      dispatch(setSelectActivated({ active: true, id: props.id }));
    } else {
      dispatch(setSelectActivated({ active: false, id: props.id }));
    }
  }

  useEffect(() => {
    if (selectActivated === false) {
      setSelect(false);
    }

    if (selectAll) {
      setSelect(true)
    }
  }, [selectActivated, selectAll])

  return (
    <>
      <S.RowWrapper
        selectActivated={selectActivated}
        selected={select}
        darker={props.darker}
        disabled={props.disabled}
        onClick={() => setActive(!active)}
        colorSpeed={getColorOfLabel(props.speed)}
        colorScore={getColorOfScore(props.score)}>
        <th scope="col">
          <CustomCheckbox forcedState={selectActivated} callback={checkboxCallback} />
        </th>
        <th scope="col">{props.name}</th>
        <th scope="col">{props.id}</th>
        <th scope="col">{props.class}</th>
        <th scope="col">{props.score}</th>
        <th scope="col">{props.speed}</th>
        <th scope="col">
          <InfoIcon /> {props.parents.join(', ')}
        </th>
        <th scope="col">
          <S.OptionsScope selectActivated={selectActivated} selected={select}>
            {selectActivated && !props.disabled ?
              <>
                <S.SelectBtnWrapper>
                  <S.SelectBtn>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 9.5V12H2.5L9.87333 4.62667L7.37333 2.12667L0 9.5ZM1.94667 10.6667H1.33333V10.0533L7.37333 4.01333L7.98667 4.62667L1.94667 10.6667ZM11.8067 1.75333L10.2467 0.193333C10.1133 0.06 9.94667 0 9.77333 0C9.6 0 9.43333 0.0666666 9.30667 0.193333L8.08667 1.41333L10.5867 3.91333L11.8067 2.69333C12.0667 2.43333 12.0667 2.01333 11.8067 1.75333Z" fill="#828282" />
                    </svg>
                  </S.SelectBtn>
                  <S.SelectBtn>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.66683 0L11.1935 1.52667L7.94016 4.78L5.2735 2.11333L0.333496 7.06L1.2735 8L5.2735 4L7.94016 6.66667L12.1402 2.47333L13.6668 4V0H9.66683Z" fill="#828282" />
                    </svg>
                  </S.SelectBtn>
                </S.SelectBtnWrapper>
              </> : null}
            {props.disabled && (selectActivated || select) &&
              < >
              <S.SelectBtn onClick={() => { dispatch(setSelectActivated({ active: false, id: props.id }));
               dispatch(setArchivedTable({ id: props.id, type: 'remove' })) }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6933 1.48667L10.7667 0.366667C10.5867 0.14 10.3133 0 10 0H2C1.68667 0 1.41333 0.14 1.22667 0.366667L0.306667 1.48667C0.113333 1.71333 0 2.01333 0 2.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V2.33333C12 2.01333 11.8867 1.71333 11.6933 1.48667ZM2.16 1.33333H9.84L10.3933 2H1.61333L2.16 1.33333ZM10.6667 10.6667H1.33333V3.33333H10.6667V10.6667ZM5.03333 9.33333H6.96667V7.33333H8.66667L6 4.66667L3.33333 7.33333H5.03333V9.33333Z" fill="#828282" />
                  </svg>
                </S.SelectBtn>
              </>}
            <OptionsButton active={active && !props.disabled} lighter={true} />
          </S.OptionsScope>
        </th>
      </S.RowWrapper>

      {(active && !props.disabled) && (
        <S.Dropdown>
          <th colSpan="9">
            <S.DropdownInner active={active}>

              <S.DropdownHeader>
                <div>STUDENT: <span>{props.name}</span></div>
                <div>ID: <span>{props.id}</span></div>
              </S.DropdownHeader>

              <S.DropdownOptions>
                <CustomSelect header="ALL CONCEPTS" />
                <CustomSelect header="ALL SCORE" />
                <CustomSelect header="ALL SPEED" />
                <S.DateInput type="date" data-date-format="DD MMMM YYYY" />
                <S.ReloadBtn>
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6667 2.83329L10.0001 5.49996H12.0001C12.0001 7.70663 10.2067 9.49996 8.00008 9.49996C7.32675 9.49996 6.68675 9.33329 6.13341 9.03329L5.16008 10.0066C5.98008 10.5266 6.95341 10.8333 8.00008 10.8333C10.9467 10.8333 13.3334 8.44663 13.3334 5.49996H15.3334L12.6667 2.83329ZM4.00008 5.49996C4.00008 3.29329 5.79341 1.49996 8.00008 1.49996C8.67341 1.49996 9.31341 1.66663 9.86675 1.96663L10.8401 0.993292C10.0201 0.473292 9.04675 0.166626 8.00008 0.166626C5.05341 0.166626 2.66675 2.55329 2.66675 5.49996H0.666748L3.33341 8.16663L6.00008 5.49996H4.00008Z" fill="#C0C0C0" />
                  </svg>
                </S.ReloadBtn>
              </S.DropdownOptions>

              <S.Statistics>
                <S.StatisticsTitle>SCORE</S.StatisticsTitle>
                <S.ColoredCircle color="#4285F4"></S.ColoredCircle>
                <S.ColoredText color="#4285F4">90%+ accuracy</S.ColoredText>
                <S.ColoredCircle color="#0F9D58"></S.ColoredCircle>
                <S.ColoredText color="#0F9D58">80 - 89% accuracy</S.ColoredText>
                <S.ColoredCircle color="#E2B534"></S.ColoredCircle>
                <S.ColoredText color="#E2B534">50 - 79% accuracy</S.ColoredText>
                <S.ColoredCircle color="#DB4437"></S.ColoredCircle>
                <S.ColoredText color="#DB4437">below 50% accuracy</S.ColoredText>
              </S.Statistics>

              <S.Statistics>
                <S.StatisticsTitle>SPEED</S.StatisticsTitle>
                <S.ColoredCircle color="#4285F4"></S.ColoredCircle>
                <S.ColoredText color="#4285F4">above expected</S.ColoredText>
                <S.ColoredCircle color="#0F9D58"></S.ColoredCircle>
                <S.ColoredText color="#0F9D58">as expected</S.ColoredText>
                <S.ColoredCircle color="#DB4437"></S.ColoredCircle>
                <S.ColoredText color="#DB4437">below expected</S.ColoredText>
              </S.Statistics>

              <S.DropdownTable>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Test Label</th>
                    <th scope="col">Score</th>
                    <th scope="col">Speed</th>
                    <th scope="col">Total Q-ns</th>
                    <th scope="col">Exp. Speed</th>
                    <th scope="col">Concept</th>
                    <th scope="col">
                      <SortBtn title="Date" />
                    </th>
                    <th scope="col">Absent</th>
                  </tr>
                </thead>
                <tbody>
                  {props.tests.map((row, index) => (
                    <DropdownItem index={index + 1} key={Math.random()} {...row} />
                  ))}
                </tbody>
              </S.DropdownTable>

              <S.TotalData
                colorSpeed={getColorOfLabel(props.speed)}
                colorScore={getColorOfScore(props.score)}>
                <div>Average</div>
                <div >{props.score}</div>
                <div >{props.speed}</div>
              </S.TotalData>

            </S.DropdownInner>
          </th>
        </S.Dropdown>
      )}
    </>
  );
}

export default StudentsTableItem;
