const { REACT_APP_API_URL } = process.env;

export const apiUrl = REACT_APP_API_URL || "http://localhost:4000";

// export const apiUrl = REACT_APP_API_URL;

// export const apiUrl = "http://localhost:4000";

export const DEFAULT_MESSAGE_TIMEOUT = 3000;
