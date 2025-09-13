
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
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ConversationType: {
  MENTOR_MENTEE: 'MENTOR_MENTEE',
  PEER_TO_PEER: 'PEER_TO_PEER',
  GROUP_CHAT: 'GROUP_CHAT'
};

export type ConversationType = (typeof ConversationType)[keyof typeof ConversationType]


export const MessageType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  FILE: 'FILE',
  SYSTEM: 'SYSTEM'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


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

export type ConversationType = $Enums.ConversationType

export const ConversationType: typeof $Enums.ConversationType

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

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
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;
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
    Conversation: 'Conversation',
    Message: 'Message',
    sessions: 'sessions'
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
      modelProps: "mentee" | "mentor" | "conversation" | "message" | "sessions"
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
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
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
    conversation?: ConversationOmit
    message?: MessageOmit
    sessions?: sessionsOmit
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
    sessions: number
    mentor: number
  }

  export type MenteeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | MenteeCountOutputTypeCountSessionsArgs
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
   * Count Type MentorCountOutputType
   */

  export type MentorCountOutputType = {
    sessions: number
    mentee: number
  }

  export type MentorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
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
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
    sessions?: boolean | Mentee$sessionsArgs<ExtArgs>
    mentor?: boolean | Mentee$mentorArgs<ExtArgs>
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
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
  }

  export type MenteeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "age" | "gender" | "email" | "phone_number" | "password" | "location" | "updateAt" | "last_login" | "ratings" | "profile_picture" | "supabaseId" | "bio" | "joined" | "goals" | "Github" | "Instagram" | "LinkedIn" | "Twitter" | "Website", ExtArgs["result"]["mentee"]>
  export type MenteeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Mentee$sessionsArgs<ExtArgs>
    mentor?: boolean | Mentee$mentorArgs<ExtArgs>
    _count?: boolean | MenteeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenteeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MenteeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MenteePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mentee"
    objects: {
      sessions: Prisma.$sessionsPayload<ExtArgs>[]
      mentor: Prisma.$MentorPayload<ExtArgs>[]
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
    sessions<T extends Mentee$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Mentee$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentor<T extends Mentee$mentorArgs<ExtArgs> = {}>(args?: Subset<T, Mentee$mentorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    supabaseId: string | null
    gender: string | null
    profile_picture: string | null
    location: string | null
    joined: Date | null
    ratings: number | null
    updateAt: Date | null
    last_login: Date | null
    bio: string | null
    resumeId: string | null
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
    resumeId: string | null
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
    resumeId: number
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
    supabaseId?: true
    gender?: true
    profile_picture?: true
    location?: true
    joined?: true
    ratings?: true
    updateAt?: true
    last_login?: true
    bio?: true
    resumeId?: true
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
    resumeId?: true
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
    resumeId?: true
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
    experience: JsonValue
    resumeId: string
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
    resumeId?: boolean
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
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
    resumeId?: boolean
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
    resumeId?: boolean
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
    resumeId?: boolean
    Github?: boolean
    Instagram?: boolean
    LinkedIn?: boolean
    Twitter?: boolean
    Website?: boolean
  }

  export type MentorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "age" | "email" | "phone_number" | "password" | "supabaseId" | "gender" | "profile_picture" | "location" | "joined" | "ratings" | "updateAt" | "last_login" | "expertise" | "bio" | "experience" | "resumeId" | "Github" | "Instagram" | "LinkedIn" | "Twitter" | "Website", ExtArgs["result"]["mentor"]>
  export type MentorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Mentor$sessionsArgs<ExtArgs>
    mentee?: boolean | Mentor$menteeArgs<ExtArgs>
    _count?: boolean | MentorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MentorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MentorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mentor"
    objects: {
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
      experience: Prisma.JsonValue
      resumeId: string
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
    readonly experience: FieldRef<"Mentor", 'Json'>
    readonly resumeId: FieldRef<"Mentor", 'String'>
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
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    id: number | null
  }

  export type ConversationSumAggregateOutputType = {
    id: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: number | null
    participant1Id: string | null
    participant2Id: string | null
    type: $Enums.ConversationType | null
    createdAt: Date | null
    updatedAt: Date | null
    lastMessage: string | null
    isActive: boolean | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: number | null
    participant1Id: string | null
    participant2Id: string | null
    type: $Enums.ConversationType | null
    createdAt: Date | null
    updatedAt: Date | null
    lastMessage: string | null
    isActive: boolean | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    participant1Id: number
    participant2Id: number
    type: number
    createdAt: number
    updatedAt: number
    lastMessage: number
    isActive: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    id?: true
  }

  export type ConversationSumAggregateInputType = {
    id?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    participant1Id?: true
    participant2Id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    lastMessage?: true
    isActive?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    participant1Id?: true
    participant2Id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    lastMessage?: true
    isActive?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    participant1Id?: true
    participant2Id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    lastMessage?: true
    isActive?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: number
    participant1Id: string
    participant2Id: string
    type: $Enums.ConversationType
    createdAt: Date
    updatedAt: Date
    lastMessage: string | null
    isActive: boolean
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean
    isActive?: boolean
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessage?: boolean
    isActive?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participant1Id" | "participant2Id" | "type" | "createdAt" | "updatedAt" | "lastMessage" | "isActive", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      participant1Id: string
      participant2Id: string
      type: $Enums.ConversationType
      createdAt: Date
      updatedAt: Date
      lastMessage: string | null
      isActive: boolean
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'Int'>
    readonly participant1Id: FieldRef<"Conversation", 'String'>
    readonly participant2Id: FieldRef<"Conversation", 'String'>
    readonly type: FieldRef<"Conversation", 'ConversationType'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
    readonly lastMessage: FieldRef<"Conversation", 'String'>
    readonly isActive: FieldRef<"Conversation", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    conversationId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    conversationId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    senderId: string | null
    conversationId: number | null
    createdAt: Date | null
    isRead: boolean | null
    messageType: $Enums.MessageType | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    senderId: string | null
    conversationId: number | null
    createdAt: Date | null
    isRead: boolean | null
    messageType: $Enums.MessageType | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    senderId: number
    conversationId: number
    createdAt: number
    isRead: number
    messageType: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    conversationId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    conversationId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    conversationId?: true
    createdAt?: true
    isRead?: true
    messageType?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    conversationId?: true
    createdAt?: true
    isRead?: true
    messageType?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    conversationId?: true
    createdAt?: true
    isRead?: true
    messageType?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    content: string
    senderId: string
    conversationId: number
    createdAt: Date
    isRead: boolean
    messageType: $Enums.MessageType
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    conversationId?: boolean
    createdAt?: boolean
    isRead?: boolean
    messageType?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    conversationId?: boolean
    createdAt?: boolean
    isRead?: boolean
    messageType?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    conversationId?: boolean
    createdAt?: boolean
    isRead?: boolean
    messageType?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    senderId?: boolean
    conversationId?: boolean
    createdAt?: boolean
    isRead?: boolean
    messageType?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "senderId" | "conversationId" | "createdAt" | "isRead" | "messageType", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      senderId: string
      conversationId: number
      createdAt: Date
      isRead: boolean
      messageType: $Enums.MessageType
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'Int'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly messageType: FieldRef<"Message", 'MessageType'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
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
    menteeRating: number | null
    mentorRating: number | null
  }

  export type SessionsSumAggregateOutputType = {
    id: number | null
    menteeRating: number | null
    mentorRating: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: number | null
    menteeId: string | null
    mentorId: string | null
    title: string | null
    description: string | null
    startTime: string | null
    endTime: string | null
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
    startTime: string | null
    endTime: string | null
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
    startTime: number
    endTime: number
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
    menteeRating?: true
    mentorRating?: true
  }

  export type SessionsSumAggregateInputType = {
    id?: true
    menteeRating?: true
    mentorRating?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
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
    startTime?: true
    endTime?: true
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
    startTime?: true
    endTime?: true
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
    startTime: string
    endTime: string
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
    startTime?: boolean
    endTime?: boolean
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
    startTime?: boolean
    endTime?: boolean
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
    startTime?: boolean
    endTime?: boolean
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
    startTime?: boolean
    endTime?: boolean
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

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menteeId" | "mentorId" | "title" | "description" | "startTime" | "endTime" | "sessionDate" | "jitsiRoomId" | "meetingUrl" | "status" | "statusUpdatedAt" | "statusUpdatedBy" | "additionalParticipants" | "notes" | "feedback" | "createdAt" | "cancellationReason" | "menteeRating" | "menteeReview" | "mentorRating" | "mentorReview", ExtArgs["result"]["sessions"]>
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
      startTime: string
      endTime: string
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
    readonly startTime: FieldRef<"sessions", 'String'>
    readonly endTime: FieldRef<"sessions", 'String'>
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
    resumeId: 'resumeId',
    Github: 'Github',
    Instagram: 'Instagram',
    LinkedIn: 'LinkedIn',
    Twitter: 'Twitter',
    Website: 'Website'
  };

  export type MentorScalarFieldEnum = (typeof MentorScalarFieldEnum)[keyof typeof MentorScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    participant1Id: 'participant1Id',
    participant2Id: 'participant2Id',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastMessage: 'lastMessage',
    isActive: 'isActive'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    senderId: 'senderId',
    conversationId: 'conversationId',
    createdAt: 'createdAt',
    isRead: 'isRead',
    messageType: 'messageType'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    menteeId: 'menteeId',
    mentorId: 'mentorId',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ConversationType'
   */
  export type EnumConversationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationType'>
    


  /**
   * Reference to a field of type 'ConversationType[]'
   */
  export type ListEnumConversationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


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
    Github?: StringNullableFilter<"Mentee"> | string | null
    Instagram?: StringNullableFilter<"Mentee"> | string | null
    LinkedIn?: StringNullableFilter<"Mentee"> | string | null
    Twitter?: StringNullableFilter<"Mentee"> | string | null
    Website?: StringNullableFilter<"Mentee"> | string | null
    sessions?: SessionsListRelationFilter
    mentor?: MentorListRelationFilter
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
    Github?: SortOrderInput | SortOrder
    Instagram?: SortOrderInput | SortOrder
    LinkedIn?: SortOrderInput | SortOrder
    Twitter?: SortOrderInput | SortOrder
    Website?: SortOrderInput | SortOrder
    sessions?: sessionsOrderByRelationAggregateInput
    mentor?: MentorOrderByRelationAggregateInput
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
    Github?: StringNullableFilter<"Mentee"> | string | null
    Instagram?: StringNullableFilter<"Mentee"> | string | null
    LinkedIn?: StringNullableFilter<"Mentee"> | string | null
    Twitter?: StringNullableFilter<"Mentee"> | string | null
    Website?: StringNullableFilter<"Mentee"> | string | null
    sessions?: SessionsListRelationFilter
    mentor?: MentorListRelationFilter
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
    experience?: JsonFilter<"Mentor">
    resumeId?: StringFilter<"Mentor"> | string
    Github?: StringNullableFilter<"Mentor"> | string | null
    Instagram?: StringNullableFilter<"Mentor"> | string | null
    LinkedIn?: StringFilter<"Mentor"> | string
    Twitter?: StringNullableFilter<"Mentor"> | string | null
    Website?: StringNullableFilter<"Mentor"> | string | null
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
    resumeId?: SortOrder
    Github?: SortOrderInput | SortOrder
    Instagram?: SortOrderInput | SortOrder
    LinkedIn?: SortOrder
    Twitter?: SortOrderInput | SortOrder
    Website?: SortOrderInput | SortOrder
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
    experience?: JsonFilter<"Mentor">
    resumeId?: StringFilter<"Mentor"> | string
    Github?: StringNullableFilter<"Mentor"> | string | null
    Instagram?: StringNullableFilter<"Mentor"> | string | null
    LinkedIn?: StringFilter<"Mentor"> | string
    Twitter?: StringNullableFilter<"Mentor"> | string | null
    Website?: StringNullableFilter<"Mentor"> | string | null
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
    resumeId?: SortOrder
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
    experience?: JsonWithAggregatesFilter<"Mentor">
    resumeId?: StringWithAggregatesFilter<"Mentor"> | string
    Github?: StringNullableWithAggregatesFilter<"Mentor"> | string | null
    Instagram?: StringNullableWithAggregatesFilter<"Mentor"> | string | null
    LinkedIn?: StringWithAggregatesFilter<"Mentor"> | string
    Twitter?: StringNullableWithAggregatesFilter<"Mentor"> | string | null
    Website?: StringNullableWithAggregatesFilter<"Mentor"> | string | null
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: IntFilter<"Conversation"> | number
    participant1Id?: StringFilter<"Conversation"> | string
    participant2Id?: StringFilter<"Conversation"> | string
    type?: EnumConversationTypeFilter<"Conversation"> | $Enums.ConversationType
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    lastMessage?: StringNullableFilter<"Conversation"> | string | null
    isActive?: BoolFilter<"Conversation"> | boolean
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: SortOrderInput | SortOrder
    isActive?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    participant1Id_participant2Id?: ConversationParticipant1IdParticipant2IdCompoundUniqueInput
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    participant1Id?: StringFilter<"Conversation"> | string
    participant2Id?: StringFilter<"Conversation"> | string
    type?: EnumConversationTypeFilter<"Conversation"> | $Enums.ConversationType
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    lastMessage?: StringNullableFilter<"Conversation"> | string | null
    isActive?: BoolFilter<"Conversation"> | boolean
    messages?: MessageListRelationFilter
  }, "id" | "participant1Id_participant2Id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversation"> | number
    participant1Id?: StringWithAggregatesFilter<"Conversation"> | string
    participant2Id?: StringWithAggregatesFilter<"Conversation"> | string
    type?: EnumConversationTypeWithAggregatesFilter<"Conversation"> | $Enums.ConversationType
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    lastMessage?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    isActive?: BoolWithAggregatesFilter<"Conversation"> | boolean
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    conversationId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    isRead?: BoolFilter<"Message"> | boolean
    messageType?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    messageType?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    conversationId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    isRead?: BoolFilter<"Message"> | boolean
    messageType?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    messageType?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    conversationId?: IntWithAggregatesFilter<"Message"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    messageType?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
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
    startTime?: StringFilter<"sessions"> | string
    endTime?: StringFilter<"sessions"> | string
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
    startTime?: SortOrder
    endTime?: SortOrder
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
    sessionDate_startTime?: sessionsSessionDateStartTimeCompoundUniqueInput
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    menteeId?: StringFilter<"sessions"> | string
    mentorId?: StringFilter<"sessions"> | string
    title?: StringFilter<"sessions"> | string
    description?: StringNullableFilter<"sessions"> | string | null
    startTime?: StringFilter<"sessions"> | string
    endTime?: StringFilter<"sessions"> | string
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
  }, "id" | "jitsiRoomId" | "sessionDate_startTime">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
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
    startTime?: StringWithAggregatesFilter<"sessions"> | string
    endTime?: StringWithAggregatesFilter<"sessions"> | string
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
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    sessions?: sessionsCreateNestedManyWithoutMenteeInput
    mentor?: MentorCreateNestedManyWithoutMenteeInput
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
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    sessions?: sessionsUncheckedCreateNestedManyWithoutMenteeInput
    mentor?: MentorUncheckedCreateNestedManyWithoutMenteeInput
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
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: sessionsUpdateManyWithoutMenteeNestedInput
    mentor?: MentorUpdateManyWithoutMenteeNestedInput
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
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: sessionsUncheckedUpdateManyWithoutMenteeNestedInput
    mentor?: MentorUncheckedUpdateManyWithoutMenteeNestedInput
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: string
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: string
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: StringFieldUpdateOperationsInput | string
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: StringFieldUpdateOperationsInput | string
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: string
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: StringFieldUpdateOperationsInput | string
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: StringFieldUpdateOperationsInput | string
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationCreateInput = {
    participant1Id: string
    participant2Id: string
    type?: $Enums.ConversationType
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessage?: string | null
    isActive?: boolean
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: number
    participant1Id: string
    participant2Id: string
    type?: $Enums.ConversationType
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessage?: string | null
    isActive?: boolean
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    participant1Id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participant1Id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: number
    participant1Id: string
    participant2Id: string
    type?: $Enums.ConversationType
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessage?: string | null
    isActive?: boolean
  }

  export type ConversationUpdateManyMutationInput = {
    participant1Id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participant1Id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageCreateInput = {
    content: string
    senderId: string
    createdAt?: Date | string
    isRead?: boolean
    messageType?: $Enums.MessageType
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    content: string
    senderId: string
    conversationId: number
    createdAt?: Date | string
    isRead?: boolean
    messageType?: $Enums.MessageType
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
  }

  export type MessageCreateManyInput = {
    id?: number
    content: string
    senderId: string
    conversationId: number
    createdAt?: Date | string
    isRead?: boolean
    messageType?: $Enums.MessageType
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
  }

  export type sessionsCreateInput = {
    title: string
    description?: string | null
    startTime: string
    endTime: string
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
    startTime: string
    endTime: string
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
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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
    startTime: string
    endTime: string
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
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MentorOrderByRelationAggregateInput = {
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
    resumeId?: SortOrder
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
    resumeId?: SortOrder
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
    resumeId?: SortOrder
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
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumConversationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | EnumConversationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypeFilter<$PrismaModel> | $Enums.ConversationType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationParticipant1IdParticipant2IdCompoundUniqueInput = {
    participant1Id: string
    participant2Id: string
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: SortOrder
    isActive?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: SortOrder
    isActive?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessage?: SortOrder
    isActive?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumConversationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | EnumConversationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConversationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConversationTypeFilter<$PrismaModel>
    _max?: NestedEnumConversationTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    messageType?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    messageType?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    messageType?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
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

  export type MenteeScalarRelationFilter = {
    is?: MenteeWhereInput
    isNot?: MenteeWhereInput
  }

  export type MentorScalarRelationFilter = {
    is?: MentorWhereInput
    isNot?: MentorWhereInput
  }

  export type sessionsSessionDateStartTimeCompoundUniqueInput = {
    sessionDate: Date | string
    startTime: string
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
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
    menteeRating?: SortOrder
    mentorRating?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
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
    startTime?: SortOrder
    endTime?: SortOrder
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

  export type MenteeCreategoalsInput = {
    set: string[]
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

  export type MentorCreateexpertiseInput = {
    set: string[]
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

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type EnumConversationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConversationType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumConversationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | EnumConversationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypeFilter<$PrismaModel> | $Enums.ConversationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumConversationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | EnumConversationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConversationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConversationTypeFilter<$PrismaModel>
    _max?: NestedEnumConversationTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
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

  export type sessionsCreateWithoutMenteeInput = {
    title: string
    description?: string | null
    startTime: string
    endTime: string
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
    startTime: string
    endTime: string
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: string
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: string
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
    sessions?: sessionsUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutMenteeInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutMenteeInput, MentorUncheckedCreateWithoutMenteeInput>
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
    startTime?: StringFilter<"sessions"> | string
    endTime?: StringFilter<"sessions"> | string
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
    experience?: JsonFilter<"Mentor">
    resumeId?: StringFilter<"Mentor"> | string
    Github?: StringNullableFilter<"Mentor"> | string | null
    Instagram?: StringNullableFilter<"Mentor"> | string | null
    LinkedIn?: StringFilter<"Mentor"> | string
    Twitter?: StringNullableFilter<"Mentor"> | string | null
    Website?: StringNullableFilter<"Mentor"> | string | null
  }

  export type sessionsCreateWithoutMentorInput = {
    title: string
    description?: string | null
    startTime: string
    endTime: string
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
    startTime: string
    endTime: string
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
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    sessions?: sessionsCreateNestedManyWithoutMenteeInput
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
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    sessions?: sessionsUncheckedCreateNestedManyWithoutMenteeInput
  }

  export type MenteeCreateOrConnectWithoutMentorInput = {
    where: MenteeWhereUniqueInput
    create: XOR<MenteeCreateWithoutMentorInput, MenteeUncheckedCreateWithoutMentorInput>
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
    Github?: StringNullableFilter<"Mentee"> | string | null
    Instagram?: StringNullableFilter<"Mentee"> | string | null
    LinkedIn?: StringNullableFilter<"Mentee"> | string | null
    Twitter?: StringNullableFilter<"Mentee"> | string | null
    Website?: StringNullableFilter<"Mentee"> | string | null
  }

  export type MessageCreateWithoutConversationInput = {
    content: string
    senderId: string
    createdAt?: Date | string
    isRead?: boolean
    messageType?: $Enums.MessageType
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: number
    content: string
    senderId: string
    createdAt?: Date | string
    isRead?: boolean
    messageType?: $Enums.MessageType
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    conversationId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    isRead?: BoolFilter<"Message"> | boolean
    messageType?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
  }

  export type ConversationCreateWithoutMessagesInput = {
    participant1Id: string
    participant2Id: string
    type?: $Enums.ConversationType
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessage?: string | null
    isActive?: boolean
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: number
    participant1Id: string
    participant2Id: string
    type?: $Enums.ConversationType
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessage?: string | null
    isActive?: boolean
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    participant1Id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    participant1Id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
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
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    mentor?: MentorCreateNestedManyWithoutMenteeInput
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
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string | null
    Twitter?: string | null
    Website?: string | null
    mentor?: MentorUncheckedCreateNestedManyWithoutMenteeInput
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: string
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: string
    Github?: string | null
    Instagram?: string | null
    LinkedIn?: string
    Twitter?: string | null
    Website?: string | null
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
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    mentor?: MentorUpdateManyWithoutMenteeNestedInput
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
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    mentor?: MentorUncheckedUpdateManyWithoutMenteeNestedInput
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: StringFieldUpdateOperationsInput | string
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: StringFieldUpdateOperationsInput | string
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    mentee?: MenteeUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type sessionsCreateManyMenteeInput = {
    id?: number
    mentorId: string
    title: string
    description?: string | null
    startTime: string
    endTime: string
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

  export type sessionsUpdateWithoutMenteeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: StringFieldUpdateOperationsInput | string
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: StringFieldUpdateOperationsInput | string
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
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
    experience?: JsonNullValueInput | InputJsonValue
    resumeId?: StringFieldUpdateOperationsInput | string
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: StringFieldUpdateOperationsInput | string
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsCreateManyMentorInput = {
    id?: number
    menteeId: string
    title: string
    description?: string | null
    startTime: string
    endTime: string
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

  export type sessionsUpdateWithoutMentorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: sessionsUpdateManyWithoutMenteeNestedInput
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
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: sessionsUncheckedUpdateManyWithoutMenteeNestedInput
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
    Github?: NullableStringFieldUpdateOperationsInput | string | null
    Instagram?: NullableStringFieldUpdateOperationsInput | string | null
    LinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    Twitter?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyConversationInput = {
    id?: number
    content: string
    senderId: string
    createdAt?: Date | string
    isRead?: boolean
    messageType?: $Enums.MessageType
  }

  export type MessageUpdateWithoutConversationInput = {
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
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