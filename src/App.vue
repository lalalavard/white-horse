<script lang="tsx">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  render() {
    return (
      <div>
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + TailwindCSS +JSX/TSX" />
      </div>
    )
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
