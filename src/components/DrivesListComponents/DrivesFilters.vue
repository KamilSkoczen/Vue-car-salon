<template>
    <ul class="filters-list">
        <li
            v-for="status in statuses"
            :key="status.id"
            @click="$emit('filter', status.name)"
            :class="isFilterActive(status.name)"
        >
            {{ status.name }}
        </li>
    </ul>
</template>


<script>
export default {
    props: {
        statuses: Object,
        activeFilter: String,
    },
    methods: {
        isFilterActive(status) {
            return this.activeFilter === status ? "active" : "";
        },
    },
};
</script>


<style lang="scss" scoped>
@import "@@/scss/variables.scss";

.filters-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: $breakpoint-mobile) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

    li {
        padding: 13px 16px;
        background-color: $milk-white;
        color: $light-gray;
        border-radius: 20px;
        margin-right: 16px;
        cursor: pointer;
        font-family: "Work Sans";
        font-size: 14px;
        line-height: 16px;
        font-weight: 400;

        &.active {
            background-color: $black;
            color: $white;
        }
        @media screen and (max-width: $breakpoint-mobile) {
            max-width: 500px;
            width: calc(50% - 20px);
            margin: 8px 10px;
        }
    }
}
</style>