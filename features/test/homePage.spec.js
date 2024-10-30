import { test, expect } from '@playwright/test';
import HomePage from '../page/homePage.page';

const homePage = new HomePage();
const products = ['Printed Dress', 'Faded Short Sleeve T-shirts'];

test.beforeEach(async ({ browser }) => {
    global.context = await browser.newContext();
    global.page = await context.newPage();
});

test('should open the homepage', async () => {

    await homePage.navigateHomePage();
    expect(page).toHaveTitle('My Shop');

})

for (let product of products) {
    test(`search product ${product}`, async () => {

        await homePage.navigateHomePage();
        let productsTarget = await homePage.SearchProduct(product);
        await expect(productsTarget.length).toBeGreaterThan(0);

    })

}