import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';


const Hello = ()=>{
  return (
    <h1>Hello, world!</h1>
  );
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="hello" component={Hello} />
    <Route path="posts/new" component={PostsNew} />
  </Route>
);
