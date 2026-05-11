// footer.js - Four equal columns with "About Our School" heading, uniform gaps, balanced content

function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer-section';

  // Professional SVG icons
  const facebookIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>`;
  const twitterIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>`;
  const instagramIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.98c2.93 0 3.27.01 4.43.06 1.07.04 1.65.22 2.04.37.51.2.87.43 1.26.82.38.39.62.75.82 1.26.14.39.33.97.37 2.04.05 1.16.06 1.5.06 4.43s-.01 3.27-.06 4.43c-.04 1.07-.22 1.65-.37 2.04-.2.51-.43.87-.82 1.26-.39.38-.75.62-1.26.82-.39.14-.97.33-2.04.37-1.16.05-1.5.06-4.43.06s-3.27-.01-4.43-.06c-1.07-.04-1.65-.22-2.04-.37-.51-.2-.87-.43-1.26-.82-.38-.39-.62-.75-.82-1.26-.14-.39-.33-.97-.37-2.04-.05-1.16-.06-1.5-.06-4.43s.01-3.27.06-4.43c.04-1.07.22-1.65.37-2.04.2-.51.43-.87.82-1.26.39-.38.75-.62 1.26-.82.39-.14.97-.33 2.04-.37 1.16-.05 1.5-.06 4.43-.06zM12 7.54c-2.46 0-4.46 2-4.46 4.46s2 4.46 4.46 4.46 4.46-2 4.46-4.46-2-4.46-4.46-4.46zM18.46 6.54c0 .65-.53 1.18-1.18 1.18s-1.18-.53-1.18-1.18.53-1.18 1.18-1.18 1.18.53 1.18 1.18z"/></svg>`;
  const linkedinIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45H16.9V14.9c0-1.3-.03-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.9v5.63H9.24V9.24h3.4v1.57h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.04zM5.34 7.67c-1.1 0-1.99-.9-1.99-1.99s.89-2 2-2 1.99.9 1.99 2-.9 1.99-2 1.99zm1.72 12.78H3.62V9.24h3.44v11.21z"/></svg>`;

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Column 1: About Our School -->
        <div class="footer-col">
          <div class="logo-wrapper">
          
            <h3>About School</h3>
          </div>
          <p class="brand-desc">Santhi Nikethan Educational Institutions offers holistic education inspired by Rabindranath Tagore, nurturing academic excellence and character development in a serene campus setting.</p>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" class="social-icon">${facebookIcon}</a>
            <a href="https://twitter.com" target="_blank" class="social-icon">${twitterIcon}</a>
            <a href="https://instagram.com" target="_blank" class="social-icon">${instagramIcon}</a>
            <a href="https://linkedin.com" target="_blank" class="social-icon">${linkedinIcon}</a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-list">
            <li><a href="#about">About</a></li>
            <li><a href="#academics">Classes</a></li>
            <li><a href="#achievements">Awards & achievements</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </div>

        <!-- Column 3: Resources -->
        <div class="footer-col">
          <h4>Resources</h4>
          <ul class="footer-list">
            <li><a href="#">Parent portal</a></li>
            <li><a href="#">Student handbook</a></li>
            <li><a href="#">Alumni network</a></li>
            <li><a href="#">Blog & news</a></li>
          </ul>
        </div>

        <!-- Column 4: Contact Us (address last) -->
        <div class="footer-col">
          <h4>Contact Us</h4>
          <div class="contact-stack">
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span>+91 8885554498, +91 8885554394</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span>santhinikethaneduinst@gmail.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>Door no: 4-7-340/P94, Raghavendranagar, Hayathnagar, Ranga Reddy Dist, PIN: 501505.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="newsletter-card">
        <div class="newsletter-vertical">
          <div class="newsletter-logo">
           <img src="Images/log.png" alt="Newsletter Icon" width="60" height="60">
          </div>
          <h4 class="newsletter-heading">Stay Inspired</h4>
          <p class="newsletter-sub">Subscribe for updates on events, achievements, and insights.</p>
          <form class="newsletter-form-horizontal" id="footerNewsletterForm">
            <div class="input-group-horizontal">
              <input type="email" id="newsEmail" placeholder="Your email address" autocomplete="email">
              <button type="submit">Subscribe</button>
            </div>
            <div class="form-message" id="formMessage"></div>
          </form>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <div class="bottom-row">
          <p>Copyright © 2026 Santhi Nikethan Educational Institutions | Developed by OMAXSYS (Mob: +91 9700779391)</p>
          <div class="bottom-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
          </div>
        </div>
      </div>
    </div>
  `;

  const existingFooter = document.querySelector('footer.footer-section');
  if (existingFooter) existingFooter.remove();
  document.body.appendChild(footer);
  addFooterStyles();
  initFooterEvents();
}

function addFooterStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .footer-section {
      background: linear-gradient(105deg, #0f2b3d 0%, #1b4a6e 40%, #2c6288 100%);
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
      border-top: 3px solid #00bcd4;
      margin-top: auto;
      animation: fadeInUp 0.6s ease-out;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .footer-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 3rem 1.8rem 1.8rem;
    }
    /* Equal width columns with uniform gap */
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    .footer-col {
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 100%;
      word-break: break-word;
    }
    .footer-col h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0 0 1.2rem 0;
      color: #ffffff;
      letter-spacing: -0.2px;
    }
    .logo-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 0.75rem;
    }
    .logo-wrapper h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
    }
    .brand-desc {
      font-size:1rem;
      line-height: 1.6;
      color: #cbd5e1;
      margin: 0.5rem 0 1.2rem;
    }
    .social-icons {
      display: flex;
      gap: 1rem;
      margin-top: auto;
    }
    .social-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      background: rgba(0, 188, 212, 0.12);
      border: 1px solid rgba(0, 188, 212, 0.5);
      border-radius: 50%;
      transition: all 0.25s ease;
      color: #00bcd4;
      text-decoration: none;
    }
    .social-icon svg {
      width: 17px;
      height: 17px;
      fill: currentColor;
    }
    .social-icon:hover {
      background: #00bcd4;
      color: #0f2b3d;
      transform: translateY(-3px);
      border-color: #00bcd4;
    }
    .footer-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .footer-list li {
      margin-bottom: 0.75rem;
    }
    .footer-list a {
      color: #cbd5e1;
      text-decoration: none;
      font-size:1rem;
      transition: all 0.2s;
      display: inline-block;
    }
    .footer-list a:hover {
      color: #00bcd4;
      transform: translateX(6px);
    }
    .contact-stack {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .contact-item {
      display: flex;
      gap: 1rem;
      font-size: 0.9rem;
      color: #cbd5e1;
      line-height: 1.45;
    }
    .contact-icon {
      font-size: 1rem;
      flex-shrink: 0;
    }
    .newsletter-card {
      background: rgba(0, 188, 212, 0.06);
      border-radius: 28px;
      margin: 0.5rem 0 2rem;
      padding: 2rem;
      border: 1px solid rgba(0, 188, 212, 0.25);
      transition: all 0.3s;
    }
    .newsletter-card:hover {
      border-color: rgba(0, 188, 212, 0.5);
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }
    .newsletter-vertical {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }
    .newsletter-logo {
      margin-bottom: 0.5rem;
      animation: floatLogo 3s ease-in-out infinite;
      display: inline-block;
    }
    @keyframes floatLogo {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    .newsletter-heading {
      font-size: 1.6rem;
      color: white;
      margin: 0.3rem 0 0.5rem;
      font-weight: 700;
    }
    .newsletter-sub {
      color: #cbd5e1;
      font-size:1rem;
      margin-bottom: 1.5rem;
    }
    .input-group-horizontal {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .newsletter-form-horizontal input {
      flex: 1;
      min-width: 240px;
      padding: 0.8rem 1.2rem;
      border: none;
      border-radius: 5px;
      font-size: 0.9rem;
      background: #f0f4f8;
      color: #0f2b3d;
      outline: none;
      font-family: inherit;
    }
    .newsletter-form-horizontal input:focus {
      background: #ffffff;
      box-shadow: 0 0 0 2px #00bcd4;
    }
    .newsletter-form-horizontal button {
      background: linear-gradient(95deg, #00bcd4, #0e8f9e);
      border: none;
      padding: 0.8rem 1.8rem;
      border-radius: 5px;
      font-weight: 600;
      color: #0f2b3d;
      cursor: pointer;
      font-size: 0.9rem;
      white-space: nowrap;
      font-family: inherit;
      transition: all 0.2s;
    }
    .newsletter-form-horizontal button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 14px rgba(0, 188, 212, 0.4);
    }
    .form-message {
      font-size: 0.8rem;
      margin-top: 0.75rem;
      min-height: 1.8rem;
    }
    .footer-bottom {
      border-top: 1px solid rgba(0, 188, 212, 0.3);
      padding-top: 1.5rem;
    }
    .bottom-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      font-size: 0.85rem;
      color: #94a3b8;
    }
    .bottom-links {
      display: flex;
      gap: 1.5rem;
    }
    .bottom-links a {
      color: #cbd5e1;
      text-decoration: none;
      transition: color 0.2s;
    }
    .bottom-links a:hover {
      color: #00bcd4;
    }
    @media (max-width: 900px) {
      .footer-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2rem;
      }
    }
    @media (max-width: 600px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .footer-container {
        padding: 2rem 1.2rem;
      }
      .input-group-horizontal {
        flex-direction: column;
      }
      .newsletter-form-horizontal button {
        width: 100%;
      }
      .bottom-row {
        flex-direction: column;
        text-align: center;
      }
      .bottom-links {
        justify-content: center;
      }
    }
  `;
  document.head.appendChild(style);
}

