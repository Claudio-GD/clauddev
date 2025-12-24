export const DashboardStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-surface border border-surface rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <span className="material-symbols-outlined">calendar_month</span>
            </div>
            <div>
                <p className="text-text-muted text-xs font-medium uppercase">Próxima Carrera</p>
                <p className="text-text font-bold">Le Mans - 25 Dic 2025</p>
            </div>
        </div>
        <div className="bg-surface border border-surface rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined">leaderboard</span>
            </div>
            <div>
                <p className="text-text-muted text-xs font-medium uppercase">Líder Actual</p>
                <p className="text-text font-bold">LazyArc62</p>
            </div>
        </div>
    </div>
)