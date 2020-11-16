 var colection = this.document.querySelectorAll("td");
 for(let i of colection)
        {
            colection[i].style.fontFamily = "sans-serif"
            colection[i].style.fontSize = "1.5em"
        }
		

const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'First elem child';
ul.children[1].innerText = 'Second elem child';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

