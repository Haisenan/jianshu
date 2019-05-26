import React,{PureComponent} from 'react';
import { connect  } from 'react-redux';

import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
	DetailWarp,
	Header,
	Main,
	MainTou,
	MainXinxi,
ArticleXinxi,
	MainXinxiName,
	MainXinxiGuanZhu,
	ArtHot,
	ArtDate,
	ArtCodeNum,
	ArtLun,
	ArtLike,
	MainContent


} from './style';

class Detail extends PureComponent{
	render(){
		const { author,title,content } = this.props;
		const aid = this.props.match.params.id;
		return(

			<DetailWarp>
				<Header>
									
				</Header>
				<Main>
					<MainTou imgUrl="https://upload.jianshu.io/users/upload_avatars/52841/251f5481-67b6-4bf0-86f4-faac9768beb3.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp">
					</MainTou>

					<MainXinxi>

						<MainXinxiName>{author}</MainXinxiName>
						<MainXinxiGuanZhu>+关注</MainXinxiGuanZhu>
						<ArticleXinxi>
							<ArtHot>热度: 4.3</ArtHot>
							<ArtDate>2019.1.1 22:00:00</ArtDate>
							<ArtCodeNum>阅读量 2000</ArtCodeNum>
							<ArtLun>评论  +1 </ArtLun>
							<ArtLike>累积喜欢:70+</ArtLike>
						</ArticleXinxi>
					</MainXinxi>

					<MainContent 
						dangerouslySetInnerHTML = {{__html:content}}
					/>
				</Main>
				DetailWarp
			</DetailWarp>
		)
	}

	componentDidMount(){
		const aid = this.props.match.params.id;
		this.props.getDetail(aid);
	}
}

const mapState = (state)=>({
	author: state.get('detail').get('author'),
	content: state.get('detail').get('content')
});


const mapDispatch = (dispatch)=>({

	getDetail(aid){
		dispatch(actionCreators.getDetail(aid));
	}

});

export default connect(mapState,mapDispatch)(withRouter(Detail));