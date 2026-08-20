# קיסריה עם דגן — אתר תוכן וסמכות

אתר מבוסס [Astro](https://astro.build) המוקדש לקיסריה העתיקה: מאגר מאמרים, עמוד סיורים ויצירת קשר.
העיצוב בסגנון "ים-תיכוני חם" (אבן חול, טרקוטה, כחול-ים, זהב עתיק), עברית מלאה RTL, מותאם למובייל וחזק ל-SEO.

## הפעלה מקומית

```bash
npm install
npm run dev      # שרת פיתוח בכתובת http://localhost:4321
npm run build    # בנייה לתיקיית dist/
npm run preview  # תצוגה מקדימה של הבנייה
```

## מבנה

```
src/
├── site.config.ts        ← ⭐ פרטים אישיים ופרטי קשר — ערוך כאן קודם
├── content/
│   ├── config.ts         ← סכמת הפוסטים והקטגוריות
│   └── posts/*.md        ← המאמרים (קובץ Markdown לכל מאמר)
├── components/           ← רכיבי UI לשימוש חוזר
├── layouts/              ← תבנית הבסיס
├── pages/                ← עמודי האתר
└── styles/global.css     ← מערכת העיצוב (צבעים, טיפוגרפיה)
public/images/
├── photos/               ← צילומים אמיתיים שלך
└── illustrations/        ← איורים (Gemini)
```

## איך מוסיפים מאמר חדש

1. צור קובץ חדש ב-`src/content/posts/`, למשל `hippodrome.md`.
2. בראש הקובץ הוסף את ה-frontmatter:

```markdown
---
title: 'כותרת המאמר'
description: 'תיאור קצר למנועי חיפוש (עד ~155 תווים)'
publishDate: 2026-08-20
category: 'אתרים ומבנים'   # אחת מ: היסטוריה / אתרים ומבנים / ארכיאולוגיה / מדריך למבקר / סיפורים ואגדות
heroImage: '/images/photos/hippodrome.jpg'
heroImageAlt: 'תיאור התמונה לנגישות ו-SEO'
tags: ['היפודרום', 'התקופה הרומית']
readingTime: 5
featured: false            # true = יופיע כמומלץ בדף הבית
draft: false               # true = לא יתפרסם
---

גוף המאמר בפורמט Markdown...
```

3. הכותרת הראשית (H1) נוצרת אוטומטית מ-`title` — התחל את התוכן ישירות מהפסקה הראשונה.

## תמונות

- **צילומים שלך** → `public/images/photos/`
- **איורים מ-Gemini** → `public/images/illustrations/`
- כרגע יש placeholders מאוירים (SVG). החלף אותם בקבצים אמיתיים באותו שם, או עדכן את הנתיב ב-`heroImage`.

## דיפלוי

הבנייה (`npm run build`) יוצרת אתר סטטי בתיקיית `dist/` שאפשר לארח חינם ב-Netlify, Cloudflare Pages או GitHub Pages.
לפני העלייה: עדכן את `site` ב-`astro.config.mjs` לכתובת הסופית.
טופס יצירת הקשר מוכן לעבוד עם Netlify Forms.
