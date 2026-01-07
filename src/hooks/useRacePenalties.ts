import { supabase } from "@/supabaseClient"
import { useQuery } from "@tanstack/react-query"
import type { Database } from "@/types/supabase"

export type RacePenaltiesRPC = Database['public']['Functions']['get_race_penalties']['Returns'][number]

const useRacePenalties = (pilotId: string, raceId: string) => {
    const { data, isLoading, error } = useQuery<RacePenaltiesRPC[]>({
        queryKey: ['race-penalties', raceId, pilotId],
        queryFn: async () => {
            const { data, error } = await supabase.rpc('get_race_penalties', { p_pilot_id: pilotId, p_race_id: raceId })

            if (error) throw error
            return data || []
        },
        enabled: !!pilotId && !!raceId
    })
    return { racePenalties: data, isLoading, error }
}

export default useRacePenalties