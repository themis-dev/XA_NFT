import Vue from 'vue'
Vue.directive('longpress', function (el, binding){
    // if (typeof binding.value !== 'function') {
    //   throw Error(binding.value + '不是函数')
    // }
    // Make sure expression provided is a function
     if (typeof binding.value !== 'function') {
     // Fetch name of component
        const compName = vNode.context.name
     // pass warning to console
        let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be`
           if (compName) { warn += `Found in component '${compName}' ` }
              console.warn(warn)
           }
          let pressTimer = null
               // 开始按下
               let start = (e) => {
                 // 如果是点击事件，不启动计时器，直接返回
                 if (e.type === 'click' && e.button !== '0') {
                   return
                 }
                 if (pressTimer == null) {
                   // 创建定时器 （2s之后执行长按功能韩函数）
                   pressTimer = setTimeout(() => {
                     binding.value() // 执行长按功能函数
                   }, 2000)
                 }
               }
               // 取消按下
               let cancel = (e) => {
                 if (pressTimer != null) {
                   clearTimeout(pressTimer)
                   pressTimer = null
                 }
               }
               // 添加事件监听器
               el.addEventListener("mousedown", start)
               el.addEventListener("touchstart", start)
               // 取消计时器
               el.addEventListener("click", cancel);
               el.addEventListener("mouseout", cancel);
               el.addEventListener("touchend", cancel);
               el.addEventListener("touchcancel", cancel);
    })