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
import InfoIcon from "../../../../common/SVGIcons/InfoIcon/InfoIcon";
import RiseLine from "../../../../common/SVGIcons/ActionsIcon/RiseLine";
import EditIcon from "../../../../common/SVGIcons/ActionsIcon/EditIcon";
import UnArchiveIcon from "../../../../common/SVGIcons/ArchiveIcon/UnArchiveIcon";
import ReloadIcon from "../../../../common/SVGIcons/ReloadIcon/ReloadIcon";

function StudentsTableItem({ disabled, id, darker, speed, score, name, parents, tests }, props) {
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

    if (!select && !disabled) {
      dispatch(setSelectActivated({ active: true, id: id }));
    } else {
      dispatch(setSelectActivated({ active: false, id: id }));
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
        darker={darker}
        disabled={disabled}
        onClick={() => setActive(!active)}
        colorSpeed={getColorOfLabel(speed)}
        colorScore={getColorOfScore(score)}>
        <th scope="col">
          <CustomCheckbox forcedState={selectActivated} callback={checkboxCallback} />
        </th>
        <th scope="col">{name}</th>
        <th scope="col">{id}</th>
        <th scope="col">{props.class}</th>
        <th scope="col">{score}</th>
        <th scope="col">{speed}</th>
        <th scope="col">
          <InfoIcon/> {parents.join(', ')}
        </th>
        <th scope="col">
          <S.OptionsScope selectActivated={selectActivated} selected={select}>
            {selectActivated && !disabled ?
              <>
                <S.SelectBtnWrapper>
                  <S.SelectBtn>
                    <EditIcon/>
                  </S.SelectBtn>
                  <S.SelectBtn>
                    <RiseLine/>
                  </S.SelectBtn>
                </S.SelectBtnWrapper>
              </> : null}
            {disabled && (selectActivated || select) &&
              < >
                <S.SelectBtn onClick={() => {
                  dispatch(setSelectActivated({ active: false, id: id }));
                  dispatch(setArchivedTable({ id: id, type: 'remove' }))
                }}>
                  <UnArchiveIcon/>
                </S.SelectBtn>
              </>}
            <OptionsButton active={active && !disabled} lighter={true} />
          </S.OptionsScope>
        </th>
      </S.RowWrapper>

      {(active && !disabled) && (
        <S.Dropdown>
          <th colSpan="9">
            <S.DropdownInner active={active}>

              <S.DropdownHeader>
                <div>STUDENT: <span>{name}</span></div>
                <div>ID: <span>{id}</span></div>
              </S.DropdownHeader>

              <S.DropdownOptions>
                <CustomSelect header="ALL CONCEPTS" />
                <CustomSelect header="ALL SCORE" />
                <CustomSelect header="ALL SPEED" />
                <S.DateInput type="date" data-date-format="DD MMMM YYYY" />
                <S.ReloadBtn>
                  <ReloadIcon/>
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
                  {tests.map((row, index) => (
                    <DropdownItem index={index + 1} key={Math.random()} {...row} />
                  ))}
                </tbody>
              </S.DropdownTable>

              <S.TotalData
                colorSpeed={getColorOfLabel(speed)}
                colorScore={getColorOfScore(score)}>
                <div>Average</div>
                <div >{score}</div>
                <div >{speed}</div>
              </S.TotalData>

            </S.DropdownInner>
          </th>
        </S.Dropdown>
      )}
    </>
  );
}

export default StudentsTableItem;
