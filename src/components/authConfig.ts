import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
      clientId: "a5abbdbd-3b01-4b71-9528-c9d5006f43be", // Replace with your Azure AD app's client ID
      authority: "https://login.microsoftonline.com/94740bf1-1fbc-4402-aaf6-379a7b325701", // Replace with your Azure AD tenant ID
      redirectUri: "http://localhost:3000", // Replace with your redirect URI
    },
    cache: {
      cacheLocation: "localStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set to true if you're having issues on IE11 or Edge
    },
  };
  
  export const msalInstance = new PublicClientApplication(msalConfig);

  // Add the scopes required for your application
  export const loginRequest = {
    scopes: ["User.Read"], // Replace with the scopes your application needs
  };
  