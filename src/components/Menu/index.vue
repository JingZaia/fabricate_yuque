<template>
    <header>
        <img src="https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*Ug-0S7mWpx8AAAAAAAAAAAAADvuFAQ/original" alt="yuque">
        <div class="notifi"><Icon size="18"><MdNotificationsOutline/></Icon></div>
        <div class="user">
            <n-avatar
            round
            size="small"
            src="https://p3-passport.byteimg.com/img/user-avatar/5c9a2641877196605c37fdb39f173b17~100x100.awebp"
            />
            <Icon><IosArrowDown/></Icon>
        </div>
    </header>
    <div class="search">
        <n-input default-value="哦" show-count clearable>
            <template >
            </template>
        </n-input>
        <n-button>Default</n-button>
    </div>
    <n-menu :options="menuOptions" />
</template>
<script setup lang="ts">
import {h,Component} from "vue"
import {RouterLink} from "vue-router"
import {NAvatar,NInput,NButton,NMenu,NIcon} from "naive-ui"
import type { MenuOption } from 'naive-ui'
/* icon */
import {Icon} from "@vicons/utils"
import {IosArrowDown,MdNotificationsOutline} from "@vicons/ionicons4";
import {Home12Filled} from "@vicons/fluent";
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions: MenuOption[] = [
    {
        label: () =>
        h(
            RouterLink,
            {
            to: {
                name: 'dashboard',
                params:{lang: 'zh-CN'}
            }
            },
            { default: () => '开始' }
        ),
        key: 'dashboard-key',
        icon: renderIcon(Home12Filled),
        disabled: false,
    },
    {
        label: () =>
        h(
            RouterLink,
            {
            to: {
                name: 'notes',
                params:{lang: 'zh-CN'}
            }
            },
            { default: () => '小记' }
        ),
        key: 'notes-key',
        icon: renderIcon(Home12Filled),
        disabled: false,
    },
    {
        label: () =>
        h(
            RouterLink,
            {
            to: {
                name: 'collecting',
                params:{lang: 'zh-CN'}

            }
            },
            { default: () => '收藏' }
        ),
        key: 'collecting',
        icon: renderIcon(Home12Filled),
        disabled: false,
    },
    {
        label: () =>
        h(
            RouterLink,
            {
            to: {
                name: 'stroll',
                params:{lang: 'zh-CN'}

            }
            },
            { default: () => '逛逛' }
        ),
        key: 'stroll',
        icon: renderIcon(Home12Filled),
        disabled: false,
    },
]
</script>   
<style scoped lang="scss">
    header{
        display: flex;
        align-items: center;
        gap: 10px;
        .notifi{text-align: right;flex: 1;}
        height: 32px;
        img{width: 100px;}

    }
</style>