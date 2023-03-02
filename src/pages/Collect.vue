<template>
    <main class="flex flex-col">
      <div class="flex justify-between items-center pl-8 pr-8">
          <p class="title">收藏</p>
          <div class="space-x-5">
              <Icon size="18"><Search12Filled/></Icon>
              <n-popselect  :options="options">
                  <Icon size="18"><Filter16Filled/></Icon>
              </n-popselect>
          </div>
      </div>
      <div class="flex flex-1">
          <div class="w-235px h-auto border-r pl-8 pr-3 space-y-2">
              <div class="w-auto bg-gray-100 rounded-lg p-3  space-y-2">
                  <div class="flex justify-between items-center">
                      <span>全部收藏</span>
                      <Icon size="18" color="gray"><Add12Filled/></Icon>
                  </div>
                  <div><span class="text-gray-400  text-xs">3 条内容</span></div>
              </div>
              <div class="w-auto rounded-lg p-3  space-y-2">
                  <div class="flex justify-between items-center">
                      <span>Test</span>
                      <Icon size="18" color="gray"><MoreHorizontal28Regular/></Icon>
                  </div>
                  <div><span class="text-gray-400  text-xs">3 条内容</span></div>
              </div>
          </div>
          <div class="flex-1 h-auto px-5">
              
          </div>
      </div>
    </main>
</template>
<script setup lang="ts">
import { onBeforeUnmount, ref, shallowRef, onMounted,reactive,h} from 'vue'
/* exported icon*/
import {Icon} from "@vicons/utils"
import {Search12Filled,MoreHorizontal28Regular,Filter16Filled,Add12Filled} from "@vicons/fluent";
/* exported ui */
import {NPopselect, NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
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
/* table data */

</script>
<style scoped lang="scss">
        .title{font-size: 18px;line-height: 75px;}
</style>