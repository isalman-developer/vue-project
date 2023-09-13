<script setup>
import Parent from "../../components/props-drilling/Parent.vue";
</script>
<template>
  <div>
    <h2>
      Props drilling means passing data from parent to child component through
      multiple inheritance.
    </h2>
    <p>
      Suppose i want to send an array of numbers from parent -> to greate grand
      child component.
    </p>
    <p>
      To acheive this i have to go this way, Define state in parent and then
      pass it to -> child as a prop, child will pass it -> to Grand child as a
      prop and grand child will pass it as a prop -> to greate grand child
    </p>
    <ol>
      <li>Parent</li>
      <li>Child</li>
      <li>Grand Child</li>
      <li>Great Grand Child</li>
    </ol>
    <p>
      while the data is not required in Child and Grand child component but
      still i have to pass it to these components bcoz this is the flow of defining componnets and props.
    </p>
  </div>
  <br />
  <p>
    we can prevent passing it to great grand child without passing it across the
    other components using provide and inject.
  </p>
  <p style="margin-bottom: 50px">
    in parent <strong>define</strong> provide and then
    <strong>inject</strong> it in the component where you need it.
  </p>

  <Parent />
</template>

<style scoped>
strong {
  font-weight: bold;
}
</style>
