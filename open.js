javascript:(() => {
function get(index) {
  var className = Array.from(document.getElementsByTagName('label')).find(_ => _.innerHTML === 'Username').parentElement.parentElement.className;

  return document.getElementsByClassName(className)[index].children[1].children[0].value
}

var url = get(2);
var username = get(0);
var password = get(1);
window.open(url + "&amp;username=" + encodeURIComponent(username) + "&amp;password=" + encodeURIComponent(password));
})();