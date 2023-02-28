<template>
    <div class="flex justify-between items-center pl-8 pr-8">
        <p class="title">小记</p>
        <div class="space-x-5">
            <Icon size="18"><Search12Filled/></Icon>
            <n-popselect  :options="options">
                <Icon size="18"><Filter16Filled/></Icon>
            </n-popselect>
            <n-popselect :options="upTime">
                <Icon size="18"><ArrowSortDownLines20Filled/></Icon>
            </n-popselect>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, ref, shallowRef, onMounted,reactive} from 'vue'
import {NPopselect,NButton,NCheckbox,NTag,NPopover} from "naive-ui"
import {Icon} from "@vicons/utils"
import {Search12Filled,ArrowSortDownLines20Filled,Filter16Filled,CalligraphyPen24Filled,MoreVertical16Filled} from "@vicons/fluent";
const options=reactive([
        {
          label: '小记',
          value: '小记'
        },
        {
          label: '图片',
          value: '图片'
        },
        {
          label: '书签',
          value: '书签'
        },
        {
          label: '附件',
          value: '附件'
        },
        {
          label: '来自微信',
          value: '来自微信'
        },
        {
          label: '分享中',
          value: '分享中'
        },
        {
          label: '已归档',
          value: '已归档'
        }
])
const upTime=reactive([
        {
          label: '更新时间排序',
          value: '更新时间排序'
        },
        {
          label: '创建时间排序',
          value: '创建时间排序'
        }
])
</script>
<style scoped lang="scss">
        .title{font-size: 18px;line-height: 75px;}
</style>