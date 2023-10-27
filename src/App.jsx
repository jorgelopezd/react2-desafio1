import { Route,Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage";


const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
      </Routes>
    </div>
  );
};
export default App;
