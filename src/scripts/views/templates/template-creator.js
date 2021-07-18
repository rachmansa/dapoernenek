import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant, meals, drinks) => `
    <div class="movie__info">
        <h2 class="movie__title">Restaurant Name : ${restaurant.name}</h2>
        <h2>Rating</h2>
        <p>&#11088; ${restaurant.rating}</p>
        <h2>Address</h2>
        <p>${restaurant.address}, ${restaurant.city}</p>
        <h2>Food</h2>
        <p>${meals}</p>
        <h2>Drinks</h2>
        <p>${drinks}</p>
        <h2>Description</h2>
        <p class="post-item__description">${restaurant.description}</p>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <a class="item-template" href="${`/#/detail/${restaurant.id}`}"> 
    <article class="post-item">
         
            <img class="lazyload post-item__thumbnail" src="${CONFIG.BASE_MED_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
        
        <div id="city">
            <p class="post-item__city">${restaurant.city}</p>
        </div>
        <div class="post-item__content">
            <p class="post-item__rating"> &#11088; ${restaurant.rating}</p>
            <h1 class="post-item__title">${restaurant.name}</h1>
            <p class="restaurant-description">${restaurant.description}</p>
            <p class="detail-link">Detail &rarr;</p>
        </div>
    </article>
    </a>
  `;

const createRestaurantImageTemplate = (restaurant) => `
    <img class="lazyload movie__poster" src="${CONFIG.BASE_LARGE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  `;

const createRestaurantCategoriesTemplate = (categories) => `
    <p>${categories.name}</p>
`;

const createRestaurantReviewsTemplate = (reviews) => `
    <div class="review">
        <p class="review-date">${reviews.date}</p>
        <p class="review-name">👤 ${reviews.name}</p>
        <p>${reviews.review}</p>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createNoItemTemplate = () => `

    <div id="restaurant-item__not__found">
        <p class="text-center" id="text-restaurant__not__found">Tidak ada restaurant untuk ditampilkan</p>
    </div>
`;

export {
  // eslint-disable-next-line comma-dangle
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createRestaurantImageTemplate,
  createRestaurantCategoriesTemplate,
  createRestaurantReviewsTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createNoItemTemplate,
};
