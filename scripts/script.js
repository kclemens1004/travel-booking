var hotelButton = document.getElementById('hotel-select');
var hotel = document.getElementById('hotel');

function selectHotel() {
    console.log(hotel.value);
}

hotelButton.onclick = selectHotel;