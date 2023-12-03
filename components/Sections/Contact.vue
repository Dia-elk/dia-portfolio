<template>
  <div class="h-screen flex px-4 sm:px-6 flex-col justify-center mt-16 md:mt-20 relative">
    <!-- title  -->
    <h1 class="text-neutral-800 text-xl sm:text-2xl font-bold tracking-wide">
      Drop Me a Line: <br>
      Let's Build Something Extraordinary
    </h1>
    <!-- end of title  -->

    <div class="flex justify-center items-center ">

      <form class="flex gap-4 flex-col mt-16  sm:mt-40 sm:px-6 px-4 sm:w-[600px] " @submit.prevent="submitForm">

        <div class="flex flex-col sm:flex-row gap-4">
          <div class="w-full h-10 ">
            <input type="text" v-model="name"
                   class="focus:outline-none focus:ring-0 focus:border-orange-400  w-full placeholder:text-sm  placeholder-neutral-400 h-full rounded-sm bg-transparent border border-neutral-300 px-2 py-1"
                   placeholder="Name"/>
          </div>

          <div class="w-full h-10">
            <input v-model="email" type="email"
                   class="w-full focus:outline-none focus:ring-0 focus:border-orange-400 placeholder:text-sm  placeholder-neutral-400 h-full rounded-sm bg-transparent border border-neutral-300 px-2 py-1"
                   placeholder="Email"/>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="w-full h-10  bg-transparent">
            <input type="text" v-model="typeOfProject"
                   class="focus:outline-none focus:ring-0 placeholder:text-sm focus:border-orange-400 placeholder-neutral-400  w-full h-full rounded-sm bg-transparent border border-neutral-300 px-2 py-1"
                   placeholder="Type of Project"/>
          </div>
          <div class="w-full h-10  bg-transparent flex gap-1">
            <label
                class="w-fit flex text-sm text-neutral-400 justify-center border-neutral-300 focus:border-orange-400 items-center px-4 h-full border "
                for="budget">
              €
            </label>
            <input type="number" id="budget" v-model="budget"
                   class="focus:outline-none focus:ring-0 focus:border-orange-400 placeholder:text-sm  placeholder-neutral-400  w-full h-full rounded-sm bg-transparent border border-neutral-300 px-2 py-1"
                   placeholder="Budget"/>
          </div>
        </div>
        <div class="w-full h-36 ">
          <textarea v-model="details"
                    class="w-full bg-transparent focus:outline-none focus:ring-0 focus:border-orange-400 placeholder:text-sm  placeholder-neutral-400  h-full rounded-sm border border-neutral-300 px-2 py-1 resize-none"
                    placeholder="Additional details"></textarea>
        </div>

        <div>

          <div v-if="!isLoading" class="flex gap-2 flex-col justify-center items-center mt-16 cursor-pointer" @mouseenter="isHover"
               @mouseleave="isNotHover">
            <button :disabled="email===''" type="submit" class="flex gap-2 flex-col items-center">
              <div class="text-orange-400 font-semibold">Make Magic Happen!</div>
              <div class="transition-all duration-300 h-[2px] bg-orange-400"
                   :class="isBtnHover ? 'w-[200px] ' :'w-20 ' "></div>
            </button>
          </div>
          <div class="flex justify-center text-sm mt-6 text-red-600 transition-all duration-500"
               v-show="isBtnHover && email === '' && !showMsg">
            the email is required
          </div>

          <div v-if="isLoading" class="flex justify-center items-center mt-10 ">
            <Spinner/>
          </div>
          <div v-show="showMsg" class="flex w-full justify-center text-sm text-green-600">
            {{ msg }}
          </div>
        </div>
      </form>
    </div>

  </div>
</template>
<script setup>

import axios from "axios";
import Spinner from "~/components/Spinner.vue";


let name = ref("");
let email = ref("");
let typeOfProject = ref("");
let budget = ref("");
let details = ref("");
let isLoading = ref(false);


const isBtnHover = ref(false)
let msg = ref('Your message has been Sent successfully')
let showMsg = ref(false)

function isHover() {
  isBtnHover.value = true;
}

function isNotHover() {
  isBtnHover.value = false;
}

function toggleShowMsg() {
  showMsg.value = !showMsg.value
}

function onSubmitSuccess() {
  toggleShowMsg();
  name.value = "";
  email.value = "";
  typeOfProject.value = "";
  budget.value = "";
  details.value = "";
  setTimeout(toggleShowMsg, 1000)
}


function submitForm() {
  isLoading.value = true;
  axios.post('https://diaelk.dev/api/contact-me', {
    name: name.value,
    email: email.value,
    typeOfProject: typeOfProject.value,
    budget: budget.value,
    details: details.value,
  }).then(res => {
    isLoading.value = false;
    onSubmitSuccess();
  }).catch(error => {
    isLoading.value = false;
  });

}

</script>
