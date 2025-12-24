import ClauddevLogo from "@assets/clauddev_logo.png"

export function Home() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                <div className="flex justify-center">
                    <img
                        className="w-full h-auto rounded-lg"
                        src={ClauddevLogo}
                        alt="Descripción de la imagen"
                    />
                </div>
                <div className="px-6 py-4 text-center">
                    <div className="text-gray-700 font-bold text-xl mb-2">"Creando el futuro en la nube, un código a la vez."</div>
                    <p className="text-gray-700 text-base">
                        Próximamente...
                    </p>
                </div>

            </div>
        </div>
    )
}