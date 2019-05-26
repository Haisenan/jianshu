import axios from 'axios';
import { actionTypes } from '../store';


const changeDetail = (author,content)=>({
	type:actionTypes.CHANGE_DETAIL,
	author,
	content
})

export const getDetail = (id)=>{
	return (dispatch)=>{
		axios.get('/api/detailArt.json?id=' + id).then((res)=>{
			const result = res.data.data;
			dispatch(changeDetail(result.author,result.content));
		});
	}
}