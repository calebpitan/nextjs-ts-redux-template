export interface Payload<T extends { [x: string]: any }> {
  data: T
  success?: boolean
  modified?: boolean
  message?: string
}

export interface ErrorPayload {
  error?: {
    [x: string]: any
    name: string
    message: string
    statusCode: number
    details: {
      [x: string]: any
      code: string
      provider?: 'SERVER' | 'CLIENT'
      input?: {
        [x: string]: any
      }
    }
  }
}

export type PayloadOrError = Payload<{ [x: string]: any }> | ErrorPayload

export type PayloadData = {
  _id: string
}
