import FinalPodium from '@/assets/podio_final.jpeg'

const Podium = () => {
    return (
        <div className="relative mb-12 rounded-3xl overflow-hidden bg-surface-dark border border-white/10 shadow-2xl min-h-[450px] flex flex-col items-center justify-center godzilla-gradient">
            <img src={FinalPodium} alt="Podio final" />
        </div>

    )
}

export default Podium