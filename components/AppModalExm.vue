<template lang="pug">
.modal-container
  .modal-bg(@click="$emit('close')")
  .modal.modalexm(:class="color")
    button.modal-dismiss(@click="$emit('close')" v-if="dismiss")
      AppIcon(name="close")
    .modal-header(v-if="hasHeaderSlot")
      slot(name="header" tag='h4' class="modal-title")
    .modal-body
      slot
    .modal-footer(v-if="hasFooterSlot")
      slot(name="footer")

</template>

<style lang="stylus">
.modalexm
  z-index: 2
  box-shadow: $boxShadow
  padding: 0
  max-width: 490px
  margin: 0 10px
  overflow:hidden

  .modal-header
    padding: 1rem
    background: rgba(254, 225, 205, 1)

    h4
      font-size: 18px
      font-weight: 100
      height:1em
      margin: 0 0 0 0

  .modal-body
    padding: 0 1rem

    div.tab
      border: 1px solid #ddd
      border-bottom: none
      overflow:hidden
      background: rgba(242, 242, 242, 1)
      span
        cursor: pointer
        padding: 5px 2.5em
        line-height: 2em
        color:#FFFFFF
        background: rgba(255, 102, 0, .3)

      span.active
        color:#FF6600
        background: #FFFFFF

    table
      color: #555
      width: 100%
      border-collapse: collapse

      th, td
        padding: 5px
        text-align: center
        border: 1px solid #ddd

  .modal-footer
    padding: 0 1rem 1rem 1rem

    button
      margin: 1em
      height: 34px
      width: 6em
      cursor: pointer
      border-radius: .25rem
      border: 1px solid rgba(255, 102, 0, 1)
    button.set
      background:rgba(255, 153, 0, 1)
      color:#fff
    button.close
      background: none
      color: rgba(255, 102, 0, 1)

  +mq($until: 'tablet')
    padding: 2em

  &-container
    z-index: 1070

  &-bg
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 0

  &.is-outlined
    background: $white

  .modal-dismiss
    font-size: 1rem
    z-index: 1

    .icon
      fill: $slategray

    &:hover
      .icon
        fill: $primary
</style>

<script>
export default {
  name: 'AppModal',
  props: {
    dismiss: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    }
  }
}
</script>
