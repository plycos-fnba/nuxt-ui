<template>
  <div class="relative">
    <a
      href="#"
      onclick="return false"
      @click="navigate"
      class="text-sm/6 font-semibold flex items-center gap-1 hover:text-fnba-green-500 w-fit whitespace-nowrap"
    >
      <slot />
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  route: {
    type: String,
    required: true,
  },
});

function navigate() {
  useNavigate(props.route);
}
</script>
