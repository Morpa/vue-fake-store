<script setup lang="ts">
import CartItem from '@/components/CartItem.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
import { useCartStore } from '@/stores/cart'
import { RefreshCw, ShieldCheck, ShoppingBag } from 'lucide-vue-next'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()

const isClearModalOpen = ref(false)

function confirmClearCart() {
  cartStore.clearCart()
  isClearModalOpen.value = false
}
</script>

<template>
  <main class="container mx-auto px-4 mx:px-8 min-h-screen">
    <div class="flex flex-col lg:flex-row gap-10 items-start">
      <div class="flex-1 w-full flex flex-col gap-6">
        <h1 class="text-3xl font-black">Meu <span class="text-primary italic">carrinho</span></h1>

        <div v-if="cartStore.items.length === 0" class="card bg-base-100 shadow-xl py-20">
          <div class="card-body items-center text-center">
            <div
              class="size-24 bg-base-200 rounded-full flex items-center justify-center mb-4 text-base-content/20"
            >
              <ShoppingBag class="size-12" />
            </div>

            <h2 class="card-title text-2xl">Seu carrinho está vazio</h2>
            <p class="opacity-60 mb-6">Parece que você não adicionou productos ao carrinho.</p>
            <div class="card-actions">
              <RouterLink to="/" class="btn btn-primary px-8">Explorar produtos</RouterLink>
            </div>
          </div>
        </div>

        <div v-else class="flex flex-col gap-4">
          <CartItem v-for="item in cartStore.items" :key="item.id" :item="item" />

          <button
            @click="isClearModalOpen = true"
            class="btn btn-ghost btn-sm self-start text-error hover:bg-error/10"
          >
            Limpar carrinho
          </button>
        </div>
      </div>

      <aside v-if="cartStore.items.length > 0" class="w-full lg:w-96 sticky top-24">
        <div class="card bg-base-100 shadow-xl border border-base-200">
          <div class="card-body gap-4">
            <h2 class="card-title text-2xl mb-2">Resumo</h2>

            <div class="flex justify-between items-center text-sm opacity-60">
              <span>Quantidade</span>
              <span>{{ cartStore.cartCount }} itens</span>
            </div>

            <div class="flex justify-between items-center text-sm opacity-60">
              <span>Frete</span>
              <span class="text-success font-bold uppercase">Grátis</span>
            </div>

            <div class="divider my-0" />

            <div class="flex justify-between items-center">
              <span class="text-lg font-bold">Total</span>
              <span class="text-2xl font-black text-primary"
                >{{ cartStore.cartTotal.toFixed(2) }} €</span
              >
            </div>

            <div class="card-actions mt-6">
              <button class="btn btn-primary btn-block btn-lg shadow-lg shadow-primary/20">
                Finalizar compra
              </button>
              <RouterLink to="/" class="btn btn-ghost btn-block">Continuar comprando</RouterLink>
            </div>
          </div>
        </div>

        <div class="mt-6 flex flex-col gap-3 px-4">
          <div class="flex items-center gap-3 text-xs opacity-60">
            <ShieldCheck class="size-4" />
            Pagamento 100% seguro
          </div>

          <div class="flex items-center gap-3 text-xs opacity-60">
            <RefreshCw class="size-4" />
            Troca gratuita até 7 dias
          </div>
        </div>
      </aside>
    </div>

    <ConfirmModal
      :open="isClearModalOpen"
      title="Limpar carrinho"
      message="Tem certeza que deseja remover TODOS os itens do seu carrinho?"
      confirm-text="Sim, limpar"
      @confirm="confirmClearCart"
      @cancel="isClearModalOpen = false"
    />
  </main>
</template>
