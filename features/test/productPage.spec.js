import { test, expect } from '@playwright/test';
import HomePage from '../page/homePage.page';
import ProductPage from '../page/productPage.page';

const homePage = new HomePage();
const productPage = new ProductPage();
const product = 'Blouse';
const countProducts = ["2", "3", "4"]
let productsTarget;

test.beforeEach(async ({ browser }) => {
    global.context = await browser.newContext();
    global.page = await context.newPage();
    await homePage.navigateHomePage();
    productsTarget = await homePage.SearchProduct(product);
});


test('should open the product page', async ({ }) => {
    await homePage.clickProduct(productsTarget);
    await productPage.validateProductPage();

})

test('should add product to cart', async ({ }) => {
    await homePage.clickProduct(productsTarget);
    await productPage.validateProductPage();
    await productPage.selectProductColor('White');
    await productPage.selectProductSize('M');
    await productPage.addProductToCart();
    await productPage.validateProductAddedToCart();
})

for (let countProduct of countProducts) {
    test(`Add more than ${countProduct} of the same product to the cart `, async ({ }) => {
        await homePage.clickProduct(productsTarget);
        await productPage.validateProductPage();
        await productPage.selectProductColor('White');
        await productPage.selectProductSize('M');
        await productPage.setNumberOfProduct(countProduct)
        await productPage.addProductToCart();
        await productPage.validateProductAddedToCart();
    })
}

