function createGame(player1, hour, player2) {
  return `
        <li>
            <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}" />
            <strong>${hour}</strong>
            <img src="./assets/${player2}.svg" alt="Bandeira do ${player2}" />
        </li>
    `;
}
let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
               ${games} 
            </ul>
        </div>
    `;
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("Catar", "13:00", "Equador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("Inglaterra", "10:00", "Ira") +
      createGame("Senegal", "13:00", "Holanda") +
      createGame("Estados_Unidos", "16:00", "Pais_de_Gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("Argentina", "07:00", "Arabia_Saudita") +
      createGame("Dinamarca", "10:00", "Tunisia") +
      createGame("Mexico", "13:00", "Polonia") +
      createGame("Franca", "16:00", "Australia")
  );
