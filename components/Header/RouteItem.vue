<template>
  <div class="relative">
    <a
      href="#"
      onclick="return false"
      @click="navigate"
      class="text-sm/6 text-white hover:underline underline-offset-4 font-semibold flex items-center gap-1 hover:text-fnba-green-500 w-fit whitespace-nowrap"
    >
      <slot>{{ title }}</slot>
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "TITLE",
    required: false,
  },
  route: {
    type: String,
    required: true,
  },
});

function navigate() {
  useNavigate(props.route);
}
</script>
