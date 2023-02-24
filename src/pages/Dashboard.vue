<template>
    <main>
        <n-layout content-style="min-height:100%" has-sider>
            <n-layout-sider 
            collapse-mode="width"
            :collapsed-width="60"
            :width="254"
            show-trigger="arrow-circle"
            content-style="padding:15px"
            style="min-height:100%"
            bordered
            >
            <Menu/>
            </n-layout-sider>
            <n-layout>
                <n-layout-header>颐和园路</n-layout-header>
                <n-layout-content content-style="padding: 24px;">
                    平山道
                </n-layout-content>
                <n-layout-footer>成府路</n-layout-footer>
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
        min-height:100%;
    }
}
</style>