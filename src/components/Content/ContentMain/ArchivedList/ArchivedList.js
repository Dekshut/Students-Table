import { useSelector } from "react-redux";
import StudentsTableItem from "../StudentsTable/StudentsTableItem/StudentsTableItem";
import { CustomTable } from "../StudentsTable/StudentTable.styled";
import * as S from "./ArchivedList.styled";

function ArchivedList() {
  const { archivedTable } = useSelector(state => state.table);

  return (
    <div >
      {archivedTable.length ?
        <>
          <S.ArcivedTitle>Archived</S.ArcivedTitle>
          <S.ArchivedTable>
            <CustomTable>
              <tbody>
                {archivedTable.map((row, index) => (
                  <StudentsTableItem disabled darker={index} key={Math.random()} {...row} />
                ))}
              </tbody>
            </CustomTable>
          </S.ArchivedTable>
        </> : null
      }
    </div>
  );
}

export default ArchivedList;
