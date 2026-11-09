import { supabase } from "@/supabaseClient"
import type { Database } from "@/types/supabase"
import { useQuery } from "@tanstack/react-query"

export type StatusRacesRow =
  Database["public"]["Functions"]["get_status_races_tournament"]["Returns"]

const useGetStatusRaces = (tournamentCode: string) => {
  const { data, isLoading, error } = useQuery<StatusRacesRow | null>({
    queryKey: ["statusRaces", tournamentCode],
    queryFn: async () => {
      const { data, error } = await supabase.rpc(
        "get_status_races_tournament",
        { p_tournament_code: tournamentCode },
      )

      if (error) throw error
      return data || []
    },
    enabled: !!tournamentCode,
  })
  return { tournamentRaces: data, isLoading, error }
}

export default useGetStatusRaces
