const devUrl = '/api'
const prodUrl = process.env.REACT_APP_PROD_URL
export const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl

export const emailid = process.env.EMAIL_ID