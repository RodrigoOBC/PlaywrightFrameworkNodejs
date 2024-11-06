const { expect } = require('@playwright/test');
const objectPage = require('../elements/ElementProductPage.json');

class ProductPage {
  constructor() {
    this.objectsProductPage =  objectPage
  }

    async getProductName() {
        return await page.locator(this.objectsProductPage.producName);
    }

    async getProductPrice() {
        return await page.locator(this.objectsProductPage.productPrice);
    }

    async getProductSize() {
        return await page.getByText("size").locator("..")
    }

    async getProductColor() {
        return await page.locator(this.objectsProductPage.colorOption);
    }

    async getAddToCartButton() {
        return await page.getByRole('button', { name: 'Add to cart' });
    }

    async getNumberProduct(){
        return await page.locator(this.objectsProductPage.countProduct)
    }

    async selectProductSize(size){
        await page.locator('select').selectOption({ label: size });
    }


    async selectProductColor(color){
        let colorOption = await this.getProductColor()
        colorOption = await colorOption.getByRole('link', { name: color })
        await colorOption.click();
   
    }

    async setNumberOfProduct(numberOfProduct){
        let numberOfProductObject = await this.getNumberProduct()
        await numberOfProductObject.fill(numberOfProduct)
    }

    async addProductToCart() {
        let addToCartButton = await this.getAddToCartButton();
        await addToCartButton.click();
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

    async validateProductAddedToCart(){
        let successMessage = await page.getByText(this.objectsProductPage.sucessMessage);
        await expect(successMessage).toBeVisible();
        await expect(successMessage).toHaveText(this.objectsProductPage.sucessMessage);
    }
}

module.exports = ProductPage