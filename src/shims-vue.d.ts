declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}
// declare process env
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VITE_FIREBASE_CONFIG: string;
  }
}
