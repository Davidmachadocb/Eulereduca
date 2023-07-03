<template>
  <div class="profile-section">
    <h3 class="section-title">Perfil</h3>
    <div class="user-info">
      <p class="user-label">Nome:</p>
      <p class="user-value">{{ user.username }}</p>
    </div>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfileSection',
  props: ['user'],
};
</script>

<style scoped>
.profile-section {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-label {
  font-weight: bold;
  margin-right: 10px;
}

.user-value {
  font-size: 18px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>