
// const h1 = document.querySelector(".hello h1");
// function handleTitleClick(){
  //const clickedClass = "clicked";
  //string을 변수에 저장해서 사용하는게 error방지

  // const currentColor = h1.style.color;
  // let newColor;
  // if(currentColor === "yellowgreen"){
  //   newColor = "tomato";
  // }else{
  //   newColor ="yellowgreen"
  // }
  // h1.style.color = newColor;


  // if(h1.classList.contains(clickedClass)){
  //   h1.classList.remove(clickedClass);
  // }else{
  //   h1.classList.add(clickedClass);
  // }

//   h1.classList.toggle("clicked");
// }
//toggle은 classlist에 clicked class가 이미 있는지 확인해서 만약있다면 toggle이 제거해주고 반대로 없으면 추가해줌.

//className 은 전체를 바꿔버림
//classList 는 내가쓰는 class의 목록으로 작업할수있도록 허용해준다.

// h1.addEventListener("click", handleTitleClick);


// EVENT 종류 
//function handleMouseEnter(){
//   h1.innerText = "Mouse is here!";
 // }
// function handleMouseLeave(){
//   h1.innerText = "Mouse is gone!";
// }
// function handleWindowResize(){
//   document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//   alert("copier!");
// }
// function handleWindowOffline(){
//   alert("SOS no WIFI");
// }
// function handleWindowOnline(){
//   alert("ALL GOOOOOOD!");
// }
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);


// const title = document.querySelector("#hello")
// const title = document.getElementById("hello")
// 같은방식
//console.log(title);


// const title = document.getElementById("something");
// title.innerText="Got you!";
// console.log(title.className);


// document.title = "Hello! From JS"
// ||(or)사용법
// true || true === true
// false || true === true
// true || false === true
// false || false === false

//&&(and) 사용법
// true && true === true
// false && true === false
// true && false === false
// false && false ===false


// const age = parseInt(prompt("How old are you?"));
// if(isNaN(age) || age <0){
//   console.log("Please write a real positive number");

// }else if(age < 18){
//   console.log("You are too young.");
// }else if(age >=18 && age <=50){
//   console.log("You can drink");
// }else if(age >50 && age<= 80){
//   console.log("You should exercise");
// }else if(age === 100){
// console.log("wow you are wise")
// }else if(age > 80){
//   console.log("You can do whatever you want");
// }

//return 사용법
// const age = 89;
// function calculateKrAge(ageOfForeigner){
//   return ageOfForeigner + 2;
// }
// //function안에서 return 할때 calculateKrAge(age);실행시키면 인수 age 의 값(89)가 ageofForeigner 값에 대체됨 그래서 return 89+2 로 값을 확인할수있음
// const krAge = calculateKrAge(age);

// console.log(krAge);



// 첫번째 계산기 만들기 숙제
  // const calculator= {
  //   add: function(a,b){
  //     console.log(a+b);
  //   },
  //   minus: function(a,b){
  //     console.log(a-b);
  //   },
  //   divide: function(a,b){
  //     console.log(a/b);
  //   },
  //   power:function(a,b){
  //     console.log(a**b);
  //   }
  // };
  // calculator.add(5, 8)
  // calculator.minus(10, 6)
  // calculator.divide(18, 2)
  // calculator.power(3, 7)