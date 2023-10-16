<template>
  <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
  <RouterLink v-bind="$props" custom v-slot="{ isActive, href, navigate }">
    <a v-if="type != 'mobile'" v-bind="$attrs" :href="href" @click="navigate"
      class="inline-flex items-center text-sm font-medium border-b-2 px-1 pt-1" :class="{
        'border-indigo-500 text-gray-900': isActive,
        'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': !isActive
      }">
      <slot />
    </a>
    <DisclosureButton v-else v-bind="$attrs" as="a" :href="href" @click="navigate"
      class="block border-l-4 py-2 pl-3 pr-4 text-base font-medium" :class="{
        'bg-indigo-50 border-indigo-500 text-indigo-700': isActive,
        'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700': !isActive
      }">
      <slot></slot>
    </DisclosureButton>
  </RouterLink>
</template>
<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { computed } from 'vue';
import { RouterLink } from 'vue-router'
const props = defineProps({
  ...RouterLink.props,
  type: String
})

</script>