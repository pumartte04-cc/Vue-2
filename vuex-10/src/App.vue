<template>
  <div>
    <h1>Catalogue:</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}    ￥{{ product.price }}
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul>
    <h1>Cart</h1>
    <ul>
      <li v-for="product in cart" :key="product.id">
        {{ product.name }}    ￥{{ product.price }} * {{ product.quantity }}
        <button @click="incrementQuantity(product.id)">+</button>
        <button @click="decrementQuantity(product.id)">-</button>
        <button @click="removeFromCart(product.id)">Clear</button>
      </li>
    </ul>
    <h3>Total Price: {{ totalPrice }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    removeFromCart(productId) {
      this.$store.commit('removeFromCart', productId);
    },
    incrementQuantity(productId) {
      this.$store.commit('incrementQuantity', productId);
    },
    decrementQuantity(productId) {
      this.$store.commit('decrementQuantity', productId);
    },
  },
};
</script>
