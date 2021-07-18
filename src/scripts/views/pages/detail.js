/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantImageTemplate,
  createRestaurantCategoriesTemplate,
  createRestaurantReviewsTemplate,
} from '../templates/template-creator';
// import LikeButtonInitiator from '../../utils/like-button-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="latest">
        <h1 class="latest__label">Detail Restaurant</h1>
      </div>
      <div class="loader"></div>
      <div class="movie">
        <div id="restaurantImage"></div>
        <div id="likeButtonContainer"></div>
        <h2 class="movie__title">Categories</h2>
        <div id="restaurantCategories"></div>
        <div id="restaurantDetail"></div>
        <h2>Reviews</h2>
        <div id="restaurantReviews"></div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    const restaurantImagesContainer = document.querySelector('#restaurantImage');
    const restaurantCategoriesContainer = document.querySelector('#restaurantCategories');
    const restaurantReviewsContainer = document.querySelector('#restaurantReviews');

    const meals = Object.values(restaurantDetail.restaurant.menus.foods).map((food) => food.name);
    const drinks = Object.values(restaurantDetail.restaurant.menus.drinks).map((drink) => drink.name);

    restaurantImagesContainer.innerHTML = createRestaurantImageTemplate(restaurantDetail.restaurant);

    restaurantDetail.restaurant.categories.forEach((categories) => {
      restaurantCategoriesContainer.innerHTML += createRestaurantCategoriesTemplate(categories);
    });

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail.restaurant, meals, drinks);

    restaurantDetail.restaurant.customerReviews.forEach((reviews) => {
      restaurantReviewsContainer.innerHTML += createRestaurantReviewsTemplate(reviews);
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurantDetail.restaurant.id,
        name: restaurantDetail.restaurant.name,
        description: restaurantDetail.restaurant.description,
        pictureId: restaurantDetail.restaurant.pictureId,
        city: restaurantDetail.restaurant.city,
        rating: restaurantDetail.restaurant.rating,
      },
    });
  },
};

export default Detail;
