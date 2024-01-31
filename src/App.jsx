import TestPage from "./pages/Testpage";
import Signup from "./pages/sign/Signup";
import Signin from "./pages/sign/Signin";
import Navigation from "./components/navigation/navigation";
import NewSignin from "./pages/NewSignin";
import House from "./pages/views/House";
import InSide from "./pages/views/InSide";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/house" element={<House />} />
        <Route path="/inside" element={<InSide />} />
      </Routes>
    </>
  );
}

export default App;