const quotes = [
  {
    quote: "인생은 자전거를 타는 것과 같다. 계속 페달을 밟는 한 넘어질 염려는 없다.",
    author: "클라우드 페퍼",
  },
  {
    quote: "긴 인생은 충분히 좋지 않을 수도 있다. 그러나 좋은 인생은 충분히 길다.",
    author: "벤자민 플랭클린",
  },
  {
    quote: "인생에서 원하는 것을 얻기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다",
    author: "벤 스타인",
  },
  {
    quote: "미래를 계획하는 일도 필요하지만 가장 중요한 것은 오늘을 후회없이 사는 겁니다.",
    author: "<비밀편지>박근호",
  },
  {
    quote: "꿈꿀 수 있다면, 이룰 수 있다. 내 모든 것이 꿈과 생쥐 한 마리로 시작했다는 것을 늘 기억하라. ",
    author: "wart disney",
  },
  {
    quote: "생명이 있는 한 희망이 있다. 실망을 친구로 삼을 것인가,아니면 희망을 친구로 삼을 것인가.",
    author: "J.위트",
  },
  {
    quote: "웃음은 유행을 타지 않고, 상상력은 나이를 따지지않고, 꿈은 영원하다.",
    author: "walt disney",
  },
  {
    quote: "과거는 아픈거지. 하지만 넌 그 과거로부터 도망칠 수도 있고, 무언가를 배울 수 도 있어",
    author: "Lion King",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;