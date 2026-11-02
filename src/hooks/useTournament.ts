import { supabase } from "@/supabaseClient"
import type { Database } from "@/types/supabase"
import { useQuery } from "@tanstack/react-query"

export type TournamentRow =
  Database["public"]["Functions"]["get_tournament"]["Returns"]

const useTournament = (tournamentCode: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tournament"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_tournament", {
        p_tournament_code: tournamentCode,
      })

      if (error) throw error
      return data as TournamentRow
    },
  })
  return { tournamentData: data, isLoading, error }
}

export default useTournament
