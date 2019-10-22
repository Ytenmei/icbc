let BackUrl = null
let BasiUrl = process.env.VUE_APP_BASIC_API

if (BasiUrl === 'dev') {
  BackUrl = 'dev url'
} else if (BasiUrl === 'qa') {
  BackUrl = 'http://172.24.244.111:2484'
} else if (BasiUrl === 'prd') {
  BackUrl = 'prd url'
}
export default BackUrl
