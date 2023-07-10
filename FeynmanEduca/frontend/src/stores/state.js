import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  
  const username = ref( localStorage.getItem('username') || '')
  const jwt = ref( localStorage.getItem('token') || '')
  const role = ref( localStorage.getItem('role') ||'')
  const id = ref( localStorage.getItem('id') || '')

  const isAdmin = computed(() => role.value == "Admin")
  const isAuthenticated = computed(() => jwt.value ? true : false)

  function logout() {
    username.value = ""
    jwt.value = ""
    role.value = ""
    id.value = ""
  }
  return { username, jwt, role, isAdmin, isAuthenticated, logout, id }
})