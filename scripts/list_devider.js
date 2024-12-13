window.onload = function() {
    updateListColumns();
};

function updateListColumns() {
    const listContainer = document.querySelector('.portfolio_works_list');
    const listItems = document.querySelectorAll('#dynamic-list li');
    const numOfItems = listItems.length;

    if (numOfItems <= 10) {
        listContainer.className = 'list-container one-column';
    } else if (numOfItems <= 20) {
        listContainer.className = 'list-container two-columns';
    } else if (numOfItems <= 30) {
        listContainer.className = 'list-container three-columns';
    } else if (numOfItems <= 40) {
        listContainer.className = 'list-container four-columns';
    } else if (numOfItems <= 50) {
        listContainer.className = 'list-container five-columns';
    } else {
        listContainer.className = 'list-container six-columns';
    }
}



//function updateListColumns() {
//    const listContainer = document.querySelector('.portfolio_works_list');
//    const listItems = document.querySelectorAll('portfolio_works_list li');
//    const numOfItems = listItems.length;
//
//    if (numOfItems <= 10) {
//        listContainer.addClass = 'list-container one-column';
//    } else if (numOfItems <= 20) {
//        listContainer.addClass = 'list-container two-columns';
//    } else if (numOfItems <= 30) {
//        listContainer.addClass = 'list-container three-columns';
//    } else if (numOfItems <= 40) {
//        listContainer.addClass = 'list-container four-columns';
//    } else if (numOfItems <= 50) {
//        listContainer.addClass = 'list-container five-columns';
//    } else {
//        listContainer.addClass = 'list-container six-columns';
//    }
//}