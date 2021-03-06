import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div classNameName="App">
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

    </div>
        )
    }


export default App
