import { test, expect } from '@playwright/test';
import HomePage from '../page/homePage.page';

const homePage = new HomePage();
const product = 'Printed Dress';
let productsTarget;

test.beforeEach(async ({ browser }) => {
    global.context = await browser.newContext();
    global.page = await context.newPage();
    await homePage.navigateHomePage();
    productsTarget = await homePage.SearchProduct(product);
});


test('should open the product page', async ({  }) => {
    await homePage.clickProduct(productsTarget);
    

})

test('should add product to cart', async ({  }) => {

})

