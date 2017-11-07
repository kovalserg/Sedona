var link = document.querySelector('.link');
var form = document.querySelector("form");
var map;
link.addEventListener("click",function(e){
    e.preventDefault();
    form.classList.toggle('open');
});
window.addEventListener('keydown',function(e){
    if(e.keyCode===27){
        form.classList.remove('open');
    }
});
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 34.852, lng:  -111.7344},
      zoom: 8
    });
  }