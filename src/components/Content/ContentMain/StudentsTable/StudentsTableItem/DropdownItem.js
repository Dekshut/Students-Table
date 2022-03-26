import CustomCheckbox from "../../../../common/CustomCheckbox/CustomCheckbox";


function DropdownItem(props) {


  return (
    <tr >
      <th scope="col">{props.index}.</th>
      <th scope="col">{props.label}</th>
      <th scope="col">{(props.score) ? props.score : 'NULL'}</th>
      <th scope="col">{(props.speed) ? props.speed : 'NULL'}</th>
      <th scope="col">{props.total}</th>
      <th scope="col">{props.expSpeed}</th>
      <th scope="col">{props.concept}</th>
      <th scope="col">{props.date}</th>
      <th scope="col"><CustomCheckbox defaultState={props.abcent || props.absent} disabled/></th>
    </tr>
  );
}

export default DropdownItem;
