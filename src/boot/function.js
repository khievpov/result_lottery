import { date } from 'quasar'
import { boot } from 'quasar/wrappers'

function formatDateTime(dates) {
  return date.formatDate(dates, 'DD-MM-YYYY HH:mm')
}
function formatDate(dates, format = 'DD/MM/YYYY') {
  return date.formatDate(dates, format)
}
function formatYearMonth(dates) {
  return date.formatDate(dates, 'YYYY/MM')
}

export default boot(({ app }) => {
  app.config.globalProperties.$formatDateTime = formatDateTime
  app.config.globalProperties.$formatDate = formatDate
  app.config.compilerOptions.$formatYearMonth = formatYearMonth
})

export { formatDateTime, formatDate, formatYearMonth }
