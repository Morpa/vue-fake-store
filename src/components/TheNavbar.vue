<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { Moon, ShoppingCart, Sun } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()
const theme = ref(localStorage.getItem('theme') || 'light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
})
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost text-xl font-bold gap-0">
        <span class="text-primary">Fake</span>Vue Store
      </RouterLink>
    </div>

    <div class="flex-none gap-2">
      <!-- Theme toggle -->
      <button @click="toggleTheme()" class="btn btn-ghost btn-circle">
        <Sun v-if="theme === 'dark'" class="size-5" />
        <Moon v-else class="size-5" />
      </button>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <ShoppingCart class="size-5" />
            <span
              v-if="cartStore.cartCount > 0"
              class="badge badge-sm badge-primary indicator-item animate-bounce"
            >
              {{ cartStore.cartCount }}
            </span>
          </div>
        </div>
        <div
          class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          tabindex="0"
        >
          <div class="card-body">
            <span class="text-lg font-bold">{{ cartStore.cartCount }} Itens</span>
            <span class="text-info">Subtotal: {{ cartStore.cartTotal.toFixed(2) }} €</span>
            <div class="card-actions">
              <RouterLink to="/cart" class="btn btn-primary btn-block">Ver carrinho</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
