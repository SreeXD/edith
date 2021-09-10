import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import Edith from './components/Edith/Edith';
import Intro from './components/Intro/Intro';

import './App.css';

const App = () => {
    const edith = useSelector(store => store);

    return (
        <div id="app">
            {edith.activated
                ? <Edith />
                : <Intro />
            }
        </div>
    );
}

export default App;