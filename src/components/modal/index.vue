<template>
    <div class="modal">
        hahahahha 
    </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.modal{
    transition: all .2s;
    position: absolute;
    display: none;
    left: 0;
    top: 100%;
    width: 100px;
    height: 200px;
    border: 1px solid #ddd;
    box-shadow: 1px 0 10px 3px rgba(0,0,0,.05);
    background-color: white;
    border-radius: 10px;
    z-index: 20;
    padding: 10px;
    overflow: hidden;
    animation: modal-and 0.2s ease;
    transform-origin:top left;
}
@keyframes modal-and {
    from{
        transform: scale(0);
    }
    to{
        transform: scale(1);
    }
}
</style>