import * as S from "./ExportCSV.styled";
import { CSVLink } from 'react-csv'
import { useSelector } from "react-redux";
import DownloadIcon from "../../../common/SVGIcons/DownloadIcon/DownloadIcon";


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
        <DownloadIcon/>
        <S.ExportCSVText>
          Export CSV
        </S.ExportCSVText>
      </CSVLink>
    </S.ExportCSVWrapper>
  );
}

export default ExportCSV;
