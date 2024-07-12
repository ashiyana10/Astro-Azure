// src/components/MsalProviderWrapper.tsx
import React from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../components/authConfig";
import type { ReactNode } from "react";

// Define the type for the props
interface MsalProviderWrapperProps {
  children: ReactNode;
}
const msalInstance = new PublicClientApplication(msalConfig);

const MsalProviderWrapper: React.FC<MsalProviderWrapperProps> = ({
  children,
}) => {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};

export default MsalProviderWrapper;
