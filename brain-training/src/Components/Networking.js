// -Networking
//     -Function for each fetch request
//     -import to other components when needed

const URL = " asymmetrical-panda-clari8ly65npjsif4rfnhvg1.herokudns.com";

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

export async function postToLeaderboard(username, userID, score) {
  const scoreDetails = { username: username, userID: userID, score: score };
  const result = await fetch(`${URL}/leaderboard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(scoreDetails),
  });
  const json = await result.json();
  return json;
}

export async function updateWinMessage(userID, message) {
  const newMessage = { userID: userID, message: message };
  const result = await fetch(`${URL}/profile/win_message`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMessage),
  });
  const json = await result.json();
  return json;
}

export async function updateProfilePicture(userID, pictureID) {
  const newPicture = { userID: userID, pictureID: pictureID };
  const result = await fetch(`${URL}/profile/picture`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPicture),
  });
  const json = await result.json();
  return json;
}

export async function getProfile(userID) {
  const result = await fetch(`${URL}/profile?id=${userID}`);
  const json = await result.json();
  return json;
}

export async function startSession(userID) {
  const user = { userID: userID };
  const result = await fetch(`${URL}/sessions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const json = await result.json();
  return json;
}

export async function endSession(userID) {
  const user = { userID: userID };
  const result = await fetch(`${URL}/sessions`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const json = await result.json();
  return json;
}
