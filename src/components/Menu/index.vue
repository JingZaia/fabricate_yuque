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
                                <div class="title">
                                    <span>京仔咯</span>
                                    <n-popover trigger="hover">
                                        <template #trigger>
                                            <Icon size="16">
                                                <ShieldCheckmark24Filled/>
                                                <!-- <svg width="1em" height="1em" viewBox="0 0 27 26" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-name="Unsafe" class="larkui-icon larkui-icon-unsafe icon-svg badge-module_unsafeIcon_fj7tW un-safe-icon index-module_size_wVASz" style="width: 24px; min-width: 24px; height: 24px;"><defs><path id="1154376943a" d="M0 0h20v20H0z"></path></defs><g fill="none" fill-rule="evenodd"><g transform="translate(0 6)"><mask id="1154376943b" fill="#fff"><use xlink:href="#1154376943a"></use></mask><path d="m9.072 1.572-.082.043-.077.04-.073.037-.101.052-.063.031-.087.043-.078.036a14.834 14.834 0 0 1-4.202 1.231l-.115.016-.056.007c-.892.113-1.56.87-1.56 1.767v6.552c0 .618.143 1.228.424 1.823a7.783 7.783 0 0 0 1.006 1.588c.404.498.861.968 1.37 1.41.503.435 1.015.823 1.538 1.164.524.342 1.031.629 1.524.858.483.225.919.385 1.313.48l.061.015.311.063.334-.062.02-.004c.399-.094.843-.26 1.338-.495.485-.23.981-.518 1.49-.863.504-.341 1-.73 1.488-1.165.496-.441.94-.913 1.33-1.412a7.84 7.84 0 0 0 .97-1.59 4.36 4.36 0 0 0 .405-1.81v-6.64c0-.84-.621-1.549-1.451-1.662l-.057-.007c-.063-.007-.13-.016-.198-.026l-.063-.009c-1.218-.177-2.596-.56-4.064-1.214l-.11-.05-.052-.023-.114-.054-.095-.046-.14-.068-.155-.077a2.111 2.111 0 0 0-1.93.021Z" fill="currentColor" mask="url(#1154376943b)"></path><path d="m10.397 6.102-3.012 4.133a.484.484 0 0 0-.093.285l.008.087a.484.484 0 0 0 .476.397h1.302l-.346 2.623a.484.484 0 0 0 .87.349l3.013-4.133a.484.484 0 0 0 .093-.285l-.008-.087a.484.484 0 0 0-.476-.397l-1.303-.001.347-2.622a.484.484 0 0 0-.87-.349Z" fill="#FFF" fill-rule="nonzero" mask="url(#1154376943b)"></path></g><g transform="translate(12 1)"><path d="M0 0h14v14H0z"></path><circle fill="#FAAD14" cx="7" cy="7" r="6.125"></circle><path d="M7-.375a7.375 7.375 0 1 0 0 14.75A7.375 7.375 0 0 0 7-.375Zm0 1.25a6.125 6.125 0 1 1 0 12.25A6.125 6.125 0 0 1 7 .875Z" fill="#FFF" fill-rule="nonzero"></path><g transform="matrix(1 0 0 -1 6.344 10.5)" fill="#FFF"><circle cx="0.656" cy="0.656" r="1"></circle><path d="M.656 2.406c.302 0 .547.245.547.547v3.5a.547.547 0 0 1-1.094 0v-3.5c0-.302.245-.547.547-.547Z"></path></g></g></g></svg> -->
                                            </Icon>
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
        <div class="bg-gray-100 rounded-lg flex-1 flex px-2 items-center gap-1 justify-between">
            <div>
                <Icon size="18" color="gray"><Search12Filled/></Icon>
            </div>
            <div class="flex-1 text-gray-400">搜索</div>
            <div class="text-sm text-gray-400">Ctrl J</div>
        </div>
        <button class="bg-white border rounded-lg text-xl" style="height:33px;width:33px;line-height: 33px;">+</button>
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
import {ShieldCheckmark24Filled,Search12Filled,Settings32Filled,Home12Filled,Document16Filled,Collections20Filled,CameraSwitch24Filled,AddSquareMultiple20Filled} from "@vicons/fluent";
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
            z-index: 10;
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