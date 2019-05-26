import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';



const changeList = (data) => ({
	type: actionTypes.CHANGELIST,
	data: fromJS(data),
	totalpage: Math.ceil(data.length / 10)
});


export const inputFocus = ()=>({
	 type:actionTypes.INPUTFOCUS
});

export const inputBlur = () =>({
	 type:actionTypes.INPUTBLUR
});

export const mouseEnter= () =>({
	type:actionTypes.MOUSEENTER
});

export const mouseLeave = () =>({
	type:actionTypes.MOUSELEAVE
});

export const changePage = (page) =>({
	type:actionTypes.CHANGEPAGE,
	page
})



// 异步请求数据 获取搜索框里面的数据
export const getList = () =>{
	return(dispath) =>{
		axios.get('/api/headerList.json').then((res)=>{
			const data = res.data;
			dispath(changeList(data.listData));


		}).catch(()=>{
			console.log('err:1','msg:not found  404');
		});
	}
};







