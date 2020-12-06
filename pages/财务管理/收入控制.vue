<template lang="pug">
div
    h5 充值管理
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header")
                    button(@click="modal_1=true" style="border:1px solid rgba(51, 153, 255, 1);background:rgba(0, 192, 239, 1);color:#fff;padding:.35em 1.5em; border-radius:.25em;") #[span 新增套餐]
                table.table_satori
                    thead
                        tr
                            th 序号
                            th 金额
                            th 获得积分
                            th 操作
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.序号 }}
                            td {{ item.充值金额 }}
                            td {{ item.获得积分 }}
                            td
                                button.button.is-tiny(@click="modal_3=true") 修改
                                button.button.is-tiny(@click="modal_2=true") 删除
                                button.button.is-tiny 升序
                                button.button.is-tiny 降序

                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage

                    // 新增套餐
                    AppModalExm(v-if="modal_1" @close="modal_1 = false")
                        template(slot="header")
                            h4 新增套餐
                        div(style="margin:0 2em;")
                            .input-group(style="padding-bottom:1em;")
                                span(style="margin-right:1em;") 充值金额
                                input(type='number', placeholder='请输入金额' style="border:1px solid #555; font-size:14px;padding:.5em;width:18em")
                            .input-group(style="padding-bottom:1em;")
                                span(style="margin-right:1em;") 获得积分
                                input(type='number', placeholder='请输入积分' style="border:1px solid #555; font-size:14px;padding:.5em;width:18em")
                            p(style="font-size:14px;margin-left:6em") 提示: 用户浏览一次电话扣除1积分
                        template(slot="footer")
                            div(style="text-align: center; width:100%;")
                                button.set(@click.prevent) 保存设定
                                button.close 返回
                    // 修改套餐
                    AppModalExm(v-if="modal_3" @close="modal_3 = false")
                        template(slot="header")
                            h4 修改套餐
                        div(style="margin:0 2em;")
                            .input-group(style="padding-bottom:1em;")
                                span(style="margin-right:1em;") 充值金额
                                input(type='number', placeholder='请输入金额' style="border:1px solid #555; font-size:14px;padding:.5em;width:18em")
                            .input-group(style="padding-bottom:1em;")
                                span(style="margin-right:1em;") 获得积分
                                input(type='number', placeholder='请输入积分' style="border:1px solid #555; font-size:14px;padding:.5em;width:18em")
                            p(style="font-size:14px;margin-left:6em") 提示: 用户浏览一次电话扣除1积分
                        template(slot="footer")
                            div(style="text-align: center; width:100%;")
                                button.set(@click.prevent) 保存设定
                                button.close 返回

                    // 删除确认
                    AppModal(v-if="modal_2" @close="modal_2 = false" color="is-danger")
                      template(slot="header")
                        h4 删除套餐
                      p 是否删除该套餐 ?
                      template(slot="footer")
                        button.button.is-danger 确认删除
                        button.button.is-warning(@click="modal_7 = false") 取消
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

            page: 28,  // int 整数, 当前是第几页
            pages: 32, // int 整数, 总计有多少页
            data: [
                {
                    "id": 1,
                    "序号": 1,
                    "充值金额": 50,
                    "获得积分": 50,
                },
                {
                    "id": 2,
                    "序号": 2,
                    "充值金额": 100,
                    "获得积分": 100,
                }
            ],
        }
    }
}
</script>