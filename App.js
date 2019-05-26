import React from 'react';
import { GlobalStyle } from './style';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

// css
import './reset.css';

// pages 

import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';

// common
import Header from './common/header';


function App() {
  return (
    <Provider store={store}>
    	<Router>
		{
			<Header/>
		}
	    	<div>
	    		<Route path='/' exact component={Home}></Route>
	    		<Route path='/login' exact  component={Login}></Route>
	    		<Route path='/write' exact  component={Write}></Route>
				
	    		<Route path='/detail/:id' exact  component={Detail}></Route>
	    		
	    	</div>
	    </Router>
		    
    </Provider>
  )
}

export default App;
