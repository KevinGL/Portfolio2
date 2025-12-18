

export const Contacts = () =>
{
    const contacts =
    [
        ""
    ]

    return (
        <>
            <div className="py-12 text-center">
                <h2 className="inline-block text-5xl sm:text-6xl font-extrabold mb-16 bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent mx-auto">
                  Me contacter
                </h2>

                <div className="flex flex-col justify-around sm:w-1/2 sm:mx-auto">

                    <div className="flex flex-row text-2xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent mx-auto">
                        <img src="img/linkedin.png" alt="LinkedIn" className="w-[32px] h-[32px]" />
                        <a href="https://www.linkedin.com/in/kévin-gay-2aba47225">
                            <span className="bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent ml-5">
                                LinkedIn
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-row text-2xl sm:text-3xl font-extrabold mb-4 mx-auto">
                        <img src="img/malt-svgrepo-com.svg" alt="Malt" className="w-[32px] h-[32px]" />
                        <a href="https://www.malt.fr/profile/kevingay2">
                            <span className="bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent ml-5">
                                Malt
                            </span>
                        </a>
                    </div>

                    <a href="mailto:gaykevin.gay448@gmail.com" className="inline-block text-2xl sm:text-3xl font-extrabold mb-4 mx-auto">
                        ✉️
                        <span className="bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent ml-5">
                            gaykevin.gay448@gmail.com
                        </span>
                    </a>

                    <div className="inline-block text-2xl sm:text-3xl font-extrabold mb-4 mb-4 mx-auto">
                        📞
                        <span className="bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent ml-5">
                            06.42.42.75.21
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}