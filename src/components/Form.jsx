import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Form ()
{
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [modal, setModal] = useState("");

    const sendEmail = (e) =>
    {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            form.current, 
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setModal("Merci ! Votre message a bien été envoyé.");
            form.current.reset();
        })
        .catch((error) => {
            console.error('Erreur:', error);
            setModal("Oups, l'envoi a échoué. Vérifiez votre connexion.");
        })
        .finally(() => setIsSending(false));
    };
    
    return (
        <>
            <div className="py-6 sm:py-12 text-center">
              <h1 className="inline-block text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent mx-auto">
                Me contacter
              </h1>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-4 w-full md:w-1/2 mx-auto">
                <input
                    type="text" 
                    name="name" 
                    placeholder="Votre nom" 
                    required 
                    className="p-3 rounded-lg border border-black text-black"
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Votre email" 
                    required 
                    className="p-3 rounded-lg border border-black text-black"
                />
                <textarea 
                    name="message" 
                    placeholder="Parlez-moi de votre projet (web, 3D, simulation...)" 
                    required 
                    className="p-3 rounded-lg border border-black text-black h-40"
                />
                
                <button 
                    type="submit" 
                    disabled={isSending}
                    className="text-cyan-200 text-lg sm:text-2xl font-bold bg-black w-full md:w-1/2 mx-auto px-4 py-2 rounded-xl border border-violet-700 border-4 hover:scale-105 transition duration-200"
                >
                    {isSending ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
                <Link to="/" className="text-cyan-200 text-lg sm:text-2xl font-bold bg-black w-full md:w-1/2 mx-auto px-4 py-2 rounded-xl border border-violet-700 border-4 hover:scale-105 transition duration-200">
                    Retour à l'accueil
                </Link>
            </form>

            {
                modal !== "" &&

                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg w-4/5 md:w-1/2">
                        <p className="text-2xl">{modal}</p>
                        <div className="flex flew-row justify-around mt-5">
                            <button className="text-cyan-200 text-lg sm:text-2xl font-bold bg-black px-4 py-2 my-2 rounded-xl border border-violet-700 border-4 hover:scale-105 transition duration-200" onClick={() => setModal("")}>OK</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}