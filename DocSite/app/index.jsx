import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/lib/circular-progress';

import Resume from './components/Resume.jsx'


//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
var rawDocument = document.getElementById('content').innerHTML;
ReactDOM.render(<Resume/>,document.getElementById('app'));
//ReactDOM.render(<CircularProgress/>, document.getElementById('app'));
//ReactDOM.render(<App content = {rawDocument}/>, document.getElementById('app'));
