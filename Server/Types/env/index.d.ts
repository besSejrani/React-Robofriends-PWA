declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string

    MONGO_LOCAL: string
    MONGO_ATLAS: string

    CORS_DOMAIN: string
    JWT_SECRET: string
  }
}
