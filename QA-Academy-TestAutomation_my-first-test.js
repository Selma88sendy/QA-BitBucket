describe('SHOPPING CART', function() {

    it('Verify that product can be added to shopping cart', function() {

        browser.ignoreSynchronization =true;
        browser.driver.manage().window().maximize();

        const searchBox = $('#small-searchterms');
        const searchBoxButton = $('.button-1');
        const addToCartButtonProduct2 = $('.button-2');
        const addToCartButton25 = $('#add-to-cart-button-25');
        const shoppingCartQuantity = $('.cart-qty');

        browser.get('https://demo.nopcommerce.com');
        searchBox.sendKeys('adidas');
        searchBoxButton.click();
        browser.sleep(5000);
        addToCartButtonProduct2.click();
        browser.sleep(5000);
        addToCartButton25.click();
        browser.sleep(5000);

        expect(shoppingCartQuantity.getText()).toContain('(1)');
    });

    it('Verify that shopping cart can be open through link on notification success bar', function() {

        browser.ignoreSynchronization =true;
        browser.driver.manage().window().maximize();

        const searchBox = $('#small-searchterms');
        const searchBoxButton = $('.button-1.search-box-button');
        const addToCartButtonProduct2 = $('.button-2');
        const addToCartButton25 = $('#add-to-cart-button-25');
        const notificationBarLink = $('.bar-notification.success > .content > a');
        const shoppingCartPageTitle = $('.page-title');

        browser.get('https://demo.nopcommerce.com');
        searchBox.sendKeys('adidas');
        searchBoxButton.click();
        browser.sleep(3000);
        addToCartButtonProduct2.click();
        browser.sleep(3000);
        addToCartButton25.click();
        browser.sleep(3000);
        notificationBarLink.click();
        browser.sleep(2000);

        expect(shoppingCartPageTitle.getText()).toContain('Shopping cart');
    });

    it('Verify that shopping cart can be open through link on upper right header', function() {

        browser.ignoreSynchronization =true;
        browser.driver.manage().window().maximize();

        const searchBox = $('#small-searchterms');
        const searchBoxButton = $('.button-1.search-box-button');
        const addToCartButtonProduct2 = $('.button-2');
        const addToCartButton25 = $('#add-to-cart-button-25');
        const shoppingCartButton = $('#topcartlink > .ico-cart');
        const shoppingCartPageTitle = $('.page-title');

        browser.get('https://demo.nopcommerce.com');
        searchBox.sendKeys('adidas');
        searchBoxButton.click();
        browser.sleep(3000);
        addToCartButtonProduct2.click();
        browser.sleep(3000);
        addToCartButton25.click();
        browser.sleep(6000);
        shoppingCartButton.click();
        browser.sleep(2000);

        expect(shoppingCartPageTitle.getText()).toContain('Shopping cart');
    });

    it('Verify that adding multiple same products to Shopping Cart results in correct item count and total amount', function() {

        browser.ignoreSynchronization =true;
        browser.driver.manage().window().maximize();

        const searchBox = $('#small-searchterms');
        const searchBoxButton = $('.button-1.search-box-button');
        const addToCartButtonProduct2 = $('.button-2');
        const addToCartButton25 = $('#add-to-cart-button-25');
        const addToCartQuantityBox = $('#addtocart_25_EnteredQuantity');
        const shoppingCartButton = $('#topcartlink > .ico-cart');
        const itemQuantitySum = $('.quantity > .qty-input');
        const productUnitPrice = $('.product-unit-price');
        const totalPrice = $('.product-subtotal');

        browser.get('https://demo.nopcommerce.com');
        browser.sleep(2000);
        searchBox.sendKeys('adidas');
        searchBoxButton.click();
        browser.sleep(2000);
        addToCartButtonProduct2.click();
        browser.sleep(3000);
        addToCartQuantityBox.clear().then(() => {addToCartQuantityBox.sendKeys(2)});
        addToCartButton25.click();
        browser.sleep(5500);
        shoppingCartButton.click();
        browser.sleep(2000);

        expect(itemQuantitySum.getAttribute('value')).toContain('2');

        const itemQtyNumber = + itemQuantitySum.getAttribute('value');
        const priceNumber = + productUnitPrice.getText();
        const totalPriceNumber = + totalPrice.getText();

        expect(totalPriceNumber).toEqual(priceNumber*itemQtyNumber);
    });
});