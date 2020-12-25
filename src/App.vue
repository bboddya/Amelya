<template>
  <div id="app">

    <Header />

    <div class="container">
      <Navigation />
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  components: {
    Header,
    Navigation
  }
}
</script>

<style lang="sass">

*
  font-family: YanoneKaffeesatz, sans-serif
  box-sizing: border-box
  margin: 0
  padding: 0

// header
//.header-top
//  min-height: 115px
//  width: 100%
//  background-color: $primary-bg
//  padding: 40px 0
//
//  .header-top__wrap
//    display: flex
//    align-items: center
//    justify-content: space-around
//
//    .wrap__left
//      display: flex
//
//      .header_top__icon-phone
//        fill: $secondary-text
//        color: $secondary-text
//
//      .header_top__phone
//        color: $secondary-text
//        text-decoration: none
//        transition: all .3s
//
//      .header_top__phone:hover
//        color: $secondary-text-hover
//
//    .header_top__icon:not(:last-child)
//        margin-right: 50px
//
//.header-mid
//  padding-top: 55px
//  display: flex
//  justify-content: space-around
//  align-items: center
//
//  .wrap-left
//    display: flex
//    flex-direction: column
//
//    .header-mid__descr
//      color: $primary-text
//      font-size: 24px
//      font-weight: 500
//      text-align: end
//
//  .basket:hover
//    color: $primary-text
//    border-color: $primary-text
//
//  .basket
//    width: 299px
//    height: 71px
//    border-radius: 35px
//    border: 3px solid $primary-bg
//    display: flex
//    align-items: center
//    padding: 0 10px
//    text-decoration: none
//    transition: all .3s
//    color: $secondary-text
//    font-size: 24px
//    font-weight: 500
//
//    .basket__icon
//      width: 55px
//      height: 55px
//      background-color: $primary-bg
//      border-radius: 50%
//      display: flex
//      align-items: center
//      justify-content: center
//      margin-right: 35px
//
//    .basket__icon-img
//      fill: $primary-bg


</style>
