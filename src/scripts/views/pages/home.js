import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content">
        <div class="loader"></div>
        <div class="latest">
          <h1 class="latest__label">Latest Post</h1>
          <div class="posts" id="restaurantItemContainer"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    try {
      const restaurantList = await TheRestaurantDbSource.listRestaurant();
      const restaurantItemContainer = document.querySelector('#restaurantItemContainer');
      restaurantItemContainer.innerHTML = '';
      restaurantList.forEach((restaurant) => {
        restaurantItemContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Home;
