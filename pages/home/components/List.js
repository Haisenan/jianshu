import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	ListWrap,
	ListItem,
	ListContent,
	ListTitle,
	Listmsg,
	Listmenu,
	Listauthor,
	Listmenulink,
	AddMoreList

} from '../style';

import {actionCreators} from '../store';
class List extends PureComponent{
	render(){

		const { newsList,addMoreList ,morePage}  =  this.props;

		return(
			<ListWrap>
			{
				newsList.map((Item,index)=>{
					return(
						<Link to={'detail/' + Item.get('id')}>
							<ListItem key={index}>
								<ListContent>
									<ListTitle><a>{Item.get('title')}</a></ListTitle>
									<Listmsg>{Item.get('msg')}</Listmsg>
								</ListContent>
								<a><img className="listimg" src={Item.get('imgUrl')}/></a>
								<Listmenu>
									<Listauthor>{Item.get('author')}</Listauthor>
									<Listmenulink>  <i className='iconfont'>&#xe628;</i>{Item.get('pinglun')}</Listmenulink>
									<Listmenulink>  <i className='iconfont'>&#xe625;</i>{Item.get('guanzhu')}</Listmenulink>
									<Listmenulink>  <i className='iconfont'>&#xe655;</i>{Item.get('fenxiang')}</Listmenulink>
								</Listmenu>
							</ListItem>
						</Link>
					)
				})
			}

			<AddMoreList onClick={()=>addMoreList(morePage)}>加载更多</AddMoreList>
			</ListWrap>
		)
	}
}

const mapState = (state)=>({
	newsList : state.get('home').get('newsList'),
	morePage:state.get('home').get('morePage')
});

const mapDispatch = (dispatch) =>({
	addMoreList(morePage){
		const action = actionCreators.getPageList(morePage);
		dispatch(action);
	}
});


export default connect(mapState,mapDispatch)(List);