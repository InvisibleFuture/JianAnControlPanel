<template lang="pug">
div
    h5 员工管理
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header")
                    div(style="display:flex;justify-content:space-between;width:100%")
                        div
                            button(@click="modal_1=true" style="border:1px solid rgba(51, 153, 255, 1);background:rgba(0, 192, 239, 1);color:#fff;padding:.35em 1.5em; border-radius:.25em;") #[span 新增员工]
                table.table_satori
                    thead
                        tr
                            th 姓名
                            th 职位
                            th 账号
                            th 状态
                            th 操作
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.姓名 }}
                            td {{ item.职位 }}
                            td {{ item.账号 }}
                            td {{ item.状态 }}
                            td
                                button.button.is-tiny(@click="modal_2=true") 修改

                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage
                    // 增加新员工
                    //button.button.is-primary(@click="modal_1=true") #[AppIcon(name="add")] #[span 新增员工]
                    AppModalExm(v-if="modal_1" @close="modal_1 = false")
                        template(slot="header")
                          h4.AppCard-title 新增
                        div(style="width:100%;")
                            div(style="padding-bottom:1rem;")
                                span(style="padding-right:1rem") 姓名
                                input(placeholder='员工姓名', type='text' style="width:18em")
                            div(style="padding-bottom:2rem;")
                                span(style="padding-right:1rem") 账号
                                input(placeholder='员工账号', type='text' style="width:18em")
                                p(style="padding-left:3.5em; font-size:14px;") 初始密码为 123456
                            div(style="display:flex;padding-bottom:2rem;")
                                span(style="padding-right:1rem") 权限
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="inline" checked)
                                  span.radio-label 未分配
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="inline" checked)
                                  span.radio-label 客服
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="inline")
                                  span.radio-label 运营
                            div(style="display:flex;padding-bottom:2rem;")
                                span(style="padding-right:1rem") 状态
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="status" checked)
                                  span.radio-label 在职
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="status")
                                  span.radio-label 离职
                        template(slot="footer")
                            div(style="text-align:right")
                                button.set(@click.prevent) 保存设定
                    // 修改员工状态
                    AppModalExm(v-if="modal_2" @close="modal_2 = false")
                        template(slot="header")
                          h4.AppCard-title 修改
                        div(style="width:100%;")
                            div(style="display:flex;padding-bottom:2rem;")
                                span(style="padding-right:1rem") 姓名
                                span 克服
                            div(style="display:flex;padding-bottom:2rem;")
                                span(style="padding-right:1rem") 权限
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="inline" checked)
                                  span.radio-label 未分配
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="inline" checked)
                                  span.radio-label 客服
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="inline")
                                  span.radio-label 运营
                            div(style="display:flex;padding-bottom:2rem;")
                                span(style="padding-right:1rem") 状态
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="status" checked)
                                  span.radio-label 在职
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="status")
                                  span.radio-label 离职
                        template(slot="footer")
                            div(style="text-align:right")
                                button.set(@click.prevent) 保存设定
</template>

<script>
export default {
    head() {
        return {
            title: '员工管理',
        }
    },
    data() {
        return {
            modal_1: false,
            modal_2: false,

            page: 28,   // int 整数, 当前是第几页
            pages: 32,  // int 整数, 总计有多少页
            data: [
                {
                    "id": 2,
                    "姓名": "克服",
                    "职位": "客服",
                    "账号": "13926585599",
                    "状态": "在职",
                },
                {
                    "id": 2,
                    "姓名": "克服",
                    "职位": "客服",
                    "账号": "13926585599",
                    "状态": "离职",
                },
                {
                    "id": 2,
                    "姓名": "克服",
                    "职位": "客服",
                    "账号": "13926585599",
                    "状态": "在职",
                },
                {
                    "id": 2,
                    "姓名": "克服",
                    "职位": "客服",
                    "账号": "13926585599",
                    "状态": "在职",
                },
                {
                    "id": 2,
                    "姓名": "克服",
                    "职位": "客服",
                    "账号": "13926585599",
                    "状态": "在职",
                },
            ],
        }
    }
}
</script>