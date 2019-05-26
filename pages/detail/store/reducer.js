import { actionTypes } from '../store';

import { fromJS } from 'immutable';

const defaultState = fromJS({
	author:'',
	content:''
});

export default (state = defaultState ,action)=>{

	switch(action.type){
		case actionTypes.CHANGE_DETAIL:
			return state.merge({
				author:fromJS(action.author),
				content:fromJS(action.content)
			});
		default :
		  return state;
	}
   return state;
}