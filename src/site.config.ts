// ==========================================================================
// הגדרות מרכזיות של האתר — ערוך כאן פרטים אישיים ופרטי קשר
// ==========================================================================

export const site = {
  name: 'קיסריה עם דגן',
  guideName: 'דגן אלמוני', // שנה לשם המדריך
  tagline: 'מסעות אל קיסריה העתיקה',
  description:
    'אתר תוכן מעמיק על קיסריה העתיקה — היסטוריה, ארכיאולוגיה, מבנים וסיפורים — מאת מדריך שמכיר כל אבן במקום. הצטרפו לסיור מודרך והחזירו את העיר לחיים.',
  // פרטי קשר — עדכן לפרטים האמיתיים
  phone: '050-0000000',
  phoneIntl: '972500000000', // לקישור וואטסאפ, בלי + ובלי אפס מוביל
  email: 'hello@caesarea-guide.example.com',
  whatsappMessage: 'היי, ראיתי את האתר על קיסריה ואשמח לשמוע על סיור מודרך',
  social: {
    instagram: '',
    facebook: '',
  },
};

export const nav = [
  { label: 'בית', href: '/' },
  { label: 'מאמרים', href: '/articles' },
  { label: 'סיורים', href: '/tours' },
  { label: 'אודות', href: '/about' },
  { label: 'צור קשר', href: '/contact' },
];

export function whatsappUrl(): string {
  const text = encodeURIComponent(site.whatsappMessage);
  return `https://wa.me/${site.phoneIntl}?text=${text}`;
}
