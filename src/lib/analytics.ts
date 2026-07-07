// Analytics utility functions
// These functions will fire events to GA4, Meta Pixel, and LinkedIn Insight Tag
// when the corresponding IDs are configured in environment variables.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  // GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
  }

  // LinkedIn Insight
  if (typeof window !== 'undefined' && window.lintrk) {
    window.lintrk('track', { conversion_id: eventName });
  }
}

export const EVENTS = {
  BOOK_PILOT_CLICK: 'book_pilot_click',
  CALCULATE_SAVINGS_START: 'calculate_savings_start',
  CALCULATE_SAVINGS_SUBMIT: 'calculate_savings_submit',
  WHATSAPP_CLICK: 'whatsapp_click',
  PARTNER_FORM_SUBMIT: 'partner_form_submit',
  RESOURCE_REQUEST_SUBMIT: 'resource_request_submit',
  PAYMENT_STARTED: 'payment_started',
  PAYMENT_SUCCESS: 'payment_success',
  PAYMENT_FAILED: 'payment_failed',
  CHATBOT_OPEN: 'chatbot_open',
  CHATBOT_CTA_CLICK: 'chatbot_cta_click',
} as const;
