//How to implement pagination for displaying large sets of data?
const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const itemsPerPage = 10;
let paginationData = [];

for (let i = 0; i < data.length; i += itemsPerPage) {
    const startIndex = i;
    const endIndex = Math.min(i + itemsPerPage, data.length); // Ensure endIndex doesn't exceed data length
    paginationData.push(data.slice(startIndex, endIndex));
}

console.log('paginationData', paginationData);


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let paginationData = [];
// const itemsPerPage = 10;
// const pageNumber = 1; // Assuming you start with page 1

// const startIndex = (pageNumber - 1) * itemsPerPage;
// paginationData = data.slice(startIndex, startIndex + itemsPerPage);

// console.log('paginationData', paginationData);