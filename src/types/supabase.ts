export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      circuits: {
        Row: {
          corners: number | null
          id: string
          large: number | null
          location: string | null
          name: string
          type: string | null
        }
        Insert: {
          corners?: number | null
          id?: string
          large?: number | null
          location?: string | null
          name: string
          type?: string | null
        }
        Update: {
          corners?: number | null
          id?: string
          large?: number | null
          location?: string | null
          name?: string
          type?: string | null
        }
        Relationships: []
      }
      penalties: {
        Row: {
          detail: string
          id: string
          points_penalized: number | null
          positions_penalized: number | null
          result_id: string | null
        }
        Insert: {
          detail: string
          id?: string
          points_penalized?: number | null
          positions_penalized?: number | null
          result_id?: string | null
        }
        Update: {
          detail?: string
          id?: string
          points_penalized?: number | null
          positions_penalized?: number | null
          result_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "penalties_result_id_fkey"
            columns: ["result_id"]
            isOneToOne: false
            referencedRelation: "race_results"
            referencedColumns: ["id"]
          },
        ]
      }
      pilots: {
        Row: {
          id: string
          name: string
          team_id: string | null
        }
        Insert: {
          id?: string
          name: string
          team_id?: string | null
        }
        Update: {
          id?: string
          name?: string
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pilots_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      point_system: {
        Row: {
          points: number
          position_id: number
        }
        Insert: {
          points: number
          position_id: number
        }
        Update: {
          points?: number
          position_id?: number
        }
        Relationships: []
      }
      race_results: {
        Row: {
          base_points: number | null
          clean_race_points: number | null
          fast_lap_points: number | null
          id: string
          pilot_id: string | null
          position: string | null
          qualy_points: number | null
          race_id: string | null
        }
        Insert: {
          base_points?: number | null
          clean_race_points?: number | null
          fast_lap_points?: number | null
          id?: string
          pilot_id?: string | null
          position?: string | null
          qualy_points?: number | null
          race_id?: string | null
        }
        Update: {
          base_points?: number | null
          clean_race_points?: number | null
          fast_lap_points?: number | null
          id?: string
          pilot_id?: string | null
          position?: string | null
          qualy_points?: number | null
          race_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "race_results_pilot_id_fkey"
            columns: ["pilot_id"]
            isOneToOne: false
            referencedRelation: "pilots"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "race_results_race_id_fkey"
            columns: ["race_id"]
            isOneToOne: false
            referencedRelation: "races"
            referencedColumns: ["id"]
          },
        ]
      }
      races: {
        Row: {
          circuit_id: string | null
          date: string | null
          id: string
          laps: number | null
          short_date: string | null
          stops: number | null
          time: string | null
          tires: number | null
          weather: string | null
          year: number | null
        }
        Insert: {
          circuit_id?: string | null
          date?: string | null
          id?: string
          laps?: number | null
          short_date?: string | null
          stops?: number | null
          time?: string | null
          tires?: number | null
          weather?: string | null
          year?: number | null
        }
        Update: {
          circuit_id?: string | null
          date?: string | null
          id?: string
          laps?: number | null
          short_date?: string | null
          stops?: number | null
          time?: string | null
          tires?: number | null
          weather?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "races_circuit_id_fkey"
            columns: ["circuit_id"]
            isOneToOne: false
            referencedRelation: "circuits"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_next_race_in_window: {
        Args: never
        Returns: {
          circuit_corners: number
          circuit_large: number
          circuit_location: string
          circuit_name: string
          circuit_type: string
          race_laps: number
          race_short_date: string
          race_stops: number
          race_time: string
          race_tires: number
          race_weather: string
          race_year: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
