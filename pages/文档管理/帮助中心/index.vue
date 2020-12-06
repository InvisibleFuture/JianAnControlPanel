<template lang="pug">
div
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header")
                    div(style="display:flex;justify-content:space-between;width:100%")
                        div(style="border-bottom:1px solid #ccc;margin: 0 0 1rem 0; width: 12em") 帮助中心
                        div
                            nuxt-link(to="/文档管理/帮助中心/编写文档" style="color:#3399ff")
                                button(style="border:1px solid rgba(51, 153, 255, 1);background:rgba(0, 192, 239, 1);color:#fff;padding:.35em 1.5em; border-radius:.25em;") #[span 写文本]
                            input(placeholder='序号,标签' style="border-radius:1em;padding:.5em;height:2em;line-height:2em;border:1px solid #ccc; margin: 0 -1.65em 0 .5em;")
                            AppIcon(name="search")
                table.table_satori
                    thead
                        tr
                            th 序号
                            th 标题
                            th 分类
                            th 权重
                            th 层级
                            th 上级序号
                            th 操作
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.序号 }}
                            td
                                nuxt-link(to="/文档管理/帮助中心/编写文档" style="color:#3399ff") {{ item.标题 }}
                            td {{ item.分类 }}
                            td {{ item.权重 }}
                            td {{ item.层级 }}
                            td {{ item.上级序号 }}
                            td
                                button.button.is-tiny(v-if="item.分类==='文件夹'" @click="创建下级=true") 创建下级
                                button.button.is-tiny 暂停
                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage
                // 创建下级
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