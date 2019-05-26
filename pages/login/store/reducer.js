import * as actionTypes from './actionTypes';

import { fromJS } from 'immutable';

const defaultState = fromJS({
	login:false
});

export default (state = defaultState ,action)=>{

	switch(action.type){
		case actionTypes.LOGINACTION:
		return state.set('login',action.value)
		
		case actionTypes.LOGINEDIT:
			return state.set('login',action.value)
		
		default :
		  return state;
	}
   return state;
}