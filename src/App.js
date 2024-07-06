import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SubsPage from "./pages/SubsPage";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/subscriptions" element={ <SubsPage /> } />
          {/* <Route path="/" element={  } /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
