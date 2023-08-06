function ranInt(a, b) {
  return Math.round(Math.random() * (b-a) + a);
}

async function fetchcards(query="") {
  let url = new URL("https://api.scryfall.com/cards/search");
  url.searchParams.append("q", query);
  let response = await fetch(url.href);
  return await response.json();
}
async function rcard(id) {
  var cards = await fetchcards();
  let total = cards["total_cards"];
  var cardNumber = ranInt(1, total);
  while (cardNumber > 175) {
    let next = await fetch(cards["next_page"]);
    let njson = await next.json();
    cardNumber -= 175;
    cards = njson;
  }
  let card = cards["data"][cardNumber-1];
  let elm = document.getElementById(id);
  elm.setAttribute("src", card["image_uris"]["normal"]);
}
