const { expect } = require('@playwright/test');
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

    async getProductSize() {
        return await page.getByText("size").locator("..")
    }

    async getProductColor() {
        return await page.locator(this.objects.colorOption);
    }

    async selectProductSize(size){
        await page.locator('select').selectOption({ label: size });
    }

    async selectProductColor(color){
        let colorOption = await this.getProductColor()
        colorOption = await colorOption.getByRole('link', { name: color })
        await colorOption.click();
   
    }

    async addProductToCart() {
        await await page.locator(this.objects.addToCartButton).click();
    }

    async validateProductPage(){
      let productName = await this.getProductName();
      let productPrice = await this.getProductPrice();
      let productSize = await this.getProductSize();
      let productColor = await this.getProductColor();

      await expect(productName).toHaveText('Blouse');
      await expect(productPrice).toHaveText('$27');
      await expect(productSize).toBeVisible();
      await expect(productColor).toBeVisible();

    }
}

module.exports = ProductPage