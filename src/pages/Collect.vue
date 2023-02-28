<template>
    <div class="flex justify-between items-center pl-8 pr-8">
        <p class="title">收藏</p>
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
    <div class="flex h-5/6">
        <div class="w-235px h-auto border-r pl-10 pr-5">
            <div class="w-auto bg-gray-100 rounded-lg p-3  space-y-2">
                <div class="flex justify-between items-center">
                    <span>全部收藏</span>
                    <Icon size="18" color="gray"><Add12Filled/></Icon>
                </div>
                <div><span class="text-gray-400  text-xs">3 条内容</span></div>
            </div>
        </div>
        <div class="flex-1 h-auto px-5">
            Test
        </div>
    </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, ref, shallowRef, onMounted,reactive} from 'vue'
import {NPopselect} from "naive-ui"
import {Icon} from "@vicons/utils"
import {Search12Filled,ArrowSortDownLines20Filled,Filter16Filled,Add12Filled} from "@vicons/fluent";
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