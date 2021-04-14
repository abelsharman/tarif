<template>
    <div class="balans_desktop">

    <div class="left_block">
        <a href="https://marketbot.biz/">
        <img style="padding-top: 20px;" src="../assets/sidebar_logo.png" alt="logo">
        </a>

        <div class="left_block_inner">
            <div>
                <a href="https://marketbot.biz/user/home"><img v-bind:src="infoUser.avatar"></a>
                <a href="https://marketbot.biz/user/home" style="text-decoration:none"><small>{{ infoUser.username }}</small></a>
            </div>
            
            <div>
                <a href="https://marketbot.biz/page/show/main"><img src="../assets/sidebar_menu_home.png" alt="home"></a>
                <small>Главная</small>
            </div>
        
            <div>
                <router-link to="/"><img src="https://marketbot.biz/assets//Marketbot/img/sidebar-menu-list.png" alt="list"></router-link>
                <small>Боты</small>
            </div>

            <div>
                <a href="https://marketbot.biz/bot/create"><img src="../assets/sidebar_menu_add.png" alt="add"></a>
                <small>Создать бота</small>
            </div>
            
            
             <div v-if="infoUser.is_integrator">
                <a href="https://marketbot.biz/integrator/my_users"><img src="../assets/left_clients.png" alt="left_clients"></a>
                <small>Клиенты</small>
            </div>
            
        </div>


         <div class="left_block_inner left_block_inner2">
            <a href="https://marketbot.biz/977"><img src="../assets/sidebar_help.png" alt="help"></a>
        </div>
    </div>

    <div class="right_block">
        <div class="right_block_inner">
            <h2 style="margin-left:3%;width: 20%;">Ваш баланс</h2>

            <div class="right_block_inner_balans" style="width: 63%;">
                <img src="../assets/photo.png" alt="">
           
               
               <div class="right_block_inner_balans_right">
                    <p>Ваш баланс: <span>{{ convertBalance1 }} ₽</span></p>
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
                        <img src="../assets/wallet-big.png" alt="wallet">
                    </div>
                    <div class="right_balans_left_inner_summa">
                        <h2>Общий баланс аккаунта: </h2>
                        <h1>{{ convertBalance2 }} <span>₽</span></h1>
                    </div>


                    
                        <div class="right_balans_left_inner_input" v-show="carta">
                            <input type="text" placeholder="Введите сумму" required>
                            <input ref="submit_button" type="submit" @click="submitBalance" value="ПОПОЛНИТЬ">
                        </div>
                    
                    <!--
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
                    -->

                    <div class="right_balans_left_inner_add_cart_button" v-if="carta && !carta_info && info.cc && !info.cc.saved" > <!-- @click="showForm()" -->
                        <img src="../assets/menu_add.png" alt="add">
                        <p>Привязать карту</p>
                    </div>


                    <div class="right_balans_left_inner_carts" v-if="info.cc && info.cc.saved" @click="showAnotherForm()">
                        <p>Ваши карты</p>
                        <div class="right_balans_left_inner_carts_cart">   
                            <img src="../assets/money.png" alt="{{ info.cc.type }}">
                            <p>{{ info.cc.masked_num }}<span>x</span></p>
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
                                <input type="hidden" v-bind:value="item.id">
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
    <!--
    <div class="block_for_phones">
        <p>Извините, просим перейти на сайт через компьютер</p>
    </div>
    -->
    </div>




    <div class="balans_mobile">    
        <header>
            <router-link to="/"><img src="../assets/back.png" alt=""></router-link>
            <h1>Ваш баланс</h1>
            <div class="header_burger" @click="showBurger">
                <img src="../assets/menu.png" alt="burder_1">
            </div>

            <div class="header_nav" ref="nav">
                <a href="https://marketbot.biz/user/home" style="text-decoration:none">{{ infoUser.username }}</a>
                <a href="https://marketbot.biz/page/show/main">Главная</a>
                <router-link to="/">Боты</router-link>
                <a href="https://marketbot.biz/bot/create">Создать бота</a>
                <a href="https://marketbot.biz/integrator/my_users" v-if="infoUser.is_integrator">Клиенты</a>
            </div>
        </header>


        <div class="right_balans_left">
            <div class="right_balans_left_inner">
                <div class="right_balans_left_inner_img">
                    <img src="../assets/wallet-big.png" alt="wallet">
                </div>
                <div class="right_balans_left_inner_summa">
                    <h2>Общий баланс аккаунта: </h2>
                    <h1>{{ convertBalance2 }} <span>₽</span></h1>
                </div>

                <div class="right_balans_left_inner_input" v-show="carta">
                    <input type="text" placeholder="Введите сумму" required>
                    <input ref="submit_button" type="submit" @click="submitBalance" value="ПОПОЛНИТЬ">
                </div>
            </div>
        </div>



        <div class="right_balans_right">
            <h1>Пополнение баланса WABA</h1>
            <div class="table_odd_row" v-for="(item,index) in this.info.botlist" :key="index">

                <div class="table_odd_row_1" v-if="index % 2 == 0">
                    <div class="table_odd_row_1_line_1">
                        <img src="../assets/logo_whatsapp.png" alt="">
                        <span>+{{ item.tel }}</span>

                        <div v-show="addBalans" v-bind:id="'b'+index">
                            <input type="text" required>
                            <input type="hidden" v-bind:value="item.id">
                            <button type="submit" @click="submitAmountToFill"></button>
                        </div>
                    </div>

                    <div class="table_odd_row_1_line_2">
                        <img v-if="item.waba_balance_usd == 0" src="../assets/danger.png" alt="danger">
                        <p v-if="item.waba_balance_usd == 0" style="color: red;">Баланс WABA: ${{ item.waba_balance_usd }}</p>

                        <p v-if="item.waba_balance_usd > 0">Баланс WABA: ${{ item.waba_balance_usd }}</p>

                        <p class="table_odd_row_1_line_2_btn" @click="addBalansForm" v-show="btn" v-bind:id="index + 1000">Пополнить</p>
                    </div>
                </div>


                <div class="table_odd_row_1 table_odd_row_2" v-if="index % 2 == 1">
                    <div class="table_odd_row_1_line_1">
                        <img src="../assets/logo_whatsapp.png" alt="">
                        <span>+{{ item.tel }}</span>

                        <div v-show="addBalans" v-bind:id="'b'+index">
                            <input type="text" required>
                            <input type="hidden" v-bind:value="item.id">
                            <button type="submit" @click="submitAmountToFill"></button>
                        </div>
                    </div>

                    <div class="table_odd_row_1_line_2">
                        <img v-if="item.waba_balance_usd == 0" src="../assets/danger.png" alt="danger">
                        <p v-if="item.waba_balance_usd == 0" style="color: red;">Баланс WABA: ${{ item.waba_balance_usd }}</p>

                        <p v-if="item.waba_balance_usd > 0">Баланс WABA: ${{ item.waba_balance_usd }}</p>

                        <p class="table_odd_row_1_line_2_btn" @click="addBalansForm" v-show="btn" v-bind:id="index + 1000">Пополнить</p>
                    </div>
                </div>
            </div>
                




            <div class="right_balans_right_count">
                <h4>Выставление счета для юр. лиц</h4>
                <div class="right_balans_right_count_inner">
                    <img src="../assets/menu_add.png" alt="add">
                    <p>Создать новый счет</p>
                </div>
            </div>
        </div>






    </div>
  
</template>


