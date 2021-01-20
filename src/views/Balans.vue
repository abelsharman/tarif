<template>
    <div>
        <p>Balans</p>
        <ul>
            <li v-for="(course, id) in courses" :key="id">
                {{ course.title }}
            </li>
        </ul>

    </div>
</template>


<script>
export default {
    name: 'Balans',
    data() {
        return{
            courses: []
        }
    },
    created() {
        const axios = require('axios').default;
        let self = this
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
        axios.get('https://any-api.com/spotify_com/spotify_com/docs/_albums')
            .then(function(response){
                console.log(response)
                self.courses = response.data
            })

    }
}


</script>