<template lang="pug">
div
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                div(style="border-bottom:1px solid #ccc;margin: 0 0 1rem 0; width: 12em") 个人资料
                .grid.has-space
                    .column.is-desktop-6
                        div 登录账号: 002liang
                        div 创建时间: 2020-01-31
                    .column.is-desktop-6
                        div 账号权限: 产品经理
                        div 姓名: 梁家辉
                div(style="border-bottom:1px solid #ccc;margin: 0 0 1rem 0; width: 12em") 基本信息
                    button(style="background:none;border:none;color:#3399ff;margin:0 1em") 修改
                .grid.has-space
                    .column.is-desktop-6
                        div 手机号: -------------
                    .column.is-desktop-6
                        div 邮箱: -------------
                div(style="border-bottom:1px solid #ccc;margin: 0 0 1rem 0; width: 12em") 安全信息
                .grid.has-space
                    .column.is-desktop-6
                        span 登录密码
                        button 修改
                AppModalExm(v-if="创建下级" @close="创建下级 = false")
                    template(slot="header")
                        h4 创建下级
                    div(style="width:100%;")
                        div(style="margin:1rem")
                            span(style="padding:1rem;") 上级
                            span 商户后台
                        div(style="margin:1rem")
                            span(style="padding:1rem;") 标题
                            input
                        div(style="margin:1rem")
                            span(style="padding:1rem;") 类型
                            label.radio.is-inline
                              input.radio-input(type='radio' name="statusx" checked)
                              span.radio-label 文件夹
                            label.radio.is-inline
                              input.radio-input(type='radio' name="statusx")
                              span.radio-label 页面
                        div(style="margin:1rem")
                            span(style="padding:1rem;") 权重
                            input(value="1000")
                    template(slot="footer")
                        button.set(@click.prevent style="width:12em; margin:0 auto") 创建
</template>

<script>
export default {
    head() {
        return {
            title: '收入控制'
        }
    },
    data() {
        return {
            modal_1: false,
            创建下级: false,

            page: 28,   // int 整数, 当前是第几页
            pages: 32, // int 整数, 总计有多少页
            data: [
                {
                    "序号": 1,
                    "标题": "如何注册",
                    "分类": "页面",
                    "权重": 1000,
                    "层级": "一级",
                    "上级序号": 1,
                },
                {
                    "序号": 2,
                    "标题": "创建账户",
                    "分类": "文件夹",
                    "权重": 1000,
                    "层级": "一级",
                    "上级序号": 1,
                },
                {
                    "序号": 3,
                    "标题": "如何注册",
                    "分类": "页面",
                    "权重": 1000,
                    "层级": "二级",
                    "上级序号": 7,
                },
            ],
        }
    }
}
</script>