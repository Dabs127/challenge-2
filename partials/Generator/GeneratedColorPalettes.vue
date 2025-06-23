<template>
  <div class="w-full pb-20 flex flex-col justify-center px-35">
    <h2 class="text-3xl font-semibold text-left">Tus Paletas Generadas</h2>
    <p class="mb-10">Basadas en #c061cb</p>
    <div class="grid grid-cols-2 gap-8">
      <ColorPalette
        v-for="(palette, index) in colorPalettes"
        :key="index"
        :palette="palette"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const colorPalettes = ref<any[]>([]);
onMounted(() => {
  colorPalettes.value = loadPalettesFromLocalStorage();
});
</script>
