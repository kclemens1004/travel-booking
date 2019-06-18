var hotelButton = document.getElementById('hotel-select');
var hotelInfo = document.getElementById('hotel-info');


var redBoofInn = {
    name: "Red Boof Inn",
    id: 1,
    image: "<img src='img/redboof.jpg' alt='redboof'>",
    description: "red boof description"
};

var ebdb = {
    name: "EBDB BnB",
    id: 2,
    image: "<img src='img/ebdb.jpg' alt='ebdb'>",
    description: "ebdb description"
};

var stufittInn = {
    name: "Stufitt Inn",
    id: 3,
    image: "<img src='img/stufitt.jpg' alt='redboof'>",
    description: "stufitt description"
};

function selectHotel() {
    var hotel = document.getElementById('hotel');
    hotelInfo.style.display = "flex";

    if (hotel.value === "redBoofInn") {
        console.log(redBoofInn.name);

    }

    else if (hotel.value === "ebdb") {
        console.log(ebdb.name);
    }

    else if (hotel.value === "stufittInn") {
        console.log(stufittInn.name)
    }

    else {
        console.log("error");
    }

}

hotelButton.onclick = selectHotel;