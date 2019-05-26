import { fromJS } from 'immutable';
import {
	actionTypes
} from '../store';
const defaultState = fromJS({
	topicList:[],
	newsList:[],
	RecommendList:[],
	authorTui:[],
	morePage:1,
	showBackTop:true
});


export default (state = defaultState,action)=>{
	switch (action.type){
		case actionTypes.CSH_HOME:
			return state.merge({
				topicList:fromJS(action.topicList),
				newsList:fromJS(action.newsList),
				RecommendList:fromJS(action.RecommendList),
				authorTui:fromJS(action.authorTui)	
			})
		case actionTypes.HOME_PAGE_LIST: 

			return state.merge({
				newsList:state.get('newsList').concat(action.list),
				morePage:action.nextPage
			})
		case actionTypes.BACK_TOGGLE_SHOW: 

			return state.set('showBackTop',action.show);
		



		default:
			return state;
	}

} ;