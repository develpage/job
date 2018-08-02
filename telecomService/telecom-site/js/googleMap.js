 function initMap() {
     // Styles a map in night mode.
     var map = new google.maps.Map(document.getElementById('map'), {
         center: { lat: 47.230332, lng: 39.699035 },
         zoom: 16,
         scrollwheel: true,
         mapTypeControl: false,
         streetViewControl: false,
         zoomControl: true,
         
     });
     var myMark = {
         path: "M13.934,0.013C6.553,0.324,0.441,6.342,0.024,13.717c-0.145,2.563,0.374,4.998,1.402,7.137   c0.042,0.089,8.827,12.608,12.006,17.136c0.552,0.786,1.714,0.783,2.267-0.002l11.843-16.815c1.013-1.982,1.584-4.23,1.584-6.61   C29.126,6.31,22.264-0.337,13.934,0.013z M14.563,23.301c-4.825,0-8.738-3.914-8.738-8.738s3.912-8.738,8.738-8.738   c4.824,0,8.738,3.914,8.738,8.738S19.387,23.301,14.563,23.301z",
         fillColor: '#3d8466',
         fillOpacity: 1,
         anchor: new google.maps.Point(0, 40),
         strokeWeight: 0,

     };

     var marker = new google.maps.Marker({
         position: { lat: 47.230332, lng: 39.699035 },
         map: map,
         icon: myMark,
         animation: google.maps.Animation.DROP
     });

     var InfoWindow = new google.maps.InfoWindow({
         content: '<b>Телеком Сервис</b><br>город Ростов-на-Дону<br>ул.Варфоломеева, 185<br>'
     });

     InfoWindow.open(map, marker);

     marker.addListener('click', function() {
         InfoWindow.open(map, marker);
     });


 }



