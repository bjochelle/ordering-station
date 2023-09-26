<template>
    <a aria-controls="dashboard" aria-expanded="false" class="nav-link dropdown-indicator" data-bs-toggle="collapse"
       href="#users-management" role="button">
        <div class="d-flex align-items-center">
            <span class="nav-link-icon">
                <svg class="icon icon-tabler icon-tabler-users" fill="none" height="24"
                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                     viewBox="0 0 24 24"
                     width="24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                   <circle cx="9" cy="7" r="4"></circle>
                   <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                   <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                </svg>
            </span>
            <span class="nav-link-text ps-1">User Management</span>
        </div>
    </a>
    <ul id="users-management" class="nav collapse">
        <li v-if="$can(['user_management_permissions'])" class="nav-item">
            <router-link :to="{ name: 'IndexPermission' }" class="nav-link">
                <div class="d-flex align-items-center">
                    <span class="nav-link-text ps-1">Permissions</span>
                </div>
            </router-link>
        </li>

        <li v-if="$can(['user_management_roles'])" class="nav-item">
            <router-link :to="{ name: 'IndexRole' }" class="nav-link">
                <div class="d-flex align-items-center">
                    <span class="nav-link-text ps-1">Roles</span>
                </div>
            </router-link>
        </li>
        <li v-if="$can(['user_management_users'])" class="nav-item">
            <router-link :to="{ name: 'IndexUser' }" class="nav-link">
                <div class="d-flex align-items-center">
                    <span class="nav-link-text ps-1">Users</span>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>

</script>

<style scoped>

</style>
