
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
 * Model Achievements
 * 
 */
export type Achievements = $Result.DefaultSelection<Prisma.$AchievementsPayload>
/**
 * Model conversations
 * 
 */
export type conversations = $Result.DefaultSelection<Prisma.$conversationsPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model skills
 * 
 */
export type skills = $Result.DefaultSelection<Prisma.$skillsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SessionStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  NO_SHOW: 'NO_SHOW'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

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
   * `prisma.achievements`: Exposes CRUD operations for the **Achievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievements.findMany()
    * ```
    */
  get achievements(): Prisma.AchievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.conversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.skillsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Achievements: 'Achievements',
    conversations: 'conversations',
    messages: 'messages',
    sessions: 'sessions',
    skills: 'skills'
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
      modelProps: "mentee" | "mentor" | "achievements" | "conversations" | "messages" | "sessions" | "skills"
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
      Achievements: {
        payload: Prisma.$AchievementsPayload<ExtArgs>
        fields: Prisma.AchievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          findFirst: {
            args: Prisma.AchievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          findMany: {
            args: Prisma.AchievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>[]
          }
          create: {
            args: Prisma.AchievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          createMany: {
            args: Prisma.AchievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>[]
          }
          delete: {
            args: Prisma.AchievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          update: {
            args: Prisma.AchievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          deleteMany: {
            args: Prisma.AchievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>[]
          }
          upsert: {
            args: Prisma.AchievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          aggregate: {
            args: Prisma.AchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievements>
          }
          groupBy: {
            args: Prisma.AchievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementsCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementsCountAggregateOutputType> | number
          }
        }
      }
      conversations: {
        payload: Prisma.$conversationsPayload<ExtArgs>
        fields: Prisma.conversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findFirst: {
            args: Prisma.conversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findMany: {
            args: Prisma.conversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          create: {
            args: Prisma.conversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          createMany: {
            args: Prisma.conversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.conversationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          delete: {
            args: Prisma.conversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          update: {
            args: Prisma.conversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          deleteMany: {
            args: Prisma.conversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.conversationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          upsert: {
            args: Prisma.conversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.conversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      skills: {
        payload: Prisma.$skillsPayload<ExtArgs>
        fields: Prisma.skillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          findFirst: {
            args: Prisma.skillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          findMany: {
            args: Prisma.skillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          create: {
            args: Prisma.skillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          createMany: {
            args: Prisma.skillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          delete: {
            args: Prisma.skillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          update: {
            args: Prisma.skillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          deleteMany: {
            args: Prisma.skillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          upsert: {
            args: Prisma.skillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.skillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillsCountArgs<ExtArgs>
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
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
    achievements?: AchievementsOmit
    conversations?: conversationsOmit
    messages?: messagesOmit
    sessions?: sessionsOmit
    skills?: skillsOmit
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
    conversations: number
    sessions: number
    mentor: number
    skills: number
  }

  export type MenteeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | MenteeCountOutputTypeCountConversationsArgs
    sessions?: boolean | MenteeCountOutputTypeCountSessionsArgs
    mentor?: boolean | MenteeCountOutputTypeCountMentorArgs
    skills?: boolean | MenteeCountOutputTypeCountSkillsArgs
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
  export type MenteeCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
  }

  /**
   * MenteeCountOutputType without action
   */
  export type MenteeCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
  }

  /**
   * MenteeCountOutputType without action
   */
  export type MenteeCountOutputTypeCountMentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorWhereInput
  }

  /**
   * MenteeCountOutputType without action
   */
  export type MenteeCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillsWhereInput
  }


  /**
   * Count Type MentorCountOutputType
   */

  export type MentorCountOutputType = {
    conversations: number
    sessions: number
    mentee: number
  }

  export type MentorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | MentorCountOutputTypeCountConversationsArgs
    sessions?: boolean | MentorCountOutputTypeCountSessionsArgs
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
  export type MentorCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
  }

  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
  }

  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeCountMenteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenteeWhereInput
  }


  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    messages: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
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
    experience: number | null
  }

  export type MenteeSumAggregateOutputType = {
    id: number | null
    age: number | null
    ratings: number | null
    experience: number | null
  }

  export type MenteeMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    age: number | null
    gender: string | null
    email: string | null
    phone_number: string | null
    password: string | null
    location: string | null
    updateAt: Date | null
    last_login: Date | null
    ratings: number | null
    profile_picture: string | null
    supabaseId: string | null
    bio: string | null
    joined: Date | null
    experience: number | null
    Github: string | null
    Instagram: string | null
    LinkedIn: string | null
    Twitter: string | null
    Website: string | null
  }

  export type MenteeMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    age: number | null
    gender: string | null
    email: string | null
    phone_number: string | null
    password: string | null
    location: string | null
    updateAt: Date | null
    last_login: Date | null
    ratings: number | null
    profile_picture: string | null
    supabaseId: string | null
    bio: string | null
    joined: Date | null
    experience: number | null
    Github: string | null
    Instagram: string | null
    LinkedIn: string | null
    Twitter: string | null
    Website: string | null
  }

  export type MenteeCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    age: number
    gender: number
    email: number
    phone_number: number
    password: number
    location: number
    updateAt: number
    last_login: number
    ratings: number
    profile_picture: number
    supabaseId: number
    bio: number
    joined: number
    goals: number
    experience: number
    Github: number
    Instagram: number
    LinkedIn: number
    Twitter: number
    Website: number
    _all: number
  }


  export type MenteeAvgAggregateInputType = {
    id?: true
    age?: true
    ratings?: true
    experience?: true
  }

  export type MenteeSumAggregateInputType = {
    id?: true
    age?: true
    ratings?: true
    experience?: true
  }

  export type MenteeMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    gender?: true
    email?: true
    phone_number?: true
    password?: true
    location?: true
    updateAt?: true
    last_login?: true
    ratings?: true
    profile_picture?: true
    supabaseId?: true
    bio?: true
    joined?: true
    experience?: true
    Github?: true
    Instagram?: true
    LinkedIn?: true
    Twitter?: true
    Website?: true
  }

  export type MenteeMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    gender?: true
    email?: true
    phone_number?: true
    password?: true
    location?: true
    updateAt?: true
    last_login?: true
    ratings?: true
    profile_picture?: true
    supabaseId?: true
    bio?: true
    joined?: true
    experience?: true
    Github?: true
    Instagram?: true
    LinkedIn?: true
    Twitter?: true
    Website?: true
  }

  export type MenteeCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    gender?: true
    email?: true
    phone_number?: true
    password?: true
    location?: true
    updateAt?: true
    last_login?: true
    ratings?: true
    profile_picture?: true
    supabaseId?: true
    bio?: true
    joined?: true
    goals?: true
    experience?: true
    Github?: true
    Instagram?: true
    LinkedIn?: true
    Twitter?: true
    Website?: true
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
    gender: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt: Date
    last_login: Date
    ratings: number
    profile_picture: string
    supabaseId: string
    bio: string
    joined: Date
    goals: string[]
    experience: number
    Github: string | null
    Instagram: string | null
    LinkedIn: string | null
    Twitter: string | null
    Website: string | null
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
    gender?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    updateAt?: boolean
    last_login?: boolean
    ratings?: boolean
    profile_picture?: boolean
    supabaseId?: boolean
    bio?: boolean
    joined?: boolean
    goals?: boolean
    experience?: boolean
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
    conversations?: boolean | Mentee$conversationsArgs<ExtArgs>
    sessions?: boolean | Mentee$sessionsArgs<ExtArgs>
    mentor?: boolean | Mentee$mentorArgs<ExtArgs>
    skills?: boolean | Mentee$skillsArgs<ExtArgs>
    _count?: boolean | MenteeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentee"]>

  export type MenteeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    gender?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    updateAt?: boolean
    last_login?: boolean
    ratings?: boolean
    profile_picture?: boolean
    supabaseId?: boolean
    bio?: boolean
    joined?: boolean
    goals?: boolean
    experience?: boolean
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
  }, ExtArgs["result"]["mentee"]>

  export type MenteeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    gender?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    updateAt?: boolean
    last_login?: boolean
    ratings?: boolean
    profile_picture?: boolean
    supabaseId?: boolean
    bio?: boolean
    joined?: boolean
    goals?: boolean
    experience?: boolean
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
  }, ExtArgs["result"]["mentee"]>

  export type MenteeSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    gender?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    location?: boolean
    updateAt?: boolean
    last_login?: boolean
    ratings?: boolean
    profile_picture?: boolean
    supabaseId?: boolean
    bio?: boolean
    joined?: boolean
    goals?: boolean
    experience?: boolean
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
  }

  export type MenteeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "age" | "gender" | "email" | "phone_number" | "password" | "location" | "updateAt" | "last_login" | "ratings" | "profile_picture" | "supabaseId" | "bio" | "joined" | "goals" | "experience" | "Github" | "Instagram" | "LinkedIn" | "Twitter" | "Website", ExtArgs["result"]["mentee"]>
  export type MenteeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | Mentee$conversationsArgs<ExtArgs>
    sessions?: boolean | Mentee$sessionsArgs<ExtArgs>
    mentor?: boolean | Mentee$mentorArgs<ExtArgs>
    skills?: boolean | Mentee$skillsArgs<ExtArgs>
    _count?: boolean | MenteeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenteeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MenteeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MenteePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mentee"
    objects: {
      conversations: Prisma.$conversationsPayload<ExtArgs>[]
      sessions: Prisma.$sessionsPayload<ExtArgs>[]
      mentor: Prisma.$MentorPayload<ExtArgs>[]
      skills: Prisma.$skillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      age: number
      gender: string
      email: string
      phone_number: string
      password: string
      location: string
      updateAt: Date
      last_login: Date
      ratings: number
      profile_picture: string
      supabaseId: string
      bio: string
      joined: Date
      goals: string[]
      experience: number
      Github: string | null
      Instagram: string | null
      LinkedIn: string | null
      Twitter: string | null
      Website: string | null
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
    conversations<T extends Mentee$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Mentee$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Mentee$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Mentee$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentor<T extends Mentee$mentorArgs<ExtArgs> = {}>(args?: Subset<T, Mentee$mentorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends Mentee$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Mentee$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly gender: FieldRef<"Mentee", 'String'>
    readonly email: FieldRef<"Mentee", 'String'>
    readonly phone_number: FieldRef<"Mentee", 'String'>
    readonly password: FieldRef<"Mentee", 'String'>
    readonly location: FieldRef<"Mentee", 'String'>
    readonly updateAt: FieldRef<"Mentee", 'DateTime'>
    readonly last_login: FieldRef<"Mentee", 'DateTime'>
    readonly ratings: FieldRef<"Mentee", 'Int'>
    readonly profile_picture: FieldRef<"Mentee", 'String'>
    readonly supabaseId: FieldRef<"Mentee", 'String'>
    readonly bio: FieldRef<"Mentee", 'String'>
    readonly joined: FieldRef<"Mentee", 'DateTime'>
    readonly goals: FieldRef<"Mentee", 'String[]'>
    readonly experience: FieldRef<"Mentee", 'Int'>
    readonly Github: FieldRef<"Mentee", 'String'>
    readonly Instagram: FieldRef<"Mentee", 'String'>
    readonly LinkedIn: FieldRef<"Mentee", 'String'>
    readonly Twitter: FieldRef<"Mentee", 'String'>
    readonly Website: FieldRef<"Mentee", 'String'>
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
   * Mentee.conversations
   */
  export type Mentee$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    cursor?: conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Mentee.sessions
   */
  export type Mentee$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    cursor?: sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Mentee.mentor
   */
  export type Mentee$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: MentorWhereInput
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    cursor?: MentorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * Mentee.skills
   */
  export type Mentee$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    where?: skillsWhereInput
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    cursor?: skillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
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
    experience: number | null
  }

  export type MentorSumAggregateOutputType = {
    id: number | null
    age: number | null
    ratings: number | null
    experience: number | null
  }

  export type MentorMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    age: number | null
    email: string | null
    phone_number: string | null
    password: string | null
    supabaseId: string | null
    gender: string | null
    profile_picture: string | null
    location: string | null
    joined: Date | null
    ratings: number | null
    updateAt: Date | null
    last_login: Date | null
    bio: string | null
    experience: number | null
    Github: string | null
    Instagram: string | null
    LinkedIn: string | null
    Twitter: string | null
    Website: string | null
  }

  export type MentorMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    age: number | null
    email: string | null
    phone_number: string | null
    password: string | null
    supabaseId: string | null
    gender: string | null
    profile_picture: string | null
    location: string | null
    joined: Date | null
    ratings: number | null
    updateAt: Date | null
    last_login: Date | null
    bio: string | null
    experience: number | null
    Github: string | null
    Instagram: string | null
    LinkedIn: string | null
    Twitter: string | null
    Website: string | null
  }

  export type MentorCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    age: number
    email: number
    phone_number: number
    password: number
    supabaseId: number
    gender: number
    profile_picture: number
    location: number
    joined: number
    ratings: number
    updateAt: number
    last_login: number
    expertise: number
    bio: number
    experience: number
    Github: number
    Instagram: number
    LinkedIn: number
    Twitter: number
    Website: number
    _all: number
  }


  export type MentorAvgAggregateInputType = {
    id?: true
    age?: true
    ratings?: true
    experience?: true
  }

  export type MentorSumAggregateInputType = {
    id?: true
    age?: true
    ratings?: true
    experience?: true
  }

  export type MentorMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    email?: true
    phone_number?: true
    password?: true
    supabaseId?: true
    gender?: true
    profile_picture?: true
    location?: true
    joined?: true
    ratings?: true
    updateAt?: true
    last_login?: true
    bio?: true
    experience?: true
    Github?: true
    Instagram?: true
    LinkedIn?: true
    Twitter?: true
    Website?: true
  }

  export type MentorMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    email?: true
    phone_number?: true
    password?: true
    supabaseId?: true
    gender?: true
    profile_picture?: true
    location?: true
    joined?: true
    ratings?: true
    updateAt?: true
    last_login?: true
    bio?: true
    experience?: true
    Github?: true
    Instagram?: true
    LinkedIn?: true
    Twitter?: true
    Website?: true
  }

  export type MentorCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    age?: true
    email?: true
    phone_number?: true
    password?: true
    supabaseId?: true
    gender?: true
    profile_picture?: true
    location?: true
    joined?: true
    ratings?: true
    updateAt?: true
    last_login?: true
    expertise?: true
    bio?: true
    experience?: true
    Github?: true
    Instagram?: true
    LinkedIn?: true
    Twitter?: true
    Website?: true
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
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender: string
    profile_picture: string
    location: string
    joined: Date
    ratings: number
    updateAt: Date
    last_login: Date
    expertise: string[]
    bio: string
    experience: number
    Github: string | null
    Instagram: string | null
    LinkedIn: string
    Twitter: string | null
    Website: string | null
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
    email?: boolean
    phone_number?: boolean
    password?: boolean
    supabaseId?: boolean
    gender?: boolean
    profile_picture?: boolean
    location?: boolean
    joined?: boolean
    ratings?: boolean
    updateAt?: boolean
    last_login?: boolean
    expertise?: boolean
    bio?: boolean
    experience?: boolean
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
    Achievements?: boolean | Mentor$AchievementsArgs<ExtArgs>
    conversations?: boolean | Mentor$conversationsArgs<ExtArgs>
    sessions?: boolean | Mentor$sessionsArgs<ExtArgs>
    mentee?: boolean | Mentor$menteeArgs<ExtArgs>
    _count?: boolean | MentorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentor"]>

  export type MentorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    supabaseId?: boolean
    gender?: boolean
    profile_picture?: boolean
    location?: boolean
    joined?: boolean
    ratings?: boolean
    updateAt?: boolean
    last_login?: boolean
    expertise?: boolean
    bio?: boolean
    experience?: boolean
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
  }, ExtArgs["result"]["mentor"]>

  export type MentorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    supabaseId?: boolean
    gender?: boolean
    profile_picture?: boolean
    location?: boolean
    joined?: boolean
    ratings?: boolean
    updateAt?: boolean
    last_login?: boolean
    expertise?: boolean
    bio?: boolean
    experience?: boolean
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
  }, ExtArgs["result"]["mentor"]>

  export type MentorSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    supabaseId?: boolean
    gender?: boolean
    profile_picture?: boolean
    location?: boolean
    joined?: boolean
    ratings?: boolean
    updateAt?: boolean
    last_login?: boolean
    expertise?: boolean
    bio?: boolean
    experience?: boolean
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
  }

  export type MentorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "age" | "email" | "phone_number" | "password" | "supabaseId" | "gender" | "profile_picture" | "location" | "joined" | "ratings" | "updateAt" | "last_login" | "expertise" | "bio" | "experience" | "Github" | "Instagram" | "LinkedIn" | "Twitter" | "Website", ExtArgs["result"]["mentor"]>
  export type MentorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Achievements?: boolean | Mentor$AchievementsArgs<ExtArgs>
    conversations?: boolean | Mentor$conversationsArgs<ExtArgs>
    sessions?: boolean | Mentor$sessionsArgs<ExtArgs>
    mentee?: boolean | Mentor$menteeArgs<ExtArgs>
    _count?: boolean | MentorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MentorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MentorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mentor"
    objects: {
      Achievements: Prisma.$AchievementsPayload<ExtArgs> | null
      conversations: Prisma.$conversationsPayload<ExtArgs>[]
      sessions: Prisma.$sessionsPayload<ExtArgs>[]
      mentee: Prisma.$MenteePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      age: number
      email: string
      phone_number: string
      password: string
      supabaseId: string
      gender: string
      profile_picture: string
      location: string
      joined: Date
      ratings: number
      updateAt: Date
      last_login: Date
      expertise: string[]
      bio: string
      experience: number
      Github: string | null
      Instagram: string | null
      LinkedIn: string
      Twitter: string | null
      Website: string | null
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
    Achievements<T extends Mentor$AchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Mentor$AchievementsArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conversations<T extends Mentor$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Mentor$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Mentor$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Mentor$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentee<T extends Mentor$menteeArgs<ExtArgs> = {}>(args?: Subset<T, Mentor$menteeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"Mentor", 'String'>
    readonly phone_number: FieldRef<"Mentor", 'String'>
    readonly password: FieldRef<"Mentor", 'String'>
    readonly supabaseId: FieldRef<"Mentor", 'String'>
    readonly gender: FieldRef<"Mentor", 'String'>
    readonly profile_picture: FieldRef<"Mentor", 'String'>
    readonly location: FieldRef<"Mentor", 'String'>
    readonly joined: FieldRef<"Mentor", 'DateTime'>
    readonly ratings: FieldRef<"Mentor", 'Int'>
    readonly updateAt: FieldRef<"Mentor", 'DateTime'>
    readonly last_login: FieldRef<"Mentor", 'DateTime'>
    readonly expertise: FieldRef<"Mentor", 'String[]'>
    readonly bio: FieldRef<"Mentor", 'String'>
    readonly experience: FieldRef<"Mentor", 'Int'>
    readonly Github: FieldRef<"Mentor", 'String'>
    readonly Instagram: FieldRef<"Mentor", 'String'>
    readonly LinkedIn: FieldRef<"Mentor", 'String'>
    readonly Twitter: FieldRef<"Mentor", 'String'>
    readonly Website: FieldRef<"Mentor", 'String'>
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
   * Mentor.Achievements
   */
  export type Mentor$AchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    where?: AchievementsWhereInput
  }

  /**
   * Mentor.conversations
   */
  export type Mentor$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    cursor?: conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Mentor.sessions
   */
  export type Mentor$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    cursor?: sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Mentor.mentee
   */
  export type Mentor$menteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: MenteeWhereInput
    orderBy?: MenteeOrderByWithRelationInput | MenteeOrderByWithRelationInput[]
    cursor?: MenteeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenteeScalarFieldEnum | MenteeScalarFieldEnum[]
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
   * Model Achievements
   */

  export type AggregateAchievements = {
    _count: AchievementsCountAggregateOutputType | null
    _avg: AchievementsAvgAggregateOutputType | null
    _sum: AchievementsSumAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  export type AchievementsAvgAggregateOutputType = {
    id: number | null
  }

  export type AchievementsSumAggregateOutputType = {
    id: number | null
  }

  export type AchievementsMinAggregateOutputType = {
    id: number | null
    supabaseId: string | null
  }

  export type AchievementsMaxAggregateOutputType = {
    id: number | null
    supabaseId: string | null
  }

  export type AchievementsCountAggregateOutputType = {
    id: number
    supabaseId: number
    experience: number
    education: number
    accolades: number
    reviews: number
    _all: number
  }


  export type AchievementsAvgAggregateInputType = {
    id?: true
  }

  export type AchievementsSumAggregateInputType = {
    id?: true
  }

  export type AchievementsMinAggregateInputType = {
    id?: true
    supabaseId?: true
  }

  export type AchievementsMaxAggregateInputType = {
    id?: true
    supabaseId?: true
  }

  export type AchievementsCountAggregateInputType = {
    id?: true
    supabaseId?: true
    experience?: true
    education?: true
    accolades?: true
    reviews?: true
    _all?: true
  }

  export type AchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to aggregate.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementsMaxAggregateInputType
  }

  export type GetAchievementsAggregateType<T extends AchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievements[P]>
      : GetScalarType<T[P], AggregateAchievements[P]>
  }




  export type AchievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementsWhereInput
    orderBy?: AchievementsOrderByWithAggregationInput | AchievementsOrderByWithAggregationInput[]
    by: AchievementsScalarFieldEnum[] | AchievementsScalarFieldEnum
    having?: AchievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementsCountAggregateInputType | true
    _avg?: AchievementsAvgAggregateInputType
    _sum?: AchievementsSumAggregateInputType
    _min?: AchievementsMinAggregateInputType
    _max?: AchievementsMaxAggregateInputType
  }

  export type AchievementsGroupByOutputType = {
    id: number
    supabaseId: string
    experience: string[]
    education: string[]
    accolades: string[]
    reviews: string[]
    _count: AchievementsCountAggregateOutputType | null
    _avg: AchievementsAvgAggregateOutputType | null
    _sum: AchievementsSumAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  type GetAchievementsGroupByPayload<T extends AchievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
        }
      >
    >


  export type AchievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseId?: boolean
    experience?: boolean
    education?: boolean
    accolades?: boolean
    reviews?: boolean
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>

  export type AchievementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseId?: boolean
    experience?: boolean
    education?: boolean
    accolades?: boolean
    reviews?: boolean
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>

  export type AchievementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseId?: boolean
    experience?: boolean
    education?: boolean
    accolades?: boolean
    reviews?: boolean
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>

  export type AchievementsSelectScalar = {
    id?: boolean
    supabaseId?: boolean
    experience?: boolean
    education?: boolean
    accolades?: boolean
    reviews?: boolean
  }

  export type AchievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseId" | "experience" | "education" | "accolades" | "reviews", ExtArgs["result"]["achievements"]>
  export type AchievementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }
  export type AchievementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }
  export type AchievementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }

  export type $AchievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievements"
    objects: {
      mentor: Prisma.$MentorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supabaseId: string
      experience: string[]
      education: string[]
      accolades: string[]
      reviews: string[]
    }, ExtArgs["result"]["achievements"]>
    composites: {}
  }

  type AchievementsGetPayload<S extends boolean | null | undefined | AchievementsDefaultArgs> = $Result.GetResult<Prisma.$AchievementsPayload, S>

  type AchievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementsCountAggregateInputType | true
    }

  export interface AchievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievements'], meta: { name: 'Achievements' } }
    /**
     * Find zero or one Achievements that matches the filter.
     * @param {AchievementsFindUniqueArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementsFindUniqueArgs>(args: SelectSubset<T, AchievementsFindUniqueArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementsFindUniqueOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsFindFirstArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementsFindFirstArgs>(args?: SelectSubset<T, AchievementsFindFirstArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsFindFirstOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievements.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementsWithIdOnly = await prisma.achievements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementsFindManyArgs>(args?: SelectSubset<T, AchievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievements.
     * @param {AchievementsCreateArgs} args - Arguments to create a Achievements.
     * @example
     * // Create one Achievements
     * const Achievements = await prisma.achievements.create({
     *   data: {
     *     // ... data to create a Achievements
     *   }
     * })
     * 
     */
    create<T extends AchievementsCreateArgs>(args: SelectSubset<T, AchievementsCreateArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementsCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementsCreateManyArgs>(args?: SelectSubset<T, AchievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementsCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementsWithIdOnly = await prisma.achievements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementsCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievements.
     * @param {AchievementsDeleteArgs} args - Arguments to delete one Achievements.
     * @example
     * // Delete one Achievements
     * const Achievements = await prisma.achievements.delete({
     *   where: {
     *     // ... filter to delete one Achievements
     *   }
     * })
     * 
     */
    delete<T extends AchievementsDeleteArgs>(args: SelectSubset<T, AchievementsDeleteArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievements.
     * @param {AchievementsUpdateArgs} args - Arguments to update one Achievements.
     * @example
     * // Update one Achievements
     * const achievements = await prisma.achievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementsUpdateArgs>(args: SelectSubset<T, AchievementsUpdateArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementsDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementsDeleteManyArgs>(args?: SelectSubset<T, AchievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementsUpdateManyArgs>(args: SelectSubset<T, AchievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementsUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementsWithIdOnly = await prisma.achievements.updateManyAndReturn({
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
    updateManyAndReturn<T extends AchievementsUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievements.
     * @param {AchievementsUpsertArgs} args - Arguments to update or create a Achievements.
     * @example
     * // Update or create a Achievements
     * const achievements = await prisma.achievements.upsert({
     *   create: {
     *     // ... data to create a Achievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievements we want to update
     *   }
     * })
     */
    upsert<T extends AchievementsUpsertArgs>(args: SelectSubset<T, AchievementsUpsertArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievements.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementsCountArgs>(
      args?: Subset<T, AchievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementsAggregateArgs>(args: Subset<T, AchievementsAggregateArgs>): Prisma.PrismaPromise<GetAchievementsAggregateType<T>>

    /**
     * Group by Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsGroupByArgs} args - Group by arguments.
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
      T extends AchievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementsGroupByArgs['orderBy'] }
        : { orderBy?: AchievementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievements model
   */
  readonly fields: AchievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Achievements model
   */
  interface AchievementsFieldRefs {
    readonly id: FieldRef<"Achievements", 'Int'>
    readonly supabaseId: FieldRef<"Achievements", 'String'>
    readonly experience: FieldRef<"Achievements", 'String[]'>
    readonly education: FieldRef<"Achievements", 'String[]'>
    readonly accolades: FieldRef<"Achievements", 'String[]'>
    readonly reviews: FieldRef<"Achievements", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Achievements findUnique
   */
  export type AchievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements findUniqueOrThrow
   */
  export type AchievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements findFirst
   */
  export type AchievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * Achievements findFirstOrThrow
   */
  export type AchievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * Achievements findMany
   */
  export type AchievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * Achievements create
   */
  export type AchievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievements.
     */
    data: XOR<AchievementsCreateInput, AchievementsUncheckedCreateInput>
  }

  /**
   * Achievements createMany
   */
  export type AchievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementsCreateManyInput | AchievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievements createManyAndReturn
   */
  export type AchievementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementsCreateManyInput | AchievementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievements update
   */
  export type AchievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievements.
     */
    data: XOR<AchievementsUpdateInput, AchievementsUncheckedUpdateInput>
    /**
     * Choose, which Achievements to update.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements updateMany
   */
  export type AchievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementsUpdateManyMutationInput, AchievementsUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementsWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievements updateManyAndReturn
   */
  export type AchievementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementsUpdateManyMutationInput, AchievementsUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementsWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievements upsert
   */
  export type AchievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievements to update in case it exists.
     */
    where: AchievementsWhereUniqueInput
    /**
     * In case the Achievements found by the `where` argument doesn't exist, create a new Achievements with this data.
     */
    create: XOR<AchievementsCreateInput, AchievementsUncheckedCreateInput>
    /**
     * In case the Achievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementsUpdateInput, AchievementsUncheckedUpdateInput>
  }

  /**
   * Achievements delete
   */
  export type AchievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter which Achievements to delete.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements deleteMany
   */
  export type AchievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementsWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievements without action
   */
  export type AchievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
  }


  /**
   * Model conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _avg: ConversationsAvgAggregateOutputType | null
    _sum: ConversationsSumAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsAvgAggregateOutputType = {
    id: number | null
  }

  export type ConversationsSumAggregateOutputType = {
    id: number | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: number | null
    menteeId: string | null
    mentorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastMessage: string | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: number | null
    menteeId: string | null
    mentorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastMessage: string | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    menteeId: number
    mentorId: number
    createdAt: number
    updatedAt: number
    lastMessage: number
    _all: number
  }


  export type ConversationsAvgAggregateInputType = {
    id?: true
  }

  export type ConversationsSumAggregateInputType = {
    id?: true
  }

  export type ConversationsMinAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    createdAt?: true
    updatedAt?: true
    lastMessage?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    createdAt?: true
    updatedAt?: true
    lastMessage?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    createdAt?: true
    updatedAt?: true
    lastMessage?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to aggregate.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type conversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithAggregationInput | conversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: conversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _avg?: ConversationsAvgAggregateInputType
    _sum?: ConversationsSumAggregateInputType
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: number
    menteeId: string
    mentorId: string
    createdAt: Date
    updatedAt: Date
    lastMessage: string | null
    _count: ConversationsCountAggregateOutputType | null
    _avg: ConversationsAvgAggregateOutputType | null
    _sum: ConversationsSumAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends conversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type conversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectScalar = {
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean
  }

  export type conversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menteeId" | "mentorId" | "createdAt" | "updatedAt" | "lastMessage", ExtArgs["result"]["conversations"]>
  export type conversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type conversationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }
  export type conversationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }

  export type $conversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversations"
    objects: {
      mentee: Prisma.$MenteePayload<ExtArgs>
      mentor: Prisma.$MentorPayload<ExtArgs>
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menteeId: string
      mentorId: string
      createdAt: Date
      updatedAt: Date
      lastMessage: string | null
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type conversationsGetPayload<S extends boolean | null | undefined | conversationsDefaultArgs> = $Result.GetResult<Prisma.$conversationsPayload, S>

  type conversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface conversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversations'], meta: { name: 'conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {conversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversationsFindUniqueArgs>(args: SelectSubset<T, conversationsFindUniqueArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, conversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversationsFindFirstArgs>(args?: SelectSubset<T, conversationsFindFirstArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, conversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends conversationsFindManyArgs>(args?: SelectSubset<T, conversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {conversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends conversationsCreateArgs>(args: SelectSubset<T, conversationsCreateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {conversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversationsCreateManyArgs>(args?: SelectSubset<T, conversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {conversationsCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends conversationsCreateManyAndReturnArgs>(args?: SelectSubset<T, conversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversations.
     * @param {conversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends conversationsDeleteArgs>(args: SelectSubset<T, conversationsDeleteArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {conversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversationsUpdateArgs>(args: SelectSubset<T, conversationsUpdateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {conversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversationsDeleteManyArgs>(args?: SelectSubset<T, conversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversationsUpdateManyArgs>(args: SelectSubset<T, conversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {conversationsUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.updateManyAndReturn({
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
    updateManyAndReturn<T extends conversationsUpdateManyAndReturnArgs>(args: SelectSubset<T, conversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversations.
     * @param {conversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends conversationsUpsertArgs>(args: SelectSubset<T, conversationsUpsertArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends conversationsCountArgs>(
      args?: Subset<T, conversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsGroupByArgs} args - Group by arguments.
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
      T extends conversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversationsGroupByArgs['orderBy'] }
        : { orderBy?: conversationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, conversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversations model
   */
  readonly fields: conversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentee<T extends MenteeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenteeDefaultArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends MentorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MentorDefaultArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the conversations model
   */
  interface conversationsFieldRefs {
    readonly id: FieldRef<"conversations", 'Int'>
    readonly menteeId: FieldRef<"conversations", 'String'>
    readonly mentorId: FieldRef<"conversations", 'String'>
    readonly createdAt: FieldRef<"conversations", 'DateTime'>
    readonly updatedAt: FieldRef<"conversations", 'DateTime'>
    readonly lastMessage: FieldRef<"conversations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * conversations findUnique
   */
  export type conversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findUniqueOrThrow
   */
  export type conversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findFirst
   */
  export type conversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findFirstOrThrow
   */
  export type conversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findMany
   */
  export type conversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations create
   */
  export type conversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a conversations.
     */
    data: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
  }

  /**
   * conversations createMany
   */
  export type conversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversations createManyAndReturn
   */
  export type conversationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * conversations update
   */
  export type conversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a conversations.
     */
    data: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
    /**
     * Choose, which conversations to update.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations updateMany
   */
  export type conversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
  }

  /**
   * conversations updateManyAndReturn
   */
  export type conversationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * conversations upsert
   */
  export type conversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the conversations to update in case it exists.
     */
    where: conversationsWhereUniqueInput
    /**
     * In case the conversations found by the `where` argument doesn't exist, create a new conversations with this data.
     */
    create: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
    /**
     * In case the conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
  }

  /**
   * conversations delete
   */
  export type conversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter which conversations to delete.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations deleteMany
   */
  export type conversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to delete
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to delete.
     */
    limit?: number
  }

  /**
   * conversations.messages
   */
  export type conversations$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * conversations without action
   */
  export type conversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    conversationId: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    conversationId: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    conversationId: number | null
    senderRole: string | null
    content: string | null
    createdAt: Date | null
    isRead: boolean | null
    messageType: string | null
    senderId: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    conversationId: number | null
    senderRole: string | null
    content: string | null
    createdAt: Date | null
    isRead: boolean | null
    messageType: string | null
    senderId: string | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    conversationId: number
    senderRole: number
    content: number
    createdAt: number
    isRead: number
    messageType: number
    senderId: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    conversationId?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    conversationId?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    conversationId?: true
    senderRole?: true
    content?: true
    createdAt?: true
    isRead?: true
    messageType?: true
    senderId?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    conversationId?: true
    senderRole?: true
    content?: true
    createdAt?: true
    isRead?: true
    messageType?: true
    senderId?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    conversationId?: true
    senderRole?: true
    content?: true
    createdAt?: true
    isRead?: true
    messageType?: true
    senderId?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    conversationId: number
    senderRole: string
    content: string
    createdAt: Date
    isRead: boolean
    messageType: string
    senderId: string
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    senderRole?: boolean
    content?: boolean
    createdAt?: boolean
    isRead?: boolean
    messageType?: boolean
    senderId?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    senderRole?: boolean
    content?: boolean
    createdAt?: boolean
    isRead?: boolean
    messageType?: boolean
    senderId?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    senderRole?: boolean
    content?: boolean
    createdAt?: boolean
    isRead?: boolean
    messageType?: boolean
    senderId?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    conversationId?: boolean
    senderRole?: boolean
    content?: boolean
    createdAt?: boolean
    isRead?: boolean
    messageType?: boolean
    senderId?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "senderRole" | "content" | "createdAt" | "isRead" | "messageType" | "senderId", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      conversations: Prisma.$conversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conversationId: number
      senderRole: string
      content: string
      createdAt: Date
      isRead: boolean
      messageType: string
      senderId: string
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
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
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
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
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationsDefaultArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'Int'>
    readonly conversationId: FieldRef<"messages", 'Int'>
    readonly senderRole: FieldRef<"messages", 'String'>
    readonly content: FieldRef<"messages", 'String'>
    readonly createdAt: FieldRef<"messages", 'DateTime'>
    readonly isRead: FieldRef<"messages", 'Boolean'>
    readonly messageType: FieldRef<"messages", 'String'>
    readonly senderId: FieldRef<"messages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    menteeRating: number | null
    mentorRating: number | null
  }

  export type SessionsSumAggregateOutputType = {
    id: number | null
    duration: number | null
    menteeRating: number | null
    mentorRating: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: number | null
    menteeId: string | null
    mentorId: string | null
    title: string | null
    description: string | null
    duration: number | null
    sessionDate: Date | null
    jitsiRoomId: string | null
    meetingUrl: string | null
    status: $Enums.SessionStatus | null
    statusUpdatedAt: Date | null
    statusUpdatedBy: string | null
    notes: string | null
    feedback: string | null
    createdAt: Date | null
    cancellationReason: string | null
    menteeRating: number | null
    menteeReview: string | null
    mentorRating: number | null
    mentorReview: string | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: number | null
    menteeId: string | null
    mentorId: string | null
    title: string | null
    description: string | null
    duration: number | null
    sessionDate: Date | null
    jitsiRoomId: string | null
    meetingUrl: string | null
    status: $Enums.SessionStatus | null
    statusUpdatedAt: Date | null
    statusUpdatedBy: string | null
    notes: string | null
    feedback: string | null
    createdAt: Date | null
    cancellationReason: string | null
    menteeRating: number | null
    menteeReview: string | null
    mentorRating: number | null
    mentorReview: string | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    menteeId: number
    mentorId: number
    title: number
    description: number
    duration: number
    sessionDate: number
    jitsiRoomId: number
    meetingUrl: number
    status: number
    statusUpdatedAt: number
    statusUpdatedBy: number
    additionalParticipants: number
    notes: number
    feedback: number
    createdAt: number
    cancellationReason: number
    menteeRating: number
    menteeReview: number
    mentorRating: number
    mentorReview: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    id?: true
    duration?: true
    menteeRating?: true
    mentorRating?: true
  }

  export type SessionsSumAggregateInputType = {
    id?: true
    duration?: true
    menteeRating?: true
    mentorRating?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    title?: true
    description?: true
    duration?: true
    sessionDate?: true
    jitsiRoomId?: true
    meetingUrl?: true
    status?: true
    statusUpdatedAt?: true
    statusUpdatedBy?: true
    notes?: true
    feedback?: true
    createdAt?: true
    cancellationReason?: true
    menteeRating?: true
    menteeReview?: true
    mentorRating?: true
    mentorReview?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    title?: true
    description?: true
    duration?: true
    sessionDate?: true
    jitsiRoomId?: true
    meetingUrl?: true
    status?: true
    statusUpdatedAt?: true
    statusUpdatedBy?: true
    notes?: true
    feedback?: true
    createdAt?: true
    cancellationReason?: true
    menteeRating?: true
    menteeReview?: true
    mentorRating?: true
    mentorReview?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    title?: true
    description?: true
    duration?: true
    sessionDate?: true
    jitsiRoomId?: true
    meetingUrl?: true
    status?: true
    statusUpdatedAt?: true
    statusUpdatedBy?: true
    additionalParticipants?: true
    notes?: true
    feedback?: true
    createdAt?: true
    cancellationReason?: true
    menteeRating?: true
    menteeReview?: true
    mentorRating?: true
    mentorReview?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: number
    menteeId: string
    mentorId: string
    title: string
    description: string | null
    duration: number
    sessionDate: Date
    jitsiRoomId: string
    meetingUrl: string | null
    status: $Enums.SessionStatus
    statusUpdatedAt: Date
    statusUpdatedBy: string | null
    additionalParticipants: string[]
    notes: string | null
    feedback: string | null
    createdAt: Date
    cancellationReason: string | null
    menteeRating: number | null
    menteeReview: string | null
    mentorRating: number | null
    mentorReview: string | null
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    sessionDate?: boolean
    jitsiRoomId?: boolean
    meetingUrl?: boolean
    status?: boolean
    statusUpdatedAt?: boolean
    statusUpdatedBy?: boolean
    additionalParticipants?: boolean
    notes?: boolean
    feedback?: boolean
    createdAt?: boolean
    cancellationReason?: boolean
    menteeRating?: boolean
    menteeReview?: boolean
    mentorRating?: boolean
    mentorReview?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    sessionDate?: boolean
    jitsiRoomId?: boolean
    meetingUrl?: boolean
    status?: boolean
    statusUpdatedAt?: boolean
    statusUpdatedBy?: boolean
    additionalParticipants?: boolean
    notes?: boolean
    feedback?: boolean
    createdAt?: boolean
    cancellationReason?: boolean
    menteeRating?: boolean
    menteeReview?: boolean
    mentorRating?: boolean
    mentorReview?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    sessionDate?: boolean
    jitsiRoomId?: boolean
    meetingUrl?: boolean
    status?: boolean
    statusUpdatedAt?: boolean
    statusUpdatedBy?: boolean
    additionalParticipants?: boolean
    notes?: boolean
    feedback?: boolean
    createdAt?: boolean
    cancellationReason?: boolean
    menteeRating?: boolean
    menteeReview?: boolean
    mentorRating?: boolean
    mentorReview?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectScalar = {
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    sessionDate?: boolean
    jitsiRoomId?: boolean
    meetingUrl?: boolean
    status?: boolean
    statusUpdatedAt?: boolean
    statusUpdatedBy?: boolean
    additionalParticipants?: boolean
    notes?: boolean
    feedback?: boolean
    createdAt?: boolean
    cancellationReason?: boolean
    menteeRating?: boolean
    menteeReview?: boolean
    mentorRating?: boolean
    mentorReview?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menteeId" | "mentorId" | "title" | "description" | "duration" | "sessionDate" | "jitsiRoomId" | "meetingUrl" | "status" | "statusUpdatedAt" | "statusUpdatedBy" | "additionalParticipants" | "notes" | "feedback" | "createdAt" | "cancellationReason" | "menteeRating" | "menteeReview" | "mentorRating" | "mentorReview", ExtArgs["result"]["sessions"]>
  export type sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }
  export type sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }
  export type sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {
      mentee: Prisma.$MenteePayload<ExtArgs>
      mentor: Prisma.$MentorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menteeId: string
      mentorId: string
      title: string
      description: string | null
      duration: number
      sessionDate: Date
      jitsiRoomId: string
      meetingUrl: string | null
      status: $Enums.SessionStatus
      statusUpdatedAt: Date
      statusUpdatedBy: string | null
      additionalParticipants: string[]
      notes: string | null
      feedback: string | null
      createdAt: Date
      cancellationReason: string | null
      menteeRating: number | null
      menteeReview: string | null
      mentorRating: number | null
      mentorReview: string | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {sessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
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
    updateManyAndReturn<T extends sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
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
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'Int'>
    readonly menteeId: FieldRef<"sessions", 'String'>
    readonly mentorId: FieldRef<"sessions", 'String'>
    readonly title: FieldRef<"sessions", 'String'>
    readonly description: FieldRef<"sessions", 'String'>
    readonly duration: FieldRef<"sessions", 'Int'>
    readonly sessionDate: FieldRef<"sessions", 'DateTime'>
    readonly jitsiRoomId: FieldRef<"sessions", 'String'>
    readonly meetingUrl: FieldRef<"sessions", 'String'>
    readonly status: FieldRef<"sessions", 'SessionStatus'>
    readonly statusUpdatedAt: FieldRef<"sessions", 'DateTime'>
    readonly statusUpdatedBy: FieldRef<"sessions", 'String'>
    readonly additionalParticipants: FieldRef<"sessions", 'String[]'>
    readonly notes: FieldRef<"sessions", 'String'>
    readonly feedback: FieldRef<"sessions", 'String'>
    readonly createdAt: FieldRef<"sessions", 'DateTime'>
    readonly cancellationReason: FieldRef<"sessions", 'String'>
    readonly menteeRating: FieldRef<"sessions", 'Int'>
    readonly menteeReview: FieldRef<"sessions", 'String'>
    readonly mentorRating: FieldRef<"sessions", 'Int'>
    readonly mentorReview: FieldRef<"sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions createManyAndReturn
   */
  export type sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions updateManyAndReturn
   */
  export type sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
  }


  /**
   * Model skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillsSumAggregateOutputType = {
    id: number | null
  }

  export type SkillsMinAggregateOutputType = {
    id: number | null
    name: string | null
    goal: string | null
    status: string | null
    reflection: string | null
    dateAdded: Date | null
    lastUpdated: Date | null
    menteeId: string | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    goal: string | null
    status: string | null
    reflection: string | null
    dateAdded: Date | null
    lastUpdated: Date | null
    menteeId: string | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    name: number
    goal: number
    status: number
    reflection: number
    dateAdded: number
    lastUpdated: number
    menteeId: number
    _all: number
  }


  export type SkillsAvgAggregateInputType = {
    id?: true
  }

  export type SkillsSumAggregateInputType = {
    id?: true
  }

  export type SkillsMinAggregateInputType = {
    id?: true
    name?: true
    goal?: true
    status?: true
    reflection?: true
    dateAdded?: true
    lastUpdated?: true
    menteeId?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    name?: true
    goal?: true
    status?: true
    reflection?: true
    dateAdded?: true
    lastUpdated?: true
    menteeId?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    name?: true
    goal?: true
    status?: true
    reflection?: true
    dateAdded?: true
    lastUpdated?: true
    menteeId?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to aggregate.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type skillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillsWhereInput
    orderBy?: skillsOrderByWithAggregationInput | skillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: skillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _avg?: SkillsAvgAggregateInputType
    _sum?: SkillsSumAggregateInputType
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: number
    name: string
    goal: string
    status: string
    reflection: string
    dateAdded: Date
    lastUpdated: Date
    menteeId: string
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends skillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type skillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    goal?: boolean
    status?: boolean
    reflection?: boolean
    dateAdded?: boolean
    lastUpdated?: boolean
    menteeId?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type skillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    goal?: boolean
    status?: boolean
    reflection?: boolean
    dateAdded?: boolean
    lastUpdated?: boolean
    menteeId?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type skillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    goal?: boolean
    status?: boolean
    reflection?: boolean
    dateAdded?: boolean
    lastUpdated?: boolean
    menteeId?: boolean
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type skillsSelectScalar = {
    id?: boolean
    name?: boolean
    goal?: boolean
    status?: boolean
    reflection?: boolean
    dateAdded?: boolean
    lastUpdated?: boolean
    menteeId?: boolean
  }

  export type skillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "goal" | "status" | "reflection" | "dateAdded" | "lastUpdated" | "menteeId", ExtArgs["result"]["skills"]>
  export type skillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
  }
  export type skillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
  }
  export type skillsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | MenteeDefaultArgs<ExtArgs>
  }

  export type $skillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skills"
    objects: {
      mentee: Prisma.$MenteePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      goal: string
      status: string
      reflection: string
      dateAdded: Date
      lastUpdated: Date
      menteeId: string
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }

  type skillsGetPayload<S extends boolean | null | undefined | skillsDefaultArgs> = $Result.GetResult<Prisma.$skillsPayload, S>

  type skillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface skillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skills'], meta: { name: 'skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {skillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillsFindUniqueArgs>(args: SelectSubset<T, skillsFindUniqueArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillsFindUniqueOrThrowArgs>(args: SelectSubset<T, skillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillsFindFirstArgs>(args?: SelectSubset<T, skillsFindFirstArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillsFindFirstOrThrowArgs>(args?: SelectSubset<T, skillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skillsFindManyArgs>(args?: SelectSubset<T, skillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skills.
     * @param {skillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
     */
    create<T extends skillsCreateArgs>(args: SelectSubset<T, skillsCreateArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {skillsCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillsCreateManyArgs>(args?: SelectSubset<T, skillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {skillsCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillsWithIdOnly = await prisma.skills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skillsCreateManyAndReturnArgs>(args?: SelectSubset<T, skillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skills.
     * @param {skillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
     */
    delete<T extends skillsDeleteArgs>(args: SelectSubset<T, skillsDeleteArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skills.
     * @param {skillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillsUpdateArgs>(args: SelectSubset<T, skillsUpdateArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {skillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillsDeleteManyArgs>(args?: SelectSubset<T, skillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillsUpdateManyArgs>(args: SelectSubset<T, skillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {skillsUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillsWithIdOnly = await prisma.skills.updateManyAndReturn({
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
    updateManyAndReturn<T extends skillsUpdateManyAndReturnArgs>(args: SelectSubset<T, skillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skills.
     * @param {skillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
     */
    upsert<T extends skillsUpsertArgs>(args: SelectSubset<T, skillsUpsertArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillsCountArgs>(
      args?: Subset<T, skillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsGroupByArgs} args - Group by arguments.
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
      T extends skillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillsGroupByArgs['orderBy'] }
        : { orderBy?: skillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skills model
   */
  readonly fields: skillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentee<T extends MenteeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenteeDefaultArgs<ExtArgs>>): Prisma__MenteeClient<$Result.GetResult<Prisma.$MenteePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the skills model
   */
  interface skillsFieldRefs {
    readonly id: FieldRef<"skills", 'Int'>
    readonly name: FieldRef<"skills", 'String'>
    readonly goal: FieldRef<"skills", 'String'>
    readonly status: FieldRef<"skills", 'String'>
    readonly reflection: FieldRef<"skills", 'String'>
    readonly dateAdded: FieldRef<"skills", 'DateTime'>
    readonly lastUpdated: FieldRef<"skills", 'DateTime'>
    readonly menteeId: FieldRef<"skills", 'String'>
  }
    

  // Custom InputTypes
  /**
   * skills findUnique
   */
  export type skillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills findUniqueOrThrow
   */
  export type skillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills findFirst
   */
  export type skillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills findFirstOrThrow
   */
  export type skillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills findMany
   */
  export type skillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills create
   */
  export type skillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * The data needed to create a skills.
     */
    data: XOR<skillsCreateInput, skillsUncheckedCreateInput>
  }

  /**
   * skills createMany
   */
  export type skillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillsCreateManyInput | skillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skills createManyAndReturn
   */
  export type skillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * The data used to create many skills.
     */
    data: skillsCreateManyInput | skillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * skills update
   */
  export type skillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * The data needed to update a skills.
     */
    data: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>
    /**
     * Choose, which skills to update.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills updateMany
   */
  export type skillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillsWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skills updateManyAndReturn
   */
  export type skillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * The data used to update skills.
     */
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillsWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * skills upsert
   */
  export type skillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * The filter to search for the skills to update in case it exists.
     */
    where: skillsWhereUniqueInput
    /**
     * In case the skills found by the `where` argument doesn't exist, create a new skills with this data.
     */
    create: XOR<skillsCreateInput, skillsUncheckedCreateInput>
    /**
     * In case the skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>
  }

  /**
   * skills delete
   */
  export type skillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter which skills to delete.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills deleteMany
   */
  export type skillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillsWhereInput
    /**
     * Limit how many skills to delete.
     */
    limit?: number
  }

  /**
   * skills without action
   */
  export type skillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
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
    gender: 'gender',
    email: 'email',
    phone_number: 'phone_number',
    password: 'password',
    location: 'location',
    updateAt: 'updateAt',
    last_login: 'last_login',
    ratings: 'ratings',
    profile_picture: 'profile_picture',
    supabaseId: 'supabaseId',
    bio: 'bio',
    joined: 'joined',
    goals: 'goals',
    experience: 'experience',
    Github: 'Github',
    Instagram: 'Instagram',
    LinkedIn: 'LinkedIn',
    Twitter: 'Twitter',
    Website: 'Website'
  };

  export type MenteeScalarFieldEnum = (typeof MenteeScalarFieldEnum)[keyof typeof MenteeScalarFieldEnum]


  export const MentorScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    age: 'age',
    email: 'email',
    phone_number: 'phone_number',
    password: 'password',
    supabaseId: 'supabaseId',
    gender: 'gender',
    profile_picture: 'profile_picture',
    location: 'location',
    joined: 'joined',
    ratings: 'ratings',
    updateAt: 'updateAt',
    last_login: 'last_login',
    expertise: 'expertise',
    bio: 'bio',
    experience: 'experience',
    Github: 'Github',
    Instagram: 'Instagram',
    LinkedIn: 'LinkedIn',
    Twitter: 'Twitter',
    Website: 'Website'
  };

  export type MentorScalarFieldEnum = (typeof MentorScalarFieldEnum)[keyof typeof MentorScalarFieldEnum]


  export const AchievementsScalarFieldEnum: {
    id: 'id',
    supabaseId: 'supabaseId',
    experience: 'experience',
    education: 'education',
    accolades: 'accolades',
    reviews: 'reviews'
  };

  export type AchievementsScalarFieldEnum = (typeof AchievementsScalarFieldEnum)[keyof typeof AchievementsScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    menteeId: 'menteeId',
    mentorId: 'mentorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastMessage: 'lastMessage'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    senderRole: 'senderRole',
    content: 'content',
    createdAt: 'createdAt',
    isRead: 'isRead',
    messageType: 'messageType',
    senderId: 'senderId'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    menteeId: 'menteeId',
    mentorId: 'mentorId',
    title: 'title',
    description: 'description',
    duration: 'duration',
    sessionDate: 'sessionDate',
    jitsiRoomId: 'jitsiRoomId',
    meetingUrl: 'meetingUrl',
    status: 'status',
    statusUpdatedAt: 'statusUpdatedAt',
    statusUpdatedBy: 'statusUpdatedBy',
    additionalParticipants: 'additionalParticipants',
    notes: 'notes',
    feedback: 'feedback',
    createdAt: 'createdAt',
    cancellationReason: 'cancellationReason',
    menteeRating: 'menteeRating',
    menteeReview: 'menteeReview',
    mentorRating: 'mentorRating',
    mentorReview: 'mentorReview'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    goal: 'goal',
    status: 'status',
    reflection: 'reflection',
    dateAdded: 'dateAdded',
    lastUpdated: 'lastUpdated',
    menteeId: 'menteeId'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


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
    gender?: StringFilter<"Mentee"> | string
    email?: StringFilter<"Mentee"> | string
    phone_number?: StringFilter<"Mentee"> | string
    password?: StringFilter<"Mentee"> | string
    location?: StringFilter<"Mentee"> | string
    updateAt?: DateTimeFilter<"Mentee"> | Date | string
    last_login?: DateTimeFilter<"Mentee"> | Date | string
    ratings?: IntFilter<"Mentee"> | number
    profile_picture?: StringFilter<"Mentee"> | string
    supabaseId?: StringFilter<"Mentee"> | string
    bio?: StringFilter<"Mentee"> | string
    joined?: DateTimeFilter<"Mentee"> | Date | string
    goals?: StringNullableListFilter<"Mentee">
    experience?: IntFilter<"Mentee"> | number
    Github?: StringNullableFilter<"Mentee"> | string | null
    Instagram?: StringNullableFilter<"Mentee"> | string | null
    LinkedIn?: StringNullableFilter<"Mentee"> | string | null
    Twitter?: StringNullableFilter<"Mentee"> | string | null
    Website?: StringNullableFilter<"Mentee"> | string | null
    conversations?: ConversationsListRelationFilter
    sessions?: SessionsListRelationFilter
    mentor?: MentorListRelationFilter
    skills?: SkillsListRelationFilter
  }

  export type MenteeOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    ratings?: SortOrder
    profile_picture?: SortOrder
    supabaseId?: SortOrder
    bio?: SortOrder
    joined?: SortOrder
    goals?: SortOrder
    experience?: SortOrder
    Github?: SortOrderInput | SortOrder
    Instagram?: SortOrderInput | SortOrder
    LinkedIn?: SortOrderInput | SortOrder
    Twitter?: SortOrderInput | SortOrder
    Website?: SortOrderInput | SortOrder
    conversations?: conversationsOrderByRelationAggregateInput
    sessions?: sessionsOrderByRelationAggregateInput
    mentor?: MentorOrderByRelationAggregateInput
    skills?: skillsOrderByRelationAggregateInput
  }

  export type MenteeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone_number?: string
    supabaseId?: string
    AND?: MenteeWhereInput | MenteeWhereInput[]
    OR?: MenteeWhereInput[]
    NOT?: MenteeWhereInput | MenteeWhereInput[]
    first_name?: StringFilter<"Mentee"> | string
    last_name?: StringFilter<"Mentee"> | string
    age?: IntFilter<"Mentee"> | number
    gender?: StringFilter<"Mentee"> | string
    password?: StringFilter<"Mentee"> | string
    location?: StringFilter<"Mentee"> | string
    updateAt?: DateTimeFilter<"Mentee"> | Date | string
    last_login?: DateTimeFilter<"Mentee"> | Date | string
    ratings?: IntFilter<"Mentee"> | number
    profile_picture?: StringFilter<"Mentee"> | string
    bio?: StringFilter<"Mentee"> | string
    joined?: DateTimeFilter<"Mentee"> | Date | string
    goals?: StringNullableListFilter<"Mentee">
    experience?: IntFilter<"Mentee"> | number
    Github?: StringNullableFilter<"Mentee"> | string | null
    Instagram?: StringNullableFilter<"Mentee"> | string | null
    LinkedIn?: StringNullableFilter<"Mentee"> | string | null
    Twitter?: StringNullableFilter<"Mentee"> | string | null
    Website?: StringNullableFilter<"Mentee"> | string | null
    conversations?: ConversationsListRelationFilter
    sessions?: SessionsListRelationFilter
    mentor?: MentorListRelationFilter
    skills?: SkillsListRelationFilter
  }, "id" | "email" | "phone_number" | "supabaseId">

  export type MenteeOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    ratings?: SortOrder
    profile_picture?: SortOrder
    supabaseId?: SortOrder
    bio?: SortOrder
    joined?: SortOrder
    goals?: SortOrder
    experience?: SortOrder
    Github?: SortOrderInput | SortOrder
    Instagram?: SortOrderInput | SortOrder
    LinkedIn?: SortOrderInput | SortOrder
    Twitter?: SortOrderInput | SortOrder
    Website?: SortOrderInput | SortOrder
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
    gender?: StringWithAggregatesFilter<"Mentee"> | string
    email?: StringWithAggregatesFilter<"Mentee"> | string
    phone_number?: StringWithAggregatesFilter<"Mentee"> | string
    password?: StringWithAggregatesFilter<"Mentee"> | string
    location?: StringWithAggregatesFilter<"Mentee"> | string
    updateAt?: DateTimeWithAggregatesFilter<"Mentee"> | Date | string
    last_login?: DateTimeWithAggregatesFilter<"Mentee"> | Date | string
    ratings?: IntWithAggregatesFilter<"Mentee"> | number
    profile_picture?: StringWithAggregatesFilter<"Mentee"> | string
    supabaseId?: StringWithAggregatesFilter<"Mentee"> | string
    bio?: StringWithAggregatesFilter<"Mentee"> | string
    joined?: DateTimeWithAggregatesFilter<"Mentee"> | Date | string
    goals?: StringNullableListFilter<"Mentee">
    experience?: IntWithAggregatesFilter<"Mentee"> | number
    Github?: StringNullableWithAggregatesFilter<"Mentee"> | string | null
    Instagram?: StringNullableWithAggregatesFilter<"Mentee"> | string | null
    LinkedIn?: StringNullableWithAggregatesFilter<"Mentee"> | string | null
    Twitter?: StringNullableWithAggregatesFilter<"Mentee"> | string | null
    Website?: StringNullableWithAggregatesFilter<"Mentee"> | string | null
  }

  export type MentorWhereInput = {
    AND?: MentorWhereInput | MentorWhereInput[]
    OR?: MentorWhereInput[]
    NOT?: MentorWhereInput | MentorWhereInput[]
    id?: IntFilter<"Mentor"> | number
    first_name?: StringFilter<"Mentor"> | string
    last_name?: StringFilter<"Mentor"> | string
    age?: IntFilter<"Mentor"> | number
    email?: StringFilter<"Mentor"> | string
    phone_number?: StringFilter<"Mentor"> | string
    password?: StringFilter<"Mentor"> | string
    supabaseId?: StringFilter<"Mentor"> | string
    gender?: StringFilter<"Mentor"> | string
    profile_picture?: StringFilter<"Mentor"> | string
    location?: StringFilter<"Mentor"> | string
    joined?: DateTimeFilter<"Mentor"> | Date | string
    ratings?: IntFilter<"Mentor"> | number
    updateAt?: DateTimeFilter<"Mentor"> | Date | string
    last_login?: DateTimeFilter<"Mentor"> | Date | string
    expertise?: StringNullableListFilter<"Mentor">
    bio?: StringFilter<"Mentor"> | string
    experience?: IntFilter<"Mentor"> | number
    Github?: StringNullableFilter<"Mentor"> | string | null
    Instagram?: StringNullableFilter<"Mentor"> | string | null
    LinkedIn?: StringFilter<"Mentor"> | string
    Twitter?: StringNullableFilter<"Mentor"> | string | null
    Website?: StringNullableFilter<"Mentor"> | string | null
    Achievements?: XOR<AchievementsNullableScalarRelationFilter, AchievementsWhereInput> | null
    conversations?: ConversationsListRelationFilter
    sessions?: SessionsListRelationFilter
    mentee?: MenteeListRelationFilter
  }

  export type MentorOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    supabaseId?: SortOrder
    gender?: SortOrder
    profile_picture?: SortOrder
    location?: SortOrder
    joined?: SortOrder
    ratings?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    expertise?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
    Github?: SortOrderInput | SortOrder
    Instagram?: SortOrderInput | SortOrder
    LinkedIn?: SortOrder
    Twitter?: SortOrderInput | SortOrder
    Website?: SortOrderInput | SortOrder
    Achievements?: AchievementsOrderByWithRelationInput
    conversations?: conversationsOrderByRelationAggregateInput
    sessions?: sessionsOrderByRelationAggregateInput
    mentee?: MenteeOrderByRelationAggregateInput
  }

  export type MentorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone_number?: string
    supabaseId?: string
    AND?: MentorWhereInput | MentorWhereInput[]
    OR?: MentorWhereInput[]
    NOT?: MentorWhereInput | MentorWhereInput[]
    first_name?: StringFilter<"Mentor"> | string
    last_name?: StringFilter<"Mentor"> | string
    age?: IntFilter<"Mentor"> | number
    password?: StringFilter<"Mentor"> | string
    gender?: StringFilter<"Mentor"> | string
    profile_picture?: StringFilter<"Mentor"> | string
    location?: StringFilter<"Mentor"> | string
    joined?: DateTimeFilter<"Mentor"> | Date | string
    ratings?: IntFilter<"Mentor"> | number
    updateAt?: DateTimeFilter<"Mentor"> | Date | string
    last_login?: DateTimeFilter<"Mentor"> | Date | string
    expertise?: StringNullableListFilter<"Mentor">
    bio?: StringFilter<"Mentor"> | string
    experience?: IntFilter<"Mentor"> | number
    Github?: StringNullableFilter<"Mentor"> | string | null
    Instagram?: StringNullableFilter<"Mentor"> | string | null
    LinkedIn?: StringFilter<"Mentor"> | string
    Twitter?: StringNullableFilter<"Mentor"> | string | null
    Website?: StringNullableFilter<"Mentor"> | string | null
    Achievements?: XOR<AchievementsNullableScalarRelationFilter, AchievementsWhereInput> | null
    conversations?: ConversationsListRelationFilter
    sessions?: SessionsListRelationFilter
    mentee?: MenteeListRelationFilter
  }, "id" | "email" | "phone_number" | "supabaseId">

  export type MentorOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    supabaseId?: SortOrder
    gender?: SortOrder
    profile_picture?: SortOrder
    location?: SortOrder
    joined?: SortOrder
    ratings?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    expertise?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
    Github?: SortOrderInput | SortOrder
    Instagram?: SortOrderInput | SortOrder
    LinkedIn?: SortOrder
    Twitter?: SortOrderInput | SortOrder
    Website?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"Mentor"> | string
    phone_number?: StringWithAggregatesFilter<"Mentor"> | string
    password?: StringWithAggregatesFilter<"Mentor"> | string
    supabaseId?: StringWithAggregatesFilter<"Mentor"> | string
    gender?: StringWithAggregatesFilter<"Mentor"> | string
    profile_picture?: StringWithAggregatesFilter<"Mentor"> | string
    location?: StringWithAggregatesFilter<"Mentor"> | string
    joined?: DateTimeWithAggregatesFilter<"Mentor"> | Date | string
    ratings?: IntWithAggregatesFilter<"Mentor"> | number
    updateAt?: DateTimeWithAggregatesFilter<"Mentor"> | Date | string
    last_login?: DateTimeWithAggregatesFilter<"Mentor"> | Date | string
    expertise?: StringNullableListFilter<"Mentor">
    bio?: StringWithAggregatesFilter<"Mentor"> | string
    experience?: IntWithAggregatesFilter<"Mentor"> | number
    Github?: StringNullableWithAggregatesFilter<"Mentor"> | string | null
    Instagram?: StringNullableWithAggregatesFilter<"Mentor"> | string | null
    LinkedIn?: StringWithAggregatesFilter<"Mentor"> | string
    Twitter?: StringNullableWithAggregatesFilter<"Mentor"> | string | null
    Website?: StringNullableWithAggregatesFilter<"Mentor"> | string | null
  }

  export type AchievementsWhereInput = {
    AND?: AchievementsWhereInput | AchievementsWhereInput[]
    OR?: AchievementsWhereInput[]
    NOT?: AchievementsWhereInput | AchievementsWhereInput[]
    id?: IntFilter<"Achievements"> | number
    supabaseId?: StringFilter<"Achievements"> | string
    experience?: StringNullableListFilter<"Achievements">
    education?: StringNullableListFilter<"Achievements">
    accolades?: StringNullableListFilter<"Achievements">
    reviews?: StringNullableListFilter<"Achievements">
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
  }

  export type AchievementsOrderByWithRelationInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    accolades?: SortOrder
    reviews?: SortOrder
    mentor?: MentorOrderByWithRelationInput
  }

  export type AchievementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    supabaseId?: string
    AND?: AchievementsWhereInput | AchievementsWhereInput[]
    OR?: AchievementsWhereInput[]
    NOT?: AchievementsWhereInput | AchievementsWhereInput[]
    experience?: StringNullableListFilter<"Achievements">
    education?: StringNullableListFilter<"Achievements">
    accolades?: StringNullableListFilter<"Achievements">
    reviews?: StringNullableListFilter<"Achievements">
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
  }, "id" | "supabaseId">

  export type AchievementsOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    accolades?: SortOrder
    reviews?: SortOrder
    _count?: AchievementsCountOrderByAggregateInput
    _avg?: AchievementsAvgOrderByAggregateInput
    _max?: AchievementsMaxOrderByAggregateInput
    _min?: AchievementsMinOrderByAggregateInput
    _sum?: AchievementsSumOrderByAggregateInput
  }

  export type AchievementsScalarWhereWithAggregatesInput = {
    AND?: AchievementsScalarWhereWithAggregatesInput | AchievementsScalarWhereWithAggregatesInput[]
    OR?: AchievementsScalarWhereWithAggregatesInput[]
    NOT?: AchievementsScalarWhereWithAggregatesInput | AchievementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Achievements"> | number
    supabaseId?: StringWithAggregatesFilter<"Achievements"> | string
    experience?: StringNullableListFilter<"Achievements">
    education?: StringNullableListFilter<"Achievements">
    accolades?: StringNullableListFilter<"Achievements">
    reviews?: StringNullableListFilter<"Achievements">
  }

  export type conversationsWhereInput = {
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    id?: IntFilter<"conversations"> | number
    menteeId?: StringFilter<"conversations"> | string
    mentorId?: StringFilter<"conversations"> | string
    createdAt?: DateTimeFilter<"conversations"> | Date | string
    updatedAt?: DateTimeFilter<"conversations"> | Date | string
    lastMessage?: StringNullableFilter<"conversations"> | string | null
    mentee?: XOR<MenteeScalarRelationFilter, MenteeWhereInput>
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
    messages?: MessagesListRelationFilter
  }

  export type conversationsOrderByWithRelationInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: SortOrderInput | SortOrder
    mentee?: MenteeOrderByWithRelationInput
    mentor?: MentorOrderByWithRelationInput
    messages?: messagesOrderByRelationAggregateInput
  }

  export type conversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mentorId_menteeId?: conversationsMentorIdMenteeIdCompoundUniqueInput
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    menteeId?: StringFilter<"conversations"> | string
    mentorId?: StringFilter<"conversations"> | string
    createdAt?: DateTimeFilter<"conversations"> | Date | string
    updatedAt?: DateTimeFilter<"conversations"> | Date | string
    lastMessage?: StringNullableFilter<"conversations"> | string | null
    mentee?: XOR<MenteeScalarRelationFilter, MenteeWhereInput>
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
    messages?: MessagesListRelationFilter
  }, "id" | "mentorId_menteeId">

  export type conversationsOrderByWithAggregationInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: SortOrderInput | SortOrder
    _count?: conversationsCountOrderByAggregateInput
    _avg?: conversationsAvgOrderByAggregateInput
    _max?: conversationsMaxOrderByAggregateInput
    _min?: conversationsMinOrderByAggregateInput
    _sum?: conversationsSumOrderByAggregateInput
  }

  export type conversationsScalarWhereWithAggregatesInput = {
    AND?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    OR?: conversationsScalarWhereWithAggregatesInput[]
    NOT?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"conversations"> | number
    menteeId?: StringWithAggregatesFilter<"conversations"> | string
    mentorId?: StringWithAggregatesFilter<"conversations"> | string
    createdAt?: DateTimeWithAggregatesFilter<"conversations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"conversations"> | Date | string
    lastMessage?: StringNullableWithAggregatesFilter<"conversations"> | string | null
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: IntFilter<"messages"> | number
    conversationId?: IntFilter<"messages"> | number
    senderRole?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    createdAt?: DateTimeFilter<"messages"> | Date | string
    isRead?: BoolFilter<"messages"> | boolean
    messageType?: StringFilter<"messages"> | string
    senderId?: StringFilter<"messages"> | string
    conversations?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderRole?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    messageType?: SortOrder
    senderId?: SortOrder
    conversations?: conversationsOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    conversationId?: IntFilter<"messages"> | number
    senderRole?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    createdAt?: DateTimeFilter<"messages"> | Date | string
    isRead?: BoolFilter<"messages"> | boolean
    messageType?: StringFilter<"messages"> | string
    senderId?: StringFilter<"messages"> | string
    conversations?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderRole?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    messageType?: SortOrder
    senderId?: SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messages"> | number
    conversationId?: IntWithAggregatesFilter<"messages"> | number
    senderRole?: StringWithAggregatesFilter<"messages"> | string
    content?: StringWithAggregatesFilter<"messages"> | string
    createdAt?: DateTimeWithAggregatesFilter<"messages"> | Date | string
    isRead?: BoolWithAggregatesFilter<"messages"> | boolean
    messageType?: StringWithAggregatesFilter<"messages"> | string
    senderId?: StringWithAggregatesFilter<"messages"> | string
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: IntFilter<"sessions"> | number
    menteeId?: StringFilter<"sessions"> | string
    mentorId?: StringFilter<"sessions"> | string
    title?: StringFilter<"sessions"> | string
    description?: StringNullableFilter<"sessions"> | string | null
    duration?: IntFilter<"sessions"> | number
    sessionDate?: DateTimeFilter<"sessions"> | Date | string
    jitsiRoomId?: StringFilter<"sessions"> | string
    meetingUrl?: StringNullableFilter<"sessions"> | string | null
    status?: EnumSessionStatusFilter<"sessions"> | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFilter<"sessions"> | Date | string
    statusUpdatedBy?: StringNullableFilter<"sessions"> | string | null
    additionalParticipants?: StringNullableListFilter<"sessions">
    notes?: StringNullableFilter<"sessions"> | string | null
    feedback?: StringNullableFilter<"sessions"> | string | null
    createdAt?: DateTimeFilter<"sessions"> | Date | string
    cancellationReason?: StringNullableFilter<"sessions"> | string | null
    menteeRating?: IntNullableFilter<"sessions"> | number | null
    menteeReview?: StringNullableFilter<"sessions"> | string | null
    mentorRating?: IntNullableFilter<"sessions"> | number | null
    mentorReview?: StringNullableFilter<"sessions"> | string | null
    mentee?: XOR<MenteeScalarRelationFilter, MenteeWhereInput>
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    sessionDate?: SortOrder
    jitsiRoomId?: SortOrder
    meetingUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    statusUpdatedAt?: SortOrder
    statusUpdatedBy?: SortOrderInput | SortOrder
    additionalParticipants?: SortOrder
    notes?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    menteeRating?: SortOrderInput | SortOrder
    menteeReview?: SortOrderInput | SortOrder
    mentorRating?: SortOrderInput | SortOrder
    mentorReview?: SortOrderInput | SortOrder
    mentee?: MenteeOrderByWithRelationInput
    mentor?: MentorOrderByWithRelationInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    jitsiRoomId?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    menteeId?: StringFilter<"sessions"> | string
    mentorId?: StringFilter<"sessions"> | string
    title?: StringFilter<"sessions"> | string
    description?: StringNullableFilter<"sessions"> | string | null
    duration?: IntFilter<"sessions"> | number
    sessionDate?: DateTimeFilter<"sessions"> | Date | string
    meetingUrl?: StringNullableFilter<"sessions"> | string | null
    status?: EnumSessionStatusFilter<"sessions"> | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFilter<"sessions"> | Date | string
    statusUpdatedBy?: StringNullableFilter<"sessions"> | string | null
    additionalParticipants?: StringNullableListFilter<"sessions">
    notes?: StringNullableFilter<"sessions"> | string | null
    feedback?: StringNullableFilter<"sessions"> | string | null
    createdAt?: DateTimeFilter<"sessions"> | Date | string
    cancellationReason?: StringNullableFilter<"sessions"> | string | null
    menteeRating?: IntNullableFilter<"sessions"> | number | null
    menteeReview?: StringNullableFilter<"sessions"> | string | null
    mentorRating?: IntNullableFilter<"sessions"> | number | null
    mentorReview?: StringNullableFilter<"sessions"> | string | null
    mentee?: XOR<MenteeScalarRelationFilter, MenteeWhereInput>
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
  }, "id" | "jitsiRoomId">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    sessionDate?: SortOrder
    jitsiRoomId?: SortOrder
    meetingUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    statusUpdatedAt?: SortOrder
    statusUpdatedBy?: SortOrderInput | SortOrder
    additionalParticipants?: SortOrder
    notes?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    menteeRating?: SortOrderInput | SortOrder
    menteeReview?: SortOrderInput | SortOrder
    mentorRating?: SortOrderInput | SortOrder
    mentorReview?: SortOrderInput | SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sessions"> | number
    menteeId?: StringWithAggregatesFilter<"sessions"> | string
    mentorId?: StringWithAggregatesFilter<"sessions"> | string
    title?: StringWithAggregatesFilter<"sessions"> | string
    description?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    duration?: IntWithAggregatesFilter<"sessions"> | number
    sessionDate?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    jitsiRoomId?: StringWithAggregatesFilter<"sessions"> | string
    meetingUrl?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    status?: EnumSessionStatusWithAggregatesFilter<"sessions"> | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    statusUpdatedBy?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    additionalParticipants?: StringNullableListFilter<"sessions">
    notes?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    cancellationReason?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    menteeRating?: IntNullableWithAggregatesFilter<"sessions"> | number | null
    menteeReview?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    mentorRating?: IntNullableWithAggregatesFilter<"sessions"> | number | null
    mentorReview?: StringNullableWithAggregatesFilter<"sessions"> | string | null
  }

  export type skillsWhereInput = {
    AND?: skillsWhereInput | skillsWhereInput[]
    OR?: skillsWhereInput[]
    NOT?: skillsWhereInput | skillsWhereInput[]
    id?: IntFilter<"skills"> | number
    name?: StringFilter<"skills"> | string
    goal?: StringFilter<"skills"> | string
    status?: StringFilter<"skills"> | string
    reflection?: StringFilter<"skills"> | string
    dateAdded?: DateTimeFilter<"skills"> | Date | string
    lastUpdated?: DateTimeFilter<"skills"> | Date | string
    menteeId?: StringFilter<"skills"> | string
    mentee?: XOR<MenteeScalarRelationFilter, MenteeWhereInput>
  }

  export type skillsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    reflection?: SortOrder
    dateAdded?: SortOrder
    lastUpdated?: SortOrder
    menteeId?: SortOrder
    mentee?: MenteeOrderByWithRelationInput
  }

  export type skillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: skillsWhereInput | skillsWhereInput[]
    OR?: skillsWhereInput[]
    NOT?: skillsWhereInput | skillsWhereInput[]
    name?: StringFilter<"skills"> | string
    goal?: StringFilter<"skills"> | string
    status?: StringFilter<"skills"> | string
    reflection?: StringFilter<"skills"> | string
    dateAdded?: DateTimeFilter<"skills"> | Date | string
    lastUpdated?: DateTimeFilter<"skills"> | Date | string
    menteeId?: StringFilter<"skills"> | string
    mentee?: XOR<MenteeScalarRelationFilter, MenteeWhereInput>
  }, "id">

  export type skillsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    reflection?: SortOrder
    dateAdded?: SortOrder
    lastUpdated?: SortOrder
    menteeId?: SortOrder
    _count?: skillsCountOrderByAggregateInput
    _avg?: skillsAvgOrderByAggregateInput
    _max?: skillsMaxOrderByAggregateInput
    _min?: skillsMinOrderByAggregateInput
    _sum?: skillsSumOrderByAggregateInput
  }

  export type skillsScalarWhereWithAggregatesInput = {
    AND?: skillsScalarWhereWithAggregatesInput | skillsScalarWhereWithAggregatesInput[]
    OR?: skillsScalarWhereWithAggregatesInput[]
    NOT?: skillsScalarWhereWithAggregatesInput | skillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"skills"> | number
    name?: StringWithAggregatesFilter<"skills"> | string
    goal?: StringWithAggregatesFilter<"skills"> | string
    status?: StringWithAggregatesFilter<"skills"> | string
    reflection?: StringWithAggregatesFilter<"skills"> | string
    dateAdded?: DateTimeWithAggregatesFilter<"skills"> | Date | string
    lastUpdated?: DateTimeWithAggregatesFilter<"skills"> | Date | string
    menteeId?: StringWithAggregatesFilter<"skills"> | string
  }

  export type MenteeCreateInput = {
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    conversations?: conversationsCreateNestedManyWithoutMenteeInput
    sessions?: sessionsCreateNestedManyWithoutMenteeInput
    mentor?: MentorCreateNestedManyWithoutMenteeInput
    skills?: skillsCreateNestedManyWithoutMenteeInput
  }

  export type MenteeUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutMenteeInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutMenteeInput
    mentor?: MentorUncheckedCreateNestedManyWithoutMenteeInput
    skills?: skillsUncheckedCreateNestedManyWithoutMenteeInput
  }

  export type MenteeUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUpdateManyWithoutMenteeNestedInput
    sessions?: sessionsUpdateManyWithoutMenteeNestedInput
    mentor?: MentorUpdateManyWithoutMenteeNestedInput
    skills?: skillsUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutMenteeNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutMenteeNestedInput
    mentor?: MentorUncheckedUpdateManyWithoutMenteeNestedInput
    skills?: skillsUncheckedUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
  }

  export type MenteeUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenteeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MentorCreateInput = {
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    Achievements?: AchievementsCreateNestedOneWithoutMentorInput
    conversations?: conversationsCreateNestedManyWithoutMentorInput
    sessions?: sessionsCreateNestedManyWithoutMentorInput
    mentee?: MenteeCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    Achievements?: AchievementsUncheckedCreateNestedOneWithoutMentorInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutMentorInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutMentorInput
    mentee?: MenteeUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    Achievements?: AchievementsUpdateOneWithoutMentorNestedInput
    conversations?: conversationsUpdateManyWithoutMentorNestedInput
    sessions?: sessionsUpdateManyWithoutMentorNestedInput
    mentee?: MenteeUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    Achievements?: AchievementsUncheckedUpdateOneWithoutMentorNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutMentorNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutMentorNestedInput
    mentee?: MenteeUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MentorCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
  }

  export type MentorUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MentorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AchievementsCreateInput = {
    experience?: AchievementsCreateexperienceInput | string[]
    education?: AchievementsCreateeducationInput | string[]
    accolades?: AchievementsCreateaccoladesInput | string[]
    reviews?: AchievementsCreatereviewsInput | string[]
    mentor: MentorCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementsUncheckedCreateInput = {
    id?: number
    supabaseId: string
    experience?: AchievementsCreateexperienceInput | string[]
    education?: AchievementsCreateeducationInput | string[]
    accolades?: AchievementsCreateaccoladesInput | string[]
    reviews?: AchievementsCreatereviewsInput | string[]
  }

  export type AchievementsUpdateInput = {
    experience?: AchievementsUpdateexperienceInput | string[]
    education?: AchievementsUpdateeducationInput | string[]
    accolades?: AchievementsUpdateaccoladesInput | string[]
    reviews?: AchievementsUpdatereviewsInput | string[]
    mentor?: MentorUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    experience?: AchievementsUpdateexperienceInput | string[]
    education?: AchievementsUpdateeducationInput | string[]
    accolades?: AchievementsUpdateaccoladesInput | string[]
    reviews?: AchievementsUpdatereviewsInput | string[]
  }

  export type AchievementsCreateManyInput = {
    id?: number
    supabaseId: string
    experience?: AchievementsCreateexperienceInput | string[]
    education?: AchievementsCreateeducationInput | string[]
    accolades?: AchievementsCreateaccoladesInput | string[]
    reviews?: AchievementsCreatereviewsInput | string[]
  }

  export type AchievementsUpdateManyMutationInput = {
    experience?: AchievementsUpdateexperienceInput | string[]
    education?: AchievementsUpdateeducationInput | string[]
    accolades?: AchievementsUpdateaccoladesInput | string[]
    reviews?: AchievementsUpdatereviewsInput | string[]
  }

  export type AchievementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    experience?: AchievementsUpdateexperienceInput | string[]
    education?: AchievementsUpdateeducationInput | string[]
    accolades?: AchievementsUpdateaccoladesInput | string[]
    reviews?: AchievementsUpdatereviewsInput | string[]
  }

  export type conversationsCreateInput = {
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
    mentee: MenteeCreateNestedOneWithoutConversationsInput
    mentor: MentorCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateInput = {
    id?: number
    menteeId: string
    mentorId: string
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mentee?: MenteeUpdateOneRequiredWithoutConversationsNestedInput
    mentor?: MentorUpdateOneRequiredWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsCreateManyInput = {
    id?: number
    menteeId: string
    mentorId: string
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
  }

  export type conversationsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type conversationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesCreateInput = {
    senderRole: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    messageType?: string
    senderId: string
    conversations: conversationsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    conversationId: number
    senderRole: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    messageType?: string
    senderId: string
  }

  export type messagesUpdateInput = {
    senderRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversations?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    senderRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type messagesCreateManyInput = {
    id?: number
    conversationId: number
    senderRole: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    messageType?: string
    senderId: string
  }

  export type messagesUpdateManyMutationInput = {
    senderRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    senderRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsCreateInput = {
    title: string
    description?: string | null
    duration?: number
    sessionDate: Date | string
    jitsiRoomId: string
    meetingUrl?: string | null
    status?: $Enums.SessionStatus
    statusUpdatedAt?: Date | string
    statusUpdatedBy?: string | null
    additionalParticipants?: sessionsCreateadditionalParticipantsInput | string[]
    notes?: string | null
    feedback?: string | null
    createdAt?: Date | string
    cancellationReason?: string | null
    menteeRating?: number | null
    menteeReview?: string | null
    mentorRating?: number | null
    mentorReview?: string | null
    mentee: MenteeCreateNestedOneWithoutSessionsInput
    mentor: MentorCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateInput = {
    id?: number
    menteeId: string
    mentorId: string
    title: string
    description?: string | null
    duration?: number
    sessionDate: Date | string
    jitsiRoomId: string
    meetingUrl?: string | null
    status?: $Enums.SessionStatus
    statusUpdatedAt?: Date | string
    statusUpdatedBy?: string | null
    additionalParticipants?: sessionsCreateadditionalParticipantsInput | string[]
    notes?: string | null
    feedback?: string | null
    createdAt?: Date | string
    cancellationReason?: string | null
    menteeRating?: number | null
    menteeReview?: string | null
    mentorRating?: number | null
    mentorReview?: string | null
  }

  export type sessionsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jitsiRoomId?: StringFieldUpdateOperationsInput | string
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    additionalParticipants?: sessionsUpdateadditionalParticipantsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    menteeRating?: NullableIntFieldUpdateOperationsInput | number | null
    menteeReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentorRating?: NullableIntFieldUpdateOperationsInput | number | null
    mentorReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentee?: MenteeUpdateOneRequiredWithoutSessionsNestedInput
    mentor?: MentorUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jitsiRoomId?: StringFieldUpdateOperationsInput | string
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    additionalParticipants?: sessionsUpdateadditionalParticipantsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    menteeRating?: NullableIntFieldUpdateOperationsInput | number | null
    menteeReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentorRating?: NullableIntFieldUpdateOperationsInput | number | null
    mentorReview?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsCreateManyInput = {
    id?: number
    menteeId: string
    mentorId: string
    title: string
    description?: string | null
    duration?: number
    sessionDate: Date | string
    jitsiRoomId: string
    meetingUrl?: string | null
    status?: $Enums.SessionStatus
    statusUpdatedAt?: Date | string
    statusUpdatedBy?: string | null
    additionalParticipants?: sessionsCreateadditionalParticipantsInput | string[]
    notes?: string | null
    feedback?: string | null
    createdAt?: Date | string
    cancellationReason?: string | null
    menteeRating?: number | null
    menteeReview?: string | null
    mentorRating?: number | null
    mentorReview?: string | null
  }

  export type sessionsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jitsiRoomId?: StringFieldUpdateOperationsInput | string
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    additionalParticipants?: sessionsUpdateadditionalParticipantsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    menteeRating?: NullableIntFieldUpdateOperationsInput | number | null
    menteeReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentorRating?: NullableIntFieldUpdateOperationsInput | number | null
    mentorReview?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jitsiRoomId?: StringFieldUpdateOperationsInput | string
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    additionalParticipants?: sessionsUpdateadditionalParticipantsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    menteeRating?: NullableIntFieldUpdateOperationsInput | number | null
    menteeReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentorRating?: NullableIntFieldUpdateOperationsInput | number | null
    mentorReview?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillsCreateInput = {
    name: string
    goal: string
    status?: string
    reflection?: string
    dateAdded?: Date | string
    lastUpdated?: Date | string
    mentee: MenteeCreateNestedOneWithoutSkillsInput
  }

  export type skillsUncheckedCreateInput = {
    id?: number
    name: string
    goal: string
    status?: string
    reflection?: string
    dateAdded?: Date | string
    lastUpdated?: Date | string
    menteeId: string
  }

  export type skillsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reflection?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    mentee?: MenteeUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type skillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reflection?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    menteeId?: StringFieldUpdateOperationsInput | string
  }

  export type skillsCreateManyInput = {
    id?: number
    name: string
    goal: string
    status?: string
    reflection?: string
    dateAdded?: Date | string
    lastUpdated?: Date | string
    menteeId: string
  }

  export type skillsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reflection?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reflection?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    menteeId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type ConversationsListRelationFilter = {
    every?: conversationsWhereInput
    some?: conversationsWhereInput
    none?: conversationsWhereInput
  }

  export type SessionsListRelationFilter = {
    every?: sessionsWhereInput
    some?: sessionsWhereInput
    none?: sessionsWhereInput
  }

  export type MentorListRelationFilter = {
    every?: MentorWhereInput
    some?: MentorWhereInput
    none?: MentorWhereInput
  }

  export type SkillsListRelationFilter = {
    every?: skillsWhereInput
    some?: skillsWhereInput
    none?: skillsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type conversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MentorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type skillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenteeCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    ratings?: SortOrder
    profile_picture?: SortOrder
    supabaseId?: SortOrder
    bio?: SortOrder
    joined?: SortOrder
    goals?: SortOrder
    experience?: SortOrder
    Github?: SortOrder
    Instagram?: SortOrder
    LinkedIn?: SortOrder
    Twitter?: SortOrder
    Website?: SortOrder
  }

  export type MenteeAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    ratings?: SortOrder
    experience?: SortOrder
  }

  export type MenteeMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    ratings?: SortOrder
    profile_picture?: SortOrder
    supabaseId?: SortOrder
    bio?: SortOrder
    joined?: SortOrder
    experience?: SortOrder
    Github?: SortOrder
    Instagram?: SortOrder
    LinkedIn?: SortOrder
    Twitter?: SortOrder
    Website?: SortOrder
  }

  export type MenteeMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    location?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    ratings?: SortOrder
    profile_picture?: SortOrder
    supabaseId?: SortOrder
    bio?: SortOrder
    joined?: SortOrder
    experience?: SortOrder
    Github?: SortOrder
    Instagram?: SortOrder
    LinkedIn?: SortOrder
    Twitter?: SortOrder
    Website?: SortOrder
  }

  export type MenteeSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    ratings?: SortOrder
    experience?: SortOrder
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

  export type AchievementsNullableScalarRelationFilter = {
    is?: AchievementsWhereInput | null
    isNot?: AchievementsWhereInput | null
  }

  export type MenteeListRelationFilter = {
    every?: MenteeWhereInput
    some?: MenteeWhereInput
    none?: MenteeWhereInput
  }

  export type MenteeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MentorCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    supabaseId?: SortOrder
    gender?: SortOrder
    profile_picture?: SortOrder
    location?: SortOrder
    joined?: SortOrder
    ratings?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    expertise?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
    Github?: SortOrder
    Instagram?: SortOrder
    LinkedIn?: SortOrder
    Twitter?: SortOrder
    Website?: SortOrder
  }

  export type MentorAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    ratings?: SortOrder
    experience?: SortOrder
  }

  export type MentorMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    supabaseId?: SortOrder
    gender?: SortOrder
    profile_picture?: SortOrder
    location?: SortOrder
    joined?: SortOrder
    ratings?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
    Github?: SortOrder
    Instagram?: SortOrder
    LinkedIn?: SortOrder
    Twitter?: SortOrder
    Website?: SortOrder
  }

  export type MentorMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    supabaseId?: SortOrder
    gender?: SortOrder
    profile_picture?: SortOrder
    location?: SortOrder
    joined?: SortOrder
    ratings?: SortOrder
    updateAt?: SortOrder
    last_login?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
    Github?: SortOrder
    Instagram?: SortOrder
    LinkedIn?: SortOrder
    Twitter?: SortOrder
    Website?: SortOrder
  }

  export type MentorSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    ratings?: SortOrder
    experience?: SortOrder
  }

  export type MentorScalarRelationFilter = {
    is?: MentorWhereInput
    isNot?: MentorWhereInput
  }

  export type AchievementsCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    accolades?: SortOrder
    reviews?: SortOrder
  }

  export type AchievementsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AchievementsMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseId?: SortOrder
  }

  export type AchievementsMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseId?: SortOrder
  }

  export type AchievementsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MenteeScalarRelationFilter = {
    is?: MenteeWhereInput
    isNot?: MenteeWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type conversationsMentorIdMenteeIdCompoundUniqueInput = {
    mentorId: string
    menteeId: string
  }

  export type conversationsCountOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: SortOrder
  }

  export type conversationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type conversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: SortOrder
  }

  export type conversationsMinOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: SortOrder
  }

  export type conversationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ConversationsScalarRelationFilter = {
    is?: conversationsWhereInput
    isNot?: conversationsWhereInput
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderRole?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    messageType?: SortOrder
    senderId?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderRole?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    messageType?: SortOrder
    senderId?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderRole?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    messageType?: SortOrder
    senderId?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
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

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    sessionDate?: SortOrder
    jitsiRoomId?: SortOrder
    meetingUrl?: SortOrder
    status?: SortOrder
    statusUpdatedAt?: SortOrder
    statusUpdatedBy?: SortOrder
    additionalParticipants?: SortOrder
    notes?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    cancellationReason?: SortOrder
    menteeRating?: SortOrder
    menteeReview?: SortOrder
    mentorRating?: SortOrder
    mentorReview?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    menteeRating?: SortOrder
    mentorRating?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    sessionDate?: SortOrder
    jitsiRoomId?: SortOrder
    meetingUrl?: SortOrder
    status?: SortOrder
    statusUpdatedAt?: SortOrder
    statusUpdatedBy?: SortOrder
    notes?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    cancellationReason?: SortOrder
    menteeRating?: SortOrder
    menteeReview?: SortOrder
    mentorRating?: SortOrder
    mentorReview?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    sessionDate?: SortOrder
    jitsiRoomId?: SortOrder
    meetingUrl?: SortOrder
    status?: SortOrder
    statusUpdatedAt?: SortOrder
    statusUpdatedBy?: SortOrder
    notes?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    cancellationReason?: SortOrder
    menteeRating?: SortOrder
    menteeReview?: SortOrder
    mentorRating?: SortOrder
    mentorReview?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    menteeRating?: SortOrder
    mentorRating?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
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

  export type skillsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    reflection?: SortOrder
    dateAdded?: SortOrder
    lastUpdated?: SortOrder
    menteeId?: SortOrder
  }

  export type skillsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type skillsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    reflection?: SortOrder
    dateAdded?: SortOrder
    lastUpdated?: SortOrder
    menteeId?: SortOrder
  }

  export type skillsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    reflection?: SortOrder
    dateAdded?: SortOrder
    lastUpdated?: SortOrder
    menteeId?: SortOrder
  }

  export type skillsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MenteeCreategoalsInput = {
    set: string[]
  }

  export type conversationsCreateNestedManyWithoutMenteeInput = {
    create?: XOR<conversationsCreateWithoutMenteeInput, conversationsUncheckedCreateWithoutMenteeInput> | conversationsCreateWithoutMenteeInput[] | conversationsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutMenteeInput | conversationsCreateOrConnectWithoutMenteeInput[]
    createMany?: conversationsCreateManyMenteeInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type sessionsCreateNestedManyWithoutMenteeInput = {
    create?: XOR<sessionsCreateWithoutMenteeInput, sessionsUncheckedCreateWithoutMenteeInput> | sessionsCreateWithoutMenteeInput[] | sessionsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutMenteeInput | sessionsCreateOrConnectWithoutMenteeInput[]
    createMany?: sessionsCreateManyMenteeInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type MentorCreateNestedManyWithoutMenteeInput = {
    create?: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput> | MentorCreateWithoutMenteeInput[] | MentorUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorCreateOrConnectWithoutMenteeInput | MentorCreateOrConnectWithoutMenteeInput[]
    connect?: MentorWhereUniqueInput | MentorWhereUniqueInput[]
  }

  export type skillsCreateNestedManyWithoutMenteeInput = {
    create?: XOR<skillsCreateWithoutMenteeInput, skillsUncheckedCreateWithoutMenteeInput> | skillsCreateWithoutMenteeInput[] | skillsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: skillsCreateOrConnectWithoutMenteeInput | skillsCreateOrConnectWithoutMenteeInput[]
    createMany?: skillsCreateManyMenteeInputEnvelope
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
  }

  export type conversationsUncheckedCreateNestedManyWithoutMenteeInput = {
    create?: XOR<conversationsCreateWithoutMenteeInput, conversationsUncheckedCreateWithoutMenteeInput> | conversationsCreateWithoutMenteeInput[] | conversationsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutMenteeInput | conversationsCreateOrConnectWithoutMenteeInput[]
    createMany?: conversationsCreateManyMenteeInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type sessionsUncheckedCreateNestedManyWithoutMenteeInput = {
    create?: XOR<sessionsCreateWithoutMenteeInput, sessionsUncheckedCreateWithoutMenteeInput> | sessionsCreateWithoutMenteeInput[] | sessionsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutMenteeInput | sessionsCreateOrConnectWithoutMenteeInput[]
    createMany?: sessionsCreateManyMenteeInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type MentorUncheckedCreateNestedManyWithoutMenteeInput = {
    create?: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput> | MentorCreateWithoutMenteeInput[] | MentorUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorCreateOrConnectWithoutMenteeInput | MentorCreateOrConnectWithoutMenteeInput[]
    connect?: MentorWhereUniqueInput | MentorWhereUniqueInput[]
  }

  export type skillsUncheckedCreateNestedManyWithoutMenteeInput = {
    create?: XOR<skillsCreateWithoutMenteeInput, skillsUncheckedCreateWithoutMenteeInput> | skillsCreateWithoutMenteeInput[] | skillsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: skillsCreateOrConnectWithoutMenteeInput | skillsCreateOrConnectWithoutMenteeInput[]
    createMany?: skillsCreateManyMenteeInputEnvelope
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
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

  export type MenteeUpdategoalsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type conversationsUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<conversationsCreateWithoutMenteeInput, conversationsUncheckedCreateWithoutMenteeInput> | conversationsCreateWithoutMenteeInput[] | conversationsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutMenteeInput | conversationsCreateOrConnectWithoutMenteeInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutMenteeInput | conversationsUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: conversationsCreateManyMenteeInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutMenteeInput | conversationsUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutMenteeInput | conversationsUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type sessionsUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<sessionsCreateWithoutMenteeInput, sessionsUncheckedCreateWithoutMenteeInput> | sessionsCreateWithoutMenteeInput[] | sessionsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutMenteeInput | sessionsCreateOrConnectWithoutMenteeInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutMenteeInput | sessionsUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: sessionsCreateManyMenteeInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutMenteeInput | sessionsUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutMenteeInput | sessionsUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type MentorUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput> | MentorCreateWithoutMenteeInput[] | MentorUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorCreateOrConnectWithoutMenteeInput | MentorCreateOrConnectWithoutMenteeInput[]
    upsert?: MentorUpsertWithWhereUniqueWithoutMenteeInput | MentorUpsertWithWhereUniqueWithoutMenteeInput[]
    set?: MentorWhereUniqueInput | MentorWhereUniqueInput[]
    disconnect?: MentorWhereUniqueInput | MentorWhereUniqueInput[]
    delete?: MentorWhereUniqueInput | MentorWhereUniqueInput[]
    connect?: MentorWhereUniqueInput | MentorWhereUniqueInput[]
    update?: MentorUpdateWithWhereUniqueWithoutMenteeInput | MentorUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: MentorUpdateManyWithWhereWithoutMenteeInput | MentorUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: MentorScalarWhereInput | MentorScalarWhereInput[]
  }

  export type skillsUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<skillsCreateWithoutMenteeInput, skillsUncheckedCreateWithoutMenteeInput> | skillsCreateWithoutMenteeInput[] | skillsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: skillsCreateOrConnectWithoutMenteeInput | skillsCreateOrConnectWithoutMenteeInput[]
    upsert?: skillsUpsertWithWhereUniqueWithoutMenteeInput | skillsUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: skillsCreateManyMenteeInputEnvelope
    set?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    disconnect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    delete?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    update?: skillsUpdateWithWhereUniqueWithoutMenteeInput | skillsUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: skillsUpdateManyWithWhereWithoutMenteeInput | skillsUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: skillsScalarWhereInput | skillsScalarWhereInput[]
  }

  export type conversationsUncheckedUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<conversationsCreateWithoutMenteeInput, conversationsUncheckedCreateWithoutMenteeInput> | conversationsCreateWithoutMenteeInput[] | conversationsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutMenteeInput | conversationsCreateOrConnectWithoutMenteeInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutMenteeInput | conversationsUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: conversationsCreateManyMenteeInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutMenteeInput | conversationsUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutMenteeInput | conversationsUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type sessionsUncheckedUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<sessionsCreateWithoutMenteeInput, sessionsUncheckedCreateWithoutMenteeInput> | sessionsCreateWithoutMenteeInput[] | sessionsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutMenteeInput | sessionsCreateOrConnectWithoutMenteeInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutMenteeInput | sessionsUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: sessionsCreateManyMenteeInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutMenteeInput | sessionsUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutMenteeInput | sessionsUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type MentorUncheckedUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput> | MentorCreateWithoutMenteeInput[] | MentorUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorCreateOrConnectWithoutMenteeInput | MentorCreateOrConnectWithoutMenteeInput[]
    upsert?: MentorUpsertWithWhereUniqueWithoutMenteeInput | MentorUpsertWithWhereUniqueWithoutMenteeInput[]
    set?: MentorWhereUniqueInput | MentorWhereUniqueInput[]
    disconnect?: MentorWhereUniqueInput | MentorWhereUniqueInput[]
    delete?: MentorWhereUniqueInput | MentorWhereUniqueInput[]
    connect?: MentorWhereUniqueInput | MentorWhereUniqueInput[]
    update?: MentorUpdateWithWhereUniqueWithoutMenteeInput | MentorUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: MentorUpdateManyWithWhereWithoutMenteeInput | MentorUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: MentorScalarWhereInput | MentorScalarWhereInput[]
  }

  export type skillsUncheckedUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<skillsCreateWithoutMenteeInput, skillsUncheckedCreateWithoutMenteeInput> | skillsCreateWithoutMenteeInput[] | skillsUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: skillsCreateOrConnectWithoutMenteeInput | skillsCreateOrConnectWithoutMenteeInput[]
    upsert?: skillsUpsertWithWhereUniqueWithoutMenteeInput | skillsUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: skillsCreateManyMenteeInputEnvelope
    set?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    disconnect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    delete?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    update?: skillsUpdateWithWhereUniqueWithoutMenteeInput | skillsUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: skillsUpdateManyWithWhereWithoutMenteeInput | skillsUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: skillsScalarWhereInput | skillsScalarWhereInput[]
  }

  export type MentorCreateexpertiseInput = {
    set: string[]
  }

  export type AchievementsCreateNestedOneWithoutMentorInput = {
    create?: XOR<AchievementsCreateWithoutMentorInput, AchievementsUncheckedCreateWithoutMentorInput>
    connectOrCreate?: AchievementsCreateOrConnectWithoutMentorInput
    connect?: AchievementsWhereUniqueInput
  }

  export type conversationsCreateNestedManyWithoutMentorInput = {
    create?: XOR<conversationsCreateWithoutMentorInput, conversationsUncheckedCreateWithoutMentorInput> | conversationsCreateWithoutMentorInput[] | conversationsUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutMentorInput | conversationsCreateOrConnectWithoutMentorInput[]
    createMany?: conversationsCreateManyMentorInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type sessionsCreateNestedManyWithoutMentorInput = {
    create?: XOR<sessionsCreateWithoutMentorInput, sessionsUncheckedCreateWithoutMentorInput> | sessionsCreateWithoutMentorInput[] | sessionsUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutMentorInput | sessionsCreateOrConnectWithoutMentorInput[]
    createMany?: sessionsCreateManyMentorInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type MenteeCreateNestedManyWithoutMentorInput = {
    create?: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput> | MenteeCreateWithoutMentorInput[] | MenteeUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MenteeCreateOrConnectWithoutMentorInput | MenteeCreateOrConnectWithoutMentorInput[]
    connect?: MenteeWhereUniqueInput | MenteeWhereUniqueInput[]
  }

  export type AchievementsUncheckedCreateNestedOneWithoutMentorInput = {
    create?: XOR<AchievementsCreateWithoutMentorInput, AchievementsUncheckedCreateWithoutMentorInput>
    connectOrCreate?: AchievementsCreateOrConnectWithoutMentorInput
    connect?: AchievementsWhereUniqueInput
  }

  export type conversationsUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<conversationsCreateWithoutMentorInput, conversationsUncheckedCreateWithoutMentorInput> | conversationsCreateWithoutMentorInput[] | conversationsUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutMentorInput | conversationsCreateOrConnectWithoutMentorInput[]
    createMany?: conversationsCreateManyMentorInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type sessionsUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<sessionsCreateWithoutMentorInput, sessionsUncheckedCreateWithoutMentorInput> | sessionsCreateWithoutMentorInput[] | sessionsUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutMentorInput | sessionsCreateOrConnectWithoutMentorInput[]
    createMany?: sessionsCreateManyMentorInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type MenteeUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput> | MenteeCreateWithoutMentorInput[] | MenteeUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MenteeCreateOrConnectWithoutMentorInput | MenteeCreateOrConnectWithoutMentorInput[]
    connect?: MenteeWhereUniqueInput | MenteeWhereUniqueInput[]
  }

  export type MentorUpdateexpertiseInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AchievementsUpdateOneWithoutMentorNestedInput = {
    create?: XOR<AchievementsCreateWithoutMentorInput, AchievementsUncheckedCreateWithoutMentorInput>
    connectOrCreate?: AchievementsCreateOrConnectWithoutMentorInput
    upsert?: AchievementsUpsertWithoutMentorInput
    disconnect?: AchievementsWhereInput | boolean
    delete?: AchievementsWhereInput | boolean
    connect?: AchievementsWhereUniqueInput
    update?: XOR<XOR<AchievementsUpdateToOneWithWhereWithoutMentorInput, AchievementsUpdateWithoutMentorInput>, AchievementsUncheckedUpdateWithoutMentorInput>
  }

  export type conversationsUpdateManyWithoutMentorNestedInput = {
    create?: XOR<conversationsCreateWithoutMentorInput, conversationsUncheckedCreateWithoutMentorInput> | conversationsCreateWithoutMentorInput[] | conversationsUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutMentorInput | conversationsCreateOrConnectWithoutMentorInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutMentorInput | conversationsUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: conversationsCreateManyMentorInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutMentorInput | conversationsUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutMentorInput | conversationsUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type sessionsUpdateManyWithoutMentorNestedInput = {
    create?: XOR<sessionsCreateWithoutMentorInput, sessionsUncheckedCreateWithoutMentorInput> | sessionsCreateWithoutMentorInput[] | sessionsUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutMentorInput | sessionsCreateOrConnectWithoutMentorInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutMentorInput | sessionsUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: sessionsCreateManyMentorInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutMentorInput | sessionsUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutMentorInput | sessionsUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type MenteeUpdateManyWithoutMentorNestedInput = {
    create?: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput> | MenteeCreateWithoutMentorInput[] | MenteeUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MenteeCreateOrConnectWithoutMentorInput | MenteeCreateOrConnectWithoutMentorInput[]
    upsert?: MenteeUpsertWithWhereUniqueWithoutMentorInput | MenteeUpsertWithWhereUniqueWithoutMentorInput[]
    set?: MenteeWhereUniqueInput | MenteeWhereUniqueInput[]
    disconnect?: MenteeWhereUniqueInput | MenteeWhereUniqueInput[]
    delete?: MenteeWhereUniqueInput | MenteeWhereUniqueInput[]
    connect?: MenteeWhereUniqueInput | MenteeWhereUniqueInput[]
    update?: MenteeUpdateWithWhereUniqueWithoutMentorInput | MenteeUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: MenteeUpdateManyWithWhereWithoutMentorInput | MenteeUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: MenteeScalarWhereInput | MenteeScalarWhereInput[]
  }

  export type AchievementsUncheckedUpdateOneWithoutMentorNestedInput = {
    create?: XOR<AchievementsCreateWithoutMentorInput, AchievementsUncheckedCreateWithoutMentorInput>
    connectOrCreate?: AchievementsCreateOrConnectWithoutMentorInput
    upsert?: AchievementsUpsertWithoutMentorInput
    disconnect?: AchievementsWhereInput | boolean
    delete?: AchievementsWhereInput | boolean
    connect?: AchievementsWhereUniqueInput
    update?: XOR<XOR<AchievementsUpdateToOneWithWhereWithoutMentorInput, AchievementsUpdateWithoutMentorInput>, AchievementsUncheckedUpdateWithoutMentorInput>
  }

  export type conversationsUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<conversationsCreateWithoutMentorInput, conversationsUncheckedCreateWithoutMentorInput> | conversationsCreateWithoutMentorInput[] | conversationsUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutMentorInput | conversationsCreateOrConnectWithoutMentorInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutMentorInput | conversationsUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: conversationsCreateManyMentorInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutMentorInput | conversationsUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutMentorInput | conversationsUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type sessionsUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<sessionsCreateWithoutMentorInput, sessionsUncheckedCreateWithoutMentorInput> | sessionsCreateWithoutMentorInput[] | sessionsUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutMentorInput | sessionsCreateOrConnectWithoutMentorInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutMentorInput | sessionsUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: sessionsCreateManyMentorInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutMentorInput | sessionsUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutMentorInput | sessionsUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type MenteeUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput> | MenteeCreateWithoutMentorInput[] | MenteeUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MenteeCreateOrConnectWithoutMentorInput | MenteeCreateOrConnectWithoutMentorInput[]
    upsert?: MenteeUpsertWithWhereUniqueWithoutMentorInput | MenteeUpsertWithWhereUniqueWithoutMentorInput[]
    set?: MenteeWhereUniqueInput | MenteeWhereUniqueInput[]
    disconnect?: MenteeWhereUniqueInput | MenteeWhereUniqueInput[]
    delete?: MenteeWhereUniqueInput | MenteeWhereUniqueInput[]
    connect?: MenteeWhereUniqueInput | MenteeWhereUniqueInput[]
    update?: MenteeUpdateWithWhereUniqueWithoutMentorInput | MenteeUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: MenteeUpdateManyWithWhereWithoutMentorInput | MenteeUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: MenteeScalarWhereInput | MenteeScalarWhereInput[]
  }

  export type AchievementsCreateexperienceInput = {
    set: string[]
  }

  export type AchievementsCreateeducationInput = {
    set: string[]
  }

  export type AchievementsCreateaccoladesInput = {
    set: string[]
  }

  export type AchievementsCreatereviewsInput = {
    set: string[]
  }

  export type MentorCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<MentorCreateWithoutAchievementsInput, MentorUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: MentorCreateOrConnectWithoutAchievementsInput
    connect?: MentorWhereUniqueInput
  }

  export type AchievementsUpdateexperienceInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AchievementsUpdateeducationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AchievementsUpdateaccoladesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AchievementsUpdatereviewsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MentorUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<MentorCreateWithoutAchievementsInput, MentorUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: MentorCreateOrConnectWithoutAchievementsInput
    upsert?: MentorUpsertWithoutAchievementsInput
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutAchievementsInput, MentorUpdateWithoutAchievementsInput>, MentorUncheckedUpdateWithoutAchievementsInput>
  }

  export type MenteeCreateNestedOneWithoutConversationsInput = {
    create?: XOR<MenteeCreateWithoutConversationsInput, MenteeUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: MenteeCreateOrConnectWithoutConversationsInput
    connect?: MenteeWhereUniqueInput
  }

  export type MentorCreateNestedOneWithoutConversationsInput = {
    create?: XOR<MentorCreateWithoutConversationsInput, MentorUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: MentorCreateOrConnectWithoutConversationsInput
    connect?: MentorWhereUniqueInput
  }

  export type messagesCreateNestedManyWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type MenteeUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<MenteeCreateWithoutConversationsInput, MenteeUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: MenteeCreateOrConnectWithoutConversationsInput
    upsert?: MenteeUpsertWithoutConversationsInput
    connect?: MenteeWhereUniqueInput
    update?: XOR<XOR<MenteeUpdateToOneWithWhereWithoutConversationsInput, MenteeUpdateWithoutConversationsInput>, MenteeUncheckedUpdateWithoutConversationsInput>
  }

  export type MentorUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<MentorCreateWithoutConversationsInput, MentorUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: MentorCreateOrConnectWithoutConversationsInput
    upsert?: MentorUpsertWithoutConversationsInput
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutConversationsInput, MentorUpdateWithoutConversationsInput>, MentorUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationsInput | messagesUpsertWithWhereUniqueWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationsInput | messagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationsInput | messagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationsInput | messagesUpsertWithWhereUniqueWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationsInput | messagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationsInput | messagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type conversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type conversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    upsert?: conversationsUpsertWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutMessagesInput, conversationsUpdateWithoutMessagesInput>, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type sessionsCreateadditionalParticipantsInput = {
    set: string[]
  }

  export type MenteeCreateNestedOneWithoutSessionsInput = {
    create?: XOR<MenteeCreateWithoutSessionsInput, MenteeUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: MenteeCreateOrConnectWithoutSessionsInput
    connect?: MenteeWhereUniqueInput
  }

  export type MentorCreateNestedOneWithoutSessionsInput = {
    create?: XOR<MentorCreateWithoutSessionsInput, MentorUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: MentorCreateOrConnectWithoutSessionsInput
    connect?: MentorWhereUniqueInput
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type sessionsUpdateadditionalParticipantsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenteeUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<MenteeCreateWithoutSessionsInput, MenteeUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: MenteeCreateOrConnectWithoutSessionsInput
    upsert?: MenteeUpsertWithoutSessionsInput
    connect?: MenteeWhereUniqueInput
    update?: XOR<XOR<MenteeUpdateToOneWithWhereWithoutSessionsInput, MenteeUpdateWithoutSessionsInput>, MenteeUncheckedUpdateWithoutSessionsInput>
  }

  export type MentorUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<MentorCreateWithoutSessionsInput, MentorUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: MentorCreateOrConnectWithoutSessionsInput
    upsert?: MentorUpsertWithoutSessionsInput
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutSessionsInput, MentorUpdateWithoutSessionsInput>, MentorUncheckedUpdateWithoutSessionsInput>
  }

  export type MenteeCreateNestedOneWithoutSkillsInput = {
    create?: XOR<MenteeCreateWithoutSkillsInput, MenteeUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: MenteeCreateOrConnectWithoutSkillsInput
    connect?: MenteeWhereUniqueInput
  }

  export type MenteeUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<MenteeCreateWithoutSkillsInput, MenteeUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: MenteeCreateOrConnectWithoutSkillsInput
    upsert?: MenteeUpsertWithoutSkillsInput
    connect?: MenteeWhereUniqueInput
    update?: XOR<XOR<MenteeUpdateToOneWithWhereWithoutSkillsInput, MenteeUpdateWithoutSkillsInput>, MenteeUncheckedUpdateWithoutSkillsInput>
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

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
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

  export type conversationsCreateWithoutMenteeInput = {
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
    mentor: MentorCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutMenteeInput = {
    id?: number
    mentorId: string
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsCreateOrConnectWithoutMenteeInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMenteeInput, conversationsUncheckedCreateWithoutMenteeInput>
  }

  export type conversationsCreateManyMenteeInputEnvelope = {
    data: conversationsCreateManyMenteeInput | conversationsCreateManyMenteeInput[]
    skipDuplicates?: boolean
  }

  export type sessionsCreateWithoutMenteeInput = {
    title: string
    description?: string | null
    duration?: number
    sessionDate: Date | string
    jitsiRoomId: string
    meetingUrl?: string | null
    status?: $Enums.SessionStatus
    statusUpdatedAt?: Date | string
    statusUpdatedBy?: string | null
    additionalParticipants?: sessionsCreateadditionalParticipantsInput | string[]
    notes?: string | null
    feedback?: string | null
    createdAt?: Date | string
    cancellationReason?: string | null
    menteeRating?: number | null
    menteeReview?: string | null
    mentorRating?: number | null
    mentorReview?: string | null
    mentor: MentorCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateWithoutMenteeInput = {
    id?: number
    mentorId: string
    title: string
    description?: string | null
    duration?: number
    sessionDate: Date | string
    jitsiRoomId: string
    meetingUrl?: string | null
    status?: $Enums.SessionStatus
    statusUpdatedAt?: Date | string
    statusUpdatedBy?: string | null
    additionalParticipants?: sessionsCreateadditionalParticipantsInput | string[]
    notes?: string | null
    feedback?: string | null
    createdAt?: Date | string
    cancellationReason?: string | null
    menteeRating?: number | null
    menteeReview?: string | null
    mentorRating?: number | null
    mentorReview?: string | null
  }

  export type sessionsCreateOrConnectWithoutMenteeInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutMenteeInput, sessionsUncheckedCreateWithoutMenteeInput>
  }

  export type sessionsCreateManyMenteeInputEnvelope = {
    data: sessionsCreateManyMenteeInput | sessionsCreateManyMenteeInput[]
    skipDuplicates?: boolean
  }

  export type MentorCreateWithoutMenteeInput = {
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    Achievements?: AchievementsCreateNestedOneWithoutMentorInput
    conversations?: conversationsCreateNestedManyWithoutMentorInput
    sessions?: sessionsCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutMenteeInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    Achievements?: AchievementsUncheckedCreateNestedOneWithoutMentorInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutMentorInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutMenteeInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput>
  }

  export type skillsCreateWithoutMenteeInput = {
    name: string
    goal: string
    status?: string
    reflection?: string
    dateAdded?: Date | string
    lastUpdated?: Date | string
  }

  export type skillsUncheckedCreateWithoutMenteeInput = {
    id?: number
    name: string
    goal: string
    status?: string
    reflection?: string
    dateAdded?: Date | string
    lastUpdated?: Date | string
  }

  export type skillsCreateOrConnectWithoutMenteeInput = {
    where: skillsWhereUniqueInput
    create: XOR<skillsCreateWithoutMenteeInput, skillsUncheckedCreateWithoutMenteeInput>
  }

  export type skillsCreateManyMenteeInputEnvelope = {
    data: skillsCreateManyMenteeInput | skillsCreateManyMenteeInput[]
    skipDuplicates?: boolean
  }

  export type conversationsUpsertWithWhereUniqueWithoutMenteeInput = {
    where: conversationsWhereUniqueInput
    update: XOR<conversationsUpdateWithoutMenteeInput, conversationsUncheckedUpdateWithoutMenteeInput>
    create: XOR<conversationsCreateWithoutMenteeInput, conversationsUncheckedCreateWithoutMenteeInput>
  }

  export type conversationsUpdateWithWhereUniqueWithoutMenteeInput = {
    where: conversationsWhereUniqueInput
    data: XOR<conversationsUpdateWithoutMenteeInput, conversationsUncheckedUpdateWithoutMenteeInput>
  }

  export type conversationsUpdateManyWithWhereWithoutMenteeInput = {
    where: conversationsScalarWhereInput
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyWithoutMenteeInput>
  }

  export type conversationsScalarWhereInput = {
    AND?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
    OR?: conversationsScalarWhereInput[]
    NOT?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
    id?: IntFilter<"conversations"> | number
    menteeId?: StringFilter<"conversations"> | string
    mentorId?: StringFilter<"conversations"> | string
    createdAt?: DateTimeFilter<"conversations"> | Date | string
    updatedAt?: DateTimeFilter<"conversations"> | Date | string
    lastMessage?: StringNullableFilter<"conversations"> | string | null
  }

  export type sessionsUpsertWithWhereUniqueWithoutMenteeInput = {
    where: sessionsWhereUniqueInput
    update: XOR<sessionsUpdateWithoutMenteeInput, sessionsUncheckedUpdateWithoutMenteeInput>
    create: XOR<sessionsCreateWithoutMenteeInput, sessionsUncheckedCreateWithoutMenteeInput>
  }

  export type sessionsUpdateWithWhereUniqueWithoutMenteeInput = {
    where: sessionsWhereUniqueInput
    data: XOR<sessionsUpdateWithoutMenteeInput, sessionsUncheckedUpdateWithoutMenteeInput>
  }

  export type sessionsUpdateManyWithWhereWithoutMenteeInput = {
    where: sessionsScalarWhereInput
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyWithoutMenteeInput>
  }

  export type sessionsScalarWhereInput = {
    AND?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    OR?: sessionsScalarWhereInput[]
    NOT?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    id?: IntFilter<"sessions"> | number
    menteeId?: StringFilter<"sessions"> | string
    mentorId?: StringFilter<"sessions"> | string
    title?: StringFilter<"sessions"> | string
    description?: StringNullableFilter<"sessions"> | string | null
    duration?: IntFilter<"sessions"> | number
    sessionDate?: DateTimeFilter<"sessions"> | Date | string
    jitsiRoomId?: StringFilter<"sessions"> | string
    meetingUrl?: StringNullableFilter<"sessions"> | string | null
    status?: EnumSessionStatusFilter<"sessions"> | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFilter<"sessions"> | Date | string
    statusUpdatedBy?: StringNullableFilter<"sessions"> | string | null
    additionalParticipants?: StringNullableListFilter<"sessions">
    notes?: StringNullableFilter<"sessions"> | string | null
    feedback?: StringNullableFilter<"sessions"> | string | null
    createdAt?: DateTimeFilter<"sessions"> | Date | string
    cancellationReason?: StringNullableFilter<"sessions"> | string | null
    menteeRating?: IntNullableFilter<"sessions"> | number | null
    menteeReview?: StringNullableFilter<"sessions"> | string | null
    mentorRating?: IntNullableFilter<"sessions"> | number | null
    mentorReview?: StringNullableFilter<"sessions"> | string | null
  }

  export type MentorUpsertWithWhereUniqueWithoutMenteeInput = {
    where: MentorWhereUniqueInput
    update: XOR<MentorUpdateWithoutMenteeInput, MentorUncheckedUpdateWithoutMenteeInput>
    create: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput>
  }

  export type MentorUpdateWithWhereUniqueWithoutMenteeInput = {
    where: MentorWhereUniqueInput
    data: XOR<MentorUpdateWithoutMenteeInput, MentorUncheckedUpdateWithoutMenteeInput>
  }

  export type MentorUpdateManyWithWhereWithoutMenteeInput = {
    where: MentorScalarWhereInput
    data: XOR<MentorUpdateManyMutationInput, MentorUncheckedUpdateManyWithoutMenteeInput>
  }

  export type MentorScalarWhereInput = {
    AND?: MentorScalarWhereInput | MentorScalarWhereInput[]
    OR?: MentorScalarWhereInput[]
    NOT?: MentorScalarWhereInput | MentorScalarWhereInput[]
    id?: IntFilter<"Mentor"> | number
    first_name?: StringFilter<"Mentor"> | string
    last_name?: StringFilter<"Mentor"> | string
    age?: IntFilter<"Mentor"> | number
    email?: StringFilter<"Mentor"> | string
    phone_number?: StringFilter<"Mentor"> | string
    password?: StringFilter<"Mentor"> | string
    supabaseId?: StringFilter<"Mentor"> | string
    gender?: StringFilter<"Mentor"> | string
    profile_picture?: StringFilter<"Mentor"> | string
    location?: StringFilter<"Mentor"> | string
    joined?: DateTimeFilter<"Mentor"> | Date | string
    ratings?: IntFilter<"Mentor"> | number
    updateAt?: DateTimeFilter<"Mentor"> | Date | string
    last_login?: DateTimeFilter<"Mentor"> | Date | string
    expertise?: StringNullableListFilter<"Mentor">
    bio?: StringFilter<"Mentor"> | string
    experience?: IntFilter<"Mentor"> | number
    Github?: StringNullableFilter<"Mentor"> | string | null
    Instagram?: StringNullableFilter<"Mentor"> | string | null
    LinkedIn?: StringFilter<"Mentor"> | string
    Twitter?: StringNullableFilter<"Mentor"> | string | null
    Website?: StringNullableFilter<"Mentor"> | string | null
  }

  export type skillsUpsertWithWhereUniqueWithoutMenteeInput = {
    where: skillsWhereUniqueInput
    update: XOR<skillsUpdateWithoutMenteeInput, skillsUncheckedUpdateWithoutMenteeInput>
    create: XOR<skillsCreateWithoutMenteeInput, skillsUncheckedCreateWithoutMenteeInput>
  }

  export type skillsUpdateWithWhereUniqueWithoutMenteeInput = {
    where: skillsWhereUniqueInput
    data: XOR<skillsUpdateWithoutMenteeInput, skillsUncheckedUpdateWithoutMenteeInput>
  }

  export type skillsUpdateManyWithWhereWithoutMenteeInput = {
    where: skillsScalarWhereInput
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyWithoutMenteeInput>
  }

  export type skillsScalarWhereInput = {
    AND?: skillsScalarWhereInput | skillsScalarWhereInput[]
    OR?: skillsScalarWhereInput[]
    NOT?: skillsScalarWhereInput | skillsScalarWhereInput[]
    id?: IntFilter<"skills"> | number
    name?: StringFilter<"skills"> | string
    goal?: StringFilter<"skills"> | string
    status?: StringFilter<"skills"> | string
    reflection?: StringFilter<"skills"> | string
    dateAdded?: DateTimeFilter<"skills"> | Date | string
    lastUpdated?: DateTimeFilter<"skills"> | Date | string
    menteeId?: StringFilter<"skills"> | string
  }

  export type AchievementsCreateWithoutMentorInput = {
    experience?: AchievementsCreateexperienceInput | string[]
    education?: AchievementsCreateeducationInput | string[]
    accolades?: AchievementsCreateaccoladesInput | string[]
    reviews?: AchievementsCreatereviewsInput | string[]
  }

  export type AchievementsUncheckedCreateWithoutMentorInput = {
    id?: number
    experience?: AchievementsCreateexperienceInput | string[]
    education?: AchievementsCreateeducationInput | string[]
    accolades?: AchievementsCreateaccoladesInput | string[]
    reviews?: AchievementsCreatereviewsInput | string[]
  }

  export type AchievementsCreateOrConnectWithoutMentorInput = {
    where: AchievementsWhereUniqueInput
    create: XOR<AchievementsCreateWithoutMentorInput, AchievementsUncheckedCreateWithoutMentorInput>
  }

  export type conversationsCreateWithoutMentorInput = {
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
    mentee: MenteeCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutMentorInput = {
    id?: number
    menteeId: string
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsCreateOrConnectWithoutMentorInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMentorInput, conversationsUncheckedCreateWithoutMentorInput>
  }

  export type conversationsCreateManyMentorInputEnvelope = {
    data: conversationsCreateManyMentorInput | conversationsCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type sessionsCreateWithoutMentorInput = {
    title: string
    description?: string | null
    duration?: number
    sessionDate: Date | string
    jitsiRoomId: string
    meetingUrl?: string | null
    status?: $Enums.SessionStatus
    statusUpdatedAt?: Date | string
    statusUpdatedBy?: string | null
    additionalParticipants?: sessionsCreateadditionalParticipantsInput | string[]
    notes?: string | null
    feedback?: string | null
    createdAt?: Date | string
    cancellationReason?: string | null
    menteeRating?: number | null
    menteeReview?: string | null
    mentorRating?: number | null
    mentorReview?: string | null
    mentee: MenteeCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateWithoutMentorInput = {
    id?: number
    menteeId: string
    title: string
    description?: string | null
    duration?: number
    sessionDate: Date | string
    jitsiRoomId: string
    meetingUrl?: string | null
    status?: $Enums.SessionStatus
    statusUpdatedAt?: Date | string
    statusUpdatedBy?: string | null
    additionalParticipants?: sessionsCreateadditionalParticipantsInput | string[]
    notes?: string | null
    feedback?: string | null
    createdAt?: Date | string
    cancellationReason?: string | null
    menteeRating?: number | null
    menteeReview?: string | null
    mentorRating?: number | null
    mentorReview?: string | null
  }

  export type sessionsCreateOrConnectWithoutMentorInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutMentorInput, sessionsUncheckedCreateWithoutMentorInput>
  }

  export type sessionsCreateManyMentorInputEnvelope = {
    data: sessionsCreateManyMentorInput | sessionsCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type MenteeCreateWithoutMentorInput = {
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    conversations?: conversationsCreateNestedManyWithoutMenteeInput
    sessions?: sessionsCreateNestedManyWithoutMenteeInput
    skills?: skillsCreateNestedManyWithoutMenteeInput
  }

  export type MenteeUncheckedCreateWithoutMentorInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutMenteeInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutMenteeInput
    skills?: skillsUncheckedCreateNestedManyWithoutMenteeInput
  }

  export type MenteeCreateOrConnectWithoutMentorInput = {
    where: MenteeWhereUniqueInput
    create: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput>
  }

  export type AchievementsUpsertWithoutMentorInput = {
    update: XOR<AchievementsUpdateWithoutMentorInput, AchievementsUncheckedUpdateWithoutMentorInput>
    create: XOR<AchievementsCreateWithoutMentorInput, AchievementsUncheckedCreateWithoutMentorInput>
    where?: AchievementsWhereInput
  }

  export type AchievementsUpdateToOneWithWhereWithoutMentorInput = {
    where?: AchievementsWhereInput
    data: XOR<AchievementsUpdateWithoutMentorInput, AchievementsUncheckedUpdateWithoutMentorInput>
  }

  export type AchievementsUpdateWithoutMentorInput = {
    experience?: AchievementsUpdateexperienceInput | string[]
    education?: AchievementsUpdateeducationInput | string[]
    accolades?: AchievementsUpdateaccoladesInput | string[]
    reviews?: AchievementsUpdatereviewsInput | string[]
  }

  export type AchievementsUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    experience?: AchievementsUpdateexperienceInput | string[]
    education?: AchievementsUpdateeducationInput | string[]
    accolades?: AchievementsUpdateaccoladesInput | string[]
    reviews?: AchievementsUpdatereviewsInput | string[]
  }

  export type conversationsUpsertWithWhereUniqueWithoutMentorInput = {
    where: conversationsWhereUniqueInput
    update: XOR<conversationsUpdateWithoutMentorInput, conversationsUncheckedUpdateWithoutMentorInput>
    create: XOR<conversationsCreateWithoutMentorInput, conversationsUncheckedCreateWithoutMentorInput>
  }

  export type conversationsUpdateWithWhereUniqueWithoutMentorInput = {
    where: conversationsWhereUniqueInput
    data: XOR<conversationsUpdateWithoutMentorInput, conversationsUncheckedUpdateWithoutMentorInput>
  }

  export type conversationsUpdateManyWithWhereWithoutMentorInput = {
    where: conversationsScalarWhereInput
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyWithoutMentorInput>
  }

  export type sessionsUpsertWithWhereUniqueWithoutMentorInput = {
    where: sessionsWhereUniqueInput
    update: XOR<sessionsUpdateWithoutMentorInput, sessionsUncheckedUpdateWithoutMentorInput>
    create: XOR<sessionsCreateWithoutMentorInput, sessionsUncheckedCreateWithoutMentorInput>
  }

  export type sessionsUpdateWithWhereUniqueWithoutMentorInput = {
    where: sessionsWhereUniqueInput
    data: XOR<sessionsUpdateWithoutMentorInput, sessionsUncheckedUpdateWithoutMentorInput>
  }

  export type sessionsUpdateManyWithWhereWithoutMentorInput = {
    where: sessionsScalarWhereInput
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyWithoutMentorInput>
  }

  export type MenteeUpsertWithWhereUniqueWithoutMentorInput = {
    where: MenteeWhereUniqueInput
    update: XOR<MenteeUpdateWithoutMentorInput, MenteeUncheckedUpdateWithoutMentorInput>
    create: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput>
  }

  export type MenteeUpdateWithWhereUniqueWithoutMentorInput = {
    where: MenteeWhereUniqueInput
    data: XOR<MenteeUpdateWithoutMentorInput, MenteeUncheckedUpdateWithoutMentorInput>
  }

  export type MenteeUpdateManyWithWhereWithoutMentorInput = {
    where: MenteeScalarWhereInput
    data: XOR<MenteeUpdateManyMutationInput, MenteeUncheckedUpdateManyWithoutMentorInput>
  }

  export type MenteeScalarWhereInput = {
    AND?: MenteeScalarWhereInput | MenteeScalarWhereInput[]
    OR?: MenteeScalarWhereInput[]
    NOT?: MenteeScalarWhereInput | MenteeScalarWhereInput[]
    id?: IntFilter<"Mentee"> | number
    first_name?: StringFilter<"Mentee"> | string
    last_name?: StringFilter<"Mentee"> | string
    age?: IntFilter<"Mentee"> | number
    gender?: StringFilter<"Mentee"> | string
    email?: StringFilter<"Mentee"> | string
    phone_number?: StringFilter<"Mentee"> | string
    password?: StringFilter<"Mentee"> | string
    location?: StringFilter<"Mentee"> | string
    updateAt?: DateTimeFilter<"Mentee"> | Date | string
    last_login?: DateTimeFilter<"Mentee"> | Date | string
    ratings?: IntFilter<"Mentee"> | number
    profile_picture?: StringFilter<"Mentee"> | string
    supabaseId?: StringFilter<"Mentee"> | string
    bio?: StringFilter<"Mentee"> | string
    joined?: DateTimeFilter<"Mentee"> | Date | string
    goals?: StringNullableListFilter<"Mentee">
    experience?: IntFilter<"Mentee"> | number
    Github?: StringNullableFilter<"Mentee"> | string | null
    Instagram?: StringNullableFilter<"Mentee"> | string | null
    LinkedIn?: StringNullableFilter<"Mentee"> | string | null
    Twitter?: StringNullableFilter<"Mentee"> | string | null
    Website?: StringNullableFilter<"Mentee"> | string | null
  }

  export type MentorCreateWithoutAchievementsInput = {
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    conversations?: conversationsCreateNestedManyWithoutMentorInput
    sessions?: sessionsCreateNestedManyWithoutMentorInput
    mentee?: MenteeCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutAchievementsInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutMentorInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutMentorInput
    mentee?: MenteeUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutAchievementsInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutAchievementsInput, MentorUncheckedCreateWithoutAchievementsInput>
  }

  export type MentorUpsertWithoutAchievementsInput = {
    update: XOR<MentorUpdateWithoutAchievementsInput, MentorUncheckedUpdateWithoutAchievementsInput>
    create: XOR<MentorCreateWithoutAchievementsInput, MentorUncheckedCreateWithoutAchievementsInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutAchievementsInput, MentorUncheckedUpdateWithoutAchievementsInput>
  }

  export type MentorUpdateWithoutAchievementsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUpdateManyWithoutMentorNestedInput
    sessions?: sessionsUpdateManyWithoutMentorNestedInput
    mentee?: MenteeUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutAchievementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutMentorNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutMentorNestedInput
    mentee?: MenteeUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MenteeCreateWithoutConversationsInput = {
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    sessions?: sessionsCreateNestedManyWithoutMenteeInput
    mentor?: MentorCreateNestedManyWithoutMenteeInput
    skills?: skillsCreateNestedManyWithoutMenteeInput
  }

  export type MenteeUncheckedCreateWithoutConversationsInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    sessions?: sessionsUncheckedCreateNestedManyWithoutMenteeInput
    mentor?: MentorUncheckedCreateNestedManyWithoutMenteeInput
    skills?: skillsUncheckedCreateNestedManyWithoutMenteeInput
  }

  export type MenteeCreateOrConnectWithoutConversationsInput = {
    where: MenteeWhereUniqueInput
    create: XOR<MenteeCreateWithoutConversationsInput, MenteeUncheckedCreateWithoutConversationsInput>
  }

  export type MentorCreateWithoutConversationsInput = {
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    Achievements?: AchievementsCreateNestedOneWithoutMentorInput
    sessions?: sessionsCreateNestedManyWithoutMentorInput
    mentee?: MenteeCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutConversationsInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    Achievements?: AchievementsUncheckedCreateNestedOneWithoutMentorInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutMentorInput
    mentee?: MenteeUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutConversationsInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutConversationsInput, MentorUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateWithoutConversationsInput = {
    senderRole: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    messageType?: string
    senderId: string
  }

  export type messagesUncheckedCreateWithoutConversationsInput = {
    id?: number
    senderRole: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    messageType?: string
    senderId: string
  }

  export type messagesCreateOrConnectWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateManyConversationsInputEnvelope = {
    data: messagesCreateManyConversationsInput | messagesCreateManyConversationsInput[]
    skipDuplicates?: boolean
  }

  export type MenteeUpsertWithoutConversationsInput = {
    update: XOR<MenteeUpdateWithoutConversationsInput, MenteeUncheckedUpdateWithoutConversationsInput>
    create: XOR<MenteeCreateWithoutConversationsInput, MenteeUncheckedCreateWithoutConversationsInput>
    where?: MenteeWhereInput
  }

  export type MenteeUpdateToOneWithWhereWithoutConversationsInput = {
    where?: MenteeWhereInput
    data: XOR<MenteeUpdateWithoutConversationsInput, MenteeUncheckedUpdateWithoutConversationsInput>
  }

  export type MenteeUpdateWithoutConversationsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: sessionsUpdateManyWithoutMenteeNestedInput
    mentor?: MentorUpdateManyWithoutMenteeNestedInput
    skills?: skillsUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: sessionsUncheckedUpdateManyWithoutMenteeNestedInput
    mentor?: MentorUncheckedUpdateManyWithoutMenteeNestedInput
    skills?: skillsUncheckedUpdateManyWithoutMenteeNestedInput
  }

  export type MentorUpsertWithoutConversationsInput = {
    update: XOR<MentorUpdateWithoutConversationsInput, MentorUncheckedUpdateWithoutConversationsInput>
    create: XOR<MentorCreateWithoutConversationsInput, MentorUncheckedCreateWithoutConversationsInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutConversationsInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutConversationsInput, MentorUncheckedUpdateWithoutConversationsInput>
  }

  export type MentorUpdateWithoutConversationsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    Achievements?: AchievementsUpdateOneWithoutMentorNestedInput
    sessions?: sessionsUpdateManyWithoutMentorNestedInput
    mentee?: MenteeUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    Achievements?: AchievementsUncheckedUpdateOneWithoutMentorNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutMentorNestedInput
    mentee?: MenteeUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type messagesUpsertWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithWhereWithoutConversationsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutConversationsInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: IntFilter<"messages"> | number
    conversationId?: IntFilter<"messages"> | number
    senderRole?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    createdAt?: DateTimeFilter<"messages"> | Date | string
    isRead?: BoolFilter<"messages"> | boolean
    messageType?: StringFilter<"messages"> | string
    senderId?: StringFilter<"messages"> | string
  }

  export type conversationsCreateWithoutMessagesInput = {
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
    mentee: MenteeCreateNestedOneWithoutConversationsInput
    mentor: MentorCreateNestedOneWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutMessagesInput = {
    id?: number
    menteeId: string
    mentorId: string
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
  }

  export type conversationsCreateOrConnectWithoutMessagesInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
  }

  export type conversationsUpsertWithoutMessagesInput = {
    update: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type conversationsUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mentee?: MenteeUpdateOneRequiredWithoutConversationsNestedInput
    mentor?: MentorUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenteeCreateWithoutSessionsInput = {
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    conversations?: conversationsCreateNestedManyWithoutMenteeInput
    mentor?: MentorCreateNestedManyWithoutMenteeInput
    skills?: skillsCreateNestedManyWithoutMenteeInput
  }

  export type MenteeUncheckedCreateWithoutSessionsInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutMenteeInput
    mentor?: MentorUncheckedCreateNestedManyWithoutMenteeInput
    skills?: skillsUncheckedCreateNestedManyWithoutMenteeInput
  }

  export type MenteeCreateOrConnectWithoutSessionsInput = {
    where: MenteeWhereUniqueInput
    create: XOR<MenteeCreateWithoutSessionsInput, MenteeUncheckedCreateWithoutSessionsInput>
  }

  export type MentorCreateWithoutSessionsInput = {
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    Achievements?: AchievementsCreateNestedOneWithoutMentorInput
    conversations?: conversationsCreateNestedManyWithoutMentorInput
    mentee?: MenteeCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutSessionsInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    email: string
    phone_number: string
    password: string
    supabaseId: string
    gender?: string
    profile_picture?: string
    location: string
    joined?: Date | string
    ratings?: number
    updateAt?: Date | string
    last_login?: Date | string
    expertise?: MentorCreateexpertiseInput | string[]
    bio: string
    experience: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    Achievements?: AchievementsUncheckedCreateNestedOneWithoutMentorInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutMentorInput
    mentee?: MenteeUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutSessionsInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutSessionsInput, MentorUncheckedCreateWithoutSessionsInput>
  }

  export type MenteeUpsertWithoutSessionsInput = {
    update: XOR<MenteeUpdateWithoutSessionsInput, MenteeUncheckedUpdateWithoutSessionsInput>
    create: XOR<MenteeCreateWithoutSessionsInput, MenteeUncheckedCreateWithoutSessionsInput>
    where?: MenteeWhereInput
  }

  export type MenteeUpdateToOneWithWhereWithoutSessionsInput = {
    where?: MenteeWhereInput
    data: XOR<MenteeUpdateWithoutSessionsInput, MenteeUncheckedUpdateWithoutSessionsInput>
  }

  export type MenteeUpdateWithoutSessionsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUpdateManyWithoutMenteeNestedInput
    mentor?: MentorUpdateManyWithoutMenteeNestedInput
    skills?: skillsUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutMenteeNestedInput
    mentor?: MentorUncheckedUpdateManyWithoutMenteeNestedInput
    skills?: skillsUncheckedUpdateManyWithoutMenteeNestedInput
  }

  export type MentorUpsertWithoutSessionsInput = {
    update: XOR<MentorUpdateWithoutSessionsInput, MentorUncheckedUpdateWithoutSessionsInput>
    create: XOR<MentorCreateWithoutSessionsInput, MentorUncheckedCreateWithoutSessionsInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutSessionsInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutSessionsInput, MentorUncheckedUpdateWithoutSessionsInput>
  }

  export type MentorUpdateWithoutSessionsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    Achievements?: AchievementsUpdateOneWithoutMentorNestedInput
    conversations?: conversationsUpdateManyWithoutMentorNestedInput
    mentee?: MenteeUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    Achievements?: AchievementsUncheckedUpdateOneWithoutMentorNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutMentorNestedInput
    mentee?: MenteeUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MenteeCreateWithoutSkillsInput = {
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    conversations?: conversationsCreateNestedManyWithoutMenteeInput
    sessions?: sessionsCreateNestedManyWithoutMenteeInput
    mentor?: MentorCreateNestedManyWithoutMenteeInput
  }

  export type MenteeUncheckedCreateWithoutSkillsInput = {
    id?: number
    first_name: string
    last_name: string
    age?: number
    gender?: string
    email: string
    phone_number: string
    password: string
    location: string
    updateAt?: Date | string
    last_login?: Date | string
    ratings?: number
    profile_picture?: string
    supabaseId: string
    bio: string
    joined?: Date | string
    goals?: MenteeCreategoalsInput | string[]
    experience?: number
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutMenteeInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutMenteeInput
    mentor?: MentorUncheckedCreateNestedManyWithoutMenteeInput
  }

  export type MenteeCreateOrConnectWithoutSkillsInput = {
    where: MenteeWhereUniqueInput
    create: XOR<MenteeCreateWithoutSkillsInput, MenteeUncheckedCreateWithoutSkillsInput>
  }

  export type MenteeUpsertWithoutSkillsInput = {
    update: XOR<MenteeUpdateWithoutSkillsInput, MenteeUncheckedUpdateWithoutSkillsInput>
    create: XOR<MenteeCreateWithoutSkillsInput, MenteeUncheckedCreateWithoutSkillsInput>
    where?: MenteeWhereInput
  }

  export type MenteeUpdateToOneWithWhereWithoutSkillsInput = {
    where?: MenteeWhereInput
    data: XOR<MenteeUpdateWithoutSkillsInput, MenteeUncheckedUpdateWithoutSkillsInput>
  }

  export type MenteeUpdateWithoutSkillsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUpdateManyWithoutMenteeNestedInput
    sessions?: sessionsUpdateManyWithoutMenteeNestedInput
    mentor?: MentorUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutMenteeNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutMenteeNestedInput
    mentor?: MentorUncheckedUpdateManyWithoutMenteeNestedInput
  }

  export type conversationsCreateManyMenteeInput = {
    id?: number
    mentorId: string
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
  }

  export type sessionsCreateManyMenteeInput = {
    id?: number
    mentorId: string
    title: string
    description?: string | null
    duration?: number
    sessionDate: Date | string
    jitsiRoomId: string
    meetingUrl?: string | null
    status?: $Enums.SessionStatus
    statusUpdatedAt?: Date | string
    statusUpdatedBy?: string | null
    additionalParticipants?: sessionsCreateadditionalParticipantsInput | string[]
    notes?: string | null
    feedback?: string | null
    createdAt?: Date | string
    cancellationReason?: string | null
    menteeRating?: number | null
    menteeReview?: string | null
    mentorRating?: number | null
    mentorReview?: string | null
  }

  export type skillsCreateManyMenteeInput = {
    id?: number
    name: string
    goal: string
    status?: string
    reflection?: string
    dateAdded?: Date | string
    lastUpdated?: Date | string
  }

  export type conversationsUpdateWithoutMenteeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mentor?: MentorUpdateOneRequiredWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateManyWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUpdateWithoutMenteeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jitsiRoomId?: StringFieldUpdateOperationsInput | string
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    additionalParticipants?: sessionsUpdateadditionalParticipantsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    menteeRating?: NullableIntFieldUpdateOperationsInput | number | null
    menteeReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentorRating?: NullableIntFieldUpdateOperationsInput | number | null
    mentorReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentor?: MentorUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jitsiRoomId?: StringFieldUpdateOperationsInput | string
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    additionalParticipants?: sessionsUpdateadditionalParticipantsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    menteeRating?: NullableIntFieldUpdateOperationsInput | number | null
    menteeReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentorRating?: NullableIntFieldUpdateOperationsInput | number | null
    mentorReview?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUncheckedUpdateManyWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jitsiRoomId?: StringFieldUpdateOperationsInput | string
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    additionalParticipants?: sessionsUpdateadditionalParticipantsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    menteeRating?: NullableIntFieldUpdateOperationsInput | number | null
    menteeReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentorRating?: NullableIntFieldUpdateOperationsInput | number | null
    mentorReview?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MentorUpdateWithoutMenteeInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    Achievements?: AchievementsUpdateOneWithoutMentorNestedInput
    conversations?: conversationsUpdateManyWithoutMentorNestedInput
    sessions?: sessionsUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    Achievements?: AchievementsUncheckedUpdateOneWithoutMentorNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutMentorNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateManyWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: MentorUpdateexpertiseInput | string[]
    bio?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillsUpdateWithoutMenteeInput = {
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reflection?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillsUncheckedUpdateWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reflection?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillsUncheckedUpdateManyWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reflection?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationsCreateManyMentorInput = {
    id?: number
    menteeId: string
    createdAt?: Date | string
    updatedAt: Date | string
    lastMessage?: string | null
  }

  export type sessionsCreateManyMentorInput = {
    id?: number
    menteeId: string
    title: string
    description?: string | null
    duration?: number
    sessionDate: Date | string
    jitsiRoomId: string
    meetingUrl?: string | null
    status?: $Enums.SessionStatus
    statusUpdatedAt?: Date | string
    statusUpdatedBy?: string | null
    additionalParticipants?: sessionsCreateadditionalParticipantsInput | string[]
    notes?: string | null
    feedback?: string | null
    createdAt?: Date | string
    cancellationReason?: string | null
    menteeRating?: number | null
    menteeReview?: string | null
    mentorRating?: number | null
    mentorReview?: string | null
  }

  export type conversationsUpdateWithoutMentorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mentee?: MenteeUpdateOneRequiredWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateManyWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUpdateWithoutMentorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jitsiRoomId?: StringFieldUpdateOperationsInput | string
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    additionalParticipants?: sessionsUpdateadditionalParticipantsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    menteeRating?: NullableIntFieldUpdateOperationsInput | number | null
    menteeReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentorRating?: NullableIntFieldUpdateOperationsInput | number | null
    mentorReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentee?: MenteeUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jitsiRoomId?: StringFieldUpdateOperationsInput | string
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    additionalParticipants?: sessionsUpdateadditionalParticipantsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    menteeRating?: NullableIntFieldUpdateOperationsInput | number | null
    menteeReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentorRating?: NullableIntFieldUpdateOperationsInput | number | null
    mentorReview?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUncheckedUpdateManyWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jitsiRoomId?: StringFieldUpdateOperationsInput | string
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    statusUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    additionalParticipants?: sessionsUpdateadditionalParticipantsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    menteeRating?: NullableIntFieldUpdateOperationsInput | number | null
    menteeReview?: NullableStringFieldUpdateOperationsInput | string | null
    mentorRating?: NullableIntFieldUpdateOperationsInput | number | null
    mentorReview?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenteeUpdateWithoutMentorInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUpdateManyWithoutMenteeNestedInput
    sessions?: sessionsUpdateManyWithoutMenteeNestedInput
    skills?: skillsUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutMenteeNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutMenteeNestedInput
    skills?: skillsUncheckedUpdateManyWithoutMenteeNestedInput
  }

  export type MenteeUncheckedUpdateManyWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    joined?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: MenteeUpdategoalsInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesCreateManyConversationsInput = {
    id?: number
    senderRole: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    messageType?: string
    senderId: string
  }

  export type messagesUpdateWithoutConversationsInput = {
    senderRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type messagesUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type messagesUncheckedUpdateManyWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
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