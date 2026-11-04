import { supabase } from "@/supabaseClient"
import type { Database } from "@/types/supabase"
import { useQuery } from "@tanstack/react-query"

export type TournamentRow =
  Database["public"]["Functions"]["get_tournament"]["Returns"][number]

const useTournament = (tournamentCode: string) => {
  const { data, isLoading, error } = useQuery<TournamentRow | null>({
    queryKey: ["tournament", tournamentCode],
    queryFn: async () => {
      const { data, error } = await supabase
        .rpc("get_tournament", {
          p_tournament_code: tournamentCode,
        })
        .maybeSingle()

      if (error) throw error
      return data as TournamentRow | null
    },
    enabled: !!tournamentCode,
  })
  return { tournamentData: data, isLoading, error }
}

export default useTournament
