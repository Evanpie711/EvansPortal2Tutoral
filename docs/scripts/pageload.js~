
async function loadhtml(name) {
	var loader = new XMLHttpRequest();
	loader.open('GET', name, true);
	loader.onreadystatechange=function () {
		if(this.readyState!==4) {return;}
		if(this.status!==200) {return;}
		document.getElementById('ContentContainer').innerHTML=this.responseText;
		return 1;
	}
	loader.send();

}