<script async>
export default {
    name: 'Balans',
    data() {
        return{
            info: [],
            infoUser: {
                balance: 0
            },
            carta: true, 
            carta_info: false,
            addBalans: false,
            billForm: true,
            user_token: this.$cookie.getCookie('user_token'),
            btn: true,
        }
    },
    methods: {
        showBurger(){
            if(window.innerWidth < 456){
                if(this.$refs.nav.style.left == '100vw'){
                    this.$refs.nav.style.left = '0vw'
                }
                else{
                    this.$refs.nav.style.left = '100vw'
                }
            }

        },
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
            let a = "b" + (event.target.id - 1000).toString()
            document.querySelector("#"+a+"").style.display = "inline-block"
            event.target.style.display = "none"
            
        },
        closeBalansForm(event){
            event.target.parentNode.parentNode.childNodes[1].style.display = 'block'
            event.target.parentNode.style.display = 'none'
        },
        submitAmountToFill(event){
            //event.target.parentNode.parentNode.childNodes[1].style.display = 'block'
            event.target.parentNode.style.display = 'none'
            

            const a = event.target.parentNode.childNodes[1].value
            const axios = require('axios');
            const params = new URLSearchParams()
            params.append('user_token', this.user_token)
            params.append('waba', a)
            params.append('amount', event.target.parentNode.childNodes[0].value)
    

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            if(event.target.parentNode.childNodes[0].value.length != 0){
                axios.post('https://marketbot.biz/balance/refill', params, config)
                .then(function (response) {
                    if(response.data.paid == true){
                        if(confirm('Транзакция успешна')) {
                            window.location.reload();  
                        }
                        
                    }
                    else{
                        if(confirm(response.data.errmsg)) {
                            window.location.reload();  
                        }
                    }
                    
    
                })
            }
            else{
                alert('Введите в поле сумму')
            }

            
                

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


            params.append('user_token', this.user_token)
            params.append('waba', 0)
            params.append('amount', event.target.parentNode.childNodes[0].value)
    

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            axios.post('https://marketbot.biz/balance/refill', params, config)
                .then(function (response) {
                    if(response.data.paid == true){
                        alert('Транзакция успешна')
                        window.location.href = response.data.url
                    }
                    else{
                        window.location.href = response.data.url
                    }
                    
    
                })
        }

        
    },
    computed:{
        convertBalance1() {
            return Math.round(this.infoUser.balance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        convertBalance2() {
            return Math.round(this.infoUser.balance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },

    },
    created() {
        const axios = require('axios');
        let self = this
        axios.get('https://marketbot.biz/balance/get_data?user_token='+this.user_token)
            .then(function(response){
                self.info = response.data
            })

        axios.get('https://marketbot.biz/user/current?user_token='+this.user_token)
            .then(function(response){
                self.infoUser = response.data
            })

    }
}


</script>

<style lang="sass">
@media screen and (max-width: 2560px)
  .right_block
    width: calc(100% - 78px)

  .block_for_phones
    display: none

  .left_block
    float: left
    position: fixed
    height: 100vh
    width: 78px
    background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)

  .left_block_inner
    margin-top: 300px

    div
      height: 70px
      transition: 0.2s all ease

      &:hover
        background: rgba(0, 0, 0, 0.1)

    small
      color: white
      font-size: 10px
      letter-spacing: 0

    img
      display: block
      padding-top: 15px
      margin-left: 35%
      width: 30%

  .left_block_inner2
    margin-top: 300px
    margin-bottom: 42px
    transition: 0.2s all ease

  .right_block
    float: right
    margin: 0

  .right_block_inner
    width: 100%
    margin: 0
    text-align: left
    height: 70px
    background-color: #f6f6f6

    h2
      width: 20%
      vertical-align: top
      padding: 25px 0 0 3%
      display: inline-block
      margin: 0
      font-family: 'Montserrat', sans-serif
      font-weight: 600
      color: #370954
      font-size: 16px

  .right_block_inner_balans
    padding-top: 0.3%
    width: 67%
    display: inline-block
    text-align: right
    padding-right: 2%

    img
      height: 30px
      width: auto
      vertical-align: middle
      display: inline-block

    p
      display: inline-block

  .right_block_inner_balans_right
    vertical-align: bottom
    margin-left: 15px
    display: inline-block
    line-height: 10px

    p
      font-weight: 500
      font-size: 13px
      color: #370954

    a
      line-height: 10px
      font-size: 13px
      color: #d6496f
      font-weight: 500

    span
      font-size: 26px
      font-weight: 500
      color: #d6496f

  .right_block_inner_logout
    width: 8%
    display: inline-block

    img
      height: 31px
      width: auto
      vertical-align: middle
      border-left: 1px solid rgb(209, 218, 223)
      padding-left: 10px
      padding: 15px 0 15px 30px

  .right_balans_left
    float: left
    width: 44%
    height: 80vh
    border: 1px solid rgb(229, 230, 231)
    background-color: rgb(248, 249, 250)
    border-radius: 8px
    box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)
    margin: 2% 2%
    text-align: right

  .right_balans_left_inner
    width: 90%
    margin: 5%

  .right_balans_left_inner_img
    display: inline-block
    width: 38%

    img
      width: 80%
      margin: 10% 20% 10% 0

  .right_balans_left_inner_summa
    display: inline-block
    width: 60%
    vertical-align: top

    h2
      padding-top: 20%
      font-size: 20px
      font-weight: 500
      color: #370954
      margin: 0
      margin-bottom: 3%

    h1
      margin: 0
      font-size: 68px
      font-weight: 600
      color: #d6496f

    span
      font-size: 30px

  .right_balans_left_inner_input
    margin-top: 14%
    width: 100%

    input
      &[type="text"]
        background-image: url('../assets/money.png')
        background-position: left
        background-position-x: 2%
        background-position-y: 50%
        background-repeat: no-repeat
        width: 80%
        margin-right: 7%
        font-size: 1vw
        font-weight: 400
        font-family: 'Montserrat', sans-serif
        border: 0px
        border-bottom: 1px solid grey
        padding: 7px 0 7px 8%
        background-color: rgb(249, 250, 252)
        outline: none
        color: black

        &::placeholder
          color: #222
          font-family: 'Montserrat', sans-serif

      &[type="submit"]
        color: white
        font-weight: 500
        font-size: 14px
        letter-spacing: 1px
        border: 0px
        background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
        padding: 3% 0
        border-radius: 30px
        width: 50%
        margin-right: 25%
        margin-top: 10%
        transition: 0.8s all ease
        cursor: pointer
        outline: none
        font-family: 'Montserrat', sans-serif

  .right_balans_left_inner_add_cart
    margin-top: 100px

    img
      width: 3%
      display: inline-block

    p
      display: inline-block
      padding-bottom: 7px
      vertical-align: middle
      color: darkgrey
      margin-left: 10px
      font-size: 0.9em

  .right_balans_left_inner_add_cart_form
    width: 90%
    text-align: left
    background-color: white
    margin-top: 20px
    padding: 30px
    padding-top: 5px
    border-radius: 8px

    p
      font-size: 0.9em
      margin: 5px 0 5px 10px

    input[type="text"]
      width: 90%
      border-radius: 10px
      border: 1px solid grey
      padding: 10px
      font-size: 0.9em

  .right_balans_left_inner_add_cart_form_1
    width: 46%
    display: inline-block
    margin-top: 10px
    margin-right: 5px

  .right_balans_left_inner_add_cart_form_2
    width: 20%
    display: inline-block
    margin-right: 20px

  .right_balans_left_inner_add_cart_form_3
    width: 25%
    display: inline-block
    margin-right: 5px

  .right_balans_left_inner_add_cart_form
    input[type="submit"]
      color: white
      font-weight: 600
      font-size: 0.9em
      border: 0px
      background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
      padding: 14px
      border-radius: 30px
      width: 50%
      margin-left: 15%
      margin-top: 7%
      transition: 0.8s all ease
      display: inline-block

    a
      display: inline-block
      color: darkgrey
      margin-left: 20px

  .right_balans_left_inner_add_cart_button
    margin-top: 100px

    img
      display: inline-block
      vertical-align: middle
      margin-right: 8px

    p
      display: inline-block
      vertical-align: middle
      font-size: 14px
      font-weight: 400
      letter-spacing: 5
      color: darkgrey

  .right_balans_left_inner_carts
    background-color: inherit
    text-align: left
    width: 90%

  .right_balans_left_inner_carts_cart
    padding: 5px 20px
    font-size: 0.9em
    border: 1px solid darkgrey
    border-radius: 8px

    p
      margin: 0
      width: 80%
      display: inline-block

    img
      width: 30px
      margin-right: 15px
      vertical-align: top
      display: inline-block

  .right_balans_left_inner_carts span
    margin: 0
    margin-left: 88%
    font-size: 1.5em
    font-weight: 800

  .right_balans_left_inner_add_cart_another_button
    margin-top: 30px
    text-align: center
    font-size: 1.1em

    img
      width: 20px
      margin-right: 0px

  .right_balans_right
    width: 51%
    display: inline-block

    table
      border-collapse: collapse
      width: 90%
      text-align: left
      margin: 4%
      border: 1px solid rgb(229, 230, 231)
      background-color: rgb(248, 249, 250)
      border-radius: 8px
      box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)

    th
      border-radius: 14px
      font-size: 14px
      background-color: white
      font-weight: 500
      padding: 13px 0 13px calc(6% - 20px)

  .table_odd_row
    background-color: rgb(239, 240, 242)

    td
      border-right: 1px solid rgb(229, 230, 231)

    img
      width: 10%
      vertical-align: middle
      margin: 5px 2% 5px 12%

    span
      color: black
      font-size: 1vw
      font-weight: 500

  .table_odd_row_1
    width: 30%

    span
      font-size: 13px
      font-weight: 500
      color: #370954

  .table_odd_row_2
    width: 46%

  .table_odd_row_3
    width: 23%

  .table_odd_row_2 p
    font-weight: 500
    font-size: 13px
    margin-left: 8%
    line-height: 21px
    color: #1b8b0f

  .table_odd_row_2_red
    width: 48%

    p
      font-weight: 500
      font-size: 13px
      line-height: 21px
      margin-left: 0px
      color: #d6496f
      display: inline-block

    img
      width: 5%
      display: inline-block

  .table_odd_row_3 p
    color: #d6496f
    font-size: 13px
    line-height: 21px
    font-weight: 500
    border-bottom: 1px solid #d6496f
    width: max-content
    margin-left: 30%
    text-align: center
    cursor: pointer

  .table_even_row
    background-color: rgb(248, 249, 250) !important

  .table_add_balans
    input[type="text"]
      width: 50%
      border: 1px solid lightgrey
      text-align: center
      outline: none
      padding: 3px 5%
      border-radius: 5px
      margin: 0px 5px 0px 5%

    button
      width: 23px
      background-color: inherit
      height: 23px
      vertical-align: top
      background-image: url('../assets/check.png')
      background-position: center
      background-size: 100% 100%
      border: 0px

  .right_balans_right_count
    border-collapse: collapse
    width: 90%
    text-align: left
    margin: 4%
    border-top-left-radius: 8px
    border-top-right-radius: 8px
    border: 1px solid rgb(229, 230, 231)
    background-color: rgb(248, 249, 250)
    box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)

    h4
      margin: 0
      background-color: white
      font-weight: 500
      border-top-left-radius: 8px
      border-top-right-radius: 8px
      padding: 13px 0 13px calc(6% - 20px)
      font-size: 14px
      color: #222

  .right_balans_right_count_inner
    width: 100%
    padding: 10px 0
    text-align: center

    img
      display: inline-block
      vertical-align: middle
      margin-right: 8px

    p
      display: inline-block
      vertical-align: middle
      font-size: 14px
      font-weight: 400
      color: #aaa
      letter-spacing: 5

  .right_balans_right_count_bill
    p
      font-size: 13px
      font-weight: 400
      margin: 0
      margin-top: 10px
      margin-left: 10px
      margin-bottom: 5px
      color: #222

    input[type="text"]
      border-radius: 10px
      border: 1px solid grey
      padding: 10px
      color: #aaa
      font-size: 13px
      font-weight: 500
      width: 85%
      background-color: inherit
      outline: none

      &::placeholder
        color: #aaa
        font-size: 13px
        font-weight: 500

  .right_balans_right_count_bill_1
    margin-left: 4%
    width: 48%
    display: inline-block

  .right_balans_right_count_bill_2
    width: 48%
    display: inline-block

  .right_balans_right_count_bill_3
    margin-left: 4%
    width: 30%
    display: inline-block

  .right_balans_right_count_bill_4
    width: 30%
    display: inline-block

  .right_balans_right_count_bill_5
    width: 34%
    display: inline-block

  .right_balans_right_count_bill_6
    width: 48%
    margin-left: 4%
    display: inline-block

  .right_balans_right_count input[type="submit"]
    color: white
    font-weight: 500
    font-size: 12px
    border: 0px
    letter-spacing: 2.5px
    background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
    padding: 14px
    border-radius: 30px
    width: 45%
    display: inline-block
    transition: 0.8s all ease

  .right_balans_right_count_bill_7
    text-align: center
    margin: 20px 0px

    img
      width: 17px
      display: inline-block
      vertical-align: middle

    a
      display: inline-block
      margin-left: 10px
      color: rgba(214, 73, 111, 1)
      text-decoration: underline
      font-size: 13px

