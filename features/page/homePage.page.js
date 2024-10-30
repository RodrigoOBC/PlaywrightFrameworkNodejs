const { test } = require('@playwright/test');
const objectPage = require('../elements/ElementHomePage.json');

class HomePage {
    constructor() {
        this.objects =  objectPage
    }

    async navigateHomePage() {
        await page.goto('/');
    }

    async getSearchBox() {
        return await page.locator(this.objects.SearchField);
    }

    async getSearchButton() {
        return await page.locator(this.objects.SearchButton);
    }

    async SearchProduct(product){
        const searchBox = await this.getSearchBox();
        const searchButton = await this.getSearchButton();
        await searchBox.fill(product);
        await searchButton.click();
        let products = await page.getByRole('link', { name: 'Printed Dress' }).all();
        return products;
     }

}

module.exports = HomePage;