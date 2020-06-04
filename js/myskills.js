
console.log('skill file');

let aboutbtn = document.querySelector('#about');
aboutbtn.addEventListener('click', mySkill);
function mySkill() {
    
		let skills = document.getElementsByClassName('skillfiller');
		let percentAll = document.getElementsByClassName('skillpercent');
		let percent = Array.from(percentAll);
		let skillfiller = Array.from(skills);
		for(let i = 0; i < skillfiller.length; i++) {
			let endPoint = 0;
			function myFunction() {
			let width = 0;
			let id = setInterval(frame, 30);
			function frame() {
			if(width >= endPoint) {
				clearInterval(id);
			}else {
				width++;
				skillfiller[i].style.width = width + "%";
				percent[i].textContent = width + "%";
			}
		}
		}
		function skillFunction () {
			if(skillfiller[i].id == "html") {
				endPoint = 100;
				myFunction();
			}
			if(skillfiller[i].id == "css") {
				endPoint = 90;
				myFunction();
			}
			if(skillfiller[i].id == "bootstrap") {
				endPoint = 70;
				myFunction();
			}
			if(skillfiller[i].id == "javascript") {
				endPoint = 80;
				myFunction();
			}
			if(skillfiller[i].id == "jquery") {
				endPoint = 70;
				myFunction();
			}
		}
		skillFunction();
		}
	
    }





