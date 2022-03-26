import * as S from "./ExportCSV.styled";
import { CSVLink } from 'react-csv'
import { useSelector } from "react-redux";


function ExportCSV() {

  const data = useSelector(state => state.table.table)

  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Id', key: 'id' },
    { label: 'Class', key: 'class' },
    { label: 'Score', key: 'score' },
    { label: 'Speed', key: 'speed' },
    { label: 'Parents', key: 'parents' },
  ]

  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: data
  }

  return (
    <S.ExportCSVWrapper >
      <CSVLink {...csvReport}>
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.99992 0.5L0.333252 5.16667H2.99992V9.16667H6.99992V5.16667H9.66659L4.99992 0.5ZM5.66659 3.83333V7.83333H4.33325V3.83333H3.55325L4.99992 2.38667L6.44659 3.83333H5.66659ZM0.333252 10.5H9.66659V11.8333H0.333252V10.5Z" fill="#C0C0C0" />
        </svg>
        <S.ExportCSVText>
          Export CSV
        </S.ExportCSVText>
      </CSVLink>
    </S.ExportCSVWrapper>
  );
}

export default ExportCSV;
