

export const Projects = () =>
{
    const projects =
    [
        {
            title: "OrionLift",
            desc: "SaaS à usage professionnel, pour gestion de maintenance d'ascenseurs, réception des pannes en temps réel par le technicien, historique côté admin",
            video: "OrionLift"
        },

        {
            title: "Visiomatch",
            desc: "Application de rencontre, speed dating visio, matching, messagerie instantanée",
            video: "VisioMatch"
        },
        
        {
            title: "ShopLite",
            desc: "Site e-commerce avec produits classés par catégories, pagination, panier, commandes avec adresse de livraison",
            video: "ShopLite"
        },
        
        {
            title: "Ferro 1383",
            desc: "Simulateur ferroviaire reproduisant une voie ferrée existante",
            video: "Ferro_1383"
        },
        
        {
            title: "Geometry Dash AI",
            desc: "Petite IA apprenant à éviter les obstacles",
            video: "Geometry_dash"
        }
    ];
    
    return (
        <>
            <div className="py-12 text-center">
                <h1 className="inline-block text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent mx-auto">
                  Projets
                </h1>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap justify-around">
                {
                    projects.map((project) =>
                    {
                        return (
                            <div className="w-4/5 sm:w-2/5 bg-white rounded-lg mx-auto sm:mx-5 shadow-[0_0_40px_rgba(255,0,255,0.75)] mb-20 h-min">
                                <h1 className="font-bold text-lg md:text-4xl text-black border border-solid border-black rounded-lg mt-2 mx-5 mb-5">{project.title}</h1>
                                <p className="text-sm sm:text-xl text-black mx-2 mb-5">{project.desc}</p>
                                <video src={`videos/${project.video}.mp4`} className="rounded-3xl p-2" autoPlay loop muted playsInline></video>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}