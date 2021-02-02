<template>
    <div class="left_block">
        <a href="http://marketbot.biz/">
        <img style="padding-top: 20px;" src="../assets/sidebar_logo.png" alt="logo">
        </a>

        <div class="left_block_inner">
            <a href="https://marketbot.biz/user/home"><img v-bind:src="infoUser.avatar" alt="name"></a>
            <a href="https://marketbot.biz/user/home" style="text-decoration:none"><small style="color:white;">{{ infoUser.username }}</small></a>
            <a href="https://marketbot.biz/page/show/main"><img src="../assets/sidebar_menu_home.png" alt="home"></a>
            <small style="color:white;font-size:0.7em;">Главная</small>
            <router-link to="/"><img src="https://marketbot.biz/assets//Marketbot/img/sidebar-menu-list.png" alt="list"></router-link>
            <small style="color:white;font-size:0.7em;">Боты</small>
            <a href="https://marketbot.biz/bot/create"><img src="../assets/sidebar_menu_add.png" alt="add"></a>
            <small style="color:white;font-size:0.7em;">Создать бота</small>
        </div>


         <div class="left_block_inner left_block_inner2">
            <a href="https://marketbot.biz/977"><img src="../assets/sidebar_help.png" alt="help"></a>
        </div>
    </div>

    <div class="right_block">
        <div class="right_block_inner">
            <h2>Ваш баланс</h2>

            <div class="right_block_inner_balans">
                <img src="../assets/photo.png" alt="">
           
               
               <div class="right_block_inner_balans_right">
                    <p>Ваш баланс: <span style="font-size:1.1em;">{{ Math.round(this.info.user_balance) }} ₽</span></p>
                    <router-link to="/balance">Пополнить баланс</router-link>
               </div>
                
            </div>


            <div class="right_block_inner_logout">
                <a href="https://marketbot.biz/user/logout"><img src="../assets/header_exit.png"></a>
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
                        <h1>{{ Math.round(this.info.user_balance) }} ₽</h1>
                    </div>


                    
                        <div class="right_balans_left_inner_input" v-show="carta">
                            <input type="text" placeholder="Введите сумму" required>
                            <input ref="submit_button" type="submit" @click="submitBalance" value="ПОПОЛНИТЬ">
                        </div>
                    

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

                    <div class="right_balans_left_inner_add_cart_button" @click="showForm()" v-if="carta && !carta_info && !this.info.cc.saved" >
                        <img src="../assets/menu_add.png" alt="add">
                        <p>Привязать карту</p>
                    </div>


                    <div class="right_balans_left_inner_carts" v-if="this.info.cc.saved" @click="showAnotherForm()">
                        <p>Ваши карты</p>
                        <div class="right_balans_left_inner_carts_cart">   
                            <img src="../assets/money.png" alt="{{ this.info.cc.type }}">
                            <p>{{ this.info.cc.masked_num }}<span>x</span></p>
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


                    <tr class="table_odd_row" v-for="(item,index) in this.info.botlist" :key="index">
                        
                        <td class="table_odd_row_1" style="background-color: rgb(248,249,250);" v-if="index % 2 == 0">
                            <img src="../assets/logo_whatsapp.png" alt=""><span>+{{ item.tel }}</span>
                        </td>


                        <td class="table_odd_row_1" v-if="index % 2 == 1">
                            <img src="../assets/logo_whatsapp.png" alt=""><span>+{{ item.tel }}</span>
                        </td>

                        <td class="table_odd_row_2" style="background-color: rgb(248,249,250);" v-if="index % 2 == 0"> 
                            <img v-if="item.waba_balance_usd == 0" src="../assets/danger.png" alt="danger">
                            <p v-if="item.waba_balance_usd == 0" style="color: red;">Баланс WABA: ${{ item.waba_balance_usd }}</p>

                            <p v-if="item.waba_balance_usd > 0">Баланс WABA: ${{ item.waba_balance_usd }}</p>
                        </td>


                        <td class="table_odd_row_2" v-if="index % 2 == 1"> 
                           <img v-if="item.waba_balance_usd == 0" src="../assets/danger.png" alt="danger">
                            <p v-if="item.waba_balance_usd == 0" style="color: red;">Баланс WABA: ${{ item.waba_balance_usd }}</p>

                            <p v-if="item.waba_balance_usd > 0">Баланс WABA: ${{ item.waba_balance_usd }}</p>
                        </td>

                        <td class="table_odd_row_3" style="background-color: rgb(248,249,250);" v-if="index % 2 == 0">
                            <div class="table_add_balans" v-show="addBalans">
                                <input type="text" required>
                                <input type="hidden" v-bind:value="item.id">
                                <button type="submit" @click="submitAmountToFill"></button>
                            </div>
                            <p @click="addBalansForm">Пополнить</p>
                        </td>



                        <td class="table_odd_row_3" v-if="index % 2 == 1">
                            <div class="table_add_balans" v-show="addBalans">
                                <input type="text">
                                <input type="hidden" value="{{ item.id }}">
                                <button type="submit" @click="submitAmountToFill"></button>
                            </div>
                            <p @click="addBalansForm">Пополнить</p>
                        </td>
                    </tr>
                </table>




                <div class="right_balans_right_count">
                    <h4>Выставление счета для юридических лиц</h4>

                    <div class="right_balans_right_count_inner" v-if="billForm" @click="this.billForm = !this.billForm">
                        <img src="../assets/menu_add.png" alt="add">
                        <p>Создать новый счет</p>
                    </div>


                    <div v-if="!billForm" class="right_balans_right_count_bill">   
                        <div class="right_balans_right_count_bill_1">
                            <p>Получатель платежа:</p>
                            <input type="text" placeholder="ОАО Русгазбанк" required>
                        </div>

                        <div class="right_balans_right_count_bill_2">
                            <p>E-mail для отправки:</p>
                            <input type="text" placeholder="mail@gmail.com" required>
                        </div>

                        <br>

                        <div class="right_balans_right_count_bill_3">
                            <p>ИНН:</p>
                            <input type="text" placeholder="1234567890" required>
                        </div>

                        <div class="right_balans_right_count_bill_4"> 
                            <p>КПП:</p>
                            <input type="text" placeholder="1234567890" required>
                        </div>

                        <div class="right_balans_right_count_bill_5">
                            <p>ОГРН:</p>
                            <input type="text" placeholder="12345678901234567890" required>
                        </div>

                      
                        <div class="right_balans_right_count_bill_6">
                            <p>Сумма,руб:</p>
                            <input type="text" placeholder="5000" required>
                        </div>

                        <input type="submit" value="ОТПРАВИТЬ СЧЕТ" @click="this.billForm = !this.billForm">


                        <div class="right_balans_right_count_bill_7">
                            <img src="../assets/down_arrow.png" alt="">
                            <a @click="this.billForm = !this.billForm">Скачать счет в PDF</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
     </div>
