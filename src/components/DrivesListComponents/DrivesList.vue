<template>
    <section>
        <ul>
            <li v-for="complaint in complaints" :key="complaint.reservation_id">
                <single-drive
                    :complaint="complaint"
                    :statuses="statuses"
                ></single-drive>
            </li>
        </ul>
    </section>
</template>


<script>
import SingleDrive from "./SingleDrive.vue";

export default {
    components: { SingleDrive },
    props: {
        complaints: Object,
        statuses: Object,
    },
};
</script>


<style lang="scss" scoped>
@import "@@/scss/variables.scss";
ul {
    list-style: none;
    padding: 0;
}
</style>