@media screen and (max-width: 1920px)
  .right_block
    width: calc(100% - 78px)

  .block_for_phones
    display: none

  .left_block
    float: left
    position: fixed
    height: 100vh
    width: 78px
    background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)

  .left_block_inner
    margin-top: 300px

    div
      height: 70px
      transition: 0.2s all ease

      &:hover
        background: rgba(0, 0, 0, 0.1)

    small
      color: white
      font-size: 10px
      letter-spacing: 0

    img
      display: block
      padding-top: 15px
      margin-left: 35%
      width: 30%

  .left_block_inner2
    margin-top: 300px
    margin-bottom: 42px
    transition: 0.2s all ease

  .right_block
    float: right
    margin: 0

  .right_block_inner
    width: 100%
    margin: 0
    text-align: left
    height: 70px
    background-color: #f6f6f6

    h2
      width: 20%
      vertical-align: top
      padding: 25px 0 0 3%
      display: inline-block
      margin: 0
      font-family: 'Montserrat', sans-serif
      font-weight: 600
      color: #370954
      font-size: 16px

  .right_block_inner_balans
    padding-top: 0.3%
    width: 67%
    display: inline-block
    text-align: right
    padding-right: 2%

    img
      height: 30px
      width: auto
      vertical-align: middle
      display: inline-block

    p
      display: inline-block

  .right_block_inner_balans_right
    vertical-align: bottom
    margin-left: 15px
    display: inline-block
    line-height: 10px

    p
      font-weight: 500
      font-size: 13px
      color: #370954

    a
      line-height: 10px
      font-size: 13px
      color: #d6496f
      font-weight: 500

    span
      font-size: 26px
      font-weight: 500
      color: #d6496f

  .right_block_inner_logout
    width: 8%
    display: inline-block

    img
      height: 31px
      width: auto
      vertical-align: middle
      border-left: 1px solid rgb(209, 218, 223)
      padding-left: 10px
      padding: 15px 0 15px 30px

  .right_balans_left
    float: left
    width: 44%
    height: calc(100vh - 120px)
    border: 1px solid rgb(229, 230, 231)
    background-color: rgb(248, 249, 250)
    border-radius: 8px
    box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)
    margin: 2% 2%
    text-align: right

  .right_balans_left_inner
    width: 90%
    margin: 5%

  .right_balans_left_inner_img
    display: inline-block
    width: 38%

    img
      width: 80%
      margin: 10% 20% 10% 0

  .right_balans_left_inner_summa
    display: inline-block
    width: 60%
    vertical-align: top

    h2
      padding-top: 20%
      font-size: 20px
      font-weight: 500
      color: #370954
      margin: 0
      margin-bottom: 3%

    h1
      margin: 0
      font-size: 68px
      font-weight: 600
      color: #d6496f

    span
      font-size: 30px

  .right_balans_left_inner_input
    margin-top: 14%
    width: 100%

    input
      &[type="text"]
        background-image: url('../assets/money.png')
        background-position: left
        background-position-x: 2%
        background-position-y: 50%
        background-repeat: no-repeat
        font-family: 'Montserrat', sans-serif
        width: 80%
        margin-right: 7%
        font-size: 1vw
        font-weight: 400
        border: 0px
        border-bottom: 1px solid grey
        padding: 7px 0 7px 8%
        background-color: rgb(249, 250, 252)
        outline: none
        color: black

        &::placeholder
          font-family: 'Montserrat', sans-serif
          color: #222

      &[type="submit"]
        color: white
        font-weight: 500
        font-size: 14px
        letter-spacing: 1px
        border: 0px
        background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
        padding: 3% 0
        border-radius: 30px
        width: 50%
        margin-right: 25%
        margin-top: 10%
        transition: 0.8s all ease
        cursor: pointer
        outline: none
        font-family: 'Montserrat', sans-serif

  .right_balans_left_inner_add_cart
    margin-top: 100px

    img
      width: 3%
      display: inline-block

    p
      display: inline-block
      padding-bottom: 7px
      vertical-align: middle
      color: darkgrey
      margin-left: 10px
      font-size: 0.9em

  .right_balans_left_inner_add_cart_form
    width: 90%
    text-align: left
    background-color: white
    margin-top: 20px
    padding: 30px
    padding-top: 5px
    border-radius: 8px

    p
      font-size: 0.9em
      margin: 5px 0 5px 10px

    input[type="text"]
      width: 90%
      border-radius: 10px
      border: 1px solid grey
      padding: 10px
      font-size: 0.9em

  .right_balans_left_inner_add_cart_form_1
    width: 46%
    display: inline-block
    margin-top: 10px
    margin-right: 5px

  .right_balans_left_inner_add_cart_form_2
    width: 20%
    display: inline-block
    margin-right: 20px

  .right_balans_left_inner_add_cart_form_3
    width: 25%
    display: inline-block
    margin-right: 5px

  .right_balans_left_inner_add_cart_form
    input[type="submit"]
      color: white
      font-weight: 600
      font-size: 0.9em
      border: 0px
      background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
      padding: 14px
      border-radius: 30px
      width: 50%
      margin-left: 15%
      margin-top: 7%
      transition: 0.8s all ease
      display: inline-block

    a
      display: inline-block
      color: darkgrey
      margin-left: 20px

  .right_balans_left_inner_add_cart_button
    margin-top: 100px

    img
      display: inline-block
      vertical-align: middle
      margin-right: 8px

    p
      display: inline-block
      vertical-align: middle
      font-size: 14px
      font-weight: 400
      letter-spacing: 5
      color: darkgrey

  .right_balans_left_inner_carts
    background-color: inherit
    text-align: left
    width: 90%

  .right_balans_left_inner_carts_cart
    padding: 5px 20px
    font-size: 0.9em
    border: 1px solid darkgrey
    border-radius: 8px

    p
      margin: 0
      width: 80%
      display: inline-block

    img
      width: 30px
      margin-right: 15px
      vertical-align: top
      display: inline-block

  .right_balans_left_inner_carts span
    margin: 0
    margin-left: 88%
    font-size: 1.5em
    font-weight: 800

  .right_balans_left_inner_add_cart_another_button
    margin-top: 30px
    text-align: center
    font-size: 1.1em

    img
      width: 20px
      margin-right: 0px

  .right_balans_right
    width: 51%
    display: inline-block

    table
      border-collapse: collapse
      width: 90%
      text-align: left
      margin: 4%
      border: 1px solid rgb(229, 230, 231)
      background-color: rgb(248, 249, 250)
      border-radius: 8px
      box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)

    th
      border-radius: 14px
      font-size: 14px
      background-color: white
      font-weight: 500
      padding: 13px 0 13px calc(6% - 20px)

  .table_odd_row
    background-color: rgb(239, 240, 242)

    td
      border-right: 1px solid rgb(229, 230, 231)

    img
      width: 10%
      vertical-align: middle
      margin: 5px 2% 5px 12%

    span
      color: black
      font-size: 1vw
      font-weight: 500

  .table_odd_row_1
    width: 30%

    span
      font-size: 13px
      font-weight: 500
      color: #370954

  .table_odd_row_2
    width: 46%

  .table_odd_row_3
    width: 23%

  .table_odd_row_2 p
    font-weight: 500
    font-size: 13px
    margin-left: 8%
    line-height: 21px
    color: #1b8b0f

  .table_odd_row_2_red
    width: 48%

    p
      font-weight: 500
      font-size: 13px
      line-height: 21px
      margin-left: 0px
      color: #d6496f
      display: inline-block

    img
      width: 5%
      display: inline-block

  .table_odd_row_3 p
    color: #d6496f
    font-size: 13px
    line-height: 21px
    font-weight: 500
    border-bottom: 1px solid #d6496f
    width: max-content
    margin-left: 30%
    text-align: center
    cursor: pointer

  .table_even_row
    background-color: rgb(248, 249, 250) !important

  .table_add_balans
    input[type="text"]
      width: 50%
      border: 1px solid lightgrey
      text-align: center
      outline: none
      padding: 3px 5%
      border-radius: 5px
      margin: 0px 5px 0px 5%

    button
      width: 23px
      background-color: inherit
      height: 23px
      vertical-align: top
      background-image: url('../assets/check.png')
      background-position: center
      background-size: 100% 100%
      border: 0px

  .right_balans_right_count
    border-collapse: collapse
    width: 90%
    text-align: left
    margin: 4%
    border-top-left-radius: 8px
    border-top-right-radius: 8px
    border: 1px solid rgb(229, 230, 231)
    background-color: rgb(248, 249, 250)
    box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)

    h4
      margin: 0
      background-color: white
      font-weight: 500
      border-top-left-radius: 8px
      border-top-right-radius: 8px
      padding: 13px 0 13px calc(6% - 20px)
      font-size: 14px
      color: #222

  .right_balans_right_count_inner
    width: 100%
    padding: 10px 0
    text-align: center

    img
      display: inline-block
      vertical-align: middle
      margin-right: 8px

    p
      display: inline-block
      vertical-align: middle
      font-size: 14px
      font-weight: 400
      color: #aaa
      letter-spacing: 5

  .right_balans_right_count_bill
    p
      font-size: 13px
      font-weight: 400
      margin: 0
      margin-top: 10px
      margin-left: 10px
      margin-bottom: 5px
      color: #222

    input[type="text"]
      border-radius: 10px
      border: 1px solid grey
      padding: 10px
      color: #aaa
      font-size: 13px
      font-weight: 500
      width: 85%
      background-color: inherit
      outline: none

      &::placeholder
        color: #aaa
        font-size: 13px
        font-weight: 500

  .right_balans_right_count_bill_1
    margin-left: 4%
    width: 48%
    display: inline-block

  .right_balans_right_count_bill_2
    width: 48%
    display: inline-block

  .right_balans_right_count_bill_3
    margin-left: 4%
    width: 30%
    display: inline-block

  .right_balans_right_count_bill_4
    width: 30%
    display: inline-block

  .right_balans_right_count_bill_5
    width: 34%
    display: inline-block

  .right_balans_right_count_bill_6
    width: 48%
    margin-left: 4%
    display: inline-block

  .right_balans_right_count input[type="submit"]
    color: white
    font-weight: 500
    font-size: 12px
    border: 0px
    letter-spacing: 2.5px
    background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
    padding: 14px
    border-radius: 30px
    width: 45%
    display: inline-block
    transition: 0.8s all ease

  .right_balans_right_count_bill_7
    text-align: center
    margin: 20px 0px

    img
      width: 17px
      display: inline-block
      vertical-align: middle

    a
      display: inline-block
      margin-left: 10px
      color: rgba(214, 73, 111, 1)
      text-decoration: underline
      font-size: 13px

