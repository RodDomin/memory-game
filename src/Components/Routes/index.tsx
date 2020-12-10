import { useContext, useEffect, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { UserContext } from '../../Context/UserContenxt';
import Game from '../../Pages/Game';
import Start from '../../Pages/Start';

function Routes() {
  const [history] = useState(createBrowserHistory());
  const [state] = useContext(UserContext);

  useEffect(() => {
    const { pathname } = history.location;
    const { name, difficulty } = state;

    if (pathname === '/game' && (!name || !difficulty)) {
      history.push('/');
    }
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/game" exact component={Game} />
      </Switch>
    </Router>
  );
}

export default Routes;
