export default{
  install(app, options) {
    let current = 'ru'
    const changeLanguage = name => {
      current = name
      console.log(current)
    }
    app.config.globalProperties.$alert = text => {
      window.alert(text)
    }
    app.config.globalProperties.$i18n = key => {
     return  key.split(".").reduce((acc,k)=>{
        return acc[k] || "=== UNKNOWN ==="
      },options[current])
    }
  }
}