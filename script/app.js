
const tunniplaan = (id = 1529, time = '2022-03-07') => {
    var request = new XMLHttpRequest()
    const app = document.getElementById('info')

    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    request.open('GET', `https://siseveeb.voco.ee/veebilehe_andmed/tunniplaan?grupp=${id}&nadal=${time}`, true)
    request.onload = function () {
      	var data = JSON.parse(this.response)
      	if (request.status >= 200 && request.status < 400) {
      	  	console.log(data);
			for (date in data.tunnid) {
				for (item in date) {
					console.log(item);
				}
			}
            
      	} else {
      	  	console.log('error')
      	}
    }

    request.send()
}

function initMap() {
    // Kooli asukoht
    const kool = { lat: 58.34985679989212, lng: 26.715514809664125 };
    // maakaart kooli koha peal
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: kool,
    });
    // Marker kooli kohal
    const marker = new google.maps.Marker({
      position: kool,
      map: map,
    });
}