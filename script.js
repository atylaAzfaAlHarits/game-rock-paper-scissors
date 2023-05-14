const imageRock = document.querySelector('.rock-img');
const imagePaper = document.querySelector('.paper-img');
const imageScissors = document.querySelector('.scissors-img');

const imageLabels = document.querySelectorAll('.image-label');
const images = document.querySelectorAll('input[name="option"]');


imageRock.addEventListener('click', function() {
  imageRock.classList.toggle('clicked');
});
imagePaper.addEventListener('click', function() {
  imagePaper.classList.toggle('clicked');
});
imageScissors.addEventListener('click', function() {
  imageScissors.classList.toggle('clicked');
});

images.forEach(function(image) {
  image.addEventListener('change', function() {
    imageLabels.forEach(function(label) {
      label.classList.remove('selected');
    });

    if (image.checked) {
      const selectedLabel = document.querySelector('label[for="' + image.id + '"]');
      selectedLabel.classList.add('selected');
    }
  });
});


// const form = document.getElementById('option-form');
// form.addEventListener('submit', function(e){
    // e.preventDefault();

    // const options = form.elements.name.value;
    // localStorage.setItem('options', options);

//     window.location.href = 'result.html';
// });

// 

var p = document.getElementById('option');
var comp = Math.random();

if(comp < 0.34){
    comp = 'img/batu.jpg';
}else if(comp >= 0.34 && comp < 0.67){
    comp = 'img/gunting.jpg';
}else{
    comp = 'img/kertas.jpg';
}

if(p == comp){
    hasil = 'SERI';
    imgP = p;
    imgComp = comp;
}else if(p == 'img/batu.jpg'){
    hasil = comp == 'img/gunting.jpg' ? 'MENANG' : 'KALAH';
    imgP = p;
    imgComp = comp;
}else if(p == 'img/kertas.jpg'){
    hasil = comp == 'img/gunting.jpg' ? 'KALAH' : 'MENANG';
    imgP = p;
    imgComp = comp;
}

// 
// Menyimpan data ke Local Storage
localStorage.setItem('imgP', imgP);
localStorage.setItem('imgComp', imgComp);

// Mengambil data dari Local Storage di halaman lain
var dataP = localStorage.getItem('imgP');
var dataComp = localStorage.getItem('imgComp');

// Pindah halaman dengan menyematkan data sebagai parameter di URL
var data = imgP;
window.location.href = 'result.html?option=' + encodeURIComponent(data);

// Di halaman tujuan, ambil data dari URL
var urlParams = new URLSearchParams(window.location.search);
var data = urlParams.get('option');

// Menyimpan data ke Session Storage
sessionStorage.setItem('option', data);

// Mengambil data dari Session Storage di halaman lain
var data = sessionStorage.getItem('option');

const optionPlayer = document.getElementById('optionPlayer').getAttribute('src');
const optionComputer = document.getElementById('optionComputer').getAttribute('src');

optionPlayer.setAttribute('src', data);
optionComputer.setAttribute('src', imgComp);

