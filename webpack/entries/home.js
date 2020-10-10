import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../../components/home';

hydrate(<Home />, document.getElementById('root'));