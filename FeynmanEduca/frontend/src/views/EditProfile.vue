<template>
    <div class="edit-profile-container">
        <h1>Edit Profile</h1>
        <form @submit.prevent="saveProfile">
            <div class="form-group">
                <label for="profilePicture">Profile Picture:</label>
                <div class="profile-picture-container">
                    <input type="file" id="profilePicture" ref="profilePicture" @change="onProfilePictureChange">
                    <label for="profilePicture" class="upload-button">
                        <svg class="upload-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M11 15v4h2v-4h5l-6-6-6 6h5zm8-12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h14zm-6 11h-2v2H9v-2H7v-2h2V9h2v2h2v2zm-5-7h2v6H8V7zm6 0h2v6h-2V7z" />
                        </svg>
                        <span class="upload-button-text">Select Image</span>
                    </label>
                    <img :src="profilePicturePreview" alt="Profile Picture Preview" v-if="profilePicturePreview">
                </div>
            </div>
            <div class="form-group">
                <label for="currentStatus">Current Status:</label>
                <input type="text" id="currentStatus" v-model="currentStatus">
            </div>
            <div class="form-group">
                <label for="about">About:</label>
                <textarea id="about" v-model="about"></textarea>
            </div>
            <button type="submit" class="save-button">Save</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      profilePicture: null,
      profilePicturePreview: null,
      currentStatus: '',
      about: ''
    };
  },
  methods: {
    async saveProfile() {
      try {
        await axios.put('user/me', {
            Profile: this.profilePicture,
            Job: this.currentStatus,
            About: this.about
        });

        this.profilePicture = null;
        this.profilePicturePreview = null;
        this.currentStatus = '';
        this.about = '';

      } catch (error) {}
    },
    onProfilePictureChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePicture = file;
        this.previewProfilePicture();
      }
    },
    previewProfilePicture() {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profilePicturePreview = e.target.result;
      };
      reader.readAsDataURL(this.profilePicture);
    }
  }
};
</script>

  
<style scoped>
.edit-profile-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="file"] {
    display: none;
}

.profile-picture-container {
    position: relative;
    width: 150px;
    height: 150px;
    border: 1px solid #ddd;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;
}

.profile-picture-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.upload-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.upload-button:hover {
    opacity: 1;
}

.upload-icon {
    fill: #fff;
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

.upload-button-text {
    color: #fff;
    font-size: 16px;
}

textarea {
    width: 100%;
    height: 100px;
    resize: vertical;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.save-button {
    display: block;
    width: 100%;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.save-button:hover {
    background-color: #0056b3;
}
</style>
