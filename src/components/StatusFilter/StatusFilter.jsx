import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilters } from "../../redux/tasks/constants";
import { useSelector, useDispatch } from "react-redux";
// import { changeFilter } from '../../redux/actions'
import { changeFilter } from "../../redux/tasks/slises";
import { getFiltersStatus } from "../../redux/selectors";

export const StatusFilter = () => {
  const filter = useSelector(getFiltersStatus)
  const dispatch = useDispatch()


  const onFilterChange = (value) => {
    dispatch(changeFilter(value))
  }
  
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all} onClick={()=>onFilterChange(statusFilters.all)}>All</Button>
      <Button selected={filter === statusFilters.active} onClick={()=>onFilterChange(statusFilters.active)}>Active</Button>
      <Button selected={filter === statusFilters.completed} onClick={()=>onFilterChange(statusFilters.completed)}>Completed</Button>
    </div>
  );
};
