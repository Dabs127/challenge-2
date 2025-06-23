<template>
  <SettingsDialog v-if="isUserModalOpen" :onClose="onClose" />
  <nav
    class="w-full h-auto px-10 py-5 flex items-center justify-between border-b border-b-gray-300"
  >
    <div class="flex items-center gap-x-4">
      <span
        class="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex p-2 max-w-min"
      >
        <Icon name="mdi:paint-outline" style="color: white" size="1.5em" />
      </span>
      <span
        class="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
        >ColorHunt</span
      >
    </div>
    <div>
      <ul class="flex items-center gap-x-15">
        <li class="cursor-pointer"><NuxtLink to="/">Inicio</NuxtLink></li>
        <li class="cursor-pointer"><NuxtLink to="/generator">Generador</NuxtLink></li>
        <li class="cursor-pointer"><NuxtLink to="/collections">Colecciones</NuxtLink></li>
      </ul>
    </div>
    <div class="flex items-center gap-x-10">
      <button
        class="text-gray-500 p-2 flex items-center gap-x-4 rounded-lg cursor-pointer hover:bg-blue-50"
        @click="() => (isUserModalOpen = !isUserModalOpen)"
      >
        <Icon name="mdi:gear" />
        Configuración
      </button>
      <span
        class="w-8 h-8 text-white font-semibold bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center"
      >
        U
      </span>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isUserModalOpen = ref(false);

const onClose = () => {
  isUserModalOpen.value = false
};
</script>
