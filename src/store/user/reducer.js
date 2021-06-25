import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID, DELETE_EXTRACT,EDIT_EXTRACT,ADD_EXTRACT } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  extracts: [],
};

export default function reducer (state = initialState, action){
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };
      
      case DELETE_EXTRACT:
        return { ...state, extracts: action.payload }; 

        case EDIT_EXTRACT:
          return { ...state, extracts: action.payload };  
          
        case ADD_EXTRACT:
            return { ...state, extracts: action.payload };     

    default:
      return state;
  }
};
