<template>
  <fieldset>
    <label class="block text-sm font-medium text-gray-700">
      <slot></slot>
    </label>
    <div class="flex flex-col space-y-3">
      <div
        v-for="item in friends"
        :key="`${item.name}-radio`"
        class="flex flex-row space-x-2"
      >
        <img
          v-if="item.image"
          :src="item.image"
          :alt="item.image"
          class="shrink-0 h-6 w-6 rounded-full"
        />
        <span
          id="privacy-setting-0-label"
          class="block text-sm font-medium text-purple-900"
        >
          {{ item.full_name }}
        </span>
      </div>
    </div>
  </fieldset>
</template>
<script>
export default {
  name: 'TgPriceSelectedFriends',
  props: {
    friends: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
