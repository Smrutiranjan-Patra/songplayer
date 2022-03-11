import { Routes, Route } from "react-router-dom";
import Landingpage from "../Components/Landingpage";
import Home from "../Components/Home";
import Player from "../Components/Player"

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/player" element={<Player />} />
            </Routes>
        </div >
    );
}

export default Router;