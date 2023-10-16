<template>
  <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-indigo-100/25 w-full shadow-lg">
    <div class="px-4 py-5 sm:px-6 flex gap-3">
      <!-- TODO Also show the 'symbol_native' property -->
      <h3>{{ currency?.symbol_native }}</h3>
      <h3 class="text-base font-semibold leading-6 text-gray-900">{{ currency?.code }}</h3>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Name</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ currency?.name }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Plural name</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{currency?.name_plural}}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Decimal digits & rounding</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{currency?.decimal_digits}} -
            {{currency?.rounding}}</dd>
        </div>

      </dl>

    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  currency: Object
})
</script>