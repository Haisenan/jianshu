import styled from 'styled-components';

export const LoginWrap = styled.div`
	width:100%;
	height:100%;
	over-flow:hidden;
	padding:100px 0px;
	background:#F1F1F1;
	position:absolute;
	left:0;
	top:0;
	z-index:9999;
`;

export const APPTitle = styled.a`
	width:100px;
	height:46px;

	font-size:40px;
	color:#EA6F5A;
	position:absolute;
	left:30px;
	top:60px;
	background:url(${(props)=>props.imgUrl});
	background-size:100px;
	box-sizing:border-box;

`;

export const LoginKuang = styled.div`
margin:0px auto;

	width:400px;
	height:500px;
	background:#fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
	border-radius:4px;
`;


export const Tab = styled.div`
	height:100px;
	line-height:100px;
	font-size:20px;
	font-weight:bold;
	text-align:center;

	.active{
		color:#EA6F5A;
		border-bottom:3px solid #EA6F5A;
	}
	span{
		padding:13px 10px;
		cursor:pointer;
	}
	
	color:#B19696;
`;


export const FromLogin  = styled.div`
	height:200px;
	position:relative;
	padding-left:50px;
	padding-top:50px;
	input{

		vertical-align: middle;
		box-sizing: border-box;
		text-rendering: auto;
	    color: initial;
	    letter-spacing: normal;
	    word-spacing: normal;
	    text-transform: none;
	    text-indent: 0px;
	    text-shadow: none;
	    display: inline-block;
	    text-align: start;
	}
`;
export const UserInput  = styled.input.attrs({
	placeholder:' 手机号或邮箱'
})`
       			width:300px;
	    height: 50px;
	    margin-bottom: -1px;
	    padding: 4px 12px 4px 35px;
	    border: 1px solid #c8c8c8;
	    border-radius: 4px 4px  0 0;
	    background-color: hsla(0,0%,71%,.1);
	    vertical-align: middle;
`;	
export const PwdInput  = styled.input.attrs({
	placeholder:' 密码 ',
	type:'password	'
})`
	    width:300px;
	    height: 50px;
	    margin-bottom: 0;
	    padding: 4px 12px 4px 35px;
	    border: 1px solid #c8c8c8;
	    border-radius: 0 0 4px 4px;
	    background-color: hsla(0,0%,71%,.1);
	    vertical-align: middle;
`;

export const Submenu = styled.p`

	span{
		float:left;
		line-height:30px;
	}
`;

export const GouInput  = styled.input.attrs({
	type:'checkbox',

})`
	width:15px;
	line-height:30px;
	float:left;
    margin-top:10px;

`;

export const Probm = styled.a`
	margin-right:45px;
	float:right;
	line-height:30px;

`;

export const ButLogin = styled.a`
	clear:both;
	display:block;
	width:300px;
	height:40px;
	margin:25px 0px;
	text-align:center;
	line-height:40px;
	color:#fff;
	font-size:20px;
	background:#187CB7;
	border-radius:25px;

`;

export const Partner = styled.div`
	text-align:center;
	margin-left:-50px;

`;

export const ShejiaoSoft = styled.div`
	width:300px;
	height:30px;
	margin:20px auto;
	text-align:center;
	.iconfont{
		font-size:30px;
		margin-right:25px;
		cursor:pointer;
	}
`;




