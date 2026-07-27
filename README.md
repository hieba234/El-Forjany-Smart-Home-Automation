# El Forjany Automation Landing Page - Owner Guide

This project is a static multilingual landing page for a smart home installation business.
It is designed to look premium, capture leads, and rank locally in Google for smart home installation services.

The site has three real language pages:

- `/en/` English
- `/ar-eg/` Egyptian Arabic, right-to-left layout
- `/ru/` Russian

The site does not need a database or complicated hosting. It can run on Netlify, Cloudflare Pages, GitHub Pages, Vercel, cPanel hosting, or almost any static server.

---

## 1. What every file does

```text
smart-home-landing/
  index.html              Root redirect page. Sends visitors to /en/ by default.
  en/index.html           English page, English SEO, English visible text.
  ar-eg/index.html        Egyptian Arabic page, Arabic SEO, RTL layout.
  ru/index.html           Russian page, Russian SEO, Russian visible text.
  assets/styles.css       All colors, layout, animations, spacing, mobile design.
  assets/script.js        Mobile menu, scroll animation, smart-home configurator, hero slider, WhatsApp link.
  assets/logo-mark.png    The real logo icon (transparent), used in the header on all 3 pages.
  assets/favicon-32.png, favicon-16.png, apple-touch-icon.png   Browser tab / home-screen icons.
  sitemap.xml             SEO sitemap with all language URLs.
  robots.txt              Tells Google it can crawl the site and where the sitemap is.
  README.md               This guide.
```

All files are heavily commented. Your friend can open any file and read the comments directly above the part he wants to change.

---

## 1b. What changed in the premium redesign

- **Rotating hero background.** The hero now cycles through 6 photos (lighting, security, HVAC,
  IoT hub, luxury interior, network/automation control) with a smooth crossfade + slow zoom, done
  entirely with the `.hero-slider` / `.hero-slide` markup at the top of each `<section class="hero">`
  and the timer logic in `assets/script.js` (search for "Hero background slider"). To change the
  rotation speed, edit the `5500` (milliseconds) values in that script. To swap a photo, replace the
  `src` on the matching `<div class="hero-slide">`. The rotation automatically turns off for visitors
  with "reduce motion" enabled at the OS level, and pauses while the browser tab isn't visible.
- **Real logo.** The header now shows the client's actual logo icon (`assets/logo-mark.png`) instead
  of a placeholder glyph — see section 4 above for how to swap it.
- **Icon system.** The 8 service cards use small inline SVG line icons instead of emoji, for a more
  considered, enterprise look. They live directly inside each `<div class="icon">` in the HTML.
- **Type system.** Headings and the logo wordmark use "Sora" (loaded from Google Fonts); body text
  uses "Inter"; the Arabic page additionally loads "Cairo" for Arabic text. See the `<link>` tags near
  the top of each page's `<head>`.
- **Micro-interactions.** Buttons have a subtle hover "shine" sweep; cards lift and glow slightly on
  hover; the whole page has a barely-visible grain texture for a tactile feel (`body:after` in
  `styles.css` — safe to delete if you want a simpler/faster page).
- **SEO additions.** Each page now has a full `robots` directive, complete Open Graph + Twitter Card
  tags, an `og:locale`/`og:locale:alternate` set for the 3 languages, a preloaded LCP image for
  faster hero rendering, and a `FAQPage` JSON-LD block that mirrors the visible FAQ section (this can
  make Google show the FAQ as an expandable rich result directly in search).
- **Floating WhatsApp button.** A fixed button in the bottom-left corner of every page (`.whatsapp-float`
  in the HTML/CSS) opens a chat with the real WhatsApp number from anywhere on the site, not just the
  contact section. See section 5 for how to update the number everywhere it appears.
