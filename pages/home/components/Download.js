import React,{ PureComponent} from 'react';
import {

	DownloadWrap,
	Erweima,
	Downloadlink,
	Downloadmsg
} from '../style';

class Download extends PureComponent{
	render(){
		return(

			<DownloadWrap>
				<Erweima AppImg="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png">
				</Erweima>
				<Downloadlink>

					下载简书 App <span>&gt;</span>
					
				</Downloadlink>
				<Downloadmsg>随时随地发现和创作内容</Downloadmsg>
			</DownloadWrap>
		)
	}
}



export default Download;