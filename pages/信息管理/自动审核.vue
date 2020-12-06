<template lang="pug">
div
    h5 自动审核
    p 判断标准会首先判断黑名单，再白名单, 符合黑名单标准则直接拒绝, 符合白名单标准则直接通过, 需要客服训练自动审核库
    .grid.has-space
        .column.is-desktop-4
            AppCard.is-full
                template(slot="header" style="display:flex;")
                    h4.AppCard-title 基础服务信息
                    label.switcher
                        input.switcher-input(type='checkbox' checked)
                        span.switcher-body
                            span.switcher-handle
                div
                    p 名字
                        button(style="background:none;border:none;color:#02a7f0;" @click="黑名单=true") 黑名单
                        button(style="background:none;border:none;color:#02a7f0;" @click="白名单=true") 白名单
                    p 自我介绍
                        button(style="background:none;border:none;color:#02a7f0;" @click="黑名单=true") 黑名单
                        button(style="background:none;border:none;color:#02a7f0;" @click="白名单=true") 白名单
        .column.is-desktop-4
            AppCard.is-full
                template(slot="header" style="display:flex;")
                    h4.AppCard-title 对外信息
                    label.switcher
                        input.switcher-input(type='checkbox' checked)
                        span.switcher-body
                            span.switcher-handle
                div 
        .column.is-desktop-4
            AppCard.is-full
                template(slot="header" style="display:flex;")
                    h4.AppCard-title 项目经验
                    label.switcher
                        input.switcher-input(type='checkbox')
                        span.switcher-body
                            span.switcher-handle
                div
                    p 项目名称
                        button(style="background:none;border:none;color:#02a7f0;" @click="黑名单=true") 黑名单
                        button(style="background:none;border:none;color:#02a7f0;" @click="白名单=true") 白名单
                    p 项目描述
                        button(style="background:none;border:none;color:#02a7f0;" @click="黑名单=true") 黑名单
                        button(style="background:none;border:none;color:#02a7f0;" @click="白名单=true") 白名单
        .column.is-desktop-4
            AppCard.is-full
                template(slot="header" style="display:flex;")
                    h4.AppCard-title 技能证书
                    label.switcher
                        input.switcher-input(type='checkbox')
                        span.switcher-body
                            span.switcher-handle
                div
                    p 证书名称
                        button(style="background:none;border:none;color:#02a7f0;" @click="黑名单=true") 黑名单
                        button(style="background:none;border:none;color:#02a7f0;" @click="白名单=true") 白名单
        .column.is-desktop-4
            AppCard.is-full
                template(slot="header" style="display:flex;")
                    h4.AppCard-title 身份证
                    label.switcher
                        input.switcher-input(type='checkbox')
                        span.switcher-body
                            span.switcher-handle
                div
                    p 请使用阿里云 OCR 文字识别
        .column.is-desktop-4
            AppCard.is-full
                template(slot="header" style="display:flex;")
                    h4.AppCard-title 招聘信息
                    label.switcher
                        input.switcher-input(type='checkbox')
                        span.switcher-body
                            span.switcher-handle
                div
                    p 项目详情
                        button(style="background:none;border:none;color:#02a7f0;" @click="黑名单=true") 黑名单
                        button(style="background:none;border:none;color:#02a7f0;" @click="白名单=true") 白名单
        .column.is-desktop-4
            AppCard.is-full
                template(slot="header" style="display:flex;")
                    h4.AppCard-title 二手交易
                    label.switcher
                        input.switcher-input(type='checkbox')
                        span.switcher-body
                            span.switcher-handle
                div
                    p 标题
                        button(style="background:none;border:none;color:#02a7f0;" @click="黑名单=true") 黑名单
                        button(style="background:none;border:none;color:#02a7f0;" @click="白名单=true") 白名单
                    p 详情
                        button(style="background:none;border:none;color:#02a7f0;" @click="黑名单=true") 黑名单
                        button(style="background:none;border:none;color:#02a7f0;" @click="白名单=true") 白名单
    // 白名单
    AppModalExm(v-if="白名单" @close="白名单 = false")
        template(slot="header")
            h4 白名单
        div(style="width:100%;")
            div(style="font-size:14px;") 字数限制(与词组为并存条件)
                label.switcher.is-tiny
                    input.switcher-input(type='checkbox')
                    span.switcher-body
                        span.switcher-handle(style="top:.2em")
            div(style="margin: 1em 0")
                span 当该字段高于 
                input(value=0 style="width:4em")
                span  字数时则申请通过
            div(style="font-size:14px;") 当含有以下字或词组时，则申请通透。
            div(style="font-size:14px;") 不同字或词组之间用"，"逗号分隔
            textarea.textarea.is-black(placeholder="")
        template(slot="footer")
            button.set 保存
            button.close 返回
    // 黑名单
    AppModalExm(v-if="黑名单" @close="黑名单 = false")
        template(slot="header")
            h4 黑名单
        div(style="width:100%;")
            div(style="font-size:14px;") 字数限制
                label.switcher.is-tiny
                    input.switcher-input(type='checkbox')
                    span.switcher-body
                        span.switcher-handle(style="top:.2em")
            div(style="margin: 1em 0")
                span 当该字段低于 
                input(value=0 style="width:4em")
                span  字数时则驳回申请
            div(style="font-size:14px;") 当含有以下字或词组时，则驳回申请。
            div(style="font-size:14px;") 不同字或词组之间用"，"逗号分隔
            textarea.textarea.is-black(placeholder="")
        template(slot="footer")
            button.set 保存
            button.close 返回
</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Switcher'
    }
  },
  data: () => ({
    白名单: false,
    黑名单: false,
    colors: colors,
    sizes: sizes
  })
}
</script>
