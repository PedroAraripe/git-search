<template>
    <div class="card-wrapper-login">
        <div class="card-item">
            <slot />    
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card-wrapper-login {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    & > .card-item {
        height: fit-content;
    }
}
</style>