<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p class="create-account-link">
      Primeira vez no FeynmanEduca?
      <router-link to="/register">Criar Conta</router-link>
    </p>
    <p v-if="loginError" class="error-message">{{ loginError }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '../stores/state';

export default {
  data() {
    return {
      email: '',
      password: '',
      loginError: '' // New data property to hold the error message
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const { data } = await axios.post('auth/local', {
          identifier: this.email,
          password: this.password
        });

        // Handle successful login
        console.log(data); // You can do something with the response data here

        // Redirect to the desired page
        const jwt = data.jwt;

        const res = await axios.get("/users/me", {
          params: {
            populate: ['role']
          },
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });

        const userStore  = useUserStore()
        userStore.username = res.data.username
        userStore.role = res.data.role
        userStore.jwt = jwt
        this.saveLocally(res.data, jwt);
        this.$router.push('/profile');

      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
        this.loginError = 'Email or password is not correct'; // Set the error message
      }
    },
    saveLocally(user, jwt) {
      localStorage.setItem("username", user.username);
      localStorage.setItem("token", jwt);
      localStorage.setItem("role", user.role);
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
