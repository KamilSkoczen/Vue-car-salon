<template>
    <header>
        <nav>
            <div class="nav-wrapper">
                <div class="logo-container">
                    <router-link to="/">
                        <div class="logo">LOGO</div>

                        <p>Dare your ego</p>    
                    </router-link>
                </div>
                
                <ul class="main-links">
                    <li>
                        <router-link to="/find-a-dealer">Find a Dealer</router-link>
                    </li>

                    <li>
                        <router-link to="/search">Search</router-link>
                    </li>

                    <li @click="expandMenu" class="submenu-trigger">User Name
                        <ul class="expandable-menu" :class="toggleExpandableMenu">
                            <li>
                                <router-link to="/drives">Lista rezerwacji</router-link>
                            </li>

                            <li>Moje konto</li>

                            <li>Ustawienia</li>

                            <li>Wyloguj się</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data(){
        return{
            isMenuExpanded: false
        }
    },
    methods: {
        expandMenu() {
            this.isMenuExpanded = !this.isMenuExpanded
        }
    },
    computed: {
        toggleExpandableMenu(){
            return  this.isMenuExpanded ? 'expanded':''
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@@/scss/variables.scss";

header {
    background-color: $dark-navy-blue;
    height: 100px;
    width: 100%;
    display: flex;
}
nav {
    color: $white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1340px;
    width: 100%;
    margin: auto;
    .nav-wrapper {
        margin:0 25px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;

            @media screen and (max-width:$breakpoint-mobile){
                flex-direction: column;
            }
    }
    .logo-container {
        display: flex;
        align-self: center;
        flex-direction: row;
        margin-left: 15px;

        a{
        display: flex;
        flex-direction: row;
        text-decoration: none;
        color:$white;
        }
        .logo {
            padding:8px;
        }
        p {
            padding:8px
        }
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        padding: 0;
        margin-right: 15px;
        &.main-links{
            @media screen and (max-width:$breakpoint-mobile){
                display: flex;
                justify-content: space-around;
            }
            li{
                user-select:none;
                padding:8px;
                cursor:pointer;
                a {
                    color:$white;
                    text-decoration: none;
                }
                &.submenu-trigger {
                    position: relative;
                }
            }
        }
        &.expandable-menu {
            display: none;
            margin: 0;
            &.expanded {
                display: block;
                position: absolute;
                background-color: $white;
                box-shadow: 0px 0px 5px 0px $box-shadow-dark;
                top: 40px;
                max-width: 160px;
                width: max-content;
                left: 50%;
                right: auto;
                transform: translateX(-50%);
                @media screen and (max-width:$breakpoint-mobile){
                    right:15px;
                }
                li, a{
                    color:$light-gray;
                    cursor:pointer;
                    &:hover{
                        color:$black;
                    }
                }
            }
        }  
    }
}
</style>