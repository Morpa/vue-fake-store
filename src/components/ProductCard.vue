<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types/Product'

interface ProductCardProps {
  product: Product
}

defineProps<ProductCardProps>()

const cartStore = useCartStore()

function getHalfStarRating(rate: number): number {
  return Math.round(rate * 2)
}
</script>

<template>
  <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
    <figure class="px-6 pt-6 bg-white overflow-hidden h-64">
      <img
        :src="product.image"
        :alt="product.title"
        class="rounded-xl h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </figure>

    <div class="card-body">
      <div class="flex flex-col gap-1 h-32">
        <h2 class="card-title text-sm line-clamp-2 leading-tight">{{ product.title }}</h2>
        <div class="flex items-center gap-2 mt-auto">
          <div class="rating rating-xs rating-half rating-readonly">
            <input type="radio" class="rating-hidden" />

            <template v-for="i in 10" :key="i">
              <input
                type="radio"
                class="mask mask-star-2"
                :class="i % 2 === 0 ? 'mask-half-2 bg-orange-400' : 'mask-half-1 bg-orange-400'"
                :checked="i === getHalfStarRating(product.rating.rate)"
              />
            </template>
          </div>

          <span class="text-xs opacity-60 ml-1">{{ product.rating.rate.toFixed(1) }}</span>
          <span class="text-xs opacity-60">{{ product.rating.count }}</span>
        </div>
        <p class="text-xl font-bold text-primary">{{ product.price.toFixed(2) }} €</p>
      </div>

      <div class="card-actions mt-4">
        <button
          @click="cartStore.addToCart(product)"
          class="btn btn-primary btn-block active:scale-95 transition-transform"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
</template>
