import {apiconfig} from '../../../constants/apiconfig';
import axios from 'axios';
import {
  app_info_status,
  app_info_sucess,
  app_info_failure,
  app_info_update_failure,
  app_info_update_status,
  app_info_update_sucess
} from './actioncontants';

export const app_info_action = ({code}) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      code: code,
    };
    const config = apiconfig('get_appinfo.php', body, 'POST');
    // console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        // console.log('response', response);
        dispatch(onsucess(response.data.content));
      })
      .catch((error) => {
        // console.log("helloe",error)
        dispatch(onerror(error));
      });
  };

  function onfetching() {
    return {
      type: app_info_status,
    };
  }
  function onsucess(data) {
    return {
      type: app_info_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: app_info_failure,
      errormsg,
    };
  }
};

export const app_info_update = ({name,prcolor,secolor,rsa_code}) => {
  // console.log("action",name,prcolor,secolor,rsa_code)
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      
        rsa_code:rsa_code,
        appname:name,
        pcolor:prcolor,
        scolor:secolor
    
    };
    const config = apiconfig('update_appinfo.php', body, 'POST');
    // console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        // console.log('response', response);
        return dispatch(onsucess(body));
      })
      .catch((error) => {
        // console.log("helloe",error)
        dispatch(onerror(error));
      });
  };

  function onfetching() {
    return {
      type: app_info_update_status,
    };
  }
  function onsucess(data) {
    return {
      type: app_info_update_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: app_info_update_failure,
      errormsg,
    };
  }
};
