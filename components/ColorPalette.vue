<template>
  <div class="bg-white rounded-t-2xl rounded-2xl shadow-xl">
    <div class="flex h-40">
      <div
        v-for="(color, index) in props.palette.colors"
        :key="index"
        class="w-auto transition-all ease-in-out duration-300"
        :style="{ backgroundColor: color }"
        :class="[
          hoverBasisClass,
          basisClass,
          index === 0 ? 'rounded-tl-2xl' : '',
          index === props.palette.colors.length - 1 ? 'rounded-tr-2xl' : '',
        ]"
      />
    </div>
    <div class="w-full p-6">
      <h3 class="text-xl font-semibold">Paleta {{ palette.harmonyType }}</h3>
      <p class="text-gray-500">
        Colores {{ palette.harmonyType }} basados en {{ palette.baseColor }}
      </p>
      <div class="mt-4 pl-10 w-full flex gap-x-4 overflow-x-auto">
        <div
          v-for="color in props.palette.colors"
          :key="color"
          class="max-w-min px-4 py-2 flex items-center gap-x-4 bg-blue-50 rounded-3xl"
        >
          <div
            class="w-4 h-4 inline-block"
            :style="{ backgroundColor: color }"
          />
          <span class="italic text-sm text-gray-800">{{ color }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  palette: {
    baseColor: string;
    paletteSize: string;
    harmonyType: string;
    colors: string[];
  };
}>();

const basisClass = computed(() => {
  const basisMap: Record<number, string> = {
    2: "basis-1/2",
    3: "basis-1/3",
    4: "basis-1/4",
    5: "basis-1/5",
    // Agrega más según necesites
  };
  return basisMap[+props.palette.paletteSize] || "basis-1/4"; // valor por defecto
});

const hoverBasisClass = computed(() => {
  const hoverBasisMap: Record<number, string> = {
    2: "hover:basis-2/3",
    3: "hover:basis-2/4",
    4: "hover:basis-2/5",
    5: "hover:basis-2/6",
    // Agrega más según necesites
  };
  return hoverBasisMap[+props.palette.paletteSize] || "hover:basis-2/5"; // valor por defecto
});

// console.log("Palette:", props.palette.colors);
</script>
