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
    await expect(await page.url()).toBe('http://www.automationpractice.pl/index.php?id_product=4&controller=product&search_query=Printed+Dress&results=5');

})

test('should add product to cart', async ({  }) => {

})

