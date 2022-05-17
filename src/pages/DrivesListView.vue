<template>
    <section class="main-container">
        <section class="filters-section">
            <p class="sub-heading">Lista Rezerwacji</p>

            <h1>Jazdy testowe</h1>

            <drivers-filters
                :statuses="statuses"
                @filter="activeFilter = $event"
                :activeFilter="activeFilter"
            />
        </section>

        <section class="drives-section">
            <p v-if="!isLoaded" class="loading-message">Loading...</p>
            <drives-list
                v-else
                :complaints="fiterDrives"
                :statuses="statuses"
            />
            <p v-if="fiterDrives.length == 0 && isLoaded" class="not-found">
                Results not found
            </p>
            <p v-if="isError" class="not-found">
                ERROR! Could not load the data.
            </p>
        </section>
    </section>
</template>

<script>
import DriversFilters from "@/components/DrivesListComponents/DrivesFilters.vue";
import DrivesList from "@/components/DrivesListComponents/DrivesList.vue";
import { fetchsStatuses, fetchComplaints } from "@/services/complainService.js";

export default {
    components: {
        DriversFilters,
        DrivesList,
    },
    data() {
        return {
            statuses: [],
            complaints: [],
            activeFilter: "Wszystkie",
            isLoaded: false,
            isError: false,
        };
    },
    methods: {
        changeStatusIdtoName(complaints, statuses) {
            const statusesMap = new Map(
                statuses.map((status) => {
                    return [status.id, status.name];
                })
            );
            complaints.forEach((complaint) => {
                complaint.status = statusesMap.get(parseInt(complaint.status));
            });
            return complaints;
        },
    },
    computed: {
        fiterDrives() {
            if (this.activeFilter === "Wszystkie") return this.complaints;
            return this.complaints.filter((complaint) => {
                return complaint.status == this.activeFilter;
            });
        },
    },
    async created() {
        try {
            this.statuses = await fetchsStatuses();
            this.complaints = await fetchComplaints();

            this.changeStatusIdtoName(this.complaints, this.statuses);
        } catch (err) {
            this.isError = true;
        }

        this.isLoaded = true;
    },
};
</script>

<style lang="scss" scoped>
.filters-section {
    padding: 48px 0;
    margin: 0 15px;
    .sub-heading {
        text-transform: uppercase;
        padding-bottom: 8px;
        font-family: "Work Sans";
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 1.29px;
        font-weight: 300;
    }
    h1 {
        font-weight: bold;
        font-size: 48px;
        line-height: 57px;
        font-family: "Work Sans";
        font-weight: 500;
        padding-bottom: 24px;
    }
}
.drives-section {
    margin: 0 15px;
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