</template>


<script scoped>
export default {
    name: 'Balans',
    data() {
        return{
            info: [],
            infoUser: [],
            carta: true, 
            carta_info: false,
            addBalans: false,
            billForm: true
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
        }, 
        addBalansForm(event){
            event.target.parentNode.childNodes[0].style.display = 'block'
            event.target.style.display = 'none'
        },
        closeBalansForm(event){
            event.target.parentNode.parentNode.childNodes[1].style.display = 'block'
            event.target.parentNode.style.display = 'none'
        },
        submitAmountToFill(event){
            event.target.parentNode.parentNode.childNodes[1].style.display = 'block'
            event.target.parentNode.style.display = 'none'
            let a = 'https://marketbot.biz/tariff/get_data/?botid=10140&user_token=9c329f7404f8d74f0cf841e35b7e4680'
            let uri =a.split('?');
            if (uri.length == 2){
                let vars = uri[1].split('&');
                var getVars = {};
                let tmp = '';
                vars.forEach(function(v){
                    tmp = v.split('=');
                    if(tmp.length == 2)
                        getVars[tmp[0]] = tmp[1];
                    });
            
            }


            const axios = require('axios');
            const params = new URLSearchParams()
            params.append('user_token', getVars.user_token)
            params.append('waba', event.target.parentNode.childNodes[1].value)
            params.append('amount', event.target.parentNode.childNodes[0].value)
        

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            axios.post('http://marketbot.biz/balance/refill', params, config)
                .then(function (response) {
                    console.log(response)
                    if(response.data.paid == true){
                        alert('Транзакция успешна')
                    }
                    else{
                        alert(response.data.errmsg)
                    }
                    
    
                })
                

        },
        numpf(n) {
            let f = 'день'
            let s = 'дня'
            let t = 'дней'
            n = n % 100
            let n10 = n % 10
            if ( (n10 === 1) && ( (n === 1) || (n > 20) ) ) {
                return f;
            } else if ( (n10 > 1) && (n10 < 5) && ( (n > 20) || (n < 10) ) ) {
                return s;
            } else {
                  return t;
            }
        },
        submitBalance(event){
            const axios = require('axios');
            const params = new URLSearchParams()
            let a = 'https://marketbot.biz/tariff/get_data/?botid=10140&user_token=9c329f7404f8d74f0cf841e35b7e4680'
            let uri =a.split('?');
            if (uri.length == 2){
                let vars = uri[1].split('&');
                var getVars = {};
                let tmp = '';
                vars.forEach(function(v){
                    tmp = v.split('=');
                    if(tmp.length == 2)
                        getVars[tmp[0]] = tmp[1];
                    });
            
            }


            params.append('user_token', getVars.user_token)
            params.append('waba', 0)
            params.append('amount', event.target.parentNode.childNodes[0].value)
        

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            axios.post('http://marketbot.biz/balance/refill', params, config)
                .then(function (response) {
                    if(response.data.paid == true){
                        alert('Транзакция успешна')
                    }
                    else{
                        alert(response.data.errmsg, response.data.url, response.data.paid)
                    }
                    
    
                })
        }

        
    },
    created() {
        const axios = require('axios');
        let self = this
        axios.get('http://marketbot.biz/balance/get_data?user_token=9c329f7404f8d74f0cf841e35b7e4680')
            .then(function(response){
                self.info = response.data
            })

        axios.get('https://marketbot.biz/user/current?user_token=74e1c39c2d74b0a4dd99447b64b808b3')
            .then(function(response){
                self.infoUser = response.data
            })

    }
}


