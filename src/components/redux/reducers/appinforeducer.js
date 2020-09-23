import { act } from "react-test-renderer";

const colorinitialState = {
    app_name:"",
    app_logo:"",
    app_pcolor:"",
    app_scolor:"",
    isfetching:false,
    error:false,
    errormsg:"",
    rsacode:"",
    sucess:false
  };

  const appinforeducer = (state = colorinitialState, action) => {
    // console.log("hello")

    switch (action.type) {

        case 'APP_INFO':
            return{
              ...state,
              isfetching_login:true
            }
          case 'APP_INFO_SUCESS':
            // console.log("ddd",action.data)
            return {
              ...state,
              app_pcolor: action.data.primary_color,
              app_scolor:action.data.secondary_color,
              app_name:action.data.name,
              rsacode:action.data.rsa_code,
              isfetching_login:false
            };
      
          case 'APP_INFO_FAILURE':
            return {
              ...state,
              isfetching_login:false,
              error:true,
              errormsg:action.errormsg
            };

            /////

            case 'APP_UPDATE_INFO':
              return{
                ...state,
                isfetching_login:true,
                error:false
              }
            case 'APP_INFO_UPDATE_SUCESS':
              // console.log("ddd",action.data)
              return {
                ...state,
                app_pcolor: action.data.pcolor,
                app_scolor:action.data.scolor,
                app_name:action.appname,
                isfetching_login:false,
                sucess:true
              };
        
            case 'APP_INFO_UPDATE_FAILURE':
              return {
                ...state,
                isfetching_login:false,
                error:true,
                errormsg:action.errormsg
              };




            default:
                return state;


    }




  };
  export default appinforeducer;