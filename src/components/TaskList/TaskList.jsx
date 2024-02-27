import { useDispatch, useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { statusFilters } from "../../redux/tasks/constants";
import { getTasks, getFiltersStatus} from "../../redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/operation";

export const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(getTasks)
    const filter = useSelector(getFiltersStatus)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])
  
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
