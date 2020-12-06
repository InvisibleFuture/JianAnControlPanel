<template lang="pug">
div
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header" style="display:flex;justify-content:space-between;width:100%")
                    h4.AppCard-title 用户列表
                    .input-group
                        //span.input-tag Name
                        input.input(placeholder='姓名 / 手机号', type='text')
                        a.button(href='#' style='display:block;min-width:5rem') 搜索
                table.table_satori
                    thead
                        tr
                            th 姓名
                            th 电话
                            th 积分
                            th 状态
                            th 创建时间
                            th 操作
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.姓名 }}
                            td {{ item.电话 }}
                            td
                                button(style="color:#3399ff;background:none;border:none;" @click="modal_1=true;显示积分还是消费=false") {{ item.积分 }}
                            td {{ item.状态 }}
                            td {{ item.创建时间 }}
                            td
                                button.button.is-tiny(@click="modal_1=true;显示积分还是消费=true") 消费记录
                                button.button.is-tiny(@click="modal_2=true") 编辑

                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage
                // 积分录
                AppModalExw(v-if="modal_3" @close="modal_3 = false")
                    template(slot="header")
                        h4 积分记录
                    div(style="width:100%;")
                        div.tab
                            span 消费
                            span.active 积分
                        table
                            thead
                                tr
                                    th 单号
                                    th 积分
                                    th 处理后金额
                                    th 获取/消耗方式
                                    th 来源
                                    th 消费时间
                            tbody
                                tr
                                    td 65905646
                                    td -1
                                    td 46
                                    td 视频获取
                                    td 网页
                                    td 2018-05-14 18:11
                                tr
                                    td 65905646
                                    td -1
                                    td 46
                                    td 签到
                                    td 网页
                                    td 2018-05-14 18:11
                                tr
                                    td 65905646
                                    td -1
                                    td 46
                                    td 充值获取
                                    td 网页
                                    td 2018-05-14 18:11
                                tr
                                    td 65905646
                                    td -1
                                    td 46
                                    td 查看手机
                                    td 网页
                                    td 2018-05-14 18:11
                    template(slot="footer" style="display:flex")
                        div(style="flex:1")
                        button.set(@click.prevent) 关闭
                // 消费记录
                AppModalExw(v-if="modal_1" @close="modal_1 = false")
                    template(slot="header")
                        h4 {{ 显示积分还是消费 ? "消费记录" : "积分记录" }}
                    div(style="width:100%;")
                        div.tab
                            span(:class="{active:显示积分还是消费}" @click="显示积分还是消费=true") 消费
                            span(:class="{active:!显示积分还是消费}" @click="显示积分还是消费=fasle") 积分
                        table(v-show="显示积分还是消费")
                            thead
                                tr
                                    th 单号
                                    th 消费金额
                                    th 支付方式
                                    th 来源
                                    th 消费时间
                            tbody
                                tr
                                    td 65905646
                                    td 40
                                    td 支付宝
                                    td 网页
                                    td 2018-05-14 18:11
                                tr
                                    td 56565
                                    td 60
                                    td 微信
                                    td APP
                                    td 2018-05-14 18:12
                        table(v-show="!显示积分还是消费")
                            thead
                                tr
                                    th 单号
                                    th 积分
                                    th 处理后金额
                                    th 获取/消耗方式
                                    th 来源
                                    th 消费时间
                            tbody
                                tr
                                    td 65905646
                                    td -1
                                    td 46
                                    td 视频获取
                                    td 网页
                                    td 2018-05-14 18:11
                                tr
                                    td 65905646
                                    td -1
                                    td 46
                                    td 签到
                                    td 网页
                                    td 2018-05-14 18:11
                                tr
                                    td 65905646
                                    td -1
                                    td 46
                                    td 充值获取
                                    td 网页
                                    td 2018-05-14 18:11
                                tr
                                    td 65905646
                                    td -1
                                    td 46
                                    td 查看手机
                                    td 网页
                                    td 2018-05-14 18:11
                    template(slot="footer" style="display:flex")
                        div(style="flex:1")
                        button.set(@click.prevent) 关闭
                // 编辑
                AppModalEx(v-if="modal_2" @close="modal_2 = false")
                    template(slot="header")
                        h4 编辑会员信息
                    div(style="width:100%;")
                        div(style="display:flex;")
                            div(style="width:50%;padding:0 1rem;")
                                div(style="display:flex;")
                                    span(style="padding-right:1rem;width:7em;text-align:right;") *姓名:
                                    .input-group(style="padding-bottom:1em;")
                                        input.input.is-black(type='text', placeholder='')
                                div(style="display:flex;")
                                    span(style="padding-right:1rem;width:7em;text-align:right;") *会员电话:
                                    .input-group(style="padding-bottom:1em;")
                                        input.input.is-black(type='text', placeholder='')
                                div(style="display:flex;")
                                    span(style="padding-right:1rem;width:7em;text-align:right;") *会员密码:
                                    .input-group(style="padding-bottom:1em;")
                                        input.input.is-black(type='text', placeholder='')
                            div(style="width:50%;padding:0 1rem;")
                                div(style="display:flex;padding-bottom:2rem;")
                                    span(style="padding-right:1rem;width:4em;text-align:right;") 性别:
                                    label.radio.is-inline
                                      input.radio-input(type='radio' name="status")
                                      span.radio-label 男
                                    label.radio.is-inline
                                      input.radio-input(type='radio' name="status")
                                      span.radio-label 女
                                    label.radio.is-inline
                                      input.radio-input(type='radio' name="status" checked)
                                      span.radio-label 未知
                                div
                                    div(style="display:flex;")
                                        span(style="padding-right:1rem;width:4em;text-align:right;") Email:
                                        .input-group(style="padding-bottom:1em;")
                                            input.input.is-black(type='text', placeholder='')
                                    div(style="display:flex;")
                                        span(style="padding-right:1rem;width:4em;text-align:right;") 备注:
                                        .input-group(style="padding-bottom:1em;")
                                            textarea.textarea.is-black(placeholder="备注")
                        div(style="border-top: 1px dashed #ccc; margin: 1rem;")
                        div
                            div(style="width:50%;padding:0 1rem;")
                                div(style="display:flex;")
                                    span(style="padding-right:1rem;width:7em;") 会员积分:
                                    .input-group(style="padding-bottom:1em;")
                                        input.input.is-black(type='text', placeholder='')
                                div(style="display:flex;")
                                    span(style="padding-right:1rem;width:7em;") 会员状态:
                                    label.radio.is-inline
                                      input.radio-input(type='radio' name="statusx" checked)
                                      span.radio-label 禁用
                                    label.radio.is-inline
                                      input.radio-input(type='radio' name="statusx")
                                      span.radio-label 启用
                    template(slot="footer")
                        button.set(@click.prevent) 保存
                        button.close 返回
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
            modal_3: false,
            显示积分还是消费: true,

            page: 28,   // int 整数, 当前是第几页
            pages: 32, // int 整数, 总计有多少页
            data: [
                {
                    "id": 2,
                    "姓名": "会员A",
                    "电话": "13726883225",
                    "积分": 160.00,
                    "状态": "启用",
                    "创建时间": "2018-03-04 20:02"
                },
                {
                    "id": 2,
                    "姓名": "会员B",
                    "电话": "13726883225",
                    "积分": 160.00,
                    "状态": "启用",
                    "创建时间": "2018-03-04 20:02"
                },
            ],
        }
    }
}
</script>