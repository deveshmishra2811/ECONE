import { CONTACT, WHATSAPP_MESSAGES } from './constants';

export function getWhatsAppUrl(message?: string): string {
  const msg = encodeURIComponent(message || WHATSAPP_MESSAGES.general);
  return `https://wa.me/${CONTACT.whatsapp}?text=${msg}`;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}
