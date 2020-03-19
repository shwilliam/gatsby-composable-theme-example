import React from 'react'
import {Router} from '@reach/router'
import * as H from '../components/headings'
import * as Text from '../components/text'

const Home = () => (
  <div>
    <H.h1>Welcome</H.h1>
    <Text.Link to="/app/dashboard/">Dashboard</Text.Link>
  </div>
)

const Dash = () => (
  <div>
    <H.h1>Dashboard</H.h1>
    <Text.Link to="/app/">Welcome</Text.Link>
  </div>
)

export default props => (
  <div>
    <H.h2>Client-side React app</H.h2>

    <Text.Link to="/">Back to speedy static routes</Text.Link>

    <Router basepath="/app">
      <Home path="/" />
      <Dash path="dashboard" />
    </Router>
  </div>
)
