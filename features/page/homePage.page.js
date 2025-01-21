const { test } = require('@playwright/test');
const objectPage = require('../elements/ElementHomePage.json');

class HomePage {
    constructor() {
        this.objects =  objectPage
    }

    async navigateHomePage() {
        await page.goto('/')
    }

    async getSearchBox() {
        return await page.locator(this.objects.SearchField)
    }

    async getSearchButton() {
        return await page.locator(this.objects.SearchButton)
    }

    async getProductTarget(product) {
        return await page.getByRole('link', { name: product }).all()
    }

    async SearchProduct(product){
        const searchBox = await this.getSearchBox()
        const searchButton = await this.getSearchButton()
        await searchBox.fill(product)
        await searchButton.click()
        let products = await this.getProductTarget(product)
        return products;
     }

    async clickProduct(product){    
        await product[2].click()
    }

}

module.exports = HomePage