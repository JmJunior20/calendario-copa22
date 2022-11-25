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
    createGame("Pais_de_Gales", "07:00", "Ira") +
      createGame("Catar", "10:00", "Senegal") +
      createGame("Holanda", "13:00", "Equador") +
      createGame("Inglaterra", "16:00", "Estados_Unidos")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("Tunisia", "07:00", "Australia") +
      createGame("Polonia", "10:00", "Arabia_Saudita") +
      createGame("Franca", "13:00", "Dinamarca") +
      createGame("Argentina", "16:00", "Mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("Japao", "07:00", "Costa_Rica") +
      createGame("Belgica", "10:00", "Marrocos") +
      createGame("Croacia", "13:00", "Canada") +
      createGame("Espanha", "16:00", "Alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("Camaroes", "07:00", "Servia") +
      createGame("Coreia_do_Sul", "10:00", "Gana") +
      createGame("Brasil", "13:00", "Suica") +
      createGame("Portugal", "16:00", "Uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("Holanda", "12:00", "Catar") +
      createGame("Equador", "12:00", "Senegal") +
      createGame("Ira", "16:00", "Estados_Unidos") +
      createGame("Pais_de_Gales", "16:00", "Inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("Tunisia", "12:00", "Franca") +
      createGame("Australia", "12:00", "Dinamarca") +
      createGame("Polonia", "16:00", "Argentina") +
      createGame("Arabia_Saudita", "16:00", "Mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("Croacia", "12:00", "Belgica") +
      createGame("Canada", "12:00", "Marrocos") +
      createGame("Japao", "16:00", "Espanha") +
      createGame("Costa_Rica", "16:00", "Alemanha")
  ) +
  createCard(
    "02/11",
    "sexta",
    createGame("Coreia_do_Sul", "12:00", "Portugal") +
      createGame("Gana", "12:00", "Uruguai") +
      createGame("Camaroes", "16:00", "Brasil") +
      createGame("Servia", "16:00", "Suica")
  );
