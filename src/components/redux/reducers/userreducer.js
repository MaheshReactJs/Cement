const userinitialState = {
  email: '',
  username: '',
  mobileno: '',
  userid:'',
  isfetching_login:false,
  isposting_signup:false,
  error:false,
  errormsg:""
};

const userReducer = (state = userinitialState, action) => {
  switch (action.type) {

    // Login reducer
    case 'LOGIN_FETCHING':
      return{
        ...state,
        isfetching_login:true
      }
    case 'LOGIN_SUCESS':
      return {
        ...state,
        userid: action.data.userid,
        isfetching_login:false
      };

    case 'LOGIN_FAILURE':
      return {
        ...state,
        isfetching_login:false,
    error:true,
    errormsg:action.errormsg
      };

      // Signup reducer

    case 'SIGN_POSTING':
      return{
        ...state,
        isposting_signup:true

      };

    case 'SIGNUP_SUCESS':
      return {
        ...state,
        isposting_signup:false,
        userid: action.data.userid,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        isposting_signup:false,
        error:true,
        errormsg:action.errormsg
      };

    default:
      return state;
  }
};
export default userReducer;
