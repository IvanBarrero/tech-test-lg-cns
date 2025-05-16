import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTaskComponent from './components/AddTaskComponent';
import ListTodosComponent from './components/ListTodosComponent';
import TodoContextProvider from './context/TodoContextProvider';

function App() {
  return (
    <>
      <TodoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListTodosComponent />}></Route>
            <Route path='/tasks' element={<ListTodosComponent />}></Route>
            <Route path='/add-task' element={<AddTaskComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </TodoContextProvider>
    </>
  );
}

export default App;
