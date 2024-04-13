document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("gallery-container");

  for (let i = 1; i <= 46; i++) {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-6 col-lg-3";

    const boxDiv = document.createElement("div");
    boxDiv.className = "box";

    const imgBoxDiv = document.createElement("div");
    imgBoxDiv.className = "img-box";

    const image = document.createElement("img");
    image.src = `images/riñon/riñon${i}.jpg`;
    image.alt = "";
    image.className = "hoverable";

    imgBoxDiv.appendChild(image);
    boxDiv.appendChild(imgBoxDiv);
    colDiv.appendChild(boxDiv);

    container.appendChild(colDiv);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("bolsas-container");

  for (let i = 1; i <= 22; i++) {
    const divWrapper = document.createElement("div");
    divWrapper.className = ""; // Puedes asignar una clase específica si es necesario.

    const boxDiv = document.createElement("div");
    boxDiv.className = "box";

    const imgBoxDiv = document.createElement("div");
    imgBoxDiv.className = "img-box";

    const image = document.createElement("img");
    // Asegurándonos de que el nombre de archivo tenga la extensión correcta
    image.src = `images/personalizado/personalizado${i}.jpg`;
    image.alt = "";

    imgBoxDiv.appendChild(image);
    boxDiv.appendChild(imgBoxDiv);
    divWrapper.appendChild(boxDiv);

    container.appendChild(divWrapper);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("ecommerce-container");

  for (let i = 1; i <= 7; i++) {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-6 col-lg-3";

    const boxDiv = document.createElement("div");
    boxDiv.className = "box";

    const imgBoxDiv = document.createElement("div");
    imgBoxDiv.className = "img-box";

    const image = document.createElement("img");
    image.src = `images/ecommerce/ecommerce${i}.jpg`;
    image.alt = "";
    image.className = "hoverable";

    imgBoxDiv.appendChild(image);
    boxDiv.appendChild(imgBoxDiv);
    colDiv.appendChild(boxDiv);

    container.appendChild(colDiv);
  }
});

// to get current year
// Comentado ya que causa un error
// function getYear() {
//   var currentDate = new Date();
//   var currentYear = currentDate.getFullYear();
//   document.querySelector("#displayYear").innerHTML = currentYear;
// }

// getYear();

// owl carousel slider js
var owl = $(".project_carousel").owlCarousel({
  loop: false,
  margin: 15,
  center: true,
  startPosition: 2,
  autoplay: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  autoplayHoverPause: true,
  responsive: {
    0: {
      center: false,
      items: 1,
      margin: 0,
    },
    769: {
      items: 2,
    },
    992: {
      center: true,
      items: 3,
    },
  },
});

// owl.owlcarousel2_filter

$(".owl-filter-bar").on("click", ".item", function (e) {
  var $items = $(".owl-filter-bar a");
  var $item = $(this);
  var filter = $item.data("owl-filter");
  $items.removeClass("active");
  $item.addClass("active");
  owl.owlcarousel2_filter(filter);

  e.preventDefault();
});
/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(-34.5729119, -58.5482433),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
