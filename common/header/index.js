import React,{ PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Action,
  Register,
  CodeArt,
  NavSearch,
  PerBao,
  SearchContentList,
  SearchTitle,
  SearchSpan,
  SearchList,
  SearchListItem


} from './style';

import { CSSTransition } from 'react-transition-group';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { GlobalStyle } from '../../statics/iconfont';

import { actionCreators as loginactionCreators} from '../../pages/login/store';

import {
  actionCreators
} from './store';
 
{
  // 无状态组件
}

class Header extends PureComponent{
  render(){
    const {  focus,handleInputFocus,handleInputBlur ,list , login} = this.props;

    return(
      <HeaderWrapper>
      <GlobalStyle/>
      <Link to="/">
        <Logo/>
      </Link>
     
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">关注</NavItem>
          <NavItem className="left">消息</NavItem>

          <PerBao>
            {
                //input 搜索框
            }
            <CSSTransition
              in={focus}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                onFocus={handleInputFocus.bind(this,list)}
                onBlur={handleInputBlur.bind(this)}
                className={focus?'focus':''}
               ></NavSearch>
             </CSSTransition>
            {
                //字体图标
            }
            <i className={focus?'iconfont focus zoom':'iconfont zoom'}>&#xe637;</i>

            {
              this.SearchTips(focus)
            }

          </PerBao>

          {
            login? 
            <Link to="/"> <NavItem className="right" onClick={this.props.loginEdit}>退出</NavItem> </Link>: 
            <Link to="/login"> <NavItem className="right">登陆</NavItem> </Link>
          }


         
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>

          <Action>

            <CodeArt className="right">
							<Link to="/write">
                <i className="iconfont">&#xe615;</i>写文章
							</Link>
            </CodeArt>
            <Register className="right">
              注册
            </Register>
          </Action>

        </Nav>
      </HeaderWrapper>
    )
  }

    SearchTips=()=>{

      const {focus, list, page ,totalpage, show ,handleMouseEnter,handleMouseLeave ,handleChangePage} = this.props;
      const newList = list.toJS();
      const pageList = [];


      for (let i = (page - 1) * 10; i < page * 10; i++) {
          if(newList.length){
            pageList.push(
              <SearchListItem key={newList[i]}>{newList[i]}</SearchListItem>
          );
        }
      }

    if(focus || show){
      return(
          <SearchContentList 
           onMouseEnter={handleMouseEnter.bind(this)}
           onMouseLeave={handleMouseLeave.bind(this)}
          >
             <SearchTitle>热门搜索</SearchTitle>
             <SearchSpan onClick={handleChangePage.bind(this,page,totalpage,this.spin)}>

                     <i ref={(icon)=>{this.spin = icon}} className="iconfont spin">&#xe858;</i>

                 换一批
              </SearchSpan>
             <SearchList>
                 {pageList}
             </SearchList>
          </SearchContentList>
      )
    }else{
      return null; 
    }
  }
}

 

const mapStateToProps = (state)=>{
    return{

      focus:state.getIn(['header','focus']),
      list :state.getIn(['header','list']),
      page:state.getIn(['header','page']),
      show:state.getIn(['header','show']),
      totalpage:state.getIn(['header','totalpage']),
      login:state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{

       handleInputFocus(list){
        if(list.size > 0){
            dispatch(actionCreators.inputFocus());
        }else{
          dispatch(actionCreators.getList());
          dispatch(actionCreators.inputFocus());
        }
          
     
        },

        handleInputBlur(){
           dispatch(actionCreators.inputBlur());
        },

        handleMouseEnter(){
          dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave(){
          dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page,totalpage,spin){
         

          let rotate = spin.style.transform.replace(/[^0-9]/ig,'');
          
          if(rotate){
            rotate = parseInt(rotate,10);
          }else{
            rotate = 0;
          }

          spin.style.transform = 'rotate(' + (rotate + 1000) + 'deg)';

          if(page < totalpage){
              dispatch(actionCreators.changePage(page + 1));
          }else{
            dispatch(actionCreators.changePage(1));
          }
        
        },
				
				loginEdit(){
					dispatch(loginactionCreators.loginEdit());
				}

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
