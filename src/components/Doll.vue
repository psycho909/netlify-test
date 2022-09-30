<script setup>
import { storeToRefs } from "pinia";
import { } from "../api";
import { Diary, DollText, MessageLB, Partners, Task } from "../lightbox";
import { mainStore } from "../store/index";
const props = defineProps(["page"])
const store = mainStore()
const { doll, level, point, type } = storeToRefs(store)
const grow = ref(0)
// 邀請碼
const invite = ref("")
const ajax = false;
// 時間
let timer = null
// 娃娃影片
const video = [{ type: 1, url: "../src/assets/mp4/1.mp4" }]
const videoUrl = computed(() => {
    const findVideo = video.find((v, i) => {
        return v.type == type.value
    })
    if (findVideo) {
        return findVideo.url
    }
    return "javascript:;"
})
// 養娃秘笈碼 分享
const shareInvite = () => {
    navigator.clipboard.writeText(invite.value);
    navigator.clipboard.readText().then((clipText) => {
        DollText("你的養娃秘笈(傳說)<br/>複製成功", 4);
    })
}

// 輸入養娃秘笈碼 確認
const inputInvite = () => {
    MessageLB()
}

// 任務內容
const viewTask = () => {
    Task()
}

// 領禮物
const takeAward = () => {
    DollText()
}

// 夥伴名單
const partnerList = () => {
    Partners()
}

// 成長日記
const viewDiary = () => {
    console.log(timer)
    Diary()
}
const growUp = () => {
    timer = setInterval(() => {
        grow.value++
    }, 1000);
}
onMounted(() => {
    growUp()
});

onUnmounted(() => {
    clearInterval(timer)
});
</script>
<template>
    <div class="doll-container container" :class="[props.page == 'doll' ? 'on' : '']">
        <div class="doll-main">
            <div class="doll-invite__box doll-invite__share">
                <div class="doll-invite__group">
                    <div class="doll-invite__title">養娃秘笈碼</div>
                    <div class="doll-invite__text">{{ store.invite || "" }}</div>
                </div>
                <a href="javascript:;" class="doll-btn doll-btn__share" @click="shareInvite">分享</a>
            </div>
            <div class="doll-invite__box doll-invite__input">
                <div class="doll-invite__group">
                    <div class="doll-invite__title">輸入養娃秘笈碼</div>
                    <input type="text" class="doll-invite__code" v-model="invite" />
                </div>
                <a href="javascript:;" class="doll-btn doll-btn__confirm" @click="inputInvite">確認</a>
            </div>

            <div class="doll-content">
                <div class="doll-inner">
                    <div class="doll-name">{{ doll || " " }}</div>
                    <div class="doll-point">
                        <div class="doll-point__title">累積點數</div>
                        <div class="doll-point__text">{{ point || 0 }}</div>
                    </div>
                    <div class="doll-level">
                        <div class="doll-level__title">目前階段</div>
                        <div class="doll-level__text">{{ level || "初生期" }}</div>
                    </div>
                    <div class="doll-doll">
                        <video :src="videoUrl" autoplay muted loop></video>
                    </div>
                    <a href="javascript:;" class="doll-btn doll-btn__task" @click="viewTask">任務內容</a>
                    <a href="javascript:;" class="doll-btn doll-btn__gift" @click="takeAward">領禮物</a>
                </div>
            </div>
            <div class="doll-btn-group">
                <a href="javascript:;" class="doll-btn doll-btn__partner" @click="partnerList">夥友名單</a>
                <a href="javascript:;" class="doll-btn doll-btn__diary" @click="viewDiary">成長日記</a>
            </div>
        </div>
    </div>
</template>