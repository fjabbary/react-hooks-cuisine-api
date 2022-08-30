import React from 'react';

import Home from './Home';
import Header from '../components/Header';
import Cuisine from './Cuisine';
import SeachResults from './SeachResults';
import Recipe from './Recipe';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function pages() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cuisine/:name" element={<Cuisine />} />
                    <Route path="/search/:query" element={<SeachResults />} />
                    <Route path="/recipe/:id" element={<Recipe />} />
                </Routes>
            </Router>
        </div>
    )
}

export default pages