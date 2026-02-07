import { Boot } from '@quasar/app-vite/wrappers'
import axios from 'axios'
import { Loading } from 'quasar'
import { formatDate } from './function'

const sdate = formatDate(new Date(), 'YYYY-MM-DD')

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  Headers: {
    'x-api-key': import.meta.env.VITE_APP_X_API_KEY,
    sSSc49ddNxTDl51hJmUhtZm1yf2V: '*',
  },
})
api.Loading = (props) => Loading.show(props)
api.hide = (delay = 500) => setTimeout(() => Loading.hide(), delay)
api.today = () => sdate

export default Boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})
export { api }
