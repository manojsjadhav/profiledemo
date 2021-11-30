// import react from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Portfoliospage from "./Pages/Portfoliospage";
import Blogspage from "./Pages/Blogspage";
import Contactpage from "./Pages/Contactpage";
import { useState } from "react";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-1"></div>
        <div className="lines-1"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/About" exact>
              <Aboutpage />
            </Route>
            <Route path="/Portfolios" exact>
              <Portfoliospage />
            </Route>
            <Route path="/Blogs" exact>
              <Blogspage />
            </Route>
            <Route path="/Contact" exact>
              <Contactpage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default App;
