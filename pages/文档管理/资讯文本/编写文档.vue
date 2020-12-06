<template lang="pug">
div
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full(style="font-size:14px;")
                div(style="border-bottom:1px solid #ccc;margin: 0 0 1rem 0; width: 12em") 资讯文本
                div(style="display:flex;margin: 1rem 0")
                    b(style="padding-right:.5rem;width:4em;") 标题:
                    input(placeholder='输入门店账号' style="width:24em")
                div(style="display:flex;margin: 1rem 0")
                    b(style="padding-right:.5rem;width:4em;") 地址:
                    span xxxxxxxxxxxxxxxx..
                div(style="display:flex;margin: 1rem 0")
                    b(style="padding-right:.5rem;width:4em;") 标签:
                    input(placeholder='以分号 ; 分隔' style="width:24em")
                div(style="display:flex;margin: 1rem 0")
                    b(style="padding-right:.5rem;width:4em;") 状态:
                    label.radio.is-inline
                      input.radio-input(type='radio' name="statusx" checked)
                      span.radio-label 启用
                    label.radio.is-inline
                      input.radio-input(type='radio' name="statusx")
                      span.radio-label 下架
                    label.radio.is-inline
                      input.radio-input(type='radio' name="statusx")
                      span.radio-label 置顶
                VueEditor(id="editor-basicx" v-model="editor.basic")
                div(style="margin:1em 0")
                    button(style="border:1px solid rgba(51, 153, 255, 1);background:rgba(0, 192, 239, 1);color:#fff;padding:.35em 2em; border-radius:.25em;margin-right:1em") #[span 新增]
                    button(style="border:1px solid rgba(51, 153, 255, 1);background:rgba(0, 192, 239, 0);color:#555;padding:.35em 2em; border-radius:.25em;margin-right:1em") #[span 返回]
</template>

<script>
export default {
  head() {
    return {
      title: 'Tibtab'
    }
  },
  data: () => ({
    editor: {
      basic: '<h1>Some initial content</h1>',
      editorCustom: '<h1>Some initial content</h1>',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block']
      ]
    }
  })
}
</script>