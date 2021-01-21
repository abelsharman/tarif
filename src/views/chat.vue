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
            <h2>Ваши чат-боты</h2>

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

    
        <div class="chat_block">
            <div class="chat_block_inner">
                <table>
                <tr class="chat_block_inner_row_heading" style="border:0px;background-color: white;border-radius: 15px;">
                    <th style="width: 51%;">Название</th>
                    <th class="chat_block_inner_table_special_th" style="width: 19%">Каналы</th>
                    <th class="chat_block_inner_table_special_th" style="width: 12%">Лиды</th>
                    <th class="chat_block_inner_table_special_th" colspan = 2 style="width: 18%">Срок</th>
                
                </tr>

                <tr>
                    <td class="chat_block_inner_first_column">
                        <div class="chat_block_inner_margin1">
                            <div class="chat_block_id_1">
                                <p class="chat_block_id_1_grey">ID 22345</p>
                                <p class="chat_block_id_1_big">Бот_Валера_1</p>
                                <p class="chat_block_id_1_green">Баланс WABA: $9,900</p>
                                <p class="chat_block_id_1_darkgrey">3 мб</p>
                                <p class="chat_block_id_1_grey">13 июня, 2019</p>
                            </div>

                            <div class="chat_block_id_2">
                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/bchannels/index/10150">
                                    <img src="../assets/info.png" alt="info"><strong>Профиль</strong>
                                    </a>
                                 </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/link/index/10150">
                                    <img src="../assets/links.png" alt="links"><strong>Ссылки</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/op/oplist/10150">
                                    <img src="../assets/view.png" alt="view"><strong>Операторы</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/bcrm/index/10150">
                                    <img src="../assets/graphic.png" alt="graphic"><strong>CRM</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/promocodes/index/10150">
                                    <img src="../assets/links.png" alt="links"><strong>WABA профиль</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/bchannels/index/10150">
                                    <img src="../assets/h.png" alt="h"><strong>HSM</strong>
                                    </a>
                                </div>
                            </div>

                            <div class="chat_block_id_3">
                                <a href="https://marketbot.biz/chat_v2/?f=0&botid=10150">
                                <div class="chat_block_id_3_border">
                                    <img src="../assets/chat.png" alt="chat">
                                    <p>ДИАЛОГИ NEW</p>
                                </div>
                                </a>

                                 <a href="https://marketbot.biz/scripteditor/wizard/10150">
                                <div class="chat_block_id_3_border">
                                    <img src="../assets/layers.png" alt="layers">
                                    <p>РЕДАКТОР СЦЕНАРИЯ</p>
                                </div>
                                </a>

                                
                                <div class="chat_block_id_3_border">
                                    <a href="https://marketbot.biz/spam/tasks/10150">
                                    <img src="../assets/mail.png" alt="mail">
                                    <p>РАССЫЛКА</p>
                                    </a>
                                </div>
                            

                            </div>
                        </div>
                    </td>




                    <td class="chat_block_inner_second_column">
                        <div class="chat_block_inner_margin">
                            
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/whatsapp.png" alt="whatsapp"><strong>+79665989033</strong><div class="chat_green_point"></div><br>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/telegram.png" alt="telegram"><strong>@dsfddsddsflsd_bot</strong><div class="chat_green_point"></div><br>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/viber.png" alt="viber"><strong>propusk</strong><div class="chat_green_point"></div><br>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/vk.png" alt="vk"><strong>50932384</strong><div class="chat_green_point"></div><br>
                            </div>
                          
                            <div class="chat_novye">
                                <span style="color: rgb(100,100,100);font-size:14px;">Новые: </span>
                                <img src="../assets/left_arrow.png" alt="">
                                <span style="color: rgb(100,100,100);font-size:14px;">Сегодня</span>
                                <span id="chat_novye_span">3236</span>
                                <img src="../assets/right_arrow.png" alt="">
                            </div>
                        </div>
                    </td>



                    <td class="chat_block_inner_third_column">
                        <div class="chat_block_inner_margin">
                            <p>1235 лидов</p>
                            <p>242 контакта</p>
                            <a href="https://marketbot.biz/lead/index/10150">Подробнее</a>
                        </div>
                    </td>



                    <td class="chat_block_inner_fourth_column">
                        <div class="chat_block_inner_margin">
                            <p>Модуль действителен еще:<span>93 дня</span></p>
                            <router-link to="/tarif">Настроить тариф</router-link>
                        </div>
                    </td>



                    <td class="chat_block_inner_fifth_column">
                        <img src="../assets/close.png" alt="close">
                    </td>
                </tr>




                <tr>
                    <td class="chat_block_inner_first_column">
                        <div class="chat_block_inner_margin1">
                            <div class="chat_block_id_1">
                                <p class="chat_block_id_1_grey">ID 22345</p>
                                <p class="chat_block_id_1_big">Бот_Валера_1</p>
                                 <img src="../assets/danger.png">
                                <span class="chat_block_id_1_red">Баланс WABA: $0</span>
                
                                <p class="chat_block_id_1_grey" style="width: 90%">Пополните баланс на сумму от 100 ₽ для функции "Написать первым"</p>
                                <p class="chat_block_id_1_darkgrey">3 мб</p>
                                <p class="chat_block_id_1_grey">13 июня, 2019</p>
                            </div>

                            <div class="chat_block_id_2">
                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/bchannels/index/10150">
                                    <img src="../assets/info.png" alt="info"><strong>Профиль</strong>
                                    </a>
                                 </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/link/index/10150">
                                    <img src="../assets/links.png" alt="links"><strong>Ссылки</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/op/oplist/10150">
                                    <img src="../assets/view.png" alt="view"><strong>Операторы</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/bcrm/index/10150">
                                    <img src="../assets/graphic.png" alt="graphic"><strong>CRM</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/promocodes/index/10150">
                                    <img src="../assets/links.png" alt="links"><strong>WABA профиль</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/bchannels/index/10150">
                                    <img src="../assets/h.png" alt="h"><strong>HSM</strong>
                                    </a>
                                </div>
                            </div>

                            <div class="chat_block_id_3">
                                <a href="https://marketbot.biz/chat_v2/?f=0&botid=10150">
                                <div class="chat_block_id_3_border">
                                    <img src="../assets/chat.png" alt="chat">
                                    <p>ДИАЛОГИ NEW</p>
                                </div>
                                </a>

                                 <a href="https://marketbot.biz/scripteditor/wizard/10150">
                                <div class="chat_block_id_3_border">
                                    <img src="../assets/layers.png" alt="layers">
                                    <p>РЕДАКТОР СЦЕНАРИЯ</p>
                                </div>
                                </a>

                                
                                <div class="chat_block_id_3_border chat_block_id_3_bordergrey">
                                    <img src="../assets/mailgrey.png" alt="mail">
                                    <p>РАССЫЛКА</p>
                                    <p class="chat_block_id_1_grey">Пополните баланс на сумму от 100₽ для тестирования Массовой рассылки</p>
                        
                                </div>
                            

                            </div>
                        </div>
                    </td>




                    <td class="chat_block_inner_second_column">
                        <div class="chat_block_inner_margin">
                            
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/whatsapp.png" alt="whatsapp"><strong>+79665989033</strong><div class="chat_green_point"></div><br>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/telegram.png" alt="telegram"><strong>@dsfddsddsflsd_bot</strong><div class="chat_green_point"></div><br>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/viber.png" alt="viber"><strong>propusk</strong><div class="chat_green_point"></div><br>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/vk.png" alt="vk"><strong>50932384</strong><div class="chat_green_point"></div><br>
                            </div>
                          
                            <div class="chat_novye">
                                <span style="color: rgb(100,100,100);font-size:14px;">Новые: </span>
                                <img src="../assets/left_arrow.png" alt="">
                                <span style="color: rgb(100,100,100);font-size:14px;">Сегодня</span>
                                <span id="chat_novye_span">3236</span>
                                <img src="../assets/right_arrow.png" alt="">
                            </div>
                        </div>
                    </td>



                    <td class="chat_block_inner_third_column">
                        <div class="chat_block_inner_margin">
                            <p>1235 лидов</p>
                            <p>242 контакта</p>
                            <a href="https://marketbot.biz/lead/index/10150">Подробнее</a>
                        </div>
                    </td>



                    <td class="chat_block_inner_fourth_column">
                        <div class="chat_block_inner_margin">
                            <p>Модуль действителен еще:<span>93 дня</span></p>
                            <router-link to="/tarif">Настроить тариф</router-link>
                        </div>
                    </td>



                    <td class="chat_block_inner_fifth_column">
                        <img src="../assets/close.png" alt="close">
                    </td>
                </tr>




                <tr>
                    <td class="chat_block_inner_first_column">
                        <div class="chat_block_inner_margin1">
                            <div class="chat_block_id_1">
                                <p class="chat_block_id_1_grey">ID 22345</p>
                                <p class="chat_block_id_1_big">Бот_Валера_1</p>
                                <p class="chat_block_id_1_green">Баланс WABA: $9,900</p>
                                <p class="chat_block_id_1_darkgrey">3 мб</p>
                                <p class="chat_block_id_1_grey">13 июня, 2019</p>
                            </div>

                            <div class="chat_block_id_2">
                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/bchannels/index/10150">
                                    <img src="../assets/info.png" alt="info"><strong>Профиль</strong>
                                    </a>
                                 </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/link/index/10150">
                                    <img src="../assets/links.png" alt="links"><strong>Ссылки</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/op/oplist/10150">
                                    <img src="../assets/view.png" alt="view"><strong>Операторы</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/bcrm/index/10150">
                                    <img src="../assets/graphic.png" alt="graphic"><strong>CRM</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/promocodes/index/10150">
                                    <img src="../assets/links.png" alt="links"><strong>WABA профиль</strong>
                                    </a>
                                </div>

                                <div style="margin-bottom: 2px;">
                                    <a href="https://marketbot.biz/bchannels/index/10150">
                                    <img src="../assets/h.png" alt="h"><strong>HSM</strong>
                                    </a>
                                </div>
                            </div>
                           

                           <div class="chat_block_id_3">
                                <a href="https://marketbot.biz/chat_v2/?f=0&botid=10150">
                                <div class="chat_block_id_3_border">
                                    <img src="../assets/chat.png" alt="chat">
                                    <p>ДИАЛОГИ NEW</p>
                                </div>
                                </a>

                                 <a href="https://marketbot.biz/scripteditor/wizard/10150">
                                <div class="chat_block_id_3_border">
                                    <img src="../assets/layers.png" alt="layers">
                                    <p>РЕДАКТОР СЦЕНАРИЯ</p>
                                </div>
                                </a>

                                
                                <div class="chat_block_id_3_border">
                                    <a href="https://marketbot.biz/spam/tasks/10150">
                                    <img src="../assets/mail.png" alt="mail">
                                    <p>РАССЫЛКА</p>
                                    </a>
                                </div>
                            

                            </div>
                        </div>
                    </td>




                    <td class="chat_block_inner_second_column">
                        <div class="chat_block_inner_margin">
                            
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/whatsapp.png" alt="whatsapp"><strong>+79665989033</strong><div class="chat_green_point"></div><br>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/telegram.png" alt="telegram"><strong>@dsfddsddsflsd_bot</strong><div class="chat_green_point"></div><br>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/viber.png" alt="viber"><strong>propusk</strong><div class="chat_green_point"></div><br>
                            </div>
                            <div style="margin-bottom: 5px;">
                                <img src="../assets/vk.png" alt="vk"><strong>50932384</strong><div class="chat_green_point"></div><br>
                            </div>
                          
                            <div class="chat_novye">
                                <span style="color: rgb(100,100,100);font-size:14px;">Новые: </span>
                                <img src="../assets/left_arrow.png" alt="">
                                <span style="color: rgb(100,100,100);font-size:14px;">Сегодня</span>
                                <span id="chat_novye_span">3236</span>
                                <img src="../assets/right_arrow.png" alt="">
                            </div>
                        </div>
                    </td>



                    <td class="chat_block_inner_third_column">
                        <div class="chat_block_inner_margin">
                            <p>1235 лидов</p>
                            <p>242 контакта</p>
                             <a href="https://marketbot.biz/lead/index/10150">Подробнее</a>
                        </div>
                    </td>



                    <td class="chat_block_inner_fourth_column">
                        <div class="chat_block_inner_margin">
                            <p>Бесплатный период заканчивается через:<span class="chat_block_red">2 дня</span></p>
                            <router-link to="/tarif">Настроить тариф</router-link>
                        </div>
                    </td>



                    <td class="chat_block_inner_fifth_column">
                        <img src="../assets/close.png" alt="close">
                    </td>
                </tr>
                </table>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'chat'
}
</script>

