/// <reference types="vite/client" />

interface Window {
  chatbase: {
    (command: string, ...args: any[]): void;
    (command: 'identify', data: { token: string }): void;
    (command: 'getState'): string;
    q?: any[];
  };
}
