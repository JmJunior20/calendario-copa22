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
  createCard("20/11", "domingo", createGame("Catar", "0 X 2", "Equador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("Inglaterra", "6 X 2", "Ira") +
      createGame("Senegal", "0 X 2", "Holanda") +
      createGame("Estados_Unidos", "1 X 1", "Pais_de_Gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("Argentina", "1 X 2", "Arabia_Saudita") +
      createGame("Dinamarca", "0 X 0", "Tunisia") +
      createGame("Mexico", "0 X 0", "Polonia") +
      createGame("Franca", "4 X 1", "Australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("Marrocos", "0 X 0", "Croacia") +
      createGame("Alemanha", "1 X 2", "Japao") +
      createGame("Espanha", "7 X 0", "Costa_Rica") +
      createGame("Belgica", "1 X 0", "Canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("Suica", "1 X 0", "Camaroes") +
      createGame("Uruguai", "0 X 0", "Coreia_do_Sul") +
      createGame("Portugal", "3 X 2", "Gana") +
      createGame("Brasil", "2 X 0", "Servia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("Pais_de_Gales", "0 X 2", "Ira") +
      createGame("Catar", "1 X 3", "Senegal") +
      createGame("Holanda", "1 X 1", "Equador") +
      createGame("Inglaterra", "0 X 0", "Estados_Unidos")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("Tunisia", "0 X 1", "Australia") +
      createGame("Polonia", "2 X 0", "Arabia_Saudita") +
      createGame("Franca", "2 X 1", "Dinamarca") +
      createGame("Argentina", "2 X 0", "Mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("Japao", "0 X 1", "Costa_Rica") +
      createGame("Belgica", "0 x 2", "Marrocos") +
      createGame("Croacia", "4 x 1", "Canada") +
      createGame("Espanha", "1 x 1", "Alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("Camaroes", "3 X 3", "Servia") +
      createGame("Coreia_do_Sul", "2 X 3", "Gana") +
      createGame("Brasil", "1 X 0", "Suica") +
      createGame("Portugal", "2 X 0", "Uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("Holanda", "2 X 0", "Catar") +
      createGame("Equador", "1 X 2", "Senegal") +
      createGame("Ira", "0 X 1", "Estados_Unidos") +
      createGame("Pais_de_Gales", "0 X 3", "Inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("Tunisia", "1 X 0", "Franca") +
      createGame("Australia", "1 X 0", "Dinamarca") +
      createGame("Polonia", "0 X 2", "Argentina") +
      createGame("Arabia_Saudita", "1 X 2", "Mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("Croacia", "0 X 0", "Belgica") +
      createGame("Canada", "1 X 2", "Marrocos") +
      createGame("Japao", "2 X 1", "Espanha") +
      createGame("Costa_Rica", "2 X 4", "Alemanha")
  ) +
  createCard(
    "02/11",
    "sexta",
    createGame("Coreia_do_Sul", "2 X 1", "Portugal") +
      createGame("Gana", "0 X 2", "Uruguai") +
      createGame("Camaroes", "1 X 0", "Brasil") +
      createGame("Servia", "2 X 3", "Suica")
  ) +
  createCard(
    "03/11",
    "sábado",
    createGame("Holanda", "3 X 1", "Estados_Unidos") +
      createGame("Argentina", "2 X 1", "Australia")
  );
