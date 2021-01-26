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
            <h2>Тарифы</h2>

            <div class="right_block_inner_balans">
                <img src="../assets/photo.png" alt="">
           
               
               <div class="right_block_inner_balans_right">
                    <p>Ваш баланс: <span>0 ₽</span></p>
                    <router-link to="/balance">Пополнить баланс</router-link>
               </div>
                
            </div>


            <div class="right_block_inner_logout">
                <img src="../assets/header_exit.png">
            </div>
        </div>



        <div class="right_tarif">
            <h4>Настрой свой тариф для Бот_Валера_1</h4>

            <div class="tarif_calculator">
                <div class="tarif_calculator_scroll">
                    <div class="tarif_calculator_scroll_first_block" style="box-shadow: 0 5px 10px -1px rgb(239,240,245) inset;">
                        <h1>01</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Подключение мессенджеров: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost"><strong>{{ firstBlockCount }}</strong> ₽/месяц + <span>тарификация WhatsApp</span></p>

                        <div class="tarif_calculator_scroll_first_block_icons">
                            <div v-if="this.info.used_features.features.includes('GS')">
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/whatsapp.png" alt="whatsapp">
                                <p>WhatsApp</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('GS') && checkWhatsApp">
                                <img @click="closeWhatsApp" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/whatsapp.png" alt="whatsapp">
                                <p>WhatsApp</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('GS') && !checkWhatsApp">
                                <img @click="clickWhatsApp" class="tarif_calculator_scroll_first_block_greyicons" style="width:102%;border:0px;" src="../assets/whatsapp3.png" alt="whatsapp">
                                <p>WhatsApp</p>
                            </div>



                            <div v-if="this.info.used_features.features.includes('TL')">
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/telegram.png" alt="telegram">
                                <p>Telegram</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('TL') && checkTelegram">
                                <img @click="closeTelegram" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/telegram.png" alt="telegram">
                                <p>Telegram</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('TL') && !checkTelegram">
                                <img @click="clickTelegram" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/telegram3.png" alt="telegram">
                                <p>Telegram</p>
                            </div>


                            <div v-if="this.info.used_features.features.includes('VB')">
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/viber.png" alt="viber">
                                <p>Viber</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('VB') && checkViber">
                                <img @click="closeViber" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/viber.png" alt="viber">
                                <p>Viber</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('VB') && !checkViber">
                                <img @click="clickViber" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/viber3.png" alt="viber">
                                <p>Viber</p>
                            </div>




                            <div v-if="this.info.used_features.features.includes('VK')">
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/vk.png" alt="vk">
                                <p>Vkontakte</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('VK') && checkVk">
                                <img @click="closeVk" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/vk.png" alt="vk">
                                <p>Vkontakte</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('VK') && !checkVk">
                                <img @click="clickVk" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/vk3.png" alt="vk">
                                <p>Vkontakte</p>
                            </div>
                        </div>


                        <label class="switch" v-if="!this.info.used_features.features.includes('waba_registered')">
                                <input type="checkbox" ref="businessapi">
                                <span class="slider round"></span>
                                <img class="img1" src="../assets/close2.png" alt="">
                                <img class="img2" src="../assets/tick.png" alt="">
                        </label>
                        <span v-if="!this.info.used_features.features.includes('waba_registered')">Подключение вашего номера к WhatsApp Business API</span>


                        <div class="tarif_calculator_scroll_first_block_list">
                            <p>В стоимость входит:</p>
                            <p>1.Создание бизнес-аккаунта в Facebook.</p>
                            <p>2.Авторизация + модерация аккаунта Facebook.</p>
                            <p>3.Подключение к WhatsApp Business API.</p>
                            <p>4.Подача заявки на получение авторизованного названия компании: </p>
                            <strong>Marketbot</strong>
                            <img src="../assets/check2.png" alt="check2">
                        </div>

                    </div>



                    <div class="tarif_calculator_scroll_first_block">
                        <h1>02</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Настройка чат-центров: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost"><strong>{{ secondBlockCount }}</strong> ₽/месяц</p>

                        <div class="tarif_calculator_scroll_first_block_icons">
                            <div v-if="this.info.used_features.features.includes('chat')">
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/chat2.png" alt="chat2">
                                <p>Чат</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('chat') && checkChat">
                                <img @click="closeChat" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/chat2.png" alt="chat2">
                                <p>Чат</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('chat') && !checkChat">
                                <img @click="clickChat" class="tarif_calculator_scroll_first_block_greyicons" style="width:102%;border:0px;" src="../assets/chat3.png" alt="chat2">
                                <p>Чат</p>
                            </div>

                            


                            <div v-if="this.info.used_features.features.includes('bot')">
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/question.png" alt="question">
                                <p>Написать первым</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('bot') && checkWrite">
                                <img @click="closeWriteFirst" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/question.png" alt="question">
                                <p>Написать первым</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('bot') && !checkWrite">
                                <img @click="clickWriteFirst" class="tarif_calculator_scroll_first_block_greyicons" style="width:102%;border:0px;" src="../assets/question3.png" alt="question">
                                <p>Написать первым</p>
                            </div>



                            <div>      
                                <div class="tarif_calculator_scroll_first_block_icons_plus_minus" v-if="!this.info.used_features.ops">
                                    <p v-if="countOperator > 0" @click="clickOperatorMinus" class="tarif_calculator_scroll_first_block_icons_plus_minus_1">-</p>
                                    <p v-if="countOperator == 0" class="tarif_calculator_scroll_first_block_icons_plus_minus_1"  style="background-color:rgb(240,241,242)">-</p>


                                    <p class="tarif_calculator_scroll_first_block_icons_plus_minus_2">{{ countOperator }}</p>
                                    <p @click="clickOperatorPlus" class="tarif_calculator_scroll_first_block_icons_plus_minus_3">+</p>
                                </div>


                                <div class="tarif_calculator_scroll_first_block_icons_plus_minus" v-if="this.info.used_features.ops">
                                    <p v-if="countOperator > 0" @click="clickOperatorMinus" class="tarif_calculator_scroll_first_block_icons_plus_minus_1" >-</p>
                                    <p v-if="countOperator == 0" class="tarif_calculator_scroll_first_block_icons_plus_minus_1"  style="background-color:rgb(240,241,242)">-</p>
                                    <p class="tarif_calculator_scroll_first_block_icons_plus_minus_2">{{ this.info.used_features.ops + countOperator }}</p>
                                    <p @click="clickOperatorPlus" class="tarif_calculator_scroll_first_block_icons_plus_minus_3">+</p>
                                </div>


                                <p>Операторы</p>
                            </div>

                            </div>
                            <div class="tarif_calculator_scroll_first_block_list">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to reps etc.</p>                
                            </div>
                    </div>



                    <div class="tarif_calculator_scroll_first_block">
                        <h1>03</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Настройка чат-ботов: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost" style="width:60%"><strong>{{ thirdBlockCount }}</strong> ₽/месяц</p>

                        <div class="tarif_calculator_scroll_first_block_icons">
                            <div v-if="this.info.used_features.features.includes('deferred_exec')">
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/editor.png" alt="editor" style="padding:10px; background-color: rgb(140,40,110);width: 60%">
                                <p>Редактор сценария</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('deferred_exec') && checkEditor">
                                <img @click="closeEditor" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/editor.png" alt="editor" style="padding:10px; background-color: rgb(140,40,110);width: 60%">
                                <p>Редактор сценария</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('deferred_exec') && !checkEditor">
                                <img @click="clickEditor" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/editor3.png" tyle="padding:10px;background-color:rgb(209,218,223);width: 60%" alt="editor">
                                <p>Редактор сценария</p>
                            </div>



                            <div v-if="this.info.used_features.features.includes('deferred_exec')">
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/funnel.png" style="padding:10px; background-color: rgb(140,40,110);width: 60%" alt="funnel">
                                <p>Автоворонки</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('deferred_exec') && checkFunnel">
                                <img @click="closeFunnel" class="tarif_calculator_scroll_first_block_greyicons" style="padding:10px; background-color: rgb(140,40,110);width: 60%" src="../assets/funnel.png" alt="funnel">
                                <p>Автоворонки</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('deferred_exec') && !checkFunnel">
                                <img @click="clickFunnel" class="tarif_calculator_scroll_first_block_greyicons" style="padding:10px;background-color:rgb(209,218,223);width: 60%" src="../assets/funnel3.png" alt="funnel">
                                <p>Автоворонки</p>
                            </div>
                        </div>


                      


                        <div class="tarif_calculator_scroll_first_block_list">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to reps etc.</p>                
                        </div>

                    </div>



                    <div class="tarif_calculator_scroll_first_block">
                        <h1>04</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Интеграция CRM: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost" style="width: 65%"><strong>{{ fourthBlockCount }}</strong> ₽/месяц</p>

                        <div class="tarif_calculator_scroll_first_block_icons" v-if="this.info.used_features.features.includes('bitrix24')">
                            <div>
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/bitrix.png" alt="bitrix">
                                <p>Bitrix24</p>
                            </div>
                            <div>
                                <img class="tarif_calculator_scroll_first_block_greyicons" style="width:102%;border:0px;" src="../assets/amo3.png" alt="amo">
                                <p>amoCRM</p>
                            </div>
                        </div>




                        <div class="tarif_calculator_scroll_first_block_icons" v-if="this.info.used_features.features.includes('amocrm')">
                            <div>
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/bitrix3.png" alt="bitrix">
                                <p>Bitrix24</p>
                            </div>
                            <div>
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/amo.png" alt="amo">
                                <p>amoCRM</p>
                            </div>
                        </div>





                        <div class="tarif_calculator_scroll_first_block_icons" v-if="!this.info.used_features.features.includes('bitrix24') && !this.info.used_features.features.includes('amocrm')">
                            <div v-if="checkBitrix && !checkAmo">
                                <img @click="closeBitrix" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/bitrix.png" alt="bitrix">
                                <p>Bitrix24</p>
                            </div>
                            <div v-if="checkBitrix && !checkAmo">
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/amo3.png" alt="amo">
                                <p>amoCRM</p>
                            </div>


                            <div v-if="!checkBitrix && checkAmo">
                                <img class="tarif_calculator_scroll_first_block_greyicons" style="width:102%;border:0px;" src="../assets/bitrix3.png" alt="bitrix">
                                <p>Bitrix24</p>
                            </div>
                             <div v-if="!checkBitrix && checkAmo">
                                <img @click="closeAmo" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/amo.png" alt="amo">
                                <p>amoCRM</p>
                            </div>


                            <div v-if="!checkBitrix && !checkAmo">
                                <img @click="clickBitrix" class="tarif_calculator_scroll_first_block_greyicons" style="width:102%;border:0px;" src="../assets/bitrix3.png" alt="bitrix">
                                <p>Bitrix24</p>
                            </div>
                            <div v-if="!checkBitrix && !checkAmo">
                                <img @click="clickAmo" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/amo3.png" alt="amo">
                                <p>amoCRM</p>
                            </div>

                        
                        </div>


                      


                        <div class="tarif_calculator_scroll_first_block_list">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to reps etc.</p>                
                        </div>

                    </div>




                    <div class="tarif_calculator_scroll_first_block">
                        <h1>05</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Рассылка сообщений: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost" style="width: 60%;"><strong>{{ fifthBlockCount }}</strong> ₽/месяц</p>

                        <div class="tarif_calculator_scroll_first_block_icons">
                            <div v-if="this.info.used_features.features.includes('bot')" style="width: 30%;margin-left: 0;">
                                <img class="tarif_calculator_scroll_first_block_greyicons" src="../assets/mail2.png" style="padding: 10px;background-color:rgb(140,40,110);width: 27%;border-radius: 25px;" alt="mail2">
                                <p>Массовая рассылка</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('bot') && checkMail" style="width: 30%;margin-left: 0;">
                                <img @click="closeMail" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/mail2.png" style="padding: 10px;background-color:rgb(140,40,110);width: 27%;border-radius: 25px;" alt="mail2">
                                <p>Массовая рассылка</p>
                            </div>

                            <div v-if="!this.info.used_features.features.includes('bot') && !checkMail" style="width: 30%;margin-left: 0;">
                                <img @click="clickMail" class="tarif_calculator_scroll_first_block_greyicons" style="padding: 10px;background-color:rgb(207,218,223);width: 27%;border-radius: 25px;" src="../assets/mail3.png" alt="mail2">
                                <p>Массовая рассылка</p>
                            </div>



                            
                        </div>


                      


                        <div class="tarif_calculator_scroll_first_block_list">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to reps etc.</p>                
                        </div>

                    </div>



                    <div class="tarif_calculator_scroll_first_block">
                        <h1>06</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Хостинг: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost" style="width: 75%"><strong>{{ sixthBlockCount }}</strong> ₽/месяц</p>

                        <div class="tarif_calculator_scroll_first_block_icons">
                            <div style="width: 30%;margin-left: 0;">
                                 <div class="tarif_calculator_scroll_first_block_icons_plus_minus" v-if="!this.info.used_features.storage_usage_kib">
                                    <p v-if="countMemory > 0" @click="clickMemoryMinus" class="tarif_calculator_scroll_first_block_icons_plus_minus_1">-</p>
                                    <p v-if="countMemory == 0" class="tarif_calculator_scroll_first_block_icons_plus_minus_1" style="background-color:rgb(240,241,242)">-</p>
                                    
                                    <p class="tarif_calculator_scroll_first_block_icons_plus_minus_2" style="width:20px;font-size:0.7em;margin:20px 0;">{{countMemory}} <span style="color:rgb(140,40,110);font-size:0.7em;">гб</span></p>
                                    <p @click="clickMemoryPlus" class="tarif_calculator_scroll_first_block_icons_plus_minus_3">+</p>
                                </div>



                                <div class="tarif_calculator_scroll_first_block_icons_plus_minus" v-if="this.info.used_features.storage_usage_kib">
            
                                    <p v-if="countMemory > 0" @click="clickMemoryMinus" class="tarif_calculator_scroll_first_block_icons_plus_minus_1">-</p>
                                    <p v-if="countMemory == 0" class="tarif_calculator_scroll_first_block_icons_plus_minus_1" style="background-color:rgb(240,241,242)">-</p>
                                    <p class="tarif_calculator_scroll_first_block_icons_plus_minus_2" style="width:20px;font-size:0.7em;vertical-align:middle;">{{this.info.used_features.storage_usage_kib + countMemory}} <span style="color:rgb(140,40,110);font-size:0.7em;">гб</span></p>
                                    <p @click="clickMemoryPlus" class="tarif_calculator_scroll_first_block_icons_plus_minus_3" >+</p>
                                </div>



                                <p>Память сервера</p>
                            </div>
                        </div>


                      


                        <div class="tarif_calculator_scroll_first_block_list">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to reps etc.</p>                
                        </div>

                    </div>
                </div>

                <div class="tarif_calculator_result">

                    <div class="tarif_calculator_result_grey" v-if="this.info.tariffdata.days_remating > 0">
                        <p>Модуль действителен еще: <span style="color: green">{{ this.info.tariffdata.days_remating }} дней</span></p>
                        <p v-if="this.info.tariffdata.write_first">Функция "Написать первым" действительна еще: <span>8 дней</span></p>
                    </div>


                    <div class="tarif_calculator_result_red" v-if="this.info.tariffdata.days_remating == 0">
                        <div class="tarif_calculator_result_red1">
                            <img src="../assets/clock.png" alt="">
                        </div>
                        
                        <div class="tarif_calculator_result_red2" v-if="!this.info.tariffdata.days_remating > 0">
                            <p><strong>Бесплатный пробный период закончился!</strong></p>
                            <p>Выберите тариф и пополните ваш баланс.</p>
                        </div>
                    </div>


                    <p class="tarif_calculator_result_itogo">Итого:</p>

                    <h1>{{ total }} ₽/<span v-if="!checkYear">месяц</span><span v-if="checkYear">год</span></h1>
                    <div class="tarif_calculator_result_checkbox">
                        <span style="color:grey">Ежемесячно </span>
                        <label class="switch">
                            <input type="checkbox" ref="check" @click="clickDiscount">
                            <span class="slider round" ></span>
                        </label>
                        <span style="color:black;"> Ежегодно</span>
                        <span> -{{ info.pricelist.yearly_discount * 100 }}%</span>
                    </div>

                    <input type="submit" @click="submitTarif" value="ПОДКЛЮЧИТЬ">



                    <div class="tarif_calculator_result_modul">   
                        <p><span style="border-bottom: 1px solid rgb(207,30,65)">Привяжите карту</span> к аккаунту для подключения функций модуля</p>
                    </div>

                    <p class="tarif_calculator_result_list"><strong>Бесплатный</strong> функционал</p>
                    <ul>
                        <li><div></div>Уведомления о лидах</li>
                        <li><div></div>Техническая поддержка</li>
                        <li><div></div>Аналитика</li>
                        <li><div></div>Внедрение и настройка</li>
                    </ul>


                    <p class="tarif_calculator_result_end">Если на вашем балансе недостаточно средств для подключения набора функций к модулю, деньги спишутся с подключенной карты. Подключить карту можно в <a href="#">Личном кабинете</a></p>
                </div>
            </div>
        </div>
    </div>



   
