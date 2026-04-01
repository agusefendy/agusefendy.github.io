import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Skill from './components/Skills';
import PortfolioComponent from './components/Portfolio';
import AboutComponent from './components/About';
import Contact from './components/Contacts';
import Footer from './components/Footers';

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') == 'light' ? false : true || true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [lang, setLang] = useState(localStorage.getItem("lang") || 'en')
  const { i18n, t } = useTranslation();
  const menuItems = {
    home: {
      label: t('menu.home'),
      link: "#home"
    },
    about: {
      label: t('menu.about'),
      link: "#about"
    },
    portfolio: {
      label: t('menu.portfolio'),
      link: "#portfolio"
    },
    skill: {
      label: t('menu.skill'),
      link: "#skills"
    },
    contact: {
      label: t('menu.contact'),
      link: "#contact"
    }
  }

  const changeLanguage = (language) => {
    setLang(language)
    localStorage.setItem('lang', language)
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme == "dark") {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode]);

  useEffect(() => {
    window.onscroll = function () {
      const header = document.querySelector('header');
      const toTop = document.querySelector('#to-top');

      if (header && toTop) {
        const fixNav = header.offsetTop;

        if (window.pageYOffset > fixNav) {
          header.classList.add('navbar-fixed');
          toTop.classList.remove('hidden');
          toTop.classList.add('flex');
        } else {
          header.classList.remove('navbar-fixed');
          toTop.classList.remove('flex');
          toTop.classList.add('hidden');
        }
      }
    };

  }, []);

  const changeTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
    setDarkMode(theme == 'light' ? true : false)
  }

  const hamburgerButton = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
      });

      window.addEventListener('click', function (e) {
        if (e.target !== hamburger && e.target !== navMenu) {
          hamburger.classList.remove('hamburger-active');
          navMenu.classList.add('hidden');
        }
      });
    }

  }

  return (
    <>
      {/* <!-- Header Start --> */}
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home" className="font-bold text-lg text-primary block py-6">~AE</a>
            </div>
            <div className="flex items-center px-4">
              <button id="hamburger" name="hamburger" onClick={hamburgerButton} type="button" className="block absolute right-4 lg:hidden">
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark lg:dark:bg-transparent dark:shadow-slate-500">
                <ul className="block lg:flex">
                  {Object.entries(menuItems).map(([key, value]) => (
                    <li key={key} className="group">
                      <a href={value.link} className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">{value.label}</a>
                    </li>
                  ))}

                  <li className="flex items-center pl-8">
                    <div className="flex">
                      <span className="mr-2 text-sm text-slate-500 dark:text-white">light</span>
                      <input type="checkbox" className="hidden" id="dark-toggle" checked={darkMode} onChange={changeTheme} />
                      <label htmlFor="dark-toggle">
                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-500 ease-in-out"></div>
                        </div>
                      </label>
                      <span className="ml-2 text-sm text-slate-500 dark:text-white">dark</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header End --> */}

      {/* <!-- Hero Section Start --> */}
      <section id="home" className="pt-36 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl animate__animated animate__tada">{t('haloHero')} <span className="block font-bold text-dark text-4xl mt-1 mb-2 lg:text-5xl dark:text-white"> Agus Efendi </span></h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5 animate__animated animate__fadeInUp">Software Engineer</h2>
              <p className="font-medium text-slate-400 mb-10 leading-relaxed lg:text-2xl animate__animated animate__fadeInUp">{t('quoteHero')}</p>
              <a href="#contact" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out animate__animated animate__fadeInUp">{t('buttonHero')}</a>
              <button type="button" onClick={() => changeLanguage(lang == "en" ? "id" : "en")} className="text-base font-semibold text-white bg-primary py-3 px-8 ml-2 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out animate__animated animate__fadeInUp">{lang == "en" ? "ID" : "EN"}</button>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2 animate__animated animate__fadeInUp">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img src="/img/me.png" alt="Agus Efendi" className="max-w-full mx-auto relative z-10" />

              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutComponent />
      <PortfolioComponent />
      <Skill />
      <Contact />
      <Footer />

      {/* <!-- Back to top --> */}
      <a href="#home" id="to-top" className="hidden fixed items-center justify-center bottom-4 right-4 p-4 z-[9999] h-14 w-14 bg-primary rounded-full hover:animate-pulse">
        <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
      </a>
    </>
  )
}

export default App
