document.getElementById('joke-part2').classList.add("hide");
document.getElementById('button2').classList.add("hide");
document.getElementById('joke-part3').classList.add("hide");

// 1. grabbing content from my HTMl document
// 2. grabbing the element by id using the .getElementById('id')
// 3. adding a classList and add is using the classList to add an attribute
// like .add which is allowing me to a show or hide style to the content

document.getElementById('button1').addEventListener("click", function () {
  document.getElementById('joke-part2').classList.add("show");
  document.getElementById('button2').classList.add("show");
});
document.getElementById('button2').addEventListener("click", function () {
  document.getElementById('joke-part3').classList.add("show");
  document.getElementById('button2').classList.add("show");
})
