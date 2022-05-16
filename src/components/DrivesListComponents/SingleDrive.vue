<template>
    <div class="card-wrapper" :class="checkIfRefused">

        <p class="reservation-number">Rezerwacja nr {{getExactNumber}}</p>

        <p class="reservation-status" :class="changeStatusIdtoName == 'Nowe' ? 'new' : ''">{{changeStatusIdtoName}}</p>

        <p>{{complaint.user.name}}</p>
        
        <p>{{getNumberWithSpaces}}</p>

        <p>Wizyta w dniu: {{getCleanDate}} o godz. {{getCleanHour}}</p>

        <div class="btns-wrapper" v-if="changeStatusIdtoName == 'Nowe'">
            <base-button>Oznacz jako zrealizowane</base-button>

            <base-button type="secondary">Odmów wizytę</base-button>
        </div>
    </div>
    
</template>


<script>

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
            const date = new Date(this.complaint.reservation_date)
            const cleanDate = ("0" + date.getDate()).slice(-2) + '.' + ("0" + (date.getMonth() + 1)).slice(-2) + '.' + ("0" + date.getYear()).slice(-2)

            return cleanDate
        },
        getCleanHour() {
            const date = new Date(this.complaint.reservation_date)
            const cleanDate = ("0" + (date.getHours() + 1)).slice(-2) + ':' + ("0" + (date.getMinutes() + 1)).slice(-2)

            return cleanDate
        },
        getNumberWithSpaces() {
            const phoneNumber = this.complaint.user.phone
            const spacedPhoneNumber = phoneNumber.replace(/(.{3})/g,"$1 ")
            
            return spacedPhoneNumber
        },
        checkIfRefused() {
            return this.complaint.status === "3" ? 'refused' : ''
        },
        changeStatusIdtoName(){
            const itemStatusID = this.complaint.status;
            let itemStatusName;
            const arrayOfStatuses = this.statuses

            const statusesMap = new Map(
                arrayOfStatuses.map(object => {
                    return [object.id, object.name];
                }),
                );

            for (let[id,name] of statusesMap){
                if (itemStatusID == id) {
                    itemStatusName = name
                }
            }
            return itemStatusName
        }
    }
}
</script>


<style lang="scss" scoped>
@import "src/scss/variables.scss";

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