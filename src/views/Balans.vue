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
            <div class="right_balans_left">
                <div class="right_balans_left_inner">
                    <div class="right_balans_left_inner_img">
                        <img src="../assets/camera.png" alt="">
                    </div>
                    <div class="right_balans_left_inner_summa">
                        <h2>Общий баланс аккаунта: </h2>
                        <h1>1,200 ₽</h1>
                    </div>


                    <form>
                        <div class="right_balans_left_inner_input" v-show="carta">
                            <input type="text" placeholder="Введите сумму" required>
                            <input ref="submit_button" type="submit" value="ПОПОЛНИТЬ">
                        </div>
                    </form>

                    <div class="right_balans_left_inner_add_cart_form" v-if="!carta">
                        <form>
                        <h3>Привязка карты к аккаунту</h3>
                        <p>Имя держателя карты:</p>
                        <input type="text" placeholder="Антон Анатолий Андреевич" required><br>

                        <div class="right_balans_left_inner_add_cart_form_1">
                            <p>Номер карты:</p>
                            <input type="text" placeholder="4149 5678 5584 4920" required>
                        </div>

                        <div class="right_balans_left_inner_add_cart_form_2">
                            <p>CVV код:</p>
                            <input type="text" placeholder="567" required>
                        </div>

                        <div class="right_balans_left_inner_add_cart_form_3">
                            <p>Срок действия:</p>
                            <input type="text" placeholder="ММ/ГГ" required>
                        </div>

                        <input type="submit" value="ПРИВЯЗАТЬ КАРТУ">
                        <a @click="showForm()">Отмена</a>
                        </form>
                    </div>

                    <div class="right_balans_left_inner_add_cart_button" @click="showForm()" v-if="carta && !carta_info">
                        <img src="../assets/menu_add.png" alt="add">
                        <p>Привязать карту</p>
                    </div>


                    <div class="right_balans_left_inner_carts" v-if="!carta" @click="showAnotherForm()">
                        <p>Ваши карты</p>
                        <div class="right_balans_left_inner_carts_cart">   
                            <img src="../assets/money.png" alt="">
                            <p>4149...4920<span>x</span></p>
                        </div>
                    </div>





                    <div class="right_balans_left_inner_add_cart_form" v-if="carta_info">
                        <form>
                        <h3>Данные о карте</h3>
                        <p>Имя держателя карты:</p>
                        <input type="text" placeholder="Антон Анатолий Андреевич" required><br>

                        <div class="right_balans_left_inner_add_cart_form_1">
                            <p>Номер карты:</p>
                            <input type="text" placeholder="4149 5678 5584 4920" required>
                        </div>

                        <div class="right_balans_left_inner_add_cart_form_2">
                            <p>CVV код:</p>
                            <input type="text" placeholder="567" required>
                        </div>

                        <div class="right_balans_left_inner_add_cart_form_3">
                            <p>Срок действия:</p>
                            <input type="text" placeholder="ММ/ГГ" required>
                        </div>

                        <input type="submit" value="ПОПОЛНИТЬ">
                        <a @click="closeAnotherForm()">Отмена</a>
                        </form>


                        <div class="right_balans_left_inner_add_cart_button right_balans_left_inner_add_cart_another_button" @click="closeAnotherForm()">
                            <img src="../assets/menu_add.png" alt="add">
                            <p>Привязать данную карту к аккаунту</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="right_balans_right">
                <table>
                    <tr class="table_first_row">
                        <th colspan=3>
                            Пополнение баланса WABA
                        </th>
                    </tr>


                    <tr class="table_odd_row">
                        <td class="table_odd_row_1">
                            <img src="../assets/whatsapp.png" alt=""><span>+79665989033</span>
                        </td>

                        <td class="table_odd_row_2"> 
                            <p>Баланс WABA: $9,900</p>
                        </td>

                        <td class="table_odd_row_3">
                            <p>Пополнить</p>
                        </td>
                    </tr>



                     <tr class="table_odd_row table_even_row">
                        <td class="table_odd_row_1">
                            <img src="../assets/whatsapp.png" alt=""><span>+79665989033</span>
                        </td>

                        <td class="table_odd_row_2"> 
                            <p>Баланс WABA: $9,900</p>
                        </td>

                        <td class="table_odd_row_3">
                            <p>Пополнить</p>
                        </td>
                    </tr>


                    <tr class="table_odd_row">
                        <td class="table_odd_row_1">
                            <img src="../assets/whatsapp.png" alt=""><span>+79665989033</span>
                        </td>

                        <td class="table_odd_row_2"> 
                            <p>Баланс WABA: $9,900</p>
                        </td>

                        <td class="table_odd_row_3">
                            <p>Пополнить</p>
                        </td>
                    </tr>



                     <tr class="table_odd_row table_even_row">
                        <td class="table_odd_row_1">
                            <img src="../assets/whatsapp.png" alt=""><span>+79665989033</span>
                        </td>

                        <td class="table_odd_row_2"> 
                            <p>Баланс WABA: $9,900</p>
                        </td>

                        <td class="table_odd_row_3">
                            <p>Пополнить</p>
                            
                        </td>
                    </tr>



                </table>
            </div>
        </div>
     </div>
