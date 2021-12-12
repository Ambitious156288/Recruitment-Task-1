const button = document.querySelector(".button");
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

createHeadings = () => {
  const tableHeadingsTitles = ["Even", "Odd"];
  const tableHeadings = document.createElement("tr");

  const completedTableHeadings = tableHeadingsTitles.reduce((acc, el) => {
    const headingTags = document.createElement("th");
    headingTags.innerHTML = el;
    acc.append(headingTags);
    return acc;
  }, tableHeadings);

  tableContent.append(completedTableHeadings);

  // if headings exists, don't create it again
};

createRows = () => {};

const createDynamicTable = () => {
  segregateNumbersToArrays();

  console.log(randomNumbers);
  console.log(evenNumbers);
  console.log(oddNumbers);

  createHeadings();
  createRows();
};

button.addEventListener("click", createDynamicTable);
