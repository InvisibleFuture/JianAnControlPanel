<template lang="pug">
div
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header")
                    div(style="display:flex;justify-content:space-between;width:100%")
                        div
                            //button.button.is-primary(@click="modal_2=true") #[AppIcon(name="add")] #[span 创建 banner]
                            button(@click="modal_2=true" style="border:1px solid rgba(51, 153, 255, 1);background:rgba(0, 192, 239, 1);color:#fff;padding:.35em 1.5em; border-radius:.25em;") #[span 创建BANNER]
                table.table_satori
                    thead
                        tr
                            th 序号
                            th 名称
                            th 显示位置
                            th 更新时间
                            th 查看图片
                            th 操作
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.序号 }}
                            td {{ item.名称 }}
                            td {{ item.显示位置 }}
                            td {{ item.更新时间 }}
                            td
                                button(@click="item.show = !item.show")
                                    AppIcon(name="image")
                                AppModal(v-if="item.show" @close="item.show = false")
                                    img(:src="item.图片")
                            td
                                button.button.is-tiny 前置
                                button.button.is-tiny(@click="modal_2=true") 编辑
                                button.button.is-tiny 删除
                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage
                    //button.button.is-primary(@click="modal_2=true") #[AppIcon(name="add")] #[span 创建 banner]
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
                    // 新建 Banner
                    AppModalExm(v-if="modal_2" @close="modal_2 = false")
                        template(slot="header")
                          h4.AppCard-title 新建 Banner
                        div(style="width:100%;")
                            div(style="padding-bottom:2rem;")
                                span(style="padding-right:1rem") 名称
                                input(placeholder='banner 名称', type='text' style="width:18em")
                            div(style="display:flex;padding-bottom:2rem;")
                                span(style="padding-right:1rem") 位置
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="status" checked)
                                  span.radio-label 网站
                                label.radio.is-inline
                                  input.radio-input(type='radio' name="status")
                                  span.radio-label APP
                            Dropzone(id="dropzoneImages" :options="imagesOptions")
                        template(slot="footer")
                            button.set(@click.prevent) 保存设定
                            button.close(@click.prevent) 返回
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
            imagesOptions: {
              url: 'https://httpbin.org/post',
              addRemoveLinks: true,
              acceptedFiles: 'image/*'
            },

            page: 28,   // int 整数, 当前是第几页
            pages: 32, // int 整数, 总计有多少页
            data: [
                {
                    "id": 2,
                    "序号": 1,
                    "名称": "关注建安网",
                    "显示位置": "网站",
                    "更新时间": "2020-10-12 10:30:40",
                    "图片": "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
                    "show": false,
                },
                {
                    "id": 2,
                    "序号": 1,
                    "名称": "送好礼",
                    "显示位置": "APP",
                    "更新时间": "2020-10-12 10:30:40",
                    "图片": "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
                    "show": false,
                },
            ],
        }
    }
}
</script>