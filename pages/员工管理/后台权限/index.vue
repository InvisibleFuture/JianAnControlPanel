<template lang="pug">
div
    h5 后台权限
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header")
                    div(style="display:flex;justify-content:space-between;width:100%")
                        div
                            nuxt-link(to="/员工管理/后台权限/新增职位" style="border:1px solid rgba(51, 153, 255, 1);background:rgba(0, 192, 239, 1);color:#fff;padding:.35em 1.5em; border-radius:.25em;") #[span 新增职位]
                table.table_satori
                    thead
                        tr
                            th 职位名称
                            th 涉及权限数
                            th 账号(人数)
                            th 描述
                            th 操作
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.职位名称 }}
                            td {{ item.涉及权限数 }}
                            td {{ item.人数 }}
                            td {{ item.描述 }}
                            td
                                nuxt-link(to="/员工管理/后台权限/查看职位" style="margin-right:.5em;")
                                    button.button.is-tiny 查看
                                nuxt-link(to="/员工管理/后台权限/修改职位" style="margin-right:.5em;")
                                    button.button.is-tiny(v-if="item.职位名称 !== '系统管理员'") 修改
                                button.button.is-tiny(v-if="item.职位名称 !== '系统管理员'") 删除

                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage
                    // 增加新员工
                    //button.button.is-primary(@click="modal_1=true") #[AppIcon(name="add")] #[span 新增职位]
                    AppModal(v-if="modal_1" @close="modal_1 = false")
                        template(slot="header")
                          h4.AppCard-title 新增
                        div(style="width:100%;")
                            div(style="padding-bottom:1rem;")
                                span(style="padding-right:1rem") 姓名
                                input.input.is-primary(placeholder='员工姓名', type='text')
                            div(style="padding-bottom:2rem;")
                                span(style="padding-right:1rem") 账号
                                input.input.is-primary(placeholder='员工账号', type='text')
                                p 初始密码为 123456
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
                            div(style="text-align:right")
                                button.button.is-primary(@click.prevent) 保存设定
                    // 修改员工状态
                    AppModal(v-if="modal_2" @close="modal_2 = false")
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
                            div(style="text-align:right")
                                button.button.is-primary(@click.prevent) 保存设定
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
                    "职位名称": "系统管理员",
                    "涉及权限数": 60,
                    "人数": 1,
                    "描述": "管理员账号具有最高权限",
                },
                {
                    "id": 2,
                    "职位名称": "客服",
                    "涉及权限数": 23,
                    "人数": 3,
                    "描述": "主要服务用沟通",
                }
            ],
        }
    }
}
</script>