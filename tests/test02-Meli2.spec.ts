import { test, expect, Browser, Page } from '@playwright/test';
import { MeliPage } from '../pages/meli.page';

(async () => {
    let browser: Browser;
    let page: Page;

    test.describe('Buying some products in ML Arg', () => {

        test('Buying first product in Mercado Libre Argentina', async ({ page }) => {

            const meli = new MeliPage(page)

            await test.step('Opening the home page ML Arg', async () => {
                await page.goto('/')
            });

            await test.step('Searching one product', async () => {
                await meli.searchProduct('smart tv')
            });

            await test.step('Selecting the first product in list', async () => {
                const rows = await page.$$(meli.productTitles);
                await rows[1].click();
            });

            await test.step('Clicking on Buy product', async () => {
                await meli.txtComprar.click();
                await expect(meli.productTitleCard).toContainText('¡Hola! Para comprar, ingresá');
            });
        
        
        });

        test('Buying second product in Mercado Libre Argentina', async ({ page }) => {

            const meli = new MeliPage(page)

            await test.step('Opening the home page ML Arg', async () => {
                await page.goto('/')
            });

            await test.step('Searching one product', async () => {
                await meli.searchProduct('xbox')
            });

            await test.step('Selecting the first product in list', async () => {
                const rows = await page.$$(meli.productTitles);
                await rows[1].click();
            });

            await test.step('Clicking on Buy product', async () => {
                await meli.txtComprar.click();
                await expect(meli.productTitleCard).toContainText('¡Hola! Para comprar, ingresá');
            });

        });

    });

})();