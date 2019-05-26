import React,{PureComponent} from 'react';

import { connect } from 'react-redux';
import {
	RecommendWrap,
	RecommendItem

} from '../style';
class Recommend extends PureComponent{
	render(){
		return(

			<RecommendWrap>
				{
					this.props.RecommendList.map((Item,index)=>{
						return(
								<a><RecommendItem key={Item.get('id')} imgUrl={Item.get('imgUrl')}/></a>
							)
					})
				}
			</RecommendWrap>
		)
	}
}

const mapState = (state)=>({
	RecommendList:state.get('home').get('RecommendList'),
})

export default connect(mapState,null)(Recommend);