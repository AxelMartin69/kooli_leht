//const tunniplaan = (id = 1529) => {
    var request = new XMLHttpRequest()

    request.open('GET', `https://siseveeb.voco.ee/veebilehe_andmed/tunniplaan?grupp=1529&nadal=2022-03-07`, true)
    request.onload = function () {
      var data = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {
          console.log(data)
      } else {
        console.log('error')
      }
    }

    request.send()
//}