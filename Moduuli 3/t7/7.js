
const image = document.getElementById('target');
const button = document.getElementById('trigger')
const originalSrc = image.src;

button.addEventListener('mouseover', function() {
  image.src = 'img/picB.jpg';
});

button.addEventListener('mouseout', function() {
  image.src = originalSrc;
});