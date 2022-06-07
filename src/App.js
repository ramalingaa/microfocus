import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route} from "react-router-dom"
import PageTwo from './pages/PageTwo';
function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "page2" element = {<PageTwo />} />
      </Routes>
    </div>
  );
}

export default App;
