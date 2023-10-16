
<template>
  <main class="w-full">
    <!-- <TheWelcome /> -->
    <div class=" py-10 sm:py-14">
      <div class="mx-auto max-w-7xl ">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <p class="text-base font-semibold leading-7 text-indigo-600">Look at your favorites currencies</p>
          <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">FTX Currencies</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">In this awesome website you will be able to see you favorite
            currencies.</p>
        </div>
        <div class="flex items-center my-2">
          <div class="w-full max-w-lg lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input v-model="search" id="search" name="search"
                class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search" type="search" />
            </div>
          </div>
        </div>
      </div>
      <p v-if="isLoading && !currencies.length">Content is Loading</p>
      <p v-if="!isLoading && !currencies.length">There are no currencies</p>
      <div v-if="!isLoading && currencies.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 mt-8">
        <CurrencyCard v-for="currency in searchCurrencies" :key="currency.code" :currency="currency" />
      </div>
    </div>
  </main>
</template>
<script setup>
import useAxios from "@/composables/useAxios.js"
import CurrencyCard from "@/components/currencies/CurrencyCard.vue";
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

import { computed, onMounted, reactive, ref } from "vue";
const axios = useAxios()
const currencies = reactive([])
const search = ref("")
const isLoading = ref(true)

const getCurrencies = async () => {
  try {
    const response = await axios.get("/currencies")
    const data = response.data
    for (const key in data) {
      currencies.push(data[key])
    }
    isLoading.value = false;
  } catch (error) {
    console.log(error)
  }
}

const searchCurrencies = computed(
  () => currencies.filter(currency => {
    console.log(currency)
    return currency.name.toUpperCase().includes(search.value.toUpperCase()) || currency.code.toUpperCase().includes(search.value.toUpperCase())})
)

onMounted(async()=>{
  await getCurrencies();
})
//TODO implement with a computed property a filter with the search value to check if the string is the name or the code case insensitive

//TODO (Extra) based on the decimal_digits group the ones with the value 2 as non crypto currencies and the ones with > 2 as crypto

//TODO call the get currencies in the correct vue lifecycle 
</script>
