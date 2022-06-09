// -Networking
//     -Function for each fetch request
//     -import to other components when needed

const URL = "https://dralexbraintrainer.sigmalabs.co.uk";

export async function getLogin(username, password) {
  const result = await fetch(
    `${URL}/login?username=${username}&password=${password}`
  );
  const json = await result.json();
  return json;
}

export async function registerUser(username, password) {
  const userDetails = { username: username, password: password };
  const result = await fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });
  const json = await result.json();
  return json;
}

export async function getLeaderboard(userID) {
  const result = await fetch(`${URL}/leaderboard${userID}`);
  const json = await result.json();
  return json;
}

export async function postToLeaderboard(username, score) {
  const scoreDetails = { username: username, score: score };
  const result = await fetch(`${URL}/leaderboard`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(scoreDetails),
  });
  const json = await result.json();
  return json;
}

export async function updateWinMessage(message) {
  const newMessage = { message: message };
  const result = await fetch(`${URL}/profile/win_message`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMessage),
  });
  const json = await result.json();
  return json;
}

export async function updateProfilePicture(pictureID) {
  const newPicture = { pictureID: pictureID };
  const result = await fetch(`${URL}/profile/picture`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPicture),
  });
  const json = await result.json();
  return json;
}

export async function getProfile() {
  const result = await fetch(`${URL}/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await result.json();
  return json;
}

export async function startSession(userID) {
  const user = { userID: userID };
  const result = await fetch(`${URL}/sessions`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const json = await result.json();
  await checkSessions();
  return json;
}

export async function endSession() {
  const result = await fetch(`${URL}/sessions`, {
    method: "DELETE",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  const json = await result.json();
  return json;
}

export async function checkSessions() {
  const result = await fetch(`${URL}/sessions`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await result.json();
  return json.response;
}
