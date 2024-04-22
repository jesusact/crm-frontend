// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./components/DashboardPage";
import { TransactionsPage } from "./components/TransactionsPage";
import { PeoplePage } from "./components/PeoplePage";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
