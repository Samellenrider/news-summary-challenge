
var dataContainer = document.getElementById("guardian-news");
var btn = document.getElementById("rfrsh");

btn.addEventListener("click", function () {
	var guardianRequest = new XMLHttpRequest();
      guardianRequest.open('GET', 'https://content.guardianapis.com/search?api-key=c148d976-d913-445c-8148-b46110b280d0');
      guardianRequest.onload = function() {
        var guardianData = JSON.parse(guardianRequest.responseText);
        renderHTML(guardianData);
	  };
      guardianRequest.send();
  });

function renderHTML(data) {
	var htmlString = ""

	for(i=0; i < 5; i++) {
		
		htmlString += '<a href=' + data.response.results[i].webUrl + '/#img-1><img scr=" ' + data.response.results[i].webUrl + '/#img-1" alt="" style="width:455px;height:273px;"' + '></a>'
		
		htmlString += '<li><a href= ' + data.response.results[i].webUrl + '>' + data.response.results[i].webTitle + '</a></li>'
	} 
  



  dataContainer.insertAdjacentHTML('beforeend', htmlString)
}


