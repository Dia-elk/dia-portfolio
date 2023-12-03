<template>
  <div>
    <nav>
      <ul class="sm:flex sm:space-x-6 md:space-x-10 hidden">
        <NavItem href="/" :active= "page.path==='/'" > Epicenter </NavItem>
        <NavItem href="/works" :active= "page.path==='/works'" v-if="false">My Masterpieces</NavItem>
        <NavItem href="/services" :active= "page.path==='/services'" >Magical Offerings</NavItem>
        <NavItem href="/about" :active= "page.path==='/about'" >Behind the Curtain</NavItem>
        <NavItem href="/contact" :active= "page.path==='/contact'" >Say Hi, I Won't Bite</NavItem>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const page = useRoute()

</script>