@media (max-width: 1440px)
  .table_odd_row_3 p
    margin-left: 20%

@media (max-width: 1366px)
  .right_block
    width: 94%

  .block_for_phones
    display: none

  .left_block
    float: left
    width: 6%
    height: 100%
    width: 103px
    background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)

  .left_block_inner
    margin-top: 200px

    img
      margin-top: 30px
      display: block
      margin-left: 35%
      width: 30%

  .left_block_inner2
    margin-top: 280px
    padding-bottom: 42px

  .right_block
    float: right
    margin: 0

  .right_block_inner
    width: 100%
    margin: 0
    text-align: left
    height: 100px
    background-color: #f6f6f6

    h2
      width: 20%
      padding: 30px 0 30px 3%
      display: inline-block
      margin: 0
      font-family: 'Montserrat', sans-serif
      font-weight: 600
      color: #370954
      font-size: 1.31vw

  .right_block_inner_balans
    padding-top: 1%
    width: 67%
    display: inline-block
    text-align: right
    padding-right: 2%

    img
      height: 30px
      width: auto
      vertical-align: middle
      display: inline-block

    p
      display: inline-block

  .right_block_inner_balans_right
    vertical-align: bottom
    margin-left: 15px
    display: inline-block
    line-height: 10px

    p
      font-weight: 500
      font-size: 0.951vw
      color: #370954

    a
      line-height: 10px
      font-size: 0.951vw
      color: #d6496f
      font-weight: 500

    span
      font-size: 1.90vw
      font-weight: 500
      color: #d6496f

  .right_block_inner_logout
    width: 8%
    display: inline-block

    img
      height: 31px
      width: auto
      vertical-align: middle
      border-left: 1px solid rgb(209, 218, 223)
      padding-left: 10px
      padding: 15px 0 15px 30px

  .right_balans_left
    float: left
    width: 44%
    height: calc(100% - 70px)
    border: 1px solid rgb(229, 230, 231)
    background-color: rgb(248, 249, 250)
    border-radius: 8px
    box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)
    margin: 2% 2%
    text-align: right

  .right_balans_left_inner
    width: 90%
    margin: 5%

  .right_balans_left_inner_img
    display: inline-block
    width: 38%

    img
      width: 80%
      margin: 10% 20% 10% 0

  .right_balans_left_inner_summa
    display: inline-block
    width: 60%
    vertical-align: top

    h2
      padding-top: 20%
      font-size: 1.46vw
      font-weight: 500
      color: #370954
      margin: 0
      margin-bottom: 3%

    h1
      margin: 0
      font-size: 4.478vw
      font-weight: 600
      color: #d6496f

    span
      font-size: 2.196vw

  .right_balans_left_inner_input
    margin-top: 5%
    width: 100%

    input
      &[type="text"]
        background-image: url('../assets/money.png')
        background-size: 4%
        background-position: left
        background-position-x: 2%
        font-family: 'Montserrat', sans-serif
        background-position-y: 2px
        background-repeat: no-repeat
        width: 90%
        margin-right: 5%
        font-size: 1vw
        border: 0px
        border-bottom: 1px solid grey
        padding: 7px 0 7px 8%
        background-color: rgb(249, 250, 252)
        outline: none
        color: black

        &::placeholder
          font-family: 'Montserrat', sans-serif
          color: grey

      &[type="submit"]
        color: white
        font-weight: 500
        font-size: 0.878vw
        letter-spacing: 1px
        border: 0px
        background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
        padding: 3% 0
        border-radius: 30px
        width: 50%
        margin-right: 25%
        margin-top: 7%
        transition: 0.8s all ease
        cursor: pointer
        font-family: 'Montserrat', sans-serif

  .right_balans_left_inner_add_cart
    margin-top: 100px

    img
      width: 3%
      display: inline-block

    p
      display: inline-block
      padding-bottom: 7px
      vertical-align: middle
      color: darkgrey
      margin-left: 10px
      font-size: 0.878vw

  .right_balans_left_inner_add_cart_form
    width: 90%
    text-align: left
    background-color: white
    margin-top: 20px
    padding: 30px
    padding-top: 5px
    border-radius: 8px

    p
      font-size: 0.878vw
      margin: 5px 0 5px 10px

    input[type="text"]
      width: 90%
      border-radius: 10px
      border: 1px solid grey
      padding: 10px
      font-size: 0.878vw

  .right_balans_left_inner_add_cart_form_1
    width: 46%
    display: inline-block
    margin-top: 10px
    margin-right: 5px

  .right_balans_left_inner_add_cart_form_2
    width: 20%
    display: inline-block
    margin-right: 20px

  .right_balans_left_inner_add_cart_form_3
    width: 25%
    display: inline-block
    margin-right: 5px

  .right_balans_left_inner_add_cart_form
    input[type="submit"]
      color: white
      font-weight: 600
      font-size: 0.878vw
      border: 0px
      background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
      padding: 14px
      border-radius: 30px
      width: 50%
      margin-left: 15%
      margin-top: 7%
      transition: 0.8s all ease
      display: inline-block

    a
      display: inline-block
      color: darkgrey
      margin-left: 20px

  .right_balans_left_inner_add_cart_button
    margin-top: 100px

    img
      width: 2%
      display: inline-block
      vertical-align: middle
      margin-right: 8px

    p
      display: inline-block
      vertical-align: middle
      font-size: 1.024vw
      font-weight: 400
      letter-spacing: 5
      color: darkgrey

  .right_balans_left_inner_carts
    background-color: inherit
    text-align: left
    width: 90%

  .right_balans_left_inner_carts_cart
    padding: 5px 20px
    font-size: 1.024vw
    border: 1px solid darkgrey
    border-radius: 8px

    p
      margin: 0
      width: 80%
      display: inline-block

    img
      width: 30px
      margin-right: 15px
      vertical-align: top
      display: inline-block

  .right_balans_left_inner_carts span
    margin: 0
    margin-left: 88%
    font-size: 1.4024vw
    font-weight: 800

  .right_balans_left_inner_add_cart_another_button
    margin-top: 30px
    text-align: center
    font-size: 1.024vw

    img
      width: 20px
      margin-right: 0px

  .right_balans_right
    width: 51%
    display: inline-block

    table
      border-collapse: collapse
      width: 90%
      text-align: left
      margin: 4%
      border: 1px solid rgb(229, 230, 231)
      background-color: rgb(248, 249, 250)
      border-radius: 8px
      box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)

    th
      border-radius: 14px
      font-size: 1.024vw
      background-color: white
      font-weight: 500
      padding: 13px 0 13px 6%

  .table_odd_row
    background-color: rgb(239, 240, 242)

    td
      border-right: 1px solid rgb(229, 230, 231)

    img
      width: 10%
      vertical-align: middle
      margin: 5px 2% 5px 12%

    span
      color: black
      font-size: 1vw
      font-weight: 500

  .table_odd_row_1
    width: 30%

    span
      font-size: 0.95vw
      font-weight: 500
      color: #370954

  .table_odd_row_2
    width: 46%

  .table_odd_row_3
    width: 23%

  .table_odd_row_2 p
    font-weight: 500
    font-size: 0.95vw
    margin-left: 8%
    line-height: 21px
    color: #1b8b0f

  .table_odd_row_2_red
    width: 48%

    p
      font-weight: 500
      font-size: 0.95vw
      line-height: 21px
      margin-left: 0px
      color: #d6496f
      display: inline-block

    img
      width: 5%
      display: inline-block

  .table_odd_row_3 p
    color: #d6496f
    font-size: 0.95vw
    line-height: 21px
    font-weight: 500
    border-bottom: 1px solid #d6496f
    width: max-content
    margin-left: 20%
    cursor: pointer

  .table_even_row
    background-color: rgb(248, 249, 250) !important

  .table_add_balans
    input[type="text"]
      width: 50%
      border: 1px solid lightgrey
      text-align: center
      outline: none
      padding: 3px 5%
      border-radius: 5px
      margin: 0px 5px 0px 5%

    button
      width: 23px
      background-color: inherit
      height: 23px
      vertical-align: top
      background-image: url('../assets/check.png')
      background-position: center
      background-size: 100% 100%
      border: 0px

  .right_balans_right_count
    border-collapse: collapse
    width: 90%
    text-align: left
    margin: 4%
    border-top-left-radius: 8px
    border-top-right-radius: 8px
    border: 1px solid rgb(229, 230, 231)
    background-color: rgb(248, 249, 250)
    box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)

    h4
      margin: 0
      background-color: white
      font-weight: 500
      border-top-left-radius: 8px
      border-top-right-radius: 8px
      padding: 13px 0 13px 6%
      font-size: 1.024vw
      color: #222

  .right_balans_right_count_inner
    width: 100%
    padding: 10px 0
    text-align: center

    img
      width: 2%
      display: inline-block
      vertical-align: middle
      margin-right: 8px

    p
      display: inline-block
      vertical-align: middle
      font-size: 1.024vw
      font-weight: 400
      color: #aaa
      letter-spacing: 5

  .right_balans_right_count_bill
    p
      font-size: 0.951vw
      font-weight: 400
      margin: 0
      margin-top: 10px
      margin-left: 10px
      margin-bottom: 5px
      color: #222

    input[type="text"]
      border-radius: 10px
      border: 1px solid grey
      padding: 10px
      color: #aaa
      font-size: 0.951vw
      font-weight: 500
      width: 85%
      background-color: inherit
      outline: none

      &::placeholder
        color: #aaa
        font-size: 0.951vw
        font-weight: 500

  .right_balans_right_count_bill_1
    margin-left: 4%
    width: 48%
    display: inline-block

  .right_balans_right_count_bill_2
    width: 48%
    display: inline-block

  .right_balans_right_count_bill_3
    margin-left: 4%
    width: 30%
    display: inline-block

  .right_balans_right_count_bill_4
    width: 30%
    display: inline-block

  .right_balans_right_count_bill_5
    width: 34%
    display: inline-block

  .right_balans_right_count_bill_6
    width: 48%
    margin-left: 4%
    display: inline-block

  .right_balans_right_count input[type="submit"]
    color: white
    font-weight: 500
    font-size: 0.878vw
    border: 0px
    letter-spacing: 2.5px
    background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
    padding: 14px
    border-radius: 30px
    width: 45%
    display: inline-block
    transition: 0.8s all ease

  .right_balans_right_count_bill_7
    text-align: center
    margin: 20px 0px

    img
      width: 17px
      display: inline-block
      vertical-align: middle

    a
      display: inline-block
      margin-left: 10px
      color: rgba(214, 73, 111, 1)
      text-decoration: underline
      font-size: 0.951vw

