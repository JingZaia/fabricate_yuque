<template>
    <main class="contianr flex">
        <div class="pl-8 pr-8 w-2/5">
            <p class="title">小记</p>
            <div class="w-auto border-solid border rounded-md border-gray-200">
                Hello
            </div>
            <div class="w-11/12 bg-gray-50 h-2 border border-solid border-t-0 mx-auto border-gray-200"></div>
            <div class="w-10/12 bg-gray-100 h-2 border border-solid border-t-0 mx-auto border-gray-200"></div>
            <div class="space-x-1">
                <button class="border border-solid border-gray-300 rounded-md p-1 px-4 ">
                    <span class="text-14 text-gray-400">小记一下</span>
                </button>
                <span class="text-gray-500">按 Ctrl + Enter 发送</span>
            </div>
        </div>
        <div class="pl-8 pr-8 flex-1 bg-gray-50 border-l border-solid border-gray-200">
            <p class="title">小记</p>
        
        </div>

    </main>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
    main{
        .title{font-size: 18px;line-height: 75px;}

    }
</style>