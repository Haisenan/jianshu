import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {
	LoginWrap,
	APPTitle,
	LoginKuang,
	Tab,
	FromLogin,
	UserInput,
	PwdInput,
	GouInput,
Submenu,
	Probm,
	ButLogin,
	Partner,
	ShejiaoSoft
} from './style';
import { GlobalStyle } from '../../statics/iconfont';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent{
	render(){
		const { login }  =  this.props;
		if(!login){
			return(
				<LoginWrap>
				<GlobalStyle/>
					<APPTitle imgUrl='http://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png'></APPTitle>
				
					<LoginKuang>
						<Tab>
							<span className="active">登陆</span>
							·
							<span>注册</span>
						</Tab>

						<FromLogin>
							<UserInput ref={(input)=>{this.account = input}}/>
							<PwdInput ref={(input)=>{this.password = input}}/>
							<br/>
							<br/>
							<Submenu>
								<GouInput/>
								<span>记住我</span>

								<Probm>登陆遇到的问题</Probm>
							</Submenu>
							<br/>
							<br/>
							<ButLogin onClick={()=>this.props.ButLogin(this.account,this.password)}>登录</ButLogin>

							<Partner>
								--------社交登录--------
								<ShejiaoSoft>
									<i className="iconfont">&#xe632;</i>
									<i className="iconfont">&#xe727;</i>
									<i className="iconfont">&#xe67a;</i>
								</ShejiaoSoft>		
								
							</Partner>
						</FromLogin>
					</LoginKuang>
				</LoginWrap>
			)
		}else{
			return <Redirect to="/" />
		}
	}
}



const mapState = (state)=>({
	login:state.getIn(['login','login'])
});

const mapDispatch = (dispatch)=>({

	ButLogin(account,pwd){
		dispatch(actionCreators.ButLogin(account.value,pwd.value));
	}

});


export default connect(mapState,mapDispatch)(Login);