<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import ProductSkeleton from '@/components/ProductSkeleton.vue'
import { useProducts } from '@/composables/api/products/useProducts'
import { AlertCircle } from 'lucide-vue-next'
import { onMounted } from 'vue'

const { products, loading, error, fetchProducts } = useProducts()

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <main class="container mx-auto px-4 md:px-8 py-8 min-h-screen">
    <header class="mb-10 text-center space-y-2">
      <h1 class="text-4xl md:text-5xl font-black tracking-tight">
        Explore nossa <span class="text-primary italic">coleção</span>
      </h1>
      <p class="text-base-content/60 max-w-lg mx-auto">
        Produtos selecionados com qualidade premium para você!
      </p>
    </header>

    <div class="flex flex-col items-center justify-center py-20 gap-4" v-if="error">
      <div class="alert alert-error max-w-md">
        <AlertCircle class="size-6" />
        <span>{{ error }}</span>
      </div>
      <button @click="fetchProducts()" class="btn btn-primary">Tentar novamente</button>
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
    >
      <template v-if="loading">
        <ProductSkeleton v-for="i in 8" :key="i" />
      </template>
      <template v-else>
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </template>
    </div>
  </main>
</template>
