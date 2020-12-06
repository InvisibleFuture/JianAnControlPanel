<template lang="pug">
div
    h5 招聘信息
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header")
                    //h4.AppCard-title 用工列表
                    div
                        div(style="background:rgba(0, 192, 239, 1);color:#fff;width:300px;padding:1rem; font-size:14px")
                            span 待审核 
                            b(style="font-size:1.2em") 6
                            div(style="border-top:1px solid #555;margin:8px 0")
                            span(style="margin-right:1em") 前 7 天
                            span 通过 
                            b(style="font-size:1.2em;margin-right:1em") 6 
                            span 驳回 
                            b(style="font-size:1.2em;margin-right:1em") 6 
                        div(style="margin-top:.75em;")
                                select(style="width:9em;margin-right:.75em;border:1px solid #999;color:#999;font-size:14px;padding:5px")
                                    option(value="待审核") 待审核
                                    option(value="启用") 启用
                                    option(value="驳回") 驳回
                                    option(value="全部状态" selected) 全部状态
                                input(type='text', placeholder='名字/手机号' style="width:9em;border:1px solid #999;color:#999;font-size:14px;padding:8px")
                                button(style="background:rgba(0, 192, 239, 1);border:1px solid #999;color:#fff;font-size:14px;padding:8px") 搜索
                table.table_satori
                    thead
                        tr
                            th 发布人
                            th 电话
                            th 项目地点
                            th 招工工种(最多选3)
                            th 查看人数
                            th 状态
                            th 发布时间
                            th 操作
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.发布人 }}
                            td {{ item.电话 }}
                            td {{ item.项目地点 }}
                            td {{ item.招工工种 }}
                            td {{ item.查看人数 }}
                            td {{ item.状态 }}
                            td {{ item.发布时间 }}
                            td
                                button.button.is-tiny(v-if="item.状态!=='待审核'" @click="详细=true") 详细
                                button.button.is-tiny(v-if="item.状态==='待审核'" @click="审核=true") 审核
                                button.button.is-tiny(v-if="item.状态==='启用'") 下架
                                button.button.is-tiny(v-if="item.状态==='下架'") 启用

                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage

        // 详细
        AppModalEx(v-if="详细" @close="详细 = false")
            template(slot="header")
                h4 详细
            div(style="width:100%;")
                div(style="display:flex;")
                    div(style="width:50%;padding:0 1rem;")
                        div(style="font-size:14px;") 发布人
                        div 梁小辉
                        div(style="font-size:14px;margin-top:1em;") 查看人数
                        div 3
                    div(style="width:50%;padding:0 1rem;")
                        div(style="font-size:14px;") 电话
                        div 13726883225
                        div(style="font-size:14px;margin-top:1em;") 项目地点
                        div 广东省 广州市 天河区 海清路 17号1503
                div(style="padding:0 1rem;")
                    div(style="font-size:14px;margin-top:1em;") 项目详情
                        textarea.textarea.is-black(placeholder="")
                    div(style="font-size:14px;margin-top:1em;") *招工工种（由客服审核填写，最多写3个）
                    div 水泥工
                    div(style="font-size:14px;margin-top:1em;") 审核状态
                    div 启用
            template(slot="footer")
                button.close 返回
        // 审核
        AppModalEx(v-if="审核" @close="审核 = false")
            template(slot="header")
                h4 审核
            div(style="width:100%;")
                div(style="display:flex;")
                    div(style="width:50%;padding:0 1rem;")
                        div(style="font-size:14px;") 发布人
                        div 梁小辉
                        div(style="font-size:14px;margin-top:1em;") 查看人数
                        div 3
                    div(style="width:50%;padding:0 1rem;")
                        div(style="font-size:14px;") 电话
                        div 13726883225
                        div(style="font-size:14px;margin-top:1em;") 项目地点
                        div 广东省 广州市 天河区 海清路 17号1503
                div(style="padding:0 1rem;")
                    div(style="font-size:14px;margin-top:1em;") 项目详情
                        textarea.textarea.is-black(placeholder="")
                    div(style="font-size:14px;margin-top:1em;") *招工工种（由客服审核填写，最多写3个）
                    select(style="width:9em;margin-right:.75em;border:1px solid #999;color:#999;font-size:14px;padding:5px")
                        option(value="铆工") 铆工
                        option(value="焊工") 焊工
                        option(value="水泥工" selected) 水泥工
            template(slot="footer")
                button.set(@click.prevent) 通过
                button.close(@click.prevent) 驳回
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
            详细: false,
            审核: false,

            page: 28,   // int 整数, 当前是第几页
            pages: 32, // int 整数, 总计有多少页
            data: [
                {
                    "发布人": "会员A",
                    "电话": "13726883225",
                    "项目地点": "广东东莞",
                    "招工工种": "焊工/铆工",
                    "查看人数": 3,
                    "状态": "待审核",
                    "发布时间": "2018-03-04 20:02",
                },
                {
                    "发布人": "会员B",
                    "电话": "13726883225",
                    "项目地点": "广东广州",
                    "招工工种": "水泥工",
                    "查看人数": 4,
                    "状态": "驳回",
                    "发布时间": "2018-03-04 20:02",
                },
                {
                    "发布人": "会员A",
                    "电话": "13726883225",
                    "项目地点": "广东东莞",
                    "招工工种": "焊工/铆工",
                    "查看人数": 3,
                    "状态": "启用",
                    "发布时间": "2018-03-04 20:02",
                },
                {
                    "发布人": "会员A",
                    "电话": "13726883225",
                    "项目地点": "广东东莞",
                    "招工工种": "焊工/铆工",
                    "查看人数": 4,
                    "状态": "下架",
                    "发布时间": "2018-03-04 20:02",
                },
            ],
        }
    }
}
</script>