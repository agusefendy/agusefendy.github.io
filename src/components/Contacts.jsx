import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const text = `Contact web portfolio \nNama: ${name} \nEmail: ${email} \nMessage: ${message}`
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: "5343486641",
                text: text,
                disable_web_page_preview: false,
                disable_notification: false,
                reply_to_message_id: null
            })
        };

        const send = await fetch('https://api.telegram.org/bot7194515061:AAFMdHPXNlqhs9Gl4Ad2d-V3iBwSQbE8-u4/sendMessage', options)
        if (send.status == 200) {
            const success = document.querySelector("#n-success")
            success.classList.remove("hidden")
            setName("")
            setEmail("")
            setMessage("")
            setLoading(false)
        } else {
            const fail = document.querySelector("#n-fail")
            fail.classList.remove("hidden")
            setLoading(false)
        }
        // })
    }
    return (
        <>
            <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary mb-2">{t('contact.label')}</h4>
                            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">{t('contact.slug')}</h2>
                            <p className="font-medium text-md text-slate-500 md:text-lg">{t('contact.description')}</p>
                        </div>
                    </div>
                    <form name="contact-form" onSubmit={submit}>
                        <div className="w-full lg:w-2/3 lg:mx-auto">
                            <div className="w-full px-4 mb-8">
                                <label htmlFor="name" className="text-base font-bold text-primary">{t('contact.name')}</label>
                                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" required />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label htmlFor="email" className="text-base font-bold text-primary">Email</label>
                                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" required />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label htmlFor="pesan" className="text-base font-bold text-primary">{t('contact.message')}</label>
                                <textarea id="pesan" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
                            </div>
                            <div className="w-full px-4">
                                <button type="submit" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">{loading ? "Loading..." : t('contact.button')}</button>
                            </div>
                            <p id="n-success" className="font-medium text-md text-slate-500 md:text-lg mt-3 text-center hidden">{t('contact.success')}</p>
                            <p id="n-fail" className="font-medium text-md text-red-500 md:text-lg mt-3 text-center hidden">{t('contact.fail')}</p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Contact;