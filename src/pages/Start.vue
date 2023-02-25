<template>
    <main>
        <p class="title">开始</p>
        <div class="new-doc">
                <div class="new-doc-item">
                    <Icon size="22">
                        <!-- <DocumentAdd16Filled/> -->
                        <svg width="1em" height="1em" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="larkui-icon larkui-icon-newdoc-default"><g fill="none" fill-rule="evenodd"><path d="M165.333 14.933c21.208 0 38.4 17.193 38.4 38.4l.001 85.679a59.321 59.321 0 0 0-12.8 0V53.333c0-14.138-11.462-25.6-25.6-25.6h-96c-14.14 0-25.6 11.462-25.6 25.6v128c0 14.139 11.46 25.6 25.6 25.6h70.114a58.24 58.24 0 0 0 3.647 12.802l-73.762-.002c-21.207 0-38.4-17.192-38.4-38.4v-128c0-21.207 17.193-38.4 38.4-38.4h96ZM128 157.333A5.333 5.333 0 0 1 128 168H74.667a5.333 5.333 0 0 1 0-10.667H128Zm32-32A5.333 5.333 0 0 1 160 136H74.667a5.333 5.333 0 0 1 0-10.667H160Zm-5.333-66.666c5.89 0 10.666 4.775 10.666 10.666v16c0 5.891-4.775 10.667-10.666 10.667H80c-5.891 0-10.667-4.776-10.667-10.667v-16c0-5.89 4.776-10.666 10.667-10.666h74.667Z" fill="#585A5A" fill-rule="nonzero"></path><path d="M197.333 150.4c25.92 0 46.934 21.013 46.934 46.933 0 25.92-21.013 46.934-46.934 46.934-25.92 0-46.933-21.013-46.933-46.934 0-25.92 21.013-46.933 46.933-46.933Zm.88 18.773a5.632 5.632 0 0 0-5.632 5.632V191.7l-16.896.001a5.632 5.632 0 1 0 0 11.264h16.895l.001 16.896a5.632 5.632 0 1 0 11.264 0v-16.896h16.896a5.632 5.632 0 1 0 0-11.264h-16.897l.001-16.896a5.632 5.632 0 0 0-5.632-5.632Z" fill="#1672F3"></path></g></svg>
                    </Icon>
                    <div class="info">
                        <p class="card-title">新建文档</p>
                        <p>文档、表格、画板、数据表</p>
                    </div>
                    <Icon><IosArrowDown/></Icon>
                </div>
                <div class="new-doc-item">
                    <Icon size="22">
                        <!-- <NotebookAdd24Filled/> -->
                        <svg width="1em" height="1em" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="larkui-icon larkui-icon-newbook-default"><g fill="none" fill-rule="evenodd"><path d="M135.095 36.265a58.24 58.24 0 0 0-3.647 12.801H86.952v144.537h95.981v-76.615a59.321 59.321 0 0 0 12.801 0v79.006c0 .407-.02.812-.06 1.214l-.037.327.033.2c.031.221.051.447.06.676l.003.23v14.692c0 15.317-12.416 27.734-27.733 27.734H58.013c-13.483 0-24.413-10.93-24.413-24.414 0-.184.002-.369.006-.553l.008-.222-.01-.194-.004-.231V64c0-15.317 12.417-27.733 27.733-27.733l73.762-.002Zm47.838 167.41-124.92.002A12.976 12.976 0 0 0 46.4 210.86v3.8l.01.075c.03.29.04.588.03.892l-.032.626-.008.4c0 6.414 5.2 11.614 11.614 11.614H168c8.247 0 14.933-6.686 14.933-14.934v-9.657ZM76.878 49.066l-15.545.002C53.086 49.067 46.4 55.753 46.4 64v132.739a22.944 22.944 0 0 1 11.614-3.136h18.865V49.066Z" fill="#585A5A" fill-rule="nonzero"></path><path d="M189.333 11.733c25.92 0 46.934 21.013 46.934 46.934 0 25.92-21.013 46.933-46.934 46.933-25.92 0-46.933-21.013-46.933-46.933 0-25.92 21.013-46.934 46.933-46.934Zm.88 18.774a5.632 5.632 0 0 0-5.632 5.632v16.895h-16.896a5.632 5.632 0 0 0 0 11.265h16.895l.001 16.896a5.632 5.632 0 0 0 11.264 0V64.299h16.896a5.632 5.632 0 1 0 0-11.264l-16.897-.001.001-16.895a5.632 5.632 0 0 0-5.632-5.632Z" fill="#00B96B"></path></g></svg>
                    </Icon>
                    <div class="info">
                        <p class="card-title">新建知识库</p>
                        <p>新建知识库</p>
                    </div>
                </div>
                <div class="new-doc-item">
                    <Icon size="18">
                        <!-- <CalendarPattern16Filled/> -->
                        <svg width="1em" height="1em" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="larkui-icon larkui-icon-template-center"><g fill="none" fill-rule="evenodd"><path d="M0-2h256v256H0z"></path><path d="M85.347 68.498c4.184 0 8.268.43 12.21 1.25l-10.487 42.1-.115.482c-2.668 11.56 1.745 23.148 10.454 30.14l.196.155-25.044 44.135C45.708 180.9 25.6 156.958 25.6 128.315c0-33.036 26.75-59.817 59.747-59.817Z" fill="#3384F5"></path><path d="m138.617 27.454.308.074c.003 0 .006.001.006.01l75.654 18.886c8.708 2.183 14.009 11.004 11.848 19.718l-18.87 75.777c-2.137 8.614-10.78 13.897-19.394 11.925l-.307-.073c-.003-.001-.006-.002-.007-.011l-2.925-.73-23.394-41.224a26.698 26.698 0 0 0-10.042-10.042c-12.824-7.278-29.12-2.781-36.397 10.042l-10.586 18.654c-3.805-3.903-5.565-9.626-4.157-15.303l18.87-75.777c2.137-8.614 10.78-13.897 19.393-11.926Z" fill="#ECB604"></path><path d="m149.63 118.563 51.308 90.407c3.546 6.249 1.355 14.189-4.893 17.735a13.01 13.01 0 0 1-6.421 1.695H87.01c-7.185 0-13.01-5.824-13.01-13.01 0-2.25.585-4.462 1.696-6.42l51.307-90.407c3.546-6.249 11.486-8.44 17.735-4.894a13.01 13.01 0 0 1 4.893 4.894Z" fill="#E4495B"></path></g></svg>
                    </Icon>
                    <div class="info">
                        <p class="card-title">模板中心</p>
                        <p>从模板中获取灵感</p>
                    </div>
                </div>
        </div>
        <p class="title">开始</p>
        <div>
          <div class="sort-select" @click="selectSort">
            <div class="bg-shade" :style="{'left':shadeMove+'px'}"></div>
            <label name="default">默认排序</label>
            <label name="time">时间排序</label>
          </div>
        </div> 
    </main>
</template>
<script setup lang="ts">
import {ref,reactive} from "vue"
import {NCard} from "naive-ui"
import {Icon} from "@vicons/utils"
import {IosArrowDown,MdNotificationsOutline} from "@vicons/ionicons4";
import {Home12Filled,NotebookAdd24Filled,DocumentAdd16Filled,CalendarPattern16Filled} from "@vicons/fluent";
import {} from "@vicons/ionicons4"
const shadeMove=ref<number>(5);
const selectSort = (e:any)=>{
  if(e.target.tagName=="LABEL")
  {
    shadeMove.value=e.target?.offsetLeft;
  }

}
</script>
<style scoped lang="scss">
main{
    padding:0 35px;
    .title{font-size: 18px;line-height: 75px;}
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
.sort-select{
    width: 152px;
    display: flex;
    position: relative;
    background-color: #eee;
    border-radius: 10px;
    padding: 5px;
    gap: 10px;
    .bg-shade{
        transition: all .3s;
        position: absolute;
        width:66px;
        height: 75%;
        background-color: white;
        z-index: 0;
        border-radius: 5px;
        box-shadow: 0 0 5px 2px #dedede;
    }
    label{
        padding: 5px;
        z-index: 0;
        cursor: pointer;
    }
}
</style>