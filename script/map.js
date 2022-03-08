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