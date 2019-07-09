import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import Task from '../components/task/Task'
import Login from '../components/login/Template'
import Project from '../components/project/Project'
import AddProject from '../components/project/AddProject'

export default () => (
  <BrowserRouter>
    <Switch name="http://localhost:3000">
      <Route path="/" exact component={Login} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/task" component={Task} />
      <Route path="/project/add" exact component={AddProject} />
      <Route path="/project/:id" component={Project} />
    </ Switch>
  </ BrowserRouter>
)