
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
 * Model Navigation_logs
 * 
 */
export type Navigation_logs = $Result.DefaultSelection<Prisma.$Navigation_logsPayload>
/**
 * Model Zone_logs
 * 
 */
export type Zone_logs = $Result.DefaultSelection<Prisma.$Zone_logsPayload>
/**
 * Model POI_logs
 * 
 */
export type POI_logs = $Result.DefaultSelection<Prisma.$POI_logsPayload>
/**
 * Model DeviceUsageLogs
 * 
 */
export type DeviceUsageLogs = $Result.DefaultSelection<Prisma.$DeviceUsageLogsPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model UserSessions
 * 
 */
export type UserSessions = $Result.DefaultSelection<Prisma.$UserSessionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Navigation_logs
 * const navigation_logs = await prisma.navigation_logs.findMany()
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
   * // Fetch zero or more Navigation_logs
   * const navigation_logs = await prisma.navigation_logs.findMany()
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
   * `prisma.navigation_logs`: Exposes CRUD operations for the **Navigation_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Navigation_logs
    * const navigation_logs = await prisma.navigation_logs.findMany()
    * ```
    */
  get navigation_logs(): Prisma.Navigation_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zone_logs`: Exposes CRUD operations for the **Zone_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zone_logs
    * const zone_logs = await prisma.zone_logs.findMany()
    * ```
    */
  get zone_logs(): Prisma.Zone_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pOI_logs`: Exposes CRUD operations for the **POI_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more POI_logs
    * const pOI_logs = await prisma.pOI_logs.findMany()
    * ```
    */
  get pOI_logs(): Prisma.POI_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceUsageLogs`: Exposes CRUD operations for the **DeviceUsageLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceUsageLogs
    * const deviceUsageLogs = await prisma.deviceUsageLogs.findMany()
    * ```
    */
  get deviceUsageLogs(): Prisma.DeviceUsageLogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSessions`: Exposes CRUD operations for the **UserSessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSessions.findMany()
    * ```
    */
  get userSessions(): Prisma.UserSessionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Navigation_logs: 'Navigation_logs',
    Zone_logs: 'Zone_logs',
    POI_logs: 'POI_logs',
    DeviceUsageLogs: 'DeviceUsageLogs',
    Feedback: 'Feedback',
    UserSessions: 'UserSessions'
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
      modelProps: "navigation_logs" | "zone_logs" | "pOI_logs" | "deviceUsageLogs" | "feedback" | "userSessions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Navigation_logs: {
        payload: Prisma.$Navigation_logsPayload<ExtArgs>
        fields: Prisma.Navigation_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Navigation_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Navigation_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload>
          }
          findFirst: {
            args: Prisma.Navigation_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Navigation_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload>
          }
          findMany: {
            args: Prisma.Navigation_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload>[]
          }
          create: {
            args: Prisma.Navigation_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload>
          }
          createMany: {
            args: Prisma.Navigation_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Navigation_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload>[]
          }
          delete: {
            args: Prisma.Navigation_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload>
          }
          update: {
            args: Prisma.Navigation_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload>
          }
          deleteMany: {
            args: Prisma.Navigation_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Navigation_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Navigation_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload>[]
          }
          upsert: {
            args: Prisma.Navigation_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Navigation_logsPayload>
          }
          aggregate: {
            args: Prisma.Navigation_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNavigation_logs>
          }
          groupBy: {
            args: Prisma.Navigation_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Navigation_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Navigation_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Navigation_logsCountAggregateOutputType> | number
          }
        }
      }
      Zone_logs: {
        payload: Prisma.$Zone_logsPayload<ExtArgs>
        fields: Prisma.Zone_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Zone_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Zone_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload>
          }
          findFirst: {
            args: Prisma.Zone_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Zone_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload>
          }
          findMany: {
            args: Prisma.Zone_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload>[]
          }
          create: {
            args: Prisma.Zone_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload>
          }
          createMany: {
            args: Prisma.Zone_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Zone_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload>[]
          }
          delete: {
            args: Prisma.Zone_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload>
          }
          update: {
            args: Prisma.Zone_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload>
          }
          deleteMany: {
            args: Prisma.Zone_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Zone_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Zone_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload>[]
          }
          upsert: {
            args: Prisma.Zone_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Zone_logsPayload>
          }
          aggregate: {
            args: Prisma.Zone_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZone_logs>
          }
          groupBy: {
            args: Prisma.Zone_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Zone_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Zone_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Zone_logsCountAggregateOutputType> | number
          }
        }
      }
      POI_logs: {
        payload: Prisma.$POI_logsPayload<ExtArgs>
        fields: Prisma.POI_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.POI_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.POI_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload>
          }
          findFirst: {
            args: Prisma.POI_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.POI_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload>
          }
          findMany: {
            args: Prisma.POI_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload>[]
          }
          create: {
            args: Prisma.POI_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload>
          }
          createMany: {
            args: Prisma.POI_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.POI_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload>[]
          }
          delete: {
            args: Prisma.POI_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload>
          }
          update: {
            args: Prisma.POI_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload>
          }
          deleteMany: {
            args: Prisma.POI_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.POI_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.POI_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload>[]
          }
          upsert: {
            args: Prisma.POI_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POI_logsPayload>
          }
          aggregate: {
            args: Prisma.POI_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePOI_logs>
          }
          groupBy: {
            args: Prisma.POI_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<POI_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.POI_logsCountArgs<ExtArgs>
            result: $Utils.Optional<POI_logsCountAggregateOutputType> | number
          }
        }
      }
      DeviceUsageLogs: {
        payload: Prisma.$DeviceUsageLogsPayload<ExtArgs>
        fields: Prisma.DeviceUsageLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceUsageLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceUsageLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload>
          }
          findFirst: {
            args: Prisma.DeviceUsageLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceUsageLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload>
          }
          findMany: {
            args: Prisma.DeviceUsageLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload>[]
          }
          create: {
            args: Prisma.DeviceUsageLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload>
          }
          createMany: {
            args: Prisma.DeviceUsageLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceUsageLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload>[]
          }
          delete: {
            args: Prisma.DeviceUsageLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload>
          }
          update: {
            args: Prisma.DeviceUsageLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload>
          }
          deleteMany: {
            args: Prisma.DeviceUsageLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUsageLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUsageLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload>[]
          }
          upsert: {
            args: Prisma.DeviceUsageLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceUsageLogsPayload>
          }
          aggregate: {
            args: Prisma.DeviceUsageLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceUsageLogs>
          }
          groupBy: {
            args: Prisma.DeviceUsageLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceUsageLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceUsageLogsCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceUsageLogsCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      UserSessions: {
        payload: Prisma.$UserSessionsPayload<ExtArgs>
        fields: Prisma.UserSessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload>
          }
          findFirst: {
            args: Prisma.UserSessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload>
          }
          findMany: {
            args: Prisma.UserSessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload>[]
          }
          create: {
            args: Prisma.UserSessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload>
          }
          createMany: {
            args: Prisma.UserSessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload>[]
          }
          delete: {
            args: Prisma.UserSessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload>
          }
          update: {
            args: Prisma.UserSessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload>[]
          }
          upsert: {
            args: Prisma.UserSessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionsPayload>
          }
          aggregate: {
            args: Prisma.UserSessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSessions>
          }
          groupBy: {
            args: Prisma.UserSessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionsCountAggregateOutputType> | number
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
    navigation_logs?: Navigation_logsOmit
    zone_logs?: Zone_logsOmit
    pOI_logs?: POI_logsOmit
    deviceUsageLogs?: DeviceUsageLogsOmit
    feedback?: FeedbackOmit
    userSessions?: UserSessionsOmit
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
   * Count Type Navigation_logsCountOutputType
   */

  export type Navigation_logsCountOutputType = {
    zoneLogs: number
    poiLogs: number
  }

  export type Navigation_logsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zoneLogs?: boolean | Navigation_logsCountOutputTypeCountZoneLogsArgs
    poiLogs?: boolean | Navigation_logsCountOutputTypeCountPoiLogsArgs
  }

  // Custom InputTypes
  /**
   * Navigation_logsCountOutputType without action
   */
  export type Navigation_logsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logsCountOutputType
     */
    select?: Navigation_logsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Navigation_logsCountOutputType without action
   */
  export type Navigation_logsCountOutputTypeCountZoneLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Zone_logsWhereInput
  }

  /**
   * Navigation_logsCountOutputType without action
   */
  export type Navigation_logsCountOutputTypeCountPoiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POI_logsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Navigation_logs
   */

  export type AggregateNavigation_logs = {
    _count: Navigation_logsCountAggregateOutputType | null
    _avg: Navigation_logsAvgAggregateOutputType | null
    _sum: Navigation_logsSumAggregateOutputType | null
    _min: Navigation_logsMinAggregateOutputType | null
    _max: Navigation_logsMaxAggregateOutputType | null
  }

  export type Navigation_logsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    environment_id: number | null
    rerouting_count: number | null
  }

  export type Navigation_logsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    environment_id: number | null
    rerouting_count: number | null
  }

  export type Navigation_logsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    environment_id: number | null
    rerouting_count: number | null
    start_time: Date | null
    end_time: Date | null
  }

  export type Navigation_logsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    environment_id: number | null
    rerouting_count: number | null
    start_time: Date | null
    end_time: Date | null
  }

  export type Navigation_logsCountAggregateOutputType = {
    id: number
    user_id: number
    environment_id: number
    rerouting_count: number
    start_time: number
    end_time: number
    _all: number
  }


  export type Navigation_logsAvgAggregateInputType = {
    id?: true
    user_id?: true
    environment_id?: true
    rerouting_count?: true
  }

  export type Navigation_logsSumAggregateInputType = {
    id?: true
    user_id?: true
    environment_id?: true
    rerouting_count?: true
  }

  export type Navigation_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    environment_id?: true
    rerouting_count?: true
    start_time?: true
    end_time?: true
  }

  export type Navigation_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    environment_id?: true
    rerouting_count?: true
    start_time?: true
    end_time?: true
  }

  export type Navigation_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    environment_id?: true
    rerouting_count?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type Navigation_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Navigation_logs to aggregate.
     */
    where?: Navigation_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navigation_logs to fetch.
     */
    orderBy?: Navigation_logsOrderByWithRelationInput | Navigation_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Navigation_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navigation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navigation_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Navigation_logs
    **/
    _count?: true | Navigation_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Navigation_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Navigation_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Navigation_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Navigation_logsMaxAggregateInputType
  }

  export type GetNavigation_logsAggregateType<T extends Navigation_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateNavigation_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNavigation_logs[P]>
      : GetScalarType<T[P], AggregateNavigation_logs[P]>
  }




  export type Navigation_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Navigation_logsWhereInput
    orderBy?: Navigation_logsOrderByWithAggregationInput | Navigation_logsOrderByWithAggregationInput[]
    by: Navigation_logsScalarFieldEnum[] | Navigation_logsScalarFieldEnum
    having?: Navigation_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Navigation_logsCountAggregateInputType | true
    _avg?: Navigation_logsAvgAggregateInputType
    _sum?: Navigation_logsSumAggregateInputType
    _min?: Navigation_logsMinAggregateInputType
    _max?: Navigation_logsMaxAggregateInputType
  }

  export type Navigation_logsGroupByOutputType = {
    id: number
    user_id: number
    environment_id: number
    rerouting_count: number
    start_time: Date
    end_time: Date | null
    _count: Navigation_logsCountAggregateOutputType | null
    _avg: Navigation_logsAvgAggregateOutputType | null
    _sum: Navigation_logsSumAggregateOutputType | null
    _min: Navigation_logsMinAggregateOutputType | null
    _max: Navigation_logsMaxAggregateOutputType | null
  }

  type GetNavigation_logsGroupByPayload<T extends Navigation_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Navigation_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Navigation_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Navigation_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Navigation_logsGroupByOutputType[P]>
        }
      >
    >


  export type Navigation_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    environment_id?: boolean
    rerouting_count?: boolean
    start_time?: boolean
    end_time?: boolean
    zoneLogs?: boolean | Navigation_logs$zoneLogsArgs<ExtArgs>
    poiLogs?: boolean | Navigation_logs$poiLogsArgs<ExtArgs>
    _count?: boolean | Navigation_logsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["navigation_logs"]>

  export type Navigation_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    environment_id?: boolean
    rerouting_count?: boolean
    start_time?: boolean
    end_time?: boolean
  }, ExtArgs["result"]["navigation_logs"]>

  export type Navigation_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    environment_id?: boolean
    rerouting_count?: boolean
    start_time?: boolean
    end_time?: boolean
  }, ExtArgs["result"]["navigation_logs"]>

  export type Navigation_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    environment_id?: boolean
    rerouting_count?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type Navigation_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "environment_id" | "rerouting_count" | "start_time" | "end_time", ExtArgs["result"]["navigation_logs"]>
  export type Navigation_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zoneLogs?: boolean | Navigation_logs$zoneLogsArgs<ExtArgs>
    poiLogs?: boolean | Navigation_logs$poiLogsArgs<ExtArgs>
    _count?: boolean | Navigation_logsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Navigation_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Navigation_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Navigation_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Navigation_logs"
    objects: {
      zoneLogs: Prisma.$Zone_logsPayload<ExtArgs>[]
      poiLogs: Prisma.$POI_logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      environment_id: number
      rerouting_count: number
      start_time: Date
      end_time: Date | null
    }, ExtArgs["result"]["navigation_logs"]>
    composites: {}
  }

  type Navigation_logsGetPayload<S extends boolean | null | undefined | Navigation_logsDefaultArgs> = $Result.GetResult<Prisma.$Navigation_logsPayload, S>

  type Navigation_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Navigation_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Navigation_logsCountAggregateInputType | true
    }

  export interface Navigation_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Navigation_logs'], meta: { name: 'Navigation_logs' } }
    /**
     * Find zero or one Navigation_logs that matches the filter.
     * @param {Navigation_logsFindUniqueArgs} args - Arguments to find a Navigation_logs
     * @example
     * // Get one Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Navigation_logsFindUniqueArgs>(args: SelectSubset<T, Navigation_logsFindUniqueArgs<ExtArgs>>): Prisma__Navigation_logsClient<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Navigation_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Navigation_logsFindUniqueOrThrowArgs} args - Arguments to find a Navigation_logs
     * @example
     * // Get one Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Navigation_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, Navigation_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Navigation_logsClient<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Navigation_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Navigation_logsFindFirstArgs} args - Arguments to find a Navigation_logs
     * @example
     * // Get one Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Navigation_logsFindFirstArgs>(args?: SelectSubset<T, Navigation_logsFindFirstArgs<ExtArgs>>): Prisma__Navigation_logsClient<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Navigation_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Navigation_logsFindFirstOrThrowArgs} args - Arguments to find a Navigation_logs
     * @example
     * // Get one Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Navigation_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, Navigation_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Navigation_logsClient<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Navigation_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Navigation_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.findMany()
     * 
     * // Get first 10 Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const navigation_logsWithIdOnly = await prisma.navigation_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Navigation_logsFindManyArgs>(args?: SelectSubset<T, Navigation_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Navigation_logs.
     * @param {Navigation_logsCreateArgs} args - Arguments to create a Navigation_logs.
     * @example
     * // Create one Navigation_logs
     * const Navigation_logs = await prisma.navigation_logs.create({
     *   data: {
     *     // ... data to create a Navigation_logs
     *   }
     * })
     * 
     */
    create<T extends Navigation_logsCreateArgs>(args: SelectSubset<T, Navigation_logsCreateArgs<ExtArgs>>): Prisma__Navigation_logsClient<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Navigation_logs.
     * @param {Navigation_logsCreateManyArgs} args - Arguments to create many Navigation_logs.
     * @example
     * // Create many Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Navigation_logsCreateManyArgs>(args?: SelectSubset<T, Navigation_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Navigation_logs and returns the data saved in the database.
     * @param {Navigation_logsCreateManyAndReturnArgs} args - Arguments to create many Navigation_logs.
     * @example
     * // Create many Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Navigation_logs and only return the `id`
     * const navigation_logsWithIdOnly = await prisma.navigation_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Navigation_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, Navigation_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Navigation_logs.
     * @param {Navigation_logsDeleteArgs} args - Arguments to delete one Navigation_logs.
     * @example
     * // Delete one Navigation_logs
     * const Navigation_logs = await prisma.navigation_logs.delete({
     *   where: {
     *     // ... filter to delete one Navigation_logs
     *   }
     * })
     * 
     */
    delete<T extends Navigation_logsDeleteArgs>(args: SelectSubset<T, Navigation_logsDeleteArgs<ExtArgs>>): Prisma__Navigation_logsClient<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Navigation_logs.
     * @param {Navigation_logsUpdateArgs} args - Arguments to update one Navigation_logs.
     * @example
     * // Update one Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Navigation_logsUpdateArgs>(args: SelectSubset<T, Navigation_logsUpdateArgs<ExtArgs>>): Prisma__Navigation_logsClient<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Navigation_logs.
     * @param {Navigation_logsDeleteManyArgs} args - Arguments to filter Navigation_logs to delete.
     * @example
     * // Delete a few Navigation_logs
     * const { count } = await prisma.navigation_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Navigation_logsDeleteManyArgs>(args?: SelectSubset<T, Navigation_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Navigation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Navigation_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Navigation_logsUpdateManyArgs>(args: SelectSubset<T, Navigation_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Navigation_logs and returns the data updated in the database.
     * @param {Navigation_logsUpdateManyAndReturnArgs} args - Arguments to update many Navigation_logs.
     * @example
     * // Update many Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Navigation_logs and only return the `id`
     * const navigation_logsWithIdOnly = await prisma.navigation_logs.updateManyAndReturn({
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
    updateManyAndReturn<T extends Navigation_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, Navigation_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Navigation_logs.
     * @param {Navigation_logsUpsertArgs} args - Arguments to update or create a Navigation_logs.
     * @example
     * // Update or create a Navigation_logs
     * const navigation_logs = await prisma.navigation_logs.upsert({
     *   create: {
     *     // ... data to create a Navigation_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Navigation_logs we want to update
     *   }
     * })
     */
    upsert<T extends Navigation_logsUpsertArgs>(args: SelectSubset<T, Navigation_logsUpsertArgs<ExtArgs>>): Prisma__Navigation_logsClient<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Navigation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Navigation_logsCountArgs} args - Arguments to filter Navigation_logs to count.
     * @example
     * // Count the number of Navigation_logs
     * const count = await prisma.navigation_logs.count({
     *   where: {
     *     // ... the filter for the Navigation_logs we want to count
     *   }
     * })
    **/
    count<T extends Navigation_logsCountArgs>(
      args?: Subset<T, Navigation_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Navigation_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Navigation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Navigation_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Navigation_logsAggregateArgs>(args: Subset<T, Navigation_logsAggregateArgs>): Prisma.PrismaPromise<GetNavigation_logsAggregateType<T>>

    /**
     * Group by Navigation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Navigation_logsGroupByArgs} args - Group by arguments.
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
      T extends Navigation_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Navigation_logsGroupByArgs['orderBy'] }
        : { orderBy?: Navigation_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Navigation_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavigation_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Navigation_logs model
   */
  readonly fields: Navigation_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Navigation_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Navigation_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zoneLogs<T extends Navigation_logs$zoneLogsArgs<ExtArgs> = {}>(args?: Subset<T, Navigation_logs$zoneLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    poiLogs<T extends Navigation_logs$poiLogsArgs<ExtArgs> = {}>(args?: Subset<T, Navigation_logs$poiLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Navigation_logs model
   */ 
  interface Navigation_logsFieldRefs {
    readonly id: FieldRef<"Navigation_logs", 'Int'>
    readonly user_id: FieldRef<"Navigation_logs", 'Int'>
    readonly environment_id: FieldRef<"Navigation_logs", 'Int'>
    readonly rerouting_count: FieldRef<"Navigation_logs", 'Int'>
    readonly start_time: FieldRef<"Navigation_logs", 'DateTime'>
    readonly end_time: FieldRef<"Navigation_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Navigation_logs findUnique
   */
  export type Navigation_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Navigation_logsInclude<ExtArgs> | null
    /**
     * Filter, which Navigation_logs to fetch.
     */
    where: Navigation_logsWhereUniqueInput
  }

  /**
   * Navigation_logs findUniqueOrThrow
   */
  export type Navigation_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Navigation_logsInclude<ExtArgs> | null
    /**
     * Filter, which Navigation_logs to fetch.
     */
    where: Navigation_logsWhereUniqueInput
  }

  /**
   * Navigation_logs findFirst
   */
  export type Navigation_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Navigation_logsInclude<ExtArgs> | null
    /**
     * Filter, which Navigation_logs to fetch.
     */
    where?: Navigation_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navigation_logs to fetch.
     */
    orderBy?: Navigation_logsOrderByWithRelationInput | Navigation_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Navigation_logs.
     */
    cursor?: Navigation_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navigation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navigation_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Navigation_logs.
     */
    distinct?: Navigation_logsScalarFieldEnum | Navigation_logsScalarFieldEnum[]
  }

  /**
   * Navigation_logs findFirstOrThrow
   */
  export type Navigation_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Navigation_logsInclude<ExtArgs> | null
    /**
     * Filter, which Navigation_logs to fetch.
     */
    where?: Navigation_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navigation_logs to fetch.
     */
    orderBy?: Navigation_logsOrderByWithRelationInput | Navigation_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Navigation_logs.
     */
    cursor?: Navigation_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navigation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navigation_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Navigation_logs.
     */
    distinct?: Navigation_logsScalarFieldEnum | Navigation_logsScalarFieldEnum[]
  }

  /**
   * Navigation_logs findMany
   */
  export type Navigation_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Navigation_logsInclude<ExtArgs> | null
    /**
     * Filter, which Navigation_logs to fetch.
     */
    where?: Navigation_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navigation_logs to fetch.
     */
    orderBy?: Navigation_logsOrderByWithRelationInput | Navigation_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Navigation_logs.
     */
    cursor?: Navigation_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navigation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navigation_logs.
     */
    skip?: number
    distinct?: Navigation_logsScalarFieldEnum | Navigation_logsScalarFieldEnum[]
  }

  /**
   * Navigation_logs create
   */
  export type Navigation_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Navigation_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a Navigation_logs.
     */
    data: XOR<Navigation_logsCreateInput, Navigation_logsUncheckedCreateInput>
  }

  /**
   * Navigation_logs createMany
   */
  export type Navigation_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Navigation_logs.
     */
    data: Navigation_logsCreateManyInput | Navigation_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Navigation_logs createManyAndReturn
   */
  export type Navigation_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * The data used to create many Navigation_logs.
     */
    data: Navigation_logsCreateManyInput | Navigation_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Navigation_logs update
   */
  export type Navigation_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Navigation_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a Navigation_logs.
     */
    data: XOR<Navigation_logsUpdateInput, Navigation_logsUncheckedUpdateInput>
    /**
     * Choose, which Navigation_logs to update.
     */
    where: Navigation_logsWhereUniqueInput
  }

  /**
   * Navigation_logs updateMany
   */
  export type Navigation_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Navigation_logs.
     */
    data: XOR<Navigation_logsUpdateManyMutationInput, Navigation_logsUncheckedUpdateManyInput>
    /**
     * Filter which Navigation_logs to update
     */
    where?: Navigation_logsWhereInput
    /**
     * Limit how many Navigation_logs to update.
     */
    limit?: number
  }

  /**
   * Navigation_logs updateManyAndReturn
   */
  export type Navigation_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * The data used to update Navigation_logs.
     */
    data: XOR<Navigation_logsUpdateManyMutationInput, Navigation_logsUncheckedUpdateManyInput>
    /**
     * Filter which Navigation_logs to update
     */
    where?: Navigation_logsWhereInput
    /**
     * Limit how many Navigation_logs to update.
     */
    limit?: number
  }

  /**
   * Navigation_logs upsert
   */
  export type Navigation_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Navigation_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the Navigation_logs to update in case it exists.
     */
    where: Navigation_logsWhereUniqueInput
    /**
     * In case the Navigation_logs found by the `where` argument doesn't exist, create a new Navigation_logs with this data.
     */
    create: XOR<Navigation_logsCreateInput, Navigation_logsUncheckedCreateInput>
    /**
     * In case the Navigation_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Navigation_logsUpdateInput, Navigation_logsUncheckedUpdateInput>
  }

  /**
   * Navigation_logs delete
   */
  export type Navigation_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Navigation_logsInclude<ExtArgs> | null
    /**
     * Filter which Navigation_logs to delete.
     */
    where: Navigation_logsWhereUniqueInput
  }

  /**
   * Navigation_logs deleteMany
   */
  export type Navigation_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Navigation_logs to delete
     */
    where?: Navigation_logsWhereInput
    /**
     * Limit how many Navigation_logs to delete.
     */
    limit?: number
  }

  /**
   * Navigation_logs.zoneLogs
   */
  export type Navigation_logs$zoneLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
    where?: Zone_logsWhereInput
    orderBy?: Zone_logsOrderByWithRelationInput | Zone_logsOrderByWithRelationInput[]
    cursor?: Zone_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Zone_logsScalarFieldEnum | Zone_logsScalarFieldEnum[]
  }

  /**
   * Navigation_logs.poiLogs
   */
  export type Navigation_logs$poiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
    where?: POI_logsWhereInput
    orderBy?: POI_logsOrderByWithRelationInput | POI_logsOrderByWithRelationInput[]
    cursor?: POI_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: POI_logsScalarFieldEnum | POI_logsScalarFieldEnum[]
  }

  /**
   * Navigation_logs without action
   */
  export type Navigation_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation_logs
     */
    select?: Navigation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation_logs
     */
    omit?: Navigation_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Navigation_logsInclude<ExtArgs> | null
  }


  /**
   * Model Zone_logs
   */

  export type AggregateZone_logs = {
    _count: Zone_logsCountAggregateOutputType | null
    _avg: Zone_logsAvgAggregateOutputType | null
    _sum: Zone_logsSumAggregateOutputType | null
    _min: Zone_logsMinAggregateOutputType | null
    _max: Zone_logsMaxAggregateOutputType | null
  }

  export type Zone_logsAvgAggregateOutputType = {
    id: number | null
    navigation_id: number | null
    zone_id: number | null
    user_id: number | null
    obstacles_encountered: number | null
  }

  export type Zone_logsSumAggregateOutputType = {
    id: number | null
    navigation_id: number | null
    zone_id: number | null
    user_id: number | null
    obstacles_encountered: number | null
  }

  export type Zone_logsMinAggregateOutputType = {
    id: number | null
    navigation_id: number | null
    zone_id: number | null
    user_id: number | null
    start_time: Date | null
    end_time: Date | null
    obstacles_encountered: number | null
  }

  export type Zone_logsMaxAggregateOutputType = {
    id: number | null
    navigation_id: number | null
    zone_id: number | null
    user_id: number | null
    start_time: Date | null
    end_time: Date | null
    obstacles_encountered: number | null
  }

  export type Zone_logsCountAggregateOutputType = {
    id: number
    navigation_id: number
    zone_id: number
    user_id: number
    start_time: number
    end_time: number
    obstacles_encountered: number
    _all: number
  }


  export type Zone_logsAvgAggregateInputType = {
    id?: true
    navigation_id?: true
    zone_id?: true
    user_id?: true
    obstacles_encountered?: true
  }

  export type Zone_logsSumAggregateInputType = {
    id?: true
    navigation_id?: true
    zone_id?: true
    user_id?: true
    obstacles_encountered?: true
  }

  export type Zone_logsMinAggregateInputType = {
    id?: true
    navigation_id?: true
    zone_id?: true
    user_id?: true
    start_time?: true
    end_time?: true
    obstacles_encountered?: true
  }

  export type Zone_logsMaxAggregateInputType = {
    id?: true
    navigation_id?: true
    zone_id?: true
    user_id?: true
    start_time?: true
    end_time?: true
    obstacles_encountered?: true
  }

  export type Zone_logsCountAggregateInputType = {
    id?: true
    navigation_id?: true
    zone_id?: true
    user_id?: true
    start_time?: true
    end_time?: true
    obstacles_encountered?: true
    _all?: true
  }

  export type Zone_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zone_logs to aggregate.
     */
    where?: Zone_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zone_logs to fetch.
     */
    orderBy?: Zone_logsOrderByWithRelationInput | Zone_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Zone_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zone_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zone_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zone_logs
    **/
    _count?: true | Zone_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Zone_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Zone_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Zone_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Zone_logsMaxAggregateInputType
  }

  export type GetZone_logsAggregateType<T extends Zone_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateZone_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZone_logs[P]>
      : GetScalarType<T[P], AggregateZone_logs[P]>
  }




  export type Zone_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Zone_logsWhereInput
    orderBy?: Zone_logsOrderByWithAggregationInput | Zone_logsOrderByWithAggregationInput[]
    by: Zone_logsScalarFieldEnum[] | Zone_logsScalarFieldEnum
    having?: Zone_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Zone_logsCountAggregateInputType | true
    _avg?: Zone_logsAvgAggregateInputType
    _sum?: Zone_logsSumAggregateInputType
    _min?: Zone_logsMinAggregateInputType
    _max?: Zone_logsMaxAggregateInputType
  }

  export type Zone_logsGroupByOutputType = {
    id: number
    navigation_id: number
    zone_id: number
    user_id: number
    start_time: Date
    end_time: Date
    obstacles_encountered: number
    _count: Zone_logsCountAggregateOutputType | null
    _avg: Zone_logsAvgAggregateOutputType | null
    _sum: Zone_logsSumAggregateOutputType | null
    _min: Zone_logsMinAggregateOutputType | null
    _max: Zone_logsMaxAggregateOutputType | null
  }

  type GetZone_logsGroupByPayload<T extends Zone_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Zone_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Zone_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Zone_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Zone_logsGroupByOutputType[P]>
        }
      >
    >


  export type Zone_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    navigation_id?: boolean
    zone_id?: boolean
    user_id?: boolean
    start_time?: boolean
    end_time?: boolean
    obstacles_encountered?: boolean
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone_logs"]>

  export type Zone_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    navigation_id?: boolean
    zone_id?: boolean
    user_id?: boolean
    start_time?: boolean
    end_time?: boolean
    obstacles_encountered?: boolean
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone_logs"]>

  export type Zone_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    navigation_id?: boolean
    zone_id?: boolean
    user_id?: boolean
    start_time?: boolean
    end_time?: boolean
    obstacles_encountered?: boolean
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone_logs"]>

  export type Zone_logsSelectScalar = {
    id?: boolean
    navigation_id?: boolean
    zone_id?: boolean
    user_id?: boolean
    start_time?: boolean
    end_time?: boolean
    obstacles_encountered?: boolean
  }

  export type Zone_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "navigation_id" | "zone_id" | "user_id" | "start_time" | "end_time" | "obstacles_encountered", ExtArgs["result"]["zone_logs"]>
  export type Zone_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }
  export type Zone_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }
  export type Zone_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }

  export type $Zone_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zone_logs"
    objects: {
      navigation: Prisma.$Navigation_logsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      navigation_id: number
      zone_id: number
      user_id: number
      start_time: Date
      end_time: Date
      obstacles_encountered: number
    }, ExtArgs["result"]["zone_logs"]>
    composites: {}
  }

  type Zone_logsGetPayload<S extends boolean | null | undefined | Zone_logsDefaultArgs> = $Result.GetResult<Prisma.$Zone_logsPayload, S>

  type Zone_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Zone_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Zone_logsCountAggregateInputType | true
    }

  export interface Zone_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zone_logs'], meta: { name: 'Zone_logs' } }
    /**
     * Find zero or one Zone_logs that matches the filter.
     * @param {Zone_logsFindUniqueArgs} args - Arguments to find a Zone_logs
     * @example
     * // Get one Zone_logs
     * const zone_logs = await prisma.zone_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Zone_logsFindUniqueArgs>(args: SelectSubset<T, Zone_logsFindUniqueArgs<ExtArgs>>): Prisma__Zone_logsClient<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zone_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Zone_logsFindUniqueOrThrowArgs} args - Arguments to find a Zone_logs
     * @example
     * // Get one Zone_logs
     * const zone_logs = await prisma.zone_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Zone_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, Zone_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Zone_logsClient<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Zone_logsFindFirstArgs} args - Arguments to find a Zone_logs
     * @example
     * // Get one Zone_logs
     * const zone_logs = await prisma.zone_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Zone_logsFindFirstArgs>(args?: SelectSubset<T, Zone_logsFindFirstArgs<ExtArgs>>): Prisma__Zone_logsClient<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Zone_logsFindFirstOrThrowArgs} args - Arguments to find a Zone_logs
     * @example
     * // Get one Zone_logs
     * const zone_logs = await prisma.zone_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Zone_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, Zone_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Zone_logsClient<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zone_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Zone_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zone_logs
     * const zone_logs = await prisma.zone_logs.findMany()
     * 
     * // Get first 10 Zone_logs
     * const zone_logs = await prisma.zone_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zone_logsWithIdOnly = await prisma.zone_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Zone_logsFindManyArgs>(args?: SelectSubset<T, Zone_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zone_logs.
     * @param {Zone_logsCreateArgs} args - Arguments to create a Zone_logs.
     * @example
     * // Create one Zone_logs
     * const Zone_logs = await prisma.zone_logs.create({
     *   data: {
     *     // ... data to create a Zone_logs
     *   }
     * })
     * 
     */
    create<T extends Zone_logsCreateArgs>(args: SelectSubset<T, Zone_logsCreateArgs<ExtArgs>>): Prisma__Zone_logsClient<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zone_logs.
     * @param {Zone_logsCreateManyArgs} args - Arguments to create many Zone_logs.
     * @example
     * // Create many Zone_logs
     * const zone_logs = await prisma.zone_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Zone_logsCreateManyArgs>(args?: SelectSubset<T, Zone_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zone_logs and returns the data saved in the database.
     * @param {Zone_logsCreateManyAndReturnArgs} args - Arguments to create many Zone_logs.
     * @example
     * // Create many Zone_logs
     * const zone_logs = await prisma.zone_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zone_logs and only return the `id`
     * const zone_logsWithIdOnly = await prisma.zone_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Zone_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, Zone_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zone_logs.
     * @param {Zone_logsDeleteArgs} args - Arguments to delete one Zone_logs.
     * @example
     * // Delete one Zone_logs
     * const Zone_logs = await prisma.zone_logs.delete({
     *   where: {
     *     // ... filter to delete one Zone_logs
     *   }
     * })
     * 
     */
    delete<T extends Zone_logsDeleteArgs>(args: SelectSubset<T, Zone_logsDeleteArgs<ExtArgs>>): Prisma__Zone_logsClient<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zone_logs.
     * @param {Zone_logsUpdateArgs} args - Arguments to update one Zone_logs.
     * @example
     * // Update one Zone_logs
     * const zone_logs = await prisma.zone_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Zone_logsUpdateArgs>(args: SelectSubset<T, Zone_logsUpdateArgs<ExtArgs>>): Prisma__Zone_logsClient<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zone_logs.
     * @param {Zone_logsDeleteManyArgs} args - Arguments to filter Zone_logs to delete.
     * @example
     * // Delete a few Zone_logs
     * const { count } = await prisma.zone_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Zone_logsDeleteManyArgs>(args?: SelectSubset<T, Zone_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zone_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Zone_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zone_logs
     * const zone_logs = await prisma.zone_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Zone_logsUpdateManyArgs>(args: SelectSubset<T, Zone_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zone_logs and returns the data updated in the database.
     * @param {Zone_logsUpdateManyAndReturnArgs} args - Arguments to update many Zone_logs.
     * @example
     * // Update many Zone_logs
     * const zone_logs = await prisma.zone_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zone_logs and only return the `id`
     * const zone_logsWithIdOnly = await prisma.zone_logs.updateManyAndReturn({
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
    updateManyAndReturn<T extends Zone_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, Zone_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zone_logs.
     * @param {Zone_logsUpsertArgs} args - Arguments to update or create a Zone_logs.
     * @example
     * // Update or create a Zone_logs
     * const zone_logs = await prisma.zone_logs.upsert({
     *   create: {
     *     // ... data to create a Zone_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zone_logs we want to update
     *   }
     * })
     */
    upsert<T extends Zone_logsUpsertArgs>(args: SelectSubset<T, Zone_logsUpsertArgs<ExtArgs>>): Prisma__Zone_logsClient<$Result.GetResult<Prisma.$Zone_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zone_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Zone_logsCountArgs} args - Arguments to filter Zone_logs to count.
     * @example
     * // Count the number of Zone_logs
     * const count = await prisma.zone_logs.count({
     *   where: {
     *     // ... the filter for the Zone_logs we want to count
     *   }
     * })
    **/
    count<T extends Zone_logsCountArgs>(
      args?: Subset<T, Zone_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Zone_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zone_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Zone_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Zone_logsAggregateArgs>(args: Subset<T, Zone_logsAggregateArgs>): Prisma.PrismaPromise<GetZone_logsAggregateType<T>>

    /**
     * Group by Zone_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Zone_logsGroupByArgs} args - Group by arguments.
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
      T extends Zone_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Zone_logsGroupByArgs['orderBy'] }
        : { orderBy?: Zone_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Zone_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZone_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zone_logs model
   */
  readonly fields: Zone_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zone_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Zone_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    navigation<T extends Navigation_logsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Navigation_logsDefaultArgs<ExtArgs>>): Prisma__Navigation_logsClient<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Zone_logs model
   */ 
  interface Zone_logsFieldRefs {
    readonly id: FieldRef<"Zone_logs", 'Int'>
    readonly navigation_id: FieldRef<"Zone_logs", 'Int'>
    readonly zone_id: FieldRef<"Zone_logs", 'Int'>
    readonly user_id: FieldRef<"Zone_logs", 'Int'>
    readonly start_time: FieldRef<"Zone_logs", 'DateTime'>
    readonly end_time: FieldRef<"Zone_logs", 'DateTime'>
    readonly obstacles_encountered: FieldRef<"Zone_logs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Zone_logs findUnique
   */
  export type Zone_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
    /**
     * Filter, which Zone_logs to fetch.
     */
    where: Zone_logsWhereUniqueInput
  }

  /**
   * Zone_logs findUniqueOrThrow
   */
  export type Zone_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
    /**
     * Filter, which Zone_logs to fetch.
     */
    where: Zone_logsWhereUniqueInput
  }

  /**
   * Zone_logs findFirst
   */
  export type Zone_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
    /**
     * Filter, which Zone_logs to fetch.
     */
    where?: Zone_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zone_logs to fetch.
     */
    orderBy?: Zone_logsOrderByWithRelationInput | Zone_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zone_logs.
     */
    cursor?: Zone_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zone_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zone_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zone_logs.
     */
    distinct?: Zone_logsScalarFieldEnum | Zone_logsScalarFieldEnum[]
  }

  /**
   * Zone_logs findFirstOrThrow
   */
  export type Zone_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
    /**
     * Filter, which Zone_logs to fetch.
     */
    where?: Zone_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zone_logs to fetch.
     */
    orderBy?: Zone_logsOrderByWithRelationInput | Zone_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zone_logs.
     */
    cursor?: Zone_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zone_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zone_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zone_logs.
     */
    distinct?: Zone_logsScalarFieldEnum | Zone_logsScalarFieldEnum[]
  }

  /**
   * Zone_logs findMany
   */
  export type Zone_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
    /**
     * Filter, which Zone_logs to fetch.
     */
    where?: Zone_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zone_logs to fetch.
     */
    orderBy?: Zone_logsOrderByWithRelationInput | Zone_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zone_logs.
     */
    cursor?: Zone_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zone_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zone_logs.
     */
    skip?: number
    distinct?: Zone_logsScalarFieldEnum | Zone_logsScalarFieldEnum[]
  }

  /**
   * Zone_logs create
   */
  export type Zone_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a Zone_logs.
     */
    data: XOR<Zone_logsCreateInput, Zone_logsUncheckedCreateInput>
  }

  /**
   * Zone_logs createMany
   */
  export type Zone_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zone_logs.
     */
    data: Zone_logsCreateManyInput | Zone_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zone_logs createManyAndReturn
   */
  export type Zone_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * The data used to create many Zone_logs.
     */
    data: Zone_logsCreateManyInput | Zone_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zone_logs update
   */
  export type Zone_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a Zone_logs.
     */
    data: XOR<Zone_logsUpdateInput, Zone_logsUncheckedUpdateInput>
    /**
     * Choose, which Zone_logs to update.
     */
    where: Zone_logsWhereUniqueInput
  }

  /**
   * Zone_logs updateMany
   */
  export type Zone_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zone_logs.
     */
    data: XOR<Zone_logsUpdateManyMutationInput, Zone_logsUncheckedUpdateManyInput>
    /**
     * Filter which Zone_logs to update
     */
    where?: Zone_logsWhereInput
    /**
     * Limit how many Zone_logs to update.
     */
    limit?: number
  }

  /**
   * Zone_logs updateManyAndReturn
   */
  export type Zone_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * The data used to update Zone_logs.
     */
    data: XOR<Zone_logsUpdateManyMutationInput, Zone_logsUncheckedUpdateManyInput>
    /**
     * Filter which Zone_logs to update
     */
    where?: Zone_logsWhereInput
    /**
     * Limit how many Zone_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zone_logs upsert
   */
  export type Zone_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the Zone_logs to update in case it exists.
     */
    where: Zone_logsWhereUniqueInput
    /**
     * In case the Zone_logs found by the `where` argument doesn't exist, create a new Zone_logs with this data.
     */
    create: XOR<Zone_logsCreateInput, Zone_logsUncheckedCreateInput>
    /**
     * In case the Zone_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Zone_logsUpdateInput, Zone_logsUncheckedUpdateInput>
  }

  /**
   * Zone_logs delete
   */
  export type Zone_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
    /**
     * Filter which Zone_logs to delete.
     */
    where: Zone_logsWhereUniqueInput
  }

  /**
   * Zone_logs deleteMany
   */
  export type Zone_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zone_logs to delete
     */
    where?: Zone_logsWhereInput
    /**
     * Limit how many Zone_logs to delete.
     */
    limit?: number
  }

  /**
   * Zone_logs without action
   */
  export type Zone_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone_logs
     */
    select?: Zone_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone_logs
     */
    omit?: Zone_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Zone_logsInclude<ExtArgs> | null
  }


  /**
   * Model POI_logs
   */

  export type AggregatePOI_logs = {
    _count: POI_logsCountAggregateOutputType | null
    _avg: POI_logsAvgAggregateOutputType | null
    _sum: POI_logsSumAggregateOutputType | null
    _min: POI_logsMinAggregateOutputType | null
    _max: POI_logsMaxAggregateOutputType | null
  }

  export type POI_logsAvgAggregateOutputType = {
    id: number | null
    navigation_id: number | null
    poi_id: number | null
  }

  export type POI_logsSumAggregateOutputType = {
    id: number | null
    navigation_id: number | null
    poi_id: number | null
  }

  export type POI_logsMinAggregateOutputType = {
    id: number | null
    navigation_id: number | null
    poi_id: number | null
    visit_time: Date | null
  }

  export type POI_logsMaxAggregateOutputType = {
    id: number | null
    navigation_id: number | null
    poi_id: number | null
    visit_time: Date | null
  }

  export type POI_logsCountAggregateOutputType = {
    id: number
    navigation_id: number
    poi_id: number
    visit_time: number
    _all: number
  }


  export type POI_logsAvgAggregateInputType = {
    id?: true
    navigation_id?: true
    poi_id?: true
  }

  export type POI_logsSumAggregateInputType = {
    id?: true
    navigation_id?: true
    poi_id?: true
  }

  export type POI_logsMinAggregateInputType = {
    id?: true
    navigation_id?: true
    poi_id?: true
    visit_time?: true
  }

  export type POI_logsMaxAggregateInputType = {
    id?: true
    navigation_id?: true
    poi_id?: true
    visit_time?: true
  }

  export type POI_logsCountAggregateInputType = {
    id?: true
    navigation_id?: true
    poi_id?: true
    visit_time?: true
    _all?: true
  }

  export type POI_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POI_logs to aggregate.
     */
    where?: POI_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POI_logs to fetch.
     */
    orderBy?: POI_logsOrderByWithRelationInput | POI_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: POI_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POI_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POI_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned POI_logs
    **/
    _count?: true | POI_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: POI_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: POI_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: POI_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: POI_logsMaxAggregateInputType
  }

  export type GetPOI_logsAggregateType<T extends POI_logsAggregateArgs> = {
        [P in keyof T & keyof AggregatePOI_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePOI_logs[P]>
      : GetScalarType<T[P], AggregatePOI_logs[P]>
  }




  export type POI_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POI_logsWhereInput
    orderBy?: POI_logsOrderByWithAggregationInput | POI_logsOrderByWithAggregationInput[]
    by: POI_logsScalarFieldEnum[] | POI_logsScalarFieldEnum
    having?: POI_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: POI_logsCountAggregateInputType | true
    _avg?: POI_logsAvgAggregateInputType
    _sum?: POI_logsSumAggregateInputType
    _min?: POI_logsMinAggregateInputType
    _max?: POI_logsMaxAggregateInputType
  }

  export type POI_logsGroupByOutputType = {
    id: number
    navigation_id: number
    poi_id: number
    visit_time: Date
    _count: POI_logsCountAggregateOutputType | null
    _avg: POI_logsAvgAggregateOutputType | null
    _sum: POI_logsSumAggregateOutputType | null
    _min: POI_logsMinAggregateOutputType | null
    _max: POI_logsMaxAggregateOutputType | null
  }

  type GetPOI_logsGroupByPayload<T extends POI_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<POI_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof POI_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], POI_logsGroupByOutputType[P]>
            : GetScalarType<T[P], POI_logsGroupByOutputType[P]>
        }
      >
    >


  export type POI_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    navigation_id?: boolean
    poi_id?: boolean
    visit_time?: boolean
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOI_logs"]>

  export type POI_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    navigation_id?: boolean
    poi_id?: boolean
    visit_time?: boolean
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOI_logs"]>

  export type POI_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    navigation_id?: boolean
    poi_id?: boolean
    visit_time?: boolean
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOI_logs"]>

  export type POI_logsSelectScalar = {
    id?: boolean
    navigation_id?: boolean
    poi_id?: boolean
    visit_time?: boolean
  }

  export type POI_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "navigation_id" | "poi_id" | "visit_time", ExtArgs["result"]["pOI_logs"]>
  export type POI_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }
  export type POI_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }
  export type POI_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navigation?: boolean | Navigation_logsDefaultArgs<ExtArgs>
  }

  export type $POI_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "POI_logs"
    objects: {
      navigation: Prisma.$Navigation_logsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      navigation_id: number
      poi_id: number
      visit_time: Date
    }, ExtArgs["result"]["pOI_logs"]>
    composites: {}
  }

  type POI_logsGetPayload<S extends boolean | null | undefined | POI_logsDefaultArgs> = $Result.GetResult<Prisma.$POI_logsPayload, S>

  type POI_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<POI_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: POI_logsCountAggregateInputType | true
    }

  export interface POI_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['POI_logs'], meta: { name: 'POI_logs' } }
    /**
     * Find zero or one POI_logs that matches the filter.
     * @param {POI_logsFindUniqueArgs} args - Arguments to find a POI_logs
     * @example
     * // Get one POI_logs
     * const pOI_logs = await prisma.pOI_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends POI_logsFindUniqueArgs>(args: SelectSubset<T, POI_logsFindUniqueArgs<ExtArgs>>): Prisma__POI_logsClient<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one POI_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {POI_logsFindUniqueOrThrowArgs} args - Arguments to find a POI_logs
     * @example
     * // Get one POI_logs
     * const pOI_logs = await prisma.pOI_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends POI_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, POI_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__POI_logsClient<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POI_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POI_logsFindFirstArgs} args - Arguments to find a POI_logs
     * @example
     * // Get one POI_logs
     * const pOI_logs = await prisma.pOI_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends POI_logsFindFirstArgs>(args?: SelectSubset<T, POI_logsFindFirstArgs<ExtArgs>>): Prisma__POI_logsClient<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POI_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POI_logsFindFirstOrThrowArgs} args - Arguments to find a POI_logs
     * @example
     * // Get one POI_logs
     * const pOI_logs = await prisma.pOI_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends POI_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, POI_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__POI_logsClient<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more POI_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POI_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all POI_logs
     * const pOI_logs = await prisma.pOI_logs.findMany()
     * 
     * // Get first 10 POI_logs
     * const pOI_logs = await prisma.pOI_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pOI_logsWithIdOnly = await prisma.pOI_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends POI_logsFindManyArgs>(args?: SelectSubset<T, POI_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a POI_logs.
     * @param {POI_logsCreateArgs} args - Arguments to create a POI_logs.
     * @example
     * // Create one POI_logs
     * const POI_logs = await prisma.pOI_logs.create({
     *   data: {
     *     // ... data to create a POI_logs
     *   }
     * })
     * 
     */
    create<T extends POI_logsCreateArgs>(args: SelectSubset<T, POI_logsCreateArgs<ExtArgs>>): Prisma__POI_logsClient<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many POI_logs.
     * @param {POI_logsCreateManyArgs} args - Arguments to create many POI_logs.
     * @example
     * // Create many POI_logs
     * const pOI_logs = await prisma.pOI_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends POI_logsCreateManyArgs>(args?: SelectSubset<T, POI_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many POI_logs and returns the data saved in the database.
     * @param {POI_logsCreateManyAndReturnArgs} args - Arguments to create many POI_logs.
     * @example
     * // Create many POI_logs
     * const pOI_logs = await prisma.pOI_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many POI_logs and only return the `id`
     * const pOI_logsWithIdOnly = await prisma.pOI_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends POI_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, POI_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a POI_logs.
     * @param {POI_logsDeleteArgs} args - Arguments to delete one POI_logs.
     * @example
     * // Delete one POI_logs
     * const POI_logs = await prisma.pOI_logs.delete({
     *   where: {
     *     // ... filter to delete one POI_logs
     *   }
     * })
     * 
     */
    delete<T extends POI_logsDeleteArgs>(args: SelectSubset<T, POI_logsDeleteArgs<ExtArgs>>): Prisma__POI_logsClient<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one POI_logs.
     * @param {POI_logsUpdateArgs} args - Arguments to update one POI_logs.
     * @example
     * // Update one POI_logs
     * const pOI_logs = await prisma.pOI_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends POI_logsUpdateArgs>(args: SelectSubset<T, POI_logsUpdateArgs<ExtArgs>>): Prisma__POI_logsClient<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more POI_logs.
     * @param {POI_logsDeleteManyArgs} args - Arguments to filter POI_logs to delete.
     * @example
     * // Delete a few POI_logs
     * const { count } = await prisma.pOI_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends POI_logsDeleteManyArgs>(args?: SelectSubset<T, POI_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POI_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POI_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many POI_logs
     * const pOI_logs = await prisma.pOI_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends POI_logsUpdateManyArgs>(args: SelectSubset<T, POI_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POI_logs and returns the data updated in the database.
     * @param {POI_logsUpdateManyAndReturnArgs} args - Arguments to update many POI_logs.
     * @example
     * // Update many POI_logs
     * const pOI_logs = await prisma.pOI_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more POI_logs and only return the `id`
     * const pOI_logsWithIdOnly = await prisma.pOI_logs.updateManyAndReturn({
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
    updateManyAndReturn<T extends POI_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, POI_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one POI_logs.
     * @param {POI_logsUpsertArgs} args - Arguments to update or create a POI_logs.
     * @example
     * // Update or create a POI_logs
     * const pOI_logs = await prisma.pOI_logs.upsert({
     *   create: {
     *     // ... data to create a POI_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the POI_logs we want to update
     *   }
     * })
     */
    upsert<T extends POI_logsUpsertArgs>(args: SelectSubset<T, POI_logsUpsertArgs<ExtArgs>>): Prisma__POI_logsClient<$Result.GetResult<Prisma.$POI_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of POI_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POI_logsCountArgs} args - Arguments to filter POI_logs to count.
     * @example
     * // Count the number of POI_logs
     * const count = await prisma.pOI_logs.count({
     *   where: {
     *     // ... the filter for the POI_logs we want to count
     *   }
     * })
    **/
    count<T extends POI_logsCountArgs>(
      args?: Subset<T, POI_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], POI_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a POI_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POI_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends POI_logsAggregateArgs>(args: Subset<T, POI_logsAggregateArgs>): Prisma.PrismaPromise<GetPOI_logsAggregateType<T>>

    /**
     * Group by POI_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POI_logsGroupByArgs} args - Group by arguments.
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
      T extends POI_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: POI_logsGroupByArgs['orderBy'] }
        : { orderBy?: POI_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, POI_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPOI_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the POI_logs model
   */
  readonly fields: POI_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for POI_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__POI_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    navigation<T extends Navigation_logsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Navigation_logsDefaultArgs<ExtArgs>>): Prisma__Navigation_logsClient<$Result.GetResult<Prisma.$Navigation_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the POI_logs model
   */ 
  interface POI_logsFieldRefs {
    readonly id: FieldRef<"POI_logs", 'Int'>
    readonly navigation_id: FieldRef<"POI_logs", 'Int'>
    readonly poi_id: FieldRef<"POI_logs", 'Int'>
    readonly visit_time: FieldRef<"POI_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * POI_logs findUnique
   */
  export type POI_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
    /**
     * Filter, which POI_logs to fetch.
     */
    where: POI_logsWhereUniqueInput
  }

  /**
   * POI_logs findUniqueOrThrow
   */
  export type POI_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
    /**
     * Filter, which POI_logs to fetch.
     */
    where: POI_logsWhereUniqueInput
  }

  /**
   * POI_logs findFirst
   */
  export type POI_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
    /**
     * Filter, which POI_logs to fetch.
     */
    where?: POI_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POI_logs to fetch.
     */
    orderBy?: POI_logsOrderByWithRelationInput | POI_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POI_logs.
     */
    cursor?: POI_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POI_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POI_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POI_logs.
     */
    distinct?: POI_logsScalarFieldEnum | POI_logsScalarFieldEnum[]
  }

  /**
   * POI_logs findFirstOrThrow
   */
  export type POI_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
    /**
     * Filter, which POI_logs to fetch.
     */
    where?: POI_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POI_logs to fetch.
     */
    orderBy?: POI_logsOrderByWithRelationInput | POI_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POI_logs.
     */
    cursor?: POI_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POI_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POI_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POI_logs.
     */
    distinct?: POI_logsScalarFieldEnum | POI_logsScalarFieldEnum[]
  }

  /**
   * POI_logs findMany
   */
  export type POI_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
    /**
     * Filter, which POI_logs to fetch.
     */
    where?: POI_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POI_logs to fetch.
     */
    orderBy?: POI_logsOrderByWithRelationInput | POI_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing POI_logs.
     */
    cursor?: POI_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POI_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POI_logs.
     */
    skip?: number
    distinct?: POI_logsScalarFieldEnum | POI_logsScalarFieldEnum[]
  }

  /**
   * POI_logs create
   */
  export type POI_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a POI_logs.
     */
    data: XOR<POI_logsCreateInput, POI_logsUncheckedCreateInput>
  }

  /**
   * POI_logs createMany
   */
  export type POI_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many POI_logs.
     */
    data: POI_logsCreateManyInput | POI_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * POI_logs createManyAndReturn
   */
  export type POI_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * The data used to create many POI_logs.
     */
    data: POI_logsCreateManyInput | POI_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * POI_logs update
   */
  export type POI_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a POI_logs.
     */
    data: XOR<POI_logsUpdateInput, POI_logsUncheckedUpdateInput>
    /**
     * Choose, which POI_logs to update.
     */
    where: POI_logsWhereUniqueInput
  }

  /**
   * POI_logs updateMany
   */
  export type POI_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update POI_logs.
     */
    data: XOR<POI_logsUpdateManyMutationInput, POI_logsUncheckedUpdateManyInput>
    /**
     * Filter which POI_logs to update
     */
    where?: POI_logsWhereInput
    /**
     * Limit how many POI_logs to update.
     */
    limit?: number
  }

  /**
   * POI_logs updateManyAndReturn
   */
  export type POI_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * The data used to update POI_logs.
     */
    data: XOR<POI_logsUpdateManyMutationInput, POI_logsUncheckedUpdateManyInput>
    /**
     * Filter which POI_logs to update
     */
    where?: POI_logsWhereInput
    /**
     * Limit how many POI_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * POI_logs upsert
   */
  export type POI_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the POI_logs to update in case it exists.
     */
    where: POI_logsWhereUniqueInput
    /**
     * In case the POI_logs found by the `where` argument doesn't exist, create a new POI_logs with this data.
     */
    create: XOR<POI_logsCreateInput, POI_logsUncheckedCreateInput>
    /**
     * In case the POI_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<POI_logsUpdateInput, POI_logsUncheckedUpdateInput>
  }

  /**
   * POI_logs delete
   */
  export type POI_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
    /**
     * Filter which POI_logs to delete.
     */
    where: POI_logsWhereUniqueInput
  }

  /**
   * POI_logs deleteMany
   */
  export type POI_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POI_logs to delete
     */
    where?: POI_logsWhereInput
    /**
     * Limit how many POI_logs to delete.
     */
    limit?: number
  }

  /**
   * POI_logs without action
   */
  export type POI_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POI_logs
     */
    select?: POI_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POI_logs
     */
    omit?: POI_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POI_logsInclude<ExtArgs> | null
  }


  /**
   * Model DeviceUsageLogs
   */

  export type AggregateDeviceUsageLogs = {
    _count: DeviceUsageLogsCountAggregateOutputType | null
    _avg: DeviceUsageLogsAvgAggregateOutputType | null
    _sum: DeviceUsageLogsSumAggregateOutputType | null
    _min: DeviceUsageLogsMinAggregateOutputType | null
    _max: DeviceUsageLogsMaxAggregateOutputType | null
  }

  export type DeviceUsageLogsAvgAggregateOutputType = {
    id: number | null
    dispositive_id: number | null
    battery_level: number | null
  }

  export type DeviceUsageLogsSumAggregateOutputType = {
    id: number | null
    dispositive_id: number | null
    battery_level: number | null
  }

  export type DeviceUsageLogsMinAggregateOutputType = {
    id: number | null
    dispositive_id: number | null
    timestamp: Date | null
    battery_level: number | null
    connected: boolean | null
  }

  export type DeviceUsageLogsMaxAggregateOutputType = {
    id: number | null
    dispositive_id: number | null
    timestamp: Date | null
    battery_level: number | null
    connected: boolean | null
  }

  export type DeviceUsageLogsCountAggregateOutputType = {
    id: number
    dispositive_id: number
    timestamp: number
    battery_level: number
    connected: number
    _all: number
  }


  export type DeviceUsageLogsAvgAggregateInputType = {
    id?: true
    dispositive_id?: true
    battery_level?: true
  }

  export type DeviceUsageLogsSumAggregateInputType = {
    id?: true
    dispositive_id?: true
    battery_level?: true
  }

  export type DeviceUsageLogsMinAggregateInputType = {
    id?: true
    dispositive_id?: true
    timestamp?: true
    battery_level?: true
    connected?: true
  }

  export type DeviceUsageLogsMaxAggregateInputType = {
    id?: true
    dispositive_id?: true
    timestamp?: true
    battery_level?: true
    connected?: true
  }

  export type DeviceUsageLogsCountAggregateInputType = {
    id?: true
    dispositive_id?: true
    timestamp?: true
    battery_level?: true
    connected?: true
    _all?: true
  }

  export type DeviceUsageLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceUsageLogs to aggregate.
     */
    where?: DeviceUsageLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceUsageLogs to fetch.
     */
    orderBy?: DeviceUsageLogsOrderByWithRelationInput | DeviceUsageLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceUsageLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceUsageLogs
    **/
    _count?: true | DeviceUsageLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceUsageLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceUsageLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceUsageLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceUsageLogsMaxAggregateInputType
  }

  export type GetDeviceUsageLogsAggregateType<T extends DeviceUsageLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceUsageLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceUsageLogs[P]>
      : GetScalarType<T[P], AggregateDeviceUsageLogs[P]>
  }




  export type DeviceUsageLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceUsageLogsWhereInput
    orderBy?: DeviceUsageLogsOrderByWithAggregationInput | DeviceUsageLogsOrderByWithAggregationInput[]
    by: DeviceUsageLogsScalarFieldEnum[] | DeviceUsageLogsScalarFieldEnum
    having?: DeviceUsageLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceUsageLogsCountAggregateInputType | true
    _avg?: DeviceUsageLogsAvgAggregateInputType
    _sum?: DeviceUsageLogsSumAggregateInputType
    _min?: DeviceUsageLogsMinAggregateInputType
    _max?: DeviceUsageLogsMaxAggregateInputType
  }

  export type DeviceUsageLogsGroupByOutputType = {
    id: number
    dispositive_id: number
    timestamp: Date
    battery_level: number
    connected: boolean
    _count: DeviceUsageLogsCountAggregateOutputType | null
    _avg: DeviceUsageLogsAvgAggregateOutputType | null
    _sum: DeviceUsageLogsSumAggregateOutputType | null
    _min: DeviceUsageLogsMinAggregateOutputType | null
    _max: DeviceUsageLogsMaxAggregateOutputType | null
  }

  type GetDeviceUsageLogsGroupByPayload<T extends DeviceUsageLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceUsageLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceUsageLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceUsageLogsGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceUsageLogsGroupByOutputType[P]>
        }
      >
    >


  export type DeviceUsageLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispositive_id?: boolean
    timestamp?: boolean
    battery_level?: boolean
    connected?: boolean
  }, ExtArgs["result"]["deviceUsageLogs"]>

  export type DeviceUsageLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispositive_id?: boolean
    timestamp?: boolean
    battery_level?: boolean
    connected?: boolean
  }, ExtArgs["result"]["deviceUsageLogs"]>

  export type DeviceUsageLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispositive_id?: boolean
    timestamp?: boolean
    battery_level?: boolean
    connected?: boolean
  }, ExtArgs["result"]["deviceUsageLogs"]>

  export type DeviceUsageLogsSelectScalar = {
    id?: boolean
    dispositive_id?: boolean
    timestamp?: boolean
    battery_level?: boolean
    connected?: boolean
  }

  export type DeviceUsageLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dispositive_id" | "timestamp" | "battery_level" | "connected", ExtArgs["result"]["deviceUsageLogs"]>

  export type $DeviceUsageLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceUsageLogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dispositive_id: number
      timestamp: Date
      battery_level: number
      connected: boolean
    }, ExtArgs["result"]["deviceUsageLogs"]>
    composites: {}
  }

  type DeviceUsageLogsGetPayload<S extends boolean | null | undefined | DeviceUsageLogsDefaultArgs> = $Result.GetResult<Prisma.$DeviceUsageLogsPayload, S>

  type DeviceUsageLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceUsageLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceUsageLogsCountAggregateInputType | true
    }

  export interface DeviceUsageLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceUsageLogs'], meta: { name: 'DeviceUsageLogs' } }
    /**
     * Find zero or one DeviceUsageLogs that matches the filter.
     * @param {DeviceUsageLogsFindUniqueArgs} args - Arguments to find a DeviceUsageLogs
     * @example
     * // Get one DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceUsageLogsFindUniqueArgs>(args: SelectSubset<T, DeviceUsageLogsFindUniqueArgs<ExtArgs>>): Prisma__DeviceUsageLogsClient<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceUsageLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceUsageLogsFindUniqueOrThrowArgs} args - Arguments to find a DeviceUsageLogs
     * @example
     * // Get one DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceUsageLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceUsageLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceUsageLogsClient<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceUsageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUsageLogsFindFirstArgs} args - Arguments to find a DeviceUsageLogs
     * @example
     * // Get one DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceUsageLogsFindFirstArgs>(args?: SelectSubset<T, DeviceUsageLogsFindFirstArgs<ExtArgs>>): Prisma__DeviceUsageLogsClient<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceUsageLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUsageLogsFindFirstOrThrowArgs} args - Arguments to find a DeviceUsageLogs
     * @example
     * // Get one DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceUsageLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceUsageLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceUsageLogsClient<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceUsageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUsageLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.findMany()
     * 
     * // Get first 10 DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceUsageLogsWithIdOnly = await prisma.deviceUsageLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceUsageLogsFindManyArgs>(args?: SelectSubset<T, DeviceUsageLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceUsageLogs.
     * @param {DeviceUsageLogsCreateArgs} args - Arguments to create a DeviceUsageLogs.
     * @example
     * // Create one DeviceUsageLogs
     * const DeviceUsageLogs = await prisma.deviceUsageLogs.create({
     *   data: {
     *     // ... data to create a DeviceUsageLogs
     *   }
     * })
     * 
     */
    create<T extends DeviceUsageLogsCreateArgs>(args: SelectSubset<T, DeviceUsageLogsCreateArgs<ExtArgs>>): Prisma__DeviceUsageLogsClient<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceUsageLogs.
     * @param {DeviceUsageLogsCreateManyArgs} args - Arguments to create many DeviceUsageLogs.
     * @example
     * // Create many DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceUsageLogsCreateManyArgs>(args?: SelectSubset<T, DeviceUsageLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceUsageLogs and returns the data saved in the database.
     * @param {DeviceUsageLogsCreateManyAndReturnArgs} args - Arguments to create many DeviceUsageLogs.
     * @example
     * // Create many DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceUsageLogs and only return the `id`
     * const deviceUsageLogsWithIdOnly = await prisma.deviceUsageLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceUsageLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceUsageLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceUsageLogs.
     * @param {DeviceUsageLogsDeleteArgs} args - Arguments to delete one DeviceUsageLogs.
     * @example
     * // Delete one DeviceUsageLogs
     * const DeviceUsageLogs = await prisma.deviceUsageLogs.delete({
     *   where: {
     *     // ... filter to delete one DeviceUsageLogs
     *   }
     * })
     * 
     */
    delete<T extends DeviceUsageLogsDeleteArgs>(args: SelectSubset<T, DeviceUsageLogsDeleteArgs<ExtArgs>>): Prisma__DeviceUsageLogsClient<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceUsageLogs.
     * @param {DeviceUsageLogsUpdateArgs} args - Arguments to update one DeviceUsageLogs.
     * @example
     * // Update one DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUsageLogsUpdateArgs>(args: SelectSubset<T, DeviceUsageLogsUpdateArgs<ExtArgs>>): Prisma__DeviceUsageLogsClient<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceUsageLogs.
     * @param {DeviceUsageLogsDeleteManyArgs} args - Arguments to filter DeviceUsageLogs to delete.
     * @example
     * // Delete a few DeviceUsageLogs
     * const { count } = await prisma.deviceUsageLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceUsageLogsDeleteManyArgs>(args?: SelectSubset<T, DeviceUsageLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUsageLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUsageLogsUpdateManyArgs>(args: SelectSubset<T, DeviceUsageLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceUsageLogs and returns the data updated in the database.
     * @param {DeviceUsageLogsUpdateManyAndReturnArgs} args - Arguments to update many DeviceUsageLogs.
     * @example
     * // Update many DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceUsageLogs and only return the `id`
     * const deviceUsageLogsWithIdOnly = await prisma.deviceUsageLogs.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceUsageLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUsageLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceUsageLogs.
     * @param {DeviceUsageLogsUpsertArgs} args - Arguments to update or create a DeviceUsageLogs.
     * @example
     * // Update or create a DeviceUsageLogs
     * const deviceUsageLogs = await prisma.deviceUsageLogs.upsert({
     *   create: {
     *     // ... data to create a DeviceUsageLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceUsageLogs we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUsageLogsUpsertArgs>(args: SelectSubset<T, DeviceUsageLogsUpsertArgs<ExtArgs>>): Prisma__DeviceUsageLogsClient<$Result.GetResult<Prisma.$DeviceUsageLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUsageLogsCountArgs} args - Arguments to filter DeviceUsageLogs to count.
     * @example
     * // Count the number of DeviceUsageLogs
     * const count = await prisma.deviceUsageLogs.count({
     *   where: {
     *     // ... the filter for the DeviceUsageLogs we want to count
     *   }
     * })
    **/
    count<T extends DeviceUsageLogsCountArgs>(
      args?: Subset<T, DeviceUsageLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceUsageLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUsageLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceUsageLogsAggregateArgs>(args: Subset<T, DeviceUsageLogsAggregateArgs>): Prisma.PrismaPromise<GetDeviceUsageLogsAggregateType<T>>

    /**
     * Group by DeviceUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUsageLogsGroupByArgs} args - Group by arguments.
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
      T extends DeviceUsageLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceUsageLogsGroupByArgs['orderBy'] }
        : { orderBy?: DeviceUsageLogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceUsageLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceUsageLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceUsageLogs model
   */
  readonly fields: DeviceUsageLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceUsageLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceUsageLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the DeviceUsageLogs model
   */ 
  interface DeviceUsageLogsFieldRefs {
    readonly id: FieldRef<"DeviceUsageLogs", 'Int'>
    readonly dispositive_id: FieldRef<"DeviceUsageLogs", 'Int'>
    readonly timestamp: FieldRef<"DeviceUsageLogs", 'DateTime'>
    readonly battery_level: FieldRef<"DeviceUsageLogs", 'Int'>
    readonly connected: FieldRef<"DeviceUsageLogs", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DeviceUsageLogs findUnique
   */
  export type DeviceUsageLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * Filter, which DeviceUsageLogs to fetch.
     */
    where: DeviceUsageLogsWhereUniqueInput
  }

  /**
   * DeviceUsageLogs findUniqueOrThrow
   */
  export type DeviceUsageLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * Filter, which DeviceUsageLogs to fetch.
     */
    where: DeviceUsageLogsWhereUniqueInput
  }

  /**
   * DeviceUsageLogs findFirst
   */
  export type DeviceUsageLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * Filter, which DeviceUsageLogs to fetch.
     */
    where?: DeviceUsageLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceUsageLogs to fetch.
     */
    orderBy?: DeviceUsageLogsOrderByWithRelationInput | DeviceUsageLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceUsageLogs.
     */
    cursor?: DeviceUsageLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceUsageLogs.
     */
    distinct?: DeviceUsageLogsScalarFieldEnum | DeviceUsageLogsScalarFieldEnum[]
  }

  /**
   * DeviceUsageLogs findFirstOrThrow
   */
  export type DeviceUsageLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * Filter, which DeviceUsageLogs to fetch.
     */
    where?: DeviceUsageLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceUsageLogs to fetch.
     */
    orderBy?: DeviceUsageLogsOrderByWithRelationInput | DeviceUsageLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceUsageLogs.
     */
    cursor?: DeviceUsageLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceUsageLogs.
     */
    distinct?: DeviceUsageLogsScalarFieldEnum | DeviceUsageLogsScalarFieldEnum[]
  }

  /**
   * DeviceUsageLogs findMany
   */
  export type DeviceUsageLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * Filter, which DeviceUsageLogs to fetch.
     */
    where?: DeviceUsageLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceUsageLogs to fetch.
     */
    orderBy?: DeviceUsageLogsOrderByWithRelationInput | DeviceUsageLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceUsageLogs.
     */
    cursor?: DeviceUsageLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceUsageLogs.
     */
    skip?: number
    distinct?: DeviceUsageLogsScalarFieldEnum | DeviceUsageLogsScalarFieldEnum[]
  }

  /**
   * DeviceUsageLogs create
   */
  export type DeviceUsageLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * The data needed to create a DeviceUsageLogs.
     */
    data: XOR<DeviceUsageLogsCreateInput, DeviceUsageLogsUncheckedCreateInput>
  }

  /**
   * DeviceUsageLogs createMany
   */
  export type DeviceUsageLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceUsageLogs.
     */
    data: DeviceUsageLogsCreateManyInput | DeviceUsageLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceUsageLogs createManyAndReturn
   */
  export type DeviceUsageLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceUsageLogs.
     */
    data: DeviceUsageLogsCreateManyInput | DeviceUsageLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceUsageLogs update
   */
  export type DeviceUsageLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * The data needed to update a DeviceUsageLogs.
     */
    data: XOR<DeviceUsageLogsUpdateInput, DeviceUsageLogsUncheckedUpdateInput>
    /**
     * Choose, which DeviceUsageLogs to update.
     */
    where: DeviceUsageLogsWhereUniqueInput
  }

  /**
   * DeviceUsageLogs updateMany
   */
  export type DeviceUsageLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceUsageLogs.
     */
    data: XOR<DeviceUsageLogsUpdateManyMutationInput, DeviceUsageLogsUncheckedUpdateManyInput>
    /**
     * Filter which DeviceUsageLogs to update
     */
    where?: DeviceUsageLogsWhereInput
    /**
     * Limit how many DeviceUsageLogs to update.
     */
    limit?: number
  }

  /**
   * DeviceUsageLogs updateManyAndReturn
   */
  export type DeviceUsageLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * The data used to update DeviceUsageLogs.
     */
    data: XOR<DeviceUsageLogsUpdateManyMutationInput, DeviceUsageLogsUncheckedUpdateManyInput>
    /**
     * Filter which DeviceUsageLogs to update
     */
    where?: DeviceUsageLogsWhereInput
    /**
     * Limit how many DeviceUsageLogs to update.
     */
    limit?: number
  }

  /**
   * DeviceUsageLogs upsert
   */
  export type DeviceUsageLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * The filter to search for the DeviceUsageLogs to update in case it exists.
     */
    where: DeviceUsageLogsWhereUniqueInput
    /**
     * In case the DeviceUsageLogs found by the `where` argument doesn't exist, create a new DeviceUsageLogs with this data.
     */
    create: XOR<DeviceUsageLogsCreateInput, DeviceUsageLogsUncheckedCreateInput>
    /**
     * In case the DeviceUsageLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUsageLogsUpdateInput, DeviceUsageLogsUncheckedUpdateInput>
  }

  /**
   * DeviceUsageLogs delete
   */
  export type DeviceUsageLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
    /**
     * Filter which DeviceUsageLogs to delete.
     */
    where: DeviceUsageLogsWhereUniqueInput
  }

  /**
   * DeviceUsageLogs deleteMany
   */
  export type DeviceUsageLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceUsageLogs to delete
     */
    where?: DeviceUsageLogsWhereInput
    /**
     * Limit how many DeviceUsageLogs to delete.
     */
    limit?: number
  }

  /**
   * DeviceUsageLogs without action
   */
  export type DeviceUsageLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceUsageLogs
     */
    select?: DeviceUsageLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceUsageLogs
     */
    omit?: DeviceUsageLogsOmit<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    user_id: number
    rating: number
    comment: number
    created_at: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    user_id?: true
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    user_id?: true
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    user_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    user_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    user_id?: true
    rating?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    user_id: number
    rating: number
    comment: string | null
    created_at: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "rating" | "comment" | "created_at", ExtArgs["result"]["feedback"]>

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      rating: number
      comment: string | null
      created_at: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Feedback model
   */ 
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly user_id: FieldRef<"Feedback", 'Int'>
    readonly rating: FieldRef<"Feedback", 'Int'>
    readonly comment: FieldRef<"Feedback", 'String'>
    readonly created_at: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
  }


  /**
   * Model UserSessions
   */

  export type AggregateUserSessions = {
    _count: UserSessionsCountAggregateOutputType | null
    _avg: UserSessionsAvgAggregateOutputType | null
    _sum: UserSessionsSumAggregateOutputType | null
    _min: UserSessionsMinAggregateOutputType | null
    _max: UserSessionsMaxAggregateOutputType | null
  }

  export type UserSessionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    device_id: number | null
  }

  export type UserSessionsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    device_id: number | null
  }

  export type UserSessionsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    session_start: Date | null
    session_end: Date | null
    device_id: number | null
    ip_address: string | null
  }

  export type UserSessionsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    session_start: Date | null
    session_end: Date | null
    device_id: number | null
    ip_address: string | null
  }

  export type UserSessionsCountAggregateOutputType = {
    id: number
    user_id: number
    session_start: number
    session_end: number
    device_id: number
    ip_address: number
    _all: number
  }


  export type UserSessionsAvgAggregateInputType = {
    id?: true
    user_id?: true
    device_id?: true
  }

  export type UserSessionsSumAggregateInputType = {
    id?: true
    user_id?: true
    device_id?: true
  }

  export type UserSessionsMinAggregateInputType = {
    id?: true
    user_id?: true
    session_start?: true
    session_end?: true
    device_id?: true
    ip_address?: true
  }

  export type UserSessionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    session_start?: true
    session_end?: true
    device_id?: true
    ip_address?: true
  }

  export type UserSessionsCountAggregateInputType = {
    id?: true
    user_id?: true
    session_start?: true
    session_end?: true
    device_id?: true
    ip_address?: true
    _all?: true
  }

  export type UserSessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to aggregate.
     */
    where?: UserSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionsOrderByWithRelationInput | UserSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionsMaxAggregateInputType
  }

  export type GetUserSessionsAggregateType<T extends UserSessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSessions[P]>
      : GetScalarType<T[P], AggregateUserSessions[P]>
  }




  export type UserSessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionsWhereInput
    orderBy?: UserSessionsOrderByWithAggregationInput | UserSessionsOrderByWithAggregationInput[]
    by: UserSessionsScalarFieldEnum[] | UserSessionsScalarFieldEnum
    having?: UserSessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionsCountAggregateInputType | true
    _avg?: UserSessionsAvgAggregateInputType
    _sum?: UserSessionsSumAggregateInputType
    _min?: UserSessionsMinAggregateInputType
    _max?: UserSessionsMaxAggregateInputType
  }

  export type UserSessionsGroupByOutputType = {
    id: number
    user_id: number
    session_start: Date
    session_end: Date | null
    device_id: number | null
    ip_address: string | null
    _count: UserSessionsCountAggregateOutputType | null
    _avg: UserSessionsAvgAggregateOutputType | null
    _sum: UserSessionsSumAggregateOutputType | null
    _min: UserSessionsMinAggregateOutputType | null
    _max: UserSessionsMaxAggregateOutputType | null
  }

  type GetUserSessionsGroupByPayload<T extends UserSessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionsGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    session_start?: boolean
    session_end?: boolean
    device_id?: boolean
    ip_address?: boolean
  }, ExtArgs["result"]["userSessions"]>

  export type UserSessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    session_start?: boolean
    session_end?: boolean
    device_id?: boolean
    ip_address?: boolean
  }, ExtArgs["result"]["userSessions"]>

  export type UserSessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    session_start?: boolean
    session_end?: boolean
    device_id?: boolean
    ip_address?: boolean
  }, ExtArgs["result"]["userSessions"]>

  export type UserSessionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    session_start?: boolean
    session_end?: boolean
    device_id?: boolean
    ip_address?: boolean
  }

  export type UserSessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "session_start" | "session_end" | "device_id" | "ip_address", ExtArgs["result"]["userSessions"]>

  export type $UserSessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      session_start: Date
      session_end: Date | null
      device_id: number | null
      ip_address: string | null
    }, ExtArgs["result"]["userSessions"]>
    composites: {}
  }

  type UserSessionsGetPayload<S extends boolean | null | undefined | UserSessionsDefaultArgs> = $Result.GetResult<Prisma.$UserSessionsPayload, S>

  type UserSessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionsCountAggregateInputType | true
    }

  export interface UserSessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSessions'], meta: { name: 'UserSessions' } }
    /**
     * Find zero or one UserSessions that matches the filter.
     * @param {UserSessionsFindUniqueArgs} args - Arguments to find a UserSessions
     * @example
     * // Get one UserSessions
     * const userSessions = await prisma.userSessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionsFindUniqueArgs>(args: SelectSubset<T, UserSessionsFindUniqueArgs<ExtArgs>>): Prisma__UserSessionsClient<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionsFindUniqueOrThrowArgs} args - Arguments to find a UserSessions
     * @example
     * // Get one UserSessions
     * const userSessions = await prisma.userSessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionsClient<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionsFindFirstArgs} args - Arguments to find a UserSessions
     * @example
     * // Get one UserSessions
     * const userSessions = await prisma.userSessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionsFindFirstArgs>(args?: SelectSubset<T, UserSessionsFindFirstArgs<ExtArgs>>): Prisma__UserSessionsClient<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionsFindFirstOrThrowArgs} args - Arguments to find a UserSessions
     * @example
     * // Get one UserSessions
     * const userSessions = await prisma.userSessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionsClient<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSessions.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionsWithIdOnly = await prisma.userSessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionsFindManyArgs>(args?: SelectSubset<T, UserSessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSessions.
     * @param {UserSessionsCreateArgs} args - Arguments to create a UserSessions.
     * @example
     * // Create one UserSessions
     * const UserSessions = await prisma.userSessions.create({
     *   data: {
     *     // ... data to create a UserSessions
     *   }
     * })
     * 
     */
    create<T extends UserSessionsCreateArgs>(args: SelectSubset<T, UserSessionsCreateArgs<ExtArgs>>): Prisma__UserSessionsClient<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSessions.
     * @param {UserSessionsCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSessions = await prisma.userSessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionsCreateManyArgs>(args?: SelectSubset<T, UserSessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessions and returns the data saved in the database.
     * @param {UserSessionsCreateManyAndReturnArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSessions = await prisma.userSessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessions and only return the `id`
     * const userSessionsWithIdOnly = await prisma.userSessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSessions.
     * @param {UserSessionsDeleteArgs} args - Arguments to delete one UserSessions.
     * @example
     * // Delete one UserSessions
     * const UserSessions = await prisma.userSessions.delete({
     *   where: {
     *     // ... filter to delete one UserSessions
     *   }
     * })
     * 
     */
    delete<T extends UserSessionsDeleteArgs>(args: SelectSubset<T, UserSessionsDeleteArgs<ExtArgs>>): Prisma__UserSessionsClient<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSessions.
     * @param {UserSessionsUpdateArgs} args - Arguments to update one UserSessions.
     * @example
     * // Update one UserSessions
     * const userSessions = await prisma.userSessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionsUpdateArgs>(args: SelectSubset<T, UserSessionsUpdateArgs<ExtArgs>>): Prisma__UserSessionsClient<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionsDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionsDeleteManyArgs>(args?: SelectSubset<T, UserSessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSessions = await prisma.userSessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionsUpdateManyArgs>(args: SelectSubset<T, UserSessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions and returns the data updated in the database.
     * @param {UserSessionsUpdateManyAndReturnArgs} args - Arguments to update many UserSessions.
     * @example
     * // Update many UserSessions
     * const userSessions = await prisma.userSessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSessions and only return the `id`
     * const userSessionsWithIdOnly = await prisma.userSessions.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSessions.
     * @param {UserSessionsUpsertArgs} args - Arguments to update or create a UserSessions.
     * @example
     * // Update or create a UserSessions
     * const userSessions = await prisma.userSessions.upsert({
     *   create: {
     *     // ... data to create a UserSessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSessions we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionsUpsertArgs>(args: SelectSubset<T, UserSessionsUpsertArgs<ExtArgs>>): Prisma__UserSessionsClient<$Result.GetResult<Prisma.$UserSessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionsCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSessions.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionsCountArgs>(
      args?: Subset<T, UserSessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSessionsAggregateArgs>(args: Subset<T, UserSessionsAggregateArgs>): Prisma.PrismaPromise<GetUserSessionsAggregateType<T>>

    /**
     * Group by UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionsGroupByArgs} args - Group by arguments.
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
      T extends UserSessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionsGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSessions model
   */
  readonly fields: UserSessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserSessions model
   */ 
  interface UserSessionsFieldRefs {
    readonly id: FieldRef<"UserSessions", 'Int'>
    readonly user_id: FieldRef<"UserSessions", 'Int'>
    readonly session_start: FieldRef<"UserSessions", 'DateTime'>
    readonly session_end: FieldRef<"UserSessions", 'DateTime'>
    readonly device_id: FieldRef<"UserSessions", 'Int'>
    readonly ip_address: FieldRef<"UserSessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserSessions findUnique
   */
  export type UserSessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where: UserSessionsWhereUniqueInput
  }

  /**
   * UserSessions findUniqueOrThrow
   */
  export type UserSessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where: UserSessionsWhereUniqueInput
  }

  /**
   * UserSessions findFirst
   */
  export type UserSessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionsOrderByWithRelationInput | UserSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionsScalarFieldEnum | UserSessionsScalarFieldEnum[]
  }

  /**
   * UserSessions findFirstOrThrow
   */
  export type UserSessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionsOrderByWithRelationInput | UserSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionsScalarFieldEnum | UserSessionsScalarFieldEnum[]
  }

  /**
   * UserSessions findMany
   */
  export type UserSessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionsOrderByWithRelationInput | UserSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    distinct?: UserSessionsScalarFieldEnum | UserSessionsScalarFieldEnum[]
  }

  /**
   * UserSessions create
   */
  export type UserSessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a UserSessions.
     */
    data: XOR<UserSessionsCreateInput, UserSessionsUncheckedCreateInput>
  }

  /**
   * UserSessions createMany
   */
  export type UserSessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionsCreateManyInput | UserSessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSessions createManyAndReturn
   */
  export type UserSessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionsCreateManyInput | UserSessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSessions update
   */
  export type UserSessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a UserSessions.
     */
    data: XOR<UserSessionsUpdateInput, UserSessionsUncheckedUpdateInput>
    /**
     * Choose, which UserSessions to update.
     */
    where: UserSessionsWhereUniqueInput
  }

  /**
   * UserSessions updateMany
   */
  export type UserSessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionsUpdateManyMutationInput, UserSessionsUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionsWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSessions updateManyAndReturn
   */
  export type UserSessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionsUpdateManyMutationInput, UserSessionsUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionsWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSessions upsert
   */
  export type UserSessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the UserSessions to update in case it exists.
     */
    where: UserSessionsWhereUniqueInput
    /**
     * In case the UserSessions found by the `where` argument doesn't exist, create a new UserSessions with this data.
     */
    create: XOR<UserSessionsCreateInput, UserSessionsUncheckedCreateInput>
    /**
     * In case the UserSessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionsUpdateInput, UserSessionsUncheckedUpdateInput>
  }

  /**
   * UserSessions delete
   */
  export type UserSessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
    /**
     * Filter which UserSessions to delete.
     */
    where: UserSessionsWhereUniqueInput
  }

  /**
   * UserSessions deleteMany
   */
  export type UserSessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionsWhereInput
    /**
     * Limit how many UserSessions to delete.
     */
    limit?: number
  }

  /**
   * UserSessions without action
   */
  export type UserSessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessions
     */
    select?: UserSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessions
     */
    omit?: UserSessionsOmit<ExtArgs> | null
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


  export const Navigation_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    environment_id: 'environment_id',
    rerouting_count: 'rerouting_count',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type Navigation_logsScalarFieldEnum = (typeof Navigation_logsScalarFieldEnum)[keyof typeof Navigation_logsScalarFieldEnum]


  export const Zone_logsScalarFieldEnum: {
    id: 'id',
    navigation_id: 'navigation_id',
    zone_id: 'zone_id',
    user_id: 'user_id',
    start_time: 'start_time',
    end_time: 'end_time',
    obstacles_encountered: 'obstacles_encountered'
  };

  export type Zone_logsScalarFieldEnum = (typeof Zone_logsScalarFieldEnum)[keyof typeof Zone_logsScalarFieldEnum]


  export const POI_logsScalarFieldEnum: {
    id: 'id',
    navigation_id: 'navigation_id',
    poi_id: 'poi_id',
    visit_time: 'visit_time'
  };

  export type POI_logsScalarFieldEnum = (typeof POI_logsScalarFieldEnum)[keyof typeof POI_logsScalarFieldEnum]


  export const DeviceUsageLogsScalarFieldEnum: {
    id: 'id',
    dispositive_id: 'dispositive_id',
    timestamp: 'timestamp',
    battery_level: 'battery_level',
    connected: 'connected'
  };

  export type DeviceUsageLogsScalarFieldEnum = (typeof DeviceUsageLogsScalarFieldEnum)[keyof typeof DeviceUsageLogsScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const UserSessionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    session_start: 'session_start',
    session_end: 'session_end',
    device_id: 'device_id',
    ip_address: 'ip_address'
  };

  export type UserSessionsScalarFieldEnum = (typeof UserSessionsScalarFieldEnum)[keyof typeof UserSessionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type Navigation_logsWhereInput = {
    AND?: Navigation_logsWhereInput | Navigation_logsWhereInput[]
    OR?: Navigation_logsWhereInput[]
    NOT?: Navigation_logsWhereInput | Navigation_logsWhereInput[]
    id?: IntFilter<"Navigation_logs"> | number
    user_id?: IntFilter<"Navigation_logs"> | number
    environment_id?: IntFilter<"Navigation_logs"> | number
    rerouting_count?: IntFilter<"Navigation_logs"> | number
    start_time?: DateTimeFilter<"Navigation_logs"> | Date | string
    end_time?: DateTimeNullableFilter<"Navigation_logs"> | Date | string | null
    zoneLogs?: Zone_logsListRelationFilter
    poiLogs?: POI_logsListRelationFilter
  }

  export type Navigation_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    environment_id?: SortOrder
    rerouting_count?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    zoneLogs?: Zone_logsOrderByRelationAggregateInput
    poiLogs?: POI_logsOrderByRelationAggregateInput
  }

  export type Navigation_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Navigation_logsWhereInput | Navigation_logsWhereInput[]
    OR?: Navigation_logsWhereInput[]
    NOT?: Navigation_logsWhereInput | Navigation_logsWhereInput[]
    user_id?: IntFilter<"Navigation_logs"> | number
    environment_id?: IntFilter<"Navigation_logs"> | number
    rerouting_count?: IntFilter<"Navigation_logs"> | number
    start_time?: DateTimeFilter<"Navigation_logs"> | Date | string
    end_time?: DateTimeNullableFilter<"Navigation_logs"> | Date | string | null
    zoneLogs?: Zone_logsListRelationFilter
    poiLogs?: POI_logsListRelationFilter
  }, "id">

  export type Navigation_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    environment_id?: SortOrder
    rerouting_count?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    _count?: Navigation_logsCountOrderByAggregateInput
    _avg?: Navigation_logsAvgOrderByAggregateInput
    _max?: Navigation_logsMaxOrderByAggregateInput
    _min?: Navigation_logsMinOrderByAggregateInput
    _sum?: Navigation_logsSumOrderByAggregateInput
  }

  export type Navigation_logsScalarWhereWithAggregatesInput = {
    AND?: Navigation_logsScalarWhereWithAggregatesInput | Navigation_logsScalarWhereWithAggregatesInput[]
    OR?: Navigation_logsScalarWhereWithAggregatesInput[]
    NOT?: Navigation_logsScalarWhereWithAggregatesInput | Navigation_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Navigation_logs"> | number
    user_id?: IntWithAggregatesFilter<"Navigation_logs"> | number
    environment_id?: IntWithAggregatesFilter<"Navigation_logs"> | number
    rerouting_count?: IntWithAggregatesFilter<"Navigation_logs"> | number
    start_time?: DateTimeWithAggregatesFilter<"Navigation_logs"> | Date | string
    end_time?: DateTimeNullableWithAggregatesFilter<"Navigation_logs"> | Date | string | null
  }

  export type Zone_logsWhereInput = {
    AND?: Zone_logsWhereInput | Zone_logsWhereInput[]
    OR?: Zone_logsWhereInput[]
    NOT?: Zone_logsWhereInput | Zone_logsWhereInput[]
    id?: IntFilter<"Zone_logs"> | number
    navigation_id?: IntFilter<"Zone_logs"> | number
    zone_id?: IntFilter<"Zone_logs"> | number
    user_id?: IntFilter<"Zone_logs"> | number
    start_time?: DateTimeFilter<"Zone_logs"> | Date | string
    end_time?: DateTimeFilter<"Zone_logs"> | Date | string
    obstacles_encountered?: IntFilter<"Zone_logs"> | number
    navigation?: XOR<Navigation_logsScalarRelationFilter, Navigation_logsWhereInput>
  }

  export type Zone_logsOrderByWithRelationInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    zone_id?: SortOrder
    user_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    obstacles_encountered?: SortOrder
    navigation?: Navigation_logsOrderByWithRelationInput
  }

  export type Zone_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Zone_logsWhereInput | Zone_logsWhereInput[]
    OR?: Zone_logsWhereInput[]
    NOT?: Zone_logsWhereInput | Zone_logsWhereInput[]
    navigation_id?: IntFilter<"Zone_logs"> | number
    zone_id?: IntFilter<"Zone_logs"> | number
    user_id?: IntFilter<"Zone_logs"> | number
    start_time?: DateTimeFilter<"Zone_logs"> | Date | string
    end_time?: DateTimeFilter<"Zone_logs"> | Date | string
    obstacles_encountered?: IntFilter<"Zone_logs"> | number
    navigation?: XOR<Navigation_logsScalarRelationFilter, Navigation_logsWhereInput>
  }, "id">

  export type Zone_logsOrderByWithAggregationInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    zone_id?: SortOrder
    user_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    obstacles_encountered?: SortOrder
    _count?: Zone_logsCountOrderByAggregateInput
    _avg?: Zone_logsAvgOrderByAggregateInput
    _max?: Zone_logsMaxOrderByAggregateInput
    _min?: Zone_logsMinOrderByAggregateInput
    _sum?: Zone_logsSumOrderByAggregateInput
  }

  export type Zone_logsScalarWhereWithAggregatesInput = {
    AND?: Zone_logsScalarWhereWithAggregatesInput | Zone_logsScalarWhereWithAggregatesInput[]
    OR?: Zone_logsScalarWhereWithAggregatesInput[]
    NOT?: Zone_logsScalarWhereWithAggregatesInput | Zone_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Zone_logs"> | number
    navigation_id?: IntWithAggregatesFilter<"Zone_logs"> | number
    zone_id?: IntWithAggregatesFilter<"Zone_logs"> | number
    user_id?: IntWithAggregatesFilter<"Zone_logs"> | number
    start_time?: DateTimeWithAggregatesFilter<"Zone_logs"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Zone_logs"> | Date | string
    obstacles_encountered?: IntWithAggregatesFilter<"Zone_logs"> | number
  }

  export type POI_logsWhereInput = {
    AND?: POI_logsWhereInput | POI_logsWhereInput[]
    OR?: POI_logsWhereInput[]
    NOT?: POI_logsWhereInput | POI_logsWhereInput[]
    id?: IntFilter<"POI_logs"> | number
    navigation_id?: IntFilter<"POI_logs"> | number
    poi_id?: IntFilter<"POI_logs"> | number
    visit_time?: DateTimeFilter<"POI_logs"> | Date | string
    navigation?: XOR<Navigation_logsScalarRelationFilter, Navigation_logsWhereInput>
  }

  export type POI_logsOrderByWithRelationInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    poi_id?: SortOrder
    visit_time?: SortOrder
    navigation?: Navigation_logsOrderByWithRelationInput
  }

  export type POI_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: POI_logsWhereInput | POI_logsWhereInput[]
    OR?: POI_logsWhereInput[]
    NOT?: POI_logsWhereInput | POI_logsWhereInput[]
    navigation_id?: IntFilter<"POI_logs"> | number
    poi_id?: IntFilter<"POI_logs"> | number
    visit_time?: DateTimeFilter<"POI_logs"> | Date | string
    navigation?: XOR<Navigation_logsScalarRelationFilter, Navigation_logsWhereInput>
  }, "id">

  export type POI_logsOrderByWithAggregationInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    poi_id?: SortOrder
    visit_time?: SortOrder
    _count?: POI_logsCountOrderByAggregateInput
    _avg?: POI_logsAvgOrderByAggregateInput
    _max?: POI_logsMaxOrderByAggregateInput
    _min?: POI_logsMinOrderByAggregateInput
    _sum?: POI_logsSumOrderByAggregateInput
  }

  export type POI_logsScalarWhereWithAggregatesInput = {
    AND?: POI_logsScalarWhereWithAggregatesInput | POI_logsScalarWhereWithAggregatesInput[]
    OR?: POI_logsScalarWhereWithAggregatesInput[]
    NOT?: POI_logsScalarWhereWithAggregatesInput | POI_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"POI_logs"> | number
    navigation_id?: IntWithAggregatesFilter<"POI_logs"> | number
    poi_id?: IntWithAggregatesFilter<"POI_logs"> | number
    visit_time?: DateTimeWithAggregatesFilter<"POI_logs"> | Date | string
  }

  export type DeviceUsageLogsWhereInput = {
    AND?: DeviceUsageLogsWhereInput | DeviceUsageLogsWhereInput[]
    OR?: DeviceUsageLogsWhereInput[]
    NOT?: DeviceUsageLogsWhereInput | DeviceUsageLogsWhereInput[]
    id?: IntFilter<"DeviceUsageLogs"> | number
    dispositive_id?: IntFilter<"DeviceUsageLogs"> | number
    timestamp?: DateTimeFilter<"DeviceUsageLogs"> | Date | string
    battery_level?: IntFilter<"DeviceUsageLogs"> | number
    connected?: BoolFilter<"DeviceUsageLogs"> | boolean
  }

  export type DeviceUsageLogsOrderByWithRelationInput = {
    id?: SortOrder
    dispositive_id?: SortOrder
    timestamp?: SortOrder
    battery_level?: SortOrder
    connected?: SortOrder
  }

  export type DeviceUsageLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeviceUsageLogsWhereInput | DeviceUsageLogsWhereInput[]
    OR?: DeviceUsageLogsWhereInput[]
    NOT?: DeviceUsageLogsWhereInput | DeviceUsageLogsWhereInput[]
    dispositive_id?: IntFilter<"DeviceUsageLogs"> | number
    timestamp?: DateTimeFilter<"DeviceUsageLogs"> | Date | string
    battery_level?: IntFilter<"DeviceUsageLogs"> | number
    connected?: BoolFilter<"DeviceUsageLogs"> | boolean
  }, "id">

  export type DeviceUsageLogsOrderByWithAggregationInput = {
    id?: SortOrder
    dispositive_id?: SortOrder
    timestamp?: SortOrder
    battery_level?: SortOrder
    connected?: SortOrder
    _count?: DeviceUsageLogsCountOrderByAggregateInput
    _avg?: DeviceUsageLogsAvgOrderByAggregateInput
    _max?: DeviceUsageLogsMaxOrderByAggregateInput
    _min?: DeviceUsageLogsMinOrderByAggregateInput
    _sum?: DeviceUsageLogsSumOrderByAggregateInput
  }

  export type DeviceUsageLogsScalarWhereWithAggregatesInput = {
    AND?: DeviceUsageLogsScalarWhereWithAggregatesInput | DeviceUsageLogsScalarWhereWithAggregatesInput[]
    OR?: DeviceUsageLogsScalarWhereWithAggregatesInput[]
    NOT?: DeviceUsageLogsScalarWhereWithAggregatesInput | DeviceUsageLogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeviceUsageLogs"> | number
    dispositive_id?: IntWithAggregatesFilter<"DeviceUsageLogs"> | number
    timestamp?: DateTimeWithAggregatesFilter<"DeviceUsageLogs"> | Date | string
    battery_level?: IntWithAggregatesFilter<"DeviceUsageLogs"> | number
    connected?: BoolWithAggregatesFilter<"DeviceUsageLogs"> | boolean
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    user_id?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comment?: StringNullableFilter<"Feedback"> | string | null
    created_at?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    user_id?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comment?: StringNullableFilter<"Feedback"> | string | null
    created_at?: DateTimeFilter<"Feedback"> | Date | string
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    user_id?: IntWithAggregatesFilter<"Feedback"> | number
    rating?: IntWithAggregatesFilter<"Feedback"> | number
    comment?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type UserSessionsWhereInput = {
    AND?: UserSessionsWhereInput | UserSessionsWhereInput[]
    OR?: UserSessionsWhereInput[]
    NOT?: UserSessionsWhereInput | UserSessionsWhereInput[]
    id?: IntFilter<"UserSessions"> | number
    user_id?: IntFilter<"UserSessions"> | number
    session_start?: DateTimeFilter<"UserSessions"> | Date | string
    session_end?: DateTimeNullableFilter<"UserSessions"> | Date | string | null
    device_id?: IntNullableFilter<"UserSessions"> | number | null
    ip_address?: StringNullableFilter<"UserSessions"> | string | null
  }

  export type UserSessionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    session_start?: SortOrder
    session_end?: SortOrderInput | SortOrder
    device_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
  }

  export type UserSessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserSessionsWhereInput | UserSessionsWhereInput[]
    OR?: UserSessionsWhereInput[]
    NOT?: UserSessionsWhereInput | UserSessionsWhereInput[]
    user_id?: IntFilter<"UserSessions"> | number
    session_start?: DateTimeFilter<"UserSessions"> | Date | string
    session_end?: DateTimeNullableFilter<"UserSessions"> | Date | string | null
    device_id?: IntNullableFilter<"UserSessions"> | number | null
    ip_address?: StringNullableFilter<"UserSessions"> | string | null
  }, "id">

  export type UserSessionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    session_start?: SortOrder
    session_end?: SortOrderInput | SortOrder
    device_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    _count?: UserSessionsCountOrderByAggregateInput
    _avg?: UserSessionsAvgOrderByAggregateInput
    _max?: UserSessionsMaxOrderByAggregateInput
    _min?: UserSessionsMinOrderByAggregateInput
    _sum?: UserSessionsSumOrderByAggregateInput
  }

  export type UserSessionsScalarWhereWithAggregatesInput = {
    AND?: UserSessionsScalarWhereWithAggregatesInput | UserSessionsScalarWhereWithAggregatesInput[]
    OR?: UserSessionsScalarWhereWithAggregatesInput[]
    NOT?: UserSessionsScalarWhereWithAggregatesInput | UserSessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSessions"> | number
    user_id?: IntWithAggregatesFilter<"UserSessions"> | number
    session_start?: DateTimeWithAggregatesFilter<"UserSessions"> | Date | string
    session_end?: DateTimeNullableWithAggregatesFilter<"UserSessions"> | Date | string | null
    device_id?: IntNullableWithAggregatesFilter<"UserSessions"> | number | null
    ip_address?: StringNullableWithAggregatesFilter<"UserSessions"> | string | null
  }

  export type Navigation_logsCreateInput = {
    user_id: number
    environment_id: number
    rerouting_count: number
    start_time: Date | string
    end_time?: Date | string | null
    zoneLogs?: Zone_logsCreateNestedManyWithoutNavigationInput
    poiLogs?: POI_logsCreateNestedManyWithoutNavigationInput
  }

  export type Navigation_logsUncheckedCreateInput = {
    id?: number
    user_id: number
    environment_id: number
    rerouting_count: number
    start_time: Date | string
    end_time?: Date | string | null
    zoneLogs?: Zone_logsUncheckedCreateNestedManyWithoutNavigationInput
    poiLogs?: POI_logsUncheckedCreateNestedManyWithoutNavigationInput
  }

  export type Navigation_logsUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    environment_id?: IntFieldUpdateOperationsInput | number
    rerouting_count?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneLogs?: Zone_logsUpdateManyWithoutNavigationNestedInput
    poiLogs?: POI_logsUpdateManyWithoutNavigationNestedInput
  }

  export type Navigation_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    environment_id?: IntFieldUpdateOperationsInput | number
    rerouting_count?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneLogs?: Zone_logsUncheckedUpdateManyWithoutNavigationNestedInput
    poiLogs?: POI_logsUncheckedUpdateManyWithoutNavigationNestedInput
  }

  export type Navigation_logsCreateManyInput = {
    id?: number
    user_id: number
    environment_id: number
    rerouting_count: number
    start_time: Date | string
    end_time?: Date | string | null
  }

  export type Navigation_logsUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    environment_id?: IntFieldUpdateOperationsInput | number
    rerouting_count?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Navigation_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    environment_id?: IntFieldUpdateOperationsInput | number
    rerouting_count?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Zone_logsCreateInput = {
    zone_id: number
    user_id: number
    start_time: Date | string
    end_time: Date | string
    obstacles_encountered: number
    navigation: Navigation_logsCreateNestedOneWithoutZoneLogsInput
  }

  export type Zone_logsUncheckedCreateInput = {
    id?: number
    navigation_id: number
    zone_id: number
    user_id: number
    start_time: Date | string
    end_time: Date | string
    obstacles_encountered: number
  }

  export type Zone_logsUpdateInput = {
    zone_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    obstacles_encountered?: IntFieldUpdateOperationsInput | number
    navigation?: Navigation_logsUpdateOneRequiredWithoutZoneLogsNestedInput
  }

  export type Zone_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    navigation_id?: IntFieldUpdateOperationsInput | number
    zone_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    obstacles_encountered?: IntFieldUpdateOperationsInput | number
  }

  export type Zone_logsCreateManyInput = {
    id?: number
    navigation_id: number
    zone_id: number
    user_id: number
    start_time: Date | string
    end_time: Date | string
    obstacles_encountered: number
  }

  export type Zone_logsUpdateManyMutationInput = {
    zone_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    obstacles_encountered?: IntFieldUpdateOperationsInput | number
  }

  export type Zone_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    navigation_id?: IntFieldUpdateOperationsInput | number
    zone_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    obstacles_encountered?: IntFieldUpdateOperationsInput | number
  }

  export type POI_logsCreateInput = {
    poi_id: number
    visit_time: Date | string
    navigation: Navigation_logsCreateNestedOneWithoutPoiLogsInput
  }

  export type POI_logsUncheckedCreateInput = {
    id?: number
    navigation_id: number
    poi_id: number
    visit_time: Date | string
  }

  export type POI_logsUpdateInput = {
    poi_id?: IntFieldUpdateOperationsInput | number
    visit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    navigation?: Navigation_logsUpdateOneRequiredWithoutPoiLogsNestedInput
  }

  export type POI_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    navigation_id?: IntFieldUpdateOperationsInput | number
    poi_id?: IntFieldUpdateOperationsInput | number
    visit_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POI_logsCreateManyInput = {
    id?: number
    navigation_id: number
    poi_id: number
    visit_time: Date | string
  }

  export type POI_logsUpdateManyMutationInput = {
    poi_id?: IntFieldUpdateOperationsInput | number
    visit_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POI_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    navigation_id?: IntFieldUpdateOperationsInput | number
    poi_id?: IntFieldUpdateOperationsInput | number
    visit_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUsageLogsCreateInput = {
    dispositive_id: number
    timestamp: Date | string
    battery_level: number
    connected: boolean
  }

  export type DeviceUsageLogsUncheckedCreateInput = {
    id?: number
    dispositive_id: number
    timestamp: Date | string
    battery_level: number
    connected: boolean
  }

  export type DeviceUsageLogsUpdateInput = {
    dispositive_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    battery_level?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceUsageLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dispositive_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    battery_level?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceUsageLogsCreateManyInput = {
    id?: number
    dispositive_id: number
    timestamp: Date | string
    battery_level: number
    connected: boolean
  }

  export type DeviceUsageLogsUpdateManyMutationInput = {
    dispositive_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    battery_level?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceUsageLogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dispositive_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    battery_level?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeedbackCreateInput = {
    user_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    user_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type FeedbackUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: number
    user_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionsCreateInput = {
    user_id: number
    session_start?: Date | string
    session_end?: Date | string | null
    device_id?: number | null
    ip_address?: string | null
  }

  export type UserSessionsUncheckedCreateInput = {
    id?: number
    user_id: number
    session_start?: Date | string
    session_end?: Date | string | null
    device_id?: number | null
    ip_address?: string | null
  }

  export type UserSessionsUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSessionsCreateManyInput = {
    id?: number
    user_id: number
    session_start?: Date | string
    session_end?: Date | string | null
    device_id?: number | null
    ip_address?: string | null
  }

  export type UserSessionsUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Zone_logsListRelationFilter = {
    every?: Zone_logsWhereInput
    some?: Zone_logsWhereInput
    none?: Zone_logsWhereInput
  }

  export type POI_logsListRelationFilter = {
    every?: POI_logsWhereInput
    some?: POI_logsWhereInput
    none?: POI_logsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Zone_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type POI_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Navigation_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    environment_id?: SortOrder
    rerouting_count?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type Navigation_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    environment_id?: SortOrder
    rerouting_count?: SortOrder
  }

  export type Navigation_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    environment_id?: SortOrder
    rerouting_count?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type Navigation_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    environment_id?: SortOrder
    rerouting_count?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type Navigation_logsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    environment_id?: SortOrder
    rerouting_count?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Navigation_logsScalarRelationFilter = {
    is?: Navigation_logsWhereInput
    isNot?: Navigation_logsWhereInput
  }

  export type Zone_logsCountOrderByAggregateInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    zone_id?: SortOrder
    user_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    obstacles_encountered?: SortOrder
  }

  export type Zone_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    zone_id?: SortOrder
    user_id?: SortOrder
    obstacles_encountered?: SortOrder
  }

  export type Zone_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    zone_id?: SortOrder
    user_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    obstacles_encountered?: SortOrder
  }

  export type Zone_logsMinOrderByAggregateInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    zone_id?: SortOrder
    user_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    obstacles_encountered?: SortOrder
  }

  export type Zone_logsSumOrderByAggregateInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    zone_id?: SortOrder
    user_id?: SortOrder
    obstacles_encountered?: SortOrder
  }

  export type POI_logsCountOrderByAggregateInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    poi_id?: SortOrder
    visit_time?: SortOrder
  }

  export type POI_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    poi_id?: SortOrder
  }

  export type POI_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    poi_id?: SortOrder
    visit_time?: SortOrder
  }

  export type POI_logsMinOrderByAggregateInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    poi_id?: SortOrder
    visit_time?: SortOrder
  }

  export type POI_logsSumOrderByAggregateInput = {
    id?: SortOrder
    navigation_id?: SortOrder
    poi_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DeviceUsageLogsCountOrderByAggregateInput = {
    id?: SortOrder
    dispositive_id?: SortOrder
    timestamp?: SortOrder
    battery_level?: SortOrder
    connected?: SortOrder
  }

  export type DeviceUsageLogsAvgOrderByAggregateInput = {
    id?: SortOrder
    dispositive_id?: SortOrder
    battery_level?: SortOrder
  }

  export type DeviceUsageLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    dispositive_id?: SortOrder
    timestamp?: SortOrder
    battery_level?: SortOrder
    connected?: SortOrder
  }

  export type DeviceUsageLogsMinOrderByAggregateInput = {
    id?: SortOrder
    dispositive_id?: SortOrder
    timestamp?: SortOrder
    battery_level?: SortOrder
    connected?: SortOrder
  }

  export type DeviceUsageLogsSumOrderByAggregateInput = {
    id?: SortOrder
    dispositive_id?: SortOrder
    battery_level?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserSessionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    session_start?: SortOrder
    session_end?: SortOrder
    device_id?: SortOrder
    ip_address?: SortOrder
  }

  export type UserSessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    device_id?: SortOrder
  }

  export type UserSessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    session_start?: SortOrder
    session_end?: SortOrder
    device_id?: SortOrder
    ip_address?: SortOrder
  }

  export type UserSessionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    session_start?: SortOrder
    session_end?: SortOrder
    device_id?: SortOrder
    ip_address?: SortOrder
  }

  export type UserSessionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    device_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Zone_logsCreateNestedManyWithoutNavigationInput = {
    create?: XOR<Zone_logsCreateWithoutNavigationInput, Zone_logsUncheckedCreateWithoutNavigationInput> | Zone_logsCreateWithoutNavigationInput[] | Zone_logsUncheckedCreateWithoutNavigationInput[]
    connectOrCreate?: Zone_logsCreateOrConnectWithoutNavigationInput | Zone_logsCreateOrConnectWithoutNavigationInput[]
    createMany?: Zone_logsCreateManyNavigationInputEnvelope
    connect?: Zone_logsWhereUniqueInput | Zone_logsWhereUniqueInput[]
  }

  export type POI_logsCreateNestedManyWithoutNavigationInput = {
    create?: XOR<POI_logsCreateWithoutNavigationInput, POI_logsUncheckedCreateWithoutNavigationInput> | POI_logsCreateWithoutNavigationInput[] | POI_logsUncheckedCreateWithoutNavigationInput[]
    connectOrCreate?: POI_logsCreateOrConnectWithoutNavigationInput | POI_logsCreateOrConnectWithoutNavigationInput[]
    createMany?: POI_logsCreateManyNavigationInputEnvelope
    connect?: POI_logsWhereUniqueInput | POI_logsWhereUniqueInput[]
  }

  export type Zone_logsUncheckedCreateNestedManyWithoutNavigationInput = {
    create?: XOR<Zone_logsCreateWithoutNavigationInput, Zone_logsUncheckedCreateWithoutNavigationInput> | Zone_logsCreateWithoutNavigationInput[] | Zone_logsUncheckedCreateWithoutNavigationInput[]
    connectOrCreate?: Zone_logsCreateOrConnectWithoutNavigationInput | Zone_logsCreateOrConnectWithoutNavigationInput[]
    createMany?: Zone_logsCreateManyNavigationInputEnvelope
    connect?: Zone_logsWhereUniqueInput | Zone_logsWhereUniqueInput[]
  }

  export type POI_logsUncheckedCreateNestedManyWithoutNavigationInput = {
    create?: XOR<POI_logsCreateWithoutNavigationInput, POI_logsUncheckedCreateWithoutNavigationInput> | POI_logsCreateWithoutNavigationInput[] | POI_logsUncheckedCreateWithoutNavigationInput[]
    connectOrCreate?: POI_logsCreateOrConnectWithoutNavigationInput | POI_logsCreateOrConnectWithoutNavigationInput[]
    createMany?: POI_logsCreateManyNavigationInputEnvelope
    connect?: POI_logsWhereUniqueInput | POI_logsWhereUniqueInput[]
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Zone_logsUpdateManyWithoutNavigationNestedInput = {
    create?: XOR<Zone_logsCreateWithoutNavigationInput, Zone_logsUncheckedCreateWithoutNavigationInput> | Zone_logsCreateWithoutNavigationInput[] | Zone_logsUncheckedCreateWithoutNavigationInput[]
    connectOrCreate?: Zone_logsCreateOrConnectWithoutNavigationInput | Zone_logsCreateOrConnectWithoutNavigationInput[]
    upsert?: Zone_logsUpsertWithWhereUniqueWithoutNavigationInput | Zone_logsUpsertWithWhereUniqueWithoutNavigationInput[]
    createMany?: Zone_logsCreateManyNavigationInputEnvelope
    set?: Zone_logsWhereUniqueInput | Zone_logsWhereUniqueInput[]
    disconnect?: Zone_logsWhereUniqueInput | Zone_logsWhereUniqueInput[]
    delete?: Zone_logsWhereUniqueInput | Zone_logsWhereUniqueInput[]
    connect?: Zone_logsWhereUniqueInput | Zone_logsWhereUniqueInput[]
    update?: Zone_logsUpdateWithWhereUniqueWithoutNavigationInput | Zone_logsUpdateWithWhereUniqueWithoutNavigationInput[]
    updateMany?: Zone_logsUpdateManyWithWhereWithoutNavigationInput | Zone_logsUpdateManyWithWhereWithoutNavigationInput[]
    deleteMany?: Zone_logsScalarWhereInput | Zone_logsScalarWhereInput[]
  }

  export type POI_logsUpdateManyWithoutNavigationNestedInput = {
    create?: XOR<POI_logsCreateWithoutNavigationInput, POI_logsUncheckedCreateWithoutNavigationInput> | POI_logsCreateWithoutNavigationInput[] | POI_logsUncheckedCreateWithoutNavigationInput[]
    connectOrCreate?: POI_logsCreateOrConnectWithoutNavigationInput | POI_logsCreateOrConnectWithoutNavigationInput[]
    upsert?: POI_logsUpsertWithWhereUniqueWithoutNavigationInput | POI_logsUpsertWithWhereUniqueWithoutNavigationInput[]
    createMany?: POI_logsCreateManyNavigationInputEnvelope
    set?: POI_logsWhereUniqueInput | POI_logsWhereUniqueInput[]
    disconnect?: POI_logsWhereUniqueInput | POI_logsWhereUniqueInput[]
    delete?: POI_logsWhereUniqueInput | POI_logsWhereUniqueInput[]
    connect?: POI_logsWhereUniqueInput | POI_logsWhereUniqueInput[]
    update?: POI_logsUpdateWithWhereUniqueWithoutNavigationInput | POI_logsUpdateWithWhereUniqueWithoutNavigationInput[]
    updateMany?: POI_logsUpdateManyWithWhereWithoutNavigationInput | POI_logsUpdateManyWithWhereWithoutNavigationInput[]
    deleteMany?: POI_logsScalarWhereInput | POI_logsScalarWhereInput[]
  }

  export type Zone_logsUncheckedUpdateManyWithoutNavigationNestedInput = {
    create?: XOR<Zone_logsCreateWithoutNavigationInput, Zone_logsUncheckedCreateWithoutNavigationInput> | Zone_logsCreateWithoutNavigationInput[] | Zone_logsUncheckedCreateWithoutNavigationInput[]
    connectOrCreate?: Zone_logsCreateOrConnectWithoutNavigationInput | Zone_logsCreateOrConnectWithoutNavigationInput[]
    upsert?: Zone_logsUpsertWithWhereUniqueWithoutNavigationInput | Zone_logsUpsertWithWhereUniqueWithoutNavigationInput[]
    createMany?: Zone_logsCreateManyNavigationInputEnvelope
    set?: Zone_logsWhereUniqueInput | Zone_logsWhereUniqueInput[]
    disconnect?: Zone_logsWhereUniqueInput | Zone_logsWhereUniqueInput[]
    delete?: Zone_logsWhereUniqueInput | Zone_logsWhereUniqueInput[]
    connect?: Zone_logsWhereUniqueInput | Zone_logsWhereUniqueInput[]
    update?: Zone_logsUpdateWithWhereUniqueWithoutNavigationInput | Zone_logsUpdateWithWhereUniqueWithoutNavigationInput[]
    updateMany?: Zone_logsUpdateManyWithWhereWithoutNavigationInput | Zone_logsUpdateManyWithWhereWithoutNavigationInput[]
    deleteMany?: Zone_logsScalarWhereInput | Zone_logsScalarWhereInput[]
  }

  export type POI_logsUncheckedUpdateManyWithoutNavigationNestedInput = {
    create?: XOR<POI_logsCreateWithoutNavigationInput, POI_logsUncheckedCreateWithoutNavigationInput> | POI_logsCreateWithoutNavigationInput[] | POI_logsUncheckedCreateWithoutNavigationInput[]
    connectOrCreate?: POI_logsCreateOrConnectWithoutNavigationInput | POI_logsCreateOrConnectWithoutNavigationInput[]
    upsert?: POI_logsUpsertWithWhereUniqueWithoutNavigationInput | POI_logsUpsertWithWhereUniqueWithoutNavigationInput[]
    createMany?: POI_logsCreateManyNavigationInputEnvelope
    set?: POI_logsWhereUniqueInput | POI_logsWhereUniqueInput[]
    disconnect?: POI_logsWhereUniqueInput | POI_logsWhereUniqueInput[]
    delete?: POI_logsWhereUniqueInput | POI_logsWhereUniqueInput[]
    connect?: POI_logsWhereUniqueInput | POI_logsWhereUniqueInput[]
    update?: POI_logsUpdateWithWhereUniqueWithoutNavigationInput | POI_logsUpdateWithWhereUniqueWithoutNavigationInput[]
    updateMany?: POI_logsUpdateManyWithWhereWithoutNavigationInput | POI_logsUpdateManyWithWhereWithoutNavigationInput[]
    deleteMany?: POI_logsScalarWhereInput | POI_logsScalarWhereInput[]
  }

  export type Navigation_logsCreateNestedOneWithoutZoneLogsInput = {
    create?: XOR<Navigation_logsCreateWithoutZoneLogsInput, Navigation_logsUncheckedCreateWithoutZoneLogsInput>
    connectOrCreate?: Navigation_logsCreateOrConnectWithoutZoneLogsInput
    connect?: Navigation_logsWhereUniqueInput
  }

  export type Navigation_logsUpdateOneRequiredWithoutZoneLogsNestedInput = {
    create?: XOR<Navigation_logsCreateWithoutZoneLogsInput, Navigation_logsUncheckedCreateWithoutZoneLogsInput>
    connectOrCreate?: Navigation_logsCreateOrConnectWithoutZoneLogsInput
    upsert?: Navigation_logsUpsertWithoutZoneLogsInput
    connect?: Navigation_logsWhereUniqueInput
    update?: XOR<XOR<Navigation_logsUpdateToOneWithWhereWithoutZoneLogsInput, Navigation_logsUpdateWithoutZoneLogsInput>, Navigation_logsUncheckedUpdateWithoutZoneLogsInput>
  }

  export type Navigation_logsCreateNestedOneWithoutPoiLogsInput = {
    create?: XOR<Navigation_logsCreateWithoutPoiLogsInput, Navigation_logsUncheckedCreateWithoutPoiLogsInput>
    connectOrCreate?: Navigation_logsCreateOrConnectWithoutPoiLogsInput
    connect?: Navigation_logsWhereUniqueInput
  }

  export type Navigation_logsUpdateOneRequiredWithoutPoiLogsNestedInput = {
    create?: XOR<Navigation_logsCreateWithoutPoiLogsInput, Navigation_logsUncheckedCreateWithoutPoiLogsInput>
    connectOrCreate?: Navigation_logsCreateOrConnectWithoutPoiLogsInput
    upsert?: Navigation_logsUpsertWithoutPoiLogsInput
    connect?: Navigation_logsWhereUniqueInput
    update?: XOR<XOR<Navigation_logsUpdateToOneWithWhereWithoutPoiLogsInput, Navigation_logsUpdateWithoutPoiLogsInput>, Navigation_logsUncheckedUpdateWithoutPoiLogsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Zone_logsCreateWithoutNavigationInput = {
    zone_id: number
    user_id: number
    start_time: Date | string
    end_time: Date | string
    obstacles_encountered: number
  }

  export type Zone_logsUncheckedCreateWithoutNavigationInput = {
    id?: number
    zone_id: number
    user_id: number
    start_time: Date | string
    end_time: Date | string
    obstacles_encountered: number
  }

  export type Zone_logsCreateOrConnectWithoutNavigationInput = {
    where: Zone_logsWhereUniqueInput
    create: XOR<Zone_logsCreateWithoutNavigationInput, Zone_logsUncheckedCreateWithoutNavigationInput>
  }

  export type Zone_logsCreateManyNavigationInputEnvelope = {
    data: Zone_logsCreateManyNavigationInput | Zone_logsCreateManyNavigationInput[]
    skipDuplicates?: boolean
  }

  export type POI_logsCreateWithoutNavigationInput = {
    poi_id: number
    visit_time: Date | string
  }

  export type POI_logsUncheckedCreateWithoutNavigationInput = {
    id?: number
    poi_id: number
    visit_time: Date | string
  }

  export type POI_logsCreateOrConnectWithoutNavigationInput = {
    where: POI_logsWhereUniqueInput
    create: XOR<POI_logsCreateWithoutNavigationInput, POI_logsUncheckedCreateWithoutNavigationInput>
  }

  export type POI_logsCreateManyNavigationInputEnvelope = {
    data: POI_logsCreateManyNavigationInput | POI_logsCreateManyNavigationInput[]
    skipDuplicates?: boolean
  }

  export type Zone_logsUpsertWithWhereUniqueWithoutNavigationInput = {
    where: Zone_logsWhereUniqueInput
    update: XOR<Zone_logsUpdateWithoutNavigationInput, Zone_logsUncheckedUpdateWithoutNavigationInput>
    create: XOR<Zone_logsCreateWithoutNavigationInput, Zone_logsUncheckedCreateWithoutNavigationInput>
  }

  export type Zone_logsUpdateWithWhereUniqueWithoutNavigationInput = {
    where: Zone_logsWhereUniqueInput
    data: XOR<Zone_logsUpdateWithoutNavigationInput, Zone_logsUncheckedUpdateWithoutNavigationInput>
  }

  export type Zone_logsUpdateManyWithWhereWithoutNavigationInput = {
    where: Zone_logsScalarWhereInput
    data: XOR<Zone_logsUpdateManyMutationInput, Zone_logsUncheckedUpdateManyWithoutNavigationInput>
  }

  export type Zone_logsScalarWhereInput = {
    AND?: Zone_logsScalarWhereInput | Zone_logsScalarWhereInput[]
    OR?: Zone_logsScalarWhereInput[]
    NOT?: Zone_logsScalarWhereInput | Zone_logsScalarWhereInput[]
    id?: IntFilter<"Zone_logs"> | number
    navigation_id?: IntFilter<"Zone_logs"> | number
    zone_id?: IntFilter<"Zone_logs"> | number
    user_id?: IntFilter<"Zone_logs"> | number
    start_time?: DateTimeFilter<"Zone_logs"> | Date | string
    end_time?: DateTimeFilter<"Zone_logs"> | Date | string
    obstacles_encountered?: IntFilter<"Zone_logs"> | number
  }

  export type POI_logsUpsertWithWhereUniqueWithoutNavigationInput = {
    where: POI_logsWhereUniqueInput
    update: XOR<POI_logsUpdateWithoutNavigationInput, POI_logsUncheckedUpdateWithoutNavigationInput>
    create: XOR<POI_logsCreateWithoutNavigationInput, POI_logsUncheckedCreateWithoutNavigationInput>
  }

  export type POI_logsUpdateWithWhereUniqueWithoutNavigationInput = {
    where: POI_logsWhereUniqueInput
    data: XOR<POI_logsUpdateWithoutNavigationInput, POI_logsUncheckedUpdateWithoutNavigationInput>
  }

  export type POI_logsUpdateManyWithWhereWithoutNavigationInput = {
    where: POI_logsScalarWhereInput
    data: XOR<POI_logsUpdateManyMutationInput, POI_logsUncheckedUpdateManyWithoutNavigationInput>
  }

  export type POI_logsScalarWhereInput = {
    AND?: POI_logsScalarWhereInput | POI_logsScalarWhereInput[]
    OR?: POI_logsScalarWhereInput[]
    NOT?: POI_logsScalarWhereInput | POI_logsScalarWhereInput[]
    id?: IntFilter<"POI_logs"> | number
    navigation_id?: IntFilter<"POI_logs"> | number
    poi_id?: IntFilter<"POI_logs"> | number
    visit_time?: DateTimeFilter<"POI_logs"> | Date | string
  }

  export type Navigation_logsCreateWithoutZoneLogsInput = {
    user_id: number
    environment_id: number
    rerouting_count: number
    start_time: Date | string
    end_time?: Date | string | null
    poiLogs?: POI_logsCreateNestedManyWithoutNavigationInput
  }

  export type Navigation_logsUncheckedCreateWithoutZoneLogsInput = {
    id?: number
    user_id: number
    environment_id: number
    rerouting_count: number
    start_time: Date | string
    end_time?: Date | string | null
    poiLogs?: POI_logsUncheckedCreateNestedManyWithoutNavigationInput
  }

  export type Navigation_logsCreateOrConnectWithoutZoneLogsInput = {
    where: Navigation_logsWhereUniqueInput
    create: XOR<Navigation_logsCreateWithoutZoneLogsInput, Navigation_logsUncheckedCreateWithoutZoneLogsInput>
  }

  export type Navigation_logsUpsertWithoutZoneLogsInput = {
    update: XOR<Navigation_logsUpdateWithoutZoneLogsInput, Navigation_logsUncheckedUpdateWithoutZoneLogsInput>
    create: XOR<Navigation_logsCreateWithoutZoneLogsInput, Navigation_logsUncheckedCreateWithoutZoneLogsInput>
    where?: Navigation_logsWhereInput
  }

  export type Navigation_logsUpdateToOneWithWhereWithoutZoneLogsInput = {
    where?: Navigation_logsWhereInput
    data: XOR<Navigation_logsUpdateWithoutZoneLogsInput, Navigation_logsUncheckedUpdateWithoutZoneLogsInput>
  }

  export type Navigation_logsUpdateWithoutZoneLogsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    environment_id?: IntFieldUpdateOperationsInput | number
    rerouting_count?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    poiLogs?: POI_logsUpdateManyWithoutNavigationNestedInput
  }

  export type Navigation_logsUncheckedUpdateWithoutZoneLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    environment_id?: IntFieldUpdateOperationsInput | number
    rerouting_count?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    poiLogs?: POI_logsUncheckedUpdateManyWithoutNavigationNestedInput
  }

  export type Navigation_logsCreateWithoutPoiLogsInput = {
    user_id: number
    environment_id: number
    rerouting_count: number
    start_time: Date | string
    end_time?: Date | string | null
    zoneLogs?: Zone_logsCreateNestedManyWithoutNavigationInput
  }

  export type Navigation_logsUncheckedCreateWithoutPoiLogsInput = {
    id?: number
    user_id: number
    environment_id: number
    rerouting_count: number
    start_time: Date | string
    end_time?: Date | string | null
    zoneLogs?: Zone_logsUncheckedCreateNestedManyWithoutNavigationInput
  }

  export type Navigation_logsCreateOrConnectWithoutPoiLogsInput = {
    where: Navigation_logsWhereUniqueInput
    create: XOR<Navigation_logsCreateWithoutPoiLogsInput, Navigation_logsUncheckedCreateWithoutPoiLogsInput>
  }

  export type Navigation_logsUpsertWithoutPoiLogsInput = {
    update: XOR<Navigation_logsUpdateWithoutPoiLogsInput, Navigation_logsUncheckedUpdateWithoutPoiLogsInput>
    create: XOR<Navigation_logsCreateWithoutPoiLogsInput, Navigation_logsUncheckedCreateWithoutPoiLogsInput>
    where?: Navigation_logsWhereInput
  }

  export type Navigation_logsUpdateToOneWithWhereWithoutPoiLogsInput = {
    where?: Navigation_logsWhereInput
    data: XOR<Navigation_logsUpdateWithoutPoiLogsInput, Navigation_logsUncheckedUpdateWithoutPoiLogsInput>
  }

  export type Navigation_logsUpdateWithoutPoiLogsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    environment_id?: IntFieldUpdateOperationsInput | number
    rerouting_count?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneLogs?: Zone_logsUpdateManyWithoutNavigationNestedInput
  }

  export type Navigation_logsUncheckedUpdateWithoutPoiLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    environment_id?: IntFieldUpdateOperationsInput | number
    rerouting_count?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneLogs?: Zone_logsUncheckedUpdateManyWithoutNavigationNestedInput
  }

  export type Zone_logsCreateManyNavigationInput = {
    id?: number
    zone_id: number
    user_id: number
    start_time: Date | string
    end_time: Date | string
    obstacles_encountered: number
  }

  export type POI_logsCreateManyNavigationInput = {
    id?: number
    poi_id: number
    visit_time: Date | string
  }

  export type Zone_logsUpdateWithoutNavigationInput = {
    zone_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    obstacles_encountered?: IntFieldUpdateOperationsInput | number
  }

  export type Zone_logsUncheckedUpdateWithoutNavigationInput = {
    id?: IntFieldUpdateOperationsInput | number
    zone_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    obstacles_encountered?: IntFieldUpdateOperationsInput | number
  }

  export type Zone_logsUncheckedUpdateManyWithoutNavigationInput = {
    id?: IntFieldUpdateOperationsInput | number
    zone_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    obstacles_encountered?: IntFieldUpdateOperationsInput | number
  }

  export type POI_logsUpdateWithoutNavigationInput = {
    poi_id?: IntFieldUpdateOperationsInput | number
    visit_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POI_logsUncheckedUpdateWithoutNavigationInput = {
    id?: IntFieldUpdateOperationsInput | number
    poi_id?: IntFieldUpdateOperationsInput | number
    visit_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POI_logsUncheckedUpdateManyWithoutNavigationInput = {
    id?: IntFieldUpdateOperationsInput | number
    poi_id?: IntFieldUpdateOperationsInput | number
    visit_time?: DateTimeFieldUpdateOperationsInput | Date | string
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