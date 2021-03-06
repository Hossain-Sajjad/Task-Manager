import './App.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import ToDoTask from './Components/ToDoTask/ToDoTask';
import CompletedTasks from './Components/CompletedTasks/CompletedTasks';
import Calendar from './Components/Calendar/Calendar';
import EditTask from './Components/EditTask/EditTask';
import NotFound from './Components/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/todo" element={<ToDoTask></ToDoTask>} />
        <Route path="/completed" element={<CompletedTasks></CompletedTasks>} />
        <Route path="/calender" element={<Calendar></Calendar>} />
        <Route path="home/:id" element={<EditTask></EditTask>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
