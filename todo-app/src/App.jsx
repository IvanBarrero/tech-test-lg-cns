import './App.css';
import TodoContextProvider from './context/TodoContextProvider';
import AppComponent from './components/AppComponent';

function App() {
  return (
    <>
      <TodoContextProvider>
        <AppComponent />
      </TodoContextProvider>
    </>
  );
}

export default App;
