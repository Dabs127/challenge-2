<template>
  <div class="w-full flex flex-col justify-center items-center py-20">
    <h1 class="text-5xl font-bold">Generador de Paletas</h1>
    <p class="text-gray-500 my-8 text-xl">
      Crea paletas profesionales basadas en teoría cromática científica
    </p>
    <div class="space-x-8 flex">
      <button
        class="inline-flex items-center justify-center gap-x-4 whitespace-nowrap text-sm font-medium bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
        @click="() => generatePalette(primaryColor, paletteSize, armonyType)"
        >
        <Icon name="ic:baseline-create" size="1.3em" />
        Generar Paletas
      </button>
      <button
        class="border-2 border-green-600 text-green-600 bg-white px-6 py-2 rounded-3xl h-11 flex items-center gap-x-3 cursor-pointer hover:bg-blue-50 transition"
      >
        <Icon name="la:random" size="1.3em" />
        Color Aleatorio
      </button>
    </div>
    <div class="w-[85%] bg-white rounded-2xl flex p-10 gap-x-10 mt-20">
      <div
        class="basis-1/3 p-10 flex flex-col items-center border border-gray-200 shadow-xl rounded-2xl"
      >
        <p class="font-semibold text-xl">Elige tu color primario</p>
        <input
          type="color"
          name="color"
          id="color"
          v-model="primaryColor"
          class="ring-4 ring-white cursor-pointer rounded-full mt-6 w-20 h-20 shadow-xl/30"
        />
        <p class="text-gray-400 mt-6 mb-2">Color seleccionado</p>
        <p class="font-bold">{{ primaryColor }}</p>
      </div>
      <div
        class="basis-1/3 bg-white p-10 border border-gray-200 shadow-xl rounded-2xl"
      >
        <p class="font-semibold text-xl mb-2 text-center">Tipo de armonía</p>
        <div class="grid grid-cols-2 gap-4">
          <button
            :class="`rounded-lg bg-primary hover:bg-primary/90 p-4 h-auto flex flex-col items-start space-y-1 cursor-pointer transition-all duration-300 ${armonyType === 'complementarios' ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white' : 'bg-white text-black' } border-0 shadow-lg`"
            @click="armonyType = 'complementarios'"
            >
            <p class="font-semibold">Complementarios</p>
            <p class="text-sm text-left">
              Colores opuestos en el circulo cromático
            </p>
          </button>
          <button
            :class="`rounded-lg bg-primary hover:bg-primary/90 p-4 h-auto flex flex-col items-start space-y-1 cursor-pointer transition-all duration-300 ${armonyType === 'analogos' ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white' : 'bg-white text-black' } border-0 shadow-lg`"
            @click="armonyType = 'analogos'"
            >
            <p class="font-semibold">Análogos</p>
            <p class="text-sm text-left">
              Colores adyacentes en el círculo cromático
            </p>
          </button>
          <button
            :class="`rounded-lg bg-primary hover:bg-primary/90 p-4 h-auto flex flex-col items-start space-y-1 cursor-pointer transition-all duration-300 ${armonyType === 'triadicos' ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white' : 'bg-white text-black' } border-0 shadow-lg`"
            @click="armonyType = 'triadicos'"
            >
            <p class="font-semibold">Triádicos</p>
            <p class="text-sm text-left">
              Tres colores equidistantes en el círculo
            </p>
          </button>
          <button
            :class="`rounded-lg bg-primary hover:bg-primary/90 p-4 h-auto flex flex-col items-start space-y-1 cursor-pointer transition-all duration-300 ${armonyType === 'monocromaticos' ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white' : 'bg-white text-black' } border-0 shadow-lg`"
            @click="armonyType = 'monocromaticos'"
            >
            <p class="font-semibold">Monocromáticos</p>
            <p class="text-sm text-left">Variaciones del mismo color</p>
          </button>
        </div>
      </div>
      <div
        class="basis-1/3 bg-white p-10 flex flex-col items-center gap-y-2 border border-gray-200 shadow-xl rounded-2xl"
      >
        <p class="font-semibold text-xl">Tamaño de Paleta</p>
        <div class="w-full flex flex-col items-start gap-y-2 my-4">
          <label for="color_quantity">Número de colores</label>
          <select
            class="w-full border border-gray-300 p-2 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none"
            name="color_quantity"
            id="color_quantity"
            v-model="paletteSize"
          >
            <option value="" disabled selected>
              Seleccionar una opción...
            </option>
            <option value="3">3 colores</option>
            <option value="4">4 colores</option>
            <option value="5">5 colores</option>
          </select>
        </div>
        <p class="text-gray-400 text-md">Configuración actual</p>
        <p class="font-semibold text-lg">{{ paletteSize }} colores por paleta</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const primaryColor = ref<string>("#FFFFFF");
const armonyType = ref("complementarios");
const paletteSize = ref<number>(3);

</script>
