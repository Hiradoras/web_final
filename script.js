function makeDarkOrLight() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function showPhoneNumber(){
    alert("Call this number: +996 525235236");
}
document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
