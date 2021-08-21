/*----->> Handle Memory Events Start <<-----*/
document.getElementById('memory8GB').addEventListener('click', function () {
    // document.querySelector('memoryCost').innerHTML;
    extraCost('memory', 0);
    totalCost(0);
});
document.getElementById('memory16GB').addEventListener('click', function () {
    extraCost('memory', 180);
    totalCost(180);
});
/*----->> Handle Memory Events End <<-----*/

/*----->> Handle Storage Events Start <<-----*/
document.getElementById('storage256GB').addEventListener('click', function () {
    extraCost('storage', 0);
    totalCost(0);
});
document.getElementById('storage512GB').addEventListener('click', function () {
    extraCost('storage', 100);
    totalCost(100);
});
document.getElementById('storage1TB').addEventListener('click', function () {
    extraCost('storage', 180);
    totalCost(180);
});
/*----->> Handle Storage Events End <<-----*/

/*----->> Handle Delivery Events Start <<-----*/
document.getElementById('freeDelivery').addEventListener('click', function () {
    extraCost('delivery', 0);
    totalCost(0);
});
document.getElementById('urgentDelivery').addEventListener('click', function () {
    extraCost('delivery', 20);
    totalCost(20);
});
/*----->> Handle Delivery Events End <<-----*/

function extraCost (id, price) {
    const cost = document.getElementById(id+'Cost');
    const costAmount = parseInt(price);
    cost.innerText = costAmount;
}
function totalCost (price) {
    const totalCost = document.getElementById('totalCost');
    const totalCostText = totalCost.innerText;
    const totalCostNumeric = parseInt(totalCostText);
    const totalCostAmount = totalCostNumeric + price;
    totalCost.innerText = totalCostAmount;
}