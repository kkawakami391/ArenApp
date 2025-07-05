
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model baby
 * 
 */
export type baby = $Result.DefaultSelection<Prisma.$babyPayload>
/**
 * Model parent
 * 
 */
export type parent = $Result.DefaultSelection<Prisma.$parentPayload>
/**
 * Model meal
 * 
 */
export type meal = $Result.DefaultSelection<Prisma.$mealPayload>
/**
 * Model weight
 * 
 */
export type weight = $Result.DefaultSelection<Prisma.$weightPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Babies
 * const babies = await prisma.baby.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Babies
   * const babies = await prisma.baby.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.baby`: Exposes CRUD operations for the **baby** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Babies
    * const babies = await prisma.baby.findMany()
    * ```
    */
  get baby(): Prisma.babyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.parentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.mealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weight`: Exposes CRUD operations for the **weight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weights
    * const weights = await prisma.weight.findMany()
    * ```
    */
  get weight(): Prisma.weightDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    baby: 'baby',
    parent: 'parent',
    meal: 'meal',
    weight: 'weight'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "baby" | "parent" | "meal" | "weight"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      baby: {
        payload: Prisma.$babyPayload<ExtArgs>
        fields: Prisma.babyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.babyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.babyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload>
          }
          findFirst: {
            args: Prisma.babyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.babyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload>
          }
          findMany: {
            args: Prisma.babyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload>[]
          }
          create: {
            args: Prisma.babyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload>
          }
          createMany: {
            args: Prisma.babyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.babyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload>[]
          }
          delete: {
            args: Prisma.babyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload>
          }
          update: {
            args: Prisma.babyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload>
          }
          deleteMany: {
            args: Prisma.babyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.babyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.babyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload>[]
          }
          upsert: {
            args: Prisma.babyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$babyPayload>
          }
          aggregate: {
            args: Prisma.BabyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaby>
          }
          groupBy: {
            args: Prisma.babyGroupByArgs<ExtArgs>
            result: $Utils.Optional<BabyGroupByOutputType>[]
          }
          count: {
            args: Prisma.babyCountArgs<ExtArgs>
            result: $Utils.Optional<BabyCountAggregateOutputType> | number
          }
        }
      }
      parent: {
        payload: Prisma.$parentPayload<ExtArgs>
        fields: Prisma.parentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.parentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.parentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload>
          }
          findFirst: {
            args: Prisma.parentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.parentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload>
          }
          findMany: {
            args: Prisma.parentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload>[]
          }
          create: {
            args: Prisma.parentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload>
          }
          createMany: {
            args: Prisma.parentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.parentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload>[]
          }
          delete: {
            args: Prisma.parentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload>
          }
          update: {
            args: Prisma.parentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload>
          }
          deleteMany: {
            args: Prisma.parentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.parentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.parentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload>[]
          }
          upsert: {
            args: Prisma.parentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.parentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.parentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
          }
        }
      }
      meal: {
        payload: Prisma.$mealPayload<ExtArgs>
        fields: Prisma.mealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload>
          }
          findFirst: {
            args: Prisma.mealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload>
          }
          findMany: {
            args: Prisma.mealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload>[]
          }
          create: {
            args: Prisma.mealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload>
          }
          createMany: {
            args: Prisma.mealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload>[]
          }
          delete: {
            args: Prisma.mealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload>
          }
          update: {
            args: Prisma.mealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload>
          }
          deleteMany: {
            args: Prisma.mealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload>[]
          }
          upsert: {
            args: Prisma.mealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.mealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.mealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      weight: {
        payload: Prisma.$weightPayload<ExtArgs>
        fields: Prisma.weightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.weightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.weightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload>
          }
          findFirst: {
            args: Prisma.weightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.weightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload>
          }
          findMany: {
            args: Prisma.weightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload>[]
          }
          create: {
            args: Prisma.weightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload>
          }
          createMany: {
            args: Prisma.weightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.weightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload>[]
          }
          delete: {
            args: Prisma.weightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload>
          }
          update: {
            args: Prisma.weightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload>
          }
          deleteMany: {
            args: Prisma.weightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.weightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.weightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload>[]
          }
          upsert: {
            args: Prisma.weightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weightPayload>
          }
          aggregate: {
            args: Prisma.WeightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeight>
          }
          groupBy: {
            args: Prisma.weightGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeightGroupByOutputType>[]
          }
          count: {
            args: Prisma.weightCountArgs<ExtArgs>
            result: $Utils.Optional<WeightCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    baby?: babyOmit
    parent?: parentOmit
    meal?: mealOmit
    weight?: weightOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BabyCountOutputType
   */

  export type BabyCountOutputType = {
    parents: number
    meal: number
    weight: number
  }

  export type BabyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parents?: boolean | BabyCountOutputTypeCountParentsArgs
    meal?: boolean | BabyCountOutputTypeCountMealArgs
    weight?: boolean | BabyCountOutputTypeCountWeightArgs
  }

  // Custom InputTypes
  /**
   * BabyCountOutputType without action
   */
  export type BabyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyCountOutputType
     */
    select?: BabyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BabyCountOutputType without action
   */
  export type BabyCountOutputTypeCountParentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parentWhereInput
  }

  /**
   * BabyCountOutputType without action
   */
  export type BabyCountOutputTypeCountMealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mealWhereInput
  }

  /**
   * BabyCountOutputType without action
   */
  export type BabyCountOutputTypeCountWeightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: weightWhereInput
  }


  /**
   * Models
   */

  /**
   * Model baby
   */

  export type AggregateBaby = {
    _count: BabyCountAggregateOutputType | null
    _avg: BabyAvgAggregateOutputType | null
    _sum: BabySumAggregateOutputType | null
    _min: BabyMinAggregateOutputType | null
    _max: BabyMaxAggregateOutputType | null
  }

  export type BabyAvgAggregateOutputType = {
    id: number | null
    height: number | null
  }

  export type BabySumAggregateOutputType = {
    id: number | null
    height: number | null
  }

  export type BabyMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    height: number | null
    dateOfBirth: Date | null
  }

  export type BabyMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    height: number | null
    dateOfBirth: Date | null
  }

  export type BabyCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    height: number
    dateOfBirth: number
    _all: number
  }


  export type BabyAvgAggregateInputType = {
    id?: true
    height?: true
  }

  export type BabySumAggregateInputType = {
    id?: true
    height?: true
  }

  export type BabyMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    height?: true
    dateOfBirth?: true
  }

  export type BabyMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    height?: true
    dateOfBirth?: true
  }

  export type BabyCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    height?: true
    dateOfBirth?: true
    _all?: true
  }

  export type BabyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which baby to aggregate.
     */
    where?: babyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of babies to fetch.
     */
    orderBy?: babyOrderByWithRelationInput | babyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: babyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` babies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned babies
    **/
    _count?: true | BabyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BabyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BabySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BabyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BabyMaxAggregateInputType
  }

  export type GetBabyAggregateType<T extends BabyAggregateArgs> = {
        [P in keyof T & keyof AggregateBaby]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaby[P]>
      : GetScalarType<T[P], AggregateBaby[P]>
  }




  export type babyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: babyWhereInput
    orderBy?: babyOrderByWithAggregationInput | babyOrderByWithAggregationInput[]
    by: BabyScalarFieldEnum[] | BabyScalarFieldEnum
    having?: babyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BabyCountAggregateInputType | true
    _avg?: BabyAvgAggregateInputType
    _sum?: BabySumAggregateInputType
    _min?: BabyMinAggregateInputType
    _max?: BabyMaxAggregateInputType
  }

  export type BabyGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    height: number
    dateOfBirth: Date
    _count: BabyCountAggregateOutputType | null
    _avg: BabyAvgAggregateOutputType | null
    _sum: BabySumAggregateOutputType | null
    _min: BabyMinAggregateOutputType | null
    _max: BabyMaxAggregateOutputType | null
  }

  type GetBabyGroupByPayload<T extends babyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BabyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BabyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BabyGroupByOutputType[P]>
            : GetScalarType<T[P], BabyGroupByOutputType[P]>
        }
      >
    >


  export type babySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    height?: boolean
    dateOfBirth?: boolean
    parents?: boolean | baby$parentsArgs<ExtArgs>
    meal?: boolean | baby$mealArgs<ExtArgs>
    weight?: boolean | baby$weightArgs<ExtArgs>
    _count?: boolean | BabyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baby"]>

  export type babySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    height?: boolean
    dateOfBirth?: boolean
  }, ExtArgs["result"]["baby"]>

  export type babySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    height?: boolean
    dateOfBirth?: boolean
  }, ExtArgs["result"]["baby"]>

  export type babySelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    height?: boolean
    dateOfBirth?: boolean
  }

  export type babyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "height" | "dateOfBirth", ExtArgs["result"]["baby"]>
  export type babyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parents?: boolean | baby$parentsArgs<ExtArgs>
    meal?: boolean | baby$mealArgs<ExtArgs>
    weight?: boolean | baby$weightArgs<ExtArgs>
    _count?: boolean | BabyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type babyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type babyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $babyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "baby"
    objects: {
      parents: Prisma.$parentPayload<ExtArgs>[]
      meal: Prisma.$mealPayload<ExtArgs>[]
      weight: Prisma.$weightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      height: number
      dateOfBirth: Date
    }, ExtArgs["result"]["baby"]>
    composites: {}
  }

  type babyGetPayload<S extends boolean | null | undefined | babyDefaultArgs> = $Result.GetResult<Prisma.$babyPayload, S>

  type babyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<babyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BabyCountAggregateInputType | true
    }

  export interface babyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['baby'], meta: { name: 'baby' } }
    /**
     * Find zero or one Baby that matches the filter.
     * @param {babyFindUniqueArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends babyFindUniqueArgs>(args: SelectSubset<T, babyFindUniqueArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Baby that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {babyFindUniqueOrThrowArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends babyFindUniqueOrThrowArgs>(args: SelectSubset<T, babyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baby that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {babyFindFirstArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends babyFindFirstArgs>(args?: SelectSubset<T, babyFindFirstArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baby that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {babyFindFirstOrThrowArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends babyFindFirstOrThrowArgs>(args?: SelectSubset<T, babyFindFirstOrThrowArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Babies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {babyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Babies
     * const babies = await prisma.baby.findMany()
     * 
     * // Get first 10 Babies
     * const babies = await prisma.baby.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const babyWithIdOnly = await prisma.baby.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends babyFindManyArgs>(args?: SelectSubset<T, babyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Baby.
     * @param {babyCreateArgs} args - Arguments to create a Baby.
     * @example
     * // Create one Baby
     * const Baby = await prisma.baby.create({
     *   data: {
     *     // ... data to create a Baby
     *   }
     * })
     * 
     */
    create<T extends babyCreateArgs>(args: SelectSubset<T, babyCreateArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Babies.
     * @param {babyCreateManyArgs} args - Arguments to create many Babies.
     * @example
     * // Create many Babies
     * const baby = await prisma.baby.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends babyCreateManyArgs>(args?: SelectSubset<T, babyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Babies and returns the data saved in the database.
     * @param {babyCreateManyAndReturnArgs} args - Arguments to create many Babies.
     * @example
     * // Create many Babies
     * const baby = await prisma.baby.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Babies and only return the `id`
     * const babyWithIdOnly = await prisma.baby.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends babyCreateManyAndReturnArgs>(args?: SelectSubset<T, babyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Baby.
     * @param {babyDeleteArgs} args - Arguments to delete one Baby.
     * @example
     * // Delete one Baby
     * const Baby = await prisma.baby.delete({
     *   where: {
     *     // ... filter to delete one Baby
     *   }
     * })
     * 
     */
    delete<T extends babyDeleteArgs>(args: SelectSubset<T, babyDeleteArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Baby.
     * @param {babyUpdateArgs} args - Arguments to update one Baby.
     * @example
     * // Update one Baby
     * const baby = await prisma.baby.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends babyUpdateArgs>(args: SelectSubset<T, babyUpdateArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Babies.
     * @param {babyDeleteManyArgs} args - Arguments to filter Babies to delete.
     * @example
     * // Delete a few Babies
     * const { count } = await prisma.baby.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends babyDeleteManyArgs>(args?: SelectSubset<T, babyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Babies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {babyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Babies
     * const baby = await prisma.baby.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends babyUpdateManyArgs>(args: SelectSubset<T, babyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Babies and returns the data updated in the database.
     * @param {babyUpdateManyAndReturnArgs} args - Arguments to update many Babies.
     * @example
     * // Update many Babies
     * const baby = await prisma.baby.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Babies and only return the `id`
     * const babyWithIdOnly = await prisma.baby.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends babyUpdateManyAndReturnArgs>(args: SelectSubset<T, babyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Baby.
     * @param {babyUpsertArgs} args - Arguments to update or create a Baby.
     * @example
     * // Update or create a Baby
     * const baby = await prisma.baby.upsert({
     *   create: {
     *     // ... data to create a Baby
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Baby we want to update
     *   }
     * })
     */
    upsert<T extends babyUpsertArgs>(args: SelectSubset<T, babyUpsertArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Babies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {babyCountArgs} args - Arguments to filter Babies to count.
     * @example
     * // Count the number of Babies
     * const count = await prisma.baby.count({
     *   where: {
     *     // ... the filter for the Babies we want to count
     *   }
     * })
    **/
    count<T extends babyCountArgs>(
      args?: Subset<T, babyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BabyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Baby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BabyAggregateArgs>(args: Subset<T, BabyAggregateArgs>): Prisma.PrismaPromise<GetBabyAggregateType<T>>

    /**
     * Group by Baby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {babyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends babyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: babyGroupByArgs['orderBy'] }
        : { orderBy?: babyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, babyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBabyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the baby model
   */
  readonly fields: babyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for baby.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__babyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parents<T extends baby$parentsArgs<ExtArgs> = {}>(args?: Subset<T, baby$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meal<T extends baby$mealArgs<ExtArgs> = {}>(args?: Subset<T, baby$mealArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weight<T extends baby$weightArgs<ExtArgs> = {}>(args?: Subset<T, baby$weightArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the baby model
   */
  interface babyFieldRefs {
    readonly id: FieldRef<"baby", 'Int'>
    readonly firstName: FieldRef<"baby", 'String'>
    readonly lastName: FieldRef<"baby", 'String'>
    readonly height: FieldRef<"baby", 'Int'>
    readonly dateOfBirth: FieldRef<"baby", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * baby findUnique
   */
  export type babyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelect<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: babyInclude<ExtArgs> | null
    /**
     * Filter, which baby to fetch.
     */
    where: babyWhereUniqueInput
  }

  /**
   * baby findUniqueOrThrow
   */
  export type babyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelect<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: babyInclude<ExtArgs> | null
    /**
     * Filter, which baby to fetch.
     */
    where: babyWhereUniqueInput
  }

  /**
   * baby findFirst
   */
  export type babyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelect<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: babyInclude<ExtArgs> | null
    /**
     * Filter, which baby to fetch.
     */
    where?: babyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of babies to fetch.
     */
    orderBy?: babyOrderByWithRelationInput | babyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for babies.
     */
    cursor?: babyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` babies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of babies.
     */
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * baby findFirstOrThrow
   */
  export type babyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelect<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: babyInclude<ExtArgs> | null
    /**
     * Filter, which baby to fetch.
     */
    where?: babyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of babies to fetch.
     */
    orderBy?: babyOrderByWithRelationInput | babyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for babies.
     */
    cursor?: babyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` babies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of babies.
     */
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * baby findMany
   */
  export type babyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelect<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: babyInclude<ExtArgs> | null
    /**
     * Filter, which babies to fetch.
     */
    where?: babyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of babies to fetch.
     */
    orderBy?: babyOrderByWithRelationInput | babyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing babies.
     */
    cursor?: babyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` babies.
     */
    skip?: number
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * baby create
   */
  export type babyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelect<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: babyInclude<ExtArgs> | null
    /**
     * The data needed to create a baby.
     */
    data: XOR<babyCreateInput, babyUncheckedCreateInput>
  }

  /**
   * baby createMany
   */
  export type babyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many babies.
     */
    data: babyCreateManyInput | babyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * baby createManyAndReturn
   */
  export type babyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * The data used to create many babies.
     */
    data: babyCreateManyInput | babyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * baby update
   */
  export type babyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelect<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: babyInclude<ExtArgs> | null
    /**
     * The data needed to update a baby.
     */
    data: XOR<babyUpdateInput, babyUncheckedUpdateInput>
    /**
     * Choose, which baby to update.
     */
    where: babyWhereUniqueInput
  }

  /**
   * baby updateMany
   */
  export type babyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update babies.
     */
    data: XOR<babyUpdateManyMutationInput, babyUncheckedUpdateManyInput>
    /**
     * Filter which babies to update
     */
    where?: babyWhereInput
    /**
     * Limit how many babies to update.
     */
    limit?: number
  }

  /**
   * baby updateManyAndReturn
   */
  export type babyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * The data used to update babies.
     */
    data: XOR<babyUpdateManyMutationInput, babyUncheckedUpdateManyInput>
    /**
     * Filter which babies to update
     */
    where?: babyWhereInput
    /**
     * Limit how many babies to update.
     */
    limit?: number
  }

  /**
   * baby upsert
   */
  export type babyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelect<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: babyInclude<ExtArgs> | null
    /**
     * The filter to search for the baby to update in case it exists.
     */
    where: babyWhereUniqueInput
    /**
     * In case the baby found by the `where` argument doesn't exist, create a new baby with this data.
     */
    create: XOR<babyCreateInput, babyUncheckedCreateInput>
    /**
     * In case the baby was found with the provided `where` argument, update it with this data.
     */
    update: XOR<babyUpdateInput, babyUncheckedUpdateInput>
  }

  /**
   * baby delete
   */
  export type babyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelect<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: babyInclude<ExtArgs> | null
    /**
     * Filter which baby to delete.
     */
    where: babyWhereUniqueInput
  }

  /**
   * baby deleteMany
   */
  export type babyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which babies to delete
     */
    where?: babyWhereInput
    /**
     * Limit how many babies to delete.
     */
    limit?: number
  }

  /**
   * baby.parents
   */
  export type baby$parentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
    where?: parentWhereInput
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[]
    cursor?: parentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * baby.meal
   */
  export type baby$mealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
    where?: mealWhereInput
    orderBy?: mealOrderByWithRelationInput | mealOrderByWithRelationInput[]
    cursor?: mealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * baby.weight
   */
  export type baby$weightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
    where?: weightWhereInput
    orderBy?: weightOrderByWithRelationInput | weightOrderByWithRelationInput[]
    cursor?: weightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeightScalarFieldEnum | WeightScalarFieldEnum[]
  }

  /**
   * baby without action
   */
  export type babyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baby
     */
    select?: babySelect<ExtArgs> | null
    /**
     * Omit specific fields from the baby
     */
    omit?: babyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: babyInclude<ExtArgs> | null
  }


  /**
   * Model parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _avg: ParentAvgAggregateOutputType | null
    _sum: ParentSumAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentAvgAggregateOutputType = {
    id: number | null
    babyId: number | null
  }

  export type ParentSumAggregateOutputType = {
    id: number | null
    babyId: number | null
  }

  export type ParentMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    babyId: number | null
  }

  export type ParentMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    babyId: number | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    babyId: number
    _all: number
  }


  export type ParentAvgAggregateInputType = {
    id?: true
    babyId?: true
  }

  export type ParentSumAggregateInputType = {
    id?: true
    babyId?: true
  }

  export type ParentMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    babyId?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    babyId?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    babyId?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parent to aggregate.
     */
    where?: parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parents to fetch.
     */
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type parentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parentWhereInput
    orderBy?: parentOrderByWithAggregationInput | parentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: parentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _avg?: ParentAvgAggregateInputType
    _sum?: ParentSumAggregateInputType
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    babyId: number
    _count: ParentCountAggregateOutputType | null
    _avg: ParentAvgAggregateOutputType | null
    _sum: ParentSumAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends parentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type parentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    babyId?: boolean
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type parentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    babyId?: boolean
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type parentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    babyId?: boolean
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type parentSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    babyId?: boolean
  }

  export type parentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "babyId", ExtArgs["result"]["parent"]>
  export type parentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }
  export type parentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }
  export type parentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }

  export type $parentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "parent"
    objects: {
      baby: Prisma.$babyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      babyId: number
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type parentGetPayload<S extends boolean | null | undefined | parentDefaultArgs> = $Result.GetResult<Prisma.$parentPayload, S>

  type parentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<parentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface parentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['parent'], meta: { name: 'parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {parentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends parentFindUniqueArgs>(args: SelectSubset<T, parentFindUniqueArgs<ExtArgs>>): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {parentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends parentFindUniqueOrThrowArgs>(args: SelectSubset<T, parentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends parentFindFirstArgs>(args?: SelectSubset<T, parentFindFirstArgs<ExtArgs>>): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends parentFindFirstOrThrowArgs>(args?: SelectSubset<T, parentFindFirstOrThrowArgs<ExtArgs>>): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends parentFindManyArgs>(args?: SelectSubset<T, parentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parent.
     * @param {parentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends parentCreateArgs>(args: SelectSubset<T, parentCreateArgs<ExtArgs>>): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parents.
     * @param {parentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends parentCreateManyArgs>(args?: SelectSubset<T, parentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parents and returns the data saved in the database.
     * @param {parentCreateManyAndReturnArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends parentCreateManyAndReturnArgs>(args?: SelectSubset<T, parentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parent.
     * @param {parentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends parentDeleteArgs>(args: SelectSubset<T, parentDeleteArgs<ExtArgs>>): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parent.
     * @param {parentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends parentUpdateArgs>(args: SelectSubset<T, parentUpdateArgs<ExtArgs>>): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parents.
     * @param {parentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends parentDeleteManyArgs>(args?: SelectSubset<T, parentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends parentUpdateManyArgs>(args: SelectSubset<T, parentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents and returns the data updated in the database.
     * @param {parentUpdateManyAndReturnArgs} args - Arguments to update many Parents.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends parentUpdateManyAndReturnArgs>(args: SelectSubset<T, parentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parent.
     * @param {parentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends parentUpsertArgs>(args: SelectSubset<T, parentUpsertArgs<ExtArgs>>): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends parentCountArgs>(
      args?: Subset<T, parentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends parentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: parentGroupByArgs['orderBy'] }
        : { orderBy?: parentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, parentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the parent model
   */
  readonly fields: parentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__parentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baby<T extends babyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, babyDefaultArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the parent model
   */
  interface parentFieldRefs {
    readonly id: FieldRef<"parent", 'Int'>
    readonly firstName: FieldRef<"parent", 'String'>
    readonly lastName: FieldRef<"parent", 'String'>
    readonly babyId: FieldRef<"parent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * parent findUnique
   */
  export type parentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
    /**
     * Filter, which parent to fetch.
     */
    where: parentWhereUniqueInput
  }

  /**
   * parent findUniqueOrThrow
   */
  export type parentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
    /**
     * Filter, which parent to fetch.
     */
    where: parentWhereUniqueInput
  }

  /**
   * parent findFirst
   */
  export type parentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
    /**
     * Filter, which parent to fetch.
     */
    where?: parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parents to fetch.
     */
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parents.
     */
    cursor?: parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * parent findFirstOrThrow
   */
  export type parentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
    /**
     * Filter, which parent to fetch.
     */
    where?: parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parents to fetch.
     */
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parents.
     */
    cursor?: parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * parent findMany
   */
  export type parentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
    /**
     * Filter, which parents to fetch.
     */
    where?: parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parents to fetch.
     */
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parents.
     */
    cursor?: parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * parent create
   */
  export type parentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
    /**
     * The data needed to create a parent.
     */
    data: XOR<parentCreateInput, parentUncheckedCreateInput>
  }

  /**
   * parent createMany
   */
  export type parentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many parents.
     */
    data: parentCreateManyInput | parentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * parent createManyAndReturn
   */
  export type parentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * The data used to create many parents.
     */
    data: parentCreateManyInput | parentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * parent update
   */
  export type parentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
    /**
     * The data needed to update a parent.
     */
    data: XOR<parentUpdateInput, parentUncheckedUpdateInput>
    /**
     * Choose, which parent to update.
     */
    where: parentWhereUniqueInput
  }

  /**
   * parent updateMany
   */
  export type parentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update parents.
     */
    data: XOR<parentUpdateManyMutationInput, parentUncheckedUpdateManyInput>
    /**
     * Filter which parents to update
     */
    where?: parentWhereInput
    /**
     * Limit how many parents to update.
     */
    limit?: number
  }

  /**
   * parent updateManyAndReturn
   */
  export type parentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * The data used to update parents.
     */
    data: XOR<parentUpdateManyMutationInput, parentUncheckedUpdateManyInput>
    /**
     * Filter which parents to update
     */
    where?: parentWhereInput
    /**
     * Limit how many parents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * parent upsert
   */
  export type parentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
    /**
     * The filter to search for the parent to update in case it exists.
     */
    where: parentWhereUniqueInput
    /**
     * In case the parent found by the `where` argument doesn't exist, create a new parent with this data.
     */
    create: XOR<parentCreateInput, parentUncheckedCreateInput>
    /**
     * In case the parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<parentUpdateInput, parentUncheckedUpdateInput>
  }

  /**
   * parent delete
   */
  export type parentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
    /**
     * Filter which parent to delete.
     */
    where: parentWhereUniqueInput
  }

  /**
   * parent deleteMany
   */
  export type parentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parents to delete
     */
    where?: parentWhereInput
    /**
     * Limit how many parents to delete.
     */
    limit?: number
  }

  /**
   * parent without action
   */
  export type parentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parent
     */
    omit?: parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parentInclude<ExtArgs> | null
  }


  /**
   * Model meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    id: number | null
    babyId: number | null
  }

  export type MealSumAggregateOutputType = {
    id: number | null
    babyId: number | null
  }

  export type MealMinAggregateOutputType = {
    id: number | null
    meal: string | null
    mealQnt: string | null
    mealTime: Date | null
    babyId: number | null
  }

  export type MealMaxAggregateOutputType = {
    id: number | null
    meal: string | null
    mealQnt: string | null
    mealTime: Date | null
    babyId: number | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    meal: number
    mealQnt: number
    mealTime: number
    babyId: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    id?: true
    babyId?: true
  }

  export type MealSumAggregateInputType = {
    id?: true
    babyId?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    meal?: true
    mealQnt?: true
    mealTime?: true
    babyId?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    meal?: true
    mealQnt?: true
    mealTime?: true
    babyId?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    meal?: true
    mealQnt?: true
    mealTime?: true
    babyId?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meal to aggregate.
     */
    where?: mealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealOrderByWithRelationInput | mealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type mealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mealWhereInput
    orderBy?: mealOrderByWithAggregationInput | mealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: mealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: number
    meal: string
    mealQnt: string
    mealTime: Date
    babyId: number
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends mealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type mealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal?: boolean
    mealQnt?: boolean
    mealTime?: boolean
    babyId?: boolean
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type mealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal?: boolean
    mealQnt?: boolean
    mealTime?: boolean
    babyId?: boolean
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type mealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal?: boolean
    mealQnt?: boolean
    mealTime?: boolean
    babyId?: boolean
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type mealSelectScalar = {
    id?: boolean
    meal?: boolean
    mealQnt?: boolean
    mealTime?: boolean
    babyId?: boolean
  }

  export type mealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meal" | "mealQnt" | "mealTime" | "babyId", ExtArgs["result"]["meal"]>
  export type mealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }
  export type mealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }
  export type mealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }

  export type $mealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meal"
    objects: {
      baby: Prisma.$babyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      meal: string
      mealQnt: string
      mealTime: Date
      babyId: number
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type mealGetPayload<S extends boolean | null | undefined | mealDefaultArgs> = $Result.GetResult<Prisma.$mealPayload, S>

  type mealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface mealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meal'], meta: { name: 'meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {mealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mealFindUniqueArgs>(args: SelectSubset<T, mealFindUniqueArgs<ExtArgs>>): Prisma__mealClient<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mealFindUniqueOrThrowArgs>(args: SelectSubset<T, mealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mealClient<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mealFindFirstArgs>(args?: SelectSubset<T, mealFindFirstArgs<ExtArgs>>): Prisma__mealClient<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mealFindFirstOrThrowArgs>(args?: SelectSubset<T, mealFindFirstOrThrowArgs<ExtArgs>>): Prisma__mealClient<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mealFindManyArgs>(args?: SelectSubset<T, mealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {mealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends mealCreateArgs>(args: SelectSubset<T, mealCreateArgs<ExtArgs>>): Prisma__mealClient<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {mealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mealCreateManyArgs>(args?: SelectSubset<T, mealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {mealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mealCreateManyAndReturnArgs>(args?: SelectSubset<T, mealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {mealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends mealDeleteArgs>(args: SelectSubset<T, mealDeleteArgs<ExtArgs>>): Prisma__mealClient<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {mealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mealUpdateArgs>(args: SelectSubset<T, mealUpdateArgs<ExtArgs>>): Prisma__mealClient<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {mealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mealDeleteManyArgs>(args?: SelectSubset<T, mealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mealUpdateManyArgs>(args: SelectSubset<T, mealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {mealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mealUpdateManyAndReturnArgs>(args: SelectSubset<T, mealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {mealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends mealUpsertArgs>(args: SelectSubset<T, mealUpsertArgs<ExtArgs>>): Prisma__mealClient<$Result.GetResult<Prisma.$mealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends mealCountArgs>(
      args?: Subset<T, mealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mealGroupByArgs['orderBy'] }
        : { orderBy?: mealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meal model
   */
  readonly fields: mealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baby<T extends babyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, babyDefaultArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meal model
   */
  interface mealFieldRefs {
    readonly id: FieldRef<"meal", 'Int'>
    readonly meal: FieldRef<"meal", 'String'>
    readonly mealQnt: FieldRef<"meal", 'String'>
    readonly mealTime: FieldRef<"meal", 'DateTime'>
    readonly babyId: FieldRef<"meal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * meal findUnique
   */
  export type mealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
    /**
     * Filter, which meal to fetch.
     */
    where: mealWhereUniqueInput
  }

  /**
   * meal findUniqueOrThrow
   */
  export type mealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
    /**
     * Filter, which meal to fetch.
     */
    where: mealWhereUniqueInput
  }

  /**
   * meal findFirst
   */
  export type mealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
    /**
     * Filter, which meal to fetch.
     */
    where?: mealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealOrderByWithRelationInput | mealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meals.
     */
    cursor?: mealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * meal findFirstOrThrow
   */
  export type mealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
    /**
     * Filter, which meal to fetch.
     */
    where?: mealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealOrderByWithRelationInput | mealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meals.
     */
    cursor?: mealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * meal findMany
   */
  export type mealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where?: mealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealOrderByWithRelationInput | mealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meals.
     */
    cursor?: mealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * meal create
   */
  export type mealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
    /**
     * The data needed to create a meal.
     */
    data: XOR<mealCreateInput, mealUncheckedCreateInput>
  }

  /**
   * meal createMany
   */
  export type mealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meals.
     */
    data: mealCreateManyInput | mealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meal createManyAndReturn
   */
  export type mealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * The data used to create many meals.
     */
    data: mealCreateManyInput | mealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * meal update
   */
  export type mealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
    /**
     * The data needed to update a meal.
     */
    data: XOR<mealUpdateInput, mealUncheckedUpdateInput>
    /**
     * Choose, which meal to update.
     */
    where: mealWhereUniqueInput
  }

  /**
   * meal updateMany
   */
  export type mealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meals.
     */
    data: XOR<mealUpdateManyMutationInput, mealUncheckedUpdateManyInput>
    /**
     * Filter which meals to update
     */
    where?: mealWhereInput
    /**
     * Limit how many meals to update.
     */
    limit?: number
  }

  /**
   * meal updateManyAndReturn
   */
  export type mealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * The data used to update meals.
     */
    data: XOR<mealUpdateManyMutationInput, mealUncheckedUpdateManyInput>
    /**
     * Filter which meals to update
     */
    where?: mealWhereInput
    /**
     * Limit how many meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * meal upsert
   */
  export type mealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
    /**
     * The filter to search for the meal to update in case it exists.
     */
    where: mealWhereUniqueInput
    /**
     * In case the meal found by the `where` argument doesn't exist, create a new meal with this data.
     */
    create: XOR<mealCreateInput, mealUncheckedCreateInput>
    /**
     * In case the meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mealUpdateInput, mealUncheckedUpdateInput>
  }

  /**
   * meal delete
   */
  export type mealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
    /**
     * Filter which meal to delete.
     */
    where: mealWhereUniqueInput
  }

  /**
   * meal deleteMany
   */
  export type mealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meals to delete
     */
    where?: mealWhereInput
    /**
     * Limit how many meals to delete.
     */
    limit?: number
  }

  /**
   * meal without action
   */
  export type mealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal
     */
    select?: mealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal
     */
    omit?: mealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealInclude<ExtArgs> | null
  }


  /**
   * Model weight
   */

  export type AggregateWeight = {
    _count: WeightCountAggregateOutputType | null
    _avg: WeightAvgAggregateOutputType | null
    _sum: WeightSumAggregateOutputType | null
    _min: WeightMinAggregateOutputType | null
    _max: WeightMaxAggregateOutputType | null
  }

  export type WeightAvgAggregateOutputType = {
    id: number | null
    babyId: number | null
  }

  export type WeightSumAggregateOutputType = {
    id: number | null
    babyId: number | null
  }

  export type WeightMinAggregateOutputType = {
    id: number | null
    weight: string | null
    weightTime: string | null
    weightComment: Date | null
    babyId: number | null
  }

  export type WeightMaxAggregateOutputType = {
    id: number | null
    weight: string | null
    weightTime: string | null
    weightComment: Date | null
    babyId: number | null
  }

  export type WeightCountAggregateOutputType = {
    id: number
    weight: number
    weightTime: number
    weightComment: number
    babyId: number
    _all: number
  }


  export type WeightAvgAggregateInputType = {
    id?: true
    babyId?: true
  }

  export type WeightSumAggregateInputType = {
    id?: true
    babyId?: true
  }

  export type WeightMinAggregateInputType = {
    id?: true
    weight?: true
    weightTime?: true
    weightComment?: true
    babyId?: true
  }

  export type WeightMaxAggregateInputType = {
    id?: true
    weight?: true
    weightTime?: true
    weightComment?: true
    babyId?: true
  }

  export type WeightCountAggregateInputType = {
    id?: true
    weight?: true
    weightTime?: true
    weightComment?: true
    babyId?: true
    _all?: true
  }

  export type WeightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weight to aggregate.
     */
    where?: weightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weights to fetch.
     */
    orderBy?: weightOrderByWithRelationInput | weightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: weightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned weights
    **/
    _count?: true | WeightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeightMaxAggregateInputType
  }

  export type GetWeightAggregateType<T extends WeightAggregateArgs> = {
        [P in keyof T & keyof AggregateWeight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeight[P]>
      : GetScalarType<T[P], AggregateWeight[P]>
  }




  export type weightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: weightWhereInput
    orderBy?: weightOrderByWithAggregationInput | weightOrderByWithAggregationInput[]
    by: WeightScalarFieldEnum[] | WeightScalarFieldEnum
    having?: weightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeightCountAggregateInputType | true
    _avg?: WeightAvgAggregateInputType
    _sum?: WeightSumAggregateInputType
    _min?: WeightMinAggregateInputType
    _max?: WeightMaxAggregateInputType
  }

  export type WeightGroupByOutputType = {
    id: number
    weight: string
    weightTime: string
    weightComment: Date
    babyId: number
    _count: WeightCountAggregateOutputType | null
    _avg: WeightAvgAggregateOutputType | null
    _sum: WeightSumAggregateOutputType | null
    _min: WeightMinAggregateOutputType | null
    _max: WeightMaxAggregateOutputType | null
  }

  type GetWeightGroupByPayload<T extends weightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeightGroupByOutputType[P]>
            : GetScalarType<T[P], WeightGroupByOutputType[P]>
        }
      >
    >


  export type weightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weight?: boolean
    weightTime?: boolean
    weightComment?: boolean
    babyId?: boolean
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weight"]>

  export type weightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weight?: boolean
    weightTime?: boolean
    weightComment?: boolean
    babyId?: boolean
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weight"]>

  export type weightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weight?: boolean
    weightTime?: boolean
    weightComment?: boolean
    babyId?: boolean
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weight"]>

  export type weightSelectScalar = {
    id?: boolean
    weight?: boolean
    weightTime?: boolean
    weightComment?: boolean
    babyId?: boolean
  }

  export type weightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weight" | "weightTime" | "weightComment" | "babyId", ExtArgs["result"]["weight"]>
  export type weightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }
  export type weightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }
  export type weightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | babyDefaultArgs<ExtArgs>
  }

  export type $weightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "weight"
    objects: {
      baby: Prisma.$babyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      weight: string
      weightTime: string
      weightComment: Date
      babyId: number
    }, ExtArgs["result"]["weight"]>
    composites: {}
  }

  type weightGetPayload<S extends boolean | null | undefined | weightDefaultArgs> = $Result.GetResult<Prisma.$weightPayload, S>

  type weightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<weightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeightCountAggregateInputType | true
    }

  export interface weightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['weight'], meta: { name: 'weight' } }
    /**
     * Find zero or one Weight that matches the filter.
     * @param {weightFindUniqueArgs} args - Arguments to find a Weight
     * @example
     * // Get one Weight
     * const weight = await prisma.weight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends weightFindUniqueArgs>(args: SelectSubset<T, weightFindUniqueArgs<ExtArgs>>): Prisma__weightClient<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Weight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {weightFindUniqueOrThrowArgs} args - Arguments to find a Weight
     * @example
     * // Get one Weight
     * const weight = await prisma.weight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends weightFindUniqueOrThrowArgs>(args: SelectSubset<T, weightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__weightClient<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weightFindFirstArgs} args - Arguments to find a Weight
     * @example
     * // Get one Weight
     * const weight = await prisma.weight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends weightFindFirstArgs>(args?: SelectSubset<T, weightFindFirstArgs<ExtArgs>>): Prisma__weightClient<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weightFindFirstOrThrowArgs} args - Arguments to find a Weight
     * @example
     * // Get one Weight
     * const weight = await prisma.weight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends weightFindFirstOrThrowArgs>(args?: SelectSubset<T, weightFindFirstOrThrowArgs<ExtArgs>>): Prisma__weightClient<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weights
     * const weights = await prisma.weight.findMany()
     * 
     * // Get first 10 Weights
     * const weights = await prisma.weight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weightWithIdOnly = await prisma.weight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends weightFindManyArgs>(args?: SelectSubset<T, weightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Weight.
     * @param {weightCreateArgs} args - Arguments to create a Weight.
     * @example
     * // Create one Weight
     * const Weight = await prisma.weight.create({
     *   data: {
     *     // ... data to create a Weight
     *   }
     * })
     * 
     */
    create<T extends weightCreateArgs>(args: SelectSubset<T, weightCreateArgs<ExtArgs>>): Prisma__weightClient<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weights.
     * @param {weightCreateManyArgs} args - Arguments to create many Weights.
     * @example
     * // Create many Weights
     * const weight = await prisma.weight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends weightCreateManyArgs>(args?: SelectSubset<T, weightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weights and returns the data saved in the database.
     * @param {weightCreateManyAndReturnArgs} args - Arguments to create many Weights.
     * @example
     * // Create many Weights
     * const weight = await prisma.weight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weights and only return the `id`
     * const weightWithIdOnly = await prisma.weight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends weightCreateManyAndReturnArgs>(args?: SelectSubset<T, weightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Weight.
     * @param {weightDeleteArgs} args - Arguments to delete one Weight.
     * @example
     * // Delete one Weight
     * const Weight = await prisma.weight.delete({
     *   where: {
     *     // ... filter to delete one Weight
     *   }
     * })
     * 
     */
    delete<T extends weightDeleteArgs>(args: SelectSubset<T, weightDeleteArgs<ExtArgs>>): Prisma__weightClient<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Weight.
     * @param {weightUpdateArgs} args - Arguments to update one Weight.
     * @example
     * // Update one Weight
     * const weight = await prisma.weight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends weightUpdateArgs>(args: SelectSubset<T, weightUpdateArgs<ExtArgs>>): Prisma__weightClient<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weights.
     * @param {weightDeleteManyArgs} args - Arguments to filter Weights to delete.
     * @example
     * // Delete a few Weights
     * const { count } = await prisma.weight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends weightDeleteManyArgs>(args?: SelectSubset<T, weightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weights
     * const weight = await prisma.weight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends weightUpdateManyArgs>(args: SelectSubset<T, weightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weights and returns the data updated in the database.
     * @param {weightUpdateManyAndReturnArgs} args - Arguments to update many Weights.
     * @example
     * // Update many Weights
     * const weight = await prisma.weight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weights and only return the `id`
     * const weightWithIdOnly = await prisma.weight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends weightUpdateManyAndReturnArgs>(args: SelectSubset<T, weightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Weight.
     * @param {weightUpsertArgs} args - Arguments to update or create a Weight.
     * @example
     * // Update or create a Weight
     * const weight = await prisma.weight.upsert({
     *   create: {
     *     // ... data to create a Weight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weight we want to update
     *   }
     * })
     */
    upsert<T extends weightUpsertArgs>(args: SelectSubset<T, weightUpsertArgs<ExtArgs>>): Prisma__weightClient<$Result.GetResult<Prisma.$weightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weightCountArgs} args - Arguments to filter Weights to count.
     * @example
     * // Count the number of Weights
     * const count = await prisma.weight.count({
     *   where: {
     *     // ... the filter for the Weights we want to count
     *   }
     * })
    **/
    count<T extends weightCountArgs>(
      args?: Subset<T, weightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeightAggregateArgs>(args: Subset<T, WeightAggregateArgs>): Prisma.PrismaPromise<GetWeightAggregateType<T>>

    /**
     * Group by Weight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends weightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: weightGroupByArgs['orderBy'] }
        : { orderBy?: weightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, weightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the weight model
   */
  readonly fields: weightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for weight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__weightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baby<T extends babyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, babyDefaultArgs<ExtArgs>>): Prisma__babyClient<$Result.GetResult<Prisma.$babyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the weight model
   */
  interface weightFieldRefs {
    readonly id: FieldRef<"weight", 'Int'>
    readonly weight: FieldRef<"weight", 'String'>
    readonly weightTime: FieldRef<"weight", 'String'>
    readonly weightComment: FieldRef<"weight", 'DateTime'>
    readonly babyId: FieldRef<"weight", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * weight findUnique
   */
  export type weightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
    /**
     * Filter, which weight to fetch.
     */
    where: weightWhereUniqueInput
  }

  /**
   * weight findUniqueOrThrow
   */
  export type weightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
    /**
     * Filter, which weight to fetch.
     */
    where: weightWhereUniqueInput
  }

  /**
   * weight findFirst
   */
  export type weightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
    /**
     * Filter, which weight to fetch.
     */
    where?: weightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weights to fetch.
     */
    orderBy?: weightOrderByWithRelationInput | weightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for weights.
     */
    cursor?: weightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of weights.
     */
    distinct?: WeightScalarFieldEnum | WeightScalarFieldEnum[]
  }

  /**
   * weight findFirstOrThrow
   */
  export type weightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
    /**
     * Filter, which weight to fetch.
     */
    where?: weightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weights to fetch.
     */
    orderBy?: weightOrderByWithRelationInput | weightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for weights.
     */
    cursor?: weightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of weights.
     */
    distinct?: WeightScalarFieldEnum | WeightScalarFieldEnum[]
  }

  /**
   * weight findMany
   */
  export type weightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
    /**
     * Filter, which weights to fetch.
     */
    where?: weightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weights to fetch.
     */
    orderBy?: weightOrderByWithRelationInput | weightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing weights.
     */
    cursor?: weightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weights.
     */
    skip?: number
    distinct?: WeightScalarFieldEnum | WeightScalarFieldEnum[]
  }

  /**
   * weight create
   */
  export type weightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
    /**
     * The data needed to create a weight.
     */
    data: XOR<weightCreateInput, weightUncheckedCreateInput>
  }

  /**
   * weight createMany
   */
  export type weightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many weights.
     */
    data: weightCreateManyInput | weightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * weight createManyAndReturn
   */
  export type weightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * The data used to create many weights.
     */
    data: weightCreateManyInput | weightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * weight update
   */
  export type weightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
    /**
     * The data needed to update a weight.
     */
    data: XOR<weightUpdateInput, weightUncheckedUpdateInput>
    /**
     * Choose, which weight to update.
     */
    where: weightWhereUniqueInput
  }

  /**
   * weight updateMany
   */
  export type weightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update weights.
     */
    data: XOR<weightUpdateManyMutationInput, weightUncheckedUpdateManyInput>
    /**
     * Filter which weights to update
     */
    where?: weightWhereInput
    /**
     * Limit how many weights to update.
     */
    limit?: number
  }

  /**
   * weight updateManyAndReturn
   */
  export type weightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * The data used to update weights.
     */
    data: XOR<weightUpdateManyMutationInput, weightUncheckedUpdateManyInput>
    /**
     * Filter which weights to update
     */
    where?: weightWhereInput
    /**
     * Limit how many weights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * weight upsert
   */
  export type weightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
    /**
     * The filter to search for the weight to update in case it exists.
     */
    where: weightWhereUniqueInput
    /**
     * In case the weight found by the `where` argument doesn't exist, create a new weight with this data.
     */
    create: XOR<weightCreateInput, weightUncheckedCreateInput>
    /**
     * In case the weight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<weightUpdateInput, weightUncheckedUpdateInput>
  }

  /**
   * weight delete
   */
  export type weightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
    /**
     * Filter which weight to delete.
     */
    where: weightWhereUniqueInput
  }

  /**
   * weight deleteMany
   */
  export type weightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weights to delete
     */
    where?: weightWhereInput
    /**
     * Limit how many weights to delete.
     */
    limit?: number
  }

  /**
   * weight without action
   */
  export type weightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight
     */
    select?: weightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight
     */
    omit?: weightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weightInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BabyScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    height: 'height',
    dateOfBirth: 'dateOfBirth'
  };

  export type BabyScalarFieldEnum = (typeof BabyScalarFieldEnum)[keyof typeof BabyScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    babyId: 'babyId'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    meal: 'meal',
    mealQnt: 'mealQnt',
    mealTime: 'mealTime',
    babyId: 'babyId'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const WeightScalarFieldEnum: {
    id: 'id',
    weight: 'weight',
    weightTime: 'weightTime',
    weightComment: 'weightComment',
    babyId: 'babyId'
  };

  export type WeightScalarFieldEnum = (typeof WeightScalarFieldEnum)[keyof typeof WeightScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type babyWhereInput = {
    AND?: babyWhereInput | babyWhereInput[]
    OR?: babyWhereInput[]
    NOT?: babyWhereInput | babyWhereInput[]
    id?: IntFilter<"baby"> | number
    firstName?: StringFilter<"baby"> | string
    lastName?: StringFilter<"baby"> | string
    height?: IntFilter<"baby"> | number
    dateOfBirth?: DateTimeFilter<"baby"> | Date | string
    parents?: ParentListRelationFilter
    meal?: MealListRelationFilter
    weight?: WeightListRelationFilter
  }

  export type babyOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    height?: SortOrder
    dateOfBirth?: SortOrder
    parents?: parentOrderByRelationAggregateInput
    meal?: mealOrderByRelationAggregateInput
    weight?: weightOrderByRelationAggregateInput
  }

  export type babyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: babyWhereInput | babyWhereInput[]
    OR?: babyWhereInput[]
    NOT?: babyWhereInput | babyWhereInput[]
    firstName?: StringFilter<"baby"> | string
    lastName?: StringFilter<"baby"> | string
    height?: IntFilter<"baby"> | number
    dateOfBirth?: DateTimeFilter<"baby"> | Date | string
    parents?: ParentListRelationFilter
    meal?: MealListRelationFilter
    weight?: WeightListRelationFilter
  }, "id">

  export type babyOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    height?: SortOrder
    dateOfBirth?: SortOrder
    _count?: babyCountOrderByAggregateInput
    _avg?: babyAvgOrderByAggregateInput
    _max?: babyMaxOrderByAggregateInput
    _min?: babyMinOrderByAggregateInput
    _sum?: babySumOrderByAggregateInput
  }

  export type babyScalarWhereWithAggregatesInput = {
    AND?: babyScalarWhereWithAggregatesInput | babyScalarWhereWithAggregatesInput[]
    OR?: babyScalarWhereWithAggregatesInput[]
    NOT?: babyScalarWhereWithAggregatesInput | babyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"baby"> | number
    firstName?: StringWithAggregatesFilter<"baby"> | string
    lastName?: StringWithAggregatesFilter<"baby"> | string
    height?: IntWithAggregatesFilter<"baby"> | number
    dateOfBirth?: DateTimeWithAggregatesFilter<"baby"> | Date | string
  }

  export type parentWhereInput = {
    AND?: parentWhereInput | parentWhereInput[]
    OR?: parentWhereInput[]
    NOT?: parentWhereInput | parentWhereInput[]
    id?: IntFilter<"parent"> | number
    firstName?: StringFilter<"parent"> | string
    lastName?: StringFilter<"parent"> | string
    babyId?: IntFilter<"parent"> | number
    baby?: XOR<BabyScalarRelationFilter, babyWhereInput>
  }

  export type parentOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    babyId?: SortOrder
    baby?: babyOrderByWithRelationInput
  }

  export type parentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: parentWhereInput | parentWhereInput[]
    OR?: parentWhereInput[]
    NOT?: parentWhereInput | parentWhereInput[]
    firstName?: StringFilter<"parent"> | string
    lastName?: StringFilter<"parent"> | string
    babyId?: IntFilter<"parent"> | number
    baby?: XOR<BabyScalarRelationFilter, babyWhereInput>
  }, "id">

  export type parentOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    babyId?: SortOrder
    _count?: parentCountOrderByAggregateInput
    _avg?: parentAvgOrderByAggregateInput
    _max?: parentMaxOrderByAggregateInput
    _min?: parentMinOrderByAggregateInput
    _sum?: parentSumOrderByAggregateInput
  }

  export type parentScalarWhereWithAggregatesInput = {
    AND?: parentScalarWhereWithAggregatesInput | parentScalarWhereWithAggregatesInput[]
    OR?: parentScalarWhereWithAggregatesInput[]
    NOT?: parentScalarWhereWithAggregatesInput | parentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"parent"> | number
    firstName?: StringWithAggregatesFilter<"parent"> | string
    lastName?: StringWithAggregatesFilter<"parent"> | string
    babyId?: IntWithAggregatesFilter<"parent"> | number
  }

  export type mealWhereInput = {
    AND?: mealWhereInput | mealWhereInput[]
    OR?: mealWhereInput[]
    NOT?: mealWhereInput | mealWhereInput[]
    id?: IntFilter<"meal"> | number
    meal?: StringFilter<"meal"> | string
    mealQnt?: StringFilter<"meal"> | string
    mealTime?: DateTimeFilter<"meal"> | Date | string
    babyId?: IntFilter<"meal"> | number
    baby?: XOR<BabyScalarRelationFilter, babyWhereInput>
  }

  export type mealOrderByWithRelationInput = {
    id?: SortOrder
    meal?: SortOrder
    mealQnt?: SortOrder
    mealTime?: SortOrder
    babyId?: SortOrder
    baby?: babyOrderByWithRelationInput
  }

  export type mealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mealWhereInput | mealWhereInput[]
    OR?: mealWhereInput[]
    NOT?: mealWhereInput | mealWhereInput[]
    meal?: StringFilter<"meal"> | string
    mealQnt?: StringFilter<"meal"> | string
    mealTime?: DateTimeFilter<"meal"> | Date | string
    babyId?: IntFilter<"meal"> | number
    baby?: XOR<BabyScalarRelationFilter, babyWhereInput>
  }, "id">

  export type mealOrderByWithAggregationInput = {
    id?: SortOrder
    meal?: SortOrder
    mealQnt?: SortOrder
    mealTime?: SortOrder
    babyId?: SortOrder
    _count?: mealCountOrderByAggregateInput
    _avg?: mealAvgOrderByAggregateInput
    _max?: mealMaxOrderByAggregateInput
    _min?: mealMinOrderByAggregateInput
    _sum?: mealSumOrderByAggregateInput
  }

  export type mealScalarWhereWithAggregatesInput = {
    AND?: mealScalarWhereWithAggregatesInput | mealScalarWhereWithAggregatesInput[]
    OR?: mealScalarWhereWithAggregatesInput[]
    NOT?: mealScalarWhereWithAggregatesInput | mealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"meal"> | number
    meal?: StringWithAggregatesFilter<"meal"> | string
    mealQnt?: StringWithAggregatesFilter<"meal"> | string
    mealTime?: DateTimeWithAggregatesFilter<"meal"> | Date | string
    babyId?: IntWithAggregatesFilter<"meal"> | number
  }

  export type weightWhereInput = {
    AND?: weightWhereInput | weightWhereInput[]
    OR?: weightWhereInput[]
    NOT?: weightWhereInput | weightWhereInput[]
    id?: IntFilter<"weight"> | number
    weight?: StringFilter<"weight"> | string
    weightTime?: StringFilter<"weight"> | string
    weightComment?: DateTimeFilter<"weight"> | Date | string
    babyId?: IntFilter<"weight"> | number
    baby?: XOR<BabyScalarRelationFilter, babyWhereInput>
  }

  export type weightOrderByWithRelationInput = {
    id?: SortOrder
    weight?: SortOrder
    weightTime?: SortOrder
    weightComment?: SortOrder
    babyId?: SortOrder
    baby?: babyOrderByWithRelationInput
  }

  export type weightWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: weightWhereInput | weightWhereInput[]
    OR?: weightWhereInput[]
    NOT?: weightWhereInput | weightWhereInput[]
    weight?: StringFilter<"weight"> | string
    weightTime?: StringFilter<"weight"> | string
    weightComment?: DateTimeFilter<"weight"> | Date | string
    babyId?: IntFilter<"weight"> | number
    baby?: XOR<BabyScalarRelationFilter, babyWhereInput>
  }, "id">

  export type weightOrderByWithAggregationInput = {
    id?: SortOrder
    weight?: SortOrder
    weightTime?: SortOrder
    weightComment?: SortOrder
    babyId?: SortOrder
    _count?: weightCountOrderByAggregateInput
    _avg?: weightAvgOrderByAggregateInput
    _max?: weightMaxOrderByAggregateInput
    _min?: weightMinOrderByAggregateInput
    _sum?: weightSumOrderByAggregateInput
  }

  export type weightScalarWhereWithAggregatesInput = {
    AND?: weightScalarWhereWithAggregatesInput | weightScalarWhereWithAggregatesInput[]
    OR?: weightScalarWhereWithAggregatesInput[]
    NOT?: weightScalarWhereWithAggregatesInput | weightScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"weight"> | number
    weight?: StringWithAggregatesFilter<"weight"> | string
    weightTime?: StringWithAggregatesFilter<"weight"> | string
    weightComment?: DateTimeWithAggregatesFilter<"weight"> | Date | string
    babyId?: IntWithAggregatesFilter<"weight"> | number
  }

  export type babyCreateInput = {
    firstName: string
    lastName: string
    height: number
    dateOfBirth: Date | string
    parents?: parentCreateNestedManyWithoutBabyInput
    meal?: mealCreateNestedManyWithoutBabyInput
    weight?: weightCreateNestedManyWithoutBabyInput
  }

  export type babyUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    height: number
    dateOfBirth: Date | string
    parents?: parentUncheckedCreateNestedManyWithoutBabyInput
    meal?: mealUncheckedCreateNestedManyWithoutBabyInput
    weight?: weightUncheckedCreateNestedManyWithoutBabyInput
  }

  export type babyUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: parentUpdateManyWithoutBabyNestedInput
    meal?: mealUpdateManyWithoutBabyNestedInput
    weight?: weightUpdateManyWithoutBabyNestedInput
  }

  export type babyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: parentUncheckedUpdateManyWithoutBabyNestedInput
    meal?: mealUncheckedUpdateManyWithoutBabyNestedInput
    weight?: weightUncheckedUpdateManyWithoutBabyNestedInput
  }

  export type babyCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    height: number
    dateOfBirth: Date | string
  }

  export type babyUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type babyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type parentCreateInput = {
    firstName: string
    lastName: string
    baby: babyCreateNestedOneWithoutParentsInput
  }

  export type parentUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    babyId: number
  }

  export type parentUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    baby?: babyUpdateOneRequiredWithoutParentsNestedInput
  }

  export type parentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    babyId?: IntFieldUpdateOperationsInput | number
  }

  export type parentCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    babyId: number
  }

  export type parentUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type parentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    babyId?: IntFieldUpdateOperationsInput | number
  }

  export type mealCreateInput = {
    meal: string
    mealQnt: string
    mealTime: Date | string
    baby: babyCreateNestedOneWithoutMealInput
  }

  export type mealUncheckedCreateInput = {
    id?: number
    meal: string
    mealQnt: string
    mealTime: Date | string
    babyId: number
  }

  export type mealUpdateInput = {
    meal?: StringFieldUpdateOperationsInput | string
    mealQnt?: StringFieldUpdateOperationsInput | string
    mealTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baby?: babyUpdateOneRequiredWithoutMealNestedInput
  }

  export type mealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal?: StringFieldUpdateOperationsInput | string
    mealQnt?: StringFieldUpdateOperationsInput | string
    mealTime?: DateTimeFieldUpdateOperationsInput | Date | string
    babyId?: IntFieldUpdateOperationsInput | number
  }

  export type mealCreateManyInput = {
    id?: number
    meal: string
    mealQnt: string
    mealTime: Date | string
    babyId: number
  }

  export type mealUpdateManyMutationInput = {
    meal?: StringFieldUpdateOperationsInput | string
    mealQnt?: StringFieldUpdateOperationsInput | string
    mealTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal?: StringFieldUpdateOperationsInput | string
    mealQnt?: StringFieldUpdateOperationsInput | string
    mealTime?: DateTimeFieldUpdateOperationsInput | Date | string
    babyId?: IntFieldUpdateOperationsInput | number
  }

  export type weightCreateInput = {
    weight: string
    weightTime: string
    weightComment: Date | string
    baby: babyCreateNestedOneWithoutWeightInput
  }

  export type weightUncheckedCreateInput = {
    id?: number
    weight: string
    weightTime: string
    weightComment: Date | string
    babyId: number
  }

  export type weightUpdateInput = {
    weight?: StringFieldUpdateOperationsInput | string
    weightTime?: StringFieldUpdateOperationsInput | string
    weightComment?: DateTimeFieldUpdateOperationsInput | Date | string
    baby?: babyUpdateOneRequiredWithoutWeightNestedInput
  }

  export type weightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: StringFieldUpdateOperationsInput | string
    weightTime?: StringFieldUpdateOperationsInput | string
    weightComment?: DateTimeFieldUpdateOperationsInput | Date | string
    babyId?: IntFieldUpdateOperationsInput | number
  }

  export type weightCreateManyInput = {
    id?: number
    weight: string
    weightTime: string
    weightComment: Date | string
    babyId: number
  }

  export type weightUpdateManyMutationInput = {
    weight?: StringFieldUpdateOperationsInput | string
    weightTime?: StringFieldUpdateOperationsInput | string
    weightComment?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type weightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: StringFieldUpdateOperationsInput | string
    weightTime?: StringFieldUpdateOperationsInput | string
    weightComment?: DateTimeFieldUpdateOperationsInput | Date | string
    babyId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParentListRelationFilter = {
    every?: parentWhereInput
    some?: parentWhereInput
    none?: parentWhereInput
  }

  export type MealListRelationFilter = {
    every?: mealWhereInput
    some?: mealWhereInput
    none?: mealWhereInput
  }

  export type WeightListRelationFilter = {
    every?: weightWhereInput
    some?: weightWhereInput
    none?: weightWhereInput
  }

  export type parentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type weightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type babyCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    height?: SortOrder
    dateOfBirth?: SortOrder
  }

  export type babyAvgOrderByAggregateInput = {
    id?: SortOrder
    height?: SortOrder
  }

  export type babyMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    height?: SortOrder
    dateOfBirth?: SortOrder
  }

  export type babyMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    height?: SortOrder
    dateOfBirth?: SortOrder
  }

  export type babySumOrderByAggregateInput = {
    id?: SortOrder
    height?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BabyScalarRelationFilter = {
    is?: babyWhereInput
    isNot?: babyWhereInput
  }

  export type parentCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    babyId?: SortOrder
  }

  export type parentAvgOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
  }

  export type parentMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    babyId?: SortOrder
  }

  export type parentMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    babyId?: SortOrder
  }

  export type parentSumOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
  }

  export type mealCountOrderByAggregateInput = {
    id?: SortOrder
    meal?: SortOrder
    mealQnt?: SortOrder
    mealTime?: SortOrder
    babyId?: SortOrder
  }

  export type mealAvgOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
  }

  export type mealMaxOrderByAggregateInput = {
    id?: SortOrder
    meal?: SortOrder
    mealQnt?: SortOrder
    mealTime?: SortOrder
    babyId?: SortOrder
  }

  export type mealMinOrderByAggregateInput = {
    id?: SortOrder
    meal?: SortOrder
    mealQnt?: SortOrder
    mealTime?: SortOrder
    babyId?: SortOrder
  }

  export type mealSumOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
  }

  export type weightCountOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    weightTime?: SortOrder
    weightComment?: SortOrder
    babyId?: SortOrder
  }

  export type weightAvgOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
  }

  export type weightMaxOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    weightTime?: SortOrder
    weightComment?: SortOrder
    babyId?: SortOrder
  }

  export type weightMinOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    weightTime?: SortOrder
    weightComment?: SortOrder
    babyId?: SortOrder
  }

  export type weightSumOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
  }

  export type parentCreateNestedManyWithoutBabyInput = {
    create?: XOR<parentCreateWithoutBabyInput, parentUncheckedCreateWithoutBabyInput> | parentCreateWithoutBabyInput[] | parentUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: parentCreateOrConnectWithoutBabyInput | parentCreateOrConnectWithoutBabyInput[]
    createMany?: parentCreateManyBabyInputEnvelope
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[]
  }

  export type mealCreateNestedManyWithoutBabyInput = {
    create?: XOR<mealCreateWithoutBabyInput, mealUncheckedCreateWithoutBabyInput> | mealCreateWithoutBabyInput[] | mealUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: mealCreateOrConnectWithoutBabyInput | mealCreateOrConnectWithoutBabyInput[]
    createMany?: mealCreateManyBabyInputEnvelope
    connect?: mealWhereUniqueInput | mealWhereUniqueInput[]
  }

  export type weightCreateNestedManyWithoutBabyInput = {
    create?: XOR<weightCreateWithoutBabyInput, weightUncheckedCreateWithoutBabyInput> | weightCreateWithoutBabyInput[] | weightUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: weightCreateOrConnectWithoutBabyInput | weightCreateOrConnectWithoutBabyInput[]
    createMany?: weightCreateManyBabyInputEnvelope
    connect?: weightWhereUniqueInput | weightWhereUniqueInput[]
  }

  export type parentUncheckedCreateNestedManyWithoutBabyInput = {
    create?: XOR<parentCreateWithoutBabyInput, parentUncheckedCreateWithoutBabyInput> | parentCreateWithoutBabyInput[] | parentUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: parentCreateOrConnectWithoutBabyInput | parentCreateOrConnectWithoutBabyInput[]
    createMany?: parentCreateManyBabyInputEnvelope
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[]
  }

  export type mealUncheckedCreateNestedManyWithoutBabyInput = {
    create?: XOR<mealCreateWithoutBabyInput, mealUncheckedCreateWithoutBabyInput> | mealCreateWithoutBabyInput[] | mealUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: mealCreateOrConnectWithoutBabyInput | mealCreateOrConnectWithoutBabyInput[]
    createMany?: mealCreateManyBabyInputEnvelope
    connect?: mealWhereUniqueInput | mealWhereUniqueInput[]
  }

  export type weightUncheckedCreateNestedManyWithoutBabyInput = {
    create?: XOR<weightCreateWithoutBabyInput, weightUncheckedCreateWithoutBabyInput> | weightCreateWithoutBabyInput[] | weightUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: weightCreateOrConnectWithoutBabyInput | weightCreateOrConnectWithoutBabyInput[]
    createMany?: weightCreateManyBabyInputEnvelope
    connect?: weightWhereUniqueInput | weightWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type parentUpdateManyWithoutBabyNestedInput = {
    create?: XOR<parentCreateWithoutBabyInput, parentUncheckedCreateWithoutBabyInput> | parentCreateWithoutBabyInput[] | parentUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: parentCreateOrConnectWithoutBabyInput | parentCreateOrConnectWithoutBabyInput[]
    upsert?: parentUpsertWithWhereUniqueWithoutBabyInput | parentUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: parentCreateManyBabyInputEnvelope
    set?: parentWhereUniqueInput | parentWhereUniqueInput[]
    disconnect?: parentWhereUniqueInput | parentWhereUniqueInput[]
    delete?: parentWhereUniqueInput | parentWhereUniqueInput[]
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[]
    update?: parentUpdateWithWhereUniqueWithoutBabyInput | parentUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: parentUpdateManyWithWhereWithoutBabyInput | parentUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: parentScalarWhereInput | parentScalarWhereInput[]
  }

  export type mealUpdateManyWithoutBabyNestedInput = {
    create?: XOR<mealCreateWithoutBabyInput, mealUncheckedCreateWithoutBabyInput> | mealCreateWithoutBabyInput[] | mealUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: mealCreateOrConnectWithoutBabyInput | mealCreateOrConnectWithoutBabyInput[]
    upsert?: mealUpsertWithWhereUniqueWithoutBabyInput | mealUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: mealCreateManyBabyInputEnvelope
    set?: mealWhereUniqueInput | mealWhereUniqueInput[]
    disconnect?: mealWhereUniqueInput | mealWhereUniqueInput[]
    delete?: mealWhereUniqueInput | mealWhereUniqueInput[]
    connect?: mealWhereUniqueInput | mealWhereUniqueInput[]
    update?: mealUpdateWithWhereUniqueWithoutBabyInput | mealUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: mealUpdateManyWithWhereWithoutBabyInput | mealUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: mealScalarWhereInput | mealScalarWhereInput[]
  }

  export type weightUpdateManyWithoutBabyNestedInput = {
    create?: XOR<weightCreateWithoutBabyInput, weightUncheckedCreateWithoutBabyInput> | weightCreateWithoutBabyInput[] | weightUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: weightCreateOrConnectWithoutBabyInput | weightCreateOrConnectWithoutBabyInput[]
    upsert?: weightUpsertWithWhereUniqueWithoutBabyInput | weightUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: weightCreateManyBabyInputEnvelope
    set?: weightWhereUniqueInput | weightWhereUniqueInput[]
    disconnect?: weightWhereUniqueInput | weightWhereUniqueInput[]
    delete?: weightWhereUniqueInput | weightWhereUniqueInput[]
    connect?: weightWhereUniqueInput | weightWhereUniqueInput[]
    update?: weightUpdateWithWhereUniqueWithoutBabyInput | weightUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: weightUpdateManyWithWhereWithoutBabyInput | weightUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: weightScalarWhereInput | weightScalarWhereInput[]
  }

  export type parentUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: XOR<parentCreateWithoutBabyInput, parentUncheckedCreateWithoutBabyInput> | parentCreateWithoutBabyInput[] | parentUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: parentCreateOrConnectWithoutBabyInput | parentCreateOrConnectWithoutBabyInput[]
    upsert?: parentUpsertWithWhereUniqueWithoutBabyInput | parentUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: parentCreateManyBabyInputEnvelope
    set?: parentWhereUniqueInput | parentWhereUniqueInput[]
    disconnect?: parentWhereUniqueInput | parentWhereUniqueInput[]
    delete?: parentWhereUniqueInput | parentWhereUniqueInput[]
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[]
    update?: parentUpdateWithWhereUniqueWithoutBabyInput | parentUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: parentUpdateManyWithWhereWithoutBabyInput | parentUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: parentScalarWhereInput | parentScalarWhereInput[]
  }

  export type mealUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: XOR<mealCreateWithoutBabyInput, mealUncheckedCreateWithoutBabyInput> | mealCreateWithoutBabyInput[] | mealUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: mealCreateOrConnectWithoutBabyInput | mealCreateOrConnectWithoutBabyInput[]
    upsert?: mealUpsertWithWhereUniqueWithoutBabyInput | mealUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: mealCreateManyBabyInputEnvelope
    set?: mealWhereUniqueInput | mealWhereUniqueInput[]
    disconnect?: mealWhereUniqueInput | mealWhereUniqueInput[]
    delete?: mealWhereUniqueInput | mealWhereUniqueInput[]
    connect?: mealWhereUniqueInput | mealWhereUniqueInput[]
    update?: mealUpdateWithWhereUniqueWithoutBabyInput | mealUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: mealUpdateManyWithWhereWithoutBabyInput | mealUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: mealScalarWhereInput | mealScalarWhereInput[]
  }

  export type weightUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: XOR<weightCreateWithoutBabyInput, weightUncheckedCreateWithoutBabyInput> | weightCreateWithoutBabyInput[] | weightUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: weightCreateOrConnectWithoutBabyInput | weightCreateOrConnectWithoutBabyInput[]
    upsert?: weightUpsertWithWhereUniqueWithoutBabyInput | weightUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: weightCreateManyBabyInputEnvelope
    set?: weightWhereUniqueInput | weightWhereUniqueInput[]
    disconnect?: weightWhereUniqueInput | weightWhereUniqueInput[]
    delete?: weightWhereUniqueInput | weightWhereUniqueInput[]
    connect?: weightWhereUniqueInput | weightWhereUniqueInput[]
    update?: weightUpdateWithWhereUniqueWithoutBabyInput | weightUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: weightUpdateManyWithWhereWithoutBabyInput | weightUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: weightScalarWhereInput | weightScalarWhereInput[]
  }

  export type babyCreateNestedOneWithoutParentsInput = {
    create?: XOR<babyCreateWithoutParentsInput, babyUncheckedCreateWithoutParentsInput>
    connectOrCreate?: babyCreateOrConnectWithoutParentsInput
    connect?: babyWhereUniqueInput
  }

  export type babyUpdateOneRequiredWithoutParentsNestedInput = {
    create?: XOR<babyCreateWithoutParentsInput, babyUncheckedCreateWithoutParentsInput>
    connectOrCreate?: babyCreateOrConnectWithoutParentsInput
    upsert?: babyUpsertWithoutParentsInput
    connect?: babyWhereUniqueInput
    update?: XOR<XOR<babyUpdateToOneWithWhereWithoutParentsInput, babyUpdateWithoutParentsInput>, babyUncheckedUpdateWithoutParentsInput>
  }

  export type babyCreateNestedOneWithoutMealInput = {
    create?: XOR<babyCreateWithoutMealInput, babyUncheckedCreateWithoutMealInput>
    connectOrCreate?: babyCreateOrConnectWithoutMealInput
    connect?: babyWhereUniqueInput
  }

  export type babyUpdateOneRequiredWithoutMealNestedInput = {
    create?: XOR<babyCreateWithoutMealInput, babyUncheckedCreateWithoutMealInput>
    connectOrCreate?: babyCreateOrConnectWithoutMealInput
    upsert?: babyUpsertWithoutMealInput
    connect?: babyWhereUniqueInput
    update?: XOR<XOR<babyUpdateToOneWithWhereWithoutMealInput, babyUpdateWithoutMealInput>, babyUncheckedUpdateWithoutMealInput>
  }

  export type babyCreateNestedOneWithoutWeightInput = {
    create?: XOR<babyCreateWithoutWeightInput, babyUncheckedCreateWithoutWeightInput>
    connectOrCreate?: babyCreateOrConnectWithoutWeightInput
    connect?: babyWhereUniqueInput
  }

  export type babyUpdateOneRequiredWithoutWeightNestedInput = {
    create?: XOR<babyCreateWithoutWeightInput, babyUncheckedCreateWithoutWeightInput>
    connectOrCreate?: babyCreateOrConnectWithoutWeightInput
    upsert?: babyUpsertWithoutWeightInput
    connect?: babyWhereUniqueInput
    update?: XOR<XOR<babyUpdateToOneWithWhereWithoutWeightInput, babyUpdateWithoutWeightInput>, babyUncheckedUpdateWithoutWeightInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type parentCreateWithoutBabyInput = {
    firstName: string
    lastName: string
  }

  export type parentUncheckedCreateWithoutBabyInput = {
    id?: number
    firstName: string
    lastName: string
  }

  export type parentCreateOrConnectWithoutBabyInput = {
    where: parentWhereUniqueInput
    create: XOR<parentCreateWithoutBabyInput, parentUncheckedCreateWithoutBabyInput>
  }

  export type parentCreateManyBabyInputEnvelope = {
    data: parentCreateManyBabyInput | parentCreateManyBabyInput[]
    skipDuplicates?: boolean
  }

  export type mealCreateWithoutBabyInput = {
    meal: string
    mealQnt: string
    mealTime: Date | string
  }

  export type mealUncheckedCreateWithoutBabyInput = {
    id?: number
    meal: string
    mealQnt: string
    mealTime: Date | string
  }

  export type mealCreateOrConnectWithoutBabyInput = {
    where: mealWhereUniqueInput
    create: XOR<mealCreateWithoutBabyInput, mealUncheckedCreateWithoutBabyInput>
  }

  export type mealCreateManyBabyInputEnvelope = {
    data: mealCreateManyBabyInput | mealCreateManyBabyInput[]
    skipDuplicates?: boolean
  }

  export type weightCreateWithoutBabyInput = {
    weight: string
    weightTime: string
    weightComment: Date | string
  }

  export type weightUncheckedCreateWithoutBabyInput = {
    id?: number
    weight: string
    weightTime: string
    weightComment: Date | string
  }

  export type weightCreateOrConnectWithoutBabyInput = {
    where: weightWhereUniqueInput
    create: XOR<weightCreateWithoutBabyInput, weightUncheckedCreateWithoutBabyInput>
  }

  export type weightCreateManyBabyInputEnvelope = {
    data: weightCreateManyBabyInput | weightCreateManyBabyInput[]
    skipDuplicates?: boolean
  }

  export type parentUpsertWithWhereUniqueWithoutBabyInput = {
    where: parentWhereUniqueInput
    update: XOR<parentUpdateWithoutBabyInput, parentUncheckedUpdateWithoutBabyInput>
    create: XOR<parentCreateWithoutBabyInput, parentUncheckedCreateWithoutBabyInput>
  }

  export type parentUpdateWithWhereUniqueWithoutBabyInput = {
    where: parentWhereUniqueInput
    data: XOR<parentUpdateWithoutBabyInput, parentUncheckedUpdateWithoutBabyInput>
  }

  export type parentUpdateManyWithWhereWithoutBabyInput = {
    where: parentScalarWhereInput
    data: XOR<parentUpdateManyMutationInput, parentUncheckedUpdateManyWithoutBabyInput>
  }

  export type parentScalarWhereInput = {
    AND?: parentScalarWhereInput | parentScalarWhereInput[]
    OR?: parentScalarWhereInput[]
    NOT?: parentScalarWhereInput | parentScalarWhereInput[]
    id?: IntFilter<"parent"> | number
    firstName?: StringFilter<"parent"> | string
    lastName?: StringFilter<"parent"> | string
    babyId?: IntFilter<"parent"> | number
  }

  export type mealUpsertWithWhereUniqueWithoutBabyInput = {
    where: mealWhereUniqueInput
    update: XOR<mealUpdateWithoutBabyInput, mealUncheckedUpdateWithoutBabyInput>
    create: XOR<mealCreateWithoutBabyInput, mealUncheckedCreateWithoutBabyInput>
  }

  export type mealUpdateWithWhereUniqueWithoutBabyInput = {
    where: mealWhereUniqueInput
    data: XOR<mealUpdateWithoutBabyInput, mealUncheckedUpdateWithoutBabyInput>
  }

  export type mealUpdateManyWithWhereWithoutBabyInput = {
    where: mealScalarWhereInput
    data: XOR<mealUpdateManyMutationInput, mealUncheckedUpdateManyWithoutBabyInput>
  }

  export type mealScalarWhereInput = {
    AND?: mealScalarWhereInput | mealScalarWhereInput[]
    OR?: mealScalarWhereInput[]
    NOT?: mealScalarWhereInput | mealScalarWhereInput[]
    id?: IntFilter<"meal"> | number
    meal?: StringFilter<"meal"> | string
    mealQnt?: StringFilter<"meal"> | string
    mealTime?: DateTimeFilter<"meal"> | Date | string
    babyId?: IntFilter<"meal"> | number
  }

  export type weightUpsertWithWhereUniqueWithoutBabyInput = {
    where: weightWhereUniqueInput
    update: XOR<weightUpdateWithoutBabyInput, weightUncheckedUpdateWithoutBabyInput>
    create: XOR<weightCreateWithoutBabyInput, weightUncheckedCreateWithoutBabyInput>
  }

  export type weightUpdateWithWhereUniqueWithoutBabyInput = {
    where: weightWhereUniqueInput
    data: XOR<weightUpdateWithoutBabyInput, weightUncheckedUpdateWithoutBabyInput>
  }

  export type weightUpdateManyWithWhereWithoutBabyInput = {
    where: weightScalarWhereInput
    data: XOR<weightUpdateManyMutationInput, weightUncheckedUpdateManyWithoutBabyInput>
  }

  export type weightScalarWhereInput = {
    AND?: weightScalarWhereInput | weightScalarWhereInput[]
    OR?: weightScalarWhereInput[]
    NOT?: weightScalarWhereInput | weightScalarWhereInput[]
    id?: IntFilter<"weight"> | number
    weight?: StringFilter<"weight"> | string
    weightTime?: StringFilter<"weight"> | string
    weightComment?: DateTimeFilter<"weight"> | Date | string
    babyId?: IntFilter<"weight"> | number
  }

  export type babyCreateWithoutParentsInput = {
    firstName: string
    lastName: string
    height: number
    dateOfBirth: Date | string
    meal?: mealCreateNestedManyWithoutBabyInput
    weight?: weightCreateNestedManyWithoutBabyInput
  }

  export type babyUncheckedCreateWithoutParentsInput = {
    id?: number
    firstName: string
    lastName: string
    height: number
    dateOfBirth: Date | string
    meal?: mealUncheckedCreateNestedManyWithoutBabyInput
    weight?: weightUncheckedCreateNestedManyWithoutBabyInput
  }

  export type babyCreateOrConnectWithoutParentsInput = {
    where: babyWhereUniqueInput
    create: XOR<babyCreateWithoutParentsInput, babyUncheckedCreateWithoutParentsInput>
  }

  export type babyUpsertWithoutParentsInput = {
    update: XOR<babyUpdateWithoutParentsInput, babyUncheckedUpdateWithoutParentsInput>
    create: XOR<babyCreateWithoutParentsInput, babyUncheckedCreateWithoutParentsInput>
    where?: babyWhereInput
  }

  export type babyUpdateToOneWithWhereWithoutParentsInput = {
    where?: babyWhereInput
    data: XOR<babyUpdateWithoutParentsInput, babyUncheckedUpdateWithoutParentsInput>
  }

  export type babyUpdateWithoutParentsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: mealUpdateManyWithoutBabyNestedInput
    weight?: weightUpdateManyWithoutBabyNestedInput
  }

  export type babyUncheckedUpdateWithoutParentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: mealUncheckedUpdateManyWithoutBabyNestedInput
    weight?: weightUncheckedUpdateManyWithoutBabyNestedInput
  }

  export type babyCreateWithoutMealInput = {
    firstName: string
    lastName: string
    height: number
    dateOfBirth: Date | string
    parents?: parentCreateNestedManyWithoutBabyInput
    weight?: weightCreateNestedManyWithoutBabyInput
  }

  export type babyUncheckedCreateWithoutMealInput = {
    id?: number
    firstName: string
    lastName: string
    height: number
    dateOfBirth: Date | string
    parents?: parentUncheckedCreateNestedManyWithoutBabyInput
    weight?: weightUncheckedCreateNestedManyWithoutBabyInput
  }

  export type babyCreateOrConnectWithoutMealInput = {
    where: babyWhereUniqueInput
    create: XOR<babyCreateWithoutMealInput, babyUncheckedCreateWithoutMealInput>
  }

  export type babyUpsertWithoutMealInput = {
    update: XOR<babyUpdateWithoutMealInput, babyUncheckedUpdateWithoutMealInput>
    create: XOR<babyCreateWithoutMealInput, babyUncheckedCreateWithoutMealInput>
    where?: babyWhereInput
  }

  export type babyUpdateToOneWithWhereWithoutMealInput = {
    where?: babyWhereInput
    data: XOR<babyUpdateWithoutMealInput, babyUncheckedUpdateWithoutMealInput>
  }

  export type babyUpdateWithoutMealInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: parentUpdateManyWithoutBabyNestedInput
    weight?: weightUpdateManyWithoutBabyNestedInput
  }

  export type babyUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: parentUncheckedUpdateManyWithoutBabyNestedInput
    weight?: weightUncheckedUpdateManyWithoutBabyNestedInput
  }

  export type babyCreateWithoutWeightInput = {
    firstName: string
    lastName: string
    height: number
    dateOfBirth: Date | string
    parents?: parentCreateNestedManyWithoutBabyInput
    meal?: mealCreateNestedManyWithoutBabyInput
  }

  export type babyUncheckedCreateWithoutWeightInput = {
    id?: number
    firstName: string
    lastName: string
    height: number
    dateOfBirth: Date | string
    parents?: parentUncheckedCreateNestedManyWithoutBabyInput
    meal?: mealUncheckedCreateNestedManyWithoutBabyInput
  }

  export type babyCreateOrConnectWithoutWeightInput = {
    where: babyWhereUniqueInput
    create: XOR<babyCreateWithoutWeightInput, babyUncheckedCreateWithoutWeightInput>
  }

  export type babyUpsertWithoutWeightInput = {
    update: XOR<babyUpdateWithoutWeightInput, babyUncheckedUpdateWithoutWeightInput>
    create: XOR<babyCreateWithoutWeightInput, babyUncheckedCreateWithoutWeightInput>
    where?: babyWhereInput
  }

  export type babyUpdateToOneWithWhereWithoutWeightInput = {
    where?: babyWhereInput
    data: XOR<babyUpdateWithoutWeightInput, babyUncheckedUpdateWithoutWeightInput>
  }

  export type babyUpdateWithoutWeightInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: parentUpdateManyWithoutBabyNestedInput
    meal?: mealUpdateManyWithoutBabyNestedInput
  }

  export type babyUncheckedUpdateWithoutWeightInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: parentUncheckedUpdateManyWithoutBabyNestedInput
    meal?: mealUncheckedUpdateManyWithoutBabyNestedInput
  }

  export type parentCreateManyBabyInput = {
    id?: number
    firstName: string
    lastName: string
  }

  export type mealCreateManyBabyInput = {
    id?: number
    meal: string
    mealQnt: string
    mealTime: Date | string
  }

  export type weightCreateManyBabyInput = {
    id?: number
    weight: string
    weightTime: string
    weightComment: Date | string
  }

  export type parentUpdateWithoutBabyInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type parentUncheckedUpdateWithoutBabyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type parentUncheckedUpdateManyWithoutBabyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type mealUpdateWithoutBabyInput = {
    meal?: StringFieldUpdateOperationsInput | string
    mealQnt?: StringFieldUpdateOperationsInput | string
    mealTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mealUncheckedUpdateWithoutBabyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal?: StringFieldUpdateOperationsInput | string
    mealQnt?: StringFieldUpdateOperationsInput | string
    mealTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mealUncheckedUpdateManyWithoutBabyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal?: StringFieldUpdateOperationsInput | string
    mealQnt?: StringFieldUpdateOperationsInput | string
    mealTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type weightUpdateWithoutBabyInput = {
    weight?: StringFieldUpdateOperationsInput | string
    weightTime?: StringFieldUpdateOperationsInput | string
    weightComment?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type weightUncheckedUpdateWithoutBabyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: StringFieldUpdateOperationsInput | string
    weightTime?: StringFieldUpdateOperationsInput | string
    weightComment?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type weightUncheckedUpdateManyWithoutBabyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: StringFieldUpdateOperationsInput | string
    weightTime?: StringFieldUpdateOperationsInput | string
    weightComment?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}