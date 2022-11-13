const amountCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${amountCategories.length}`);

amountCategories.forEach(function (amountCategory, index) {
    console.log(`Category: ${amountCategory.querySelector('h2').textContent}`);
    console.log(`Elements: ${amountCategory.querySelectorAll('li').length}`);
});
//console.log('sdcsdc');