<template>
    <div class="title">
        <Header />
        <h1>хуй</h1>

        <div class="asd" id="asd" nav="asd">
            <h1>asd</h1>
        </div>

        <div class="zxc" id="zxc">
            <h1>zxc</h1>
        </div>
    </div>
</template>


<script>
import Header from '../components/Header.vue'
export default {
    name: 'First',
    components: {
        Header,
    }
}
</script>

<style lang="sass" scoped>
    @keyframes appearing
        0%
            opacity: 1
        50%
            opacity: 0
        100%
            opacity: 1
    .title
        background: lightpink
        width: 200px
        height: 200px
    *
        scroll-behavior: smooth
        margin: 0
        animation: appearing 0.9s

    .asd
        width: 100%
        background: lightblue
        height: 80vh
    .zxc
        width: 100%
        background-color: lightgreen
        height: 80vh
</style>