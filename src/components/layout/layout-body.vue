<template>
    <div id="layout-body">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      <back-top></back-top>
    </div>
</template>

<script>
    import backTop from '@/components/back-top'
    import GoBack from "@/components/go-back";
    export default {
        name: "layout-body",
        data(){
          return{
              minHeight: 600
          }
        },
        components: {GoBack, backTop }
    }
</script>

<style scoped>
#layout-body{
    /* header = 80px */
    min-height: -moz-calc(100vh - 80px);
    min-height: -webkit-calc(100vh - 80px);
    min-height: calc(100vh - 80px);
}
</style>
