import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { MsalProvider } from '@azure/msal-react';


// https://astro.build/config
export default defineConfig({
    integrations: [react()],

});
