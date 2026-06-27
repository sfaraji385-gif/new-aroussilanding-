export {};

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    ttq?: {
      track?: (...args: any[]) => void;
      page?: () => void;
      load?: (id: string) => void;
    };
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
