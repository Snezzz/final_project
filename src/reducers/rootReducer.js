import {servicesReducer,serviceReducer} from "./serviceReducer";
import {combineReducers} from "redux";
import {userReducer,loginReducer} from "./userReducer";
import {recordsReducer,recordsType} from "./recordsReducer"
import {companyReducer,discountsReducer} from "./companyReducer";

export const rootReducer = combineReducers({
    servicesReducer,
    userReducer,
    loginReducer,
    recordsReducer,
    recordsType,
    serviceReducer,
    companyReducer,
    discountsReducer
    }
);