<style scoped>
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





    .chat_block_inner_margin{
        width: 85%;
        margin-left: 20px;
    }
    .chat_block_inner_margin p{
        margin: 0;
        font-size: 15px;
        font-weight: 500;
    }
    .chat_block_inner_margin a{
        color: rgb(180, 46, 120);
        font-size: 15px;
    }
    .chat_block_inner_margin span{
        color: rgb(51,125,25);
    }
    .chat_block_inner_margin .chat_block_red{
        color: rgb(207,30,65);
    }

    .chat_block{
        margin: 0;
        height: 400px;
        text-align: left;
        width: 95%;
        padding: 10px 30px;
    }
    .chat_block_inner{
        position: relative;
        height: 400px;
        border: 1px solid rgb(229, 230, 231);
        border-radius: 9px;
        box-shadow: 0px 0px 10px 5px rgb(229, 230, 231);
    }
    .chat_block_inner table{
        width: 100%;
        height: 100px;
        border-radius: 9px;
        border-collapse: collapse;
    }
    .chat_block_inner tr{
        border-bottom: 1px dashed rgb(207,219,224);
        border-left: 5px solid rgb(207,219,224);
        background-color: rgb(249,250,251);
        transition: 0.5s all ease;
    }
    .chat_block_inner tr:hover{
        border-left: 5px solid rgb(163,23,98);
        background-color: white;
    }
    .chat_block_inner th{
        text-transform: uppercase;
        height: 50px;
        font-weight: 500;
        padding-left: 20px;
    }
    .chat_block_inner_table_special_th{
        color: rgb(128, 156, 174);
        border-radius: 9px;
    }
    .chat_block_inner td{
        height: 200px;
        border-left: 1px solid rgb(229, 230, 231);
        justify-content: center;
    }
    .chat_block_inner_margin1{
        width: 95%;
        margin-left: 20px;
        height: auto;
    }
    .chat_block_inner_first_column{
        width: 51%;
    }
    .chat_block_id_1{
        display: inline-block;
        width: 39%;
        vertical-align: top;
        margin-top: 20px;
    }
    .chat_block_id_1 img{
        width: 13px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .chat_block_id_1 .chat_block_id_1_grey{
        color: rgb(181,182,183);
        font-size: 12px;
        margin: 2px 0;
    }
    .chat_block_id_1 .chat_block_id_1_big{
        font-size: 17px;
        margin: 7px 0 3px 0;
        color: rgb(40,12,68)
    }
    .chat_block_id_1 .chat_block_id_1_green{
        color: rgb(51,125,25);
        font-size: 14px;
        margin: 3px 0;
    }
    .chat_block_id_1 .chat_block_id_1_darkgrey{
        color: rgb(99,100,101);
        font-size: 14px;
        margin: 3px 0;
    }
    .chat_block_id_1 .chat_block_id_1_red{
        color: rgb(207,30,65);
        font-size: 14px;
        margin: 3px 0;
    }

    .chat_block_id_2{
        display: inline-block;
        width: 28%;
        vertical-align: top;
        margin-top: 20px;
    }
    .chat_block_id_2 img{
        width: 15px;
        vertical-align: middle;  
        margin-right: 7px;  
    }
    .chat_block_id_2 strong{
        color: rgb(180,46,117);
        text-decoration: underline;
        font-weight: 500;
        font-size: 14px;
    }


    .chat_block_id_3{
        display: inline-block;
        width: 33%;
        vertical-align: top;
        margin-top: 3%;
    }
    .chat_block_id_3_border{
        padding: 1px 18px;
        height: 28px;
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
        width: 16px;
        vertical-align: middle;
        margin-right: 7px;

    }
    .chat_block_id_3_border p{
        display: inline-block;
        font-weight: 500;
        color: #2c3e50;
        font-size: 12px;
        margin-top: 5px;
        
    }
    .chat_block_id_3_border .chat_block_id_1_grey{
        color: rgb(181,182,183);
        font-size: 12px;
        margin: 0;
    }


    .chat_block_inner_second_column{
        width: 19%;
    }
    .chat_block_inner_second_column img{
        width: 22px;
        vertical-align: top;
        margin-right: 10px;
    }
    .chat_block_inner_second_column strong{
        font-weight: 500;
        font-size: 15px;
    }
    .chat_green_point {
        width: 7px;
        display: inline-block;
        height: 7px;
        background-color: rgb(51,125,25);
        border-radius: 25px;
        vertical-align: middle;
        margin-left: 5px;
        margin-bottom: 2px;
    }
    .chat_novye{
        margin-top: 10%;
    }
    #chat_novye_span{
        color: rgb(100,100,100);
        background-color: rgb(206,215,221);
        padding: 1px 7px;
        border-radius: 15px;
        margin: 0px 4px;
        font-size: 14px;
        font-weight: 500;
    }
    .chat_novye img{
        width: 11px;
        margin-top: 5px;
        margin-left: 1px;
    }
    .chat_block_inner_third_column{
        width: 12%;

    }
    

    .chat_block_inner_fourth_column{
        width: 13%;
    } 
    .chat_block_inner_fifth_column{
        width: 5%;
    }
    .chat_block_inner_fifth_column img{
        width: 50%;
        margin-left: 25%;
        transition: 0.3s all ease;
    }
    .chat_block_inner_fifth_column img:hover{
        width: 55%;
        margin-left: 22%;
    }

</style>