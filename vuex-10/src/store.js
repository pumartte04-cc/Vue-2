import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
        { id: 1, name: 'Mobile Phone', price: 1000 },
        { id: 2, name: 'Computer', price: 2000 },
        { id: 3, name: 'Keyboard', price: 200 },
    ],
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      const cartItem = state.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId);
    },
    incrementQuantity(state, productId) {
      const cartItem = state.cart.find(item => item.id === productId);
      if (cartItem) {
        cartItem.quantity++;
      }
    },
    decrementQuantity(state, productId) {
      const cartItem = state.cart.find(item => item.id === productId);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        state.cart = state.cart.filter(product => product.id !== productId);
      }
    },
  },
  getters: {
    totalPrice: state => {
      return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    },
  },
});
