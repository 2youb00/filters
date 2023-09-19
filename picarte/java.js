let up = document.getElementById('upload');
let img = document.getElementById('img');
let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hue-rotate');
let download = document.getElementById('download');
let reset = document.getElementById('reset');
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');


/////////////// downlode and uplode hidding ////////////////
onload = function(){
    download.style.display='none';
    reset.style.display='none';
    img.style.display='none';
}
up.onchange=function(){
    download.style.display='block';
    reset.style.display='block';
    img.style.display='block';
}
///////////// getreset //////////
function getreset() {
    img.style.display='block';
    canvas.style.display='none';
    canvas.style.filter='none';
  saturate.value = 100;
  contrast.value = 100;
  brightness.value = 100;
  sepia.value = 0;
  grayscale.value = 0;
  blur.value = 0;
  hueRotate.value = 0;
}

///////// add picture /////////////
up.addEventListener('change', function() {
  let file1 = new FileReader();
  file1.readAsDataURL(up.files[0]);
  file1.onload = function() {
    img.src = file1.result;
  }
  getreset();
  img.onload=function(){
    canvas.style.display='block';
    canvas.width=img.width;
    canvas.height=img.height;
    c.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display='none';
  }
});

/////////////////// filter ////////////////////////
let filters = document.querySelectorAll('ul li input');
if (filters.length > 0) {
  filters.forEach(filter => {
    filter.addEventListener('input', function() {
        img.style.display='none';
        canvas.style.display='block';
      let saturateValue = saturate.value + '%';
      let contrastValue = contrast.value + '%';
      let brightnessValue = brightness.value + '%';
      let sepiaValue = sepia.value + '%';
      let grayscaleValue = grayscale.value;
      let blurValue = blur.value + 'px';
      let hueRotateValue = hueRotate.value + 'deg';

      c.filter = `
        saturate(${saturateValue})
        contrast(${contrastValue})
        brightness(${brightnessValue})
        sepia(${sepiaValue})
        grayscale(${grayscaleValue})
        blur(${blurValue})
        hue-rotate(${hueRotateValue})
      `
      c.drawImage(img,0,0,canvas.width,canvas.height);
    });
  });
  
}
////////////////////downlode bfffffffffffffffff /////////////
download.onclick = function(){
    download.href=canvas.toDataURL();
}
