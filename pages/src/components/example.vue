<template>
  <div>
    <!--只有一个圆时-->
    <!--<div>-->
      <!--<div class="parent flex">-->
        <!--<div class="child"></div>-->
      <!--</div>-->

      <!--<div class="parent flex" style="justify-content: center;">-->
        <!--<div class="child"></div>-->
      <!--</div>-->

      <!--<div class="parent flex" style="justify-content: flex-end;">-->
        <!--<div class="child"></div>-->
      <!--</div>-->

      <!--<div class="parent flex" style="align-items: center;">-->
        <!--<div class="child"></div>-->
      <!--</div>-->
      <!--<div class="parent flex" style="align-items: flex-end;">-->
        <!--<div class="child"></div>-->
      <!--</div>-->

      <!--<div class="parent flex" style="align-items: center; justify-content: center;">-->
        <!--<div class="child"></div>-->
      <!--</div>-->

      <!--<div class="parent flex" style="align-items: center; justify-content: flex-end;">-->
        <!--<div class="child"></div>-->
      <!--</div>-->

      <!--<div class="parent flex" style="align-items: flex-end; justify-content: flex-end;">-->
        <!--<div class="child"></div>-->
      <!--</div>-->
    <!--</div>-->

    <!--有两个圆时-->
    <div>
      <div class="parent flex" style="justify-content: space-between;">
        <div class="child"></div>
        <div class="child"></div>
      </div>
      <div class="parent flex" style="justify-content: space-between; flex-direction: column;">
        <div class="child"></div>
        <div class="child"></div>
      </div>

      <div class="parent flex" style="justify-content: space-between; flex-direction: column;">
        <div class="child"></div>
        <div class="child" style="align-self: flex-end;"></div>
      </div>

      <div class="parent flex" style="justify-content: space-between; flex-direction: column;">
        <div class="child" style="align-self: flex-end;"></div>
        <div class="child"></div>
      </div>

      <div class="parent flex" style="justify-content: space-between; align-items: center; flex-direction: column;">
        <div class="child"></div>
        <div class="child"></div>
      </div>
      <div class="parent flex" style="justify-content: space-between; align-items: center;">
        <div class="child"></div>
        <div class="child"></div>
      </div>

      <div class="parent flex" style="justify-content: space-between; align-items: flex-end;flex-direction: column;">
        <div class="child"></div>
        <div class="child"></div>
      </div>

      <div class="parent flex" style="justify-content: space-between; align-items: flex-end;">
        <div class="child"></div>
        <div class="child"></div>
      </div>

      <div class="parent flex" style="">
        <div class="child"></div>
        <div class="child" style="align-self: center;"></div>
      </div>

      <div class="parent flex" style="justify-content: flex-end;">
        <div class="child" style="align-self: center;"></div>
        <div class="child" ></div>
      </div>
    </div>

    <!--有三个圆圈时-->
    <div>
      <div class="parent flex" style="justify-content: space-between;">
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
      </div>

      <div class="parent flex" style="justify-content: space-between;flex-direction: column;">
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
      </div>

      <div class="parent flex" style="justify-content: space-between;flex-direction: column;">
        <div class="child"></div>
        <div class="child" style="align-self: center;justify-self: center;"></div>
        <div class="child" style="align-self: flex-end;justify-self: flex-end;"></div>
      </div>

      <div class="parent flex" style="justify-content: space-between;flex-direction: column;">
        <div class="child"></div>
        <div class="child" style="align-self: center;justify-self: center;"></div>
        <div class="child" style="align-self: flex-end;justify-self: flex-end;"></div>
      </div>

      <div class="parent flex" style="justify-content: space-between;">
        <div class="child" style="justify-self: flex-end;align-self: flex-end;"></div>
        <div class="child" style="align-self: center;justify-self: center;"></div>
        <div class="child" style=""></div>
      </div>
    </div>

    <!--有四个小圆圈-->
    <div class="parent flex" style="justify-content: space-between;flex-flow: row wrap; align-content: space-between;">
      <div class="child"></div>
      <div class="child" style=""></div>
      <div class="child" style=""></div>
      <div class="child" style=""></div>
    </div>

    <div class="parent flex" style="justify-content: space-between;flex-flow: row-reverse wrap; align-content: space-between;">
      <div class="child"></div>
      <div class="child" style=""></div>
      <div class="child" style=""></div>
      <div class="child" style=""></div>
    </div>


    <div class="parent flex" style="flex-wrap: wrap; align-content: space-between;">
      <div style="flex-basis: 100%; display: flex;justify-content: space-between;">
        <div class="child"></div>
        <div class="child" style=""></div>
      </div>
      <div style="flex-basis: 100%; display: flex;justify-content: space-between;">
        <div class="child" style=""></div>
        <div class="child" style=""></div>
      </div>

    </div>
  </div>




</template>
<script>
  export default {}
</script>
<style>
  .parent {
    width: 200px;
    height: 200px;
    border: 1px solid red;
  }

  .child {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: orange;
  }

  .flex {
    display: flex;
  }
</style>
