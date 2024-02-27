import { UsersMenu } from "components/User`sMenu/User`sMenu";
// import { StatusFilter } from "../StatusFilter/StatusFilter";
// import { TaskCounter } from "../TaskCounter/TaskCounter";
import css from "./AppBar.module.css";
import {Navigation} from '../AppNav'

export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <Navigation/>
    <UsersMenu/>
      {/* // <section className={css.section}>
      //   <h2 className={css.title}>Tasks</h2>
      //   <TaskCounter />
      // </section>
      // <section className={css.section}>
      //   <h2 className={css.title}>Filter by status</h2>
      //   <StatusFilter />
      // </section> */}
    </header>
  );
};
