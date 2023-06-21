function volume_sphere() {
    //Write your code here
	let rad = document.getElementById('radius').value;
	let vol = document.getElementById('volume');

	let result = (4/3)*3.14*r*r*r;

	vol.innerText = result;
	
	
  
} 
document.getElementById('submit').addEventListener("click", volume_sphere);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
