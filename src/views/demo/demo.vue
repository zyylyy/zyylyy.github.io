<template>
    <div>
        abc
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    div {
        &.title {
            .px2px(font-size, 40);
            margin: 40/@rate 0;
        }
        text-align: left;
    }
</style>

<script type="text/babel">
	import demo from './demo'

	export default {
		...demo
	}
</script>