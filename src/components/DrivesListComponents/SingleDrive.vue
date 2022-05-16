<template>
    <div class="card-wrapper" :class="checkIfRefused">

        <p class="reservation-number">Rezerwacja nr {{getExactNumber}}</p>

        <p class="reservation-status" :class="complaint.status == 'Nowe' ? 'new' : ''">{{complaint.status}}</p>

        <p>{{complaint.name}}</p>
        
        <p>{{getNumberWithSpaces}}</p>

        <p>Wizyta w dniu: {{getCleanDate}} o godz. {{getCleanHour}}</p>

        <div class="btns-wrapper" v-if="complaint.status == 'Nowe'">
            <base-button>Oznacz jako zrealizowane</base-button>

            <base-button type="secondary">Odmów wizytę</base-button>
        </div>
    </div>
    
</template>


<script>
import dayjs from "dayjs"
export default {
    props: {
        complaint: Object,
        statuses: Object
    },
    computed:{
        getExactNumber() {
            const fullNumber = this.complaint.reservation_id
            const exactNumber = fullNumber.substring(0, fullNumber.indexOf("/"));

            return exactNumber
        },
        getCleanDate() {
            return dayjs(this.complaint.reservation_date).format('DD.MM.YYYY')
        },
        getCleanHour() {
            return dayjs(this.complaint.reservation_date).format('HH:mm')
        },
        getNumberWithSpaces() {
            const phoneNumber = this.complaint.user.phone
            const spacedPhoneNumber = phoneNumber.replace(/(.{3})/g,"$1 ")
            
            return spacedPhoneNumber
        },
        checkIfRefused() {
            const rejectedStatusId = "3"
            return this.complaint.status === rejectedStatusId ? 'refused' : ''
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@@/scss/variables.scss";

.card-wrapper {
    padding:16px;
    margin:16px 0;
    border: 1px solid $box-shadow-white;
    position: relative;
    &.refused {
        p:not(.reservation-status){
            color:$grayish;
        }
    }

    .reservation-number {
        font-weight: bold;
        padding-bottom: 8px;
    }
    .reservation-status{
        position: absolute;
        right: 20px;
        top: 10px;
        background-color: $black;
        border-radius: 20px;
        padding:2px 6px;
        color:$white;

        &.new {
            background-color: $mustard;
        }
    }
    .btns-wrapper {
        margin:24px 0px; 

        button {
            margin-right:15px;
        }
    }
}


</style>