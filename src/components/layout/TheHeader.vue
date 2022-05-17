<template>
    <header>
        <nav>
            <div class="nav-wrapper">
                <div class="logo-container">
                    <router-link to="/">
                        <div class="logo">
                            <img
                                src="@/assets/images/Logo.svg"
                                alt="Lamborghini"
                            />
                        </div>

                        <p class="logo-desc">Dare your ego</p>
                    </router-link>
                </div>

                <ul class="main-links">
                    <li>
                        <router-link to="/find-a-dealer">
                            <img
                                src="@/assets/icons/pin.svg"
                                alt=""
                                class="nav-icon"
                            />
                            <p class="nav-link-text">Find a Dealer</p>
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/search">
                            <img
                                src="@/assets/icons/search.svg"
                                alt=""
                                class="nav-icon"
                            />
                            <p class="nav-link-text">Search</p>
                        </router-link>
                    </li>

                    <li @click="expandMenu" class="submenu-trigger">
                        <img
                            src="@/assets/icons/user.svg"
                            alt=""
                            class="nav-icon"
                        />
                        <p class="nav-link-text">Kamil Kowalski</p>
                        <ul
                            class="expandable-menu"
                            :class="toggleExpandableMenu"
                        >
                            <li>
                                <router-link to="/drives"
                                    >Lista rezerwacji</router-link
                                >
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
    data() {
        return {
            isMenuExpanded: false,
        };
    },
    methods: {
        expandMenu() {
            this.isMenuExpanded = !this.isMenuExpanded;
        },
    },
    computed: {
        toggleExpandableMenu() {
            return this.isMenuExpanded ? "expanded" : "";
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@@/scss/variables.scss";

header {
    background-color: $black;
    height: 100px;
    width: 100%;
    display: flex;
    padding: 10px 0;
    @media (max-width: $breakpoint-mobile) {
        height: auto;
        position: relative;
    }

    nav {
        color: $white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 1190px;
        width: 100%;
        margin: auto;

        .nav-wrapper {
            margin: 0 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;

            @media screen and (max-width: $breakpoint-mobile) {
                flex-direction: column;
            }

            .logo-container {
                display: flex;
                align-self: center;
                flex-direction: row;
                @media (max-width: $breakpoint-mobile) {
                    padding-bottom: 10px;
                }
                a {
                    display: flex;
                    flex-direction: row;
                    text-decoration: none;
                    color: $white;
                }

                .logo {
                    padding-right: 24px;

                    img {
                        width: 60px;
                        height: 69px;
                        @media screen and (max-width: $breakpoint-mobile) {
                            width: 40px;
                            height: 45px;
                        }
                    }
                }

                .logo-desc {
                    display: flex;
                    align-items: center;
                    @include nav-link;
                }
            }

            ul {
                list-style: none;
                display: flex;
                flex-direction: row;
                padding: 0;

                &.expandable-menu {
                    display: none;
                    margin: 0;

                    &.expanded {
                        display: block;
                        position: absolute;
                        background-color: $white;
                        box-shadow: 0px 0px 5px 0px $box-shadow-dark;
                        top: 40px;
                        max-width: 175px;
                        width: max-content;
                        left: 50%;
                        right: auto;
                        transform: translateX(-50%);

                        @media screen and (max-width: $breakpoint-mobile) {
                            top: auto;
                            top: 100%;
                            width: 100%;
                            max-width: inherit;
                        }

                        li,
                        a {
                            @include sub-nav-link;
                            color: $light-gray;
                            cursor: pointer;
                            &:hover {
                                color: $black;
                            }
                        }

                        li {
                            padding: 12px 16px;
                            &:not(:last-of-type) {
                                border-bottom: 1px solid $milk-white;
                            }
                        }
                    }
                }
            }
            .main-links {
                align-items: center;
                @include nav-link;

                @media screen and (max-width: $breakpoint-mobile) {
                    display: flex;
                    justify-content: space-around;
                }

                > li {
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    user-select: none;
                    margin-left: 32px;
                    cursor: pointer;

                    &:first-of-type {
                        margin-left: 0px;
                    }
                    .nav-link-text {
                        padding-left: 8px;
                    }
                    a {
                        color: $white;
                        text-decoration: none;
                    }
                    &.submenu-trigger {
                        position: relative;
                        @media screen and (max-width: $breakpoint-mobile) {
                            position: static;
                        }
                    }
                }
                a {
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    .nav-link-text {
                        padding-left: 8px;
                    }
                }
            }
        }
    }
}
</style>