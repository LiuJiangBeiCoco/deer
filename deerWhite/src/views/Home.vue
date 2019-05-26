<template>
    <div>
        <a-row :gutter="16">
            <a-col :span="6">
                <div class="tag">
                    <p class="title">事实进行中的订单数量</p>
                </div>
            </a-col>
            <a-col :span="6">
                <div class="tag">
                    <p class="title">用户总余额</p> 
                </div>
            </a-col>
            <a-col :span="6">
                <div class="tag">
                    <p class="title">今日新增代金券</p> 
                </div>
            </a-col>
            <a-col :span="6">
                <div class="tag">
                    <p class="title">今日新增用户数量</p> 
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<style scoped>
.tag {
  border:1px solid #dedede;
  padding:10px;
}
</style>