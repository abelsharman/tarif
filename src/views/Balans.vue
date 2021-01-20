<template>
    <div>
        <p>Balans</p>
        <ul>
            <li v-for="(course, id) in courses" :key="id">
                {{ course }}
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
        const axios = require('axios');
        let self = this
        axios.get('https://marketbot.biz/user/current?user_token=74e1c39c2d74b0a4dd99447b64b808b3')
            .then(function(response){
                console.log(response)
                self.courses = response.data
            })

    }
}


</script>