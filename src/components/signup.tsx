

import { MsalProvider, useMsal } from "@azure/msal-react";
import { msalInstance } from "./authConfig";
export function Signup() {
  const { instance } = useMsal();
  
  const redirectSignup = async () => {
    try {
      const response = await instance.loginPopup();
      console.log(response); // Here, you can access the access token and other user information
    } catch (error) {
      console.log(error);
    }
  };
  return (
   
    <div>
      <button type="button" onClick={() => redirectSignup()}>
        Signup
      </button>
    </div>
  );
}
