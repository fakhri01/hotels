const scoreDB = [
  {
    id: 1,
    title: "Higher Winrates",
    icon: "group.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 2,
    title: "High Payouts",
    icon: "debit-card.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 3,
    title: "Payment Flexibility",
    icon: "exchange.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 4,
    title: "Games for all Levels",
    icon: "level.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 5,
    title: "Size and number of Jackpots",
    icon: "slot-machine.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 6,
    title: "Customer Feedback",
    icon: "feedback.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 7,
    title: "Certified and Regulated",
    icon: "combined-shape.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 8,
    title: "Financially Strong",
    icon: "life-insurance.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 9,
    title: "Loyalty Rewards",
    icon: "award.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 10,
    title: "Variety of Games",
    icon: "playing-cards.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 11,
    title: "Awards and Positive Reviews",
    icon: "winner.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 12,
    title: "Support Level",
    icon: "support.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 13,
    title: "Veteran Players Opinion",
    icon: "opinion.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 14,
    title: "Available for All Devices",
    icon: "responsive.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 15,
    title: "Plenty of Promotions for Players",
    icon: "megaphone.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
  {
    id: 16,
    title: "Multi OS Availability (PC, MAC)",
    icon: "gaming.svg",
    desc: "Baccarat is a casino card game that attracts high-rollers who love some kind of ostentation, well-developed betting system and playing ritual. High stakes are usually played in a separated lounge, which induces the feeling of privacy and safety.",
  },
];

let scoreItemContainer = document.getElementById("scoreContainer");
let gameItemInfo = document.getElementsByClassName("gameInfo");
let gamePopupItem = document.getElementById("popup");

for (const item of scoreDB) {
  scoreItemContainer.innerHTML += ` <div class="col-6 gameInfo  col-md-3">
    <div class="rectangle">
      <img src="./img/icons/score/${item.icon}" alt="${item.title}">
      <p>${item.title}</p>
    </div>
  </div> `;
}

function itemDesc(e) {
  for (const item of scoreDB) {
    if (e === item.title) {
      gamePopupItem.innerHTML += ` <div class="container test">
        <div class="row">
            <div class="popup-content col-md-12 col-12 col-lg-12">
                <div class="row">
                    <div class="left-pop col-md-3 col-12 col-lg-3">
                    <img src="./img/icons/score/${item.icon}" alt="${item.title}" />
                        <h3>${item.title}</h3>
                        <img class="closeIcon" src="./img/icons/close.svg" />
                        </div>
                        <div class="right-pop col-md-9 col-12 col-lg-9">
                        <img class="closeIcon" src="./img/icons/close.svg" />
                        <p>${item.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
  }
}

$(".gameInfo").click(function () {
  let contentTitle = $(this).find("p").text();
  itemDesc(contentTitle);
  $("#popup").css("display", "flex");
});

$(".closeIcon, #popup").click(function () {
  $("#popup").empty();
  $("#popup").css("display", "none");
});
