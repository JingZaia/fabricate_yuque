<template>
    <main>
        <p class="title">开始</p>
        <div class="new-doc">
                <div class="new-doc-item">
                    <Icon size="18"><DocumentAdd16Filled/></Icon>
                    <div class="info">
                        <p class="card-title">新建文档</p>
                        <p>文档、表格、画板、数据表</p>
                    </div>
                    <Icon><IosArrowDown/></Icon>
                </div>
                <div class="new-doc-item">
                    <Icon size="18"><NotebookAdd24Filled/></Icon>
                    <div class="info">
                        <p class="card-title">新建知识库</p>
                        <p>新建知识库</p>
                    </div>
                </div>
                <div class="new-doc-item">
                    <Icon size="18"><CalendarPattern16Filled/></Icon>
                    <div class="info">
                        <p class="card-title">模板中心</p>
                        <p>从模板中获取灵感</p>
                    </div>
                </div>
        </div>
        <p class="title">开始</p>
    </main>
</template>
<script setup lang="ts">
import {NCard} from "naive-ui"
import {Icon} from "@vicons/utils"
import {IosArrowDown,MdNotificationsOutline} from "@vicons/ionicons4";
import {Home12Filled,NotebookAdd24Filled,DocumentAdd16Filled,CalendarPattern16Filled} from "@vicons/fluent";
import {} from "@vicons/ionicons4"
</script>
<style scoped lang="scss">
main{
    padding:0 35px;
    .title{font-size: 18px;line-height: 80px;}
    .new-doc{
        display: flex;
        gap: 10px;
        .new-doc-item{
            width: 259px;
            height: 55px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #eee;
            border-radius: 10px;
            padding: 10px 20px;
            gap: 10px;
            .info{
                flex: 1;
                p:nth-child(2){font-size: 12px;color: #999;}
            }
        }
    }
}
</style>