import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Tasks/Layout/Layout";
// import { TaskForm } from "./TaskForm/TaskForm";
// import { TaskList } from "./TaskList/TaskList";

export const App = () => {

  return (
    <Layout>
      <AppBar />
      <Outlet/>
      {/* <TaskForm />
      <TaskList/> */}
    </Layout>
  );
};
