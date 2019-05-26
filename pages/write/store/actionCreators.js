
import { fromJS } from 'immutable';
import axios from 'axios';
import { actionTypes } from '../store';

const loginAction = ()=>({
	type:actionTypes.LOGINACTION,
	value:true
})


export const ButLogin = (user,pwd)=>{
	return (dispatch)=>{
		axios.get('/api/login.json?account=' + user + '&password=' + pwd).then((res)=>{
			const result = res.data.data;
			if(result.username == user && result.password == pwd){
				alert('登陆成功');

				dispatch(loginAction());
			}else{
				alert('账号或者密码错误');
			}
		})
	}
}


export const loginEdit = ()=> ({
	type:actionTypes.LOGINEDIT,
	value:false
})


