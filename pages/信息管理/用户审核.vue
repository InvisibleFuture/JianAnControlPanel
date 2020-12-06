<template lang="pug">
div
    h5 用户管理
    .grid.has-space
        .column.is-desktop-12
            AppCard.is-full
                template(slot="header")
                    //h4.AppCard-title 用户列表
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
                            th 订单号
                            th 姓名
                            th 电话
                            th 认证种类
                            th 审核状态
                            th 创建时间
                            th 操作
                    tbody
                        tr(v-for="(item, i) in data")
                            td {{ item.订单号 }}
                            td {{ item.姓名 }}
                            td {{ item.电话 }}
                            td {{ item.认证种类 }}
                            td {{ item.审核状态 }}
                            td {{ item.创建时间 }}
                            td
                                button.button.is-tiny(@click="审核或修改(item.认证种类)") {{ item.审核状态==='待审核' ? "审核" : "修改"}}

                div(style="display:flex;justify-content:space-between;width:100%")
                    AppPage
                // 审核 - 技能证书
                AppModalEx(v-if="技能证书" @close="技能证书 = false")
                    template(slot="header")
                        h4 技能证书
                    div(style="width:100%;margin-top:-2em;")
                        AppTabs
                            AppTabsItem(v-for="(item,i) in [1,2,3]" :name="`第 ${i+1} 个`" :selected="i===1")
                                div(style="display:flex;")
                                    div(style="width:50%;padding:0 1rem;")
                                        div(style="font-size:14px;") 技能证书
                                        div 电工证
                                    div(style="width:50%;padding:0 1rem;")
                                        div(style="font-size:14px;margin-top:1em;") 领证时间
                                        div 2020-10-10
                                div(style="padding:0 1rem;")
                                    div(style="font-size:14px;margin-top:1em;") 项目详情
                                    div(style="font-size:14px;margin-top:1em;")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                    div(style="font-size:14px;margin-top:1em;") 审核状态
                                    label.radio.is-inline
                                      input.radio-input(type='radio' name="statusx" checked)
                                      span.radio-label 通过
                                    label.radio.is-inline
                                      input.radio-input(type='radio' name="statusx")
                                      span.radio-label 驳回
                                    div(style="font-size:14px;margin-top:1em;") *审核状态描述（返回申请者）
                                        textarea.textarea.is-black(placeholder="")
                    template(slot="footer")
                        button.set(@click.prevent) 保存
                        button.close 返回
                // 审核 - 项目经验
                AppModalEx(v-if="项目经验" @close="项目经验 = false")
                    template(slot="header")
                        h4 项目经验
                    div(style="width:100%;margin-top:-2em;")
                        AppTabs
                            AppTabsItem(v-for="(item,i) in [1,2,3]" :name="`第 ${i+1} 个`" :selected="i===1")
                                div(style="display:flex;")
                                    div(style="width:50%;padding:0 1rem;")
                                        div(style="font-size:14px;") 项目名称
                                        div 海心沙场馆建设
                                        div(style="font-size:14px;margin-top:1em;") 完工时间
                                        div 2020-10-11
                                    div(style="width:50%;padding:0 1rem;")
                                        div(style="font-size:14px;margin-top:1em;") 开工时间
                                        div 2020-10-10
                                        div(style="font-size:14px;margin-top:1em;") 所在地区
                                        div 广东省 广州市
                                div(style="padding:0 1rem;")
                                    div(style="font-size:14px;margin-top:1em;") 项目详情
                                    textarea.textarea.is-black(placeholder="")
                                    div(style="font-size:14px;margin-top:1em;")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                        img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:82px;max-height:82px;margin:.5em")
                                    div(style="font-size:14px;margin-top:1em;") 审核状态
                                    label.radio.is-inline
                                      input.radio-input(type='radio' name="statusx" checked)
                                      span.radio-label 通过
                                    label.radio.is-inline
                                      input.radio-input(type='radio' name="statusx")
                                      span.radio-label 驳回
                                    div(style="font-size:14px;margin-top:1em;") *审核状态描述（返回申请者）
                                        textarea.textarea.is-black(placeholder="")
                    template(slot="footer")
                        button.set(@click.prevent) 保存
                        button.close 返回
                // 审核 - 身份证
                AppModalExw(v-if="身份证" @close="身份证 = false")
                    template(slot="header")
                        h4 身份证审核
                    div(style="width:100%;")
                        div(style="display:flex;")
                            div(style="width:50%;margin:0 1rem;border:1px solid #efefef; min-height:200px;")
                                img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:100%;max-height:400px;")
                            div(style="width:50%;margin:0 1rem;border:1px solid #efefef; min-height:200px;")
                                img(src="https://duckfiles.oss-cn-qingdao.aliyuncs.com/eleduck/avatar/58fe722c-4a84-4021-9551-7e03889b09dd.jpg!64" style="max-width:100%;max-height:400px;")
                        div(style="padding:0 1rem;")
                            div(style="font-size:14px;margin-top:1em;") 审核状态
                            label.radio.is-inline
                              input.radio-input(type='radio' name="statusx" checked)
                              span.radio-label 通过
                            label.radio.is-inline
                              input.radio-input(type='radio' name="statusx")
                              span.radio-label 驳回
                            //div(style="font-size:14px;margin-top:1em;") *审核状态描述（返回申请者）
                            //    textarea.textarea.is-black(placeholder="")
                            div(style="display:flex")
                                div(style="width:15em")
                                    div(style="font-size:14px;margin-top:1em;") 申请者姓名
                                    input(type='text', placeholder='' style="width:12em;border:1px solid #999;color:#999;font-size:14px;padding:8px")
                                div
                                    div(style="font-size:14px;margin-top:1em;") 申请者身份证号
                                    input(type='text', placeholder='' style="width:24em;border:1px solid #999;color:#999;font-size:14px;padding:8px")
                    template(slot="footer")
                        button.set(@click.prevent) 保存
                        button.close 返回                
                // 审核 - 队伍认证
                AppModalExm(v-if="队伍认证" @close="队伍认证 = false")
                    template(slot="header")
                        h4 工作状态
                    div(style="width:100%;")
                        div(style="display:flex;")
                            div(style="width:50%;padding:0 1rem;")
                                div(style="font-size:14px;") 申请者工龄
                                div 3
                                div(style="font-size:14px;margin-top:1em;") 熟练度
                                div 学徒工
                                div(style="font-size:14px;margin-top:1em;") 队伍人数
                                div 2
                            div(style="width:50%;padding:0 1rem;")
                                div(style="font-size:14px;margin-top:1em;") 家乡
                                div 广州
                                div(style="font-size:14px;margin-top:1em;") 人员构成
                                div 班组
                        div(style="padding:0 1rem;")
                            div(style="font-size:14px;margin-top:1em;") 个人标签（最多3个)
                            div 文明工地
                            div(style="font-size:14px;margin-top:1em;") 审核状态
                            label.radio.is-inline
                              input.radio-input(type='radio' name="statusx" checked)
                              span.radio-label 通过
                            label.radio.is-inline
                              input.radio-input(type='radio' name="statusx")
                              span.radio-label 驳回
                            div(style="font-size:14px;margin-top:1em;") *审核状态描述（返回申请者）
                                textarea.textarea.is-black(placeholder="")
                    template(slot="footer")
                        button.set(@click.prevent) 保存
                        button.close 返回
                // 审核 - 基础信息
                AppModalExm(v-if="基础信息" @close="基础信息 = false")
                    template(slot="header")
                        h4 基础信息
                    div(style="width:100%;")
                        div(style="display:flex;")
                            div(style="width:50%;padding:0 1rem;")
                                div(style="font-size:14px;") 申请者姓名
                                div 梁小辉
                                div(style="font-size:14px;margin-top:1em;") 出生日期
                                div 1986-09-12
                                div(style="font-size:14px;margin-top:1em;") 期望地区
                                div 广东省 广州市 天河区
                                div(style="font-size:14px;margin-top:1em;") 所属工种
                                div 架子工
                            div(style="width:50%;padding:0 1rem;")
                                div(style="font-size:14px;") 性别
                                div 男
                                div(style="font-size:14px;margin-top:1em;") 民族
                                div 汉
                                div(style="font-size:14px;margin-top:1em;") 电话号码
                                div 13726883225
                        div(style="padding:0 1rem;")
                            div(style="font-size:14px;margin-top:1em;") 自我介绍
                                textarea.textarea.is-black(placeholder="")
                            div(style="font-size:14px;margin-top:1em;") 审核状态
                            label.radio.is-inline
                              input.radio-input(type='radio' name="statusx" checked)
                              span.radio-label 通过
                            label.radio.is-inline
                              input.radio-input(type='radio' name="statusx")
                              span.radio-label 驳回
                            div(style="font-size:14px;margin-top:1em;") *审核状态描述（返回申请者）
                                textarea.textarea.is-black(placeholder="")
                    template(slot="footer")
                        button.set(@click.prevent) 保存
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
            基础信息: false,
            队伍认证: false,
            项目经验: false,
            技能证书: false,
            身份证:   false,

            page: 28,   // int 整数, 当前是第几页
            pages: 32, // int 整数, 总计有多少页
            data: [
                {
                    "订单号": "313212312323",
                    "姓名": "会员A",
                    "电话": "13726883225",
                    "认证种类": "身份证",
                    "审核状态": "待审核",
                    "创建时间": "2018-03-04 20:02",
                },
                {
                    "订单号": "313212312323",
                    "姓名": "会员B",
                    "电话": "13726883225",
                    "认证种类": "基础信息",
                    "审核状态": "启用",
                    "创建时间": "2018-03-04 20:02",
                },
                {
                    "订单号": "313212312323",
                    "姓名": "会员C",
                    "电话": "13726883225",
                    "认证种类": "队伍认证",
                    "审核状态": "驳回",
                    "创建时间": "2018-03-04 20:02",
                },
                {
                    "订单号": "313212312323",
                    "姓名": "会员D",
                    "电话": "13726883225",
                    "认证种类": "项目经验",
                    "审核状态": "待审核",
                    "创建时间": "2018-03-04 20:02",
                },
                {
                    "订单号": "313212312323",
                    "姓名": "会员E",
                    "电话": "13726883225",
                    "认证种类": "技能证书",
                    "审核状态": "待审核",
                    "创建时间": "2018-03-04 20:02",
                },
            ],
        }
    },
    methods: {
        审核或修改(认证种类) {
            switch (认证种类) {
                case "身份证":
                    this.身份证 = true
                    break;
                case "基础信息":
                    this.基础信息 = true
                    break;
                case "队伍认证":
                    this.队伍认证 = true
                    break;
                case "项目经验":
                    this.项目经验 = true
                    break;
                case "技能证书":
                    this.技能证书 = true
                    break;
                default:
                    break;
            }
        }
    }
}
</script>