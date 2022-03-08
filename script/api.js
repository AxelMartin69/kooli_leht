const app = document.getElementById('home')

const container = document.createElement('div')
container.setAttribute('class', 'container')

const tunniplaan = (id = 1529, time = '2022-03-07') => {
    var request = new XMLHttpRequest()

    request.open('GET', `https://siseveeb.voco.ee/veebilehe_andmed/tunniplaan?grupp=${id}&nadal=${time}`, true)
    request.onload = function () {
      	var data = JSON.parse(this.response)
      	if (request.status >= 200 && request.status < 400) {
      	  	console.log(data)  
      	  	console.log(data.nadal)
            data.forEach(tunnid => {
              	const card = document.createElement('div')
              	card.setAttribute('class', 'card')
				
              	const h1 = document.createElement('h1')
              	h1.textContent = tunnid
				/**
              const p = document.createElement('p')
              movie.description = movie.description.substring(0, 300)
              p.textContent = `${movie.description}...`
				*/
              	container.appendChild(card)
              	card.appendChild(h1)
              	card.appendChild(p)
            })
      	} else {
      	  	console.log('error')
      	}
    }

    request.send()
}