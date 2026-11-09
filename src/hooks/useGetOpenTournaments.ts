import { supabase } from "@/supabaseClient"
import type { Database } from "@/types/supabase"
import { useQuery } from "@tanstack/react-query"

export type OpenTournaments =
  Database["public"]["Functions"]["get_open_tournaments"]["Returns"]

const useGetOpenTournaments = () => {
  const { data, isLoading, error } = useQuery<OpenTournaments | null>({
    queryKey: ["openTournaments"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_open_tournaments")

      if (error) throw error
      return data as OpenTournaments | null
    },
  })
  return { openTournaments: data, isLoading, error }
}

export default useGetOpenTournaments
