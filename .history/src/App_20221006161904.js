import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import ProductsContainer from "./components/Products/ProductsContainer";
import NotFound from "./components/NotFound/NotFound";
import UpdateFormContainer from "./components/Products/Update/UpdateFormContainer";
import AddFormContainer from "./components/Products/Add/AddFormContainer";

class App extends Component {
  render() {
    return (
      <Main>
        <Switch>
          <Route exact path="/" component={ProductsContainer} />,
          <Route
            path="/edit/:id"
            render={({ match }) => (
              <UpdateFormContainer productId={parseInt(match.params.id)} />
            )}
          />
          ,
          <Route path="/add" component={AddFormContainer} />,
          <Route path="*" component={NotFound} />,
        </Switch>
      </Main>
    );
  }
}

export default App;
