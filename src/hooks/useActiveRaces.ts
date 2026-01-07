import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/supabaseClient"
import type { Database } from "@/types/supabase"

export type ActiveRow = Database['public']['Views']['v_active_races']['Row']

const useActiveRaces = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['activeRaces'],
        queryFn: async () => {
            const { data, error } = await supabase.from('v_active_races').select('*')

            if (error) throw error
            return data as ActiveRow[]
        }
    })
    return { activeRaces: data, isLoading, error }
}

export default useActiveRaces