// header.js - Fully responsive header with image logo, no text wrapping, scrollable mobile menu
// Modern contact button without underline

function createHeader() {
    const header = document.createElement('header');
    header.className = 'navbar-header';

    header.innerHTML = `
    <nav class="navbar">
      <div class="navbar-container">
      <div class="navbar-logo">
  <a href="index.html" class="logo-link">
    
    <img src="Images/log.png" alt="School Logo" class="logo-img">

    <div class="logo-text">
      <h2>Shanthinikethan</h2>
      <span>TET</span>
    </div>

  </a>
</div>
        <div class="hamburger-menu" id="hamburgerMenu" aria-label="Toggle navigation" aria-expanded="false">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </div>
        <ul class="nav-menu" id="navMenu">
          <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="aboutus.html" class="nav-link">About Us</a></li>
          <li class="nav-item"><a href="achivements.html" class="nav-link">Achievements</a></li>
          <li class="nav-item"><a href="Academic.html" class="nav-link">Academics</a></li>
          <li class="nav-item"><a href="whoweare.html" class="nav-link">Who Are We</a></li>
          <li class="nav-item"><a href="admission.html" class="nav-link">Admissions</a></li>
         <li class="nav-item">
  <a href="contact.html" class="nav-link contact-btn">
    Contact Us
  </a>
</li>
        </ul>
      </div>
    </nav>
  `;

    document.body.insertBefore(header, document.body.firstChild);

    const style = document.createElement('style');
    style.textContent = `
    .navbar-header {
      background: linear-gradient(105deg, #0f2b3d 0%, #1b4a6e 40%, #2c6288 100%);
      box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255,255,255,0.1) inset;
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: all 0.25s ease;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    }
    .navbar-header.scrolled {
      box-shadow: 0 18px 35px -12px rgba(0, 0, 0, 0.35);
      background: linear-gradient(105deg, #0a2535 0%, #13415e 40%, #23577a 100%);
    }
    .navbar {
      width: 100%;
    }
    .navbar-container {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 28px;
      height: 80px;
    }
    .navbar-logo {
      display: flex;
      align-items: center;
    }
    .logo-link {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      transition: transform 0.2s ease;
    }
    .logo-link:hover {
      transform: translateY(-2px);
      filter: drop-shadow(0 6px 12px rgba(0,0,0,0.15));
    }
    .logo-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .logo-img {
      height: 80px;
      width: auto;
      max-width: 180px;
      display: block;
      object-fit: contain;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
    }
    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
      align-items: center;
    }
    .nav-link {
      color: #f1f5f9;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      padding: 0.5rem 0;
      position: relative;
      display: inline-block;
      white-space: nowrap;
    }
    /* underline for normal nav links only - EXCLUDING contact button */
    .nav-link:not(.contact-btn)::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2.5px;
      background: linear-gradient(90deg, #FFD966, #FFB347, #FFE484);
      border-radius: 4px;
      transition: width 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
    }
    .nav-link:not(.contact-btn):hover::after {
      width: 100%;
    }
    .nav-link:hover {
      color: #FFECB3;
    }
    /* Modern contact button - no underline, sleek gradient */
    .contact-btn {
      background: linear-gradient(135deg, #ffb347, #ff8c00);
      color: white !important;
      padding: 8px 22px;
      border-radius: 40px;
      font-weight: 600;
      text-decoration: none;
      display: inline-block;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      border: none;
      white-space: nowrap;
    }
    .contact-btn:hover {
      background: linear-gradient(135deg, #ffa01e, #e07c00);
      transform: translateY(-2px);
      box-shadow: 0 8px 18px rgba(0,0,0,0.25);
      color: white !important;
    }
    .contact-btn::after {
      display: none !important;
    }
    .hamburger-menu {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 6px;
      padding: 8px;
      border-radius: 40px;
    }
    .hamburger-menu:hover {
      background: rgba(255,255,240,0.12);
    }
    .hamburger-line {
      width: 28px;
      height: 2.5px;
      background-color: white;
      border-radius: 20px;
      transition: all 0.25s ease;
    }
    .hamburger-menu.active .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translate(9px, 8px);
    }
    .hamburger-menu.active .hamburger-line:nth-child(2) {
      opacity: 0;
      transform: translateX(-8px);
    }
    .hamburger-menu.active .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translate(9px, -8px);
    }

    /* Prevent nav text wrapping on desktop */
    @media (max-width: 1024px) {
      .nav-menu {
        gap: 1.2rem;
      }
      .nav-link {
        font-size: 0.9rem;
      }
    }
    @media (max-width: 900px) {
      .nav-menu {
        gap: 1rem;
      }
      .nav-link {
        font-size: 0.85rem;
      }
    }
    @media (max-width: 768px) {
      .navbar-container {
        height: 70px;
        padding: 0 20px;
      }
      .hamburger-menu {
        display: flex;
      }
      .nav-menu {
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        flex-direction: column;
        background: linear-gradient(145deg, #0b2a3b 0%, #0e2c41 100%);
        gap: 0;
        max-height: 0;
        overflow-y: auto;
        transition: max-height 0.4s ease-in-out;
        box-shadow: 0 20px 28px -12px rgba(0,0,0,0.4);
        border-radius: 0 0 28px 28px;
        z-index: 999;
      }
      .nav-menu.active {
        max-height: calc(100vh - 70px);
        padding: 1.2rem 0 2rem 0;
        border-top: 1px solid rgba(255,220,100,0.25);
      }
      .nav-item {
        width: 90%;
        text-align: center;
        padding: 12px 0;
        border-bottom: 1px solid rgba(255,255,210,0.08);
        margin: 0 auto;
      }
      .nav-item:last-child {
        border-bottom: none;
      }
      .nav-link {
        font-size: 1.1rem;
        padding: 6px 18px;
        white-space: normal;
      }
      .nav-link::after {
        display: none;
      }
      .nav-link:hover {
        background: rgba(255,215,100,0.18);
        border-radius: 60px;
      }
      .contact-btn {
        background: linear-gradient(135deg, #ffb347, #ff8c00);
        margin-top: 10px;
        display: inline-block;
      }
      .logo-img {
        height: 60px;
      }
    }
    @media (max-width: 550px) {
      .navbar-container {
        height: 60px;
        padding: 0 16px;
      }
      .logo-img {
        height: 50px;
      }
      .nav-menu {
        top: 60px;
      }
      .nav-menu.active {
        max-height: calc(100vh - 60px);
      }
    }
    @media (max-width: 400px) {
      .logo-img {
        height: 46px;
      }
    }
      .navbar-logo {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  // border: 2px solid #ffffff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.logo-text h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: 1px;
}

.logo-text span {
  font-size: 14px;
  color: #ffd700;
  font-weight: 600;
  letter-spacing: 2px;
}
 
  `;
    document.head.appendChild(style);

    // Mobile menu toggle with scroll
    const hamburger = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        const toggleMenu = () => {
            const isActive = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
        };

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            });
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.navbar-header') && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    window.addEventListener('scroll', () => {
        const headerEl = document.querySelector('.navbar-header');
        if (headerEl) {
            if (window.scrollY > 15) headerEl.classList.add('scrolled');
            else headerEl.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || !targetId) return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.navbar-header')?.offsetHeight || 80;
                const offset = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
                window.scrollTo({ top: offset, behavior: "smooth" });
                history.pushState(null, null, targetId);
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createHeader);
} else {
    createHeader();
}