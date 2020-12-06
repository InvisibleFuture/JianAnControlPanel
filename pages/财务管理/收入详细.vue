<template lang="pug">
div
    h5 收入详细
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header")
                    h4.AppCard-title 营收流水
                table.table_satori
                    thead
                        tr
                            th 时间
                            th 支付金额
                            th 用户
                            th 用户手机
                            th 支付方式
                            th 第三方流水号
                            th 支付状态
                            th 操作
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.时间 }}
                            td {{ item.支付金额 }}
                            td {{ item.用户 }}
                            td {{ item.用户手机 }}
                            td {{ item.支付方式 }}
                            td {{ item.第三方流水号 }}
                            td {{ item.支付状态 }}
                            td
                                button.button.is-tiny(@click="modal_2=true") 详细
                                button.button.is-tiny(@click="modal_1=true" v-if="item.支付状态!='已退款'") 退款
                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage
                
                // 退款操作
                AppModalExm(v-if="modal_1" @close="modal_1 = false")
                    template(slot="header")
                        h4.AppCard-title 退款
                    div(style="width:100%;")
                        .field
                            p 用户：邹用户
                            p 时间：2018-06-15 17:28:33
                            p 金额：1500
                            label.field-label 本人操作密码
                            input.input(type='password', placeholder='请输入密码')
                        .field
                            label.field-label 退款理由
                            textarea.textarea(placeholder="请输入退款原因")
                    template(slot="footer")
                        button.set(@click.prevent) 确定退款
                        button.close(@click="modal_7 = false") 取消操作
                // 详细信息
                AppModalExm(v-if="modal_2" @close="modal_2 = false")
                    template(slot="header")
                        h4.AppCard-title 详细
                    div(style="width:100%;")
                        div 2018-06-15 17:36:36
                        div 用户 邹用户 微信支付 500元
                        div 微信流水号 1121545645465556
                        div 用户手机 13726883226
                        div 2018-06-16 17:36:36
                        div admin 操作原路退款 500元
                        div 理由：用户要求退款
                        div 退款流水：1234567890
                        div(style="height: 1em;")
                    template(slot="footer")
                        button.close(@click="modal_7 = false") 关闭

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
            modal_2: false,

            page: 28,   // int 整数, 当前是第几页
            pages: 32, // int 整数, 总计有多少页
            data: [
                {
                    "id": 2,
                    "时间": "2018-06-15 17:28",
                    "支付金额": 500,
                    "用户": "邹用户",
                    "支付方式": "微信",
                    "第三方流水号": "11215456454655565",
                    "支付状态": "已收款",
                },
                {
                    "id": 2,
                    "时间": "2018-06-15 17:28",
                    "支付金额": 500,
                    "用户": "流用户",
                    "支付方式": "支付宝",
                    "第三方流水号": "11215456454655569",
                    "支付状态": "已收款",
                },
                {
                    "id": 2,
                    "时间": "2018-06-15 17:28",
                    "支付金额": 500,
                    "用户": "方用户",
                    "支付方式": "支付宝",
                    "第三方流水号": "11215456454655562",
                    "支付状态": "已退款",
                }
            ],
        }
    }
}
</script>