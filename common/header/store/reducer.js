import * as actionTypes from './actionTypes';

import { fromJS } from 'immutable';

const defaultState = fromJS({
	 focus:false,
	 list:[],
	 page:1,
	 totalpage:1
});

export default (state = defaultState ,action)=>{

	switch(action.type){

		case actionTypes.INPUTFOCUS:
		return state.set('focus',true);

		case actionTypes.INPUTBLUR:
		return state.set('focus',false);

		case actionTypes.CHANGELIST:
		return state.merge({
			list:action.data,
			totalpage:action.totalpage
		})

		case actionTypes.MOUSEENTER:
		return state.set('show',true);

		case actionTypes.MOUSELEAVE:
		return state.set('show',false);

		case actionTypes.CHANGEPAGE:
			return state.set('page',action.page);
			
		default :
		  return state;
	}
   return state;
}