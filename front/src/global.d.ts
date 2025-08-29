declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
            is_premium?: boolean;
          };
        };
        ready(): void;
        close(): void;
        showAlert(message: string): void;
        // Добавьте другие методы по необходимости
      };
    };
  }
}

export {};