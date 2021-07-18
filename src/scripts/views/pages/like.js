import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate, createNoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <h1 class="latest__label">Your Favorite Restaurant</h1>
          <div class="posts" id="restaurantFavoriteContainer"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantList = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantItemContainer = document.querySelector('#restaurantFavoriteContainer');
    restaurantItemContainer.innerHTML = '';
    if (restaurantList.length > 0) {
      restaurantList.forEach((restaurant) => {
        restaurantItemContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantItemContainer.innerHTML = createNoItemTemplate();
    }
  },
};

export default Favorite;
