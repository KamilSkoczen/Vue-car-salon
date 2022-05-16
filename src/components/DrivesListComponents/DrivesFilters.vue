<template>
    <ul>
        <li @click="$emit('filter','all')" key="all" :class="isFilterActive('all')">Wszystkie</li>
        <li v-for="status in statuses" :key="status.id" @click="$emit('filter', status.id)" :class="isFilterActive(status.id)">{{status.name}}</li>
    </ul>
</template>


<script>
export default {
    props:{
    statuses: Object,
    activeFilter: String
    },
    methods:{
        isFilterActive(status) {         
            return this.activeFilter === status ? 'active':'nie'
        }
    },
}
</script>


<style lang="scss" scoped>
@import "src/scss/variables.scss";

ul {
    list-style: none;
    padding:0;
    display: flex;
    flex-direction: row;
    @media screen and (max-width:$breakpoint-mobile){
        flex-direction: column;
    }

    li {
        padding:8px;
        background-color:$milk-white;
        color:$light-gray;
        border-radius: 20px;
        margin:8px;
        cursor: pointer;
        &.active {
            background-color: $black;
            color: $white;
        }
        @media screen and (max-width:$breakpoint-mobile){
        max-width: 500px;
        width: 100%;
        margin: 8px auto;
    }
    }
}

</style>