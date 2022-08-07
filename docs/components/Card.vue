<template>
  <section class="wrapper">
    <div class="card" v-for="item in navList" key="{{item.index}}">
      <a :href="item.link" target="_blank">
        <img :src="item.icon" />
        <small>{{ item.description }}</small>
        <span>{{ item.title }}</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
// interface INavList {
//   index: number
//   title: string
//   description: string
//   icon: string
//   link: string
// }

const List = defineProps({
  navList: <any>{
    type: Array,
    required: true,
    desstination: String,
    title: String,
    icon: String,
    link: String
  }
})

// console.log(JSON.parse(JSON.stringify(List.navList)))
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding: 12px 0;
  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
      rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 176px;
    margin: 12px;
    transition: 0.15s all ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    a {
      text-decoration: none;
      padding: 20px;
      color: #03a9f4;
      font-size: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 100px;
      }
      small {
        font-size: 14px;
        padding: 4px;
        text-align: center;
        max-height: 80px;
        text-overflow: ellipsis;
        overflow: scroll;
        flex: 1;
      }
      span {
        min-height: 30px;
        font-size: 1.2rem;
        text-align: center;
      }
    }
  }
}
</style>
