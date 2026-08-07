/*
  FILE: assets/script.js
  PURPOSE: Shared JavaScript for all language pages.

  WHAT THIS FILE CONTROLS:
  1) Detects the current language.
  2) Opens/closes the mobile menu.
  3) Animates sections when they scroll into view.
  4) Powers the Smart Home Builder / configurator.
  5) Creates the WhatsApp link for the selected setup.

  SAFE EDITING RULE:
  - Most owner edits are inside the SETTINGS and copy objects below.
  - Do not rename data-filter values in HTML unless you also rename matching keys here.
*/

/* -----------------------------
   1) Owner settings
   -----------------------------
   Change these before launch.
*/
const SETTINGS = {
  // Real WhatsApp number, in international format without + or spaces.
  whatsappNumber: '201014658383',

  // Default currency labels by language. Visible pricing text is also written inside each package below.
  currencyByLanguage: {
    en: 'EGP',
    ar: 'جنيه',
    ru: 'EGP'
  }
};

/* -----------------------------
   2) Language detection
   -----------------------------
   The <html lang="..."> value in each page decides which text the configurator uses.
*/
const pageLang = document.documentElement.lang || 'en';
const langKey = pageLang.startsWith('ar') ? 'ar' : pageLang.startsWith('ru') ? 'ru' : 'en';

/* -----------------------------
   3) Configurator copy
   -----------------------------
   Edit titles, devices, estimates, and free-visit checks here.
   Every language has the same keys: security, lighting, comfort, network, full.
   Those keys match the data-filter attributes in the HTML buttons.
*/
const copy = {
  en: {
    currency: SETTINGS.currencyByLanguage.en,
    all: 'Full setup',
    data: {
      security: {
        title:'Security setup',
        devices:['Smart cameras','Smart lock','Motion sensors','Door/window sensors'],
        estimate:'Custom quote after the free visit. Typical starter security setups begin custom quote depending on devices and wiring.',
        checks:'Camera angles, entrance points, Wi-Fi strength, storage needs, family access.'
      },
      lighting: {
        title:'Smart lighting',
        devices:['Smart switches','Dimmable bulbs','Scene control','Motion-triggered lighting'],
        estimate:'Custom quote after the free visit. Starter lighting automation can begin custom quote depending on room count.',
        checks:'Switch type, neutral wire availability, room scenes, app/voice control needs.'
      },
      comfort: {
        title:'Comfort automation',
        devices:['Smart curtains','AC control','Temperature sensors','Morning/night scenes'],
        estimate:'Custom quote after the free visit. Comfort packages vary by curtain motors and AC compatibility.',
        checks:'Curtain dimensions, AC type, room routines, remote-control requirements.'
      },
      network: {
        title:'Wi-Fi and network',
        devices:['Mesh Wi-Fi','Router setup','Smart hub placement','Device stability check'],
        estimate:'Custom quote after the free visit. Network upgrades depend on home size and wall thickness.',
        checks:'Dead zones, internet speed, router position, smart device load.'
      },
      full: {
        title:'Complete smart home',
        devices:['Lighting','Security','Locks','Curtains','Voice control','Smart scenes'],
        estimate:'Custom quote after the free visit. Best for villas, new apartments, renovations, and premium upgrades.',
        checks:'Whole-home plan, budget, future expansion, app ecosystem, device compatibility.'
      }
    },
    resultTitle:'Recommended setup',
    devices:'Devices',
    checks:'Free visit checks',
    estimate:'Budget note',
    send:'Send this setup on WhatsApp'
  },
  ar: {
    currency: SETTINGS.currencyByLanguage.ar,
    all: 'نظام كامل',
    data: {
      security: {
        title:'نظام أمان ذكي',
        devices:['كاميرات ذكية','قفل ذكي','حساسات حركة','حساسات أبواب وشبابيك'],
        estimate:'السعر النهائي بعد المعاينة المجانية. أنظمة الأمان البسيطة غالباً تبدأ من حوالي ٨,٥٠٠ جنيه حسب الأجهزة والتركيب.',
        checks:'زوايا الكاميرات، مداخل الشقة، قوة الواي فاي، التخزين، وصلاحيات أفراد البيت.'
      },
      lighting: {
        title:'إضاءة ذكية',
        devices:['مفاتيح ذكية','لمبات قابلة للتعتيم','مشاهد إضاءة','إضاءة تعمل بالحركة'],
        estimate:'السعر النهائي بعد المعاينة المجانية. بداية الإضاءة الذكية ممكن تكون من حوالي ٤,٥٠٠ جنيه حسب عدد الغرف.',
        checks:'نوع المفاتيح، وجود سلك نيوترال، سيناريوهات الغرف، والتحكم بالموبايل أو الصوت.'
      },
      comfort: {
        title:'راحة وتحكم',
        devices:['ستائر ذكية','تحكم في التكييف','حساسات حرارة','مشاهد صباح ومساء'],
        estimate:'السعر النهائي بعد المعاينة المجانية. السعر يتغير حسب موتور الستائر وتوافق التكييف.',
        checks:'مقاسات الستائر، نوع التكييف، الروتين اليومي، واحتياج التحكم عن بعد.'
      },
      network: {
        title:'واي فاي وشبكة',
        devices:['Mesh Wi-Fi','إعداد الراوتر','مكان الهب الذكي','اختبار ثبات الأجهزة'],
        estimate:'السعر النهائي بعد المعاينة المجانية. تحسين الشبكة يعتمد على مساحة المكان وسُمك الحيطان.',
        checks:'الأماكن الضعيفة، سرعة الإنترنت، مكان الراوتر، وعدد الأجهزة الذكية.'
      },
      full: {
        title:'بيت ذكي كامل',
        devices:['إضاءة','أمان','أقفال','ستائر','تحكم صوتي','مشاهد ذكية'],
        estimate:'السعر النهائي بعد المعاينة المجانية. مناسب للفيلات، الشقق الجديدة، التشطيبات، والترقيات الفاخرة.',
        checks:'خطة البيت بالكامل، الميزانية، التوسع المستقبلي، النظام المناسب، وتوافق الأجهزة.'
      }
    },
    resultTitle:'الترشيح المناسب',
    devices:'الأجهزة',
    checks:'المعاينة المجانية هتفحص',
    estimate:'ملاحظة السعر',
    send:'ابعت الاختيار على واتساب'
  },
  ru: {
    currency: SETTINGS.currencyByLanguage.ru,
    all: 'Полная система',
    data: {
      security: {
        title:'Безопасность',
        devices:['Умные камеры','Умный замок','Датчики движения','Датчики дверей и окон'],
        estimate:'Финальная стоимость после бесплатного визита. Базовые системы безопасности обычно начинаются примерно от 8 500 EGP.',
        checks:'Углы камер, входные зоны, качество Wi-Fi, хранение записей, доступ для семьи.'
      },
      lighting: {
        title:'Умное освещение',
        devices:['Умные выключатели','Диммируемые лампы','Световые сцены','Свет по датчику движения'],
        estimate:'Финальная стоимость после бесплатного визита. Базовая автоматизация освещения может начинаться примерно от 4 500 EGP.',
        checks:'Тип выключателей, наличие neutral wire, сценарии комнат, управление голосом или приложением.'
      },
      comfort: {
        title:'Комфорт',
        devices:['Умные шторы','Управление кондиционером','Датчики температуры','Утренние и ночные сценарии'],
        estimate:'Финальная стоимость после бесплатного визита. Цена зависит от моторов штор и совместимости кондиционера.',
        checks:'Размеры штор, тип кондиционера, ежедневные сценарии, удаленное управление.'
      },
      network: {
        title:'Wi-Fi и сеть',
        devices:['Mesh Wi-Fi','Настройка роутера','Размещение хаба','Проверка стабильности устройств'],
        estimate:'Финальная стоимость после бесплатного визита. Сеть зависит от площади дома и толщины стен.',
        checks:'Мертвые зоны, скорость интернета, позиция роутера, количество умных устройств.'
      },
      full: {
        title:'Полный умный дом',
        devices:['Освещение','Безопасность','Замки','Шторы','Голосовое управление','Умные сценарии'],
        estimate:'Финальная стоимость после бесплатного визита. Лучший вариант для вилл, новых квартир и премиального ремонта.',
        checks:'План всего дома, бюджет, будущие расширения, экосистема и совместимость устройств.'
      }
    },
    resultTitle:'Рекомендуемая система',
    devices:'Устройства',
    checks:'Что проверим на визите',
    estimate:'Бюджет',
    send:'Отправить подбор в WhatsApp'
  }
};

