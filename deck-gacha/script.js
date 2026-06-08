const classes = [
    "エルフ",
    "ロイヤル",
    "ウィッチ",
    "ドラゴン",
    "ナイトメア",
    "ビショップ",
    "ネメシス"
];

let currentClass = "";

document
    .getElementById("classGachaBtn")
    .addEventListener("click", classGacha);

    function applyClassStyle(className){

    const display =
        document.getElementById("selectedClass");

    display.className = "";
    document.body.className = "";

    switch(className){

        case "エルフ":
            display.classList.add("elf");
            document.body.classList.add("bg-elf");
            break;

        case "ロイヤル":
            display.classList.add("royal");
            document.body.classList.add("bg-royal");
            break;

        case "ウィッチ":
            display.classList.add("witch");
            document.body.classList.add("bg-witch");
            break;

        case "ドラゴン":
            display.classList.add("dragon");
            document.body.classList.add("bg-dragon");
            break;

        case "ナイトメア":
            display.classList.add("nightmare");
            document.body.classList.add("bg-nightmare");
            break;

        case "ビショップ":
            display.classList.add("bishop");
            document.body.classList.add("bg-bishop");
            break;

        case "ネメシス":
            display.classList.add("nemesis");
            document.body.classList.add("bg-nemesis");
            break;
    }
}
function classGacha() {

    const display = document.getElementById("selectedClass");

    const speeds = [
        80, 80, 80, 80,
        120, 120,
        180, 180,
        250,
        350,
        500,
        700
    ];

    let index = 0;

    function spin() {

        const randomClass =
            classes[Math.floor(
                Math.random() * classes.length
            )];

        display.textContent = randomClass;

        applyClassStyle(randomClass);

        if (index < speeds.length) {

            setTimeout(() => {
                index++;
                spin();
            }, speeds[index]);

        } else {

            currentClass =
                classes[Math.floor(
                    Math.random() * classes.length
                )];
                applyClassStyle(currentClass);
    document.body.className = "";
            display.className = "";

switch(currentClass){

    case "エルフ":
    display.classList.add("elf");
    document.body.classList.add("bg-elf");
    break;

        case "ロイヤル":
    display.classList.add("royal");
    document.body.classList.add("bg-royal");
    break;

   case "ウィッチ":
    display.classList.add("witch");
    document.body.classList.add("bg-witch");
    break;

    case "ドラゴン":
        display.classList.add("dragon");
        document.body.classList.add("bg-dragon");
        break;

    case "ナイトメア":
        display.classList.add("nightmare");
        document.body.classList.add("bg-nightmare");
        break;

    case "ビショップ":
        display.classList.add("bishop");
        document.body.classList.add("bg-bishop");
        break;

    case "ネメシス":
        display.classList.add("nemesis");
        document.body.classList.add("bg-nemesis");
        break;
}

display.textContent =
    `${currentClass}！！`;
        }
    }

    spin();
}
let cards = [];

fetch("cards.json")
    .then(response => response.json())
    .then(data => {
        cards = data;
    });

document
    .getElementById("generateBtn")
    .addEventListener("click", generateDeck);

function generateDeck(){

    const deckList =
        document.getElementById("deckList");

    deckList.innerHTML = "";

    let deck = [];
    let cardCounts = {};

    const classCards = cards.filter(card =>
    card.class === currentClass ||
    card.class === "ニュートラル"
);

    while(deck.length < 40){

       const randomCard =
    classCards[Math.floor(
        Math.random() * classCards.length
    )];

        const cardName = randomCard.name;

        if(!cardCounts[cardName]){
    cardCounts[cardName] = {
        count: 0,
        cost: randomCard.cost
    };
}

if(cardCounts[cardName].count < 3){

    deck.push(randomCard);

    cardCounts[cardName].count++;
}
    }

    const sortedCards = Object.entries(cardCounts)
    .sort((a, b) => a[1].cost - b[1].cost);

for(const [cardName, cardData] of sortedCards){

    const row = document.createElement("tr");

row.innerHTML = `
    <td>${cardName}</td>
    <td>${cardData.cost}</td>
    <td>×${cardData.count}</td>
`;

deckList.appendChild(row);
}
}