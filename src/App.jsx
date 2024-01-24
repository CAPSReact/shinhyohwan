import TestPage from "./pages/Testpage";
import Signup from "./pages/sign/Signup";
import Signin from "./pages/sign/Signin";
import Navigation from "./components/navigation/navigation";
import NewSignin from "./pages/NewSignin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;