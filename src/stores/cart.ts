import { defineStore } from "pinia"
import { computed, ref, watch } from "vue"
import { toast } from "vue-sonner"
import type { CartItem } from "@/types/CartItem"
import type { Product } from "@/types/Product"

const CART_STORE_KEY = "vuefakeshop_cart"

export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>(
    JSON.parse(localStorage.getItem(CART_STORE_KEY) || "[]"),
  )

  watch(
    items,
    (newItems) => {
      localStorage.setItem(CART_STORE_KEY, JSON.stringify(newItems))
    },
    {
      deep: true,
    },
  )

  const cartCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    return items.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
  })

  function addToCart(product: Product) {
    const existingItem = items.value.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({
        ...product,
        quantity: 1,
      })
    }

    toast.success("Produto adicionado ao carrinho!")
  }

  function removeFromCart(productId: number) {
    const index = items.value.findIndex((item) => item.id === productId)

    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      const item = items.value.find((item) => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  return {
    items,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }
})
