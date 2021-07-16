<template>
  <transition name="slide-fade">
    <div class="back-top" @click.stop="goBack">
      <img class="img1" src="@/assets/_tortoise.svg" alt="">
      <img class="img2" src="@/assets/tortoise.svg" alt="">
      <p>Back</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "go-back",
  methods:{
    goBack(){
      this.$router.back();
    }
  }
}
</script>


<style scoped lang="less">
.back-top {
  background-color: #FFFFFF;
  position: fixed;
  right: 3rem;
  bottom: 15rem;
  border-radius: 25px;
  cursor: pointer;
  opacity: .3;
  transition: .3s;
  text-align: center;
  z-index: 99;
  img{
    width: 60px;
    height: 60px;
  }
  .img2{
    display: none;
  }
  &:hover img.img1{
    display: none;
  }
  &:hover img.img2{
    display: unset;
  }
}
@media (max-width: 600px){
  .back-top{
    display: none;
  }
}
</style>
