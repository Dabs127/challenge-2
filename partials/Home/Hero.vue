<template>
  <div
    class="w-full h-full bg-green-100 flex flex-col justify-center items-center text-center p-20"
  >
    <h1 class="text-7xl font-bold">
      De un color a una
      <span
        class="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
        >obra maestra</span
      >
    </h1>
    <p class="w-1/2 text-2xl my-6">
      Transforma cualquier color en paletas profesionales usando algoritmos de
      armonía cromática.
      <span class="font-semibold text-emerald-700"
        >Sin conocimientos de diseño necesarios.</span
      >
    </p>
    <div class="text-gray-500 space-x-4 my-10 flex">
      <span class="flex items-center gap-x-2">
        <Icon name="mdi:paint-outline" />
        4 tipos de armonía
      </span>
      <span class="flex items-center gap-x-2">
        <Icon name="mdi:eye-outline" />
        Colores perfectos
      </span>
      <span class="flex items-center gap-x-2">
        <Icon name="material-symbols:download" />
        Exportación instantánea
      </span>
    </div>
    <div>
      <button
        type="button"
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      >
        <Icon name="ion:sparkles-outline" />
        Crear Paletas Ahora
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
