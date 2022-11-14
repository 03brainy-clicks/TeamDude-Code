import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./layout/Navigation";
import FriendsRef from "./pages/FriendsRef";
import ReferAndEarn from "./pages/ReferAndEarn";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/FriendsReferred" exact element={<FriendsRef />} />
        <Route path="/" exact element={<ReferAndEarn />} />
      </Routes>
      <div className="font-small text-center py-4 color-2">
        coded by chandrakant kushwah
      </div>
    </>
  );
}

export default App;