</script>

<style>
    .left_block{
        float: left;
        width: 6%;
        height: 100%;
        min-width: 103px;
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
        min-width: calc(100% - 103px) !important;
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
        width: 20%;
        padding: 30px 0 30px 3%;
        display: inline-block;
        margin: 0;
        font-size: 1.3em;
    }
    .right_block_inner_balans{
        padding-top: 1%;
        width: 60%;
        display: inline-block;
        text-align: right;
        padding-right: 2%;
    }
    .right_block_inner_balans img{
        height: 30px;
        width: auto;
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
        width: 15%;
        display: inline-block;
    }
    .right_block_inner_logout img{
        width: 20%;
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
        width: 46%;
    }
    .table_odd_row_3{
        width: 23%;
    }
    .table_odd_row_2 p{
        font-weight: 500;
        font-size: 0.9em;
        margin-left: 30px;
        color: green;
    }
    .table_odd_row_2_red{
        width: 48%;
    }
    .table_odd_row_2_red p{
        font-weight: 500;
        font-size: 0.9em;
        margin-left: 0px;
        color: rgb(207,30,65);
        display: inline-block;
    }
    .table_odd_row_2_red img{
        width: 5%;
        display: inline-block;
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
    .table_add_balans input[type="text"]{
        width: 50%;
        border: 1px solid lightgrey;
        text-align: center;
        outline: none;
        padding: 3px 10px;
        border-radius: 5px;
        margin: 0px 5px 0px 10px;
    }
    .table_add_balans button{
        width: 20px;
        vertical-align: top;
        height: 20px;
        background-image: url('../assets/check.png');
        background-position: center;
        background-size: cover;
        border: 0px;
    }
    .right_balans_right_count{
        border-collapse: collapse;
        width: 90%;
        text-align: left;
        margin: 30px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border: 1px solid rgb(229,230,231);
        background-color: rgb(248,249,250);
        box-shadow: 0px 0px 10px 3px rgb(239,240,245);
    }

    .right_balans_right_count h4{
        margin: 0;
        background-color: white;
        font-weight: 500;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding: 13px 0 13px 30px;
    }
    .right_balans_right_count_inner{
        width: 100%;
        padding: 10px 0;
        text-align: center;
    }
    .right_balans_right_count_inner img{
        width: 3%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
    }
    .right_balans_right_count_inner p{
        display: inline-block;
        vertical-align: middle;
        font-size: 1em;
        color: darkgrey;
    }
    .right_balans_right_count_bill p{
        font-size: 0.9em;
        margin: 0;
        margin-top: 10px;
        margin-left: 10px;
        margin-bottom: 5px;
        
    }
    .right_balans_right_count_bill input[type="text"]{
        border-radius: 10px;
        border: 1px solid grey;
        padding: 10px;    
        font-size: 0.9em;
        width: 85%;
        background-color: inherit;
        outline: none;
    }
    .right_balans_right_count_bill_1{
        margin-left: 4%;
        width: 48%;
        display: inline-block;
    }
    .right_balans_right_count_bill_2{
        width: 48%;
        display: inline-block;
    }
    .right_balans_right_count_bill_3{
        margin-left: 4%;
        width: 30%;
        display: inline-block;
    }
    .right_balans_right_count_bill_4{
        width: 30%;
        display: inline-block;
    }
    .right_balans_right_count_bill_5{
        width: 34%;
        display: inline-block;
    }
    .right_balans_right_count_bill_6{
        width: 48%;
        margin-left: 4%;
        display: inline-block;
    }
    .right_balans_right_count input[type="submit"]{
        color: white;
        font-weight: 600;
        font-size: 0.9em;
        border: 0px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
        padding: 14px;
        border-radius: 30px;
        width: 45%;
        display: inline-block;
        transition: 0.8s all ease;
    }
    .right_balans_right_count_bill_7{
        text-align:center;
        margin: 20px 0px;
    }
    .right_balans_right_count_bill_7 img{
        width: 17px;
        display: inline-block;
        vertical-align: middle;
    }
    .right_balans_right_count_bill_7 a{
        display: inline-block;
        margin-left: 10px;
        color: rgba(214,73,111,1);
        text-decoration: underline;

    }
     @media (max-width: 1380px){
        .right_balans_left{
            width: 42%;
        }
        .right_balans_right{
            width: 51%;
        }
        .right_balans_left_inner_summa h1{
            font-size: 2.5em;
        }
        .table_odd_row img{
            width: 10px;
            margin: 5px 10px 5px 10px;
        }
        .table_odd_row span{
            font-size: 0.7em;
        }
        .table_odd_row_2 p{
            font-size: 0.7em;
            margin-left: 10px;
        }
        .table_odd_row_2_red p{
            font-size: 0.7em;
        }
        .table_odd_row_3 p{
            font-size: 0.7em;
        }
    
        
    }
    @media (max-width: 1040px){
        .right_balans_left{
            width: 44%;
        }
        .right_balans_right{
            width: 50%;
        }
        .right_balans_left_inner_summa h1{
            font-size: 3em;
        }
    }
    @media (max-width: 1040px){
        .right_balans_left{
            width: 42%;
        }
        .right_balans_right{
            width: 51%;
        }
        .right_balans_left_inner_summa h1, .right_balans_left_inner_summa h2{
            font-size: 2.5em;
        }
     
        .table_odd_row img{
            width: 10px;
            margin: 5px 10px 5px 10px;
        }
        .table_odd_row span{
            font-size: 0.7em;
        }
        .table_odd_row_2 p{
            font-size: 0.7em;
            margin-left: 10px;
        }
        .table_odd_row_2_red p{
            font-size: 0.7em;
        }
        .table_odd_row_3 p{
            font-size: 0.7em;
        }
    
        
    }
     @media (max-width: 820px){
        .right_balans_left{
            width: 42%;
        }
        .right_balans_right{
            width: 49%;
        }
        .right_balans_left_inner_summa h1, .right_balans_left_inner_summa h2{
            font-size: 1.5em;
        }
        .table_odd_row img{
            width: 10px;
            margin: 5px 10px 5px 10px;
        }
        .table_odd_row span{
            font-size: 0.5em;
        }
        .table_odd_row_2 p{
            font-size: 0.5em;
            margin-left: 0px;
        }
        .table_odd_row_2_red p{
            font-size: 0.5em;
        }
        .table_odd_row_3 p{
            font-size: 0.5em;
        }
        .right_balans_left_inner_add_cart_form{
        width: 90%;
        text-align: left;
        background-color: white;
        margin-top: 10px;
        padding: 10px;
        padding-top: 5px;
        border-radius: 8px;
    }
    .right_balans_left_inner_add_cart_form p{
        font-size: 0.6em;
        margin: 5px 0 5px 10px;

    }
    .right_balans_left_inner_add_cart_form input[type="text"]{
        width: 85%;
        border-radius: 10px;
        border: 1px solid grey;
        padding: 6px;    
        font-size: 0.6em;
    }
    .right_balans_left_inner_add_cart_form_1{
        width: 36%;
        display:inline-block;
        margin-top: 10px;
        margin-right: 5px;
    }
    .right_balans_left_inner_add_cart_form_2{
        width: 15%;
        display:inline-block;
        margin-right: 20px;
    }
    .right_balans_left_inner_add_cart_form_3{
        width: 15%;
        display:inline-block;
        margin-right: 5px;
    }
    .right_balans_left_inner_add_cart_form input[type="submit"]{
        color: white;
        font-weight: 600;
        font-size: 0.6em;
        border: 0px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
        padding: 10px;
        border-radius: 30px;
        width: 50%;
        margin-left: 15%;
        margin-top: 7%;
        transition: 0.8s all ease;
        display: inline-block;
    }
    .right_balans_right_count{
        border-collapse: collapse;
        width: 90%;
        text-align: left;
        margin: 30px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border: 1px solid rgb(229,230,231);
        background-color: rgb(248,249,250);
        box-shadow: 0px 0px 10px 3px rgb(239,240,245);
    }

    .right_balans_right_count h4{
        margin: 0;
        background-color: white;
        font-weight: 500;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding: 13px 0 13px 20px;
        font-size: 0.8em;
    }
    .right_balans_right_count_inner{
        width: 100%;
        padding: 10px 0;
        text-align: center;
    }
    .right_balans_right_count_inner img{
        width: 3%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
    }
    .right_balans_right_count_inner p{
        display: inline-block;
        vertical-align: middle;
        font-size: 0.6em;
        color: darkgrey;
    }
    .right_balans_right_count_bill p{
        font-size: 0.6em;
        margin: 0;
        margin-top: 10px;
        margin-left: 10px;
        margin-bottom: 5px;
        
    }
    .right_balans_right_count_bill input[type="text"]{
        border-radius: 10px;
        border: 1px solid grey;
        padding: 6px;    
        font-size: 0.6em;
        width: 70%;
        background-color: inherit;
        outline: none;
    }
    .right_balans_right_count_bill_1{
        margin-left: 4%;
        width: 48%;
        display: inline-block;
    }
    .right_balans_right_count_bill_2{
        width: 48%;
        display: inline-block;
    }
    .right_balans_right_count_bill_3{
        margin-left: 4%;
        width: 26%;
        display: inline-block;
    }
    .right_balans_right_count_bill_4{
        width: 26%;
        display: inline-block;
    }
    .right_balans_right_count_bill_5{
        width: 30%;
        display: inline-block;
    }
    .right_balans_right_count_bill_6{
        width: 44%;
        margin-left: 4%;
        display: inline-block;
    }
    .right_balans_right_count input[type="submit"]{
        font-size: 0.6em;   
        padding: 10px;
    }
    .right_balans_right_count_bill_7 img{
        width: 12px;
    }
    
    
    
        
    }







</style>