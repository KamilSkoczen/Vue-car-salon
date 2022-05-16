<template>
    <button :class="type">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props:['type']
}
</script>


<style lang="scss" scoped>
@import "src/scss/variables.scss";
button{
    text-transform: uppercase;
    padding:12px 32px;
    background-color: $black;
    color: $white;
    outline:none;
    border:none;
    box-shadow: 0px 0px 5px 0px $box-shadow-dark;
    cursor: pointer;
    max-width: 300px;
    width: 100%;
    &.secondary {
        background-color: $grayish;
    }
}

</style>