</template>


<script>
export default {
    name: 'Tarif',
    data(){
        return{
            info: [],
            total: 0,
            countOperator: 0,
            countMemory: 0,
            checkWhatsApp: false,
            checkTelegram: false,
            checkViber: false, 
            checkVk: false,
            checkChat: false,
            checkWrite: false,
            checkEditor: false,
            checkFunnel: false,
            checkBitrix: false,
            chechAmo: false,
            checkMail: false,
            checkYear: false,
            firstBlockCount: 0,
            secondBlockCount: 0,
            thirdBlockCount: 0,
            fourthBlockCount: 0,
            fifthBlockCount: 0,
            sixthBlockCount: 0,

        }
    },
    methods:{
        clickWhatsApp(){
            this.firstBlockCount += this.info.pricelist.program_cost.GS
            this.checkWhatsApp = !this.checkWhatsApp
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.program_cost.GS * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.program_cost.GS
            }
        },
        closeWhatsApp(){
            this.firstBlockCount -= this.info.pricelist.program_cost.GS
            this.checkWhatsApp = !this.checkWhatsApp
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.program_cost.GS * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.program_cost.GS
            }
        },
        clickTelegram(){
            this.firstBlockCount += this.info.pricelist.program_cost.TL
            this.checkTelegram = !this.checkTelegram
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.program_cost.TL * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.program_cost.TL
            }
        },

        closeTelegram(){
            this.firstBlockCount -= this.info.pricelist.program_cost.TL
            this.checkTelegram = !this.checkTelegram
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.program_cost.TL * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.program_cost.TL
            }
        },

        clickViber(){
            this.firstBlockCount += this.info.pricelist.program_cost.VB
            this.checkViber = !this.checkViber
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.program_cost.VB * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.program_cost.VB
            }
        },

        closeViber(){
            this.firstBlockCount -= this.info.pricelist.program_cost.VB
            this.checkViber = !this.checkViber
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.program_cost.VB * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.program_cost.VB
            }
        },


        clickVk(){
            this.firstBlockCount += this.info.pricelist.program_cost.VK
            this.checkVk = !this.checkVk
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.program_cost.VK * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.program_cost.VK
            }
        },
        closeVk(){
            this.firstBlockCount -= this.info.pricelist.program_cost.VK
            this.checkVk = !this.checkVk
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.program_cost.VK * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.program_cost.VK
            }
        },
        clickChat(){
            this.secondBlockCount += this.info.pricelist.chat_cost
            this.checkChat = !this.checkChat
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.chat_cost * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.chat_cost
            }
        },
        closeChat(){
            this.secondBlockCount -= this.info.pricelist.chat_cost
            this.checkChat = !this.checkChat
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.chat_cost * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.chat_cost
            }
        },
        clickWriteFirst(){
            this.secondBlockCount += this.info.pricelist.write_first_cost
            this.checkWrite = !this.checkWrite
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.write_first_cost * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.write_first_cost
            }
        },
        closeWriteFirst(){
            this.secondBlockCount -= this.info.pricelist.write_first_cost
            this.checkWrite = !this.checkWrite
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.write_first_cost * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.write_first_cost
            }
        },
        clickEditor(){
            this.thirdBlockCount += this.info.pricelist.bot
            this.checkEditor = !this.checkEditor
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.bot * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.bot
            }
        },
        closeEditor(){
            this.thirdBlockCount -= this.info.pricelist.bot
            this.checkEditor = !this.checkEditor
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.bot * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.bot
            }
        },
        clickFunnel(){
            this.thirdBlockCount += this.info.pricelist.deferred_exec
            this.checkFunnel = !this.checkFunnel
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.deferred_exec * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.deferred_exec
            }
        },
        closeFunnel(){
            this.thirdBlockCount -= this.info.pricelist.deferred_exec
            this.checkFunnel = !this.checkFunnel
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.deferred_exec * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.deferred_exec
            }
        },
        clickBitrix(){
            this.fourthBlockCount += this.info.pricelist.crm
            this.checkBitrix = !this.checkBitrix
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.crm * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.crm
            }
        },
        closeBitrix(){
            this.fourthBlockCount -= this.info.pricelist.crm
            this.checkBitrix = !this.checkBitrix
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.crm * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.crm
            }
        },
        clickAmo(){
            this.fourthBlockCount += this.info.pricelist.crm
            this.checkAmo = !this.checkAmo
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.crm * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.crm
            }
        },
        closeAmo(){
            this.fourthBlockCount -= this.info.pricelist.crm
            this.checkAmo = !this.checkAmo
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.crm * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.crm
            }
        },
        clickMail(){
            this.fifthBlockCount += this.info.pricelist.mailing
            this.checkMail = !this.checkMail
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.mailing * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total += this.info.pricelist.mailing
            }
        },
        closeMail(){
            this.fifthBlockCount -= this.info.pricelist.mailing
            this.checkMail = !this.checkMail
            if(this.$refs.check.checked == true){
                this.total -= this.info.pricelist.mailing * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.mailing
            }
        },
        clickDiscount(event){
            this.checkYear = !this.checkYear
            if(event.target.checked == true){
                this.total = this.total * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
             
            }
            else{
                this.total = this.total / (1-this.info.pricelist.yearly_discount) / 12
                this.total = parseInt(this.total.toFixed(0))
            }
        
        },
        clickOperatorPlus(){
            this.secondBlockCount += this.info.pricelist.op_cost
            this.countOperator += 1
            if(this.$refs.check.checked == true){
                this.total = this.total + this.info.pricelist.op_cost * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                this.total = this.total + this.info.pricelist.op_cost
            }
        },
        clickOperatorMinus(){
            this.secondBlockCount -= this.info.pricelist.op_cost
            this.countOperator -= 1
            if(this.$refs.check.checked == true){
                this.total = this.total - this.info.pricelist.op_cost * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                this.total = this.total - this.info.pricelist.op_cost
            }
        },
        clickMemoryPlus(){
            this.sixthBlockCount += this.info.pricelist.storage_per_gib
            this.countMemory += 1
            if(this.$refs.check.checked == true){
                this.total = this.total + this.info.pricelist.storage_per_gib * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                this.total = this.total + this.info.pricelist.storage_per_gib
            }
        },
        clickMemoryMinus(){
            this.sixthBlockCount -= this.info.pricelist.storage_per_gib
            this.countMemory -= 1
            if(this.$refs.check.checked == true){
                this.total = this.total - this.info.pricelist.storage_per_gib * (1-this.info.pricelist.yearly_discount) * 12
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                this.total = this.total - this.info.pricelist.storage_per_gib
            }
        },
    

        submitTarif(){
            const axios = require('axios');
            
            let a = 'https://marketbot.biz/tariff/get_data/?botid=10140&user_token=9c329f7404f8d74f0cf841e35b7e4680'
            let uri = a.substring(1)
            let param = new URLSearchParams(uri)



            let botid = param.get('user_token')
            let annual = this.$refs.check.checked ? 1 : 0
            let GS = 0
            let TL = 0
            let VB = 0
            let VK = 0
            let reg_waba = 0
            let chat = 0
            let write_first = 0
            let bot = 0
            let deferred_exec = 0
            let crm = 0
            let mailing = 0
            let ops = this.countOperator + this.info.used_features.ops
            let capacity_gib = this.countMemory + this.info.used_features.storage_usage_kib


            if(this.info.used_features.features.includes('GS')){GS = 1}
            else{GS = this.checkWhatsApp ? 1 : 0}

            if(this.info.used_features.features.includes('TL')){TL = 1}
            else{TL = this.checkTelegram ? 1 : 0}

            if(this.info.used_features.features.includes('VB')){VB = 1}
            else{VB = this.checkViber ? 1 : 0}

            if(this.info.used_features.features.includes('VK')){VK = 1}
            else{VK = this.checkVk ? 1 : 0}

            if(this.info.used_features.features.includes('waba_registered')){reg_waba = 1}
            else{reg_waba = this.$refs.businessapi.checked ? 1 : 0}

            if(this.info.used_features.features.includes('chat')){chat = 1}
            else{chat = this.checkChat ? 1 : 0}

            if(this.info.used_features.features.includes('chat')){write_first = 1}
            else{write_first = this.checkWrite ? 1 : 0}

            if(this.info.used_features.features.includes('bot')){bot = 1}
            else{bot = this.checkEditor ? 1 : 0}

            if(this.info.used_features.features.includes('deferred_exec')){deferred_exec = 1}
            else{deferred_exec = this.checkFunnel ? 1 : 0}

            if(this.info.used_features.features.includes('crm' || 'bitrix24' || 'amocrm')){crm = 1}
            else{crm = this.checkBitrix ? 1 : 0}
            
            if(crm == 0 && this.checkAmo){crm = 1}

            if(this.info.used_features.features.includes('mailing')){mailing = 1}
            else{mailing = this.checkMail ? 1 : 0}


            
            const params = new URLSearchParams()
            params.append('botid', botid)
            params.append('annual', annual)
            params.append('reg_waba', reg_waba)
            params.append('program[GS]', GS)
            params.append('program[VK]', VK)
            params.append('program[VB]', VB)
            params.append('program[TL]', TL)
            params.append('chat', chat)
            params.append('write_first', write_first)
            params.append('ops', ops)
            params.append('bot', bot)
            params.append('deferred_exec', deferred_exec)
            params.append('mailing', mailing)
            params.append('crm', crm)
            params.append('capacity_gib', capacity_gib)

            

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            axios.post('https://marketbot.biz/tariff/dopay', params, config)
                .then(function (response) {
                    if(response.data.paid == true){
                        alert("Транзакция успешна. Стоимость тарифа: " + response.data.cost)    
                    }
                    else{
                        alert(response.data.errmsg)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    },
    created() {
        const axios = require('axios');
        let self = this
        axios.get('https://marketbot.biz/tariff/get_data/?botid=10140&user_token=9c329f7404f8d74f0cf841e35b7e4680')
            .then(function(response){
                self.info = response.data
                if(response.data.used_features.features.includes('bitrix24')){
                    self.total += response.data.pricelist.crm
                    self.fourthBlockCount += response.data.pricelist.crm
                }
                if(response.data.used_features.features.includes('amocrm')){
                    self.total += response.data.pricelist.crm
                    self.fourthBlockCount += response.data.pricelist.crm
                }
                if(response.data.used_features.features.includes('chat')){
                    self.total += response.data.pricelist.chat_cost
                    self.secondBlockCount += response.data.pricelist.chat_cost
                }
                if(response.data.used_features.features.includes('deferred_exec')){
                    self.total += response.data.pricelist.deferred_exec
                    self.thirdBlockCount += response.data.pricelist.deferred_exec
                }
                if(response.data.used_features.features.includes('GS')){
                    self.total += response.data.pricelist.program_cost.GS
                    self.firstBlockCount += response.data.pricelist.program_cost.GS
                }
                if(response.data.used_features.features.includes('TL')){
                    self.total += response.data.pricelist.program_cost.TL
                    self.firstBlockCount += response.data.pricelist.program_cost.TL
                }
                if(response.data.used_features.features.includes('VK')){
                    self.total += response.data.pricelist.program_cost.VK
                    self.firstBlockCount += response.data.pricelist.program_cost.VK
                }
                if(response.data.used_features.features.includes('VB')){
                    self.total += response.data.pricelist.program_cost.VB
                    self.firstBlockCount += response.data.pricelist.program_cost.VB
                }
                if(response.data.used_features.ops){
                    self.total += (response.data.pricelist.op_cost * response.data.used_features.ops)
                    self.secondBlockCount += (response.data.pricelist.op_cost * response.data.used_features.ops)
                }
                if(response.data.used_features.storage_usage_kib){
                    self.total += (response.data.pricelist.storage_per_gib * response.data.used_features.storage_usage_kib)
                    self.sixthBlockCount += (response.data.pricelist.storage_per_gib * response.data.used_features.storage_usage_kib)
                }
            })

    }
}
</script>


<style>
    .right_tarif{
        width: 90%;
        text-align: left;
        margin: 30px;
        border: 1px solid rgb(229,230,231);
        background-color: rgb(248,249,250);
        border-radius: 8px;
        box-shadow: 0px 0px 10px 3px rgb(239,240,245);
    }
    .right_tarif h4{
        margin: 0;
        background-color: white;
        font-weight: 600;
        box-shadow: 0px 0px 10px 3px rgb(239,240,245);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        padding: 13px 0 13px 30px;
    }
    .tarif_calculator{
        width: 100%;
        margin: 0px;
    }
    .tarif_calculator_scroll{
        width: 50%;
        vertical-align: top;
        display: inline-block;
        height:73vh;
        background-color: white;
        margin: 0;
        overflow: scroll;
    }
    .tarif_calculator_result{
        width: 50%;
        display: inline-block;
        margin: 0;
    }
    .tarif_calculator_result_itogo{
        margin-top: 40px;
        width: 100%;
        text-align: center;
    }
    .tarif_calculator_result h1{
        width: 100%;
        text-align: center;
        color: rgb(207,30,65);
        margin-top: 0px;
    }
    .tarif_calculator_result_checkbox{
        width: 100%;
        text-align: center;
        font-size: 0.9em;
    }
    .switch {
        position: relative;
        margin: 0px 15px;
        display: inline-block;
        width: 46px;
        height: 20px;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }   

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 1px;
        bottom: 0px;
        background-color: white;
        z-index: 99;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .tarif_calculator_result_checkbox input:checked + .slider {
        background-color: #2196F3;
    }

    .tarif_calculator_result_checkbox input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    .tarif_calculator_result_checkbox input:checked + .slider:before {
        -webkit-transform: translateX(24px);
        -ms-transform: translateX(24px);
        transform: translateX(24px);
    }


    .tarif_calculator_result_checkbox .slider.round {
        border-radius: 34px;
    }

    .tarif_calculator_result_checkbox .slider.round:before {
        border-radius: 50%;
    }
    .tarif_calculator_scroll_first_block .switch img{
        position: relative;
        width: 8px;
        left: 23px;
        top: -2px; 
    }
    .tarif_calculator_scroll_first_block .switch .img2{
        left: -7px;

    }

    .tarif_calculator_scroll_first_block input:checked + .slider:before {
        -webkit-transform: translateX(24px);
        -ms-transform: translateX(24px);
        transform: translateX(24px);
    }


    .tarif_calculator_scroll_first_block .slider.round {
        border-radius: 34px;
    }

    .tarif_calculator_scroll_first_block .slider.round:before {
        border-radius: 50%;
    }

    .tarif_calculator_result input[type="submit"]{
        color: white;
        outline: none;
        font-weight: 600;
        font-size: 0.9em;
        border: 0px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
        padding: 16px;
        border-radius: 30px;
        width: 50%;
        margin-left: 25%;
        margin-top: 7%;
        transition: 0.8s all ease;
    }
    .tarif_calculator_result_list{
        margin-top: 30px;
        width: 100%;
        text-align: center;
    }
    .tarif_calculator_result ul{
        margin: 0;
        margin-top: 3%;
    }
    .tarif_calculator_result li{
        font-weight: 300;
        margin-top: 4px;
        font-size: 14px;
        margin-left: 33%;
        list-style: none;
    }
    .tarif_calculator_result li div{
        background-color: rgb(207,30,65);
        display: inline-block;
        width: 3px;
        height: 3px;
        vertical-align: middle;
        margin-right: 10px;
        border-radius: 50px;
    }
    .tarif_calculator_result_end{
        width: 80%;
        margin: 5% 10% 0 10%;
        font-size: 0.9em;
        line-height: 20px;
        font-weight: 400;
    }
    .tarif_calculator_result_end a{
        display: inline-block;
        color:rgb(207,30,65);
    }
    .tarif_calculator_result_modul {
        width:100%;
        text-align: center;
        color:rgb(207,30,65);
        font-size: 0.9em;
        margin: 20px 0;
        display: none;
    }
    .tarif_calculator_result_grey{
        width: 70%;
        margin: 0px 15% 0px 15%;
        background-color: rgb(227,228,229);
        text-align: center;
        padding: 10px 0;
        font-size: 0.9em;
        margin-top: 10px;
    }
    .tarif_calculator_result_grey p{
        margin: 5px 0;
    }
    .tarif_calculator_result_red{
        width: 70%;
        margin: 0px 15% 0px 15%;
        background-color: rgba(214,73,111,1);
        text-align: center;
        padding: 0;
        color: white;
        font-size: 0.9em;
        margin-top: 15px;
        display: none;
    }
    .tarif_calculator_result_red1{
        width: 10%;
    }
    .tarif_calculator_result_red1, .tarif_calculator_result_red2{
        display: inline-block;
    }
    .tarif_calculator_result_red2{
        width: 85%;
        padding: 15px 0;
    }
    .tarif_calculator_result_red2 p{
        margin: 0;
    }
    .tarif_calculator_result_red1 img{
        width: 70%;
        margin: 0;
        margin-left: 40%;
    }
    .tarif_calculator_scroll_first_block {
        width: 95%;
        padding: 0px 0px 0px 20px;
        margin: 0;
        border-bottom: 1px dashed rgb(207,208,209);
    }
    .tarif_calculator_scroll_first_block h1{
        margin: 0;
        font-size: 5em;
        height: 40px;
        margin-left: -55px;
        color: rgb(241,242,243);
    }
    .tarif_calculator_scroll_first_block span{
        color: rgb(127,128,129);
        font-size: 0.9em;
    }
    .tarif_calculator_scroll_first_block_cost{
        display: inline-block;
        width: 57%;
        margin: 0;
        text-align: right;
        font-size: 0.9em;
        color: rgb(127,128,129);
    }
    .tarif_calculator_scroll_first_block_cost span{
        color: rgb(127,128,129);
        border-bottom: 1px solid rgb(127,128,129);
    }
    .tarif_calculator_scroll_first_block_cost strong{
        font-size: 1.1em;
    }
    .tarif_calculator_scroll_first_block_cost1{
        font-size: 0.9em;
    }
    .tarif_calculator_scroll_first_block_icons{
        width: 80%;
        margin: 6% 10% 6% 8%;
        text-align: center;
    }
    .tarif_calculator_scroll_first_block_icons div{
        width: 15%;
        display: inline-block;
        vertical-align: top;
        margin: 0 15px; 
    }
    .tarif_calculator_scroll_first_block_icons img{
        width: 80%;
        margin: 0 10%;
    }
    .tarif_calculator_scroll_first_block_icons p{
        text-align: center;
        margin: 5px 0;
        font-size: 0.8em;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_greyicons{
        border: 8px solid rgb(241,242,243);
        border-radius: 40px;
        margin: 0 8% 0 1%;
    }
    .tarif_calculator_scroll_first_block_list img{
        width: 18px;
        vertical-align: middle;
        margin-left: 4px;
        
    }
    .tarif_calculator_scroll_first_block_list {
        width: 90%;
        background-color: rgb(249,250,251);
        border-radius: 10px;
        margin: 5% 0;
        padding: 20px 0 20px 20px;
    }
    .tarif_calculator_scroll_first_block_list p{
        font-size: 13px;
        color: rgb(57,58,59);
        margin: 4px 0;
        
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus {
        border: 1px solid rgb(140,40,110);
        border-radius: 35px;
        background-color: rgb(248,249,250);
        height: 55px;
        width: 55px;
        margin: 10px 0;
    }
    .tarif_calculator_scroll_first_block_icons_plus_minus p{
        color: rgb(140,40,110);
        display: inline-block;
        margin-top: 13px; 
        font-size: 1em;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_1{
        margin: 0;
        position: relative;
        left: -11px;
        background-color: rgb(140,40,110);
        border: 1px solid white;
        color: white;
        width: 5px;
        font-size: 0.8em;
        border-radius: 45px;
        padding: 0 5px;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_2{
        margin: 15px 0px;
        font-size: 1.1em;
        width: 13px;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_3{
        margin: 0;
        position: relative;
        left: 11px;
        width: 6px;
        background-color: rgb(140,40,110);
        border: 1px solid white;
        color: white;
        font-size: 0.8em;
        border-radius: 45px;
        padding:  0 5px;
    }


</style>