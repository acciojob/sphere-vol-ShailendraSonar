function volume_sphere() {
    //Write your code here
	let rad = parseFloat(document.getElementById('radius').value);
        let vol = document.getElementById('volume');
        // vol.inputMode.value = "none";

        let result = (4 / 3) * Math.PI * rad * rad * rad;
        console.log(result);

        vol.value = result.toFixed(2);
  
  
} 
// document.getElementById('submit').addEventListener("click", volume_sphere);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
