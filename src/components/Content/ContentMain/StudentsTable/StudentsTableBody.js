import { useSelector } from "react-redux";
import * as S from "./StudentTable.styled";
import StudentsTableItem from "./StudentsTableItem/StudentsTableItem";
import Loader from "../../../common/Loader/Loader";

function StudentsTableBody() {
  const { table, status, error } = useSelector(state => state.table);

  return (
    <tbody >
      {status === 'loading' && <tr><th colSpan="8"><Loader /></th></tr>}
      {status === 'resolved' && (table.length ? table.map((row, index) => (
        <StudentsTableItem darker={index} key={Math.random()} {...row} />
      )) : <tr><S.alertTh colSpan="8" >Not found </S.alertTh></tr>)
      }
      {status === 'rejected' && <tr><th colSpan="8"><S.ErrorMessage>An error occured: {error}!</S.ErrorMessage></th></tr>}
    </tbody>
  );
}

export default StudentsTableBody;
