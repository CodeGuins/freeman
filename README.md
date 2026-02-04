# Freeman Trucking Website

A modern Next.js website for Freeman Trucking - Chicago's original drayage company.

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Resend API (for contact form emails)
RESEND_API_KEY=re_your_api_key_here

# reCAPTCHA v3 (to be configured when domain is live)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

See `.env.local.example` for reference.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

### Build

```bash
npm run build
npm start
```

## Deployment

Currently deployed on Vercel for preview purposes.

## Features

- Modern, responsive design with Tailwind CSS
- Sticky navigation with scroll effects
- Hero section with parallax background
- Services grid
- About section
- Contact form with spam protection
- Email notifications via Resend

## TODO

### When Domain Goes Live

- [ ] **Configure reCAPTCHA v3**
  - Go to https://www.google.com/recaptcha/admin/create
  - Select reCAPTCHA v3
  - Add the live domain
  - Update `.env.local` with the Site Key and Secret Key
  - Add domain to Vercel environment variables

- [ ] **Update Resend Email Domain**
  - Verify custom domain in Resend dashboard
  - Update "from" address in `/pages/api/contact.js` from `onboarding@resend.dev` to `contact@yourdomain.com`

- [ ] **Update Contact Information**
  - Add real phone number in `/components/Contact.jsx`
  - Add real address in `/components/Contact.jsx`
  - Update email if different from freemantruckingcontact@gmail.com

- [ ] **SEO & Analytics**
  - Add Google Analytics
  - Update meta descriptions
  - Add favicon
  - Create sitemap.xml
  - Configure robots.txt

### Future Enhancements

- [ ] Add fleet showcase page
- [ ] Add customer testimonials
- [ ] Add service request tracking portal
- [ ] Implement blog/news section
- [ ] Add multilingual support

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS
- **Email:** Resend
- **Spam Protection:** Google reCAPTCHA v3
- **Deployment:** Vercel

## Project Structure

```
freeman/
├── components/       # React components
├── pages/           # Next.js pages and API routes
├── public/          # Static assets
├── src/             # Source files (CSS)
└── styles/          # Global styles
```

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
