<template>
  <div>
    <!--<div class="box" style="flex-flow: row wrap;border: 1px solid red;justify-content: space-around;">-->
      <!--<h1 class="child" style="order: 2;flex-grow: 1;">hello child1</h1>-->
      <!--<h1 class="child" style="order: 0;flex-grow: 1;">hello child2</h1>-->
      <!--<h1 class="child" style="order: 1;flex-grow: 1;">hello child3</h1>-->
    <!--</div>-->

    <!--<div class="box" style="flex-flow: row nowrap;height:500px;border: 1px solid red;justify-content: space-around;">-->
      <!--<h1 class="child" style="order: 2;">hello child1</h1>-->
      <!--<h1 class="child" style="order: 0;align-self: center">hello child2</h1>-->
      <!--<h1 class="child tt" style="order: 1;align-self: stretch">hello child3</h1>-->
    <!--</div>-->
    <div class="box" style="flex-flow: row nowrap;height:500px;border: 1px solid red;justify-content: flex-start;flex-direction: row-reverse;align-items: flex-end;">
      <h1 class="child" style="order: 2;height: 50px;padding: 0; margin: 0;">hello child1</h1>
      <h1 class="child" style="order: 2;height: 50px;padding: 0; margin: 0;">hello child2</h1>
      <h1 class="child" style="order: 2;height: 50px;padding: 0; margin: 0;">hello child3</h1>
    </div>

  </div>

</template>

<script>
  import './child.css'
  export default {}
</script>

<style>
@media (max-width: 500px) {
  .tt {
    display: none;
  }

}
</style>
