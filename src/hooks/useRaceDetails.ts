import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/supabaseClient"
import type { Database } from "@/types/supabase"

export type RaceDetailsRPC = Database['public']['Functions']['get_race_details']['Returns'][number]

const useRaceDetails = (raceId: string, pilotId: string) => {
    const { data, isLoading, error } = useQuery<RaceDetailsRPC | null>({
        queryKey: ['race-details', raceId, pilotId],
        queryFn: async () => {
            const { data, error } = await supabase.rpc('get_race_details', { p_race_id: raceId, p_pilot_id: pilotId }).maybeSingle()

            if (error) throw error
            return data
        },
        enabled: !!raceId && !!pilotId
    })
    return { raceDetails: data, isLoading, error }
}

export default useRaceDetails