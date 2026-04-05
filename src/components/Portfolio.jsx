// import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const PortfolioComponent = () => {
  const { t } = useTranslation("port");
  const portfolioItems = t("data", { returnObjects: true });

  const [visible, setVisible] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All");

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section
        id="portfolio"
        className="pt-36 pb-36 bg-slate-100 dark:bg-slate-800"
      >
        <div className="container">
          {/* Header */}
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-5">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Portfolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
                {t("labelPortfolio", { ns: "general" })}
              </h2>
              <p className="font-medium text-md text-slate-500 md:text-lg">
                {t("descriptionPortfolio", { ns: "general" })}
              </p>
            </div>

            <div className="flex justify-center gap-3 mb-10 flex-wrap">
              {["All", "Web", "Bot", "Extension"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisible(6);
                  }}
                  className={`px-4 py-1 text-sm rounded-full transition ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="w-full px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:w-10/12 xl:mx-auto">
            {filteredItems.slice(0, visible).map((item, index) => (
              <div key={index} className="p-4">
                {/* Image */}
                <div className="rounded-md overflow-hidden">
                  <img
                    src={"/img/portfolio/" + item.image}
                    className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-xl text-dark mt-5 mb-2 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 mb-4 line-clamp-4">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.stack?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="flex justify-between items-center">
                  <a
                    href={item.github}
                    target="_blank"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View Code →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {visible < filteredItems.length && (
            <div className="text-center mt-10">
              <button
                onClick={loadMore}
                className="px-6 py-2 bg-primary text-white rounded hover:opacity-90 transition duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default PortfolioComponent;
