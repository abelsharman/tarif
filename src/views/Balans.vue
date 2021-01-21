<template>
    <div class="left_block">
         <router-link to="/">
        <img style="padding-top: 20px;" src="../assets/sidebar_logo.png" alt="logo">
        </router-link >

        <div class="left_block_inner">
            <a href="#"><img src="../assets/sidebar_logo.png" alt="name"></a>
            <a href="#"><img src="../assets/sidebar_menu_home.png" alt="home"></a>
            <a href="#"><img src="../assets/sidebar_menu_list.png" alt="list"></a>
            <a href="#"><img src="../assets/sidebar_menu_add.png" alt="add"></a>
        </div>


         <div class="left_block_inner left_block_inner2">
            <a href="#"><img src="../assets/sidebar_help.png" alt="help"></a>
        </div>
    </div>

    <div class="right_block">
        <div class="right_block_inner">
            <h2>Ваш баланс</h2>

            <div class="right_block_inner_balans">
                <img src="../assets/photo.png" alt="">
           
               
               <div class="right_block_inner_balans_right">
                    <p>Ваш баланс: <span>0 ₽</span></p>
                    <router-link to="/balans">Пополнить баланс</router-link>
               </div>
                
            </div>


            <div class="right_block_inner_logout">
                <img src="../assets/header_exit.png">
            </div>
        </div>



        <div class="right_balans">

        </div>
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
        axios.get('https://marketbot.biz/user/current?user_token=74e1c39c2d74b0a4dd99447b64b808b3')
            .then(function(response){
                console.log(response)
            })

    }
}


</script>

<style>
    .left_block{
        float: left;
        width: 6%;
        
        height: 100%;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
    }
    .left_block_inner{
        margin-top: 200px;
    }
    .left_block_inner img{
        margin-top: 30px;
        display: block;
        margin-left: 35%;
        width: 30%;
        
    }
    .left_block_inner2{
        margin-top: 280px;
        padding-bottom: 42px;
    }




    .right_block{
        float: right;
        width: 94%;
        margin: 0;
    }
    .right_block_inner{
        width: 100%;
        margin: 0;
        text-align: left;
        height: 100px;
        background-color: rgb(249,250,251);
    }
    .right_block_inner h2{
        width: 65%;
        padding: 30px 40px;
        display: inline-block;
        margin: 0;
        font-size: 1.3em;
    }
    .right_block_inner_balans{
        width: 17%;
        display: inline-block;
    }
    .right_block_inner_balans img{
        width: 15%;
        vertical-align: middle;
        display: inline-block;
    }
    .right_block_inner_balans p{
        display: inline-block;
    }
    .right_block_inner_balans_right{
        vertical-align: bottom;
        margin-left: 15px;
        display: inline-block;
        line-height: 10px;
    }
    .right_block_inner_balans_right p,a{
        display: block;
        font-size: 14px;
    }
    .right_block_inner_balans_right a, span{
        color: rgb(207,30,65);
    }
    .right_block_inner_balans_right span{
        font-size: 22px;
        font-weight: 600;
    }
 



    .right_block_inner_logout{
        display: inline-block;
    }
    .right_block_inner_logout img{
        width: 40px;
        vertical-align: middle;
        border-left: 1px solid rgb(209,218,223);
        padding-left: 10px;
        padding: 15px 0 15px 50px;
    }
</style>