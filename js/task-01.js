const amountCategories = document.querySelectorAll('li.item');
amountCategories.forEach(function (amountCategory, index) {
    console.log(`Category: ${amountCategory.firstElementChild.textContent}`);
    console.log(`Elements: ${amountCategory.lastElementChild.children.length}`);
});