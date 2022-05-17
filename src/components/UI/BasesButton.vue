<template>
    <button :class="type">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        type: String,
    },
};
</script>


<style lang="scss" scoped>
@import "@@/scss/variables.scss";
button {
    text-transform: uppercase;
    font-family: "Work Sans";
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 1.71px;
    padding: 14px 32px;
    color: $white;
    background-color: $black;
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px 0px $box-shadow-dark;
    cursor: pointer;
    max-width: 300px;
    width: 100%;
    min-height: 42px;
    &.secondary {
        opacity: 25%;
    }
}
</style>