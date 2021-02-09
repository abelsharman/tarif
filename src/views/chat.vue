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
            <h2>Ваши чат-боты</h2>

            <div class="right_block_inner_balans">
                <img src="../assets/photo.png" alt="">
           
               
               <div class="right_block_inner_balans_right">
                    <p>Ваш баланс: <span>{{ convertBalance }} ₽</span></p>
                    <router-link to="/balance">Пополнить баланс</router-link>
               </div>
                
            </div>


            <div class="right_block_inner_logout">
                <a href="https://marketbot.biz/user/logout"><img src="../assets/header_exit.png"></a>
            </div>
        </div>

    
        <div class="chat_block">
            <div class="chat_block_inner">
                <table>
                <tr class="chat_block_inner_row_heading" style="border:0px;background-color: white;border-radius: 15px;">
                    <th style="width: 51%;color:#222;">Название</th>
                    <th class="chat_block_inner_table_special_th" style="width: 19%">Каналы</th>
                    <th class="chat_block_inner_table_special_th" style="width: 12%">Лиды</th>
                    <th class="chat_block_inner_table_special_th" colspan = 2 style="width: 18%">Срок</th>
                
                </tr>

                <tr v-for="(item, index) in info.bots" :key="index" :class="{ box_shadow: index == 0 }">
                    <td class="chat_block_inner_first_column" >
                        <div class="chat_block_inner_margin1">
                            <div class="chat_block_id_1">
                                <p class="chat_block_id_1_grey">ID {{ item.id }} {{ item.owner }}</p>
                                <p class="chat_block_id_1_big">{{ item.name }}</p>
                                <img v-if="item.ms_balance < 5" src="../assets/danger.png">
                                <span  v-if="item.ms_balance < 5" class="chat_block_id_1_red">Баланс WABA: ${{ item.ms_balance }}</span>
                                <p v-if="item.ms_balance > 5" class="chat_block_id_1_green">Баланс WABA: ${{ item.ms_balance }}</p>
                                <p v-if="item.capacity_usage != null && item.capacity_usage.curr_usage != null" class="chat_block_id_1_darkgrey">{{ Math.ceil(item.capacity_usage.curr_usage/1024) }} мб</p>
                                <p class="chat_block_id_1_grey chat_block_id_1_grey_date">{{ formatDate(parseInt(item.created_at)) }}</p>
                            </div>

                            <div class="chat_block_id_2">
                                <div style="margin-bottom: 2px;">
                                    <a :href="'https://marketbot.biz/bchannels/index/'+ item.id">
                                    <img src="../assets/info.png" alt="info"><strong>Каналы</strong>
                                    </a>
                                 </div>

                                <div style="margin-bottom: 2px;">
                                    <a :href="'https://marketbot.biz/link/index/'+item.id">
                                    <img src="../assets/links.png" alt="links"><strong>Ссылки</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a :href="'https://marketbot.biz/op/oplist/' + item.id">
                                    <img src="../assets/view.png" alt="view"><strong>Операторы</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a :href="'https://marketbot.biz/bcrm/index/'+item.id">
                                    <img src="../assets/graphic.png" alt="graphic"><strong>CRM</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;" v-if="info.is_superuser">
                                    <a :href="'https://marketbot.biz/hsm/index/'+item.id">
                                    <strong style="margin-left: 25px;">Промокоды</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;" v-if="info.is_superuser">
                                    <a :href="'https://marketbot.biz/promocodes/index/'+item.id">
                                    <img src="../assets/menu5.png" alt="links"><strong>WABA профиль</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;" v-if="info.is_superuser">
                                    <a :href="'https://marketbot.biz/hsm/index/'+item.id">
                                    <img src="../assets/h.png" alt="h"><strong>HSM</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;" v-if="info.is_superuser">
                                    <a :href="'https://marketbot.biz/wb/index/'+item.id">
                                    <strong style="margin-left: 25px;">GSREG</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;" v-if="info.is_superuser">
                                    <a :href="'https://marketbot.biz/tariff/edit/'+item.id">
                                    <strong  style="margin-left: 25px;">Изм.тариф</strong>
                                    </a>
                                </div>
                            </div>

                            <div class="chat_block_id_3">
                                <a :href="'https://marketbot.biz/chat_v2/?f=0&botid='+item.id">
                                <div class="chat_block_id_3_border">
                                    <img src="../assets/menu1.png" alt="chat">
                                    <p>ДИАЛОГИ NEW</p>
                                </div>
                                </a>

                                 <a :href="'https://marketbot.biz/scripteditor/wizard/'+item.id">
                                <div class="chat_block_id_3_border">
                                    <img src="../assets/layers.png" alt="layers">
                                    <p>РЕДАКТОР СЦЕНАРИЯ</p>
                                </div>
                                </a>

                                
                                <div class="chat_block_id_3_border">
                                    <a :href="'https://marketbot.biz/spam/tasks/'+item.id">
                                    <img src="../assets/menu3.png" alt="mail">
                                    <p>РАССЫЛКА</p>
                                    </a>
                                </div>
                            

                            </div>
                        </div>
                    </td>




                    <td class="chat_block_inner_second_column">
                        <div class="chat_block_inner_margin">
                            
                            <div style="margin-bottom: 5px;margin-top:10px;">
                                <img src="../assets/logo_whatsapp.png" v-if="item.channel_status.GS.connected" alt="logo_whatsapp"><strong v-if="item.channel_status.GS.connected">+{{ item.channel_status.GS.name }}</strong>
                                <img src="../assets/logo_whatsapp.png"  v-if="!item.channel_status.GS.connected" alt="logo_whatsapp"><span v-if="!item.channel_status.GS.connected">Не подключен</span>
                                <div v-if="item.channel_status.GS.paid && item.channel_status.GS.connected" class="chat_green_point"></div>
                                <div v-if="!item.channel_status.GS.paid && item.channel_status.GS.connected" class="chat_red_point"></div>
                                <br>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/logo_telegram.png" v-if="item.channel_status.TL.connected" alt="telegram"><strong v-if="item.channel_status.TL.connected">@{{ item.channel_status.TL.name }}</strong>
                                <img src="../assets/logo_telegram.png"  v-if="!item.channel_status.TL.connected" alt="telegram"><span v-if="!item.channel_status.TL.connected">Не подключен</span>
                                <div v-if="item.channel_status.TL.paid && item.channel_status.TL.connected" class="chat_green_point"></div>
                                <div v-if="!item.channel_status.TL.paid && item.channel_status.TL.connected" class="chat_red_point"></div>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/logo_viber.png" v-if="item.channel_status.VB.connected" alt="VB"><strong v-if="item.channel_status.VB.connected">{{ item.channel_status.VB.name }}</strong>
                                <img src="../assets/logo_viber.png"  v-if="!item.channel_status.VB.connected" alt="VB"><span v-if="!item.channel_status.VB.connected">Не подключен</span>
                                <div v-if="item.channel_status.VB.paid && item.channel_status.VB.connected" class="chat_green_point"></div>
                                <div v-if="!item.channel_status.VB.paid && item.channel_status.VB.connected" class="chat_red_point"></div>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/logo_vk.png" v-if="item.channel_status.VK.connected" alt="VK"><strong v-if="item.channel_status.VK.connected">{{ item.channel_status.VK.name }}</strong>
                                <img src="../assets/logo_vk.png"  v-if="!item.channel_status.VK.connected" alt="VK"><span v-if="!item.channel_status.VK.connected">Не подключен</span>
                                <div v-if="item.channel_status.VK.paid && item.channel_status.VK.connected" class="chat_green_point"></div>
                                <div v-if="!item.channel_status.VK.paid && item.channel_status.VK.connected" class="chat_red_point"></div>
                            </div>
                          
                            <div class="chat_novye">
                                <span id="chat_novye_span" style="color: rgb(100,100,100);background-color:inherit">Новые</span>
                                <img src="../assets/left_arrow.png" alt="" @click="subPeer">
                                <span id="chat_novye_span" style="color: rgb(100,100,100);background-color:inherit">{{ peers[peer] }}</span>
                                <span id="chat_novye_span" v-if="peer == 0">{{ item.peers_stats.n }}</span>
                                <span id="chat_novye_span" v-if="peer == 1">{{ item.peers_stats.d }}</span>
                                <span id="chat_novye_span" v-if="peer == 2">{{ item.peers_stats.w }}</span>
                                <span id="chat_novye_span" v-if="peer == 3">{{ item.peers_stats.m }}</span>
                                <span id="chat_novye_span" v-if="peer == 4">{{ item.peers_stats.t }}</span>
                                <img src="../assets/right_arrow.png" alt="" @click="addPeer">
                            </div>
                        </div>
                    </td>



                    <td class="chat_block_inner_third_column">
                        <div class="chat_block_inner_margin">
                            <p>{{ item.lead_count }} лидов</p>
                            <p>{{ item.contact_count }} контакта</p>
                            <a href="https://marketbot.biz/lead/index/10150">Подробнее</a>
                        </div>
                    </td>



                    <td class="chat_block_inner_fourth_column">
                        <div class="chat_block_inner_margin">
                            <p v-if="item.tariff.paid_until == 0 && item.tariff.trial_until >= unixtime">Бесплатный период действует еще <span style="color:#1b680f;font-weight:600;">{{ Math.round((item.tariff.trial_until - unixtime)/24/60/60) }}</span> {{ numpf(Math.round(item.tariff.trial_until - unixtime)/24/60/60) }} </p>
                            <p v-else-if="item.tariff.paid_until > item.tariff.trial_until && item.tariff.paid_until > unixtime">Бот оплачен еще  <span style="color:#1b680f;font-weight:600;">{{ Math.round((item.tariff.paid_until - unixtime)/24/60/60) }}</span> {{ numpf(Math.round(item.tariff.paid_until - unixtime)/24/60/60) }} </p>
                            <p v-else-if="item.tariff.trial_until < unixtime"><span class="color:#d92253;font-weight:600;">Бесплатный период закончился</span></p>
                            <p v-else-if="item.tariff.paid_until < unixtime"><span class="color:#d92253;font-weight:600;">Оплаченный период закончился</span></p>
                            <router-link :to="{ name: 'Tarif', params: { bot: item.id }}">Настроить тариф</router-link>
                        </div>
                    </td>



                    <td class="chat_block_inner_fifth_column">
                        <a href="https://marketbot.biz/bot/del/10151"><img src="../assets/close.png" alt="close"></a>
                    </td>
                </tr>

                </table>
            </div>
        </div>
    </div>

    <div class="block_for_phones">
        <p>Извините, просим перейти на сайт через компьютер</p>
    </div>
  
