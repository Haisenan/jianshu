import React,{PureComponent} from 'react';
import {  connect  } from 'react-redux';
import {
	WriterWrap,
	Writerheader,
	Writerauthor,
	Touxiang,
	Writerauthorname,
	Writerauthormsg,
	Guanzhu,
	WriterItem
} from '../style';
class Writer extends PureComponent{
	render(){
		return(

			<WriterWrap>
				<Writerheader>
					推荐作者

					<span onClick={this.handleChangePage.bind(this)}><i ref={(icon)=>{this.spin = icon}} className="iconfont spin">&#xe858;</i>换一换</span>
				</Writerheader>

				{

					this.props.authorTui.map((Item,index)=>{
						return(
							<Writerauthor key={Item.get('id')}>
								<Touxiang touxiang={Item.get('touxiang')}>
								</Touxiang>
								<WriterItem>
									<Writerauthorname>{Item.get('author')}</Writerauthorname>
									<Guanzhu src={Item.get('guanzhuLink')}>+ 关注</Guanzhu>
									<Writerauthormsg>{Item.get('msg')}</Writerauthormsg>
								</WriterItem>
							
							</Writerauthor>
						)
					})

				}
				


			</WriterWrap>
		)
	}

	handleChangePage(){
         alert('更新page');
         
      }
}

const mapState = (state)=>({
	authorTui:state.get('home').get('authorTui')
});



const mapDisPath = (dispath)=>({

})

export default connect(mapState,null)(Writer);