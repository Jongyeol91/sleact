import React, { FC } from 'react';
import { Switch, Redirect, Route } from 'react-router';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';

const App: FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="login" />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <div>Hello world</div>
    </Switch>
  );
};

export default App;