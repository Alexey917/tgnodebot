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

        MainButton: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          isActive: boolean;
          isProgressVisible: boolean;
          setText(text: string): void;
          show(): void;
          hide(): void;
          enable(): void;
          disable(): void;
          onClick(callback: () => void): void;
          offClick(callback: () => void): void;
        };
        // Добавьте другие методы по необходимости
      };
    };
    
  }
}

export {};