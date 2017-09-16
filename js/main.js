
var dataContainer = document.getElementById("guardian-news");
var btn = document.getElementById("rfrsh");
console.log('yoyoyo')
btn.addEventListener("click", ajaxCall(););

function ajaxCall() {
	var guardianRequest = new XMLHttpRequest();
    var url = 'https://www.theguardian.com/uk'

  function callGuardianDomain() {
	if(guardianRequest) {
      guardianRequest.open('GET', url, true);
      guardianRequest.onreadystatechange = handler;
      guardianRequest.onload = function() {
        var guardianData = JSON.parse(guardianRequest.responseText);
        renderHTML(guardianData);
	};
      guardianRequest.send();
  }
 }
};

function renderHTML(data) {
  dataContainer.insertAdjacentHTML('beforeend', 'test 123')
}


// btn.addEventListener("click", ajaxCall(););



