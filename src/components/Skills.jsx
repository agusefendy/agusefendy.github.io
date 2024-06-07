import { useTranslation } from "react-i18next";

const Skill = () => {
    const { t } = useTranslation()
    const skills = ["/img/skills/html.svg", "/img/skills/Bootstrap.svg", "/img/skills/tailwind.svg", "/img/skills/js.svg", "/img/skills/php.svg", "/img/skills/Laravel.svg", "/img/skills/codeigniter.svg", "/img/skills/nodejs.svg", "/img/skills/express.svg", "/img/skills/react.svg"]

    return (
        <>
            <section id="skills" className="pt-36 pb-32 bg-slate-700 dark:bg-slate-300">
                <div className="container">
                    <div className="w-full px-4">
                        <div className="mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary mb-2">{t('skill.label')}</h4>
                            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-dark">{t('skill.slug')}</h2>
                            <p className="font-medium text-md text-slate-500 md:text-lg">{t('skill.description')}</p>
                        </div>
                    </div>
                    <div className="w-full px-4">

                        <div className="flex flex-wrap justify-center items-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">

                            {skills.map((item, index) => (
                                <div key={index} className="block w-1/2 py-10 text-center lg:w-1/4 ">
                                    <img src={item} className="block mx-auto max-w-[120px] transform hover:scale-110 transition duration-300 ease-in-out" width="208" height="217" />
                                </div>
                            ))}

                        </div>

                        {/* <div className="flex flex-wrap items-center justify-center">
                            {Object.entries(skills).map(([key, value]) => (
                                <div key={key} className="w-full px-4 lg:w-1/2 xl:w-1/3 mb-5">
                                    <div className="flex rounded-lg bg-white dark:bg-slate-400 md:max-w-xl md:flex-row">
                                        <img className="max-w-[120px] mx-4 py-4 rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg md:w-full md:text-center"
                                            src={value.img}
                                            alt="" width="208" height="217" />
                                        <div className="flex flex-col justify-start p-6">
                                            <h5 className="mb-2 text-xl font-semibold text-primary dark:text-neutral-50">
                                                {value.label}
                                            </h5>
                                            <p className="mb-4 text-base text-slate-500 dark:text-neutral-200">
                                                {value.slug}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skill;