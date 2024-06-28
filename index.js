let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

let initialContent = saveEl.textContent;
// Hide the counter initially
// countEl.style.display = "none";

function increment() {
  count += 1;
  countEl.textContent = count;
  countEl.style.display = "block"; // Show the counter when incremented
  console.log(count);
}

function decrement() {
  if (count > 0) {
    // Prevent the count from going negative
    count -= 1;
    countEl.textContent = count;
    console.log(count);
  }
}

function save() {
  let countStr = "  " + count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
  // countEl.style.display = "none"; // Hide the counter after saving
}

function reset() {
  countEl.textContent = 0;
  count = 0;
  saveEl.textContent = initialContent; // Restore the initial content
  // countEl.style.display = "none"; // Hide the counter when reset
  // saveEl.textContent = ""; // Clear the previous entries
}
