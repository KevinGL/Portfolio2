

export const Skills = () =>
{
    const skills =
    [
        {
            title: "Backend",
            desc: ["PHP (Symfony, Laravel)", "API", "Authentification", "Temps réel"]
        },

        {
            title: "Frontend",
            desc: ["React", "Next.js", "Tailwind CSS"]
        },
        
        {
            title: "BDD",
            desc: ["MySQL", "Firebase", "PostgreSQL"]
        },
        
        {
            title: "Infra & outils",
            desc: ["Render", "Vercel", "Docker", "Git", "Github"]
        },
        
        {
            title: "Rendu 2D / 3D",
            desc: ["SDL", "OpenGL", "WebGL"]
        },
        
        {
            title: "Autres",
            desc: ["C/C++", "Notion IA"]
        }
    ];

    return (
        <>
            <div className="py-12 text-center">
                <h2 className="inline-block text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent mx-auto">
                  Compétences
                </h2>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap justify-around">
                {
                    skills.map((skill) =>
                    {
                        return (
                            <div className="w-4/5 sm:w-2/5 bg-gray-200 rounded-lg mx-auto sm:mx-5 shadow-[0_0_40px_rgba(255,0,255,0.75)] mb-20 h-min">
                                <h1 className="font-bold text-lg md:text-4xl text-black border-b border-black mt-2 mx-5 mb-5">{skill.title}</h1>
                                <ul className="text-sm sm:text-xl text-black mx-2 mb-5 text-left">
                                    {
                                        skill.desc.map((d) =>
                                        {
                                            return (
                                                <li>{d}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}