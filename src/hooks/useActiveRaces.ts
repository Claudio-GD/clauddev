import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/supabaseClient"
import type { Database } from "@/types/supabase"

export type ActiveRow =
  Database["public"]["Functions"]["get_active_races"]["Returns"]

const useActiveRaces = (tournamentCode: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["activeRaces"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_active_races", {
        p_tournament_code: tournamentCode,
      })

      if (error) throw error
      return data as ActiveRow
    },
  })
  return { activeRaces: data, isLoading, error }
}

export default useActiveRaces
