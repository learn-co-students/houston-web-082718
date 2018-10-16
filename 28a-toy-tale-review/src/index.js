const addBtn = document.querySelector("#new-toy-btn");
const toyForm = document.querySelector(".container");
let addToy = false;

// YOUR CODE HERE

addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyForm.style.display = "block";
    // submit listener here

    // 1. Grab form
    const addToyForm = document.querySelector(".add-toy-form");

    // 2. Add listener to form
    addToyForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const data = {
        name: event.target.name.value,
        image: event.target.image.value,
        likes: 0
      };

      // 3. Make POST request
      fetch("http://localhost:3000/toys", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }).then(function() {
        // 4. Render Jessie to the page

        fetch("http://localhost:3000/toys")
          .then(response => response.json())
          .then(response => {
            const toys = response;

            // Display all the toys

            // 1. Get the toy-collection div
            const toyCollectionDiv = document.getElementById("toy-collection");

            toyCollectionDiv.innerHTML = "";

            // 2. Add html for each toy
            toys.forEach(function(toy) {
              toyCollectionDiv.innerHTML += `
                <div class="card">
                  <h2>${toy.name}</h2>
                  <img src="${toy.image}" class="toy-avatar">
                  <p>${toy.likes} Likes <p>
                  <button class="like-btn">Like <3</button>
                </div>
                `;
            });
          });
      });
    });
  } else {
    toyForm.style.display = "none";
  }
});

// OR HERE!

// 1. Make it work (shamelessly)
// 2. Make it better

document.addEventListener("DOMContentLoaded", function() {
  // Fetch Andy's toys
  fetch("http://localhost:3000/toys")
    .then(response => response.json())
    .then(response => {
      const toys = response;

      // Display all the toys

      // 1. Get the toy-collection div
      const toyCollectionDiv = document.getElementById("toy-collection");

      // 2. Add html for each toy
      toys.forEach(function(toy) {
        toyCollectionDiv.innerHTML += `
        <div class="card">
          <h2>${toy.name}</h2>
          <img src="${toy.image}" class="toy-avatar">
          <p>${toy.likes} Likes <p>
          <button class="like-btn" data-id="${toy.id}">Like <3</button>
        </div>
        `;
      });

      // NOT BEST IDEA
      // const likeButtons = document.getElementsByClassName("like-btn");

      // Array.from(likeButtons).forEach(function(likeButton) {
      //   likeButton.addEventListener("click", function(event) {
      //     console.log(event);
      //   });
      // });
    });

  // Add global event listener (event delegation)
  document.addEventListener("click", function(event) {
    // Only to respond to clicks of the like-btn
    if (event.target.className === "like-btn") {
      // 1. Grab like count element
      const likeCountElement = event.target.parentNode.parentNode.children[2];
      // const likeCountElement = event.target.parentNode.previousElementSibling;

      // 2. Get the number from the element
      const likeCount = parseInt(likeCountElement.innerText);
      const newLikeCount = likeCount + 1;

      // 3. Increment the like count
      likeCountElement.innerText = `${newLikeCount} likes`;

      // 4. Make PATCH request
      const id = event.target.dataset.id;

      fetch(`http://localhost:3000/toys/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          likes: newLikeCount
        })
      });
    }
  });
});
