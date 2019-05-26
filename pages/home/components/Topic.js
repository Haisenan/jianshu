import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {
	TopicWrap,
	TopicItem,
	TopicTip,
	TopicMore

} from '../style';

class Topic extends PureComponent{
	render(){
		return(
			<TopicWrap>
				{

					this.props.list.map((Item,index)=>{
						return(

								<TopicItem key={Item.get('id')}>
									<img className="Tipimg"
									 src={Item.get('imgUrl')}
									 />
									<TopicTip>{Item.get('title')}</TopicTip>
								</TopicItem>

							)
					})
				}


				<TopicMore>
					查看更多--->>
				</TopicMore>

			</TopicWrap>
		)
	}
}

const mapState = (state)=>({
	list : state.get('home').get('topicList')
});



export default connect(mapState,null)(Topic);