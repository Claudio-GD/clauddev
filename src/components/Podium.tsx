const Podium = () => {
  return (
    <div className="relative mb-12 rounded-3xl overflow-hidden bg-surface-dark border border-white/10 shadow-2xl min-h-[450px] flex flex-col items-center justify-center godzilla-gradient">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/assets/podio_final.webp"
          type="image/webp"
        />

        <img
          src="/assets/podio_final_responsive.webp"
          alt="Podio final"
          loading="lazy"
          className="w-full h-auto"
        />
      </picture>
    </div>
  )
}

export default Podium
