<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
</script>

<template>
  <div class="min-h-dvh bg-base-200/30 font-sans text-base-content antialiased">
    <TheNavbar />
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <footer class="footer footer-center p-10 bg-base-100 text-base-content rounded mt-10">
      <aside>
        <p class="font-bold">
          Vue Fake Store <br />
          Aqui você encontra os melhores produtos desde 2026.
        </p>
        <p>Copyright &copy; 2026 - Todos os direitos reservados</p>
      </aside>
    </footer>
    <Toaster rich-colors />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--bc) / 0.2);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--bc) / 0.3);
}
</style>
