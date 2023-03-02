<template>
    <main class="flex justify-center px-36">
        <div class="w-980px border-l-gray-50 border-solid border-r pr-14 pt-4">
            <n-tabs size="large" animated>
                <n-tab-pane name="oasis" tab="关注">
                    Wonderwall
                </n-tab-pane>
                <n-tab-pane name="the beatles" tab="推荐">
                    Hey Jude
                </n-tab-pane>
                <template #suffix>
                    <span class="text-gray-400">我要投稿</span>
                </template>
            </n-tabs>
        </div>
        <div class="w-420px">1</div>
    </main>
</template>
<script setup lang="ts">
import {} from "vue"
import {NTabs,NTabPane} from "naive-ui"
</script>
<style scoped lang="scss"></style>