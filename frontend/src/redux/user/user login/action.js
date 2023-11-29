import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const loginData = (payload) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
   return axios.post(`https://clumsy-miniskirt-tuna.cyclic.app/users/login`,payload)
    .then((res)=>{
      if(res.data.msg=="login successful"){
         dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
         localStorage.setItem("userToken", JSON.stringify(res.data.token));
      }
        return res.data
    })
    .catch((err)=>{
      dispatch({ type: LOGIN_FAILURE });
     console.log(err);
    })
    // dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    // return res
 
    
  
};

// https://clumsy-miniskirt-tuna.cyclic.app/users/login
