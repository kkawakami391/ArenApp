import * as $runtime from "../runtime/library"

/**
 * @param timestamptz
 * @param timestamptz
 */
export const getBabyAge: (timestamptz: Date, timestamptz: Date) => $runtime.TypedSql<getBabyAge.Parameters, getBabyAge.Result>

export namespace getBabyAge {
  export type Parameters = [timestamptz: Date, timestamptz: Date]
  export type Result = {
    age: string | null
  }
}
