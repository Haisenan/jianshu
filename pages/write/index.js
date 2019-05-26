import React,{PureComponent} from 'react';
import { connect } from 'react-redux';


import { Redirect } from 'react-router-dom';

class Login extends PureComponent{
	render(){
		const { login }  =  this.props;
		if(login){
			return(
				<div>写文章</div>
			)
		}else{
			return <Redirect to="/login" />
		}
	}
}



const mapState = (state)=>({
	login:state.getIn(['login','login'])
});

const mapDispatch = (dispatch)=>({



});


export default connect(mapState,mapDispatch)(Login);