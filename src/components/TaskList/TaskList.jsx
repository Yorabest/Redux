import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { statusFilters } from "../../redux/constants";
import { getTasks, getFiltersStatus} from "../../redux/selectors";

export const TaskList = () => {
  const tasks = useSelector(getTasks)
    const filter = useSelector(getFiltersStatus)
  const visibleTasks = tasks.filter((task) => {
    switch (filter) {
      case statusFilters.active: 
       return !task.completed
      
       case statusFilters.completed:
        
         return task.completed
      
      default:
        return task
    }
  })
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
