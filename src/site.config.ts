// ==========================================================================
// הגדרות מרכזיות של האתר — ערוך כאן פרטים אישיים ופרטי קשר
// ==========================================================================

export const site = {
  name: 'ד"ר יוחאי חלפון',
  guideName: 'ד"ר יוחאי חלפון',
  tagline: 'סיורים וסיפורים בקיסריה העתיקה',
  description:
    'קיסריה העתיקה בעיניו של ד"ר יוחאי חלפון, מדריך שמכיר בה כל אבן: היסטוריה, ארכיאולוגיה, מבנים וסיפורים על אחת הערים המרתקות בהיסטוריה של ארץ ישראל.',
  // פרטי קשר
  phone: '052-3003629',
  phoneIntl: '972523003629', // לקישור וואטסאפ, בלי + ובלי אפס מוביל
  email: 'halfon.yo@gmail.com',
  whatsappMessage: 'היי יוחאי, ראיתי את האתר על קיסריה ואשמח לשמוע על סיור מודרך',
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

// ---------------------------------------------------------------------------
// טיפול בנתיב בסיס (base path) — נדרש בפריסה ל-GitHub Pages תחת תת-נתיב.
// מקומית BASE_URL = "/" ולכן url() לא משנה דבר; ב-Pages הוא "/Education-/".
// ---------------------------------------------------------------------------
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export function url(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}`;
}

export function whatsappUrl(): string {
  const text = encodeURIComponent(site.whatsappMessage);
  return `https://wa.me/${site.phoneIntl}?text=${text}`;
}
