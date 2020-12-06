<template lang=pug>
.pagination
    button.pagination-prev(v-if="10 > 5 && 10 > 5" style="background:rgba(231, 231, 231, 1);border:none;padding:5px 12px;margin:1px;font-weight:100;font-size:18px;")
        AppIcon(name="keyboard-arrow-left")

    button(v-for="(item, i) in 5" style="background:rgba(231, 231, 231, 1);border:none;padding:5px 12px;margin:1px;font-size:14px;font-weight:100;") {{ item }}
    //button.pagination-item 1
    //button.pagination-item.is-active  2
    //button.pagination-item 5

    button.pagination-next(v-if="10 > 5 && 3 + 5 < 10" style="background:rgba(231, 231, 231, 1);border:none;padding:5px 12px;margin:1px;font-weight:100;font-size:18px;")
        AppIcon(name="keyboard-arrow-right")
    span(style="height:2em;line-height:3em;padding:0 1rem;font-size:14px;") 目前第 1 页，共308条数据
</template>