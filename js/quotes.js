const quotes = [
  {
    quote:
      "행복은 우리가 원하는 것을 얻는 것이 아니라, 우리가 가진 것을 사랑하는 것이다.",
    author: "허먼 헤세",
  },
  {
    quote: "가장 어두운 밤이 가장 빛나는 별을 만든다.",
    author: "빅토르 위고",
  },
  {
    quote: "인생은 10%의 사건과 90%의 반응으로 이루어진다.",
    author: "찰스 R. 스윈돌",
  },
  {
    quote: "어제는 역사이고, 내일은 미스터리이며, 오늘은 선물이다.",
    author: "빌 키언스",
  },
  {
    quote: "실패는 성공으로 가는 디딤돌이다.",
    author: "윈스턴 처칠",
  },
  {
    quote: "남들이 보는 모습보다 당신이 스스로를 어떻게 보느냐가 더 중요하다.",
    author: "공자",
  },
  {
    quote: "미래는 준비하는 사람의 것이다.",
    author: "말콤 X",
  },
  {
    quote: "변화는 고통스럽지만, 변하지 않는 것은 더 고통스럽다.",
    author: "맨디 헤일",
  },
  {
    quote: "행동이 말보다 더 크게 말한다.",
    author: "에이브러햄 링컨",
  },
  {
    quote: "바람이 불지 않을 때는 노를 저어야 한다.",
    author: "라틴 속담",
  },
  {
    quote: "위대한 일은 결코 편안한 구역에서 이루어지지 않는다.",
    author: "로이 T. 베넷",
  },
  {
    quote: "너 자신이 되어라. 다른 사람의 자리는 이미 차 있다.",
    author: "오스카 와일드",
  },
  {
    quote: "시간은 금이다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "모든 위대한 여행은 작은 한 걸음으로 시작된다.",
    author: "노자",
  },
  {
    quote: "진정한 용기는 두려움이 없는 것이 아니라, 두려움을 이기는 것이다.",
    author: "넬슨 만델라",
  },
  {
    quote: "결단이 없다면 진정한 리더십도 없다.",
    author: "엘론 머스크",
  },
  {
    quote: "실패는 옵션이다. 실패하지 않는다면, 충분히 혁신하지 않는 것이다.",
    author: "엘론 머스크",
  },
  {
    quote: "혁신은 작은 아이디어들의 축적에서 시작된다.",
    author: "제프 베조스",
  },
  {
    quote: "경험이 많은 사람을 고용하되, 열정이 없는 사람은 고용하지 마라.",
    author: "마크 저커버그",
  },
  {
    quote: "언제나 소비자의 기대를 넘어서는 것을 목표로 하라.",
    author: "하워드 슐츠",
  },
  {
    quote: "당신의 한계는 당신의 마음이 정한다.",
    author: "부처",
  },
  {
    quote: "꿈을 이루고자 하는 의지만 있다면 모든 것이 가능하다.",
    author: "월트 디즈니",
  },
  {
    quote: "나는 생각한다 고로 나는 존재한다.",
    author: "르네 데카르트",
  },
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "산을 움직이려 하는 이는 작은 돌을 들어내는 일부터 시작한다.",
    author: "중국 속담",
  },
  {
    quote: "천리길도 한 걸음부터.",
    author: "노자",
  },
  {
    quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "벤자민 프랭클린",
  },
  {
    quote:
      "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 계속 움직여야 한다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "당신이 포기할 때, 그때가 바로 게임이 끝나는 때다.",
    author: "스튜어트 피어스",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author: "톰 모나건",
  },
  {
    quote: "마지막 웃는 자가 가장 오래 웃는다.",
    author: "프랑스 속담",
  },
  {
    quote:
      "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.",
    author: "공자",
  },
  {
    quote: "당신의 미래는 당신이 오늘 무엇을 하느냐에 달려 있다.",
    author: "마하트마 간디",
  },
  {
    quote: "모든 성취의 시작점은 갈망이다.",
    author: "나폴레온 힐",
  },
  {
    quote: "불가능한 것을 시도하는 것이 가능한 것을 이루는 지름길이다.",
    author: "장 자크 루소",
  },
  {
    quote: "당신이 세상에서 보고 싶은 변화가 되어라.",
    author: "마하트마 간디",
  },
  {
    quote: "인생은 우리가 꿈꾸는 대로 살아갈 만큼 충분히 길다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "지식이 없는 성실은 무기력하고, 성실이 없는 지식은 위험하다.",
    author: "사무엘 존슨",
  },
  {
    quote: "작은 기회로부터 종종 위대한 업적이 시작된다.",
    author: "데모스테네스",
  },
  {
    quote:
      "우리는 우리가 반복적으로 하는 것이 된다. 따라서 탁월함은 행동이 아닌 습관이다.",
    author: "아리스토텔레스",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

function selectQuote() {
  const randomIndexNumber = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[randomIndexNumber].quote;
  author.innerText = quotes[randomIndexNumber].author;
}

selectQuote();
