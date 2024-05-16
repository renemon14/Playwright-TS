import { test, expect } from '@playwright/test';
import { MeliPage } from '../pages/meli.page';


test('Buying first product in Mercado Libre Argentina', async ({ page }) => {
  const meli = new MeliPage(page)
  await page.goto('/')
  await meli.searchProduct('smart tv')
  const rows = await page.$$(meli.productTitles);
  await rows[1].click();
  await meli.txtComprar.click();
  await expect(meli.productTitleCard).toContainText('¡Hola! Para comprar, ingresá');
});

test('Buying second product in Mercado Libre Argentina', async ({ page }) => {
  const meli = new MeliPage(page)
  await page.goto('/')
  await meli.searchProduct('smart tv')
  const rows = await page.$$(meli.productTitles);
  await rows[2].click();
  await meli.txtComprar.click();
  await expect(meli.productTitleCard).toContainText('¡Hola! Para comprar, ingresá');
});