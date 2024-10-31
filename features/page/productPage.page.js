const { test } = require('@playwright/test');
const objectPage = require('../elements/ElementProductPage.json');

class ProductPage {
  constructor() {
    this.objects =  objectPage
  }

    async getProductName() {
        return await page.locator(this.objects.producName);
    }

    async getProductPrice() {
        return await page.locator(this.objects.productPrice);
    }
}