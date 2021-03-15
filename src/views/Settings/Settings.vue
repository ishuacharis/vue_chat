<template>
    <div class="settings">
        <div class="header">
            <span class="title">Settings</span>
        </div>
        <div class="settings-list">
            <div class="settings-item">
                <div class="item-icon-left">
                    <span><i class='bx bxs-user-plus'></i></span>
                </div>
                <div class="item-content">
                    <span class="item-title">Add User</span>
                    <span class="item-icon-right"><i class='bx bx-chevron-right'></i></span>
                </div>
            </div>
            <div class="settings-item">
                <div class="item-icon-left">
                    <span><i class='bx bxs-key'></i></span>
                </div>
                <div class="item-content">
                    <span class="item-title">Account</span>
                    <span class="item-icon-right"><i class='bx bx-chevron-right'></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Settings',
        setup() {

        }
    }
</script>

<style src="./Settings.css" scoped>

</style>