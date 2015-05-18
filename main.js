var app = angular.module("myInstaApp",[]);

var PhotoController = function($http) {
   var that = this;
    $http.get('/page.php').
  success(function(data, status, headers, config) {
    that.pics = data.data;
  }).
  error(function(data, status, headers, config) {
    console.log("error");
  });
    
    this.eventHandle = function(i){
         $.magnificPopup.open({
                        items: {
                          src: i.images.standard_resolution.url
                        },
                        type: 'image' // this is default type
                    });
    }
};

app.controller("PhotoController", PhotoController);

var bio = [
            {  
               "data":{  
                  "username":"amarshukla",
                  "bio":"Allahabad \u003e\u003e\u003e New Delhi\n\ud83d\udcbb Engineer\nColorful India \ud83d\udd30\nI \ud83d\udc9d \ud83c\udf43\ud83c\udf3f \ud83c\udf0d\u2708\ud83d\ude98\nSay NO to Selfie \u0026 Locked A\/C",
                  "website":"",
                  "profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xfa1\/t51.2885-19\/10891084_1595756530665507_729268380_a.jpg",
                  "full_name":"amar",
                  "counts":{  
                     "media":747,
                     "followed_by":1088,
                     "follows":649
                  },
                  "id":"197654490"
               }
            }
];


var BioController = function () {
    var that = this;
    that.bio = bio;
}

app.controller("BioController", BioController);
               

                