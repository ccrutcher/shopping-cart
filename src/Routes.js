import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./Components/App";
import Shop from "./Components/Shop"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;