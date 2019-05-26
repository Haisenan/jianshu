import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer }  from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as writeReducer } from '../pages/write/store';
// 拿过来header  里面的 store{reducer}   其实还是reducer


export default combineReducers({
	header : headerReducer,
	home : homeReducer,
	detail :detailReducer,
	login:loginReducer,
	write:writeReducer
});


