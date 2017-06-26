<template>
    <div class="home">
        <swiper :options="swiperOption">
            <swiper-slide>
                <img src="../../assets/images/001.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/images/002.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/images/003.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/images/004.jpg">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .home {
        height: 100%;
    }
</style>
<script type="text/babel">
    import hemo from './hemo'

    export default {
        ...hemo
    }
</script>