</template>


<script scoped>
export default {
    name: 'Balans',
    data() {
        return{
            courses: [],
            carta: true, 
            carta_info: false
        }
    },
    methods: {
        showForm: function(){
            this.carta = !this.carta
        }, 
        showAnotherForm(){
            this.carta_info = true
            this.carta = true
            this.$refs.submit_button.style.display = 'none'
        },
        closeAnotherForm(){
            this.carta_info = false
            this.$refs.submit_button.style.display = 'inline-block'
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
        outline: none;
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
        outline: none;
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

    .right_balans_left{
        float: left;
        width: 44%;
        height: auto;
        border: 1px solid rgb(229,230,231);
        background-color: rgb(248,249,250);
        border-radius: 8px;
        box-shadow: 0px 0px 10px 3px rgb(239,240,245);
        margin: 30px;
        text-align: right;
    }
    .right_balans_left_inner{
        width: 90%;
        margin: 5%;
    }
    .right_balans_left_inner_img{
        display: inline-block;
        width: 39%;
    } 
    .right_balans_left_inner_img img{
        width: 100%;
    }
    .right_balans_left_inner_summa{
        display: inline-block;
        width: 59%;
        vertical-align: top;
    }
    .right_balans_left_inner_summa h2{
        padding-top: 20%;
        margin:0;
    }
    .right_balans_left_inner_summa h1{
        margin: 0;
        font-size: 4em;
        color: rgb(207,30,65)
    }
    .right_balans_left_inner_input{
        width: 100%;
    }
    .right_balans_left_inner_input input[type="text"]{
        background-image: url('../assets/money.png');
        background-size: 5%;
        background-position: left;
        background-position-x: 10px;
        background-position-y: 3px;
        background-repeat: no-repeat;
        width: 90%;
        margin-right: 5%;
        font-size: 1em;
        border: 0px;
        border-bottom: 1px solid grey;
        padding: 7px 0 7px 50px;
        background-color: rgb(249,250,252);
        outline: none;
        color: black;
    }
    .right_balans_left_inner_input input[type="text"]::placeholder{
        color: grey;
    }
    .right_balans_left_inner_input input[type="submit"]{
        color: white;
        font-weight: 600;
        font-size: 0.9em;
        border: 0px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
        padding: 14px;
        border-radius: 30px;
        width: 50%;
        margin-right: 25%;
        margin-top: 7%;
        transition: 0.8s all ease;
    }
    .right_balans_left_inner_input input[type="submit"]:hover{
        color: yellow;
    }
    .right_balans_left_inner_add_cart{
        margin-top: 100px;
    }
    .right_balans_left_inner_add_cart img{
        width: 3%;
        display: inline-block;
    }
    .right_balans_left_inner_add_cart p{
        display: inline-block;
        padding-bottom: 7px;
        vertical-align: middle;
        color: darkgrey;
        margin-left: 10px;
        font-size: 0.9em;
    }
    .right_balans_left_inner_add_cart_form{
        width: 90%;
        text-align: left;
        background-color: white;
        margin-top: 20px;
        padding: 30px;
        padding-top: 5px;
        border-radius: 8px;
    }
    .right_balans_left_inner_add_cart_form p{
        font-size: 0.9em;
        margin: 5px 0 5px 10px;

    }
    .right_balans_left_inner_add_cart_form input[type="text"]{
        width: 90%;
        border-radius: 10px;
        border: 1px solid grey;
        padding: 10px;    
        font-size: 0.9em;
    }
    .right_balans_left_inner_add_cart_form_1{
        width: 46%;
        display:inline-block;
        margin-top: 10px;
        margin-right: 5px;
    }
    .right_balans_left_inner_add_cart_form_2{
        width: 20%;
        display:inline-block;
        margin-right: 20px;
    }
    .right_balans_left_inner_add_cart_form_3{
        width: 25%;
        display:inline-block;
        margin-right: 5px;
    }
    .right_balans_left_inner_add_cart_form input[type="submit"]{
        color: white;
        font-weight: 600;
        font-size: 0.9em;
        border: 0px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
        padding: 14px;
        border-radius: 30px;
        width: 50%;
        margin-left: 15%;
        margin-top: 7%;
        transition: 0.8s all ease;
        display: inline-block;
    }
    .right_balans_left_inner_add_cart_form a{
        display: inline-block;
        color: darkgrey;
        margin-left: 20px;
    }
    .right_balans_left_inner_add_cart_button{
        margin-top: 100px;
    }
    .right_balans_left_inner_add_cart_button img{
        width: 3%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
    }
    .right_balans_left_inner_add_cart_button p{
        display: inline-block;
        vertical-align: middle;
        font-size: 0.9em;
        color: darkgrey;
    }
    .right_balans_left_inner_carts{
        background-color: inherit;
        text-align: left;
        width: 90%;
        
    }
    .right_balans_left_inner_carts_cart{
        padding: 5px 20px;
        font-size: 0.9em;
        border: 1px solid darkgrey;
        border-radius: 8px;
    }
    .right_balans_left_inner_carts_cart p{
        margin: 0;
        width: 80%;
        display: inline-block;
    }
    .right_balans_left_inner_carts_cart img{
        width: 30px;
        margin-right: 15px;
        vertical-align: top;
        display: inline-block;
    }
    .right_balans_left_inner_carts span{
        margin: 0;
        margin-left: 88%;
        font-size: 1.5em;
        font-weight: 800;
    }
    .right_balans_left_inner_add_cart_another_button{
        margin-top: 30px;
        text-align: center;
        font-size: 1.1em;
    }
    .right_balans_left_inner_add_cart_another_button img{
        width: 20px;
        margin-right: 0px;
    }
    .right_balans_right{
        width: 51%;
        display: inline-block;
    }
    .right_balans_right table{
        border-collapse: collapse;
        width: 90%;
        text-align: left;
        margin: 30px;
        border: 1px solid rgb(229,230,231);
        background-color: rgb(248,249,250);
        border-radius: 8px;
        box-shadow: 0px 0px 10px 3px rgb(239,240,245);
    }
    .right_balans_right th{
        border-radius: 15px;
        background-color: white;
        font-weight: 500;
        padding: 13px 0 13px 30px;
    }
    .table_odd_row{
        background-color: rgb(239,240,242)
    }
    .table_odd_row td{
        border-right: 1px solid rgb(229,230,231);
    }
    .table_odd_row img{
        width: 20px;
        vertical-align: middle;
        margin: 5px 10px 5px 30px;
    }
    .table_odd_row span{
        color: black;
        font-size: 0.9em;
        font-weight: 500;
    }
    .table_odd_row_1{
        width: 30%;
    }
    .table_odd_row_2 {
        width: 48%;
    }
    .table_odd_row_3{
        width: 20%;
    }
    .table_odd_row_2 p{
        font-weight: 500;
        font-size: 0.9em;
        margin-left: 30px;
        color: green;
    }
    .table_odd_row_3 p{
        color: rgb(207,30,65);
        font-size: 0.9em;
        border-bottom: 1px solid rgb(207,30,65);
        width: 60%;
        margin-left: 10%;
        cursor: pointer;
    }
    .table_even_row{
        background-color:  rgb(248,249,250) !important;
    }


</style>