<template>
    <main class="flex justify-center px-36">
        <div class="w-980px border-l-gray-50 border-solid border-r pr-14 pt-4">
            <n-tabs size="large" animated>
                <n-tab-pane name="oasis" tab="关注">
                    <div class="flex flex-col gap-2 justify-center items-center">
                        <div>
                            <img width="184" src="https://gw.alipayobjects.com/mdn/prod_resource/afts/img/A*0QPWRaKylQwAAAAAAAAAAAAAARQnAQ">
                        </div>                    
                        <p>暂无更新，先去 <a href="#">推荐</a> 看看</p>
                    </div>
                </n-tab-pane>
                <n-tab-pane name="the beatles" tab="推荐">
                    <div v-for="(item,i) in listData" :key="i" class="mb-5">
                        <div class="flex gap-3 items-center my-2">
                            <n-avatar
                            round
                            size="small"
                            :src="item.userPic"
                            />
                            <span class="font-medium">{{item.userName}}</span>
                        </div>
                        <div class="flex pl-10 gap-4">
                            <div>
                                <p class=" my-1"><a href="#" class="text-lg font-black">{{item.title}}</a></p>
                                <div class="text-gray-500" style="-webkit-box-orient: vertical;display: -webkit-box;overflow: hidden;-webkit-line-clamp: 3;text-overflow: ellipsis;">{{item.content}}</div>
                                <div class="flex items-center gap-4 my-3">
                                    <div class="flex items-center gap-1 cursor-pointer">
                                        <Icon color="gray"><ThumbLike28Filled/></Icon>
                                        <span class="text-gray-400 leading-4">{{item.praise}}</span>
                                    </div>
                                    <div class="flex items-center gap-1 cursor-pointer">
                                        <Icon color="gray"><MoreCircle32Filled/></Icon>
                                        <span class="text-gray-400 leading-4">查看原文</span>

                                    </div>
                                </div>
                            </div>
                            <div >
                                <a href="#" class="block w-235px h-32 rounded-lg" style="background-image: url('https://p3-passport.byteimg.com/img/user-avatar/5c9a2641877196605c37fdb39f173b17~100x100.awebp');">
                                </a>
                            </div>
                        </div>
                    </div>
                </n-tab-pane>
                <template #suffix>
                    <span class="text-gray-400">

                    </span>
                </template>
            </n-tabs>
        </div>
        <div class="w-420px pl-6">
            <p class="flex justify-between items-center my-5">
                <span class="title">推荐花园</span>
                <span class="text-blue-500">换一换</span>
            </p>
            <div>
                <div  v-for="item in 4" :key="item" class="w-auto mr-5 border border-gray-200 rounded-lg p-5 space-y-5 mb-5"
                 style="background: url('https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*ksNSS7r2V5gAAAAAAAAAAAAADvuFAQ/original') right bottom no-repeat; background-size: 40%;"
                 >
                    <div class="flex items-center gap-3">
                        <n-avatar
                            round
                            size="small"
                            src="https://p3-passport.byteimg.com/img/user-avatar/5c9a2641877196605c37fdb39f173b17~100x100.awebp"
                            />
                        <div>
                            <p>陈豪✨</p>
                            <p class="text-gray-500">保持成长 让美好持续发生</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm mb-1">推荐阅读</p>
                        <p>DISC人格模型的应用与启发</p>
                    </div>
                </div>
                <div class="flex justify-between bg-gray-100 p-4 mr-5 rounded-lg">
                    <div>
                        <p>开启自己的花园</p>
                        <p>从入门到精通</p>
                    </div>
                    <button class="bg-green-500 text-white px-3 rounded-lg">查看手册</button>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import {reactive,onMounted} from "vue"
import {NTabs,NTabPane,NAvatar} from "naive-ui"
/* exported icon*/
import {Icon} from "@vicons/utils"
import {ThumbLike28Filled,MoreCircle32Filled} from "@vicons/fluent";
interface InListData{
    userPic:string,
    userName:string,
    title:string,
    content:string,
    praise:number
}
const listData=reactive<InListData[]>([
    {userPic:"https://p3-passport.byteimg.com/img/user-avatar/5c9a2641877196605c37fdb39f173b17~100x100.awebp",
    userName:"京仔",
    title:"故事：《信息流沙》之演进",
    content:"《信息流沙》的系列文章起源于我对自己笔记库的整理。2015年前后，我的印象笔记达到了10000条，充斥着各种不知道什么时候做的网页的剪藏和乱七八糟的随手记录。我充分实践了第二大脑的理念，所有东西都往里装，不管是工作笔记，个人笔记，不管是关于写作的、运动的、病痛的、物质的，都在这个库里面。我甚至这个库里面。我甚至这个库里面。我甚至",
    praise:1},
    {userPic:"https://p3-passport.byteimg.com/img/user-avatar/5c9a2641877196605c37fdb39f173b17~100x100.awebp",
    userName:"京仔",
    title:"故事：《信息流沙》之演进",
    content:"《信息流沙》的系列文章起源于我对自己笔记库的整理。2015年前后，我的印象笔记达到了10000条，充斥着各种不知道什么时候做的网页的剪藏和乱七八糟的随手记录。我充分实践了第二大脑的理念，所有东西都往里装，不管是工作笔记，个人笔记，不管是关于写作的、运动的、病痛的、物质的，都在这个库里面。我甚至这个库里面。我甚至这个库里面。我甚至",
    praise:1},{userPic:"https://p3-passport.byteimg.com/img/user-avatar/5c9a2641877196605c37fdb39f173b17~100x100.awebp",
    userName:"京仔",
    title:"故事：《信息流沙》之演进",
    content:"《信息流沙》的系列文章起源于我对自己笔记库的整理。2015年前后，我的印象笔记达到了10000条，充斥着各种不知道什么时候做的网页的剪藏和乱七八糟的随手记录。我充分实践了第二大脑的理念，所有东西都往里装，不管是工作笔记，个人笔记，不管是关于写作的、运动的、病痛的、物质的，都在这个库里面。我甚至这个库里面。我甚至这个库里面。我甚至",
    praise:1},{userPic:"https://p3-passport.byteimg.com/img/user-avatar/5c9a2641877196605c37fdb39f173b17~100x100.awebp",
    userName:"京仔",
    title:"故事：《信息流沙》之演进",
    content:"《信息流沙》的系列文章起源于我对自己笔记库的整理。2015年前后，我的印象笔记达到了10000条，充斥着各种不知道什么时候做的网页的剪藏和乱七八糟的随手记录。我充分实践了第二大脑的理念，所有东西都往里装，不管是工作笔记，个人笔记，不管是关于写作的、运动的、病痛的、物质的，都在这个库里面。我甚至这个库里面。我甚至这个库里面。我甚至",
    praise:1},
]);
</script>
<style scoped lang="scss">
        .title{font-size: 18px;line-height: 75px;}
</style>