@media (max-width: 1100px)
  .table_add_balans button
    width: 20px
    height: 20px

@media (max-width: 800px)
  .right_balans_left, .right_balans_right
    width: 90%

  .right_block_inner h2
    width: 30%
    font-size: 1em

  .right_block_inner_balans
    width: 50%

  .table_add_balans button
    width: 18px
    height: 18px

@media screen and (min-width: 2560px)
  .right_block
    width: calc(100% - 78px)

  .block_for_phones
    display: none

  .left_block
    float: left
    position: fixed
    height: 100vh
    width: 78px
    background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)

  .left_block_inner
    margin-top: 300px

    div
      height: 70px
      transition: 0.2s all ease

      &:hover
        background: rgba(0, 0, 0, 0.1)

    small
      color: white
      font-size: 10px
      letter-spacing: 0

    img
      display: block
      padding-top: 15px
      margin-left: 35%
      width: 30%

  .left_block_inner2
    margin-top: 300px
    margin-bottom: 42px
    transition: 0.2s all ease

  .right_block
    float: right
    margin: 0

  .right_block_inner
    width: 100%
    margin: 0
    text-align: left
    height: 70px
    background-color: #f6f6f6

    h2
      width: 20%
      vertical-align: top
      padding: 25px 0 0 3%
      display: inline-block
      margin: 0
      font-family: 'Montserrat', sans-serif
      font-weight: 600
      color: #370954
      font-size: 16px

  .right_block_inner_balans
    padding-top: 0.3%
    width: 67%
    display: inline-block
    text-align: right
    padding-right: 2%

    img
      height: 30px
      width: auto
      vertical-align: middle
      display: inline-block

    p
      display: inline-block

  .right_block_inner_balans_right
    vertical-align: bottom
    margin-left: 15px
    display: inline-block
    line-height: 10px

    p
      font-weight: 500
      font-size: 13px
      color: #370954

    a
      line-height: 10px
      font-size: 13px
      color: #d6496f
      font-weight: 500

    span
      font-size: 26px
      font-weight: 500
      color: #d6496f

  .right_block_inner_logout
    width: 8%
    display: inline-block

    img
      height: 31px
      width: auto
      vertical-align: middle
      border-left: 1px solid rgb(209, 218, 223)
      padding-left: 10px
      padding: 15px 0 15px 30px

  .right_balans_left
    float: left
    width: 44%
    height: 80vh
    border: 1px solid rgb(229, 230, 231)
    background-color: rgb(248, 249, 250)
    border-radius: 8px
    box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)
    margin: 2% 2%
    text-align: right

  .right_balans_left_inner
    width: 90%
    margin: 5%

  .right_balans_left_inner_img
    display: inline-block
    width: 38%

    img
      width: 80%
      margin: 10% 20% 10% 0

  .right_balans_left_inner_summa
    display: inline-block
    width: 60%
    vertical-align: top

    h2
      padding-top: 20%
      font-size: 20px
      font-weight: 500
      color: #370954
      margin: 0
      margin-bottom: 3%

    h1
      margin: 0
      font-size: 68px
      font-weight: 600
      color: #d6496f

    span
      font-size: 30px

  .right_balans_left_inner_input
    margin-top: 14%
    width: 100%

    input
      &[type="text"]
        background-image: url('../assets/money.png')
        background-position: left
        background-position-x: 2%
        background-position-y: 50%
        background-repeat: no-repeat
        width: 80%
        margin-right: 7%
        font-size: 1vw
        font-weight: 400
        font-family: 'Montserrat', sans-serif
        border: 0px
        border-bottom: 1px solid grey
        padding: 7px 0 7px 8%
        background-color: rgb(249, 250, 252)
        outline: none
        color: black

        &::placeholder
          color: #222
          font-family: 'Montserrat', sans-serif

      &[type="submit"]
        color: white
        font-weight: 500
        font-size: 14px
        letter-spacing: 1px
        border: 0px
        background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
        padding: 3% 0
        border-radius: 30px
        width: 50%
        margin-right: 25%
        margin-top: 10%
        transition: 0.8s all ease
        cursor: pointer
        outline: none
        font-family: 'Montserrat', sans-serif

  .right_balans_left_inner_add_cart
    margin-top: 100px

    img
      width: 3%
      display: inline-block

    p
      display: inline-block
      padding-bottom: 7px
      vertical-align: middle
      color: darkgrey
      margin-left: 10px
      font-size: 0.9em

  .right_balans_left_inner_add_cart_form
    width: 90%
    text-align: left
    background-color: white
    margin-top: 20px
    padding: 30px
    padding-top: 5px
    border-radius: 8px

    p
      font-size: 0.9em
      margin: 5px 0 5px 10px

    input[type="text"]
      width: 90%
      border-radius: 10px
      border: 1px solid grey
      padding: 10px
      font-size: 0.9em

  .right_balans_left_inner_add_cart_form_1
    width: 46%
    display: inline-block
    margin-top: 10px
    margin-right: 5px

  .right_balans_left_inner_add_cart_form_2
    width: 20%
    display: inline-block
    margin-right: 20px

  .right_balans_left_inner_add_cart_form_3
    width: 25%
    display: inline-block
    margin-right: 5px

  .right_balans_left_inner_add_cart_form
    input[type="submit"]
      color: white
      font-weight: 600
      font-size: 0.9em
      border: 0px
      background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
      padding: 14px
      border-radius: 30px
      width: 50%
      margin-left: 15%
      margin-top: 7%
      transition: 0.8s all ease
      display: inline-block

    a
      display: inline-block
      color: darkgrey
      margin-left: 20px

  .right_balans_left_inner_add_cart_button
    margin-top: 100px

    img
      display: inline-block
      vertical-align: middle
      margin-right: 8px

    p
      display: inline-block
      vertical-align: middle
      font-size: 14px
      font-weight: 400
      letter-spacing: 5
      color: darkgrey

  .right_balans_left_inner_carts
    background-color: inherit
    text-align: left
    width: 90%

  .right_balans_left_inner_carts_cart
    padding: 5px 20px
    font-size: 0.9em
    border: 1px solid darkgrey
    border-radius: 8px

    p
      margin: 0
      width: 80%
      display: inline-block

    img
      width: 30px
      margin-right: 15px
      vertical-align: top
      display: inline-block

  .right_balans_left_inner_carts span
    margin: 0
    margin-left: 88%
    font-size: 1.5em
    font-weight: 800

  .right_balans_left_inner_add_cart_another_button
    margin-top: 30px
    text-align: center
    font-size: 1.1em

    img
      width: 20px
      margin-right: 0px

  .right_balans_right
    width: 51%
    display: inline-block

    table
      border-collapse: collapse
      width: 90%
      text-align: left
      margin: 4%
      border: 1px solid rgb(229, 230, 231)
      background-color: rgb(248, 249, 250)
      border-radius: 8px
      box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)

    th
      border-radius: 14px
      font-size: 14px
      background-color: white
      font-weight: 500
      padding: 13px 0 13px calc(6% - 20px)

  .table_odd_row
    background-color: rgb(239, 240, 242)

    td
      border-right: 1px solid rgb(229, 230, 231)

    img
      width: 10%
      vertical-align: middle
      margin: 5px 2% 5px 12%

    span
      color: black
      font-size: 1vw
      font-weight: 500

  .table_odd_row_1
    width: 30%

    span
      font-size: 13px
      font-weight: 500
      color: #370954

  .table_odd_row_2
    width: 46%

  .table_odd_row_3
    width: 23%

  .table_odd_row_2 p
    font-weight: 500
    font-size: 13px
    margin-left: 8%
    line-height: 21px
    color: #1b8b0f

  .table_odd_row_2_red
    width: 48%

    p
      font-weight: 500
      font-size: 13px
      line-height: 21px
      margin-left: 0px
      color: #d6496f
      display: inline-block

    img
      width: 5%
      display: inline-block

  .table_odd_row_3 p
    color: #d6496f
    font-size: 13px
    line-height: 21px
    font-weight: 500
    border-bottom: 1px solid #d6496f
    width: max-content
    margin-left: 30%
    text-align: center
    cursor: pointer

  .table_even_row
    background-color: rgb(248, 249, 250) !important

  .table_add_balans
    input[type="text"]
      width: 50%
      border: 1px solid lightgrey
      text-align: center
      outline: none
      padding: 3px 5%
      border-radius: 5px
      margin: 0px 5px 0px 5%

    button
      width: 23px
      background-color: inherit
      height: 23px
      vertical-align: top
      background-image: url('../assets/check.png')
      background-position: center
      background-size: 100% 100%
      border: 0px

  .right_balans_right_count
    border-collapse: collapse
    width: 90%
    text-align: left
    margin: 4%
    border-top-left-radius: 8px
    border-top-right-radius: 8px
    border: 1px solid rgb(229, 230, 231)
    background-color: rgb(248, 249, 250)
    box-shadow: 0px 0px 10px 3px rgb(239, 240, 245)

    h4
      margin: 0
      background-color: white
      font-weight: 500
      border-top-left-radius: 8px
      border-top-right-radius: 8px
      padding: 13px 0 13px calc(6% - 20px)
      font-size: 14px
      color: #222

  .right_balans_right_count_inner
    width: 100%
    padding: 10px 0
    text-align: center

    img
      display: inline-block
      vertical-align: middle
      margin-right: 8px

    p
      display: inline-block
      vertical-align: middle
      font-size: 14px
      font-weight: 400
      color: #aaa
      letter-spacing: 5

  .right_balans_right_count_bill
    p
      font-size: 13px
      font-weight: 400
      margin: 0
      margin-top: 10px
      margin-left: 10px
      margin-bottom: 5px
      color: #222

    input[type="text"]
      border-radius: 10px
      border: 1px solid grey
      padding: 10px
      color: #aaa
      font-size: 13px
      font-weight: 500
      width: 85%
      background-color: inherit
      outline: none

      &::placeholder
        color: #aaa
        font-size: 13px
        font-weight: 500

  .right_balans_right_count_bill_1
    margin-left: 4%
    width: 48%
    display: inline-block

  .right_balans_right_count_bill_2
    width: 48%
    display: inline-block

  .right_balans_right_count_bill_3
    margin-left: 4%
    width: 30%
    display: inline-block

  .right_balans_right_count_bill_4
    width: 30%
    display: inline-block

  .right_balans_right_count_bill_5
    width: 34%
    display: inline-block

  .right_balans_right_count_bill_6
    width: 48%
    margin-left: 4%
    display: inline-block

  .right_balans_right_count input[type="submit"]
    color: white
    font-weight: 500
    font-size: 12px
    border: 0px
    letter-spacing: 2.5px
    background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
    padding: 14px
    border-radius: 30px
    width: 45%
    display: inline-block
    transition: 0.8s all ease

  .right_balans_right_count_bill_7
    text-align: center
    margin: 20px 0px

    img
      width: 17px
      display: inline-block
      vertical-align: middle

    a
      display: inline-block
      margin-left: 10px
      color: rgba(214, 73, 111, 1)
      text-decoration: underline
      font-size: 13px
    
    
