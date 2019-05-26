import axios from 'axios';
import { actionTypes } from '../store';
import { fromJS } from 'immutable';

const getChu = (result)=>({
	type:actionTypes.CSH_HOME,
	topicList:result.topicList,
	newsList:result.newsList,
	RecommendList:result.RecommendList,
	authorTui:result.authorTui
})


const getHomePageList = (list,nextPage)=>({
	type:actionTypes.HOME_PAGE_LIST,
	list:fromJS(list.newsList),
	nextPage
})




export const getChushihua = ()=> {
	return (dispatch) =>{
		axios.get('/api/home.json').then((res)=>{
		const result = res.data.homeData;
		dispatch(getChu(result));
		})
	}

}




export const getPageList=(morePage)=>{
	return(dispatch)=>{
		axios.get('/api/homeList.json?page='+ morePage).then((res)=>{
		const result = res.data.data;
		dispatch(getHomePageList(result,morePage + 1));
		})
	}
}


export const toggleShow = (boolean)=>({
	type:actionTypes.BACK_TOGGLE_SHOW,
	show:boolean
})