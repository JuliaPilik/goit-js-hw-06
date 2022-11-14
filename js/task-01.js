const amountCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${amountCategories.length}`);
amountCategories.forEach(function (amountCategory, index) {
    console.log(`Category: ${amountCategory.firstElementChild.textContent}`);
    console.log(`Elements: ${amountCategory.lastElementChild.children.length}`);
});
