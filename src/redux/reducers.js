import { combineReducers } from 'redux'
import { forms } from '../components/form/redux/reducers'
import { login_info } from "../components/login/redux/reducers";
import { contact_info } from "../components/contacts/redux/reducers";

const AppStore = combineReducers({
    forms,
    login_info,
    contact_info
});

export default AppStore;