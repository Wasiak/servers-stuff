var button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'guzik';

var sendReq = function(){
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		var kuba = JSON.parse(xhr.responseText);
		button.innerHTML = kuba.name;
		console.log(kuba);
	}
	xhr.open('get', 'http://127.0.0.1:1337', true);
	xhr.send();
}
button.onclick = sendReq;

// PRACA DOMOWA
// 
// node.fs otwierac pliki zapisywac do pliku czytac  plku i do consoli w NODZIE wszystko
// zeby z przegladarki wejsc na server i odpalic w przegladarce jakis tekst za pliku txt

// zrobic formularz i ma sie wyslac do servera GET / POST i potem wyswietlic w consoli

// var tekst = 'bideri ocnsdiuho  h47 ojn78 kjcn988 3 4 elo';
// var reg = new RegExp("\D", 'g');
// tekst = tekst.replace(reg, '!');
// console.log(tekst);