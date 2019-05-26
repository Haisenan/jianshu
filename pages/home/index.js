import React,{PureComponent} from 'react';
import { connect  } from 'react-redux';
import { actionCreators } from './store';
import {
	HomeWrap,
		HomeLeft,
		HomeRight			
} from './style';

import  List  from './components/List';
import  Topic  from './components/Topic';
import  Recommend  from './components/Recommend';
import  Download from './components/Download';
import  Writer  from './components/Writer';


import { BackTop } from './style';
class Home extends PureComponent{

		backTop(){
			window.scrollTo(0,0);
		}

	render(){
		return(

			<HomeWrap>
				<HomeLeft>
					<img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
					<Topic/>
					<List/>
				</HomeLeft>
				<HomeRight>
					<Recommend/>
					<Download/>
					<Writer/>
				</HomeRight>
				{
					this.props.showBackTop?<BackTop onClick={this.backTop}>返回顶部</BackTop>:null
				}
				
			</HomeWrap>
		)
	}

	componentDidMount(){
		this.props.chushihuaData();
		this.bindEvents();
	}

	bindEvents(){
		window.addEventListener('scroll',this.props.changeScrollTopShow);
	}

	componentWillUnMoount(){
		window.removeEventListener('scroll',this.props.changeScrollTopShow);
	}
}


const mapState = (state)=>({
	showBackTop:state.get('home').get('showBackTop')

});

const mapDispatch = (dispatch)=>({
	chushihuaData(){
		
		dispatch(actionCreators.getChushihua());
	},
	changeScrollTopShow(){
		if(document.documentElement.scrollTop > 200){
			dispatch(actionCreators.toggleShow(true));
		}else{
			dispatch(actionCreators.toggleShow(false));
		}
		
	}

});

export default connect(mapState,mapDispatch)(Home);