// Function to fetch users from the API
function fetchUsers() {
  return fetch('https://panorbit.in/api/users.json')
    .then(response => response.json())
    .then(data => {
      // Check if the API response is an object with a 'users' property
      if (data && Array.isArray(data.users)) {
        return data.users;
      } else {
        throw new Error('Invalid API response');
      }
    });
}

// Function to display the list of users
function displayUserList(users) {
  var userListElement = document.getElementById("userList");
  userListElement.innerHTML = "";

  var ul = document.createElement("ul");

  users.forEach(function(user) {
    var li = document.createElement("li");
    li.innerHTML = user.name;

    li.addEventListener("click", function() {
      redirectToProfilePage(user);
    });

    ul.appendChild(li);
  });

  userListElement.appendChild(ul);
}

// Function to redirect to the profile page with selected user details
function redirectToProfilePage(user) {
  localStorage.setItem("selectedUser", JSON.stringify(user));
  window.location.href = "profile.html";
}

// On page load, fetch users and display the user list
fetchUsers()
  .then(users => {
    displayUserList(users);
  })
  .catch(error => {
    console.log('Error:', error);
  });