/* -----------------------------
   4) Small helper functions
   -----------------------------
   qs returns one element. qsa returns an array of elements.
*/
function qs(selector, root=document){return root.querySelector(selector)}
function qsa(selector, root=document){return [...root.querySelectorAll(selector)]}

/* -----------------------------
   5) Mobile menu
   -----------------------------
   On phone/tablet, the header menu is hidden until the visitor taps the menu button.
*/
const menuBtn = qs('.mobile-menu');
const navLinks = qs('.nav-links');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}

/* -----------------------------
   5b) Hero background slider
   -----------------------------
   Crossfades between the <img> slides inside .hero-slider every few seconds.
   Pauses while the tab is hidden (saves battery/CPU) and skips the auto-rotation
   entirely for visitors who have "reduce motion" turned on at the OS level.
*/
const heroSlides = qsa('.hero-slide');
if(heroSlides.length > 1){
  let heroIndex = heroSlides.findIndex(slide => slide.classList.contains('active'));
  if(heroIndex < 0) heroIndex = 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(!prefersReducedMotion){
    let heroTimer = setInterval(advanceHeroSlide, 5500);

    function advanceHeroSlide(){
      heroSlides[heroIndex].classList.remove('active');
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroSlides[heroIndex].classList.add('active');
    }

    // Pause the rotation while the browser tab is not visible.
    document.addEventListener('visibilitychange', () => {
      if(document.hidden){
        clearInterval(heroTimer);
      } else {
        clearInterval(heroTimer);
        heroTimer = setInterval(advanceHeroSlide, 5500);
      }
    });
  }
}

