
function loadResize(){
  var sections = document.querySelectorAll('section')
  sections.forEach((section) => {
    var handle = section.querySelector('a.handle')
    var content = section.querySelector('div.content')

    handle.addEventListener('mousedown', (event) => {
      event.preventDefault()

      const drag = (event) => {
        event.preventDefault()

        const left = (100 * event.pageX) / window.innerWidth
        const right = 100 - left

        content.style.gridTemplateColumns = `minmax(400px, ${left}%) minmax(400px, ${right}%)`
        handle.style.left = `max(400px, ${left}%)`
      }

      const mouseup = (event) => {
        event.preventDefault()

        document.removeEventListener('mousemove', drag)
        document.removeEventListener('mouseup', mouseup)
      }

      document.addEventListener('mousemove', drag)
      document.addEventListener('mouseup', mouseup)
    })

    handle.addEventListener('click', (event) => {
      event.preventDefault()
    })
  })
}

async function loadhtml(name) {
	var loader = new XMLHttpRequest();
	loader.open('GET', name, true);
	loader.onreadystatechange=function () {
		if(this.readyState!==4) {return;}
		if(this.status!==200) {return;}
		document.getElementById('ContentContainer').innerHTML=this.responseText;
		loadResize();
		return 1;
	}
	loader.send();

	

}


