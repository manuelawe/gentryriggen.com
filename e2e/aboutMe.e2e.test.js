describe('Site launches', () => {
  beforeAll(async () => {
    await page.goto(`http://${require('ip').address()}:3000`);
    await page.waitForSelector('[data-test="about-me"]');
  });

  it('should display "Hi, I\'m Gentry" text on page', async () => {
    await expect(page).toMatch('Hi, I\'m Gentry.');
  });
});