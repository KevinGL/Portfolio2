

const Presentation = () =>
{
    const cards =
    [
        {
            title: "Une passion depuis 15 ans",
            list:
            [
                {
                    punchline: "Depuis 2011",
                    text: "Des compétences développées avec le temps"
                },

                {
                    punchline: "From scratch",
                    text: "J'aime transformer une page blanche en solution concrète"
                },

                {
                    punchline: "Vocation",
                    text: "Le code est pour moi un art autant qu'un métier"
                }
            ]
        },

        {
            title: "Sérieux",
            list:
            [
                {
                    punchline: "Performance",
                    text: "La rigueur du bas niveau appliquée à vos projets"
                },

                {
                    punchline: "Engagement",
                    text: "Respect strict de vos délais et cahiers des charges"
                },

                {
                    punchline: "Transparence",
                    text: "Un suivi clair via des bilans hebdomadaires"
                }
            ]
        },

        {
            title: "IA & Efficacité",
            list:
            [
                {
                    punchline: "Vitesse",
                    text: "Un véritable gain de temps"
                },

                {
                    punchline: "Qualité",
                    text: "Détection rapide des bugs"
                },

                {
                    punchline: "Anticipation",
                    text: "Des solutions pensées pour l'avenir"
                }
            ]
        },

        {
            title: "Plus que de simples applications web",
            list:
            [
                {
                    punchline: "Images plus parlantes",
                    text: "Expérience interactive au lieu de pavés de texte"
                },

                {
                    punchline: "La 3D à votre service",
                    text: "Visualisez immédiatement vos résultats"
                },

                {
                    punchline: "Sur mesure",
                    text: "Jeux et simulateurs optimisés"
                }
            ]
        }
    ]
    
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-16 justify-center mb-20">
            {
                cards.map((card) =>
                {
                    return (
                        <div className="bg-white rounded-lg w-4/5 mx-auto md:mx-0 md:w-1/3 shadow-[0_0_40px_rgba(255,0,255,0.75)]">
                            <h2 className="font-bold text-lg md:text-2xl text-black border border-solid border-black rounded-lg mt-2 mx-5 mb-5">{card.title}</h2>
                            <ul className="text-left px-4">
                                {
                                    card.list.map((list) =>
                                    {
                                        return (
                                            <li className="mb-2"><span className="font-bold">{list.punchline} :</span> {list.text}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Presentation;