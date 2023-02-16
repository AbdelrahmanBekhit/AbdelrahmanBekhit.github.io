const modeButton = document.getElementById("mode");

modeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeButton.textContent = document.body.classList.contains("dark-mode") ? "◑" : "◑";
});

const middle = document.querySelector('.middle');

const infoButton = document.getElementById("info");
infoButton.addEventListener("click", () => {
  middle.classList.toggle("show-info");
});


const table = document.createElement("table");
let activeCell = null;
let block4PrevValue = '';
for (let i = 0; i < 4; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    const cell = document.createElement("td");
    row.appendChild(cell);
  }
  table.appendChild(row);
}

const middleDiv = document.querySelector(".game");
middleDiv.appendChild(table);
activeCell = table.querySelector('td');
activeCell.classList.add('active');
let prevActiveCell = null;

let word = null;

async function getWord() {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({word: 'default', hint: 'default'});
    }, 5000);
  });
  
  const apiCall = fetch("https://api.masoudkf.com/v1/wordle", {
    headers: {
      "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
    },
  });

  const res = await Promise.race([apiCall, timeout]);
  const data = await res.json();
  const words = data.dictionary;
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}


async function startGame() {
  word = await getWord();
  console.log(word.word, word.hint);
}

const helpButton = document.getElementById("help");
const hintDiv = document.querySelector(".hint");
helpButton.addEventListener("click", () => {
  hintDiv.style.display = hintDiv.style.display === "block" ? "none" : "block";
  hintDiv.innerHTML = `Hint: ${word.hint}`;
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", async () => {
  resetButton.disabled = true;
  resetButton.textContent = "Loading...";
  document.querySelectorAll('td').forEach(td => {
    td.textContent = '';
    td.style.fontWeight = "normal";
    td.classList.remove('active');
    td.style.backgroundColor = 'transparent';
    td.style.color='black';
  });
  const wins = document.getElementById("win");
  wins.style.display = "none";
  const losses = document.querySelector(".loss");
  losses.style.display = "none";
  document.getElementById("table").style.display = "block";
  const hintDiv = document.querySelector(".hint");
  hintDiv.style.display = "none";
  activeCell = null;
  prevActiveCell = null;
  await startGame();
  activeCell = table.querySelector('td');
  activeCell.classList.add('active');
  resetButton.disabled = false;
  resetButton.textContent = "Start Over";
});

table.setAttribute("id", "table");
startGame();

document.addEventListener('keydown', (event) => {
  const losses = document.querySelector(".loss"); 
  if (losses.style.display === "block") {
    event.preventDefault();
    return;
  }
  if (!activeCell) {
    activeCell = table.querySelector('td');
  } else {
    const row = activeCell.parentNode;
    const col = Array.from(row.children).indexOf(activeCell);
    if (event.key.length === 1 && /^[a-zA-Z]+$/.test(event.key)) {
      activeCell.textContent = event.key.toUpperCase();
      activeCell.style.fontWeight = "bold";
      prevActiveCell = activeCell;
      if (col < 3) {
        activeCell = row.children[col + 1];
      }
    } else if (event.key === 'Backspace') {
      activeCell.textContent = '';
      activeCell.style.fontWeight = "normal";
      prevActiveCell = activeCell;
      if (col > 0) {
        activeCell = row.children[col - 1];
      }
    } else if (event.key === 'Enter') {
      if (col < 3 || !activeCell.textContent ){
        window.alert("You must complete the word first");
        return;
      }
      else if (col === 3) {
        prevActiveCell = activeCell;
        const nextRow = row.nextSibling;
        if (nextRow) {
          activeCell = nextRow.firstChild;
        }
      }
      colors();
    }
    const enteredWord = Array.from(row.children).map(cell => cell.textContent).join('');
    const correctWord = word.word.toUpperCase();
    if (enteredWord === correctWord) {
      const hintDiv = document.querySelector(".hint");
      hintDiv.innerHTML = `You guessed the word "${word.word}" correctly!`;
      document.getElementById("table").style.display = "none";
      document.getElementById("win").style.display = "block";
      return;
    }
    if (row.rowIndex == 3 && col == 3 && enteredWord !== correctWord){ 
      colors();
      const losses = document.querySelector(".loss"); 
      losses.style.display = losses.style.display === "block" ? "none" : "block";
      losses.innerHTML = `You missed the word "${word.word}" and lost!`;
    }

    prevActiveCell && prevActiveCell.classList.remove("active");
    activeCell && activeCell.classList.add("active");
  }
});

function colors() {
  const rows = table.querySelectorAll('tr');
    
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll('td');
    const enteredWord = Array.from(cells).map(cell => cell.textContent).join('');
    const correctWord = word.word.toUpperCase();
    for (let j = 0; j < cells.length; j++) {
      const cellValue = cells[j].textContent; 
      if (cellValue === '' || cellValue === null) { 
        cells[j].style.backgroundColor = ''; 
      } else if (enteredWord[j] === correctWord[j]) {  
        cells[j].style.backgroundColor = 'green';  
        cells[j].style.color = 'black';
      } else if (correctWord.includes(enteredWord[j])) {
        cells[j].style.backgroundColor = 'yellow'; 
        cells[j].style.color = 'black';
      } else {
        cells[j].style.backgroundColor = 'grey';
        cells[j].style.color = 'white';
      }
    }
  }
}

