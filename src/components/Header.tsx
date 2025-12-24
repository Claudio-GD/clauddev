export const Header = () => (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 lg:px-10">
            <div className="flex items-center gap-8">
                {/* <!-- Logo Area --> */}
                <div className="flex items-center gap-3 text-white">
                    <div className="flex items-center justify-center size-10 rounded-xl bg-primary/20 text-primary">
                        <span className="material-symbols-outlined text-[24px]">flag</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">RaceTrack <span className="text-primary">Pro</span></h2>
                </div>
                {/* <!-- Search --> */}
                <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64 group">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-surface-dark border border-transparent group-focus-within:border-primary/50 transition-colors">
                        <div className="text-white/50 flex items-center justify-center pl-4 rounded-l-xl">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input className="flex w-full min-w-0 flex-1 bg-transparent border-none text-white placeholder:text-white/50 focus:ring-0 text-sm font-normal px-3" placeholder="Buscar piloto o circuito..." />
                    </div>
                </label>
            </div>
            {/* <!-- Right Nav --> */}
            <div className="flex items-center gap-6">
                <nav className="hidden lg:flex items-center gap-6">
                    <a className="text-primary text-sm font-semibold hover:text-primary transition-colors" href="#">Clasificación</a>
                    <a className="text-white/70 text-sm font-medium hover:text-white transition-colors" href="#">Calendario</a>
                    <a className="text-white/70 text-sm font-medium hover:text-white transition-colors" href="#">Pilotos</a>
                    <a className="text-white/70 text-sm font-medium hover:text-white transition-colors" href="#">Equipos</a>
                </nav>
                <div className="h-6 w-px bg-white/10 hidden lg:block"></div>
                <button className="flex items-center justify-center rounded-full size-10 bg-surface-dark text-white hover:bg-primary hover:text-background-dark transition-all duration-300">
                    <span className="material-symbols-outlined text-[20px]">settings</span>
                </button>
                <div className="relative">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-surface-dark ring-2 ring-transparent hover:ring-primary/50 transition-all cursor-pointer" data-alt="Avatar de usuario con casco de carreras"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7xZl90Syn-OYceARik12-1WPhMpJyWwmQY4Fhcl46NF8HkKJE-kSJhe5-RPYy-HHttGbHjOrUT1tlN-T5ecenznyK08xqxjvsmRzfBd0YkHiDmu8o6WkJEwneAdHA1h3CSEYx-G1vPXEr1i9c5RgUIrM-FHLEJ41a7ojhGwP_lfdvsAdRDBteMM3Hk6lZ6KMmjvWSlIQ9HEx-nylFJsM_lJIsz8AtAuHhjgIjroh1Ax1x4skcyepx6ikqRwPep6PAph5RhpLYuVM")' }}>
                    </div>
                    <div className="absolute bottom-0 right-0 size-3 rounded-full bg-primary border-2 border-background-dark"></div>
                </div>
            </div>
        </div>
    </header>
);