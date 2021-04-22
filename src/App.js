import { Route, Routes } from "react-router"
import "./main.css"
import { Home } from "./pages/Home";
import { Layout } from "./Layout/Layout";
import { About } from "./pages/About";

import { Utilities } from "./components/utilities/Utilities";
import { Buttons } from "./components/buttons/Buttons";

export const App = () => {
  return(<>
    <Routes>
      <Route exact path="/"><Home /></Route>
      <Route path="/documentation"><Layout></Layout></Route>
      <Route path="/about"><About /></Route>

      <Route path="/documentation/buttons"><Layout><Buttons /></Layout></Route>
      <Route path="/documentation/utilities"><Layout><Utilities /></Layout></Route>

    </Routes>
  </>)
}