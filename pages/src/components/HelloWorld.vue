<template>
    <!--<div class="hello" style="flex-direction: column-reverse;">-->
      <!--<h1 class="border">{{ msg }}1</h1>-->
      <!--<h1 class="border">{{ msg }}2</h1>-->
      <!--<h1 class="border">{{ msg }}3</h1>-->
    <!--</div>-->

    <!--<div class="hello box" style="flex-wrap: wrap-reverse;">-->
      <!--<h1 class="border w-50">{{ msg }}1</h1>-->
      <!--<h1 class="border w-50">{{ msg }}2</h1>-->
      <!--<h1 class="border w-50">{{ msg }}3</h1>-->
    <!--</div>-->

    <!--<div class="hello box" style="flex-flow:row-reverse wrap-reverse;">-->
      <!--<h1 class="border ">{{ msg }}1</h1>-->
      <!--<h1 class="border ">{{ msg }}2</h1>-->
      <!--<h1 class="border ">{{ msg }}3</h1>-->
    <!--</div>-->

    <!--<div class="hello box" style="justify-content:center">-->
      <!--<h1 class="border ">{{ msg }}1</h1>-->
      <!--<h1 class="border ">{{ msg }}2</h1>-->
      <!--<h1 class="border ">{{ msg }}3</h1>-->
    <!--</div>-->

    <!--<div style="width: 1500px;height: 500px;border: 1px solid blue">-->
      <!--<div class="hello box" style="justify-content:space-around">-->
        <!--<h1 class="border ">{{ msg }}1</h1>-->
        <!--<h1 class="border ">{{ msg }}2</h1>-->
        <!--<h1 class="border ">{{ msg }}3</h1>-->
      <!--</div>-->
    <!--</div>-->


    <!--<div >-->
      <!--<div style="width: 1000px;height: 500px;border: 1px solid blue;align-items:baseline;justify-content: center;" class="hello box" >-->
        <!--<h1 class="border" style="height: 200px;">{{ msg }}1</h1>-->
        <!--<h1 class="border ">{{ msg }}2</h1>-->
        <!--<h1 class="border ">{{ msg }}3</h1>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div id="main">-->
      <!--<div style="background-color:coral;"></div>-->
      <!--<div style="background-color:lightblue;"></div>-->
      <!--<div style="background-color:khaki;"></div>-->
    <!--</div>-->
    <div id="main">
      <div style="background-color:coral;"></div>
      <div style="background-color:lightblue;"></div>
      <div style="background-color:pink;"></div>
    </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'hello world'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
  #main {
    width: 170px;
    height: 300px;
    border: 1px solid #c3c3c3;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    align-content: flex-start;

  }

  #main div {
    width: 70px;
    height: 70px;
  }
</style>
