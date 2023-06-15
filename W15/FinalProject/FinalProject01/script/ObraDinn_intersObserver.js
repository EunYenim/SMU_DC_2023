// intersectionObserver 함수

const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.15],
};

const callback = (aaaaaaaaaa, observer) => {
  aaaaaaaaaa.forEach((trigger) => {
    if (trigger.isIntersecting) {
      trigger.target.classList.add("triggered");
    } else {
      trigger.target.classList.remove(
        "triggered"
      );
    }
  });
};

const gggggg = new IntersectionObserver(
  callback,
  options
);

const animTriggers = document.querySelectorAll(
  ".animTrigger"
);
animTriggers.forEach((aaaa) => {
  gggggg.observe(aaaa);
});

//버튼 애니메이션
let button = document.getElementById("button");
let animTarget2 = document.getElementById("S5anim1")
//aBox.onclick = function () {
// aBox.classList.toggle("box--clicked");
// };
// function (){} 는 ()=>{}와 같다
button.onclick = () => {
  animTarget2.classList.toggle("triggered2");
  setTimeout(() => {
    // 3초 후에 다른 페이지로 이동
    window.location.href = "http://127.0.0.1:5500/W15/FinalProject/FinalProject02/FinalProject02.html";
  }, 3000); // 3초 (3000밀리초) 설정
};


//nav
let nav1 = document.getElementById("nav1");

nav1.onclick = () => {
  setTimeout(() => {
    // 3초 후에 다른 페이지로 이동
    window.location.href = "http://127.0.0.1:5500/W15/FinalProject/FinalProject01/FinalProject.html";
  }, 2000); // 3초 (3000밀리초) 설정
};

let nav2 = document.getElementById("nav2");

nav2.onclick = () => {
  setTimeout(() => {
    // 3초 후에 다른 페이지로 이동
    window.location.href = "http://127.0.0.1:5500/W15/FinalProject/FinalProject02/FinalProject02.html";
  }, 2000); // 3초 (3000밀리초) 설정
};

let nav3 = document.getElementById("nav3");

nav3.onclick = () => {
  setTimeout(() => {
    // 3초 후에 다른 페이지로 이동
    window.location.href = "http://127.0.0.1:5500/W15/FinalProject/FinalProject03/FinalProject03.html";
  }, 2000); // 3초 (3000밀리초) 설정
};

