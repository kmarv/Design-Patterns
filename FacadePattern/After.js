function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getFetch("https://jsonplaceholder.typicode.com/posts", {
    userId: userId,
  });
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(`${user.name} has ${posts.length} posts`);
    });
  });
});

function getFetch(url, params = {}) {
  const fetchParams = Object.entries(params)
    .map((param) => {
      return `${param[0]}=${param[1]}`;
    })
    .join("&");
  return fetch(`${url}?${fetchParams}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
}
