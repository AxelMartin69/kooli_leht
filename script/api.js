const tunniplaan = (id = 1529, week = '2022-03-07', day = '2022-03-07') => {
    var request = new XMLHttpRequest()
    const app = document.getElementById('info')

    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    let andmed = []

    request.open('GET', `https://siseveeb.voco.ee/veebilehe_andmed/tunniplaan?grupp=${id}&nadal=${week}`, true)
    request.onload = function () {
      	var data = JSON.parse(this.response)
      	if (request.status >= 200 && request.status < 400) {
      	  	data.tunnid[day].forEach(element => {
                andmed.push(element)
            });
			
            
      	} else {
      	  	console.log('error')
      	}
    }

    request.send()
    return andmed

}
