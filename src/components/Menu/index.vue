<template>
    <article>
        <header>
        <img src="https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*Ug-0S7mWpx8AAAAAAAAAAAAADvuFAQ/original" alt="yuque">
        <div class="notifi">
            <n-popover trigger="hover">
                <template #trigger>
                    <Icon size="18"><MdNotificationsOutline/></Icon>
                </template>
                <span>消息中心</span>
            </n-popover>
        </div>
            <div class="user" @click="ShowSetting">
                <n-avatar
                round
                size="small"
                src="https://p3-passport.byteimg.com/img/user-avatar/5c9a2641877196605c37fdb39f173b17~100x100.awebp"
                />
                <Icon size="12"><IosArrowDown/></Icon>
               
                <div class="modal">
                    <div class="setting-modal">
                        <div class="my-info">
                            <n-avatar
                            round
                            size="medium"
                            src="https://p3-passport.byteimg.com/img/user-avatar/5c9a2641877196605c37fdb39f173b17~100x100.awebp"
                            />
                            <div class="info">
                                <div class="title"><span>京仔咯</span>
                                    <n-popover trigger="hover">
                                        <template #trigger>
                                            <Icon size="16"><ShieldCheckmark24Filled/></Icon>
                                        </template>
                                        <span>你的帐号安全系数低升级保障</span>
                                    </n-popover>
                                </div>
                                <p>普通用户，升级可享更多权益 <a href="#">升级</a></p>
                            </div>
                        </div>
                        <div class="border"></div>
                        <div class="modal-item">
                            <Icon size="16"><MdAperture/></Icon>
                            <span class="modal-text">我的家园</span>
                        </div>
                        <div class="border"></div>
                        <div class="modal-item">
                            <Icon size="16"><CameraSwitch24Filled/></Icon>
                            <span class="modal-text">切换空间</span>
                            <Icon size="12"><IosArrowDown/></Icon>
                        </div>
                        <div class="modal-item">
                            <Icon size="16"><AddSquareMultiple20Filled/></Icon>
                            <span class="modal-text">创建空间</span>
                        </div>
                        <div class="border"></div>
                        <div class="modal-item">
                            <Icon size="16"><Settings32Filled/></Icon>
                            <span class="modal-text">账户设置</span>
                        </div>
                        <div class="border"></div>
                        <div class="setting">
                            <div class="modal-item">
                                <Icon size="16"><IosExit/></Icon>
                                <span class="modal-text">退出登录</span>
                            </div>
                            <n-popover trigger="hover">
                                <template #trigger>
                                <n-button>En</n-button>
                                </template>
                                <span>English</span>
                            </n-popover>
                            <n-popover trigger="hover">
                                <template #trigger>
                                <n-button><Icon size="16"><MdMoon/></Icon></n-button>
                                </template>
                                <span>切换暗黑模式</span>
                            </n-popover>
                        </div>
                    </div>
                </div>

            </div>
    </header>
    <div class="search">
        <n-input default-value="哦" show-count clearable>
            <template >
            </template>
        </n-input>
        <n-button>Default</n-button>
    </div>
    <div class="menu">
        <router-link to="/dashboard/start" active-class="active-item" class="menu-item">
            <Icon><Home12Filled/></Icon> <span>开始</span>
        </router-link>
        <router-link to="/dashboard/notes" active-class="active-item" class="menu-item">
            <Icon><Document16Filled/></Icon> <span>小记</span>
        </router-link>
        <router-link to="/dashboard/collecting" active-class="active-item" class="menu-item">
            <Icon><Collections20Filled/></Icon> <span>收藏</span>
        </router-link>
        <router-link to="/dashboard/stroll" active-class="active-item" class="menu-item">
            <Icon><MdAperture/></Icon> <span>逛逛</span>
        </router-link>
    </div>
    <n-collapse>
        <template #header-extra>
            <Icon><IosArrowDown/></Icon>
        </template>
        <template #arrow>
            <Icon><IosArrowDown/></Icon>
        </template>
        <n-collapse-item title="知识库" name="1">
            <div ><Icon><Home12Filled/></Icon> <span>开始<Icon><Home12Filled/></Icon> </span></div>
        </n-collapse-item>
    </n-collapse>
    </article>
</template>
<script setup lang="ts">
import {ref,reactive,h,Component,Transition} from "vue"
import {RouterLink} from "vue-router"
/* ui */
import {NAvatar,NInput,NButton,NMenu,NIcon,NCollapse,NCollapseItem,NPopselect,NPopover} from "naive-ui"
import type { MenuOption } from 'naive-ui'
/* icon */
import {Icon} from "@vicons/utils"
import {IosArrowDown,MdNotificationsOutline,MdFlower,IosExit,MdMoon,MdAperture} from "@vicons/ionicons4";
import {ShieldCheckmark24Filled,Settings32Filled,Home12Filled,Document16Filled,Collections20Filled,CameraSwitch24Filled,AddSquareMultiple20Filled} from "@vicons/fluent";
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

/* show modal */
const showModal=ref<boolean>(true);
const ShowSetting=()=>{
    showModal.value=!showModal.value;
}

</script>   
<style scoped lang="scss">
/* vue animation */

article{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.n-layout-sider-scroll-container{
    overflow:unset !important;
}
header{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .notifi{text-align: right;flex: 1;}
    height: 32px;
    img{width: 100px;}
    .user{
        position: relative;
        transition: all .2s;
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 5px;
        border: 0!important;
        outline: none;
        border-radius: 10px;
        &:hover{
            background-color: #eee;
        }
        .modal{
            transition: all .2s;
            position: absolute;
            display: none;
            left: 0;
            top: 100%;
            min-width: 300px;
            border: 1px solid #ddd;
            box-shadow: 1px 0 10px 3px rgba(0,0,0,.05);
            background-color: white;
            border-radius: 10px;
            z-index: 20;
            padding: 20px;
            overflow: hidden;
            animation: modal-and 0.2s ease;
            transform-origin:top left;
            .setting-modal{
                display: flex;
                flex-direction: column;
                .my-info{
                    display: flex;
                    gap: 10px;
                    padding-bottom:10px;
                    align-items: center;
                    .info{
                        .title{display: flex;align-items: center;gap:10px;font-size: 16px;font-weight: bold;}

                        p{font-size: 12px;}
                    }
                }
                .border{
                    border-bottom:1px solid #eee ;
                    margin: 5px 10px;
                }
                .modal-item{
                    transition: all .2s;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 10px;
                    gap: 10px;
                    border-radius: 10px;
                    .modal-text{flex: 1;}
                    &:hover{
                        background-color: #efefef;
                    }
                }
                .setting{
                    display: flex;  
                    align-items: center;
                    gap: 10px;
                    .modal-item{
                        flex: 1;
                    }
                }
            }
        }
        @keyframes modal-and {
            from{
                transform: scale(0);
            }
            to{
                transform: scale(1);
            }
        }
        &:hover .modal{
            display: block;
        }
       
    }
}
.search{
    display: flex;
    gap: 10px;
    .send-btn{
        width: 50px;
    }
}
.menu{
    display: flex;
    flex-direction: column;
    .active-item{
        background-color: #eee;
        color: black;
    }
    .menu-item{
        padding: 10px;
        border-radius: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
        color: #222;
        text-decoration: none;
    }
}
</style>