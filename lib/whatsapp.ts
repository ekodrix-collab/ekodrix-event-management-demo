const WHATSAPP_NUMBER = '919876543210' // Update with client's real number

export function getWhatsAppUrl(message?: string): string {
    const defaultMessage = 'Hello! I visited the AL WAFA website and I am interested in your services.'
    const text = message || defaultMessage
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