- **Real booking form, custom-styled.** The contact section's form is built in the site's own
  design (not Google's default look) — it's a real native form that posts directly to the
  connected Google Form. All 8 fields are connected. See section 17 for how it works.

---

## 2. The most important things to change before launch

Search the whole folder for these placeholder values and replace them:

| Placeholder | Replace with |
|---|---|
| `Smart Home Pro` (already replaced with `El Forjany Automation` site-wide) | Update again here if the brand name ever changes |
| `https://elforjanysmarthome.com` | Real domain, for example `https://yourbrand.com` |
| `+20 100 000 0000` (already replaced with `+20 101 465 8383` site-wide) | Update again here if the phone number ever changes |
| `201000000000` (already replaced with `201014658383` site-wide) | Update again here if the WhatsApp number ever changes |
| Stock Unsplash image URLs | Real photos of installations, rooms, devices, or team |
| Starting prices | Real starting prices or remove prices completely |
| Service area `Egypt` | City/area actually served, for example Cairo, New Cairo, Sheikh Zayed, Hurghada, etc. |

Important: if prices are not stable, use text like `custom quote after free visit` instead of exact numbers.

---

## 3. How to edit text

Each language has its own page.

### English text
Edit:

```text
en/index.html
```

### Egyptian Arabic text
Edit:

```text
ar-eg/index.html
```

The Arabic page uses:

```html
<html lang="ar-EG" dir="rtl">
<body dir="rtl">
```

Keep `dir="rtl"` so Arabic displays right-to-left.

### Russian text
Edit:

```text
ru/index.html
```

---

## 4. How to change the brand name or logo

The placeholder brand name has already been replaced with **El Forjany Automation** across every
page (titles, meta tags, JSON-LD schema, the logo link, and the footer). To rename it again, search for:

```text
El Forjany Automation
```

Replace it in:

- `en/index.html`
- `ar-eg/index.html`
- `ru/index.html`
- `index.html`
- JSON-LD schema inside each language page
- Footer text

Do not forget `aria-label="El Forjany Automation"` in the logo link.

### The logo image

The header logo is now the client's real logo mark (not a placeholder icon):

- `assets/logo-mark.png` — the icon graphic only, cropped from the client's full logo file with a
  transparent background. Used inside `.logo-mark` in the header; the brand name next to it
  (`El Forjany Automation`) is live text, not part of the image, so it stays crisp and is
  readable/indexable by search engines. `.logo-mark` sizes the image by height only and lets width
  flex, so any replacement file will keep its own aspect ratio and never get stretched or cropped.
- `assets/favicon-32.png`, `assets/favicon-16.png`, `assets/apple-touch-icon.png` — generated from
  the same icon mark, for the browser tab and iOS home-screen shortcut.

To swap in an updated logo later: replace `assets/logo-mark.png` with the new icon (keep the
background transparent for the best look against the dark header), and regenerate the favicon
files at 32×32, 16×16, and 180×180 (the apple-touch-icon should have an opaque background, since
iOS renders transparency as black).

---

## 5. Phone and WhatsApp (already connected)

The real number, **+20 101 465 8383**, is now wired into four places. If it ever changes, update
all four:

1. **Floating WhatsApp button** — the round green button fixed to the bottom-left of every page.
   Search each language page (`en/index.html`, `ar-eg/index.html`, `ru/index.html`) for:

   ```text
   <a class="whatsapp-float" href="https://wa.me/201014658383"
   ```

2. **WhatsApp card in the contact section** — the clickable "WhatsApp" card next to the booking
   form. Same three files, search for:

   ```text
   href="https://wa.me/201014658383"
   ```

3. **Configurator's "Send this setup on WhatsApp" button** — open `assets/script.js` and find:

   ```js
   whatsappNumber: '201014658383'
   ```

   Keep this in international format, no `+`, spaces, or dashes.

4. **Schema.org structured data**, shown to Google, not to visitors. Search each language page for:

   ```text
   "telephone": "+20 101 465 8383"
   ```

To change the number everywhere: pick the new number, write it in international format without
`+`/spaces (e.g. `201012345678`) for #1–#3, and in the more readable `+20 xxx xxx xxxx` format for #4.

---

## 6. How to change colors

Open:

```text
assets/styles.css
```

At the top you will see:

```css
:root{
  --bg:#050a12;
  --bg2:#071827;
  --cyan:#27e8ff;
  --blue:#3f7cff;
  --green:#55ffba;
}
```

These are the main brand colors.

Recommended smart-home color combinations:

| Style | Background | Accent 1 | Accent 2 |
|---|---|---|---|
| Futuristic blue | `#050a12` | `#27e8ff` | `#55ffba` |
| Luxury dark gold | `#080706` | `#d8b45a` | `#ffffff` |
| Clean modern | `#071827` | `#3f7cff` | `#27e8ff` |

Keep the background dark if you want the premium smart-home look.

---

## 7. How to change images

Images are currently loaded from Unsplash as placeholders.

Search for:

```text
images.unsplash.com
```

Replace each image URL with a real image URL.

Best image choices:

- Real installation photo
- Real camera/lock/switch setup
- Before/after room photo
- Short team photo while working
- Clean modern home interior
- Phone controlling lights or camera

### Image SEO rule
Every image has an `alt="..."` attribute. Change the alt text to describe the image in the same language as the page.

Example English:

```html
alt="Smart lighting installation in a Cairo apartment"
```

Example Arabic:

```html
alt="تركيب إضاءة ذكية في شقة في القاهرة"
```

Example Russian:

```html
alt="Установка умного освещения в квартире в Каире"
```

Good alt text helps accessibility and image SEO.

---

## 8. How to add a real video

In each language page, search for:

```html
<div class="video-frame"><div class="play">▶</div></div>
```

Replace it with a YouTube embed:

```html
<div class="video-frame">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    title="Smart home installation demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>
```

Best video length: 30 to 60 seconds.

Show:

1. Light turns on from phone.
2. Camera notification appears.
3. Smart lock opens/closes.
4. Curtains move automatically.
5. One voice command.
6. End with WhatsApp/free visit CTA.

---

## 9. How the Smart Home Builder works

The buttons are in each HTML file:

```html
<button class="chip" type="button" data-filter="security">Security</button>
```

The matching data is in:

```text
assets/script.js
```

Inside the `copy` object, each language has these package keys:

```text
security
lighting
comfort
network
full
```

If you add a new button like:

```html
<button class="chip" type="button" data-filter="solar">Solar</button>
```

You must also add a `solar` object in every language inside `assets/script.js`.

---

## 10. How to change prices and currency

Visible prices appear in two places:

### A) Package cards in each language HTML page
Search for:

```text
from EGP
custom quote
جنيه
EGP
```

Change the visible package price text.

### B) Configurator estimates in JavaScript
Open:

```text
assets/script.js
```

Search inside the language sections for:

```text
estimate:
```

Change the text for each setup.

### Currency by language
In `assets/script.js`, there is a settings block:

```js
currencyByLanguage: {
  en: 'EGP',
  ar: 'جنيه',
  ru: 'EGP'
}
```

For a local Egyptian business, the safest default is EGP in all languages. If he truly accepts USD or RUB, mention that clearly. Do not show a currency he does not accept.

---

## 11. Where the SEO is

SEO is not one single file. It is spread across several important places.

### A) Page title
Inside each language page:

```html
<title>Smart Home Installation in Egypt | Free Smart Home Consultation</title>
```

This is one of the most important SEO fields.

### B) Meta description
Inside each language page:

```html
<meta name="description" content="...">
```

This should sell the click and include the main service/location.

### C) H1 headline
Inside the hero section:

```html
<h1><span class="gradient-text">Make your home feel intelligent.</span></h1>
```

The H1 should be clear and relevant.

### D) Canonical URL
Inside each language page:

```html
<link rel="canonical" href="https://elforjanysmarthome.com/en/">
```

Replace `elforjanysmarthome.com` with the real domain.

### E) Hreflang
Inside each language page:

```html
<link rel="alternate" hreflang="en" href="https://elforjanysmarthome.com/en/">
<link rel="alternate" hreflang="ar-EG" href="https://elforjanysmarthome.com/ar-eg/">
<link rel="alternate" hreflang="ru" href="https://elforjanysmarthome.com/ru/">
<link rel="alternate" hreflang="x-default" href="https://elforjanysmarthome.com/en/">
```

This tells Google these are language versions of the same service page.

### F) Open Graph image/title/description
Inside each language page:

```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

This controls WhatsApp/Facebook/LinkedIn previews.

### G) JSON-LD structured data
Inside each language page:

```html
<script type="application/ld+json">...</script>
```

This tells Google the site is a local home/smart-home service business and that the first consultation is free.

### H) Sitemap
Edit:

```text
sitemap.xml
```

Replace all `https://elforjanysmarthome.com` URLs with the real domain.

### I) Robots
Edit:

```text
robots.txt
```

Replace:

```text
Sitemap: https://elforjanysmarthome.com/sitemap.xml
```

with:

```text
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 12. SEO keyword plan

Do not stuff keywords randomly. Use them naturally in headings, paragraph text, FAQ, project descriptions, and future blog posts.

### English keywords

- smart home installation Egypt
- smart home installer Cairo
- home automation installation
- smart lighting installation
- smart lock installation
- security camera installation
- Alexa smart home setup
- Google Home setup
- smart home consultation
- free smart home visit

### Egyptian Arabic keywords

- تركيب سمارت هوم
- شركة سمارت هوم
- تركيب منزل ذكي
- تحويل البيت لبيت ذكي
- تركيب إضاءة ذكية
- تركيب قفل ذكي
- تركيب كاميرات مراقبة
- تركيب أجهزة المنزل الذكي
- معاينة سمارت هوم مجانية

### Russian keywords

- установка умного дома
- умный дом Египет
- умный дом Каир
- монтаж умного дома
- установка умного освещения
- установка умного замка
- установка камер видеонаблюдения
- настройка Alexa
- автоматизация дома

---

## 13. How to make the site more visible on Google

Technical SEO alone is not enough. Visibility comes from trust, local relevance, and fresh proof.

Do these in order:

1. Buy a domain and publish the site.
2. Replace all placeholder text, phone numbers, and images.
3. Create or update Google Business Profile.
4. Add real service area and phone number exactly the same everywhere.
5. Add real installation photos.
6. Ask every happy client for a Google review.
7. Submit the sitemap in Google Search Console.
8. Use Google Search Console URL Inspection after launch.
9. Create one page or post for each major service later: smart lighting, cameras, smart locks, smart curtains, Wi-Fi, full automation.
10. Add project case studies with real area names, for example `Smart Lighting Installation in New Cairo Apartment`.
11. Keep the site fast: compress images and do not upload giant photos.
12. Add FAQs based on real client questions.
13. Share the site on WhatsApp, Instagram, Facebook groups, Google Business Profile posts, and local directories.

Best local SEO proof:

- Real photos
- Real reviews
- Real address/service area
- Real phone number
- Clear WhatsApp contact
- Consistent business name everywhere

---

## 14. How to buy a cheap domain

Prices change all the time, so do not choose only by the first-year discount. Always check the renewal price.

Recommended simple approach:

### Option A - Cloudflare Registrar

Cloudflare Registrar sells/renews domains at cost with no markup according to Cloudflare. It is usually a strong low-cost choice, but you must use Cloudflare DNS/nameservers for domains registered there.

Official page:

```text
https://www.cloudflare.com/products/registrar/
```

Steps:

1. Create a Cloudflare account.
2. Go to domain registration.
3. Search for a name.
4. Choose a common extension like `.com` if available.
5. Check the renewal price, not only the first-year price.
6. Buy the domain.
7. Keep auto-renew on if the business depends on the site.

### Option B - Buy from Netlify if hosting on Netlify

This can be easier for beginners because domain and hosting stay in one place.

Official docs:

```text
https://docs.netlify.com/manage/domains/get-started-with-domains/
```

### Domain name tips

Good domain examples:

```text
brandname.com
brandnamesmarthome.com
brandnamehomeautomation.com
```

Avoid:

- Very long names
- Hyphens if possible
- Weird spellings
- Free subdomains for a serious business
- Cheap first year with expensive renewal

---

## 15. How to upload the site to a server

### Easiest option: Netlify manual deploy

Good for a beginner and this exact static site.

Steps:

1. Go to Netlify.
2. Create an account.
3. Add a new site.
4. Use manual deploy / drag and drop.
5. Drag the whole `smart-home-landing` folder or upload the zip if Netlify accepts it.
6. Netlify gives a temporary URL.
7. Test `/en/`, `/ar-eg/`, `/ru/`.
8. Add custom domain in Netlify.
9. Update DNS records as Netlify tells you.
10. Wait for HTTPS certificate to finish.

Official Netlify deploy docs:

```text
https://docs.netlify.com/deploy/create-deploys/
```

Official Netlify domains docs:

```text
https://docs.netlify.com/manage/domains/get-started-with-domains/
```

### Developer option: GitHub Pages

Good if the site will be updated with Git.

Steps:

1. Create a GitHub account.
2. Create a new repository.
3. Upload all files from `smart-home-landing`.
4. Go to repository Settings.
5. Go to Pages.
6. Publish from the main branch.
7. Add a custom domain if needed.
8. Verify the custom domain for safety.

Official GitHub Pages docs:

```text
https://docs.github.com/pages
```

### Traditional hosting / cPanel

Good if he already has hosting.

Steps:

1. Open cPanel.
2. Go to File Manager.
3. Open `public_html`.
4. Upload all files and folders from `smart-home-landing`.
5. Make sure `index.html` is directly inside `public_html`.
6. Visit the domain.
7. Test `/en/`, `/ar-eg/`, `/ru/`.

Folder should look like this on the server:

```text
public_html/index.html
public_html/en/index.html
public_html/ar-eg/index.html
public_html/ru/index.html
public_html/assets/styles.css
public_html/assets/script.js
public_html/sitemap.xml
public_html/robots.txt
```

---

## 16. After buying the domain, update these files

Replace `https://elforjanysmarthome.com` everywhere.

Use search/replace across the whole project.

Example if the real domain is:

```text
https://smartlivingegypt.com
```

Then:

```text
https://elforjanysmarthome.com/en/
```

becomes:

```text
https://smartlivingegypt.com/en/
```

Also update:

```text
robots.txt
sitemap.xml
index.html
all language pages
```

---

## 17. The booking form (custom design, connected to Google Form)

The contact section uses a form built entirely in the site's own design — dark cards, gold
focus rings, custom dropdown arrows, the same fonts and spacing as everything else — instead of
Google's plain default form look. All 8 fields (Email, Name, Phone/WhatsApp, City/Area, Place
type, Preferred language, Preferred visit time, and "What do you need?") save straight into the
Google Form's own **Responses** tab.

