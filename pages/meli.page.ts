import { expect, Page } from '@playwright/test';

export class MeliPage {
  constructor(private page: Page) {}

  public searchBar = this.page.locator("input[name='as_word']");
  public searchButton = this.page.locator("button.nav-search-btn");
  public productTitles = ("div.ui-search-item__group--title");
  public productTitleCard = this.page.locator("h1.center-card__title");
  public txtComprar = this.page.getByRole('button', { name: 'Comprar ahora' });

  /*async searchProduct() {
    await this.searchBar.click();
  }

  async fillSearchInput(text: string) {
    await this.searchBar.fill(text);
    await expect(this.searchBar).toBeVisible()
  }*/

};

