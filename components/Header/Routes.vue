<template>
  <div class="flex items-center justify-center gap-x-8">

    <HeaderRouteItem route="/hello">Hello</HeaderRouteItem>

    <HeaderSubMenu title="Dropdown">
      <HeaderRouteItem route="/">Home</HeaderRouteItem>
      <HeaderRouteItem route="/hello">Hello</HeaderRouteItem>

      <HeaderSubMenu title="Sub Drop Down">
        <HeaderRouteItem route="/">Home</HeaderRouteItem>
        <HeaderRouteItem route="/hello">Hello</HeaderRouteItem>
        <HeaderRouteItem route="/about">About</HeaderRouteItem>
        <HeaderSubMenu title="Another Sub Drop Down">
          <div>Going all the way</div>
          <div>Down</div>
        </HeaderSubMenu>
      </HeaderSubMenu>
    </HeaderSubMenu>
  </div>
</template>
