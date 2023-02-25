<template>
    <main>
        <n-layout content-style="min-height:100%" has-sider>
            <n-layout-sider 
            collapse-mode="width"
            :collapsed-width="60"
            :width="254"
            show-trigger="arrow-circle"
            content-style="overflow:none;padding:15px"
            bordered
            >
            <Menu/>
            </n-layout-sider>
            <n-layout>
                <RouterView />
            </n-layout>
        </n-layout>
    </main>
    
</template>

<script setup lang="ts">
import {} from "vue"
import {NLayout,NLayoutSider,NLayoutHeader,NLayoutContent,NLayoutFooter} from "naive-ui"
import Menu from "../components/Menu/index.vue"

</script>

<style scoped lang="scss">
main{
    width: 100%;
    min-height: 100vmin;
    .n-layout{
        height:100vmin;
    }
}
</style>