import  styled  from 'styled-components';


export const DetailWarp = styled.div`
padding:20px;
	width:620px;
	margin:0 auto;

`;

export const Header = styled.h2`
	font-size:30px;
	line-height:50px;
	font-weight:blod;
	padding-bottom:20px;
`;

export const Main = styled.div`
	
`;

export const MainTou = styled.div`
	width:60px;
	margin:0px 10px;
	float:left;
	height:60px;
	background:url(${(props)=>props.imgUrl});
	background-size:60px;
	border-radius:50%;
`;

export const MainXinxi = styled.div`
	width:540px;
	float:left;
	height:70px;
	padding:10px 0px;
`;

	

export const MainXinxiName = styled.h2`
	font-size:15px;
	float:left;

`;

export const MainXinxiGuanZhu = styled.a`

	font-size:13px;
	line-height:20px;
	display:block;
	width:45px;
	height:20px;
	color:#fff;
	background:#42c02e;
	text-align:center;
	float:left;
	border-radius:4px;
	margin:0px 8px;
`;

export const ArticleXinxi = styled.div`
	clear:both;
	line-height:30px;
	span{
		margin-right:10px;
	}
`;

export const ArtHot = styled.span`
	
`;
export const ArtDate = styled.span`
	
`;
export const ArtCodeNum = styled.span`
	
`;
export const ArtLun = styled.span`
	
`;
export const ArtLike = styled.span`
	
`;



export const MainContent  = styled.div`
	width:inhirt;
	font-size:20px;

	h2{
		text-align:left;
		font-size:25px;
		font-weight:blod;	
		line-height:50px;
	}

	h3{
		font-size:20px;
		line-height:50px;

	}

	a{
		font-size:18px;
		color:#cfcfcf;
	}


	
`;