import { useTranslation } from "react-i18next";
import { FaYoutube, FaInstagram, FaTelegram, FaGithub } from "react-icons/fa";
const Footer = () => {
  const { t } = useTranslation();
  const menuItems = {
    home: {
      label: t("menu.home"),
      link: "#home",
    },
    about: {
      label: t("menu.about"),
      link: "#about",
    },
    portfolio: {
      label: t("menu.portfolio"),
      link: "#portfolio",
    },
    skill: {
      label: t("menu.skill"),
      link: "#skills",
    },
    contact: {
      label: t("menu.contact"),
      link: "#contact",
    },
  };
  return (
    <>
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 md:w-1/3 text-slate-300">
              <h2 className="font-bold text-3xl text-white mb-3">
                Agus Efendi
              </h2>
              <p className="text-sm mb-4">{t("footer.slug")}</p>

              <p className="text-sm">📧 agusefendi413@gmail.com</p>
            </div>

            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">
                Tech Stack
              </h3>

              <div className="flex flex-wrap items-center gap-4">
                {[
                  { name: "React", img: "/img/skills/react.svg" },
                  { name: "Tailwind", img: "/img/skills/tailwind.svg" },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded hover:bg-slate-700 transition"
                  >
                    <img src={tech.img} className="w-5" />
                    <span className="text-sm text-slate-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">
                Navigation
              </h3>

              <ul className="text-slate-300 space-y-2">
                {Object.entries(menuItems).map(([key, value]) => (
                  <li key={key}>
                    <a
                      href={value.link}
                      className="text-sm hover:text-primary transition"
                    >
                      {value.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full pt-10 border-t border-slate-800">
            {/* Social */}
            <div className="flex justify-center mb-6">
              <a
                href="https://www.youtube.com/@xyncyutub"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="https://www.instagram.com/agusefendi.deb/"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://t.me/xyncxync"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaTelegram size={18} />
              </a>
              <a
                href="https://github.com/agusefendy"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaGithub size={18} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-slate-500 text-center">
              © 2026 Agus Efendi.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
