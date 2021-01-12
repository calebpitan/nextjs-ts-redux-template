import axios, { AxiosError, AxiosInterceptorManager, AxiosResponse } from 'axios'
import { AuthProviderEnum, ErrorName } from '@error/types'
import { ErrorPayload, Payload, PayloadOrError } from '@services/types'

const getAuth = () => {
  try {
    const auth = window.localStorage.getItem('auth')
    return auth ? `Bearer ${auth}` : auth
  } catch (e) {
    if (e.name !== 'ReferenceError') {
      throw e
    }
  }
}

const southwall = axios.create({
  baseURL: 'http://localhost:7000',
  timeout: 30000,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    Authorization: getAuth(),
  },
})

const interceptedResponse = southwall.interceptors.response as AxiosInterceptorManager<
  AxiosResponse<PayloadOrError>
>

const responseInterceptor: (
  r: AxiosResponse<PayloadOrError>
) => Promise<any> | AxiosResponse<Payload<{}>> = response => {
  const error = (response.data as ErrorPayload).error
  if (error) {
    return Promise.reject<any>(error)
  }
  return response as AxiosResponse<Payload<{}>>
}

const errorInterceptor: (
  e: AxiosError<ErrorPayload>
) => Promise<AxiosError<ErrorPayload>> = err => {
  // eslint-disable-next-line no-console
  // console.log('Interceptor', err.response)
  const { error } = err.response.data
  if (
    error &&
    error.name === ErrorName.TokenExpiredError &&
    error.details.provider === AuthProviderEnum.CLIENT
  ) {
    // TODO: Refresh token
  }
  return Promise.reject(err)
}

interceptedResponse.use(responseInterceptor, errorInterceptor)

export default southwall
