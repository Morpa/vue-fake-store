import { ref } from "vue"
import { api } from "@/lib/api"
import type { Product } from "@/types/Product"

export function useProducts() {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const { data } = await api.get<Product[]>("/products")
      products.value = data
    } catch (err) {
      error.value = "Erro ao buscar produtos, tente novamente mais tarde."
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
  }
}
