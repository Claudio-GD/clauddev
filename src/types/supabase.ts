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
      [_ in never]: never
    }
    Views: {
      v_active_races: {
        Row: {
          date: string | null
          id: string | null
          name: string | null
          short_date: string | null
          year: number | null
        }
        Relationships: []
      }
      v_arrendatarios: {
        Row: {
          email: string | null
          id: number | null
          nombre_completo: string | null
          rut: string | null
          telefono: string | null
        }
        Insert: {
          email?: string | null
          id?: number | null
          nombre_completo?: string | null
          rut?: string | null
          telefono?: string | null
        }
        Update: {
          email?: string | null
          id?: number | null
          nombre_completo?: string | null
          rut?: string | null
          telefono?: string | null
        }
        Relationships: []
      }
      v_contratos: {
        Row: {
          arrendatario_id: number | null
          arrendatario_nombre: string | null
          arrendatario_rut: string | null
          depto_numero: string | null
          direccion: string | null
          estado: string | null
          fecha_inicio: string | null
          fecha_termino: string | null
          id: number | null
          monto_arriendo_pactado: number | null
          monto_garantia: number | null
          propiedad_id: number | null
        }
        Relationships: []
      }
      v_gastos: {
        Row: {
          categoria: string | null
          descripcion: string | null
          fecha_gasto: string | null
          id: number | null
          monto_total: number | null
        }
        Insert: {
          categoria?: string | null
          descripcion?: string | null
          fecha_gasto?: string | null
          id?: number | null
          monto_total?: number | null
        }
        Update: {
          categoria?: string | null
          descripcion?: string | null
          fecha_gasto?: string | null
          id?: number | null
          monto_total?: number | null
        }
        Relationships: []
      }
      v_gastos_propiedades: {
        Row: {
          depto_numero: string | null
          direccion: string | null
          fecha_gasto: string | null
          gasto_categoria: string | null
          gasto_descripcion: string | null
          gasto_id: number | null
          id: number | null
          monto_asignado: number | null
          propiedad_id: number | null
        }
        Relationships: []
      }
      v_pagos_arriendo: {
        Row: {
          arrendatario_id: number | null
          arrendatario_nombre: string | null
          contrato_id: number | null
          depto_numero: string | null
          direccion: string | null
          fecha_pago_real: string | null
          id: number | null
          mes_correspondiente: string | null
          monto_arriendo: number | null
          monto_pagado: number | null
          monto_pendiente: number | null
          observaciones: string | null
          propiedad_id: number | null
        }
        Relationships: []
      }
      v_propiedades: {
        Row: {
          depto_numero: string | null
          direccion: string | null
          id: number | null
        }
        Insert: {
          depto_numero?: string | null
          direccion?: string | null
          id?: number | null
        }
        Update: {
          depto_numero?: string | null
          direccion?: string | null
          id?: number | null
        }
        Relationships: []
      }
      v_results_with_details: {
        Row: {
          circuit_name: string | null
          has_fast_lap: boolean | null
          has_penalties: boolean | null
          is_winner: boolean | null
          net_points: number | null
          pilot_id: string | null
          pilot_name: string | null
          race_id: string | null
          short_date: string | null
          team_name: string | null
          tournament_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      crear_arrendatario: {
        Args: {
          p_email: string
          p_nombre_completo: string
          p_rut: string
          p_telefono: string
        }
        Returns: number
      }
      crear_contrato: {
        Args: {
          p_arrendatario_id: number
          p_estado?: string
          p_fecha_inicio: string
          p_fecha_termino: string
          p_monto_arriendo_pactado: number
          p_monto_garantia: number
          p_propiedad_id: number
        }
        Returns: number
      }
      crear_gasto: {
        Args: {
          p_categoria: string
          p_descripcion: string
          p_fecha_gasto: string
          p_monto_total: number
          p_propiedad_id?: number
        }
        Returns: number
      }
      crear_pago: {
        Args: {
          p_contrato_id: number
          p_mes_correspondiente: string
          p_monto_pagado: number
          p_observaciones?: string
        }
        Returns: number
      }
      crear_propiedad: {
        Args: { p_depto_numero: string; p_direccion: string }
        Returns: number
      }
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
      get_race_details: {
        Args: { p_pilot_id: string; p_race_id: string }
        Returns: {
          base_points: number
          circuit: string
          clean_race_points: number
          fast_lap_points: number
          pilot: string
          qualy_points: number
          race_date: string
          race_position: string
          team: string
          total_points: number
        }[]
      }
      get_race_penalties: {
        Args: { p_pilot_id: string; p_race_id: string }
        Returns: {
          detail: string
          points_penalized: number
          positions_penalized: number
        }[]
      }
      get_races_results: {
        Args: { p_tournament_code: string }
        Returns: {
          circuit_name: string
          has_fast_lap: boolean
          has_penalties: boolean
          is_winner: boolean
          net_points: number
          pilot_id: string
          pilot_name: string
          race_id: string
          short_date: string
          team_name: string
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
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
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
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
