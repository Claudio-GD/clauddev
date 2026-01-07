export const StatsSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[1, 2].map((i) => (
                <div key={i} className="bg-surface border border-surface rounded-2xl p-4 flex items-center gap-4 shadow-sm animate-pulse">
                    {/* Círculo del icono */}
                    <div className="size-10 rounded-full bg-gray-200" />
                    {/* Líneas de texto */}
                    <div className="flex-1 space-y-2">
                        <div className="h-2 bg-gray-200 rounded w-1/2" />
                        <div className="h-3 bg-gray-200 rounded w-3/4" />
                    </div>
                </div>
            ))}
        </div>
    );
};