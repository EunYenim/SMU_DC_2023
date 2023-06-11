// 5초 후에 다음 페이지로 이동하는 함수
function goToNextPage() {
  window.location.href = "http://127.0.0.1:5500/W15/FinalFroject/FinalFroject.html";
}

// 5초 후에 goToNextPage() 함수를 실행
//setTimeout(goToNextPage, 10000); // 5초 (5000ms) 설정


  setTimeout(function() {
    var backgroundMusic = document.getElementById("backgroundSound");
    backgroundMusic.play();
  }, 3000);



window.addEventListener('DOMContentLoaded', function() {
var backgroundMusic = document.getElementById('backgroundSound');
backgroundMusic.volume = 0.2;
});


let textContainer = document.getElementById('text-container');
let text = document.getElementById('title');
let message = "Return of the Obra Dinn";

let index = 0;

function showNextCharacter() {
  if (index < message.length) {
    text.textContent += message.charAt(index);
    index++;
    setTimeout(showNextCharacter, 100); // 다음 글자까지의 딜레이(ms)
  }
}

showNextCharacter();

window.addEventListener('load', function() {
  setTimeout(function() {
    var image = document.getElementById('main__media');
    image.classList.add('show');
  }, 2500); // 3초
});

window.addEventListener('load', function() {
  setTimeout(function() {
    var text = document.getElementById('notice');
    text.style.visibility = 'visible';
    text.classList.add('show');
  }, 4000); // 3초
});

document.addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:5500/W15/FinalFroject/FinalFroject.html';
});






