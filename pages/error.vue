<template>
  <NuxtLayout name="error">
    <div class="h-[calc(100vh-80px)] flex justify-center items-center">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-[140px] font-bold text-orange-400">{{ props.error.statusCode }}</h1>
        <h2 class="text-2xl font-semibold text-gray-800">Oops! something's missing!</h2>
        <p class="text-gray-400">{{ props.error.message}}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
let props = defineProps({
  error: Object,
})
useHead({
  title: props.error.statusCode +' '+props.error.message
})
</script>
