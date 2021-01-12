export enum AuthProviderEnum {
  CLIENT = 'CLIENT',
  SERVER = 'SERVER',
}

export enum ErrorCodeType {
  ROUTER_ERROR = 'ROUTER_ERROR',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  FORBIDDEN = 'FORBIDDEN',
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  BAD_GATEWAY = 'BAD_GATEWAY',
  INVALID_ID = 'INVALID_ID',
}

export enum ErrorName {
  TokenExpiredError = 'TokenExpiredError',
  AuthenticationError = 'AuthenticationError',
  GatewayError = 'GatewayError',
  RouterError = 'RouterError',
  ForbiddenError = 'ForbiddenError',
  UserInputError = 'UserInputError',
  AssetNotFoundError = 'AssetNotFoundError',
  InvalidIdError = 'InvalidIdError',
}

export enum ErrorStatusCode {
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  UNAUTHENTICATED = 401,
  NOT_FOUND = 404,
  BAD_GATEWAY = 502,
}

export type AuthProvider = keyof typeof AuthProviderEnum
