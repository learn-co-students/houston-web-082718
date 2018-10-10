document.addEventListener("DOMContentLoaded", event => {
  // h2 = document.querySelector("h2");
  // h2.addEventListener("click", function(event) {
  // console.log(event.target.innerText);
  // event.target.innerText = "I got changed!!";
  // document.body.style.background = "magenta";
  // });
  // input = document.querySelector("input");
  // input.addEventListener("input", function(event) {
  //   console.log("INPUUTTEDDED!!!", event);
  //   // console.log(event.target.value);
  // });
  // ul = document.querySelector("ul");
  // ul.addEventListener("click", function(event) {
  //   console.log(
  //     event.currentTarget.children[1].parentNode.parentNode.parentNode
  //       .parentNode.parentNode.parentNode
  //   );
  //   const elementIWannaChange = event.currentTarget.children[1];
  //   elementIWannaChange.innerText = "We believe Graham. He is trustworthy.";
  // });
  // const form = document.querySelector("#my-form");
  // form.addEventListener("submit", function(event) {
  //   event.preventDefault();
  //   const newText = event.target.newText.value;
  //   const h2 = document.querySelector("h2");
  //   h2.innerText = newText;
  // });
  // EVENT DELEGATION
  // BAD
  // let lis = document.querySelectorAll("li");
  // lis.forEach(liElement => {
  //   liElement.addEventListener("click", event => {
  //     alert("I got clicketedied");
  //   });
  // });
  // const ul = document.querySelector("ul");
  // ul.innerHTML = "<li>A NEW LI</li>";
  // lis = document.querySelectorAll("li");
  // lis.forEach(liElement => {
  //   liElement.addEventListener("click", event => {
  //     alert("I got clicketedied");
  //   });
  // });
  // GOOD
  // document.body.addEventListener("click", event => {
  //   if (event.target.classList.contains("list-item")) {
  //     alert("Got clickeidisedied");
  //   }
  // });

  // const ul = document.querySelector("ul");
  // ul.innerHTML = '<li class="list-item">A NEW LI</li>';
  // BUBBLING
  // const ul = document.querySelector("ul");
  // let lis = document.querySelectorAll("li");

  // ul.addEventListener("click", event => {
  //   console.log("UL CLICKED");
  // });

  // lis.forEach(liElement => {
  //   liElement.addEventListener("click", event => {
  //     event.stopPropagation();

  //     console.log("LI CLICKERD");
  //   });
  // });

  // DATA-ID
  let lis = document.querySelectorAll("li");

  lis.forEach(liElement => {
    liElement.addEventListener("click", event => {
      console.log(event.target.dataset.id, event.target.dataset.animal);
    });
  });
});
