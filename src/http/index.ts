import Request from './request';

const request = new Request({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 10,
  interceptors:{
    requestInterceptors: (config) =>{
      return config
    },
    responseInterceptors: (res) => {
      return res
    }
  },
})

export function cancelRequest(url:string){
  return request.cancelRequest(url)
}
export function cancelAllRequest(){
  return request.cancelAllRequest()
}

export default request;