### How it actually works
The visible `<form id="lead-form">` is a real, native HTML form — not a fake one wired up with
JavaScript. Its `action` attribute points directly at the Google Form's own submit endpoint
(`.../formResponse`), and every input's `name` attribute is the real field id Google assigned to
that question (for example `name="entry.2025724081"` for Name). Email is a special case: Google
Forms has a built-in "collect email address" feature that uses the reserved name `emailAddress`
instead of a normal `entry.NNNNNNN` id.

The form's `target="lead-form-target"` attribute points at a hidden, invisible `<iframe>` placed
right after the form. That's what lets the browser submit the form for real (a genuine page
navigation, just contained inside that 1px iframe) without the visitor ever leaving the site or
seeing Google's page. `assets/script.js` only does two small things: it copies the one visible
"Preferred visit time" picker into 5 hidden fields Google's date+time question actually needs
(`entry.965666495_year`, `_month`, `_day`, `_hour`, `_minute`), and it swaps in the "Thank you"
panel about a second after the visitor clicks submit.

This native-form approach was chosen over a JavaScript `fetch()` submission specifically because
it's the more reliable of the two common techniques for this kind of Google Form bridge — a real
form POST to another origin is not restricted the way `fetch(..., {mode:'no-cors'})` can be.

### A note on confirmation
Because the iframe target is a different origin (docs.google.com), the page can never read back a
real success/failure response from Google — that's a standard browser security rule, not a bug
here. The "Thank you" panel appears automatically about a second after submit as an optimistic
assumption that it worked. **Always test with a real submission** and confirm it shows up in the
Google Form's Responses tab before relying on it for real leads.