/* -----------------------------
   6) Scroll reveal animation
   -----------------------------
   Elements with class="reveal" fade/slide in when they enter the screen.
*/
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:.12});
qsa('.reveal').forEach(element => observer.observe(element));

/* -----------------------------
   7) Configurator rendering
   -----------------------------
   This finds the selected package and writes the result card into #config-result.
*/
const chips = qsa('[data-filter]');
const result = qs('#config-result');

function buildWhatsAppUrl(pack){
  // This message is sent when the visitor clicks the configurator WhatsApp button.
  const message = `${pack.title} - ${pack.devices.join(', ')}`;
  return `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderConfig(key='full'){
  // If the HTML page does not include the configurator, stop safely.
  if(!result) return;

  // Select the content for the chosen language and package.
  const languageCopy = copy[langKey] || copy.en;
  const pack = languageCopy.data[key] || languageCopy.data.full;

  // Template for the result card. Edit labels in the copy object above, not here.
  result.innerHTML = `
    <div class="section-kicker">${languageCopy.resultTitle}</div>
    <h3 class="section-title" style="font-size:2rem">${pack.title}</h3>
    <div class="result-grid">
      <div class="mini-card"><strong>${languageCopy.devices}</strong><p>${pack.devices.join(' · ')}</p></div>
      <div class="mini-card"><strong>${languageCopy.checks}</strong><p>${pack.checks}</p></div>
    </div>
    <div class="estimate"><strong>${languageCopy.estimate}</strong><p>${pack.estimate}</p></div>
    <a class="btn btn-primary" style="margin-top:18px" href="${buildWhatsAppUrl(pack)}" target="_blank" rel="noopener">${languageCopy.send}</a>
  `;
}

/* -----------------------------
   8) Configurator button clicks
   -----------------------------
   When a visitor clicks Security/Lighting/etc., update the active button and result card.
*/
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  renderConfig(chip.dataset.filter);
}));

/* Show the full-home recommendation when the page first loads. */
renderConfig('full');

/* -----------------------------
   9) Lead form -> Google Form bridge
   -----------------------------
   The visible contact form is styled to match the site (not Google's default look), but it is a
   REAL, NATIVE HTML form: its action/method/target attributes (set directly in the HTML) point
   straight at the connected Google Form's submit endpoint, and every input's name="entry.NNNNNNN"
   (or name="emailAddress" for the built-in email collector) is the real Google Form field id.
   target="lead-form-target" sends the browser's normal form submission into a hidden iframe on the
   page, so Google's confirmation page loads invisibly instead of navigating the visitor away.

   Using a real form submission (rather than fetch) is deliberate: it is the more reliable of the
   two common techniques for bridging a custom-styled form to Google Forms, since a native
   cross-origin form POST is not subject to the same fetch/XHR restrictions that can cause a
   fetch('...', {mode:'no-cors'}) submission to silently fail against Google's endpoint.

   This script's only job is small: fill in the 5 hidden date/time inputs from the one visible
   date/time picker right before the form submits (Google's date+time question is really 5 separate
   fields under the hood), and swap in a "thank you" panel a moment after submitting. Because the
   iframe target is cross-origin, the page can never read back a real success/failure response from
   Google — this optimistic "assume it worked" delay is the standard, widely-used approach for this
   pattern. Always confirm with a real test submission that it appears in the form's Responses tab.
*/
const leadForm = qs('#lead-form');
if(leadForm){
  const successPanel = qs('#lead-form-success');
  const submitBtn = leadForm.querySelector('button[type="submit"]');
  const visitEl = qs('#f-visit');

  leadForm.addEventListener('submit', function(e){
    if(!leadForm.checkValidity()){
      e.preventDefault();
      leadForm.reportValidity();
      return;
    }

    // Split "YYYY-MM-DDTHH:MM" from the visible datetime-local picker into the 5 hidden fields
    // Google's date+time question actually expects these values before the native submit proceeds.
    const visitValue = visitEl ? visitEl.value : '';
    if(visitValue){
      const [datePart, timePart] = visitValue.split('T');
      const [y, m, d] = datePart.split('-');
      const yearInput = qs('#f-visit-year');
      const monthInput = qs('#f-visit-month');
      const dayInput = qs('#f-visit-day');
      const hourInput = qs('#f-visit-hour');
      const minuteInput = qs('#f-visit-minute');

      if(yearInput) yearInput.value = y;
      if(monthInput) monthInput.value = String(Number(m));
      if(dayInput) dayInput.value = String(Number(d));
      if(timePart){
        const [hh, mm] = timePart.split(':');
        if(hourInput) hourInput.value = String(Number(hh));
        if(minuteInput) minuteInput.value = String(Number(mm));
      }
    }

    if(submitBtn){
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    const payload = new FormData(leadForm);
    fetch(leadForm.action, {
      method: 'POST',
      mode: 'no-cors',
      body: payload
    }).finally(() => {
      setTimeout(() => {
        leadForm.hidden = true;
        if(successPanel) successPanel.hidden = false;
      }, 900);
    });
  });
}

