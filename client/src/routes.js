import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import AllRecipes from './components/allrecipes';
import RecipeDetails from './components/recipedetails';
import MyRecipes from './components/myrecipes';
import MyFavorites from './components/favorites';

const generalRoutes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

const protectedRoutes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/recipes" component={AllRecipes} />
    <Route exact path="/myrecipes" component={MyRecipes} />
    <Route path="/recipe/:id" component={RecipeDetails} />
    <Route path="/favorites" component={MyFavorites} />
    <Redirect to="/" />
  </Switch>
);

export default (
  localStorage.getItem('token') ? protectedRoutes : generalRoutes
);
