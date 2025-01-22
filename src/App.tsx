import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PortfolioLayout from "./app/layout/PortfolioLayout.tsx";
import Main from "./pages/Main.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<PortfolioLayout />}>
                  <Route index element={<Main />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
