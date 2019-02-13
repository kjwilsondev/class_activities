var header = {
    "type": "JWT",
    "alg": "HS256"
}

var payload = {
    "exp": 1300819380,
    "name": "KJ Wilson",
    "_id": "3sfas687a789dadf998",
    "admin": true
}

var encodedString = HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), 'fudatbihya');

function signupViaAjax() {
  fetch("/sign-up")
    .then(function(data) {
      // Here you get the data to modify as you please
      })
    })
    .catch(function(error) {
      // If there is any error you will catch them here
    });
}