@media screen and (min-width: 456px)
    .balans_desktop
        display: block
    .balans_mobile
        display: none

@media screen and (max-width: 456px)
    .balans_desktop
        display: none
    .balans_mobile
        display: block
        header
            height: 50px
            background: linear-gradient(90deg, #6831a1 -20%, rgba(214, 73, 111, 1) 100%)
            img
                display: inline-block
                width: 4vw
                vertical-align: middle
            h1
                display: inline-block
                font-weight: medium
                width: 76vw
                padding-top: 5px
                font-size: 3.823vw //13px
                color: white
            .header_burger
                display: inline-block
                transition: 0.5s all ease
                img
                    width: 7vw
            .header_nav 
                display: inline
                position: fixed
                left: 100vw
                background-color: black
                top: 50px
                transition: 0.3s all ease
                width: 100vw
                z-index: 2
                padding: 15px 0
                a
                    margin-right: 0px
                    padding: 10px 0
                    display: block
                    width: 100%
                    font-size: 18px
                    text-align: center
                    font-weight: 400
                    color: white
                    text-decoration: none

        .right_balans_left
            width: 100vw
            background-color: rgb(248, 249, 250)
            text-align: right
            margin: 0
            box-shadow: 0px 0px 0px 0px 
            border: 0px

        .right_balans_left_inner
            width: 90%
            margin: 5%

        .right_balans_left_inner_img
            display: inline-block
            width: 29%
            margin-top: 20px

            img
                width: 100%
                margin: 0

        .right_balans_left_inner_summa
            display: inline-block
            width: 70%
            position: relative
            left: -0vw
            vertical-align: top

            h2
                padding-top: 13%
                font-size: 4.70vw //16px
                font-weight: medium
                color: #370954
                margin: 0
                margin-bottom: 3%

            h1
                margin: 0
                font-size: 11.17vw //38px
                font-weight: semibold
                color: #d6496f

            span
                font-size: 5.88vw //20px

        .right_balans_left_inner_input
            margin-top: 14%
            width: 100%

            input
                &[type="text"]
                    background-image: url('../assets/money.png')
                    background-position: left
                    background-position-x: 3%
                    background-position-y: 50%
                    background-repeat: no-repeat
                    width: 90%
                    margin-right: 0%
                    font-size: 4.117vw //14px
                    font-weight: regular
                    font-family: 'Montserrat', sans-serif
                    border: 0px
                    border-bottom: 1px solid #222
                    padding: 7px 0 7px 10%
                    background-color: rgb(249, 250, 252)
                    outline: none
                    color: #222

                &::placeholder
                    color: #222
                    font-family: 'Montserrat', sans-serif

                &[type="submit"]
                    color: white
                    font-weight: medium
                    font-size: 3.529vw //12px
                    letter-spacing: 1px
                    border: 0px
                    height: 13vw
                    background: linear-gradient(353deg, rgba(120, 51, 137, 1) 0%, rgba(214, 73, 111, 1) 100%)
                    padding: 0
                    border-radius: 30px
                    width: 100%
                    margin-right: 0%
                    margin-top: 7%
                    transition: 0.8s all ease
                    cursor: pointer
                    outline: none
                    font-family: 'Montserrat', sans-serif
                    margin-bottom: 2vh
        

        .right_balans_right
            background: #f6f8f9
            text-align: left
            width: 100vw
            display: inline-block
            h1
                font-weight: 500
                padding: 10px 6vw
                color: #222
                font-size: 4.117vw //14px
                text-align: left
            .table_odd_row_1
                padding: 2.4vh 0
                width: 100vw
                

                .table_odd_row_1_line_1
                    width: 100vw
                    img
                        width: 7vw
                        margin: 0 0 0 6vw
                    span
                        margin-left: 3vw
                        color: #370954
                        font-size: 4.117vw //14px
                        font-weight: 500
                    div
                        display: inline-block
                        width: 40vw
                        float: right
                        input[type="text"]
                            width: 20vw
                            position: relative
                            top: -5px
                            display: inline-block
                            border: 1px solid lightgrey
                            text-align: center
                            font-size: 3.823vw //13px
                            height: 7vw
                            outline: none
                            padding: 0px 5%
                            border-radius: 5px
                            margin: 0px 5px 0px 5%

                        button
                            width: 5vw
                            display: inline-block
                            height: 5vw
                            background-color: inherit
                            vertical-align: top
                            background-image: url('../assets/check.png')
                            background-position: center
                            background-size: 100% 100%
                            border: 0px
                .table_odd_row_1_line_2
                    width: 96vw
                    p
                        margin: 0.5vh 0
                        color: #1b8b0f
                        font-weight: 500
                        font-size: 3.82vw //13px
                        display: inline-block
                        padding-left: 16vw

                    .table_odd_row_1_line_2_btn
                        color: #d6496f
                        float: right
                        padding-left: 0vw
                        border-bottom: 1px solid #d6496f
            .table_odd_row_2
                background-color: #fbfbfb
            


        .right_balans_right_count
            background: #f6f8f9
            border-collapse: collapse
            width: 100%
            text-align: left
            margin: 0%
            padding-top: 3vh
            border: 0px solid rgb(229, 230, 231)
            border-top: 1px solid #ebebeb
            background-color: rgb(248, 249, 250)
            box-shadow: 0px 0px 0px 0px

            h4
                margin: 0
                background-color: white
                border-radius: 0px
                font-weight: 500
                padding: 20px 6vw
                border-top: 1px solid #ebebeb
                color: #222
                font-size: 4.117vw //14px
                text-align: left

            .right_balans_right_count_inner
                width: 100%
                padding: 10px 0
                text-align: center

                img
                    display: inline-block
                    vertical-align: middle
                    margin-right: 8px
                    width: 4vw

                p
                    display: inline-block
                    vertical-align: middle
                    font-size: 4.117vw //14px
                    font-weight: regular
                    color: #aaa
                    letter-spacing: 5
            



        
        

        
          
                
        

    




</style>