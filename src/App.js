import { Route, Routes } from "react-router"
import "./styles.css"
import { Home } from "./pages/Home";
import { Layout } from "./Layout/Layout";
import { About } from "./pages/About";

import { Utilities } from "./components/Utilities";
import { Buttons } from "./components/Buttons";
import { Images } from "./components/Images";
import { Cards } from "./components/Cards";
import { Badges } from "./components/Badges";

export const App = () => {
  return(<>
    <Routes>
      <Route exact path="/"><Home /></Route>
      <Route path="/documentation"><Layout></Layout></Route>
      <Route path="/about"><About /></Route>

      <Route path="/documentation/badges"><Layout><Badges /></Layout></Route>
      <Route path="/documentation/buttons"><Layout><Buttons /></Layout></Route>
      <Route path="/documentation/cards"><Layout><Cards /></Layout></Route>
      <Route path="/documentation/images"><Layout><Images /></Layout></Route>
      <Route path="/documentation/utilities"><Layout><Utilities /></Layout></Route>

    </Routes>
  </>)
}