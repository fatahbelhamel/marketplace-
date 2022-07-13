import { authConstants } from "../actions/constants.js";

const initState = {
    token : null,
    user :{
        nom : "",
        prenom : "",
        email : "",
        adress : "",
        numero : ""
    },
    authentication: false,
    authenticating: false
};

 const authReducers = (state = initState, action)=>{
  console.log(action.type);
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticating: true
            }
            break;    
    }
    return state;
}

export default authReducers;