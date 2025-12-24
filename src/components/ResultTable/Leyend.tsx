export function Leyend() {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 gap-4">
            <div className="flex items-center gap-6 px-4 md:px-0">
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center size-6 rounded-lg bg-primary/20 text-primary border border-primary/30"></span>
                    <span className="text-text-muted text-xs">Victoria</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-500 text-[16px]">speed</span>
                    <span className="text-text-muted text-xs">Vuelta Rápida</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow-500 text-[16px]">warning</span>
                    <span className="text-text-muted text-xs">Sanción</span>
                </div>
            </div>
        </div>
    )
}