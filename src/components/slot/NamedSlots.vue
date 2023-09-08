<template>
    <div style="background-color: black; color:white;">
        <slot class="slots" name="FirstSlot"></slot>
    </div>
    <div style="background-color: crimson; color:black;">
        <slot class="slots" name="SecondSlot"></slot>
    </div>
    <div style="background-color: antiquewhite; color:red;">
        <slot class="slots" name="ThirdSlot"></slot>
    </div>
</template>

<style scoped>

div{
    text-align: center;
}

</style>