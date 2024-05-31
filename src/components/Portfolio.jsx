import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const PortfolioComponent = () => {
    const { t } = useTranslation('port')
    const portfolioItems = t('data', { returnObjects: true })
    return (
        <>
            <section id="portfolio" className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800">
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
                            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">{t('labelPortfolio', { ns: 'general' })}</h2>
                            <p className="font-medium text-md text-slate-500 md:text-lg">{t('descriptionPortfolio', { ns: "general" })}</p>
                        </div>
                    </div>
                    <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                        {portfolioItems.map((item, index) => (
                            <div className="mb-12 p-4 md:w-1/2" key={index}>
                                <div className="rounded-md shadow-md overflow-hidden">
                                    <img src={"/img/portfolio/" + item.image} width="w-full" className="transform hover:scale-110 transition duration-300 ease-in-out" />
                                </div>
                                <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">{item.title}</h3>
                                <p className="font-medium text-base text-slate-500 mb-5">{item.description}</p>
                                <Link to={"/detail/" + index} className="text-base font-semibold text-white bg-primary py-3 px-8 rounded hover:shadow-lg hover:opacity-80">Detail</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default PortfolioComponent;