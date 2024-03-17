<script setup lang="ts">
const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
]

const v1 = ref<string>('')
const v2 = ref<string>('')
const v3 = ref<string>('')
const v4 = ref<string>('')
</script>

<template>
  <UContainer class="pt-4">
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows indicators>
      <!-- <img :src="item" class="w-full" draggable="false"> -->
      <NuxtImg
        :src="item"
        class="w-full"
        draggable="false"
      />
    </UCarousel>
    <UContainer class="pt-8 grid grid-cols-4 w-100">
        <div class="grid grid-rows-subgrid row-span-1 w-20">
          <UInput v-model="v1" variant="outline" color="violet" />
        </div>
        <div class="grid grid-rows-subgrid row-span-1 w-20">
          <UInput v-model="v2" variant="outline" color="violet" />
        </div>
        <div class="grid grid-rows-subgrid row-span-1 w-20">
          <UInput v-model="v3" variant="outline" color="violet" />
        </div>
        <div class="grid grid-rows-subgrid row-span-1 w-20">
          <UInput v-model="v4" variant="outline" color="violet" />
        </div>
    </UContainer>
  </UContainer>
</template>