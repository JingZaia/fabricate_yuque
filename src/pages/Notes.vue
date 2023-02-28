<template>
    <main class="contianr flex">
        <div class="pl-8 pr-8 w-2/5">
            <p class="title">小记</p>
            <div class="w-auto border-solid border overflow-hidden rounded-md border-gray-200 min-h-580">
                <Toolbar
                    style="border-bottom: 1px solid #ccc"
                    :editor="editorRef"
                    :defaultConfig="toolbarConfig"
                    :mode="mode"
                />
                <Editor
                    style="height: 500px; overflow-y: hidden;"
                    v-model="valueHtml"
                    :defaultConfig="editorConfig"
                    :mode="mode"
                    @onCreated="handleCreated"
                />
            </div>
            <div class="w-11/12 bg-gray-50 h-2 border rounded-b-md border-solid border-t-0 mx-auto border-gray-200"></div>
            <div class="w-10/12 bg-gray-100 h-2 border rounded-b-md border-solid border-t-0 mx-auto border-gray-200"></div>
            <div class="space-x-5 my-7">
                <button class="border border-solid border-gray-300 rounded-md p-1 px-3.5 ">
                    <span class="text-14 text-gray-400">小记一下</span>
                </button>
                <span class="text-gray-500">按 Ctrl + Enter 发送</span>
            </div>
        </div>
        <div class=" flex-1 bg-gray-100 border-l border-solid border-gray-200">
            <div class="flex justify-between items-center pl-8 pr-8">
                <p class="title ml-9">小记</p>
                <div class="space-x-5">
                    <Icon size="18"><Search12Filled/></Icon>
                    <n-popselect  :options="options">
                        <Icon size="18"><Filter16Filled/></Icon>
                    </n-popselect>
                    <n-popselect  :options="upTime">
                        <Icon size="18"><ArrowSortDownLines20Filled/></Icon>
                    </n-popselect>
                </div>
            </div>

            <div class="flex justify-between gap-2.5 mb-3 ml-10">
                <div><n-checkbox /></div>
                <div class="flex flex-col gap-2 flex-1 h-auto p-5 bg-white transition-all shadow-sm hover:shadow-md rounded-xl">
                    <div ><span class="text-gray-500">更新于 昨天 16:08</span></div>
                    <div></div>
                    <div>
                        <n-popover trigger="hover">
                            <template #trigger>
                                <n-tag round >爱在西元前</n-tag>
                            </template>
                            <span>或许不想知道你的花园长得咋样</span>
                        </n-popover>
                    </div>
                </div>
                <div class="flex flex-col mr-2 gap-2">
                    <button class="flex justify-center items-center bg-white p-1.5 shadow-lg w-10 h-10 rounded-md">
                        <Icon size="20"><CalligraphyPen24Filled/></Icon>
                    </button>
                    <n-popselect :options="upTime">
                        <button class="flex justify-center items-center bg-white p-1.5 shadow-lg w-10 h-10 rounded-md">
                            <Icon size="20"><MoreVertical16Filled/></Icon>
                        </button>
                    </n-popselect>
                </div>
            </div>
            
            <div class="flex justify-between gap-2.5 mb-3 ml-10">
                <div><n-checkbox /></div>
                <div class="flex flex-col gap-2 flex-1 h-auto p-5 bg-white transition-all shadow-sm hover:shadow-md rounded-xl">
                    <div ><span class="text-gray-500">更新于 昨天 16:08</span></div>
                    <div></div>
                    <div>
                        <n-popover trigger="hover">
                            <template #trigger>
                                <n-tag round >爱在西元前</n-tag>
                            </template>
                            <span>或许不想知道你的花园长得咋样</span>
                        </n-popover>
                    </div>
                </div>
                <div class="flex flex-col mr-2 gap-2">
                    <button class="flex justify-center items-center bg-white p-1.5 shadow-lg w-10 h-10 rounded-md">
                        <Icon size="20"><CalligraphyPen24Filled/></Icon>
                    </button>
                    <n-popselect :options="upTime">
                        <button class="flex justify-center items-center bg-white p-1.5 shadow-lg w-10 h-10 rounded-md">
                            <Icon size="20"><MoreVertical16Filled/></Icon>
                        </button>
                    </n-popselect>
                </div>
            </div>
        </div>
        
    </main>
</template>
<script setup lang="ts">
import { onBeforeUnmount, ref, shallowRef, onMounted,reactive} from 'vue'
/* editor */
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IToolbarConfig } from '@wangeditor/editor'
/* icon */
import {Search12Filled,ArrowSortDownLines20Filled,Filter16Filled,CalligraphyPen24Filled,MoreVertical16Filled} from "@vicons/fluent";
import {Icon} from "@vicons/utils"

import {NPopselect,NButton,NCheckbox,NTag,NPopover} from "naive-ui"

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
 // 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const  mode=ref<string>('simple');
// 内容 HTML
const valueHtml = ref<string>('')

// 模拟 ajax 异步获取内容
onMounted(() => {
    
})

const toolbarConfig: Partial<IToolbarConfig> = {}
toolbarConfig.toolbarKeys = [
    {
        key: "group-image",
        title: "图片",
        iconSvg: '<svg viewBox=\"0 0 1024 1024\"><path d=\"M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z\"></path></svg>',
        menuKeys: [
            "insertImage",
            "uploadImage"
        ]
    },
    "todo",
    "insertLink",
    "fullScreen"
  
]
const editorConfig = { placeholder: '记你太美...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor:any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>
<style scoped lang="scss">
    main{
        .title{font-size: 18px;line-height: 75px;}
    }
</style>