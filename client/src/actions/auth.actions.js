import { authConstants } from "./constants.js";
import axios from "../helpers/axios.js";



export const login = (user)=>{
    console.log(user);

    return (dispatch) =>{

      dispatch({ type: authConstants.LOGIN_REQUEST });
      const res =  axios.post("/login", {
        ...user
      });
console.log(res);
       if(res.status === 200){
         const { token, user } = res.data;
         localStorage.setItem('token', token);
         dispatch({
           type: authConstants.LOGIN_SUCCESS,
           payload: {
             token, user
           }
         });
       }else
           if(res.status === 400){
             dispatch({
               type: authConstants.LOGIN_FAILURE,
               payload: {
                 error: res.data.error
               }
             });
           }


    }
}
