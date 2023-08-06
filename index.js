function ranInt(a, b) {
  return Math.round(Math.random() * (b-a) + a);
}

async function fetchcards(query="(game:paper)") {
  let url = new URL("https://api.scryfall.com/cards/random");
  // let url = new URL("https://api.scryfall.com/cards/search");
  url.searchParams.append("q", query);
  let response = await fetch(url.href);
  return await response.json();
}
async function rcard(id) {
  let filter = document.getElementById("filter").value;
  var cards = await fetchcards(filter);
  /*
  let total = cards["total_cards"];
  var cardNumber = ranInt(1, total);
  if (cardNumber > 175) {
    let page = Math.floor(cardNumber / 175)
    let url = new URL("https://api.scryfall.com/cards/search");
    url.searchParams.append("q", filter);
    url.searchParams.append("page", page + 1);
    let next = await fetch(url);
    let njson = await next.json();
    cardNumber -= 175 * page;
    cards = njson;
  }
  
  let card = cards["data"][cardNumber-1];
  */
  let card = cards["data"][0];
  let elm = document.getElementById(id);
  elm.setAttribute("src", card["image_uris"]["normal"]);
}