function initFooterEvents() {
  const form = document.getElementById('footerNewsletterForm');
  const msgDiv = document.getElementById('formMessage');
  const emailInput = document.getElementById('newsEmail');
  if (form && msgDiv && emailInput) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z-]+\.(com|in|org|net)$/i;
      if (!email) {
        msgDiv.textContent = '❌ Please enter your email address.';
        msgDiv.style.color = '#ffb3b3';
        emailInput.style.border = '1px solid #ff8888';
        setTimeout(() => emailInput.style.border = '', 1500);
        return;
      }
      if (!emailPattern.test(email)) {
        msgDiv.textContent = '❌ Valid email: name@domain.com, .in, .org, .net';
        msgDiv.style.color = '#ffb3b3';
        emailInput.style.border = '1px solid #ff8888';
        setTimeout(() => emailInput.style.border = '', 1500);
        return;
      }
      msgDiv.textContent = '✓ Subscribed successfully! Thank you.';
      msgDiv.style.color = '#a5f7b0';
      emailInput.value = '';
      setTimeout(() => msgDiv.textContent = '', 4000);
    });
  }

  const anchors = document.querySelectorAll('.footer-list a[href^="#"], .bottom-links a[href^="#"]');
  anchors.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 80;
          window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
        }
      }
    });
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createFooter);
else createFooter();