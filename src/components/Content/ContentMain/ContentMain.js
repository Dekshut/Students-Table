import Pagination from "./Pagination/Pagination";
import StudentsTable from "./StudentsTable/StudentsTable";
import ArchivedList from "./ArchivedList/ArchivedList";


function ContentMain() {
  return (
    <div >
      <StudentsTable  />
      <ArchivedList />
      <Pagination/>
    </div>
  );
}

export default ContentMain;
