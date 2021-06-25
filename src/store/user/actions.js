import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";
export const DELETE_EXTRACT = "DELETE_EXTRACT";
export const EDIT_EXTRACT = "EDIT_EXTRACT";
export const ADD_EXTRACT = "ADD_EXTRACT";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};
const deleteSuccess = (extractsAfterDelete) => {
  return {
    type: DELETE_EXTRACT,
    payload: extractsAfterDelete,
  };
};
const editSuccess = (extractsAfterEdit) => {
  return {
    type: EDIT_EXTRACT,
    payload: extractsAfterEdit,
  };
};
const addSuccess = (extractsAfterAdd) => {
  return {
    type: ADD_EXTRACT,
    payload: extractsAfterAdd,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "We've sent you an email with a verification link. If you can't find it in your inbox, please check your spam, it might've ended up there.",
          10000
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });
      console.log("reducer data", response.data);

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
export const emailConf = (email) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      await axios.post(`${apiUrl}/emailconf`, {
        email,
      });
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "We've sent you an email with a reset link. If you can't find it in your inbox, please check your spam, it might've ended up there.",
          10000
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
export const patchpw = (password, token) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      await axios.post(`${apiUrl}/patchpw`, {
        password,
        token,
      });

      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "The new password has been set. Now you can login with it.",
          3000
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
export const deleteExtract = (id) => {
  return async (dispatch,getState) => {
    dispatch(appLoading());
    try {
      
      const userId=getState().user.id
      console.log(userId);
      const response = await axios.post(`${apiUrl}/extracts/delete/${id}`,{userId});
      // console.log("extracts after deleting",response.data);

      dispatch(deleteSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "The extract has been deleted.", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
export const editExtract = (id,text,author,title,subtitle,page,link,mediaType,imageUrl,tags) => {
  return async (dispatch,getState) => {
    dispatch(appLoading());
    try {
      
      const userId=getState().user.id
      console.log(userId);
      const response = await axios.patch(`${apiUrl}/extracts/edit/${id}`,
      {text,
        author,
        title,
        subtitle,
        page,
        link,
        mediaType,
        imageUrl,
        tags,
        userId});
      
      console.log("updated extracts",response.data);

      dispatch(editSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "The extract has been updated.", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
export const addExtract = (text,author,title,subtitle,page,link,mediaType,imageUrl,tags) => {
  return async (dispatch,getState) => {
    dispatch(appLoading());
    try {
      
      const userId=getState().user.id
      console.log(userId);
      const response = await axios.patch(`${apiUrl}/extracts/create`,
      {text,
        author,
        title,
        subtitle,
        page,
        link,
        mediaType,
        imageUrl,
        tags,
        userId});
      
      console.log("updated extracts",response.data);

      dispatch(addSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "An extract has been added.", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
export const visionAPI = (location) => {
  return async (dispatch,getState) => {
    dispatch(appLoading());
    try {
      
      const userId=getState().user.id

      const response = await axios.post(`${apiUrl}/extracts/vision`,{userId,location});
      
      console.log("Vision Data?",response.data);

      // dispatch(addSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "An extract has been added.", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};


export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

