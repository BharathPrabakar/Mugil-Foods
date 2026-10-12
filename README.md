# Mugil Foods Website

A responsive static website built with React and Vite.

## Pages
- Home — automatic hero carousel, product categories, services, brand values and enquiry call-to-action.
- Products — four category tabs; seven Tamarind product cards; upcoming categories.
- Product details — individual pages with highlights, suggested uses and enquiry hand-off.
- Services
- About Us
- Contact — enquiry form designed to prepare a WhatsApp message.

## Run locally
```bash
npm install
npm run dev
```

Build for static hosting:
```bash
npm run build
npm run preview
```

## Before launch
1. Replace the text monogram with the supplied Mugil Foods logo.
2. Set `WHATSAPP_NUMBER` in `src/App.jsx` to the business WhatsApp number with country code and digits only. The form intentionally reports missing configuration until a number is added.
3. Replace sample Unsplash imagery with the approved product and brand photographs.
4. Add verified contact details and approved product specifications, pack sizes, certifications and claims.
5. Configure static-host SPA fallback so product detail routes resolve on refresh.

The site uses sample imagery and avoids inventing company contact details or product specifications.