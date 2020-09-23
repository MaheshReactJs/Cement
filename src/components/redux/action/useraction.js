import {apiconfig} from '../../../constants/apiconfig';
import axios from 'axios';
import {login_sucess,login_failure,signup_sucess,signup_failure,login_fetch,sign_post} from "./actioncontants"


export const userlogin = ({email, password}) => {
    
  return  function (dispatch) {
    dispatch(onfetching())
    const body = {
      email: email,
      password: password,
    };
    const config = apiconfig('login.php', body, 'POST');
    axios(config)
      .then((response) => {
         console.log('response', response);
        return(dispatch(onsucess(response.data.content)))

      })
      .catch((error) => {
        dispatch(onerror(error))
      });
  };
  
  function onfetching(){
    return {
      type: login_fetch,
  }
  }
  function onsucess(data){
    return {
        type: login_sucess,
        data
    }
}

function onerror(errormsg){
    return {
        type: login_failure,
        errormsg
    }

}
};

export const usersignup = ({email, password,name,mobileno}) => {
    
    return  function (dispatch) {
      dispatch(onposting())
      const body = {
        
            email: email,
            password: password,
            username: name,
            mobileno: mobileno
        
      };
      const config = apiconfig('signup.php', body, 'POST');
      // console.log(config)
      axios(config)
        .then((response) => {
          console.log('response', response);
          return(dispatch(onsucessign(response.data)))
  
        })
        .catch((error) => {
            console.log('error', error);
          dispatch(onerrorsign(error))
        });
    };

    function onposting(){
      return {
        type: sign_post,
    }
  }
  


  
    function onsucessign(data){
      return {
          type: signup_sucess,
          data
      }
  }
  
  function onerrorsign(errormsg){
      return {
          type: signup_failure,
          errormsg
      }
  
  }
  };


