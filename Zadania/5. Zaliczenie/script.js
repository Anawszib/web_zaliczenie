$(function () {

    var nav = $('.nav');
    var itemsInCart = $('.itemsInCart');
    var addToCartBox = $('.addToCartBox');
    var clear = $('.clear');
    var buy = $('.buy');
    var itemsInCartNumber = 0;
    var totalCost = 0;

    nav.on('click', '.navBox', function () {
        window.location.href = "index.html";
    })

    addToCartBox.on('click', function () {
        if (itemsInCartNumber < 8) {
            itemsInCartNumber++;

            var price = $(this).prev().text();
            totalCost += parseFloat(price);
            var name = $($(this).prev()).prev().text();

            var newElement = $('<div class="inCartItem">' +
                '<div class="inCartNameDelete">' +
                '<div class="inCartName">' + name + '</div>' +
                '<div class="inCartDelete">' + 'Usuń' + '</div>' + '</div>' +
                '<div class="inCartPrice">' + price + '</div>' + '</div>');
            itemsInCart.append(newElement);

            updateTotalCost(totalCost);

        } else {
            window.alert('Twój koszyk jest już pełny')
        }

    })

    itemsInCart.on('click', '.inCartDelete', function () {

        var inCartNameDelete = $(this).parent();
        var price = $(inCartNameDelete).next().text();

        totalCost -= parseFloat(price);
        $(this).parents('.inCartItem').remove();
        updateTotalCost(totalCost);
        itemsInCartNumber--;
    })

    clear.on(('click'), function () {
        clearCart();
    })

    buy.on(('click'), function () {
        if (totalCost == 0) {
            window.alert('Koszyk jest pusty. Dodaj produkty.')
        } else {
            window.alert('Brawo! Właśnie kupiłeś produkty za: ' + totalCost);
            clearCart();
        }
    })

    function clearCart() {
        $('.inCartItem').remove();
        totalCost = 0;
        updateTotalCost(totalCost);
        itemsInCartNumber = 0;
    }

    function updateTotalCost(totalCost) {
        $('.cPrice').text('Cena koszyka: ' + Math.round(totalCost * Math.pow(10, 2)) / Math.pow(10, 2));
    }

})