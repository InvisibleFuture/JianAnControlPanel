<template lang="pug">
div
    h5 用户管理
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header")
                    // h4.AppCard-title 用户列表
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
                                option(value="身份证") 身份证
                                option(value="基础信息") 基础信息
                                option(value="队伍认证") 队伍认证
                                option(value="项目经验") 项目经验
                                option(value="职业技能") 职业技能
                                option(value="全部状态" selected) 全部认证
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
                            th 标题
                            th 姓名
                            th 电话
                            th 地区
                            th 分类
                            th 成交状态
                            th 审核状态
                            th 发布时间
                            th 操作
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.标题 }}
                            td {{ item.姓名 }}
                            td {{ item.电话 }}
                            td {{ item.地区 }}
                            td {{ item.分类 }}
                            td {{ item.成交状态 }}
                            td {{ item.审核状态 }}
                            td {{ item.发布时间 }}
                            td
                                button.button.is-tiny(v-if="item.审核状态==='待审核'" @click="二手交易审核=true") 审核
                                button.button.is-tiny(v-if="item.审核状态!=='待审核'" @click="二手交易详情=true") 详情
                                button.button.is-tiny(v-if="item.审核状态!=='待审核'" @click="二手交易审核=true") 修改

                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage
    // 二手交易审核
    AppModalExm(v-if="二手交易审核" @close="二手交易审核 = false")
        template(slot="header")
            h4 二手交易审核
        div(style="width:100%;")
            div(style="display:flex;")
                div(style="width:50%;padding:0 1rem;")
                    div(style="font-size:14px;") 标题
                    div 高价回收工厂，废旧五金，铜铁铝
                    div(style="font-size:14px;margin-top:1em;") 联系人
                    div 吉先生
                    div(style="font-size:14px;margin-top:1em;") 地区
                    div 广东
                    div(style="font-size:14px;margin-top:1em;") 状态
                    div 未成交
                div(style="width:50%;padding:0 1rem;")
                    div(style="font-size:14px;margin-top:1em;") 发布时间
                    div 2020-10-10 09:42:42
                    div(style="font-size:14px;margin-top:1em;") 手机号码
                    div 13726883225
                    div(style="font-size:14px;margin-top:1em;") 分类
                    div 工地废料-回收
            div(style="padding:0 1rem;")
                div(style="font-size:14px;margin-top:1em;") 详情
                textarea.textarea.is-black(placeholder="")
                div(style="font-size:14px;margin-top:1em;") 审核状态
                label.radio.is-inline
                  input.radio-input(type='radio' name="statusx" checked)
                  span.radio-label 通过
                label.radio.is-inline
                  input.radio-input(type='radio' name="statusx")
                  span.radio-label 驳回
                div(style="font-size:14px;margin-top:1em;") *二手分类(由客服审核填写)
                div
                    select(style="width:12em;margin-right:.75em;border:1px solid #999;color:#999;font-size:14px;padding:5px")
                        option(value="铆工") 未知
                        option(value="焊工") 其它
                        option(value="水泥工" selected) 工地废料
                    select(style="width:12em;margin-right:.75em;border:1px solid #999;color:#999;font-size:14px;padding:5px")
                        option(value="焊工") 出售
                        option(value="水泥工" selected) 回收
        template(slot="footer")
            button.set(@click.prevent) 保存
            button.close 返回
    // 二手交易详情
    AppModalExm(v-if="二手交易详情" @close="二手交易详情 = false")
        template(slot="header")
            h4 二手交易详情
        div(style="width:100%;")
            div(style="display:flex;")
                div(style="width:50%;padding:0 1rem;")
                    div(style="font-size:14px;") 标题
                    div 高价回收工厂，废旧五金，铜铁铝
                    div(style="font-size:14px;margin-top:1em;") 联系人
                    div 吉先生
                    div(style="font-size:14px;margin-top:1em;") 地区
                    div 广东
                    div(style="font-size:14px;margin-top:1em;") 状态
                    div 未成交
                div(style="width:50%;padding:0 1rem;")
                    div(style="font-size:14px;margin-top:1em;") 发布时间
                    div 2020-10-10 09:42:42
                    div(style="font-size:14px;margin-top:1em;") 手机号码
                    div 13726883225
                    div(style="font-size:14px;margin-top:1em;") 分类
                    div 工地废料-回收
            div(style="padding:0 1rem;")
                div(style="font-size:14px;margin-top:1em;") 详情
                textarea.textarea.is-black(placeholder="")
                div(style="font-size:14px;margin-top:1em;") 审核状态
                div 通过
                div(style="font-size:14px;margin-top:1em;") 二手分类
                div 工地废料 - 回收
        template(slot="footer")
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
            二手交易审核: false,
            二手交易详情: false,

            page: 28,   // int 整数, 当前是第几页
            pages: 32, // int 整数, 总计有多少页
            data: [
                {
                    "id": 2,
                    "标题": "高价回收工厂，废旧五金",
                    "姓名": "会员A",
                    "电话": "13726883225",
                    "地区": "广东-广州",
                    "分类": "工地废料回收",
                    "成交状态": "未成交",
                    "审核状态": "待审核",
                    "发布时间": "2018-03-04 20:02",
                },
                {
                    "id": 3,
                    "标题": "高价回收工厂，废旧五金",
                    "姓名": "会员B",
                    "电话": "13726883225",
                    "地区": "广东-广州",
                    "分类": "工地废料回收",
                    "成交状态": "已成交",
                    "审核状态": "启用",
                    "发布时间": "2018-03-04 20:02",
                },
                {
                    "id": 4,
                    "标题": "高价回收工厂，废旧五金",
                    "姓名": "会员C",
                    "电话": "13726883225",
                    "地区": "广东-广州",
                    "分类": "工地废料回收",
                    "成交状态": "已成交",
                    "审核状态": "驳回",
                    "发布时间": "2018-03-04 20:02",
                },
            ],
        }
    }
}
</script>