import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import Component1 from './Components/Component1';

function App() {
  return (
    <BrowserRouter>
   <Provider store={store}>
        <Routes>
          <Route path="/" element={<Component1 />} />
        </Routes>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
