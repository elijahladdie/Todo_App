import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Tasks from "./pages/Tasks";
import InProgress from "./pages/InProgress";
import Completed from "./pages/Completed";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout  />} >
          <Route index path="/" element={<Tasks />} />
          <Route path="task/tasks" element={<Tasks />} />
          <Route path="task/in-progress" element={<InProgress />} />
          <Route path="task/completed" element={<Completed  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;