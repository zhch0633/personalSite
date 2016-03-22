import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/lib/circular-progress';

import App from './components/App.jsx'


//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin

injectTapEventPlugin();
var rawDocument = document.getElementById('content').innerHTML;
ReactDOM.render(<App url="http://localhost:3001/" avatar = "http://stanford.edu/~trzhao/CS73N/img/mikuv3-head.png"/>,document.getElementById('app'));
