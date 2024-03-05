import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
// import { deleteTask, toggleCompleted } from "../../redux/slises";
import { deleteTask, toggleCompleted } from "../../../redux/tasks/operation";

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  const handleToggle = (task) => {
    dispatch(toggleCompleted(task))

  }
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onClick={()=>handleToggle(task)}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}
        onClick={() => handleDelete(task.id)}
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};
