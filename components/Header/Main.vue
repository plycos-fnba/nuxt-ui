<template>
  <header
    class="bg-fnba-green-800 backdrop-blur border-b-2 -mb-px sticky top-0 z-50 border-fnba-green-950"
  >
    <div
      class="mx-auto px-4 grid grid-cols-3 items-center h-[auto] min-h-[60px]"
    >
      <HeaderLogo />

      <HeaderRoutes />

      <div class="justify-self-end mr-96">
        <HeaderRouteItem route="/about">About</HeaderRouteItem>
      </div>
    </div>
  </header>
</template>
