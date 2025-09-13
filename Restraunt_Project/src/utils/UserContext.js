// UserContext is a React context that provides user-related information and functions to manage user state across the application. It includes details such as the user's name, email, and authentication status, as well as functions to log in, log out, and update user information. This context is essential for maintaining a consistent user experience and ensuring that user data is accessible throughout different components of the application.

import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Guest",
  },
});
export default UserContext;
