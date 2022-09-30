<script setup>
import { } from "../api";
import { Info, SelectDoll } from "../lightbox";
const props = defineProps(["page"])
const emit = defineEmits(["changePage"])

// 參加活動
const eventJoin = () => {
    emit("changePage", "doll")
    SelectDoll()
}

// 活動資訊
const eventInfo = () => {
    Info()
}

// 選伺服器事件
$("body").on("click", "#server", function () {
    console.log($("#server option:checked").val())
    var characterHTML = '<option value="-1">選擇遊戲角色</option>';
    var data = [];
    data.forEach(function (v, i) {
        characterHTML += `<option value="${v}">${v}</option>`;
    });
    $("#character").html(characterHTML)
})
</script>
<template>
    <div class="entry-container container" :class="[props.page == 'entry' ? 'on' : '']">
        <div class="entry-main">
            <div class="entry-btn-group">
                <a href="javascript:;" class="entry-btn entry-btn__join" @click="eventJoin">參加活動</a>
                <a href="javascript:;" class="entry-btn entry-btn__info" @click="eventInfo">活動資訊</a>
            </div>
        </div>
    </div>
</template>