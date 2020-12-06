<template lang="pug">
div
    //h1 基本信息
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full(style="font-size:14px;")
                div(style="border-bottom:1px solid #ccc;margin: 0 0 1rem 0; width: 12em") 基本信息
                div(style="display:flex;margin: 1rem 0")
                    b(style="padding-right:.5rem;width:4em;") 标题:
                    input(placeholder='3-16字' style="width:24em")
                div(style="display:flex;margin: 1rem 0")
                    b(style="padding-right:.5rem;width:4em;") 层级:
                    span 二级
                div(style="display:flex;margin: 1rem 0")
                    b(style="padding-right:.5rem;width:4em;") 类型:
                    label.radio.is-inline
                      input.radio-input(type='radio' name="statusx" checked)
                      span.radio-label 文件夹
                    label.radio.is-inline
                      input.radio-input(type='radio' name="statusx")
                      span.radio-label 页面
                div(style="display:flex;margin: 1rem 0")
                      b(style="padding-right.5rem;width:4em;") 权重:
                      input(placeholder='' value=1000 style="width:24em")
                VueEditor(id="editor-basic" v-model="editor.basic")
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