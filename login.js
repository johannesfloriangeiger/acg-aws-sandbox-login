javascript:(() => {
function extract(string, prefix, suffix) {
  var start = string.indexOf(prefix) + prefix.length;
  var end = string.indexOf(suffix, start);

  return string.substring(start, end);
}

var username = document.getElementById("username");
username.value = decodeURIComponent(decodeURIComponent(extract(window.location.search, encodeURIComponent("username%3D"), encodeURIComponent("%26"))));
username.dispatchEvent(new Event("change"));

var password = document.getElementById("password");
password.value = decodeURIComponent(decodeURIComponent(extract(window.location.search, encodeURIComponent("password%3D"), encodeURIComponent("%26"))));
password.dispatchEvent(new Event("change"));

document.getElementById("signin_button").click();
})();