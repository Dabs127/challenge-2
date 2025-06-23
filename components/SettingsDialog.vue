<template>
  <div
    class="w-full h-screen absolute flex justify-center items-center z-1 bg-black/50"
  >
    <div
      class="min-w-lg max-h-[90%] overflow-y-auto p-7 rounded-lg relative bg-white"
    >
      <button
        class="text-gray-600 absolute right-3 top-2 text-2xl"
        @click="props.onClose"
      >
        <Icon name="material-symbols:close" />
      </button>
      <h3 class="text-xl flex items-center mb-10">
        <Icon name="bi:person" style="color: black" />
        <span class="font-semibold">Configuración de Usuario</span>
      </h3>
      <form class="text-gray-700 flex flex-col gap-y-5">
        <div class="flex items-center font-semibold text-md gap-x-2">
          <Icon name="bi:person" style="color: black" />
          <p>Perfil</p>
        </div>
        <div class="flex flex-col">
          <label for="name">Nombre de usuario</label>
          <input
            id="name"
            type="text"
            class="border border-gray-300 p-2 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Daniel..."
          />
        </div>
        <div class="flex flex-col">
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            class="border border-gray-300 p-2 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
            placeholder="danyalan03@hotmail.com..."
          />
        </div>
        <div class="flex items-center font-semibold text-md gap-x-2">
          <Icon name="ep:monitor" style="color: black" />
          <p>Apariencia</p>
        </div>
        <div class="flex flex-col">
          <label for="options">Tema</label>
          <select
            id="options"
            class="border border-gray-300 p-2 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none"
          >
            <option disabled selected>Selecciona una opción...</option>
            <option value="system">Sistema</option>
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
          </select>
        </div>
        <div class="flex items-center font-semibold text-md gap-x-2">
          <Icon name="fluent:globe-32-regular" style="color: black" />
          <p>Idioma</p>
        </div>
        <div class="flex flex-col">
          <label for="language">Idioma de la interfaz</label>
          <select
            id="language"
            class="border border-gray-300 p-2 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none"
          >
            <option disabled selected>Selecciona una opción...</option>
            <option value="spanish">Español</option>
            <option value="english">Inglés</option>
          </select>
        </div>
      </form>
      <hr class="text-gray-200 my-5" />
      <div class="w-full flex justify-end gap-x-4">
        <button class="text-blue-950 border border-gray-300 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors" @click="onClose">
          Cancelar
        </button>
        <button
          class="bg-blue-950 text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-950/90 transition-colors"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  onClose: () => void;
}>();
</script>
