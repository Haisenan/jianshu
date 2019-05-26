import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
	return <div>页面正在加载中 ...</div>
	}
});

export default  ()=> <LoadableComponent/>
