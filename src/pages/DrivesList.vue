<template>
    <section class="main-container">
        <section class="filters-section">
            <p>Lista Rezerwacji</p>

            <h1>Jazdy testowe</h1>

            <drivers-filters :statuses="statuses" @filter="fiterDrives" :activeFilter="activeFilter"></drivers-filters>
        </section>

        <section class="drives-section">
            <p v-if="!isLoaded" class="loading-message">Loading...</p>
            <drives-list :complaints="complaints" :statuses="statuses"></drives-list>
            <p v-if="complaints.length == 0 && isLoaded" class="not-found">Results not found</p>
        </section>
    </section>

</template>

<script>
import DriversFilters from '@/components/DrivesListComponents/DrivesFilters.vue'
import DrivesList from '@/components/DrivesListComponents/DrivesList.vue'
import * as dbConnections from '@/services/dbconnection.js'


export default {
    components: {
        DriversFilters,
        DrivesList
    },
    data() {
        return {
            statuses: [],
            complaints: [],
            primaryComplaints:[],
            activeFilter: "all",
            isLoaded:false
        }
    },
    methods:{
        fiterDrives(status) {
            this.activeFilter = status

            if(status === 'all') return this.complaints = this.primaryComplaints

            this.complaints = this.primaryComplaints

            let filteredComplaints = this.complaints.filter((complaint)=>{
                return complaint.status == status
            })

            this.complaints = filteredComplaints
        }
    },
    async mounted() {
        this.statuses = await dbConnections.fetchsStatuses()
        this.complaints = await dbConnections.fetchComplaints().then(
            this.isLoaded = true
        )
        this.primaryComplaints = this.complaints
    }
}
</script>

<style lang="scss" scoped>

.filters-section {
    padding:32px 0;
    p {
        text-transform: uppercase;
        padding:8px;
    }
    h1 {
        font-weight: bold;
        font-size: 32px;
         padding:8px 8px 16px;
    }
}
.drives-section {
    .loading-message {
        font-size: 32px;
        text-align: center;
        font-weight: bold;
    }
    .not-found {
    font-weight: bold;
    text-align: center;
    font-size: 24px;
}
}

</style>