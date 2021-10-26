import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const SettingsHome = { template: "<div>SETTINGS  Home</div>" };
const SettingsProfile = { template: "<div>SETTINGS  Profile</div>" };

const routes = [
    {
        path: "/settings",
        name: "settings",
        component: SettingsHome,
    },
    {
        path: "/settings/profile",
        name: "profile",
        component: SettingsProfile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

createApp({}).use(router).mount("#app");
