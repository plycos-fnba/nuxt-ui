<template>
  <div
    ref="componentRef"
    class="relative z-auto whitespace-nowrap"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @focusin="(payload) => handleFocus(payload)"
    @keypress.space="hovered = true"
  >
    <a
      ref="titleRef"
      href="#"
      class="text-sm/6 font-semibold flex items-center justify-between gap-1.5"
      :class="{ 'text-fnba-green-500': hovered }"
      onclick="return false"
    >
      <span>{{ title }}</span
      ><span>{{ statusIcon }}</span>
    </a>
    <div v-if="hovered" class="absolute" :class="position">
      <div
        ref="listRef"
        class="bg-gray-800 border-l-2 border-fnba-green-800 shadow-lg rounded-lg p-4 m-4"
        :class="submenuItemWidth"
      >
        <div class="flex flex-col gap-y-2 relative">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});

provide("parent", "HeaderSubMenu");

const componentRef: Ref<HTMLElement | null> = ref(null);
const titleRef: Ref<HTMLElement | null> = ref(null);
const listRef: Ref<HTMLElement | null> = ref(null);

const parent: string = inject("parent", "");

const hovered = ref(false);

useEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key == "Escape") hovered.value = false;
});

useDetectOutsideClick(componentRef, () => {
  hovered.value = false;
});

function handleFocus(e: FocusEvent) {
  console.log("focus");
  if (parent == "HeaderSubMenu") {
    if (e.relatedTarget == null) hovered.value = false;
    else hovered.value = true;
  }
}

const statusIcon = computed(() => {
  if (parent == "HeaderSubMenu") return hovered.value ? "˃" : "˂";
  return hovered.value ? "˄" : "˅";
});

const position = computed(() => {
  if (parent == "HeaderSubMenu") return "left-full -top-full";
  return "-left-6 top-4";
});

const submenuItemWidth = computed(() => {
  if (hovered.value) {
    const titleWidth = titleRef.value?.offsetWidth;
    const submenuWidth = listRef.value?.offsetWidth;
    if (submenuWidth! < titleWidth!) return "w-[120%]";
  }
  return "w-fit";
});
</script>
