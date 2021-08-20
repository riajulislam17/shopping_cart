/*----->> Handle Memory Events Start <<-----*/
document.getElementById('memory8GB').addEventListener('click', function () {
    const totalAmount = totalCost(0);
    extraCost('memory', 0);
});
document.getElementById('memory16GB').addEventListener('click', function () {
    var button = document. getElementById("memory8GB"),
    count = 0;
    button. onclick = function() {
    count += 1;
    };
    const totalAmount = totalCost(180, count);
    extraCost('memory', 180);
});
/*----->> Handle Memory Events End <<-----*/

/*----->> Handle Storage Events Start <<-----*/
document.getElementById('storage256GB').addEventListener('click', function () {
    totalCost(0);
    extraCost('storage', 0);
});
document.getElementById('storage512GB').addEventListener('click', function () {
    totalCost(100);
    extraCost('storage', 100);
});
document.getElementById('storage1TB').addEventListener('click', function () {
    totalCost(180);
    extraCost('storage', 180);
});
/*----->> Handle Storage Events End <<-----*/

/*----->> Handle Delivery Events Start <<-----*/
document.getElementById('freeDelivery').addEventListener('click', function () {
    extraCost('delivery', 0);
    totalCost(0);
});
document.getElementById('urgentDelivery').addEventListener('click', function () {
    totalCost(20);
    extraCost('delivery', 20);
});
/*----->> Handle Delivery Events End <<-----*/



function totalCost (price) {
    const totalCost = document.getElementById('totalCost');
    const totalCostText = totalCost.innerText;
    const totalCostNumeric = parseInt(totalCostText);
    const totalCostAmount = totalCostNumeric + price;
    totalCost.innerText = totalCostAmount;

    /*----->> Handle Promo Code Events Start <<-----*/
    document.getElementById('promoApply').addEventListener('click', function () {
        const promo = document.getElementById('promoCode');
        const promoInput = promo.value;
        const promoCode = promoInput.toLowerCase();
        if (promoCode == 'stevekaku') {
            const totalPrice = document.getElementById('totalPrice');
            const totalPriceText = totalPrice.innerText;
            const totalPriceAmount = parseInt(totalPriceText);
            const totalPriceAmount = totalCostAmount - (20/100);
            totalPrice.innerText = totalPriceAmount;
            promo.value = '';
        }
    });
    /*----->> Handle Promo Code Events End <<-----*/
}

function extraCost (id, price) {
    const cost = document.getElementById(id+'Cost');
    const costAmount = parseInt(price);
    cost.innerText = costAmount;
}