### If the entry ids ever need to be found again
Use this if you change the Google Form's questions and need to reconnect the site to the new ids.

1. Open your form in Google Forms (edit mode, not the public link).
2. Click the **⋮** (three-dot) menu, top right → **Get pre-filled link**.
3. In each box, type a value that makes it obvious which question it is — for example type `NAME`
   in the Name box, `PHONE` in the Phone/WhatsApp box, and so on. For the date/time question, just
   pick any date and time.
4. Click **Get link**, then **Copy link**, and open that link in a new tab.
5. Right-click the form → **Inspect** → find the `<form>` tag and look at the `<input type="hidden">`
   elements just below it. Each one shows `name="entry.NNNNNNNNN" value="WHATEVER_YOU_TYPED"` — that's
   the real mapping. (The pre-filled *link itself* also contains `entry.NNNNNNNNN=value` pairs, but
   for the date/time question specifically, the hidden inputs in dev tools are the accurate source —
   the link uses a different combined format that doesn't match what real submissions need.)
6. Update the relevant `name="entry.NNNNNNN"` attribute directly on the matching `<input>`/`<select>`/
   `<textarea>` in `en/index.html`, `ar-eg/index.html`, and `ru/index.html` (all three use the same ids).
7. For the date/time question, update the shared base number in the 5 hidden inputs
   (`entry.BASE_year`, `_month`, `_day`, `_hour`, `_minute`) in the same three files.
8. Save, then submit a real test entry on the live site and confirm it appears in Google Forms'
   **Responses** tab.

### To use a completely different Google Form
Replace the `action` URL on the `<form>` tag with
`https://docs.google.com/forms/d/e/YOUR_NEW_FORM_ID/formResponse` (swap in the new form's own id,
keep `/formResponse` at the end) in all three language pages, then repeat the entry-id steps above.

### Dropdown values stay in English on every language page
The Place type and Preferred language dropdowns show localized text to visitors (e.g. "شقة" on the
Arabic page), but each `<option>` has an explicit `value="Apartment"` etc. so the actual value
saved to Google Forms is always the same English word regardless of which language page someone
used. This keeps the spreadsheet consistent and filterable. If you add new dropdown options, keep
this pattern: `<option value="EnglishCanonicalValue">Localized display text</option>`.

---

## 18. Google Search Console setup

After the site is live:

1. Open Google Search Console.
2. Add the domain property.
3. Verify ownership using DNS or HTML file.
4. Submit sitemap:

```text
https://yourdomain.com/sitemap.xml
```

5. Use URL Inspection for:

```text
https://yourdomain.com/en/
https://yourdomain.com/ar-eg/
https://yourdomain.com/ru/
```

6. Request indexing.
7. Check Performance weekly.

Official Google SEO guide:

```text
https://developers.google.com/search/docs/fundamentals/seo-starter-guide
```

Official multilingual/hreflang guide:

```text
https://developers.google.com/search/docs/specialty/international/localized-versions
```

Official structured data intro:

```text
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
```

---

## 19. Google Business Profile local SEO

This is extremely important for a local installation service.

Add:

- Business name
- Service area
- Phone number
- Website URL
- Business hours
- Smart home installation category if available
- Real installation photos
- WhatsApp/contact method
- Reviews from customers

Use the same phone number and business name as the website. Consistency helps local trust.

---

## 20. Recommended future pages

The current site is a landing page. Later, add these pages for better SEO:

```text
/en/smart-lighting-installation/
/en/security-camera-installation/
/en/smart-lock-installation/
/en/smart-curtains-installation/
/en/wifi-network-setup/
/en/projects/
```

Also create Arabic and Russian versions.

Each service page should include:

- Service explanation
- Real photos
- Price guidance
- FAQ
- Areas served
- WhatsApp CTA
- Free visit CTA

---

## 21. Launch checklist

Before publishing:

- [x] Replace brand name — done (El Forjany Automation).
- [x] Replace phone number — done (+20 101 465 8383).
- [x] Replace WhatsApp number — done (201014658383), used by the floating button, the contact card, and the configurator.
- [x] Connect the booking form — done. All 8 fields (Email, Name, Phone, City/Area, Place type,
      Preferred language, Preferred visit time, What do you need?) save to Google Forms.
      ⚠️ Still submit one real test entry before launch and confirm it lands in the Responses
      tab — see section 17 for why this can't be verified automatically.
- [ ] Replace `https://elforjanysmarthome.com` everywhere with the real domain.
- [ ] Replace stock images with real photos where possible.
- [ ] Check every language page.
- [ ] Check mobile view.
- [ ] Test the Google Form actually receives a submission end to end.
- [ ] Test the floating WhatsApp button and the WhatsApp contact card open a real chat.
- [ ] Test WhatsApp configurator button.
- [ ] Update `sitemap.xml`.
- [ ] Update `robots.txt`.
- [ ] Upload to hosting.
- [ ] Connect domain.
- [ ] Submit sitemap to Google Search Console.
- [ ] Create Google Business Profile.
- [ ] Ask first customers for reviews.

---

## 22. Fast editing map

| Goal | File |
|---|---|
| Change English text | `en/index.html` |
| Change Arabic text | `ar-eg/index.html` |
| Change Russian text | `ru/index.html` |
| Change colors/design | `assets/styles.css` |
| Change animations/layout | `assets/styles.css` |
| Change smart builder results | `assets/script.js` |
| Change WhatsApp number (all 3 spots) | See section 5 |
| Connect/reconnect the booking form to Google Forms | `name="entry...."` attributes in `#lead-form` (see section 17) |
| Change the booking form's visible questions/labels | Each language `index.html`, `#lead-form` |
| Change SEO title/description | Each language `index.html` |
| Change sitemap URLs | `sitemap.xml` |
| Change crawler sitemap location | `robots.txt` |
| Change default language redirect | root `index.html` |

---

## 23. Important warning

Do not launch with `elforjanysmarthome.com` or fake images.
Google and customers trust real details. The fastest way to make this site perform is to add real photos, real reviews, and a real Google Business Profile.

