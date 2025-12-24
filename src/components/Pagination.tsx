export const Pagination = () => (
    <div className="flex items-center justify-between py-6">
        <p className="hidden md:block text-white/40 text-sm font-medium">Mostrando 5 de 20 pilotos</p>
        <div className="flex items-center gap-2 mx-auto md:mx-0">
            <button className="flex items-center justify-center size-9 rounded-full bg-surface-dark text-white hover:bg-white/10 transition-colors disabled:opacity-50">
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="flex items-center justify-center size-9 rounded-full bg-primary text-background-dark font-bold text-sm">1</button>
            <button className="flex items-center justify-center size-9 rounded-full bg-transparent text-white/60 hover:text-white hover:bg-white/5 text-sm transition-colors">2</button>
            <button className="flex items-center justify-center size-9 rounded-full bg-transparent text-white/60 hover:text-white hover:bg-white/5 text-sm transition-colors">3</button>
            <span className="text-white/40 text-sm px-1">...</span>
            <button className="flex items-center justify-center size-9 rounded-full bg-transparent text-white/60 hover:text-white hover:bg-white/5 text-sm transition-colors">4</button>
            <button className="flex items-center justify-center size-9 rounded-full bg-surface-dark text-white hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
        </div>
    </div>
);