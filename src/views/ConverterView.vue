<template>
  <div class="px-6  py-10 sm:py-14">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Currency converter</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">Convert one currency into another selecting from the selection
        options and entering an amount.</p>
    </div>
  </div>
  <div class=" flex gap-4 ">
    <div class="currency">
      <select class=" border" name="" id="" v-model="from">
        <option v-for="currency of currencies" :value="currency.code">{{ currency.code }}</option>
      </select>
      <input type="number" v-model="amount"/>

    </div>
    <div class="currency">
      <select class=" border" name="" id="" v-model="to">
        <option v-for="currency of currencies" :value="currency.code">{{ currency.code }}</option>
      </select>
      <input type="number" :value="conversion"/>
    </div>
  </div>
  <!-- Implement a UI that would behave like a currency converter -->
  <div>
    <!-- <div>TO IMPLEMENT :D we got to show the rate and the amount in the new currency</div>
    <div>(Optional) also add a custom date option default is now</div> -->
    <!-- <div class="flex flex-row items-center justify-around">
      <div class="font-bold">You can take the following image as base</div>
      <img class="h-[556px]"
        src="https://mir-s3-cdn-cf.behance.net/projects/404/2b3f91152882841.Y3JvcCwxNjMwLDEyNzQsMCwxMg.png" />
    </div> -->

  </div>
</template>
<script setup>
import useAxios from "@/composables/useAxios.js"
import { computed, onMounted, reactive, ref, watch } from "vue";

// TODO implement the logic to convert by calling the correct endpoint for more information check: https://fxratesapi.com/docs/endpoints/convert-currency
const from = ref(null)
const to = ref(null)
const date = ref(null)
const amount = ref(null)
const conversion = ref(0)

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

watch(amount, async (newValue) => {

  let date = new Date();
  console.log(date)

  const today = `${date.getFullYear()}-${date.getMonth() +1 }-${date.getDate()}`
  console.log(today)

  const options = {
    "method": "GET",
    "url": `https://api.fxratesapi.com/convert?from=${from.value}&to=${to.value}&date=${today}&amount=${newValue}&format=json`
  };

  if (from.value && to.value && amount.value) {
    axios.request(options).then(function (response) {
      console.log(response.data);
      conversion.value = response.data.result
    }).catch(function (error) {
      console.error(error);
    });
  }
})

onMounted(async()=>{
  await getCurrencies();
})
</script>

<style>
.currency{
  @apply border p-4 flex flex-col gap-4;
}

</style>