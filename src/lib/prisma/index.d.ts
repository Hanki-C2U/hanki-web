
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
 * Model Mentee
 * 
 */
export type Mentee = $Result.DefaultSelection<Prisma.$MenteePayload>
/**
 * Model Mentor
 * 
 */
export type Mentor = $Result.DefaultSelection<Prisma.$MentorPayload>
/**
 * Model MentorMenteeRelationShip
 * 
 */
export type MentorMenteeRelationShip = $Result.DefaultSelection<Prisma.$MentorMenteeRelationShipPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mentees
 * const mentees = await prisma.mentee.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Mentees
   * const mentees = await prisma.mentee.findMany()
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
   * `prisma.mentee`: Exposes CRUD operations for the **Mentee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mentees
    * const mentees = await prisma.mentee.findMany()
    * ```
    */
  get mentee(): Prisma.MenteeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentor`: Exposes CRUD operations for the **Mentor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mentors
    * const mentors = await prisma.mentor.findMany()
    * ```
    */
  get mentor(): Prisma.MentorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentorMenteeRelationShip`: Exposes CRUD operations for the **MentorMenteeRelationShip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentorMenteeRelationShips
    * const mentorMenteeRelationShips = await prisma.mentorMenteeRelationShip.findMany()
    * ```
    */
  get mentorMenteeRelationShip(): Prisma.MentorMenteeRelationShipDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    Mentee: 'Mentee',
    Mentor: 'Mentor',
    MentorMenteeRelationShip: 'MentorMenteeRelationShip'
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
      modelProps: "mentee" | "mentor" | "mentorMenteeRelationShip"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Mentee: {
        payload: Prisma.$MenteePayload<ExtArgs>
        fields: Prisma.MenteeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenteeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenteeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload>
          }
          findFirst: {
            args: Prisma.MenteeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenteeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload>
          }
          findMany: {
            args: Prisma.MenteeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload>[]
          }
          create: {
            args: Prisma.MenteeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload>
          }
          createMany: {
            args: Prisma.MenteeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenteeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload>[]
          }
          delete: {
            args: Prisma.MenteeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload>
          }
          update: {
            args: Prisma.MenteeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload>
          }
          deleteMany: {
            args: Prisma.MenteeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenteeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenteeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload>[]
          }
          upsert: {
            args: Prisma.MenteeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenteePayload>
          }
          aggregate: {
            args: Prisma.MenteeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentee>
          }
          groupBy: {
            args: Prisma.MenteeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenteeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenteeCountArgs<ExtArgs>
            result: $Utils.Optional<MenteeCountAggregateOutputType> | number
          }
        }
      }
      Mentor: {
        payload: Prisma.$MentorPayload<ExtArgs>
        fields: Prisma.MentorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          findFirst: {
            args: Prisma.MentorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          findMany: {
            args: Prisma.MentorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>[]
          }
          create: {
            args: Prisma.MentorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          createMany: {
            args: Prisma.MentorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>[]
          }
          delete: {
            args: Prisma.MentorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          update: {
            args: Prisma.MentorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          deleteMany: {
            args: Prisma.MentorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>[]
          }
          upsert: {
            args: Prisma.MentorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          aggregate: {
            args: Prisma.MentorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentor>
          }
          groupBy: {
            args: Prisma.MentorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorCountArgs<ExtArgs>
            result: $Utils.Optional<MentorCountAggregateOutputType> | number
          }
        }
      }
      MentorMenteeRelationShip: {
        payload: Prisma.$MentorMenteeRelationShipPayload<ExtArgs>
        fields: Prisma.MentorMenteeRelationShipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorMenteeRelationShipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorMenteeRelationShipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload>
          }
          findFirst: {
            args: Prisma.MentorMenteeRelationShipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorMenteeRelationShipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload>
          }
          findMany: {
            args: Prisma.MentorMenteeRelationShipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload>[]
          }
          create: {
            args: Prisma.MentorMenteeRelationShipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload>
          }
          createMany: {
            args: Prisma.MentorMenteeRelationShipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentorMenteeRelationShipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload>[]
          }
          delete: {
            args: Prisma.MentorMenteeRelationShipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload>
          }
          update: {
            args: Prisma.MentorMenteeRelationShipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload>
          }
          deleteMany: {
            args: Prisma.MentorMenteeRelationShipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorMenteeRelationShipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentorMenteeRelationShipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload>[]
          }
          upsert: {
            args: Prisma.MentorMenteeRelationShipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorMenteeRelationShipPayload>
          }
          aggregate: {
            args: Prisma.MentorMenteeRelationShipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentorMenteeRelationShip>
          }
          groupBy: {
            args: Prisma.MentorMenteeRelationShipGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorMenteeRelationShipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorMenteeRelationShipCountArgs<ExtArgs>
            result: $Utils.Optional<MentorMenteeRelationShipCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    mentee?: MenteeOmit
    mentor?: MentorOmit
    mentorMenteeRelationShip?: MentorMenteeRelationShipOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type MenteeCountOutputType
   */

  export type MenteeCountOutputType = {
    mentor: number
  }

  export type MenteeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | MenteeCountOutputTypeCountMentorArgs
  }

  // Custom InputTypes
  /**
   * MenteeCountOutputType without action
   */
  export type MenteeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenteeCountOutputType
     */
    select?: MenteeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenteeCountOutputType without action
   */
  export type MenteeCountOutputTypeCountMentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorMenteeRelationShipWhereInput
  }


  /**
   * Count Type MentorCountOutputType
   */

  export type MentorCountOutputType = {
    mentee: number
  }

  export type MentorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MentorCountOutputTypeCountMenteeArgs
  }

  // Custom InputTypes
  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCountOutputType
     */
    select?: MentorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeCountMenteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorMenteeRelationShipWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Mentee
   */

  export type AggregateMentee = {
    _count: MenteeCountAggregateOutputType | null
    _avg: MenteeAvgAggregateOutputType | null
    _sum: MenteeSumAggregateOutputType | null
    _min: MenteeMinAggregateOutputType | null
    _max: MenteeMaxAggregateOutputType | null
  }

  export type MenteeAvgAggregateOutputType = {
    id: number | null
    age: number | null
    ratings: number | null
  }

  export type MenteeSumAggregateOutputType = {
    id: number | null
    age: number | null
    ratings: number | null
  }

  export type MenteeMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    age: number | null
    email: string | null
    phone_number: string | null
    password: string | null
    location: string | null
    updateAt: Date | null
    last_login: Date | null
    ratings: number | null
    experience: string | null
    bio: string | null
    joined: Date | null
  }

  export type MenteeMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    age: number | null
    email: string | null
    phone_number: string | null
    password: string | null
    location: string | null
    updateAt: Date | null
    last_login: Date | null
    ratings: number | null
    experience: string | null
    bio: string | null
    joined: Date | null
  }

  export type MenteeCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    age: number
    email: number
    phone_number: number
    password: number
    location: number
    updateAt: number
    last_login: number
    ratings: number
    experience: number
    bio: number
    joined: number
    goals: number
    _all: number
  }


  export type MenteeAvgAggregateInputType = {
    id?: true
    age?: true
    ratings?: true
  }

  export type MenteeSumAggregateInputType = {
    id?: true
    age?: true
    ratings?: true
  }

  export type MenteeMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    email?: true
    phone_number?: true
    password?: true
    location?: true
    updateAt?: true
    last_login?: true
    ratings?: true
    experience?: true
    bio?: true
    joined?: true
  }

  export type MenteeMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    email?: true
    phone_number?: true
    password?: true
    location?: true
    updateAt?: true
    last_login?: true
    ratings?: true
    experience?: true
    bio?: true
    joined?: true
  }

  export type MenteeCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    email?: true
    phone_number?: true
    password?: true
    location?: true
    updateAt?: true
    last_login?: true
    ratings?: true
    experience?: true
    bio?: true
    joined?: true
    goals?: true
    _all?: true
  }

  export type MenteeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mentee to aggregate.
     */
    where?: MenteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentees to fetch.
     */
    orderBy?: MenteeOrderByWithRelationInput | MenteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mentees
    **/
    _count?: true | MenteeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenteeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenteeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenteeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenteeMaxAggregateInputType
  }

  export type GetMenteeAggregateType<T extends MenteeAggregateArgs> = {
        [P in keyof T & keyof AggregateMentee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentee[P]>
      : GetScalarType<T[P], AggregateMentee[P]>
  }




  export type MenteeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenteeWhereInput
    orderBy?: MenteeOrderByWithAggregationInput | MenteeOrderByWithAggregationInput[]
    by: MenteeScalarFieldEnum[] | MenteeScalarFieldEnum
    having?: MenteeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenteeCountAggregateInputType | true
    _avg?: MenteeAvgAggregateInputType
    _sum?: MenteeSumAggregateInputType
    _min?: MenteeMinAggregateInputType
    _max?: MenteeMaxAggregateInputType
  }

  export type MenteeGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    age: number
    email: string
    phone_number: string
    password: string
    location: string
    updateAt: Date
    last_login: Date
    ratings: number
    experience: string | null
    bio: string
    joined: Date
    goals: string[]
    _count: MenteeCountAggregateOutputType | null
    _avg: MenteeAvgAggregateOutputType | null
    _sum: MenteeSumAggregateOutputType | null
    _min: MenteeMinAggregateOutputType | null
    _max: MenteeMaxAggregateOutputType | null
  }

  type GetMenteeGroupByPayload<T extends MenteeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenteeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenteeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenteeGroupByOutputType[P]>
            : GetScalarType<T[P], MenteeGroupByOutputType[P]>
        }
      >
    >


  export type MenteeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    updateAt?: boolean
    last_login?: boolean
    ratings?: boolean
    experience?: boolean
    bio?: boolean
    joined?: boolean
    goals?: boolean
    mentor?: boolean | Mentee$mentorArgs<ExtArgs>
    _count?: boolean | MenteeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentee"]>

  export type MenteeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    updateAt?: boolean
    last_login?: boolean
    ratings?: boolean
    experience?: boolean
    bio?: boolean
    joined?: boolean
    goals?: boolean
  }, ExtArgs["result"]["mentee"]>

  export type MenteeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    updateAt?: boolean
    last_login?: boolean
    ratings?: boolean
    experience?: boolean
    bio?: boolean
    joined?: boolean
    goals?: boolean
  }, ExtArgs["result"]["mentee"]>

  export type MenteeSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    updateAt?: boolean
    last_login?: boolean
    ratings?: boolean
    experience?: boolean
    bio?: boolean
    joined?: boolean
    goals?: boolean
  }

  export type MenteeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "age" | "email" | "phone_number" | "password" | "location" | "updateAt" | "last_login" | "ratings" | "experience" | "bio" | "joined" | "goals", ExtArgs["result"]["mentee"]>
  export type MenteeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | Mentee$mentorArgs<ExtArgs>
    _count?: boolean | MenteeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenteeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MenteeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MenteePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mentee"
    objects: {
      mentor: Prisma.$MentorMenteeRelationShipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      age: number
      email: string
      phone_number: string
      password: string
      location: string
      updateAt: Date
      last_login: Date
      ratings: number
      experience: string | null
      bio: string
      joined: Date
      goals: string[]
    }, ExtArgs["result"]["mentee"]>
    composites: {}
  }

  type MenteeGetPayload<S extends boolean | null | undefined | MenteeDefaultArgs> = $Result.GetResult<Prisma.$MenteePayload, S>

  type MenteeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenteeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenteeCountAggregateInputType | true
    }

  export interface MenteeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mentee'], meta: { name: 'Mentee' } }
    /**
     * Find zero or one Mentee that matches the filter.
     * @param {MenteeFindUniqueArgs} args - Arguments to find a Mentee
     * @example
     * // Get one Mentee
     * const mentee = await prisma.mentee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenteeFindUniqueArgs>(args: SelectSubset<T, MenteeFindUniqueArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mentee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenteeFindUniqueOrThrowArgs} args - Arguments to find a Mentee
     * @example
     * // Get one Mentee
     * const mentee = await prisma.mentee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenteeFindUniqueOrThrowArgs>(args: SelectSubset<T, MenteeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeFindFirstArgs} args - Arguments to find a Mentee
     * @example
     * // Get one Mentee
     * const mentee = await prisma.mentee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenteeFindFirstArgs>(args?: SelectSubset<T, MenteeFindFirstArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeFindFirstOrThrowArgs} args - Arguments to find a Mentee
     * @example
     * // Get one Mentee
     * const mentee = await prisma.mentee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenteeFindFirstOrThrowArgs>(args?: SelectSubset<T, MenteeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mentees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentees
     * const mentees = await prisma.mentee.findMany()
     * 
     * // Get first 10 Mentees
     * const mentees = await prisma.mentee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menteeWithIdOnly = await prisma.mentee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenteeFindManyArgs>(args?: SelectSubset<T, MenteeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mentee.
     * @param {MenteeCreateArgs} args - Arguments to create a Mentee.
     * @example
     * // Create one Mentee
     * const Mentee = await prisma.mentee.create({
     *   data: {
     *     // ... data to create a Mentee
     *   }
     * })
     * 
     */
    create<T extends MenteeCreateArgs>(args: SelectSubset<T, MenteeCreateArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mentees.
     * @param {MenteeCreateManyArgs} args - Arguments to create many Mentees.
     * @example
     * // Create many Mentees
     * const mentee = await prisma.mentee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenteeCreateManyArgs>(args?: SelectSubset<T, MenteeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mentees and returns the data saved in the database.
     * @param {MenteeCreateManyAndReturnArgs} args - Arguments to create many Mentees.
     * @example
     * // Create many Mentees
     * const mentee = await prisma.mentee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mentees and only return the `id`
     * const menteeWithIdOnly = await prisma.mentee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenteeCreateManyAndReturnArgs>(args?: SelectSubset<T, MenteeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mentee.
     * @param {MenteeDeleteArgs} args - Arguments to delete one Mentee.
     * @example
     * // Delete one Mentee
     * const Mentee = await prisma.mentee.delete({
     *   where: {
     *     // ... filter to delete one Mentee
     *   }
     * })
     * 
     */
    delete<T extends MenteeDeleteArgs>(args: SelectSubset<T, MenteeDeleteArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mentee.
     * @param {MenteeUpdateArgs} args - Arguments to update one Mentee.
     * @example
     * // Update one Mentee
     * const mentee = await prisma.mentee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenteeUpdateArgs>(args: SelectSubset<T, MenteeUpdateArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mentees.
     * @param {MenteeDeleteManyArgs} args - Arguments to filter Mentees to delete.
     * @example
     * // Delete a few Mentees
     * const { count } = await prisma.mentee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenteeDeleteManyArgs>(args?: SelectSubset<T, MenteeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentees
     * const mentee = await prisma.mentee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenteeUpdateManyArgs>(args: SelectSubset<T, MenteeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentees and returns the data updated in the database.
     * @param {MenteeUpdateManyAndReturnArgs} args - Arguments to update many Mentees.
     * @example
     * // Update many Mentees
     * const mentee = await prisma.mentee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mentees and only return the `id`
     * const menteeWithIdOnly = await prisma.mentee.updateManyAndReturn({
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
    updateManyAndReturn<T extends MenteeUpdateManyAndReturnArgs>(args: SelectSubset<T, MenteeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mentee.
     * @param {MenteeUpsertArgs} args - Arguments to update or create a Mentee.
     * @example
     * // Update or create a Mentee
     * const mentee = await prisma.mentee.upsert({
     *   create: {
     *     // ... data to create a Mentee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mentee we want to update
     *   }
     * })
     */
    upsert<T extends MenteeUpsertArgs>(args: SelectSubset<T, MenteeUpsertArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mentees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeCountArgs} args - Arguments to filter Mentees to count.
     * @example
     * // Count the number of Mentees
     * const count = await prisma.mentee.count({
     *   where: {
     *     // ... the filter for the Mentees we want to count
     *   }
     * })
    **/
    count<T extends MenteeCountArgs>(
      args?: Subset<T, MenteeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenteeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mentee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenteeAggregateArgs>(args: Subset<T, MenteeAggregateArgs>): Prisma.PrismaPromise<GetMenteeAggregateType<T>>

    /**
     * Group by Mentee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenteeGroupByArgs} args - Group by arguments.
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
      T extends MenteeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenteeGroupByArgs['orderBy'] }
        : { orderBy?: MenteeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenteeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenteeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mentee model
   */
  readonly fields: MenteeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mentee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenteeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentor<T extends Mentee$mentorArgs<ExtArgs> = {}>(args?: Subset<T, Mentee$mentorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mentee model
   */
  interface MenteeFieldRefs {
    readonly id: FieldRef<"Mentee", 'Int'>
    readonly first_name: FieldRef<"Mentee", 'String'>
    readonly last_name: FieldRef<"Mentee", 'String'>
    readonly age: FieldRef<"Mentee", 'Int'>
    readonly email: FieldRef<"Mentee", 'String'>
    readonly phone_number: FieldRef<"Mentee", 'String'>
    readonly password: FieldRef<"Mentee", 'String'>
    readonly location: FieldRef<"Mentee", 'String'>
    readonly updateAt: FieldRef<"Mentee", 'DateTime'>
    readonly last_login: FieldRef<"Mentee", 'DateTime'>
    readonly ratings: FieldRef<"Mentee", 'Int'>
    readonly experience: FieldRef<"Mentee", 'String'>
    readonly bio: FieldRef<"Mentee", 'String'>
    readonly joined: FieldRef<"Mentee", 'DateTime'>
    readonly goals: FieldRef<"Mentee", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Mentee findUnique
   */
  export type MenteeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeInclude<ExtArgs> | null
    /**
     * Filter, which Mentee to fetch.
     */
    where: MenteeWhereUniqueInput
  }

  /**
   * Mentee findUniqueOrThrow
   */
  export type MenteeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeInclude<ExtArgs> | null
    /**
     * Filter, which Mentee to fetch.
     */
    where: MenteeWhereUniqueInput
  }

  /**
   * Mentee findFirst
   */
  export type MenteeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeInclude<ExtArgs> | null
    /**
     * Filter, which Mentee to fetch.
     */
    where?: MenteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentees to fetch.
     */
    orderBy?: MenteeOrderByWithRelationInput | MenteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentees.
     */
    cursor?: MenteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentees.
     */
    distinct?: MenteeScalarFieldEnum | MenteeScalarFieldEnum[]
  }

  /**
   * Mentee findFirstOrThrow
   */
  export type MenteeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeInclude<ExtArgs> | null
    /**
     * Filter, which Mentee to fetch.
     */
    where?: MenteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentees to fetch.
     */
    orderBy?: MenteeOrderByWithRelationInput | MenteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentees.
     */
    cursor?: MenteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentees.
     */
    distinct?: MenteeScalarFieldEnum | MenteeScalarFieldEnum[]
  }

  /**
   * Mentee findMany
   */
  export type MenteeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeInclude<ExtArgs> | null
    /**
     * Filter, which Mentees to fetch.
     */
    where?: MenteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentees to fetch.
     */
    orderBy?: MenteeOrderByWithRelationInput | MenteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mentees.
     */
    cursor?: MenteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentees.
     */
    skip?: number
    distinct?: MenteeScalarFieldEnum | MenteeScalarFieldEnum[]
  }

  /**
   * Mentee create
   */
  export type MenteeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeInclude<ExtArgs> | null
    /**
     * The data needed to create a Mentee.
     */
    data: XOR<MenteeCreateInput, MenteeUncheckedCreateInput>
  }

  /**
   * Mentee createMany
   */
  export type MenteeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mentees.
     */
    data: MenteeCreateManyInput | MenteeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mentee createManyAndReturn
   */
  export type MenteeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * The data used to create many Mentees.
     */
    data: MenteeCreateManyInput | MenteeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mentee update
   */
  export type MenteeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeInclude<ExtArgs> | null
    /**
     * The data needed to update a Mentee.
     */
    data: XOR<MenteeUpdateInput, MenteeUncheckedUpdateInput>
    /**
     * Choose, which Mentee to update.
     */
    where: MenteeWhereUniqueInput
  }

  /**
   * Mentee updateMany
   */
  export type MenteeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mentees.
     */
    data: XOR<MenteeUpdateManyMutationInput, MenteeUncheckedUpdateManyInput>
    /**
     * Filter which Mentees to update
     */
    where?: MenteeWhereInput
    /**
     * Limit how many Mentees to update.
     */
    limit?: number
  }

  /**
   * Mentee updateManyAndReturn
   */
  export type MenteeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * The data used to update Mentees.
     */
    data: XOR<MenteeUpdateManyMutationInput, MenteeUncheckedUpdateManyInput>
    /**
     * Filter which Mentees to update
     */
    where?: MenteeWhereInput
    /**
     * Limit how many Mentees to update.
     */
    limit?: number
  }

  /**
   * Mentee upsert
   */
  export type MenteeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeInclude<ExtArgs> | null
    /**
     * The filter to search for the Mentee to update in case it exists.
     */
    where: MenteeWhereUniqueInput
    /**
     * In case the Mentee found by the `where` argument doesn't exist, create a new Mentee with this data.
     */
    create: XOR<MenteeCreateInput, MenteeUncheckedCreateInput>
    /**
     * In case the Mentee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenteeUpdateInput, MenteeUncheckedUpdateInput>
  }

  /**
   * Mentee delete
   */
  export type MenteeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeInclude<ExtArgs> | null
    /**
     * Filter which Mentee to delete.
     */
    where: MenteeWhereUniqueInput
  }

  /**
   * Mentee deleteMany
   */
  export type MenteeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mentees to delete
     */
    where?: MenteeWhereInput
    /**
     * Limit how many Mentees to delete.
     */
    limit?: number
  }

  /**
   * Mentee.mentor
   */
  export type Mentee$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    where?: MentorMenteeRelationShipWhereInput
    orderBy?: MentorMenteeRelationShipOrderByWithRelationInput | MentorMenteeRelationShipOrderByWithRelationInput[]
    cursor?: MentorMenteeRelationShipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorMenteeRelationShipScalarFieldEnum | MentorMenteeRelationShipScalarFieldEnum[]
  }

  /**
   * Mentee without action
   */
  export type MenteeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentee
     */
    select?: MenteeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentee
     */
    omit?: MenteeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenteeInclude<ExtArgs> | null
  }


  /**
   * Model Mentor
   */

  export type AggregateMentor = {
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  export type MentorAvgAggregateOutputType = {
    id: number | null
    age: number | null
    ratings: number | null
  }

  export type MentorSumAggregateOutputType = {
    id: number | null
    age: number | null
    ratings: number | null
  }

  export type MentorMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    age: number | null
    email: string | null
    phone_number: string | null
    password: string | null
    location: string | null
    joined: Date | null
    ratings: number | null
    updateAt: Date | null
    last_login: Date | null
    bio: string | null
  }

  export type MentorMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    age: number | null
    email: string | null
    phone_number: string | null
    password: string | null
    location: string | null
    joined: Date | null
    ratings: number | null
    updateAt: Date | null
    last_login: Date | null
    bio: string | null
  }

  export type MentorCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    age: number
    experience: number
    email: number
    phone_number: number
    password: number
    location: number
    joined: number
    ratings: number
    updateAt: number
    last_login: number
    expertise: number
    bio: number
    _all: number
  }


  export type MentorAvgAggregateInputType = {
    id?: true
    age?: true
    ratings?: true
  }

  export type MentorSumAggregateInputType = {
    id?: true
    age?: true
    ratings?: true
  }

  export type MentorMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    email?: true
    phone_number?: true
    password?: true
    location?: true
    joined?: true
    ratings?: true
    updateAt?: true
    last_login?: true
    bio?: true
  }

  export type MentorMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    email?: true
    phone_number?: true
    password?: true
    location?: true
    joined?: true
    ratings?: true
    updateAt?: true
    last_login?: true
    bio?: true
  }

  export type MentorCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    experience?: true
    email?: true
    phone_number?: true
    password?: true
    location?: true
    joined?: true
    ratings?: true
    updateAt?: true
    last_login?: true
    expertise?: true
    bio?: true
    _all?: true
  }

  export type MentorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mentor to aggregate.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mentors
    **/
    _count?: true | MentorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorMaxAggregateInputType
  }

  export type GetMentorAggregateType<T extends MentorAggregateArgs> = {
        [P in keyof T & keyof AggregateMentor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentor[P]>
      : GetScalarType<T[P], AggregateMentor[P]>
  }




  export type MentorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorWhereInput
    orderBy?: MentorOrderByWithAggregationInput | MentorOrderByWithAggregationInput[]
    by: MentorScalarFieldEnum[] | MentorScalarFieldEnum
    having?: MentorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorCountAggregateInputType | true
    _avg?: MentorAvgAggregateInputType
    _sum?: MentorSumAggregateInputType
    _min?: MentorMinAggregateInputType
    _max?: MentorMaxAggregateInputType
  }

  export type MentorGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    age: number
    experience: string[]
    email: string
    phone_number: string
    password: string
    location: string
    joined: Date
    ratings: number
    updateAt: Date
    last_login: Date
    expertise: string[]
    bio: string
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  type GetMentorGroupByPayload<T extends MentorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorGroupByOutputType[P]>
            : GetScalarType<T[P], MentorGroupByOutputType[P]>
        }
      >
    >


  export type MentorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    experience?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    joined?: boolean
    ratings?: boolean
    updateAt?: boolean
    last_login?: boolean
    expertise?: boolean
    bio?: boolean
    mentee?: boolean | Mentor$menteeArgs<ExtArgs>
    _count?: boolean | MentorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentor"]>

  export type MentorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    experience?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    joined?: boolean
    ratings?: boolean
    updateAt?: boolean
    last_login?: boolean
    expertise?: boolean
    bio?: boolean
  }, ExtArgs["result"]["mentor"]>

  export type MentorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    experience?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    joined?: boolean
    ratings?: boolean
    updateAt?: boolean
    last_login?: boolean
    expertise?: boolean
    bio?: boolean
  }, ExtArgs["result"]["mentor"]>

  export type MentorSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    experience?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    joined?: boolean
    ratings?: boolean
    updateAt?: boolean
    last_login?: boolean
    expertise?: boolean
    bio?: boolean
  }

  export type MentorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "age" | "experience" | "email" | "phone_number" | "password" | "location" | "joined" | "ratings" | "updateAt" | "last_login" | "expertise" | "bio", ExtArgs["result"]["mentor"]>
  export type MentorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | Mentor$menteeArgs<ExtArgs>
    _count?: boolean | MentorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MentorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MentorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mentor"
    objects: {
      mentee: Prisma.$MentorMenteeRelationShipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      age: number
      experience: string[]
      email: string
      phone_number: string
      password: string
      location: string
      joined: Date
      ratings: number
      updateAt: Date
      last_login: Date
      expertise: string[]
      bio: string
    }, ExtArgs["result"]["mentor"]>
    composites: {}
  }

  type MentorGetPayload<S extends boolean | null | undefined | MentorDefaultArgs> = $Result.GetResult<Prisma.$MentorPayload, S>

  type MentorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorCountAggregateInputType | true
    }

  export interface MentorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mentor'], meta: { name: 'Mentor' } }
    /**
     * Find zero or one Mentor that matches the filter.
     * @param {MentorFindUniqueArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorFindUniqueArgs>(args: SelectSubset<T, MentorFindUniqueArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mentor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorFindUniqueOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindFirstArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorFindFirstArgs>(args?: SelectSubset<T, MentorFindFirstArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindFirstOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mentors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentors
     * const mentors = await prisma.mentor.findMany()
     * 
     * // Get first 10 Mentors
     * const mentors = await prisma.mentor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorWithIdOnly = await prisma.mentor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentorFindManyArgs>(args?: SelectSubset<T, MentorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mentor.
     * @param {MentorCreateArgs} args - Arguments to create a Mentor.
     * @example
     * // Create one Mentor
     * const Mentor = await prisma.mentor.create({
     *   data: {
     *     // ... data to create a Mentor
     *   }
     * })
     * 
     */
    create<T extends MentorCreateArgs>(args: SelectSubset<T, MentorCreateArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mentors.
     * @param {MentorCreateManyArgs} args - Arguments to create many Mentors.
     * @example
     * // Create many Mentors
     * const mentor = await prisma.mentor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorCreateManyArgs>(args?: SelectSubset<T, MentorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mentors and returns the data saved in the database.
     * @param {MentorCreateManyAndReturnArgs} args - Arguments to create many Mentors.
     * @example
     * // Create many Mentors
     * const mentor = await prisma.mentor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mentors and only return the `id`
     * const mentorWithIdOnly = await prisma.mentor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentorCreateManyAndReturnArgs>(args?: SelectSubset<T, MentorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mentor.
     * @param {MentorDeleteArgs} args - Arguments to delete one Mentor.
     * @example
     * // Delete one Mentor
     * const Mentor = await prisma.mentor.delete({
     *   where: {
     *     // ... filter to delete one Mentor
     *   }
     * })
     * 
     */
    delete<T extends MentorDeleteArgs>(args: SelectSubset<T, MentorDeleteArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mentor.
     * @param {MentorUpdateArgs} args - Arguments to update one Mentor.
     * @example
     * // Update one Mentor
     * const mentor = await prisma.mentor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorUpdateArgs>(args: SelectSubset<T, MentorUpdateArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mentors.
     * @param {MentorDeleteManyArgs} args - Arguments to filter Mentors to delete.
     * @example
     * // Delete a few Mentors
     * const { count } = await prisma.mentor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorDeleteManyArgs>(args?: SelectSubset<T, MentorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorUpdateManyArgs>(args: SelectSubset<T, MentorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentors and returns the data updated in the database.
     * @param {MentorUpdateManyAndReturnArgs} args - Arguments to update many Mentors.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mentors and only return the `id`
     * const mentorWithIdOnly = await prisma.mentor.updateManyAndReturn({
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
    updateManyAndReturn<T extends MentorUpdateManyAndReturnArgs>(args: SelectSubset<T, MentorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mentor.
     * @param {MentorUpsertArgs} args - Arguments to update or create a Mentor.
     * @example
     * // Update or create a Mentor
     * const mentor = await prisma.mentor.upsert({
     *   create: {
     *     // ... data to create a Mentor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mentor we want to update
     *   }
     * })
     */
    upsert<T extends MentorUpsertArgs>(args: SelectSubset<T, MentorUpsertArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCountArgs} args - Arguments to filter Mentors to count.
     * @example
     * // Count the number of Mentors
     * const count = await prisma.mentor.count({
     *   where: {
     *     // ... the filter for the Mentors we want to count
     *   }
     * })
    **/
    count<T extends MentorCountArgs>(
      args?: Subset<T, MentorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MentorAggregateArgs>(args: Subset<T, MentorAggregateArgs>): Prisma.PrismaPromise<GetMentorAggregateType<T>>

    /**
     * Group by Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorGroupByArgs} args - Group by arguments.
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
      T extends MentorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorGroupByArgs['orderBy'] }
        : { orderBy?: MentorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MentorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mentor model
   */
  readonly fields: MentorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mentor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentee<T extends Mentor$menteeArgs<ExtArgs> = {}>(args?: Subset<T, Mentor$menteeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mentor model
   */
  interface MentorFieldRefs {
    readonly id: FieldRef<"Mentor", 'Int'>
    readonly first_name: FieldRef<"Mentor", 'String'>
    readonly last_name: FieldRef<"Mentor", 'String'>
    readonly age: FieldRef<"Mentor", 'Int'>
    readonly experience: FieldRef<"Mentor", 'String[]'>
    readonly email: FieldRef<"Mentor", 'String'>
    readonly phone_number: FieldRef<"Mentor", 'String'>
    readonly password: FieldRef<"Mentor", 'String'>
    readonly location: FieldRef<"Mentor", 'String'>
    readonly joined: FieldRef<"Mentor", 'DateTime'>
    readonly ratings: FieldRef<"Mentor", 'Int'>
    readonly updateAt: FieldRef<"Mentor", 'DateTime'>
    readonly last_login: FieldRef<"Mentor", 'DateTime'>
    readonly expertise: FieldRef<"Mentor", 'String[]'>
    readonly bio: FieldRef<"Mentor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mentor findUnique
   */
  export type MentorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor findUniqueOrThrow
   */
  export type MentorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor findFirst
   */
  export type MentorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentors.
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * Mentor findFirstOrThrow
   */
  export type MentorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentors.
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * Mentor findMany
   */
  export type MentorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentors to fetch.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mentors.
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * Mentor create
   */
  export type MentorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * The data needed to create a Mentor.
     */
    data: XOR<MentorCreateInput, MentorUncheckedCreateInput>
  }

  /**
   * Mentor createMany
   */
  export type MentorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mentors.
     */
    data: MentorCreateManyInput | MentorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mentor createManyAndReturn
   */
  export type MentorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * The data used to create many Mentors.
     */
    data: MentorCreateManyInput | MentorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mentor update
   */
  export type MentorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * The data needed to update a Mentor.
     */
    data: XOR<MentorUpdateInput, MentorUncheckedUpdateInput>
    /**
     * Choose, which Mentor to update.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor updateMany
   */
  export type MentorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mentors.
     */
    data: XOR<MentorUpdateManyMutationInput, MentorUncheckedUpdateManyInput>
    /**
     * Filter which Mentors to update
     */
    where?: MentorWhereInput
    /**
     * Limit how many Mentors to update.
     */
    limit?: number
  }

  /**
   * Mentor updateManyAndReturn
   */
  export type MentorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * The data used to update Mentors.
     */
    data: XOR<MentorUpdateManyMutationInput, MentorUncheckedUpdateManyInput>
    /**
     * Filter which Mentors to update
     */
    where?: MentorWhereInput
    /**
     * Limit how many Mentors to update.
     */
    limit?: number
  }

  /**
   * Mentor upsert
   */
  export type MentorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * The filter to search for the Mentor to update in case it exists.
     */
    where: MentorWhereUniqueInput
    /**
     * In case the Mentor found by the `where` argument doesn't exist, create a new Mentor with this data.
     */
    create: XOR<MentorCreateInput, MentorUncheckedCreateInput>
    /**
     * In case the Mentor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorUpdateInput, MentorUncheckedUpdateInput>
  }

  /**
   * Mentor delete
   */
  export type MentorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter which Mentor to delete.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor deleteMany
   */
  export type MentorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mentors to delete
     */
    where?: MentorWhereInput
    /**
     * Limit how many Mentors to delete.
     */
    limit?: number
  }

  /**
   * Mentor.mentee
   */
  export type Mentor$menteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    where?: MentorMenteeRelationShipWhereInput
    orderBy?: MentorMenteeRelationShipOrderByWithRelationInput | MentorMenteeRelationShipOrderByWithRelationInput[]
    cursor?: MentorMenteeRelationShipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorMenteeRelationShipScalarFieldEnum | MentorMenteeRelationShipScalarFieldEnum[]
  }

  /**
   * Mentor without action
   */
  export type MentorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
  }


  /**
   * Model MentorMenteeRelationShip
   */

  export type AggregateMentorMenteeRelationShip = {
    _count: MentorMenteeRelationShipCountAggregateOutputType | null
    _avg: MentorMenteeRelationShipAvgAggregateOutputType | null
    _sum: MentorMenteeRelationShipSumAggregateOutputType | null
    _min: MentorMenteeRelationShipMinAggregateOutputType | null
    _max: MentorMenteeRelationShipMaxAggregateOutputType | null
  }

  export type MentorMenteeRelationShipAvgAggregateOutputType = {
    menteeId: number | null
    mentorId: number | null
  }

  export type MentorMenteeRelationShipSumAggregateOutputType = {
    menteeId: number | null
    mentorId: number | null
  }

  export type MentorMenteeRelationShipMinAggregateOutputType = {
    menteeId: number | null
    mentorId: number | null
    createdAt: Date | null
  }

  export type MentorMenteeRelationShipMaxAggregateOutputType = {
    menteeId: number | null
    mentorId: number | null
    createdAt: Date | null
  }

  export type MentorMenteeRelationShipCountAggregateOutputType = {
    menteeId: number
    mentorId: number
    createdAt: number
    _all: number
  }


  export type MentorMenteeRelationShipAvgAggregateInputType = {
    menteeId?: true
    mentorId?: true
  }

  export type MentorMenteeRelationShipSumAggregateInputType = {
    menteeId?: true
    mentorId?: true
  }

  export type MentorMenteeRelationShipMinAggregateInputType = {
    menteeId?: true
    mentorId?: true
    createdAt?: true
  }

  export type MentorMenteeRelationShipMaxAggregateInputType = {
    menteeId?: true
    mentorId?: true
    createdAt?: true
  }

  export type MentorMenteeRelationShipCountAggregateInputType = {
    menteeId?: true
    mentorId?: true
    createdAt?: true
    _all?: true
  }

  export type MentorMenteeRelationShipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorMenteeRelationShip to aggregate.
     */
    where?: MentorMenteeRelationShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorMenteeRelationShips to fetch.
     */
    orderBy?: MentorMenteeRelationShipOrderByWithRelationInput | MentorMenteeRelationShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorMenteeRelationShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorMenteeRelationShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorMenteeRelationShips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentorMenteeRelationShips
    **/
    _count?: true | MentorMenteeRelationShipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorMenteeRelationShipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorMenteeRelationShipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorMenteeRelationShipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorMenteeRelationShipMaxAggregateInputType
  }

  export type GetMentorMenteeRelationShipAggregateType<T extends MentorMenteeRelationShipAggregateArgs> = {
        [P in keyof T & keyof AggregateMentorMenteeRelationShip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentorMenteeRelationShip[P]>
      : GetScalarType<T[P], AggregateMentorMenteeRelationShip[P]>
  }




  export type MentorMenteeRelationShipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorMenteeRelationShipWhereInput
    orderBy?: MentorMenteeRelationShipOrderByWithAggregationInput | MentorMenteeRelationShipOrderByWithAggregationInput[]
    by: MentorMenteeRelationShipScalarFieldEnum[] | MentorMenteeRelationShipScalarFieldEnum
    having?: MentorMenteeRelationShipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorMenteeRelationShipCountAggregateInputType | true
    _avg?: MentorMenteeRelationShipAvgAggregateInputType
    _sum?: MentorMenteeRelationShipSumAggregateInputType
    _min?: MentorMenteeRelationShipMinAggregateInputType
    _max?: MentorMenteeRelationShipMaxAggregateInputType
  }

  export type MentorMenteeRelationShipGroupByOutputType = {
    menteeId: number
    mentorId: number
    createdAt: Date
    _count: MentorMenteeRelationShipCountAggregateOutputType | null
    _avg: MentorMenteeRelationShipAvgAggregateOutputType | null
    _sum: MentorMenteeRelationShipSumAggregateOutputType | null
    _min: MentorMenteeRelationShipMinAggregateOutputType | null
    _max: MentorMenteeRelationShipMaxAggregateOutputType | null
  }

  type GetMentorMenteeRelationShipGroupByPayload<T extends MentorMenteeRelationShipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorMenteeRelationShipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorMenteeRelationShipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorMenteeRelationShipGroupByOutputType[P]>
            : GetScalarType<T[P], MentorMenteeRelationShipGroupByOutputType[P]>
        }
      >
    >


  export type MentorMenteeRelationShipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menteeId?: boolean
    mentorId?: boolean
    createdAt?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorMenteeRelationShip"]>

  export type MentorMenteeRelationShipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menteeId?: boolean
    mentorId?: boolean
    createdAt?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorMenteeRelationShip"]>

  export type MentorMenteeRelationShipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menteeId?: boolean
    mentorId?: boolean
    createdAt?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorMenteeRelationShip"]>

  export type MentorMenteeRelationShipSelectScalar = {
    menteeId?: boolean
    mentorId?: boolean
    createdAt?: boolean
  }

  export type MentorMenteeRelationShipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"menteeId" | "mentorId" | "createdAt", ExtArgs["result"]["mentorMenteeRelationShip"]>
  export type MentorMenteeRelationShipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }
  export type MentorMenteeRelationShipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }
  export type MentorMenteeRelationShipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }

  export type $MentorMenteeRelationShipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentorMenteeRelationShip"
    objects: {
      mentee: Prisma.$MenteePayload<ExtArgs>
      mentor: Prisma.$MentorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      menteeId: number
      mentorId: number
      createdAt: Date
    }, ExtArgs["result"]["mentorMenteeRelationShip"]>
    composites: {}
  }

  type MentorMenteeRelationShipGetPayload<S extends boolean | null | undefined | MentorMenteeRelationShipDefaultArgs> = $Result.GetResult<Prisma.$MentorMenteeRelationShipPayload, S>

  type MentorMenteeRelationShipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorMenteeRelationShipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorMenteeRelationShipCountAggregateInputType | true
    }

  export interface MentorMenteeRelationShipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentorMenteeRelationShip'], meta: { name: 'MentorMenteeRelationShip' } }
    /**
     * Find zero or one MentorMenteeRelationShip that matches the filter.
     * @param {MentorMenteeRelationShipFindUniqueArgs} args - Arguments to find a MentorMenteeRelationShip
     * @example
     * // Get one MentorMenteeRelationShip
     * const mentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorMenteeRelationShipFindUniqueArgs>(args: SelectSubset<T, MentorMenteeRelationShipFindUniqueArgs<ExtArgs>>): Prisma__MentorMenteeRelationShipClient<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentorMenteeRelationShip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorMenteeRelationShipFindUniqueOrThrowArgs} args - Arguments to find a MentorMenteeRelationShip
     * @example
     * // Get one MentorMenteeRelationShip
     * const mentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorMenteeRelationShipFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorMenteeRelationShipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorMenteeRelationShipClient<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorMenteeRelationShip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorMenteeRelationShipFindFirstArgs} args - Arguments to find a MentorMenteeRelationShip
     * @example
     * // Get one MentorMenteeRelationShip
     * const mentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorMenteeRelationShipFindFirstArgs>(args?: SelectSubset<T, MentorMenteeRelationShipFindFirstArgs<ExtArgs>>): Prisma__MentorMenteeRelationShipClient<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorMenteeRelationShip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorMenteeRelationShipFindFirstOrThrowArgs} args - Arguments to find a MentorMenteeRelationShip
     * @example
     * // Get one MentorMenteeRelationShip
     * const mentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorMenteeRelationShipFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorMenteeRelationShipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorMenteeRelationShipClient<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentorMenteeRelationShips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorMenteeRelationShipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentorMenteeRelationShips
     * const mentorMenteeRelationShips = await prisma.mentorMenteeRelationShip.findMany()
     * 
     * // Get first 10 MentorMenteeRelationShips
     * const mentorMenteeRelationShips = await prisma.mentorMenteeRelationShip.findMany({ take: 10 })
     * 
     * // Only select the `menteeId`
     * const mentorMenteeRelationShipWithMenteeIdOnly = await prisma.mentorMenteeRelationShip.findMany({ select: { menteeId: true } })
     * 
     */
    findMany<T extends MentorMenteeRelationShipFindManyArgs>(args?: SelectSubset<T, MentorMenteeRelationShipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentorMenteeRelationShip.
     * @param {MentorMenteeRelationShipCreateArgs} args - Arguments to create a MentorMenteeRelationShip.
     * @example
     * // Create one MentorMenteeRelationShip
     * const MentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.create({
     *   data: {
     *     // ... data to create a MentorMenteeRelationShip
     *   }
     * })
     * 
     */
    create<T extends MentorMenteeRelationShipCreateArgs>(args: SelectSubset<T, MentorMenteeRelationShipCreateArgs<ExtArgs>>): Prisma__MentorMenteeRelationShipClient<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentorMenteeRelationShips.
     * @param {MentorMenteeRelationShipCreateManyArgs} args - Arguments to create many MentorMenteeRelationShips.
     * @example
     * // Create many MentorMenteeRelationShips
     * const mentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorMenteeRelationShipCreateManyArgs>(args?: SelectSubset<T, MentorMenteeRelationShipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MentorMenteeRelationShips and returns the data saved in the database.
     * @param {MentorMenteeRelationShipCreateManyAndReturnArgs} args - Arguments to create many MentorMenteeRelationShips.
     * @example
     * // Create many MentorMenteeRelationShips
     * const mentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MentorMenteeRelationShips and only return the `menteeId`
     * const mentorMenteeRelationShipWithMenteeIdOnly = await prisma.mentorMenteeRelationShip.createManyAndReturn({
     *   select: { menteeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentorMenteeRelationShipCreateManyAndReturnArgs>(args?: SelectSubset<T, MentorMenteeRelationShipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MentorMenteeRelationShip.
     * @param {MentorMenteeRelationShipDeleteArgs} args - Arguments to delete one MentorMenteeRelationShip.
     * @example
     * // Delete one MentorMenteeRelationShip
     * const MentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.delete({
     *   where: {
     *     // ... filter to delete one MentorMenteeRelationShip
     *   }
     * })
     * 
     */
    delete<T extends MentorMenteeRelationShipDeleteArgs>(args: SelectSubset<T, MentorMenteeRelationShipDeleteArgs<ExtArgs>>): Prisma__MentorMenteeRelationShipClient<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentorMenteeRelationShip.
     * @param {MentorMenteeRelationShipUpdateArgs} args - Arguments to update one MentorMenteeRelationShip.
     * @example
     * // Update one MentorMenteeRelationShip
     * const mentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorMenteeRelationShipUpdateArgs>(args: SelectSubset<T, MentorMenteeRelationShipUpdateArgs<ExtArgs>>): Prisma__MentorMenteeRelationShipClient<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentorMenteeRelationShips.
     * @param {MentorMenteeRelationShipDeleteManyArgs} args - Arguments to filter MentorMenteeRelationShips to delete.
     * @example
     * // Delete a few MentorMenteeRelationShips
     * const { count } = await prisma.mentorMenteeRelationShip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorMenteeRelationShipDeleteManyArgs>(args?: SelectSubset<T, MentorMenteeRelationShipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorMenteeRelationShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorMenteeRelationShipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentorMenteeRelationShips
     * const mentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorMenteeRelationShipUpdateManyArgs>(args: SelectSubset<T, MentorMenteeRelationShipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorMenteeRelationShips and returns the data updated in the database.
     * @param {MentorMenteeRelationShipUpdateManyAndReturnArgs} args - Arguments to update many MentorMenteeRelationShips.
     * @example
     * // Update many MentorMenteeRelationShips
     * const mentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MentorMenteeRelationShips and only return the `menteeId`
     * const mentorMenteeRelationShipWithMenteeIdOnly = await prisma.mentorMenteeRelationShip.updateManyAndReturn({
     *   select: { menteeId: true },
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
    updateManyAndReturn<T extends MentorMenteeRelationShipUpdateManyAndReturnArgs>(args: SelectSubset<T, MentorMenteeRelationShipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MentorMenteeRelationShip.
     * @param {MentorMenteeRelationShipUpsertArgs} args - Arguments to update or create a MentorMenteeRelationShip.
     * @example
     * // Update or create a MentorMenteeRelationShip
     * const mentorMenteeRelationShip = await prisma.mentorMenteeRelationShip.upsert({
     *   create: {
     *     // ... data to create a MentorMenteeRelationShip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentorMenteeRelationShip we want to update
     *   }
     * })
     */
    upsert<T extends MentorMenteeRelationShipUpsertArgs>(args: SelectSubset<T, MentorMenteeRelationShipUpsertArgs<ExtArgs>>): Prisma__MentorMenteeRelationShipClient<$Result.GetResult<Prisma.$MentorMenteeRelationShipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentorMenteeRelationShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorMenteeRelationShipCountArgs} args - Arguments to filter MentorMenteeRelationShips to count.
     * @example
     * // Count the number of MentorMenteeRelationShips
     * const count = await prisma.mentorMenteeRelationShip.count({
     *   where: {
     *     // ... the filter for the MentorMenteeRelationShips we want to count
     *   }
     * })
    **/
    count<T extends MentorMenteeRelationShipCountArgs>(
      args?: Subset<T, MentorMenteeRelationShipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorMenteeRelationShipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentorMenteeRelationShip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorMenteeRelationShipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MentorMenteeRelationShipAggregateArgs>(args: Subset<T, MentorMenteeRelationShipAggregateArgs>): Prisma.PrismaPromise<GetMentorMenteeRelationShipAggregateType<T>>

    /**
     * Group by MentorMenteeRelationShip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorMenteeRelationShipGroupByArgs} args - Group by arguments.
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
      T extends MentorMenteeRelationShipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorMenteeRelationShipGroupByArgs['orderBy'] }
        : { orderBy?: MentorMenteeRelationShipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MentorMenteeRelationShipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorMenteeRelationShipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentorMenteeRelationShip model
   */
  readonly fields: MentorMenteeRelationShipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentorMenteeRelationShip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorMenteeRelationShipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentee<T extends MenteeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenteeDefaultArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends MentorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MentorDefaultArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MentorMenteeRelationShip model
   */
  interface MentorMenteeRelationShipFieldRefs {
    readonly menteeId: FieldRef<"MentorMenteeRelationShip", 'Int'>
    readonly mentorId: FieldRef<"MentorMenteeRelationShip", 'Int'>
    readonly createdAt: FieldRef<"MentorMenteeRelationShip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MentorMenteeRelationShip findUnique
   */
  export type MentorMenteeRelationShipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    /**
     * Filter, which MentorMenteeRelationShip to fetch.
     */
    where: MentorMenteeRelationShipWhereUniqueInput
  }

  /**
   * MentorMenteeRelationShip findUniqueOrThrow
   */
  export type MentorMenteeRelationShipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    /**
     * Filter, which MentorMenteeRelationShip to fetch.
     */
    where: MentorMenteeRelationShipWhereUniqueInput
  }

  /**
   * MentorMenteeRelationShip findFirst
   */
  export type MentorMenteeRelationShipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    /**
     * Filter, which MentorMenteeRelationShip to fetch.
     */
    where?: MentorMenteeRelationShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorMenteeRelationShips to fetch.
     */
    orderBy?: MentorMenteeRelationShipOrderByWithRelationInput | MentorMenteeRelationShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorMenteeRelationShips.
     */
    cursor?: MentorMenteeRelationShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorMenteeRelationShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorMenteeRelationShips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorMenteeRelationShips.
     */
    distinct?: MentorMenteeRelationShipScalarFieldEnum | MentorMenteeRelationShipScalarFieldEnum[]
  }

  /**
   * MentorMenteeRelationShip findFirstOrThrow
   */
  export type MentorMenteeRelationShipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    /**
     * Filter, which MentorMenteeRelationShip to fetch.
     */
    where?: MentorMenteeRelationShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorMenteeRelationShips to fetch.
     */
    orderBy?: MentorMenteeRelationShipOrderByWithRelationInput | MentorMenteeRelationShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorMenteeRelationShips.
     */
    cursor?: MentorMenteeRelationShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorMenteeRelationShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorMenteeRelationShips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorMenteeRelationShips.
     */
    distinct?: MentorMenteeRelationShipScalarFieldEnum | MentorMenteeRelationShipScalarFieldEnum[]
  }

  /**
   * MentorMenteeRelationShip findMany
   */
  export type MentorMenteeRelationShipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    /**
     * Filter, which MentorMenteeRelationShips to fetch.
     */
    where?: MentorMenteeRelationShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorMenteeRelationShips to fetch.
     */
    orderBy?: MentorMenteeRelationShipOrderByWithRelationInput | MentorMenteeRelationShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentorMenteeRelationShips.
     */
    cursor?: MentorMenteeRelationShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorMenteeRelationShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorMenteeRelationShips.
     */
    skip?: number
    distinct?: MentorMenteeRelationShipScalarFieldEnum | MentorMenteeRelationShipScalarFieldEnum[]
  }

  /**
   * MentorMenteeRelationShip create
   */
  export type MentorMenteeRelationShipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    /**
     * The data needed to create a MentorMenteeRelationShip.
     */
    data: XOR<MentorMenteeRelationShipCreateInput, MentorMenteeRelationShipUncheckedCreateInput>
  }

  /**
   * MentorMenteeRelationShip createMany
   */
  export type MentorMenteeRelationShipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentorMenteeRelationShips.
     */
    data: MentorMenteeRelationShipCreateManyInput | MentorMenteeRelationShipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentorMenteeRelationShip createManyAndReturn
   */
  export type MentorMenteeRelationShipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * The data used to create many MentorMenteeRelationShips.
     */
    data: MentorMenteeRelationShipCreateManyInput | MentorMenteeRelationShipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorMenteeRelationShip update
   */
  export type MentorMenteeRelationShipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    /**
     * The data needed to update a MentorMenteeRelationShip.
     */
    data: XOR<MentorMenteeRelationShipUpdateInput, MentorMenteeRelationShipUncheckedUpdateInput>
    /**
     * Choose, which MentorMenteeRelationShip to update.
     */
    where: MentorMenteeRelationShipWhereUniqueInput
  }

  /**
   * MentorMenteeRelationShip updateMany
   */
  export type MentorMenteeRelationShipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentorMenteeRelationShips.
     */
    data: XOR<MentorMenteeRelationShipUpdateManyMutationInput, MentorMenteeRelationShipUncheckedUpdateManyInput>
    /**
     * Filter which MentorMenteeRelationShips to update
     */
    where?: MentorMenteeRelationShipWhereInput
    /**
     * Limit how many MentorMenteeRelationShips to update.
     */
    limit?: number
  }

  /**
   * MentorMenteeRelationShip updateManyAndReturn
   */
  export type MentorMenteeRelationShipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * The data used to update MentorMenteeRelationShips.
     */
    data: XOR<MentorMenteeRelationShipUpdateManyMutationInput, MentorMenteeRelationShipUncheckedUpdateManyInput>
    /**
     * Filter which MentorMenteeRelationShips to update
     */
    where?: MentorMenteeRelationShipWhereInput
    /**
     * Limit how many MentorMenteeRelationShips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorMenteeRelationShip upsert
   */
  export type MentorMenteeRelationShipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    /**
     * The filter to search for the MentorMenteeRelationShip to update in case it exists.
     */
    where: MentorMenteeRelationShipWhereUniqueInput
    /**
     * In case the MentorMenteeRelationShip found by the `where` argument doesn't exist, create a new MentorMenteeRelationShip with this data.
     */
    create: XOR<MentorMenteeRelationShipCreateInput, MentorMenteeRelationShipUncheckedCreateInput>
    /**
     * In case the MentorMenteeRelationShip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorMenteeRelationShipUpdateInput, MentorMenteeRelationShipUncheckedUpdateInput>
  }

  /**
   * MentorMenteeRelationShip delete
   */
  export type MentorMenteeRelationShipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
    /**
     * Filter which MentorMenteeRelationShip to delete.
     */
    where: MentorMenteeRelationShipWhereUniqueInput
  }

  /**
   * MentorMenteeRelationShip deleteMany
   */
  export type MentorMenteeRelationShipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorMenteeRelationShips to delete
     */
    where?: MentorMenteeRelationShipWhereInput
    /**
     * Limit how many MentorMenteeRelationShips to delete.
     */
    limit?: number
  }

  /**
   * MentorMenteeRelationShip without action
   */
  export type MentorMenteeRelationShipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorMenteeRelationShip
     */
    select?: MentorMenteeRelationShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorMenteeRelationShip
     */
    omit?: MentorMenteeRelationShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorMenteeRelationShipInclude<ExtArgs> | null
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


  export const MenteeScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    age: 'age',
    email: 'email',
    phone_number: 'phone_number',
    password: 'password',
    location: 'location',
    updateAt: 'updateAt',
    last_login: 'last_login',
    ratings: 'ratings',
    experience: 'experience',
    bio: 'bio',
    joined: 'joined',
    goals: 'goals'
  };

  export type MenteeScalarFieldEnum = (typeof MenteeScalarFieldEnum)[keyof typeof MenteeScalarFieldEnum]


  export const MentorScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    age: 'age',
    experience: 'experience',
    email: 'email',
    phone_number: 'phone_number',
    password: 'password',
    location: 'location',
    joined: 'joined',
    ratings: 'ratings',
    updateAt: 'updateAt',
    last_login: 'last_login',
    expertise: 'expertise',
    bio: 'bio'
  };

  export type MentorScalarFieldEnum = (typeof MentorScalarFieldEnum)[keyof typeof MentorScalarFieldEnum]


  export const MentorMenteeRelationShipScalarFieldEnum: {
    menteeId: 'menteeId',
    mentorId: 'mentorId',
    createdAt: 'createdAt'
  };

  export type MentorMenteeRelationShipScalarFieldEnum = (typeof MentorMenteeRelationShipScalarFieldEnum)[keyof typeof MentorMenteeRelationShipScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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


  export type MenteeWhereInput = {
    AND?: MenteeWhereInput | MenteeWhereInput[]
    OR?: MenteeWhereInput[]
    NOT?: MenteeWhereInput | MenteeWhereInput[]
    id?: IntFilter<"Mentee"> | number
    first_name?: StringFilter<"Mentee"> | string
    last_name?: StringFilter<"Mentee"> | string
    age?: IntFilter<"Mentee"> | number
    email?: StringFilter<"Mentee"> | string
    phone_number?: StringFilter<"Mentee"> | string
    password?: StringFilter<"Mentee"> | string
    location?: StringFilter<"Mentee"> | string
    updateAt?: DateTimeFilter<"Mentee"> | Date | string
    last_login?: DateTimeFilter<"Mentee"> | Date | string
    ratings?: IntFilter<"Mentee"> | number
    experience?: StringNullableFilter<"Mentee"> | string | null
    bio?: StringFilter<"Mentee"> | string
    joined?: DateTimeFilter<"Mentee"> | Date | string
    goals?: StringNullableListFilter<"Mentee">
    mentor?: MentorMenteeRelationShipListRelationFilter
  }

  export type MenteeOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    ratings?: SortOrder
    experience?: SortOrderInput | SortOrder
    bio?: SortOrder
    joined?: SortOrder
    goals?: SortOrder
    mentor?: MentorMenteeRelationShipOrderByRelationAggregateInput
  }

  export type MenteeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone_number?: string
    AND?: MenteeWhereInput | MenteeWhereInput[]
    OR?: MenteeWhereInput[]
    NOT?: MenteeWhereInput | MenteeWhereInput[]
    first_name?: StringFilter<"Mentee"> | string
    last_name?: StringFilter<"Mentee"> | string
    age?: IntFilter<"Mentee"> | number
    password?: StringFilter<"Mentee"> | string
    location?: StringFilter<"Mentee"> | string
    updateAt?: DateTimeFilter<"Mentee"> | Date | string
    last_login?: DateTimeFilter<"Mentee"> | Date | string
    ratings?: IntFilter<"Mentee"> | number
    experience?: StringNullableFilter<"Mentee"> | string | null
    bio?: StringFilter<"Mentee"> | string
    joined?: DateTimeFilter<"Mentee"> | Date | string
    goals?: StringNullableListFilter<"Mentee">
    mentor?: MentorMenteeRelationShipListRelationFilter
  }, "id" | "email" | "phone_number">

  export type MenteeOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    ratings?: SortOrder
    experience?: SortOrderInput | SortOrder
    bio?: SortOrder
    joined?: SortOrder
    goals?: SortOrder
    _count?: MenteeCountOrderByAggregateInput
    _avg?: MenteeAvgOrderByAggregateInput
    _max?: MenteeMaxOrderByAggregateInput
    _min?: MenteeMinOrderByAggregateInput
    _sum?: MenteeSumOrderByAggregateInput
  }

  export type MenteeScalarWhereWithAggregatesInput = {
    AND?: MenteeScalarWhereWithAggregatesInput | MenteeScalarWhereWithAggregatesInput[]
    OR?: MenteeScalarWhereWithAggregatesInput[]
    NOT?: MenteeScalarWhereWithAggregatesInput | MenteeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mentee"> | number
    first_name?: StringWithAggregatesFilter<"Mentee"> | string
    last_name?: StringWithAggregatesFilter<"Mentee"> | string
    age?: IntWithAggregatesFilter<"Mentee"> | number
    email?: StringWithAggregatesFilter<"Mentee"> | string
    phone_number?: StringWithAggregatesFilter<"Mentee"> | string
    password?: StringWithAggregatesFilter<"Mentee"> | string
    location?: StringWithAggregatesFilter<"Mentee"> | string
    updateAt?: DateTimeWithAggregatesFilter<"Mentee"> | Date | string
    last_login?: DateTimeWithAggregatesFilter<"Mentee"> | Date | string
    ratings?: IntWithAggregatesFilter<"Mentee"> | number
    experience?: StringNullableWithAggregatesFilter<"Mentee"> | string | null
    bio?: StringWithAggregatesFilter<"Mentee"> | string
    joined?: DateTimeWithAggregatesFilter<"Mentee"> | Date | string
    goals?: StringNullableListFilter<"Mentee">
  }

  export type MentorWhereInput = {
    AND?: MentorWhereInput | MentorWhereInput[]
    OR?: MentorWhereInput[]
    NOT?: MentorWhereInput | MentorWhereInput[]
    id?: IntFilter<"Mentor"> | number
    first_name?: StringFilter<"Mentor"> | string
    last_name?: StringFilter<"Mentor"> | string
    age?: IntFilter<"Mentor"> | number
    experience?: StringNullableListFilter<"Mentor">
    email?: StringFilter<"Mentor"> | string
    phone_number?: StringFilter<"Mentor"> | string
    password?: StringFilter<"Mentor"> | string
    location?: StringFilter<"Mentor"> | string
    joined?: DateTimeFilter<"Mentor"> | Date | string
    ratings?: IntFilter<"Mentor"> | number
    updateAt?: DateTimeFilter<"Mentor"> | Date | string
    last_login?: DateTimeFilter<"Mentor"> | Date | string
    expertise?: StringNullableListFilter<"Mentor">
    bio?: StringFilter<"Mentor"> | string
    mentee?: MentorMenteeRelationShipListRelationFilter
  }

  export type MentorOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    experience?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    joined?: SortOrder
    ratings?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    expertise?: SortOrder
    bio?: SortOrder
    mentee?: MentorMenteeRelationShipOrderByRelationAggregateInput
  }

  export type MentorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone_number?: string
    AND?: MentorWhereInput | MentorWhereInput[]
    OR?: MentorWhereInput[]
    NOT?: MentorWhereInput | MentorWhereInput[]
    first_name?: StringFilter<"Mentor"> | string
    last_name?: StringFilter<"Mentor"> | string
    age?: IntFilter<"Mentor"> | number
    experience?: StringNullableListFilter<"Mentor">
    password?: StringFilter<"Mentor"> | string
    location?: StringFilter<"Mentor"> | string
    joined?: DateTimeFilter<"Mentor"> | Date | string
    ratings?: IntFilter<"Mentor"> | number
    updateAt?: DateTimeFilter<"Mentor"> | Date | string
    last_login?: DateTimeFilter<"Mentor"> | Date | string
    expertise?: StringNullableListFilter<"Mentor">
    bio?: StringFilter<"Mentor"> | string
    mentee?: MentorMenteeRelationShipListRelationFilter
  }, "id" | "email" | "phone_number">

  export type MentorOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    experience?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    joined?: SortOrder
    ratings?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    expertise?: SortOrder
    bio?: SortOrder
    _count?: MentorCountOrderByAggregateInput
    _avg?: MentorAvgOrderByAggregateInput
    _max?: MentorMaxOrderByAggregateInput
    _min?: MentorMinOrderByAggregateInput
    _sum?: MentorSumOrderByAggregateInput
  }

  export type MentorScalarWhereWithAggregatesInput = {
    AND?: MentorScalarWhereWithAggregatesInput | MentorScalarWhereWithAggregatesInput[]
    OR?: MentorScalarWhereWithAggregatesInput[]
    NOT?: MentorScalarWhereWithAggregatesInput | MentorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mentor"> | number
    first_name?: StringWithAggregatesFilter<"Mentor"> | string
    last_name?: StringWithAggregatesFilter<"Mentor"> | string
    age?: IntWithAggregatesFilter<"Mentor"> | number
    experience?: StringNullableListFilter<"Mentor">
    email?: StringWithAggregatesFilter<"Mentor"> | string
    phone_number?: StringWithAggregatesFilter<"Mentor"> | string
    password?: StringWithAggregatesFilter<"Mentor"> | string
    location?: StringWithAggregatesFilter<"Mentor"> | string
    joined?: DateTimeWithAggregatesFilter<"Mentor"> | Date | string
    ratings?: IntWithAggregatesFilter<"Mentor"> | number
    updateAt?: DateTimeWithAggregatesFilter<"Mentor"> | Date | string
    last_login?: DateTimeWithAggregatesFilter<"Mentor"> | Date | string
    expertise?: StringNullableListFilter<"Mentor">
    bio?: StringWithAggregatesFilter<"Mentor"> | string
  }

  export type MentorMenteeRelationShipWhereInput = {
    AND?: MentorMenteeRelationShipWhereInput | MentorMenteeRelationShipWhereInput[]
    OR?: MentorMenteeRelationShipWhereInput[]
    NOT?: MentorMenteeRelationShipWhereInput | MentorMenteeRelationShipWhereInput[]
    menteeId?: IntFilter<"MentorMenteeRelationShip"> | number
    mentorId?: IntFilter<"MentorMenteeRelationShip"> | number
    createdAt?: DateTimeFilter<"MentorMenteeRelationShip"> | Date | string
    mentee?: XOR<MenteeScalarRelationFilter, MenteeWhereInput>
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
  }

  export type MentorMenteeRelationShipOrderByWithRelationInput = {
    menteeId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    mentee?: MenteeOrderByWithRelationInput
    mentor?: MentorOrderByWithRelationInput
  }

  export type MentorMenteeRelationShipWhereUniqueInput = Prisma.AtLeast<{
    menteeId_mentorId?: MentorMenteeRelationShipMenteeIdMentorIdCompoundUniqueInput
    AND?: MentorMenteeRelationShipWhereInput | MentorMenteeRelationShipWhereInput[]
    OR?: MentorMenteeRelationShipWhereInput[]
    NOT?: MentorMenteeRelationShipWhereInput | MentorMenteeRelationShipWhereInput[]
    menteeId?: IntFilter<"MentorMenteeRelationShip"> | number
    mentorId?: IntFilter<"MentorMenteeRelationShip"> | number
    createdAt?: DateTimeFilter<"MentorMenteeRelationShip"> | Date | string
    mentee?: XOR<MenteeScalarRelationFilter, MenteeWhereInput>
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
  }, "menteeId_mentorId">

  export type MentorMenteeRelationShipOrderByWithAggregationInput = {
    menteeId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    _count?: MentorMenteeRelationShipCountOrderByAggregateInput
    _avg?: MentorMenteeRelationShipAvgOrderByAggregateInput
    _max?: MentorMenteeRelationShipMaxOrderByAggregateInput
    _min?: MentorMenteeRelationShipMinOrderByAggregateInput
    _sum?: MentorMenteeRelationShipSumOrderByAggregateInput
  }

  export type MentorMenteeRelationShipScalarWhereWithAggregatesInput = {
    AND?: MentorMenteeRelationShipScalarWhereWithAggregatesInput | MentorMenteeRelationShipScalarWhereWithAggregatesInput[]
    OR?: MentorMenteeRelationShipScalarWhereWithAggregatesInput[]
    NOT?: MentorMenteeRelationShipScalarWhereWithAggregatesInput | MentorMenteeRelationShipScalarWhereWithAggregatesInput[]
    menteeId?: IntWithAggregatesFilter<"MentorMenteeRelationShip"> | number
    mentorId?: IntWithAggregatesFilter<"MentorMenteeRelationShip"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MentorMenteeRelationShip"> | Date | string
  }

  export type MenteeCreateInput = {
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    experience?: string | null
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    mentor?: MentorMenteeRelationShipCreateNestedManyWithoutMenteeInput
  }

  export type MenteeUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    experience?: string | null
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    mentor?: MentorMenteeRelationShipUncheckedCreateNestedManyWithoutMenteeInput
  }

  export type MenteeUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    mentor?: MentorMenteeRelationShipUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    mentor?: MentorMenteeRelationShipUncheckedUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    experience?: string | null
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
  }

  export type MenteeUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
  }

  export type MenteeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
  }

  export type MentorCreateInput = {
    first_name: string
    last_name: string
    age?: number
    experience?: MentorCreateexperienceInput | string[]
    email: string
    phone_number: string
    password: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    mentee?: MentorMenteeRelationShipCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    experience?: MentorCreateexperienceInput | string[]
    email: string
    phone_number: string
    password: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    mentee?: MentorMenteeRelationShipUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    experience?: MentorUpdateexperienceInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    mentee?: MentorMenteeRelationShipUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    experience?: MentorUpdateexperienceInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    mentee?: MentorMenteeRelationShipUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MentorCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    experience?: MentorCreateexperienceInput | string[]
    email: string
    phone_number: string
    password: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
  }

  export type MentorUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    experience?: MentorUpdateexperienceInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type MentorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    experience?: MentorUpdateexperienceInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type MentorMenteeRelationShipCreateInput = {
    createdAt?: Date | string
    mentee: MenteeCreateNestedOneWithoutMentorInput
    mentor: MentorCreateNestedOneWithoutMenteeInput
  }

  export type MentorMenteeRelationShipUncheckedCreateInput = {
    menteeId: number
    mentorId: number
    createdAt?: Date | string
  }

  export type MentorMenteeRelationShipUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentee?: MenteeUpdateOneRequiredWithoutMentorNestedInput
    mentor?: MentorUpdateOneRequiredWithoutMenteeNestedInput
  }

  export type MentorMenteeRelationShipUncheckedUpdateInput = {
    menteeId?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorMenteeRelationShipCreateManyInput = {
    menteeId: number
    mentorId: number
    createdAt?: Date | string
  }

  export type MentorMenteeRelationShipUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorMenteeRelationShipUncheckedUpdateManyInput = {
    menteeId?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MentorMenteeRelationShipListRelationFilter = {
    every?: MentorMenteeRelationShipWhereInput
    some?: MentorMenteeRelationShipWhereInput
    none?: MentorMenteeRelationShipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MentorMenteeRelationShipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenteeCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    ratings?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    joined?: SortOrder
    goals?: SortOrder
  }

  export type MenteeAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    ratings?: SortOrder
  }

  export type MenteeMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    ratings?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    joined?: SortOrder
  }

  export type MenteeMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    ratings?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    joined?: SortOrder
  }

  export type MenteeSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    ratings?: SortOrder
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

  export type MentorCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    experience?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    joined?: SortOrder
    ratings?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    expertise?: SortOrder
    bio?: SortOrder
  }

  export type MentorAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    ratings?: SortOrder
  }

  export type MentorMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    joined?: SortOrder
    ratings?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    bio?: SortOrder
  }

  export type MentorMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    joined?: SortOrder
    ratings?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    bio?: SortOrder
  }

  export type MentorSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    ratings?: SortOrder
  }

  export type MenteeScalarRelationFilter = {
    is?: MenteeWhereInput
    isNot?: MenteeWhereInput
  }

  export type MentorScalarRelationFilter = {
    is?: MentorWhereInput
    isNot?: MentorWhereInput
  }

  export type MentorMenteeRelationShipMenteeIdMentorIdCompoundUniqueInput = {
    menteeId: number
    mentorId: number
  }

  export type MentorMenteeRelationShipCountOrderByAggregateInput = {
    menteeId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MentorMenteeRelationShipAvgOrderByAggregateInput = {
    menteeId?: SortOrder
    mentorId?: SortOrder
  }

  export type MentorMenteeRelationShipMaxOrderByAggregateInput = {
    menteeId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MentorMenteeRelationShipMinOrderByAggregateInput = {
    menteeId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MentorMenteeRelationShipSumOrderByAggregateInput = {
    menteeId?: SortOrder
    mentorId?: SortOrder
  }

  export type MenteeCreategoalsInput = {
    set: string[]
  }

  export type MentorMenteeRelationShipCreateNestedManyWithoutMenteeInput = {
    create?: XOR<MentorMenteeRelationShipCreateWithoutMenteeInput, MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput> | MentorMenteeRelationShipCreateWithoutMenteeInput[] | MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorMenteeRelationShipCreateOrConnectWithoutMenteeInput | MentorMenteeRelationShipCreateOrConnectWithoutMenteeInput[]
    createMany?: MentorMenteeRelationShipCreateManyMenteeInputEnvelope
    connect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
  }

  export type MentorMenteeRelationShipUncheckedCreateNestedManyWithoutMenteeInput = {
    create?: XOR<MentorMenteeRelationShipCreateWithoutMenteeInput, MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput> | MentorMenteeRelationShipCreateWithoutMenteeInput[] | MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorMenteeRelationShipCreateOrConnectWithoutMenteeInput | MentorMenteeRelationShipCreateOrConnectWithoutMenteeInput[]
    createMany?: MentorMenteeRelationShipCreateManyMenteeInputEnvelope
    connect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MenteeUpdategoalsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MentorMenteeRelationShipUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<MentorMenteeRelationShipCreateWithoutMenteeInput, MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput> | MentorMenteeRelationShipCreateWithoutMenteeInput[] | MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorMenteeRelationShipCreateOrConnectWithoutMenteeInput | MentorMenteeRelationShipCreateOrConnectWithoutMenteeInput[]
    upsert?: MentorMenteeRelationShipUpsertWithWhereUniqueWithoutMenteeInput | MentorMenteeRelationShipUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: MentorMenteeRelationShipCreateManyMenteeInputEnvelope
    set?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    disconnect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    delete?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    connect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    update?: MentorMenteeRelationShipUpdateWithWhereUniqueWithoutMenteeInput | MentorMenteeRelationShipUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: MentorMenteeRelationShipUpdateManyWithWhereWithoutMenteeInput | MentorMenteeRelationShipUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: MentorMenteeRelationShipScalarWhereInput | MentorMenteeRelationShipScalarWhereInput[]
  }

  export type MentorMenteeRelationShipUncheckedUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<MentorMenteeRelationShipCreateWithoutMenteeInput, MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput> | MentorMenteeRelationShipCreateWithoutMenteeInput[] | MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorMenteeRelationShipCreateOrConnectWithoutMenteeInput | MentorMenteeRelationShipCreateOrConnectWithoutMenteeInput[]
    upsert?: MentorMenteeRelationShipUpsertWithWhereUniqueWithoutMenteeInput | MentorMenteeRelationShipUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: MentorMenteeRelationShipCreateManyMenteeInputEnvelope
    set?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    disconnect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    delete?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    connect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    update?: MentorMenteeRelationShipUpdateWithWhereUniqueWithoutMenteeInput | MentorMenteeRelationShipUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: MentorMenteeRelationShipUpdateManyWithWhereWithoutMenteeInput | MentorMenteeRelationShipUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: MentorMenteeRelationShipScalarWhereInput | MentorMenteeRelationShipScalarWhereInput[]
  }

  export type MentorCreateexperienceInput = {
    set: string[]
  }

  export type MentorCreateexpertiseInput = {
    set: string[]
  }

  export type MentorMenteeRelationShipCreateNestedManyWithoutMentorInput = {
    create?: XOR<MentorMenteeRelationShipCreateWithoutMentorInput, MentorMenteeRelationShipUncheckedCreateWithoutMentorInput> | MentorMenteeRelationShipCreateWithoutMentorInput[] | MentorMenteeRelationShipUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorMenteeRelationShipCreateOrConnectWithoutMentorInput | MentorMenteeRelationShipCreateOrConnectWithoutMentorInput[]
    createMany?: MentorMenteeRelationShipCreateManyMentorInputEnvelope
    connect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
  }

  export type MentorMenteeRelationShipUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<MentorMenteeRelationShipCreateWithoutMentorInput, MentorMenteeRelationShipUncheckedCreateWithoutMentorInput> | MentorMenteeRelationShipCreateWithoutMentorInput[] | MentorMenteeRelationShipUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorMenteeRelationShipCreateOrConnectWithoutMentorInput | MentorMenteeRelationShipCreateOrConnectWithoutMentorInput[]
    createMany?: MentorMenteeRelationShipCreateManyMentorInputEnvelope
    connect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
  }

  export type MentorUpdateexperienceInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MentorUpdateexpertiseInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MentorMenteeRelationShipUpdateManyWithoutMentorNestedInput = {
    create?: XOR<MentorMenteeRelationShipCreateWithoutMentorInput, MentorMenteeRelationShipUncheckedCreateWithoutMentorInput> | MentorMenteeRelationShipCreateWithoutMentorInput[] | MentorMenteeRelationShipUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorMenteeRelationShipCreateOrConnectWithoutMentorInput | MentorMenteeRelationShipCreateOrConnectWithoutMentorInput[]
    upsert?: MentorMenteeRelationShipUpsertWithWhereUniqueWithoutMentorInput | MentorMenteeRelationShipUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: MentorMenteeRelationShipCreateManyMentorInputEnvelope
    set?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    disconnect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    delete?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    connect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    update?: MentorMenteeRelationShipUpdateWithWhereUniqueWithoutMentorInput | MentorMenteeRelationShipUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: MentorMenteeRelationShipUpdateManyWithWhereWithoutMentorInput | MentorMenteeRelationShipUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: MentorMenteeRelationShipScalarWhereInput | MentorMenteeRelationShipScalarWhereInput[]
  }

  export type MentorMenteeRelationShipUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<MentorMenteeRelationShipCreateWithoutMentorInput, MentorMenteeRelationShipUncheckedCreateWithoutMentorInput> | MentorMenteeRelationShipCreateWithoutMentorInput[] | MentorMenteeRelationShipUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorMenteeRelationShipCreateOrConnectWithoutMentorInput | MentorMenteeRelationShipCreateOrConnectWithoutMentorInput[]
    upsert?: MentorMenteeRelationShipUpsertWithWhereUniqueWithoutMentorInput | MentorMenteeRelationShipUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: MentorMenteeRelationShipCreateManyMentorInputEnvelope
    set?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    disconnect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    delete?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    connect?: MentorMenteeRelationShipWhereUniqueInput | MentorMenteeRelationShipWhereUniqueInput[]
    update?: MentorMenteeRelationShipUpdateWithWhereUniqueWithoutMentorInput | MentorMenteeRelationShipUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: MentorMenteeRelationShipUpdateManyWithWhereWithoutMentorInput | MentorMenteeRelationShipUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: MentorMenteeRelationShipScalarWhereInput | MentorMenteeRelationShipScalarWhereInput[]
  }

  export type MenteeCreateNestedOneWithoutMentorInput = {
    create?: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput>
    connectOrCreate?: MenteeCreateOrConnectWithoutMentorInput
    connect?: MenteeWhereUniqueInput
  }

  export type MentorCreateNestedOneWithoutMenteeInput = {
    create?: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput>
    connectOrCreate?: MentorCreateOrConnectWithoutMenteeInput
    connect?: MentorWhereUniqueInput
  }

  export type MenteeUpdateOneRequiredWithoutMentorNestedInput = {
    create?: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput>
    connectOrCreate?: MenteeCreateOrConnectWithoutMentorInput
    upsert?: MenteeUpsertWithoutMentorInput
    connect?: MenteeWhereUniqueInput
    update?: XOR<XOR<MenteeUpdateToOneWithWhereWithoutMentorInput, MenteeUpdateWithoutMentorInput>, MenteeUncheckedUpdateWithoutMentorInput>
  }

  export type MentorUpdateOneRequiredWithoutMenteeNestedInput = {
    create?: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput>
    connectOrCreate?: MentorCreateOrConnectWithoutMenteeInput
    upsert?: MentorUpsertWithoutMenteeInput
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutMenteeInput, MentorUpdateWithoutMenteeInput>, MentorUncheckedUpdateWithoutMenteeInput>
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

  export type MentorMenteeRelationShipCreateWithoutMenteeInput = {
    createdAt?: Date | string
    mentor: MentorCreateNestedOneWithoutMenteeInput
  }

  export type MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput = {
    mentorId: number
    createdAt?: Date | string
  }

  export type MentorMenteeRelationShipCreateOrConnectWithoutMenteeInput = {
    where: MentorMenteeRelationShipWhereUniqueInput
    create: XOR<MentorMenteeRelationShipCreateWithoutMenteeInput, MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput>
  }

  export type MentorMenteeRelationShipCreateManyMenteeInputEnvelope = {
    data: MentorMenteeRelationShipCreateManyMenteeInput | MentorMenteeRelationShipCreateManyMenteeInput[]
    skipDuplicates?: boolean
  }

  export type MentorMenteeRelationShipUpsertWithWhereUniqueWithoutMenteeInput = {
    where: MentorMenteeRelationShipWhereUniqueInput
    update: XOR<MentorMenteeRelationShipUpdateWithoutMenteeInput, MentorMenteeRelationShipUncheckedUpdateWithoutMenteeInput>
    create: XOR<MentorMenteeRelationShipCreateWithoutMenteeInput, MentorMenteeRelationShipUncheckedCreateWithoutMenteeInput>
  }

  export type MentorMenteeRelationShipUpdateWithWhereUniqueWithoutMenteeInput = {
    where: MentorMenteeRelationShipWhereUniqueInput
    data: XOR<MentorMenteeRelationShipUpdateWithoutMenteeInput, MentorMenteeRelationShipUncheckedUpdateWithoutMenteeInput>
  }

  export type MentorMenteeRelationShipUpdateManyWithWhereWithoutMenteeInput = {
    where: MentorMenteeRelationShipScalarWhereInput
    data: XOR<MentorMenteeRelationShipUpdateManyMutationInput, MentorMenteeRelationShipUncheckedUpdateManyWithoutMenteeInput>
  }

  export type MentorMenteeRelationShipScalarWhereInput = {
    AND?: MentorMenteeRelationShipScalarWhereInput | MentorMenteeRelationShipScalarWhereInput[]
    OR?: MentorMenteeRelationShipScalarWhereInput[]
    NOT?: MentorMenteeRelationShipScalarWhereInput | MentorMenteeRelationShipScalarWhereInput[]
    menteeId?: IntFilter<"MentorMenteeRelationShip"> | number
    mentorId?: IntFilter<"MentorMenteeRelationShip"> | number
    createdAt?: DateTimeFilter<"MentorMenteeRelationShip"> | Date | string
  }

  export type MentorMenteeRelationShipCreateWithoutMentorInput = {
    createdAt?: Date | string
    mentee: MenteeCreateNestedOneWithoutMentorInput
  }

  export type MentorMenteeRelationShipUncheckedCreateWithoutMentorInput = {
    menteeId: number
    createdAt?: Date | string
  }

  export type MentorMenteeRelationShipCreateOrConnectWithoutMentorInput = {
    where: MentorMenteeRelationShipWhereUniqueInput
    create: XOR<MentorMenteeRelationShipCreateWithoutMentorInput, MentorMenteeRelationShipUncheckedCreateWithoutMentorInput>
  }

  export type MentorMenteeRelationShipCreateManyMentorInputEnvelope = {
    data: MentorMenteeRelationShipCreateManyMentorInput | MentorMenteeRelationShipCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type MentorMenteeRelationShipUpsertWithWhereUniqueWithoutMentorInput = {
    where: MentorMenteeRelationShipWhereUniqueInput
    update: XOR<MentorMenteeRelationShipUpdateWithoutMentorInput, MentorMenteeRelationShipUncheckedUpdateWithoutMentorInput>
    create: XOR<MentorMenteeRelationShipCreateWithoutMentorInput, MentorMenteeRelationShipUncheckedCreateWithoutMentorInput>
  }

  export type MentorMenteeRelationShipUpdateWithWhereUniqueWithoutMentorInput = {
    where: MentorMenteeRelationShipWhereUniqueInput
    data: XOR<MentorMenteeRelationShipUpdateWithoutMentorInput, MentorMenteeRelationShipUncheckedUpdateWithoutMentorInput>
  }

  export type MentorMenteeRelationShipUpdateManyWithWhereWithoutMentorInput = {
    where: MentorMenteeRelationShipScalarWhereInput
    data: XOR<MentorMenteeRelationShipUpdateManyMutationInput, MentorMenteeRelationShipUncheckedUpdateManyWithoutMentorInput>
  }

  export type MenteeCreateWithoutMentorInput = {
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    experience?: string | null
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
  }

  export type MenteeUncheckedCreateWithoutMentorInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    experience?: string | null
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
  }

  export type MenteeCreateOrConnectWithoutMentorInput = {
    where: MenteeWhereUniqueInput
    create: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput>
  }

  export type MentorCreateWithoutMenteeInput = {
    first_name: string
    last_name: string
    age?: number
    experience?: MentorCreateexperienceInput | string[]
    email: string
    phone_number: string
    password: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
  }

  export type MentorUncheckedCreateWithoutMenteeInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    experience?: MentorCreateexperienceInput | string[]
    email: string
    phone_number: string
    password: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
  }

  export type MentorCreateOrConnectWithoutMenteeInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput>
  }

  export type MenteeUpsertWithoutMentorInput = {
    update: XOR<MenteeUpdateWithoutMentorInput, MenteeUncheckedUpdateWithoutMentorInput>
    create: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput>
    where?: MenteeWhereInput
  }

  export type MenteeUpdateToOneWithWhereWithoutMentorInput = {
    where?: MenteeWhereInput
    data: XOR<MenteeUpdateWithoutMentorInput, MenteeUncheckedUpdateWithoutMentorInput>
  }

  export type MenteeUpdateWithoutMentorInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
  }

  export type MenteeUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
  }

  export type MentorUpsertWithoutMenteeInput = {
    update: XOR<MentorUpdateWithoutMenteeInput, MentorUncheckedUpdateWithoutMenteeInput>
    create: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutMenteeInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutMenteeInput, MentorUncheckedUpdateWithoutMenteeInput>
  }

  export type MentorUpdateWithoutMenteeInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    experience?: MentorUpdateexperienceInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type MentorUncheckedUpdateWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    experience?: MentorUpdateexperienceInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type MentorMenteeRelationShipCreateManyMenteeInput = {
    mentorId: number
    createdAt?: Date | string
  }

  export type MentorMenteeRelationShipUpdateWithoutMenteeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: MentorUpdateOneRequiredWithoutMenteeNestedInput
  }

  export type MentorMenteeRelationShipUncheckedUpdateWithoutMenteeInput = {
    mentorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorMenteeRelationShipUncheckedUpdateManyWithoutMenteeInput = {
    mentorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorMenteeRelationShipCreateManyMentorInput = {
    menteeId: number
    createdAt?: Date | string
  }

  export type MentorMenteeRelationShipUpdateWithoutMentorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentee?: MenteeUpdateOneRequiredWithoutMentorNestedInput
  }

  export type MentorMenteeRelationShipUncheckedUpdateWithoutMentorInput = {
    menteeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorMenteeRelationShipUncheckedUpdateManyWithoutMentorInput = {
    menteeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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