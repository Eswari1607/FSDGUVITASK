const APIURL = 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json';

let currentPage = 1;
const itemsPerPage = 6 ;
let data = [];

async function fetchData() {
try {
  const response = await fetch(APIURL);
  data = await response.json();
  renderData();
  renderPaginationButtons();
    } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function renderData() {
const dataContainer = document.getElementById('data-container');
dataContainer.innerHTML = '';

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const itemsToShow = data.slice(startIndex, endIndex);

itemsToShow.forEach(item => {
const itemElement = document.createElement('div');
itemElement.classList.add('data-item');
itemElement.innerHTML = `<h2>${item.name}</h2>
          <h5>${item.email}</h5>
          <p>ID: ${item.id}</p>`;

        dataContainer.appendChild(itemElement);
      });
    }

function renderPaginationButtons() {
const paginationContainer = document.getElementById('pagination-buttons');
paginationContainer.innerHTML = '';

const totalPages = Math.ceil(data.length / itemsPerPage);
const prevButton = document.createElement('button');
      prevButton.textContent = 'Previous';
      prevButton.classList.add('page-button');
      prevButton.disabled = currentPage === 1;
      prevButton.onclick = () => {
        currentPage--;
        renderData();
        renderPaginationButtons();
      };
      paginationContainer.appendChild(prevButton);

for (let x= 1; x <= totalPages; x++) {
const pageButton = document.createElement('button');
pageButton.textContent = x;
pageButton.classList.add('page-button');
    if (x === currentPage) pageButton.classList.add('active');
    pageButton.onclick = () => {
    currentPage = x;
    renderData();
    renderPaginationButtons();
    };
    paginationContainer.appendChild(pageButton);
}

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.classList.add('page-button');
nextButton.disabled = currentPage === totalPages;
nextButton.onclick = () => {
currentPage++;
renderData();
renderPaginationButtons();
    };
paginationContainer.appendChild(nextButton);
    }
    fetchData();