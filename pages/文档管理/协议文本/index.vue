<template lang="pug">
div
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header")
                    //h4.AppCard-title 
                    div(style="display:flex;justify-content:space-between;width:100%")
                        div(style="border-bottom:1px solid #ccc;margin: 0 0 1rem 0; width: 12em") 协议文本
                        div
                            nuxt-link(to="/文档管理/协议文本/编写文档" style="color:#3399ff")
                                button(style="border:1px solid rgba(51, 153, 255, 1);background:rgba(0, 192, 239, 1);color:#fff;padding:.35em 1.5em; border-radius:.25em;") #[span 写文本]
                            input(placeholder='标题,标签' style="border-radius:1em;padding:.5em;height:2em;line-height:2em;border:1px solid #ccc; margin: 0 -1.65em 0 .5em;")
                            AppIcon(name="search")
                table.table_satori
                    thead
                        tr
                            th 序号
                            th 标题
                            th 最后修改人
                            th 最后更新
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.序号 }}
                            td
                                nuxt-link(to="/文档管理/协议文本/编写文档" style="color:#3399ff") {{ item.标题 }}
                            td {{ item.最后修改人 }}
                            td {{ item.最后更新 }}

                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage
                    //nuxt-link(to="/文档管理/协议文本/编写文档" style="color:#3399ff")
                    //    button.button.is-primary #[AppIcon(name="add")] #[span 写文本]
                    AppModal(v-if="modal_1" @close="modal_1 = false")
                        form.form
                            .field
                                label.field-label 充值金额
                                input.input(type='number', placeholder='请输入金额')
                            .field
                                label.field-label 获得积分
                                input.input(type='number', placeholder='请输入可兑换的积分')
                            .field
                                button.button(@click.prevent) 保存设定
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

            page: 28,   // int 整数, 当前是第几页
            pages: 32, // int 整数, 总计有多少页
            data: [
                {
                    "id": 1,
                    "序号": "G1",
                    "标题": "服务协议",
                    "最后修改人": "梁家辉",
                    "最后更新": "2018-05-16 10:51:56",
                },
                {
                    "id": 2,
                    "序号": "G2",
                    "标题": "隐私政策",
                    "最后修改人": "郭富城",
                    "最后更新": "2018-05-16 10:51:56",
                }
            ],
        }
    }
}
</script>