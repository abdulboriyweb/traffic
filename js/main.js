document.addEventListener('DOMContentLoaded', function() {
    const lights = document.querySelectorAll('.light');
    let activeLightIndex = 0;
  
    function toggleLights() {
      lights.forEach(light => {
        light.classList.remove('active');
      });
  
      lights[activeLightIndex].classList.add('active');
      activeLightIndex = (activeLightIndex + 1) % lights.length;
    }
  
    setInterval(toggleLights, 2000); // Change lights every 2 seconds
  });