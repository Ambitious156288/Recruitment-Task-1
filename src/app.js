const button = document.querySelector(".btn");
const tableContent = document.getElementById("dynamic-table");

const randomNumbers = [];
const evenNumbers = [];
const oddNumbers = [];

const generateRandomNumbers = () => {
  for (let i = 1; i <= 20; i++) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    randomNumbers.push(randomNumber);

    randomNumber % 2 === 0
      ? oddNumbers.push(randomNumber)
      : evenNumbers.push(randomNumber);
  }
};

const sortArrayAscending = (a, b) => a - b;

const segregateNumbersToArrays = () => {
  generateRandomNumbers();
  evenNumbers.sort(sortArrayAscending);
  oddNumbers.sort(sortArrayAscending);
};

const createHeadings = () => {
  const tableHeadingsTitles = ["Even", "Odd"];
  const tableHeadings = document.createElement("tr");

  const completedTableHeadings = tableHeadingsTitles.reduce((acc, el) => {
    const headingTags = document.createElement("th");
    headingTags.innerHTML = el;
    acc.append(headingTags);
    return acc;
  }, tableHeadings);

  tableContent.append(completedTableHeadings);
};

const createRows = () => {
  const greaterValue = Math.max(evenNumbers.length, oddNumbers.length);

  for (let i = 0; i < greaterValue; i++) {
    const tableRows = document.createElement("tr");
    const row1 = document.createElement("td");
    const row2 = document.createElement("td");

    row1.innerHTML = oddNumbers[i] ? oddNumbers[i] : "-";
    row2.innerHTML = evenNumbers[i] ? evenNumbers[i] : "-";

    tableRows.append(row1, row2);
    tableContent.append(tableRows);
  }
};

const reset = () => {
  randomNumbers.length = 0;
  evenNumbers.length = 0;
  oddNumbers.length = 0;
  tableContent.innerHTML = "";
};

const init = () => {
  if (tableContent !== null) reset();
  segregateNumbersToArrays();
  createHeadings();
  createRows();
};

button.addEventListener("click", init);
