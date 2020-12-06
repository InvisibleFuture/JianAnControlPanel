<template lang="pug">
div
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                div
                    span(style="margin-right:1em") 职位名称
                    input(style="width:16em")
                div(style="display:flex; margin: 1em 0;")
                    span(style="margin-right:1em") 权限选择
                    div(style="display:flex;flex:1")
                        div(style="height:40em; border:1px solid #ccc; width:50%")
                            div.p-tree(v-if="full_pm.length")
                                ul.p-tree-content
                                    AppTreeItem(:full_pm="full_pm" :role_pm="role_pm" :tree_pm="tree_pm" :allowGetParentNode="allowGetParentNode")
                        div(style="height:40em;width:50%")
                            div(style="height:40em; border:1px solid #ccc")
                                div(style="background:#f5f5f5; padding:1em;") 已选择权限
                                div(v-for="item in role_pm" style="padding:.5em 1em; border-bottom:1px solid #ccc;")
                                    span {{ full_pm[full_pm.findIndex(itemx => itemx.id === item)].name }}
                                    p(style="font-size:14px") {{ full_pm[full_pm.findIndex(itemx => itemx.id === item)].info }}
                template(solt="footer")
                    button(style="border:1px solid rgba(51, 153, 255, 1);background:rgba(0, 192, 239, 1);color:#fff;padding:.35em 2em; border-radius:.25em;margin-right:1em") #[span 新增]
                    button(style="border:1px solid rgba(51, 153, 255, 1);background:rgba(0, 192, 239, 0);color:#555;padding:.35em 2em; border-radius:.25em;margin-right:1em") #[span 返回]
</template>

<script>
export default {
    data: () => ({
        // 定义一个包含所有权限的数组
        full_pm: [],
        // 定义一个当前拥有的权限数组
        role_pm: [],
        // 时间戳，用来更新tree_pm
        //timestamp: '',
        // 允许返回父节点
        allowGetParentNode: true,
        tree_pm: [],
    }),
    //created() {
    //    this.init();
    //},
    //watch: {
    //    timestamp() {
    //        this.init();
    //    }
    //},
    mounted() {
        this.getFullPermission();
    },
    methods: {
        init() {
            this.tree_pm = [].concat(this.role_pm);
        },
        // 模仿后端异步请求权限数据
        getFullPermission() {
            setTimeout(() => {
                this.full_pm = [
                    {
                        "code": "登录商户平台",
                        "name": "登录商户平台",
                        "info": "登录商户平台的说明",
                        "id": "5cae05bb899173245e09039c",
                        "type": 1
                    },
                    {
                        "code": "交易中心",
                        "name": "交易中心",
                        "info": "交易中心的说明",
                        "id": "5cae05bb899173245e09039d",
                        "type": 1
                    },
                    {
                        "code": "交易管理",
                        "name": "交易管理",
                        "info": "交易管理的说明",
                        "pid": "5cae05bb899173245e09039d",
                        "id": "5cae05bb899173245e09039e",
                        "type": 1
                    },
                    {
                        "code": "下载订单数据",
                        "name": "下载订单数据",
                        "info": "下载订单数据的说明",
                        "pid": "5cae05bb899173245e09039e",
                        "id": "5cae05bb899173245e09039x",
                        "type": 1
                    },
                ];
                this.role_pm = [
                    "5cae05bb899173245e09039c",
                    "5cae05bb899173245e09039d",
                    "5cae05bb899173245e09039e",
                    "5cae05bb899173245e09039x",
                ];
                this.init();
                //this.tree_pm = [
                //    "5cae05bb899173245e09039c",
                //    "5cae05bb899173245e09039d",
                //    "5cae05bb899173245e09039e",
                //    "5cae05bb899173245e09039x",
                //];
            }, 1000);
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    padding: 0;
    & ::v-deep li {
        list-style-type: none;
    }
    ::v-deep &.p-tree-content  > li.item > div.item-header > div.icon-fold > div.horizontal-line {
        visibility: hidden;
    }
}
</style>