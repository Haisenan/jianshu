import styled from 'styled-components';

export const HomeWrap = styled.div`
padding-top:20px;
	over-flow:hidden;
	width:960px;
	margin:0 auto;

`;

export const HomeLeft = styled.div`
	width:630px;
		padding-bottom:100px;
	float:left;
	.banner-img{
		width:630px;
		height:300px;
		border-radius:15px;
	}
`;

export const HomeRight = styled.div`
	width:280px;
	float:right;
		padding-bottom:100px;
`;



// Tpic  开始 


export const TopicWrap = styled.div`
	clear:both;
	width:630px;
	padding-top:10px;
`;

export const TopicItem = styled.div`
	border-radius:4px;
	padding:0px 20px 0px 0px;
	height:32px;
	display:hidden;
	float:left;
	cursor:pointer;
	margin:11px 10px 5px 0px;

	background:#eee;
	color:#000;
	.Tipimg{
		height:32px;
		float:left;
		margin-right:13px;
	}
`;

export const TopicTip = styled.div`
	float:left;
	line-height:32px;


`;
export const TopicMore = styled.a`
	display:block;
	float:left;
	line-height:50px;
	margin-left:20px;

`;

// Tpic  结束 





// ListItem  开始

export const ListWrap = styled.div`
	clear:both;
	padding-top:10px;
`;	

export const ListItem = styled.div`
	.listimg{
		width:23%;
		height:90px;
		float:right;
		border-radius:8%;

	}

	margin:25px 0px;

`;	

export const ListContent = styled.div`
	float:left;
	width:75%;
	over-flow：hidden;

`;

export const ListTitle = styled.div`
	font-size:20px;
	line-height:40px;
	font-weight:bold;
`;

export const Listmsg = styled.div`
	font-size:12px;
	color:#777;
	line-height:20px;
`;


export const Listmenu = styled.p`
	clear:both;
	height:20px;
`;

export const Listauthor = styled.span`
	font-size:13px;
	line-height:18px;
	float:left;
	color:#666;
`;
export const Listmenulink = styled.a`
	float:left;
	display:block;
	padding:0px 10px;
	font-size:13px;
	line-height:18px;
	i{
		margin:0px 5px;
	}
`;


// ListItem  结束

//  推进栏目 开始
export const RecommendWrap = styled.div`
	width:inhirt;
`;


export const RecommendItem = styled.div`
	width:inhirt;
	height:50px;
	border-radius:4px;
	background:url(${(props)=> props.imgUrl});
	box-sizing: border-box;
	background-size:100%;
	margin-bottom:5px;
`;

// 推荐栏目 结束 


// Download
export const DownloadWrap = styled.div`
	width:inhirt;
	height:80px;
	border:1px solid #eee;
	border-radius:4px;
	margin-top:5px;
`;

export const Erweima = styled.div`
	width:60px;
	height:60px;

	background:url(${(props)=>props.AppImg});
	background-size:100%;
	float:left;
	margin:10px;
	
`;

export const Downloadlink = styled.a`
	font-size:15px;
	line-height:30px;
	float:left;
	margin-top:10px;

`;
export const Downloadmsg = styled.span`
	font-size:13px;
	line-height:25px;
	float:left;
	color:#5c5c5c;
`;
// Download




// WriterWrapper  开始  推荐作者 
export const WriterWrap = styled.div`
	width:inhirt;
	margin-top:10px;
	height:500px;
	over-flow:hidden;
	position:relative;

`;

export const Writerheader = styled.div`
	height:30px;
	line-height:40px;
	color:#969696;
	font-size:15px;
	float:left;
	margin-left:15px;
	span{
		.iconfont{
			&.spin{
	          display:block;
	          float:left;
	          font-size:9px;
	          margin-right:8px;
	          transition:all .2s ease-in;
	          transform-origin:center center;

	        }
		}
		cursor:pointer;
		position:absolute;
		right:15px;
		top:3px;
		font-size:13px;
		float:right;
	}
`;



export const Writerauthor = styled.div`
	clear:both;
	width:inhirt;
	height:65px;
	over-flow:hidden;

`;

export const Touxiang = styled.div`
	width:48px;
	height:48px;

	background:url(${(props)=>props.touxiang});
	background-size:100%;

	float:left;
	border-radius:50%;
	margin:5px 10px;
	float:left;
	
`;
export const WriterItem = styled.div`
	width:70%;
	over-flow:hidden;
	float:left;
`;

export const Writerauthorname = styled.a`
	display:block;
	width:80%;;
	font-size:15px;
	padding-top:10px;
	line-height:25px;
	float:left;

`;
export const Writerauthormsg = styled.span`
	font-size:12px;
	line-height:20px;
	color:#5c5c5c;
	float:left;
	clear:both;
`;
export const Guanzhu = styled.a`
	color:#42c02e;
	line-height:25px;
	margin:5px 0px 0px 0px;
	float:right;
`;




// 加载更多  ajax请求 page
export const AddMoreList = styled.div`
	width:inhirt;
	height:45px;
	font-size:16px;
	line-height:45px;
	text-align:center;
	background:skyblue;
	border-radius:8px;
	cursor:pointer;	
`;


// 返回顶部
 export const BackTop = styled.div`
 	width:60px;
 	height:60px;
 	background:#ccc;
 	line-height:60px;
 	text-align:center;
 	position:fixed;
 	right:50px;
 	bottom:50px;
 	cursor:pointer;
 `;