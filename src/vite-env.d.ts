/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Your existing env variables (if any)
  readonly VITE_SOME_OTHER_VARIABLE?: string;
  
  // Add these for EmailJS:
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
