/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const assert = require('assert');

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurant-item__not__found');
  I.see('Tidak ada restaurant untuk ditampilkan', '#text-restaurant__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#text-restaurant__not__found');

  I.amOnPage('/');
  I.seeElement('.post-item');

  const firstRestaurant = locate('.post-item__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  const faved = locate('.post-item__title').first();

  const favedRestaurant = await I.grabTextFrom(faved);

  assert.strictEqual(firstRestaurantTitle, favedRestaurant);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  const firstRestaurant = locate('.post-item__title').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  const favoriteRestaurant = locate('.post-item__title').first();
  I.click(favoriteRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '#text-restaurant__not__found');
});
