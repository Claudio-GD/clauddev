import { supabase } from "@/supabaseClient"
import { useQuery } from "@tanstack/react-query"
import type { Database } from "@/types/supabase"

type ResultRow = Database['public']['Views']['v_results_with_details']['Row']

interface RaceResultDetail {
    points: number
    has_fast_lap: boolean
    has_penalties: boolean
    is_winner: boolean
}

export interface PilotStandings {
    pilot_id: string
    pilot_name: string
    team_name: string
    races: Record<string, RaceResultDetail>
    total_points: number
}

const useSeasonStandings = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['seasonStandings'],
        queryFn: async () => {
            const { data, error } = await supabase.
                from('v_results_with_details')
                .select('*')

            if (error) throw error

            const standingsMap = (data as ResultRow[]).reduce<Record<string, PilotStandings>>((acc, curr) => {
                if (!curr.pilot_id) return acc

                const pilotId = curr.pilot_id

                if (!acc[pilotId]) {
                    acc[pilotId] = {
                        pilot_id: curr.pilot_id,
                        pilot_name: curr.pilot_name ?? 'Piloto desconocido',
                        team_name: curr.team_name ?? 'Equipo desconocido',
                        races: {},
                        total_points: 0
                    }
                }

                if (curr.race_id) {
                    acc[pilotId].races[curr.race_id] = {
                        points: curr.net_points ?? 0,
                        has_fast_lap: !!curr.has_fast_lap,
                        has_penalties: !!curr.has_penalties,
                        is_winner: !!curr.is_winner
                    }

                    acc[pilotId].total_points += curr.net_points ?? 0
                }
                return acc
            }, {})


            return Object.values(standingsMap).sort((a, b) => b.total_points - a.total_points)
        }
    })
    return { standings: data, isLoading, error }
}

export default useSeasonStandings