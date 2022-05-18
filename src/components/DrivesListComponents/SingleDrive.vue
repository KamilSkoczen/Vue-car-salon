<template>
    <div class="card-wrapper" :class="checkIfRefused">
        <p class="reservation-number">Rezerwacja nr {{ getExactNumber }}</p>

        <p
            class="reservation-status"
            :class="complaint.status == 'Nowe' ? 'new' : ''"
        >
            {{ complaint.status }}
        </p>

        <p class="reservation-details">{{ complaint.user.name }}</p>

        <p class="reservation-details">{{ getNumberWithSpaces }}</p>

        <p class="reservation-details">
            Wizyta w dniu: {{ getCleanDate }} o godz. {{ getCleanHour }}
        </p>

        <div class="btns-wrapper" v-if="complaint.status == 'Nowe'">
            <base-button>Oznacz jako zrealizowane</base-button>

            <base-button type="secondary">Odmów wizytę</base-button>
        </div>
    </div>
</template>


<script>
import dayjs from "dayjs";
export default {
    props: {
        complaint: Object,
        statuses: Object,
    },
    computed: {
        getExactNumber() {
            const fullNumber = this.complaint.reservation_id;
            const exactNumber = fullNumber.substring(
                0,
                fullNumber.indexOf("/")
            );

            return exactNumber;
        },
        getCleanDate() {
            return dayjs(this.complaint.reservation_date).format("DD.MM.YYYY");
        },
        getCleanHour() {
            return dayjs(this.complaint.reservation_date).format("HH:mm");
        },
        getNumberWithSpaces() {
            const phoneNumber = this.complaint.user.phone;
            const spacedPhoneNumber = phoneNumber.replace(/(.{3})/g, "$1 ");

            return spacedPhoneNumber;
        },
        checkIfRefused() {
            const rejectedStatusId = "Odmówione";
            return this.complaint.status === rejectedStatusId ? "refused" : "";
        },
    },
};
</script>


<style lang="scss" scoped>
@import "@@/scss/variables.scss";

.card-wrapper {
    padding: 24px;
    margin: 24px 0;
    border: 1px solid $box-shadow-white;
    position: relative;

    &:first-of-type {
        margin-top: 0px;
    }
    &.refused {
        p:not(.reservation-status) {
            color: $grayish;
        }
    }

    .reservation-number {
        padding-bottom: 8px;
        font-family: "Work Sans";
        font-size: 18px;
        line-height: 21px;
        font-weight: 500;
    }
    .reservation-details {
        font-family: "Work Sans";
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
    }
    .reservation-status {
        position: absolute;
        right: 12px;
        top: 12px;
        background-color: $black;
        border-radius: 20px;
        padding: 2px 10px;
        color: $white;
        font-family: "Work Sans";
        font-size: 11px;
        line-height: 16px;
        font-weight: 400;

        &.new {
            background-color: $mustard;
        }
    }
    .btns-wrapper {
        margin-top: 24px;
        @media screen and (max-width: $breakpoint-mobile) {
            display: flex;
            flex-direction: column;
        }
        button {
            margin-right: 16px;

            @media screen and (max-width: $breakpoint-mobile) {
                margin-right: 0;
                margin-bottom: 24px;
                &:last-of-type {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>