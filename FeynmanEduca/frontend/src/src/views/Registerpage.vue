<template>
  <div class="container">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-control" required>
        <!--to show error msg if passwords do not match-->>
        <p v-if="passwordMismatch" class="error-message">Passwords do not match.</p>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordMismatch: false // New property for password mismatch error
    };
  },
  methods: {
    async register() {
      this.passwordMismatch = false; // Reset password mismatch error

      if (this.password !== this.confirmPassword) {
        // Passwords don't match, handle the error
        this.passwordMismatch = true;
        return;
      }

      try {
        await axios.post('auth/local/register', {
          username: this.name,
          email: this.email,
          password: this.password
        });

        // Registration successful, redirect to login page
        this.$router.push('/login');
      } catch (error) {
        // Registration failed, handle the error
        console.error('Registration failed:', error);
      }
    }
  }
};
</script>

<style scoped>
.container {
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
  margin-top: 5px;
}
</style>
