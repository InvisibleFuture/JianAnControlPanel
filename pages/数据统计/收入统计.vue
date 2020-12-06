<template lang="pug">
div
    h1 收入统计
    //AppCard.u-mt-tiny
    //  .grid.is-widescreen-4
    //    .column
    //      .AppWidget1
    //        .AppWidget1-item
    //          .AppWidget1-item-header
    //            h5 充值收入
    //            span.u-color-slategray Average Weekly Profit
    //          .AppWidget1-item-footer
    //            span.h4.u-color-success +$19,600
    //        .AppWidget1-item
    //          .AppWidget1-item-header
    //            h5 赠送用户积分
    //            span.u-color-slategray Weekly Customer Orders
    //          .AppWidget1-item-footer
    //            span.h4.u-color-warning +1,300
    //        .AppWidget1-item
    //          .AppWidget1-item-header
    //            h5 用户使用积分
    //            span.u-color-slategray System bugs and issues
    //          .AppWidget1-item-footer
    //            span.h4.u-color-danger -27,49%
    //    .column
    //      .AppWidget1
    //        .AppWidget1-item
    //          .AppWidget1-item-header
    //            h5 当前用户人数
    //            span.u-color-slategray Average Weekly Profit
    //          .AppWidget1-item-footer
    //            span.h4.u-color-primary +36%
    //        .AppWidget1-item
    //          .AppWidget1-item-header
    //            h5 活跃人数
    //            span.u-color-slategray Yearly Expenses
    //          .AppWidget1-item-footer
    //            span.h4.u-color-secondary +225,700
    //        .AppWidget1-item
    //          .AppWidget1-item-header
    //            h5 新增人数
    //            span.u-color-slategray Overall Regional Logistics
    //          .AppWidget1-item-footer
    //            span.h4.u-color-warning -11,34%
    //    .column
    //      .AppWidget1
    //        .AppWidget1-item
    //          .AppWidget1-item-header
    //            h5 用户审核数
    //            span.u-color-slategray Average Weekly Profit
    //          .AppWidget1-item-footer
    //            span.h4.u-color-danger +21%
    //        .AppWidget1-item
    //          .AppWidget1-item-header
    //            h5 招聘审核数
    //            span.u-color-slategray Daily Transaction Increase
    //          .AppWidget1-item-footer
    //            span.h4.u-color-success +90%
    //        .AppWidget1-item
    //          .AppWidget1-item-header
    //            h5 二手审核数
    //            span.u-color-slategray Overall Revenue Increase
    //          .AppWidget1-item-footer
    //            span.h4.u-color-primary +50%
    .grid.has-space
        .column.is-desktop-4
            AppCard.is-full
                template(slot="header")
                    h4.AppCard-title 充值统计
                div(style="display:flex;text-align:center")
                    div(style="flex:1")
                        div(style="font-size:2rem;color:#FFCF0D;") 8888.00
                        div 充值收入(元)
                    div(style="flex:1")
                        div(style="font-size:2rem;color:#FFCF0D;") 8888
                        div 赠送用户积分
                    div(style="flex:1")
                        div(style="font-size:2rem;color:#FFCF0D;") 888
                        div 用户使用积分
                div(style="color:#999;font-size:14px; padding:.5rem;") {{时间}}
        .column.is-desktop-4
            AppCard.is-full
                template(slot="header")
                    h4.AppCard-title 用户统计
                div(style="display:flex;text-align:center")
                    div(style="flex:1")
                        div(style="font-size:2rem;color:#FFCF0D;") 8888
                        div 当前用户人数
                    div(style="flex:1")
                        div(style="font-size:2rem;color:#FFCF0D;") 8888
                        div 活跃人数
                    div(style="flex:1")
                        div(style="font-size:2rem;color:#FFCF0D;") 888
                        div 新增人数
                div(style="color:#999;font-size:14px; padding:.5rem;") {{时间}}
        .column.is-desktop-4
            AppCard.is-full
                template(slot="header")
                    h4.AppCard-title 信息统计
                div(style="display:flex;text-align:center")
                    div(style="flex:1")
                        div(style="font-size:2rem;color:#FFCF0D;") 8888
                        div 用户审核数(条)
                    div(style="flex:1")
                        div(style="font-size:2rem;color:#FFCF0D;") 8888
                        div 招聘审核数(条)
                    div(style="flex:1")
                        div(style="font-size:2rem;color:#FFCF0D;") 888
                        div 二手审核数(条)
                div(style="color:#999;font-size:14px; padding:.5rem;") {{时间}}
    .grid.has-space
        .column.is-desktop-6
            AppCard.is-full
                template(slot="header")
                    h4.AppCard-title 收入统计(元)
                VueApexCharts(type="area" :options="areaChart2.options" :series="areaChart2.series")
        .column.is-desktop-6
            AppCard.is-full
                template(slot="header")
                    h4.AppCard-title 用户信息统计
                VueApexCharts(type="area" :options="areaChart.options" :series="areaChart.series")
</template>

<script>
export default {
    data() {
        return {
            时间: `${this.to_dey()} 至 ${this.date_sx()} 数据统计`,
            areaChart: {
              options: {
                chart: {
                  id: 'areaChart'
                },
                colors: ['#2451F2', '#36D9B0', 'rgb(242, 36, 143)'],
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  curve: 'smooth'
                },
                xaxis: {
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
                },
                tooltip: {
                  fixed: {
                    enabled: false,
                    position: 'topRight'
                  }
                }
              },
              series: [
                {
                  name: '用户审核提交数',
                  data: [31, 40, 28, 51, 42, 109, 100]
                },
                {
                  name: '招聘审核提交数',
                  data: [11, 32, 45, 32, 34, 52, 41]
                },
                {
                  name: '二手审核提交数',
                  data: [19, 12, 5, 2, 14, 42, 21]
                }
              ]
            },
            areaChart2: {
              options: {
                chart: {
                  id: 'areaChart'
                },
                colors: ['#2451F2', '#36D9B0', 'rgb(242, 36, 143)'],
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  curve: 'smooth'
                },
                xaxis: {
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
                },
                tooltip: {
                  fixed: {
                    enabled: false,
                    position: 'topRight'
                  }
                }
              },
              series: [
                {
                  name: 'A 套餐',
                  data: [31, 40, 28, 51, 42, 109, 100]
                },
                {
                  name: 'B 套餐',
                  data: [11, 32, 45, 32, 34, 52, 41]
                }
              ]
            },
        }
    },
    methods: {
        date_sx() {
            //今天的时间
            var day2 = new Date();
            day2.setTime(day2.getTime())
            return day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate()
        },
        to_dey() {
            //昨天的时间
            var day1 = new Date();
            day1.setTime(day1.getTime() - 6 * 24 * 60 * 60 * 1000);
            return day1.getFullYear() + "-" + (day1.getMonth() + 1) + "-" + day1.getDate();
        }
    }
}
</script>