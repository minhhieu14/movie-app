import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Routes from "./config/Routes";

function App() {
  const showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ));
    }
    return result;
  };
  return (
    <Router>
      <Header />

      <Switch>{showContentMenu(Routes)}</Switch>

      <Footer />
    </Router>
  );
}

export default App;