</template>

<script>
export default {
    name: 'chat',
     data() {
        return{
            info: [],
            infoUser: [],
            infoBalance: [],
            unixtime: Math.round(new Date().getTime() / 1000),
            unixtimeSec:  Math.round(new Date().getTime()),
            peer: 0,
            peers: ["Сегодня", "За день", "Неделя", "Месяц", "Все время"],
            user_token: this.$cookie.getCookie('user_token')
        }
    },
    methods: {
        formatDate(date){
            const moment = require('moment')
            return moment.unix(date).format("DD.MM.YYYY")
        },
        addPeer(){
            if(this.peer < 4){
                this.peer += 1
            }
        },
        subPeer(){
            if(this.peer > 0){
                this.peer -= 1
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
        }
    },
    computed:{
        convertBalance() {
            return Math.round(this.infoBalance.user_balance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
    },
    created() {
        //this.$cookie.setCookie('user_token', '9c329f7404f8d74f0cf841e35b7e4680')
        const axios = require('axios');
        
        let self = this
        axios.get('https://marketbot.biz/bot/api_botlist?user_token='+this.user_token)
            .then(function(response){
                self.info = response.data
            })

        axios.get('https://marketbot.biz/user/current?user_token='+this.user_token)
            .then(function(response){
                self.infoUser = response.data
            })
    
         axios.get('http://marketbot.biz/balance/get_data?user_token='+this.user_token)
            .then(function(response){
                self.infoBalance = response.data
            })


    },

}
</script>

<style scoped>
    @media screen and (max-width: 1920px){
        .right_block{
            width: 94%;
        }
    .block_for_phones{
        display: none;
    }
    .left_block{
        float: left;
        position: fixed;
        width: 6%;
        height: 100vh;
        min-width: 103px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
    }
    .left_block_inner{
        margin-top: 300px;
    }
    .left_block_inner img{
        margin-top: 30px;
        display: block;
        margin-left: 35%;
        width: 30%;
        
    }
    .left_block_inner2{
        margin-top: 300px;
        padding-bottom: 42px;
    }
    .box_shadow{
        box-shadow: 0 5px 10px -1px rgb(239,240,245) inset;
    }




    .right_block{
        float: right;

        margin: 0;
    }
    .right_block_inner{
        width: 100%;
        margin: 0;
        text-align: left;
        height: 100px;
        background-color: #f6f6f6;
    }
    .right_block_inner h2{
        width: 20%;
        padding: 30px 0 30px 3%;
        display: inline-block;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #370954;
        font-size: 18px;
    }
    .right_block_inner_balans{
        padding-top: 1%;
        width: 67%;
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
    .right_block_inner_balans_right p{
        font-weight: 500;
        font-size: 13px;
        color: #370954;
        display: block;
    }
    .right_block_inner_balans_right a{
        line-height: 10px;
        font-size: 13px;
        color: #d6496f;
        text-align: left;
        display: block;
    }
    .right_block_inner_balans_right span{
        font-size: 26px;
        font-weight: 600;
        color: #d6496f;
        
    }
 



    .right_block_inner_logout{
        width: 8%;
        display: inline-block;
    }
    .right_block_inner_logout img{
        height: 31px;
        width: auto;
        vertical-align: middle;
        border-left: 1px solid rgb(209,218,223);
        padding-left: 10px;
        padding: 15px 0 15px 30px;
    }








    .chat_block_inner_margin{
        width: 85%;
        margin-left: 10%;
    }
    .chat_block_inner_margin p{
        margin: 0;
        font-size: 0.9vw;
        font-weight: 500;
    }
    .chat_block_inner_margin a{
        color: rgb(180, 46, 120);
        font-size: 1vw;
    }
    .chat_block_inner_margin span{
        color: rgb(51,125,25);
    }
    .chat_block_inner_margin .chat_block_red{
        color: rgb(207,30,65);
    }

    .chat_block{
        margin: 0;
        text-align: left;
        width: 96%;
        padding: 18px 2%;
    }
    .chat_block_inner{
        position: relative;
        border: 1px solid rgb(229, 230, 231);
        border-radius: 9px;
        padding-bottom: 20px;
        margin-top: 10px;
        overflow: scroll;
        overflow-x: none;
        height: calc(100vh - 180px);
        box-shadow: 0px 0px 10px 5px rgb(229, 230, 231);
    }
    .chat_block_inner table{
        width: 100%;
        min-width: 600px;
        padding-bottom: 20px;
        border-radius: 9px;
        border-collapse: collapse;
    }
    .chat_block_inner tr{
        border-bottom: 1px dashed rgb(207,219,224);
        border-left: 10px solid rgb(207,219,224);
        background-color: rgb(249,250,251);
        transition: 0.5s all ease;
        
    }
    .chat_block_inner tr:hover{
        border-left: 10px solid rgb(163,23,98);
        background-color: white;
    }
    .chat_block_inner th{
        text-transform: uppercase;
        height: 50px;
        font-weight: 500;
        padding-left: 2%;
        font-size: 14px;
        
    }
    .chat_block_inner_table_special_th{
        color: #96acbc;
        border-radius: 9px;
        
    }
    .chat_block_inner td{
        height: 165px;
        border-left: 1px solid rgb(229, 230, 231);
        justify-content: center;
    }
    .chat_block_inner_margin1{
        width: 95%;
        margin-left: 2%;
        height: auto;
    }
    .chat_block_inner_first_column{
        width: 51%;
    }
    .chat_block_id_1{
        display: inline-block;
        width: 39%;
        vertical-align: top;
        margin-top: 10px;
    }
    .chat_block_id_1 img{
        width: 13px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .chat_block_id_1 .chat_block_id_1_grey{
        font-size: 13px;
        color: #c3c3c3;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        margin: 2px 0;
    }
    .chat_block_id_1 .chat_block_id_1_big{
        font-size: 16px;
        margin: 7px 0 7px 0;
        color: #370954;
        font-weight: 500;
    }
    .chat_block_id_1 .chat_block_id_1_green{
        color: #1b8b0f;
        font-size: 13px;
        margin: 3px 0;
        font-weight: 500;
    }
    .chat_block_id_1 .chat_block_id_1_darkgrey{
        color: #777777;
        font-weight: 500;
        font-size: 13px;
        margin: 8px 0;
    }
    .chat_block_id_1 .chat_block_id_1_red{
        color: rgb(207,30,65);
        font-size: 0.9vw;
        margin: 3px 0;
    }
    .chat_block_id_1 .chat_block_id_1_grey_date{
        margin-top: 15px;
        font-size: 12px;
    }

    .chat_block_id_2{
        display: inline-block;
        width: 28%;
        vertical-align: top;
        margin-top: 3%;
    }
    .chat_block_id_2 img{
        vertical-align: middle;  
        margin-right: 7px;  
    }
    .chat_block_id_2 strong{
        color: #c34688;
        text-decoration: underline;
        font-weight: 500;
        line-height: 22px;
        font-size: 12px;
    }


    .chat_block_id_3{
        display: inline-block;
        width: 33%;
        vertical-align: top;
        margin-top: 3%;
    }
    .chat_block_id_3_border{
        padding: 1px 2px;
        height: 25px;
        text-align: center;
        border: 1px solid rgb(180,46,117);
        border-radius: 25px;
        margin-bottom: 6px;
    }
    .chat_block_id_3_bordergrey{
        background-color: rgb(209,218,223);
        border: 1px solid rgb(209,218,223);
        color: rgb(103,104,105);
    }
    .chat_block_id_3_border img{
        vertical-align: middle;
        margin-right: 3%;
        margin-top: 5px;
    }
    .chat_block_id_3_border p{
        display: inline-block;
        font-weight: 500;
        color: #222;
        font-size: 10px;
        margin: 0;
        vertical-align: middle;
        margin-top: 3px;
        
    }
    .chat_block_id_3_border .chat_block_id_1_grey{
        color: rgb(181,182,183);
        font-size: 10px;
        margin: 0;
    }


    .chat_block_inner_second_column{
        width: 19%;
    }
    .chat_block_inner_second_column img{
        width: 10%;
        vertical-align: middle;
        margin-right: 3%;
    }
    .chat_block_inner_second_column strong{
        font-weight: 500;
        font-size: 14px;
        display: inline-block;
        color: #370954;
    }
    .chat_block_inner_second_column span{
        font-size: 13px;
        font-weight: 500;
        color: #777;
    }
    .chat_green_point {
        width: 7px;
        display: inline-block;
        height: 7px;
        background-color: rgb(51,125,25);
        border-radius: 25px;
        vertical-align: middle;
        margin-left: 2%;
    }
    .chat_red_point {
        width: 7px;
        display: inline-block;
        height: 7px;
        background-color: red;
        border-radius: 25px;
        vertical-align: middle;
        margin-left: 2%;
  
    }
    .chat_novye{
        margin-top: 5%;
        width: 100%;
    }
    #chat_novye_span{
        color: #777;
        display: inline-block;
        background-color: rgb(206,215,221);
        padding: 1px 1%;
        border-radius: 15px;
        margin: 0px 1%;
        font-size: 13px;
        font-weight: 500;
    }
    .chat_novye img{
        width: 5%;
        display: inline-block;
        margin-left: 1px;
        vertical-align: middle;
    }
    .chat_block_inner_third_column{
        width: 12%;

    }
    .chat_block_inner_third_column .chat_block_inner_margin p, .chat_block_inner_fourth_column .chat_block_inner_margin p{
        font-size: 13px;
        font-weight: 500;
        line-height: 20px;
        color: #370954;
    }
    .chat_block_inner_third_column .chat_block_inner_margin a, .chat_block_inner_fourth_column .chat_block_inner_margin a{
        font-size: 13px;
        font-weight: 500;
        line-height: 20px;
        color: #c34688;
    }
    

    .chat_block_inner_fourth_column{
        width: 13%;
    } 
    .chat_block_inner_fifth_column{
        width: 5%;
    }
    .chat_block_inner_fifth_column img{
        width: 40%;
        margin-left: 30%;
        transition: 0.3s all ease;
    }
    .chat_block_inner_fifth_column img:hover{
        width: 45%;
        margin-left: 28%;
    }
    }
    @media screen and (max-width: 1440px){
        .right_block{
            width: calc(100% - 103px);
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
        margin-top: 170px;
        padding-bottom: 42px;
    }
    }

    @media screen and (max-width: 1366px){
    .block_for_phones{
        display: none;
    }
    .left_block{
        float: left;
        width: 6%;
        height: 100%;
        min-width: 103px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
    }
    .left_block_inner{
        margin-top: 160px;
    }
    .left_block_inner img{
        margin-top: 30px;
        display: block;
        margin-left: 35%;
        width: 30%;
        
    }
    .left_block_inner2{
        margin-top: 180px;
        padding-bottom: 42px;
    }




    .right_block{
        float: right;

        margin: 0;
    }
    .right_block_inner{
        width: 100%;
        margin: 0;
        text-align: left;
        height: 100px;
        background-color: #f6f6f6;
    }
    .right_block_inner h2{
        width: 20%;
        padding: 30px 0 30px 3%;
        display: inline-block;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #370954;
        font-size: 1.31vw;
    }
    .right_block_inner_balans{
        padding-top: 1%;
        width: 67%;
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
    .right_block_inner_balans_right p{
        font-weight: 500;
        font-size: 0.95vw;
        color: #370954;
    }
    .right_block_inner_balans_right a{
        line-height: 10px;
        font-size: 0.95vw;
        color: #d6496f;
    }
    .right_block_inner_balans_right span{
        font-size: 1.90vw;
        font-weight: 600;
        color: #d6496f;
        
    }
 



    .right_block_inner_logout{
        width: 8%;
        display: inline-block;
    }
    .right_block_inner_logout img{
        height: 31px;
        width: auto;
        vertical-align: middle;
        border-left: 1px solid rgb(209,218,223);
        padding-left: 10px;
        padding: 15px 0 15px 30px;
    }








    .chat_block_inner_margin{
        width: 85%;
        margin-left: 10%;
    }
    .chat_block_inner_margin p{
        margin: 0;
        font-size: 0.9vw;
        font-weight: 500;
    }
    .chat_block_inner_margin a{
        color: rgb(180, 46, 120);
        font-size: 1vw;
    }
    .chat_block_inner_margin span{
        color: rgb(51,125,25);
    }
    .chat_block_inner_margin .chat_block_red{
        color: rgb(207,30,65);
    }

    .chat_block{
        margin: 0;
        text-align: left;
        width: 96%;
        padding: 10px 2%;
    }
    .chat_block_inner{
        position: relative;
        border: 1px solid rgb(229, 230, 231);
        border-radius: 9px;
        padding-bottom: 20px;
        margin-top: 10px;
        overflow: scroll;
        height: calc(100vh - 180px);
        box-shadow: 0px 0px 10px 5px rgb(229, 230, 231);
    }
    .chat_block_inner table{
        width: 100%;
        min-width: 600px;
        padding-bottom: 20px;
        border-radius: 9px;
        border-collapse: collapse;
    }
    .chat_block_inner tr{
        border-bottom: 1px dashed rgb(207,219,224);
        border-left: 10px solid rgb(207,219,224);
        background-color: rgb(249,250,251);
        transition: 0.5s all ease;
    }
    .chat_block_inner tr:hover{
        border-left: 10px solid rgb(163,23,98);
        background-color: white;
    }
    .chat_block_inner th{
        text-transform: uppercase;
        height: 50px;
        font-weight: 500;
        padding-left: 2%;
        font-size: 1.02vw;
    }
    .chat_block_inner_table_special_th{
        color: #96acbc;
        border-radius: 9px;
    }
    .chat_block_inner td{
        height: 180px;
        border-left: 1px solid rgb(229, 230, 231);
        justify-content: center;
    }
    .chat_block_inner_margin1{
        width: 95%;
        margin-left: 2%;
        height: auto;
    }
    .chat_block_inner_first_column{
        width: 51%;
    }
    .chat_block_id_1{
        display: inline-block;
        width: 39%;
        vertical-align: top;
        margin-top: 10px;
    }
    .chat_block_id_1 img{
        width: 13px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .chat_block_id_1 .chat_block_id_1_grey{
        font-size: 0.95vw;
        color: #c3c3c3;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        margin: 2px 0;
    }
    .chat_block_id_1 .chat_block_id_1_big{
        font-size: 1.17vw;
        margin: 7px 0 7px 0;
        color: #370954;
        font-weight: 500;
    }
    .chat_block_id_1 .chat_block_id_1_green{
        color: #1b8b0f;
        font-size: 0.95vw;
        margin: 3px 0;
        font-weight: 500;
    }
    .chat_block_id_1 .chat_block_id_1_darkgrey{
        color: #777777;
        font-weight: 500;
        font-size: 0.95vw;
        margin: 8px 0;
    }
    .chat_block_id_1 .chat_block_id_1_red{
        color: rgb(207,30,65);
        font-size: 0.9vw;
        margin: 3px 0;
    }
    .chat_block_id_1 .chat_block_id_1_grey_date{
        margin-top: 15px;
        font-size: 0.878vw;
    }

    .chat_block_id_2{
        display: inline-block;
        width: 28%;
        vertical-align: top;
        margin-top: 20px;
    }
    .chat_block_id_2 img{
        vertical-align: middle;  
        margin-right: 7px;  
    }
    .chat_block_id_2 strong{
        color: #c34688;
        text-decoration: underline;
        font-weight: 500;
        line-height: 22px;
        font-size: 0.878vw;
    }


    .chat_block_id_3{
        display: inline-block;
        width: 33%;
        vertical-align: top;
        margin-top: 3%;
    }
    .chat_block_id_3_border{
        padding: 1px 2px;
        height: 25px;
        text-align: center;
        border: 1px solid rgb(180,46,117);
        border-radius: 25px;
        margin-bottom: 6px;
    }
    .chat_block_id_3_bordergrey{
        background-color: rgb(209,218,223);
        border: 1px solid rgb(209,218,223);
        color: rgb(103,104,105);
    }
    .chat_block_id_3_border img{
        vertical-align: middle;
        margin-right: 3%;
        margin-top: 5px;
    }
    .chat_block_id_3_border p{
        display: inline-block;
        font-weight: 500;
        color: #222;
        font-size: 0.732vw;
        margin: 0;
        vertical-align: middle;
        margin-top: 3px;
        
    }
    .chat_block_id_3_border .chat_block_id_1_grey{
        color: rgb(181,182,183);
        font-size: 0.732vw;
        margin: 0;
    }


    .chat_block_inner_second_column{
        width: 19%;
    }
    .chat_block_inner_second_column img{
        width: 10%;
        vertical-align: middle;
        margin-right: 3%;
    }
    .chat_block_inner_second_column strong{
        font-weight: 500;
        font-size: 1.02vw;
        display: inline-block;
        color: #370954;
    }
    .chat_green_point {
        width: 7px;
        display: inline-block;
        height: 7px;
        background-color: rgb(51,125,25);
        border-radius: 25px;
        vertical-align: middle;
        margin-left: 2%;
    }
    .chat_red_point {
        width: 7px;
        display: inline-block;
        height: 7px;
        background-color: red;
        border-radius: 25px;
        vertical-align: middle;
        margin-left: 2%;
  
    }
    .chat_novye{
        margin-top: 10%;
    }
    #chat_novye_span{
        color: #777;
        background-color: rgb(206,215,221);
        padding: 1px 2%;
        border-radius: 15px;
        margin: 0px 1%;
        font-size: 0.75vw;
        font-weight: 500;
    }
    .chat_novye img{
        width: 5%;
        margin-left: 1px;
        vertical-align: middle;
    }
    .chat_block_inner_third_column{
        width: 12%;

    }
    .chat_block_inner_third_column .chat_block_inner_margin p, .chat_block_inner_fourth_column .chat_block_inner_margin p{
        font-size: 0.95vw;
        font-weight: 500;
        line-height: 20px;
        color: #370954;
    }
    .chat_block_inner_third_column .chat_block_inner_margin a, .chat_block_inner_fourth_column .chat_block_inner_margin a{
        font-size: 0.95vw;
        font-weight: 500;
        line-height: 20px;
        color: #c34688;
    }
    

    .chat_block_inner_fourth_column{
        width: 13%;
    } 
    .chat_block_inner_fifth_column{
        width: 5%;
    }
    .chat_block_inner_fifth_column img{
        width: 40%;
        margin-left: 30%;
        transition: 0.3s all ease;
    }
    .chat_block_inner_fifth_column img:hover{
        width: 45%;
        margin-left: 28%;
    }
    }


    @media screen and (max-width: 1300px) {
        .chat_green_point {
        width: 5px;
        height: 5px;
    }
    .chat_red_point {
        width: 5px;
        height: 5px;
    }
    }
    @media (max-width: 960px){
        .right_balans_left{
           width: 90%;
        }
        .right_balans_right{
            width: 90%;
        }
        .right_block_inner h2{
            width: 30%;
            font-size: 0.9em;
        }
        .right_block_inner_balans{
            width: 50%;
        }
        
    }
    @media (max-width: 800px){
        .right_balans_left{
           width: 90%;
        }
        .right_balans_right{
            width: 90%;
        }
        .right_block_inner h2{
            width: 30%;
            font-size: 0.9em;
        }
        .right_block_inner_balans{
            width: 50%;
        }
        .left_block_inner{
        margin-top: 100px;
    }
    .left_block_inner img{
        margin-top: 30px;
        display: block;
        margin-left: 37%;
        width: 25%;
        
    }
    .left_block_inner2{
        margin-top: 100px;
        padding-bottom: 42px;
    }
        
    }
     @media (max-width: 440px){
        .block_for_phones{
            display: block;
            position: fixed;
            background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
            width: calc(89%);
            color: white;
            top: 30%;   
            font-size: 1.5em;
            left: 3%;
            text-align: center;
            opacity: 1;
            padding: 15% 3% 18% 3%;
        }
        .block_for_phones p{
            margin: 0;
        }
        .chat_block_inner table{
            min-width: 100%;
            opacity: 0.3;
        }
        .left_block, .right_block{
            opacity: 0.2;
        }
    }
    
</style>