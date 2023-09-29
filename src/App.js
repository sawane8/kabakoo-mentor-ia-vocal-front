import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './components/AppContext';
import History from './components/History'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<History />}>
            <Route index element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
