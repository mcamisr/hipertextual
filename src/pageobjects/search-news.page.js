const { $ } = require("@wdio/globals");
const Page = require("./page");
const { browser } = require("@wdio/globals");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchNewsletter extends Page {
  /**
   * define selectors using getter methods
   */
  urlNewsletter =
    "https://hipertextual.com/2023/08/reed-jobs-hijo-steve-jobs-yosemite-nuevos-tratamientos-cancer";


    get googleAds() {
      return $("//div[@id='page']//div[@class='newspack_global_ad global_below_header fixed-height']//div[@id='google_ads_iframe_/1036009/newspack_header_0__container__']");
    }
  get searchIcon() {
    return $("//div[@id='page']//header[@id='masthead']//button[@id='search-toggle']");
  }

  get searchTextbox() {
    return $("//div[@id='page']//header[@id='masthead']//div[@id='header-search']//input[@id='search-form-2']");
  }

  get submitButton() {
    return $("//div[@id='page']//header[@id='masthead']//button[@type='submit']");
  }

  get newsLetter() {
    return $(
      'a[href="https://hipertextual.com/2023/08/reed-jobs-hijo-steve-jobs-yosemite-nuevos-tratamientos-cancer"]'
    );
  }

  get suscribeInput() {
    return $('input[placeholder="example@gmail.com"]');
  }
   get submitButton2() {
     return $('//aside[@class="scaip scaip-1    "]//button[@type="submit"]');
   }
   get TextForConfirmation() {
    return $('p.success');
  }

  async SearchText() {
    await this.googleAds.waitForDisplayed();
    await this.searchIcon.waitForClickable();
    await this.searchIcon.click();
    await this.searchTextbox.waitForDisplayed();
    await this.searchTextbox.setValue('Steve Jobs');
    await this.submitButton.click();
    await this.newsLetter.scrollIntoView();
    await this.newsLetter.click();
  }
  async SubcribeMe() {
    await this.googleAds.waitForDisplayed();
    await this.suscribeInput.waitForDisplayed();
    await this.suscribeInput.scrollIntoView();
    await this.suscribeInput.setValue("example@gmail.com");
    await this.submitButton2.click();
  }

 

  
  OpenPage() {
    return super.open();
  }
}

module.exports = new SearchNewsletter();
