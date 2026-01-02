import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/supabaseClient"
import type { Database } from "@/types/supabase"

export type NextRaceRPC = Database['public']['Functions']['get_next_race_in_window']['Returns'][number]

const useNextRace = () => {
    const { data, isLoading, error } = useQuery<NextRaceRPC | null>({
        queryKey: ['nextRace'],
        queryFn: async () => {
            const { data, error } = await supabase.rpc('get_next_race_in_window').maybeSingle()

            if (error) throw error
            return data
        },
        staleTime: 1000 * 60 * 60
    })
    return { nextRace: data, isLoading, error }
}

export default useNextRace