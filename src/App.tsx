import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import {Footer, Navbar, Path} from './components';

export const App: React.FC = () => (
  <Router>
    <Navbar />
    <hr className={'bottom-border'} />
    <Path />
    <Footer />
  </Router>
)
