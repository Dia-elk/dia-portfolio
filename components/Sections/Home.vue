<template>
  <div class="h-[calc(100vh-80px)] flex flex-col justify-center items-center">
    <h1 class="text-center text-neutral-800 text-[26px] sm:text-[36px] font-semibold">
      Welcome to the Realm <br>
      of <span class="text-orange-400 font-bold text-[30px] sm:text-[40px]">Laravel Wizardry!</span>
    </h1>

    <p class="sm:max-w-[800px] max-w-[500px] tracking-widest text-[10px] px-4 sm:text-sm text-center text-neutral-500 font-light mt-5 sm:mt-10 leading-loose">
      Discover the realm where lines of code come to life and digital possibilities are limitless.
      Immerse yourself in my collection of <span class="text-orange-400 font-bold">Laravel-powered creations</span>, where creativity meets
      functionality to deliver exceptional web experiences.
    </p>
    <NuxtLink to="/contact" >
      <Button :class="{'mt-10' : true}">Unleash the Magic</Button>
    </NuxtLink>


  </div>
</template>

<script setup>

</script>

