import React from 'react';
import { hydrate } from 'react-dom';
import FirstSsr from '../../components/firstssr';

hydrate(<FirstSsr />, document.getElementById('root'));