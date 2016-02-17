import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Start } from 'containers/Start';
import { List } from 'containers/List';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="start" component={Start} />
    <Route path="list" component={List} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
