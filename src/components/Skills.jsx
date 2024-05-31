import { useTranslation } from "react-i18next";

const Skill = () => {
    const { t } = useTranslation()
    const skills = {
        html: {
            img: "/img/skills/html.svg",
            label: "HTML",
            slug: t('skill.html')
        },
        bootstrap: {
            img: "/img/skills/Bootstrap.svg",
            label: "Bootstrap",
            slug: t('skill.bootstrap')
        },
        javascript: {
            img: "/img/skills/javascript.svg",
            label: "Javascript",
            slug: t('skill.javascript')
        },
        php: {
            img: "/img/skills/php.svg",
            label: "PHP",
            slug: t('skill.php')
        },
        laravel: {
            img: "/img/skills/Laravel.svg",
            label: "Laravel",
            slug: t('skill.laravel')
        },
        codeigniter: {
            img: "/img/skills/codeigniter.svg",
            label: "Codeigniter",
            slug: t('skill.codeigniter')
        },
        nodejs: {
            img: "/img/skills/nodejs.svg",
            label: "NodeJS",
            slug: t('skill.nodejs')
        },
        reactjs: {
            img: "/img/skills/react.svg",
            label: "ReactJS",
            slug: t('skill.reactjs')
        },
    }
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
                        <div className="flex flex-wrap items-center justify-center">
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


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skill;