<template>
    <div class="left_block">
        <a href="http://marketbot.biz/">
        <img style="padding-top: 20px;" src="../assets/sidebar_logo.png" alt="logo">
        </a>

        <div class="left_block_inner">
            <div>
                <a href="https://marketbot.biz/user/home"><img v-bind:src="infoUser.avatar" alt="name"></a>
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
            
    
            
            <div v-if="infoUser.is_integrator == true">
                <a href="https://marketbot.biz/bot/create"><img src="../assets/left_clients.png" alt="left_clients"></a>
                <small>Контакты</small>
            </div>
            
        </div>


         <div class="left_block_inner left_block_inner2">
            <a href="https://marketbot.biz/977"><img src="../assets/sidebar_help.png" alt="help"></a>
        </div>
    </div>


    <div class="right_block">
        <div class="right_block_inner">
            <div class="right_block_inner_back" @click="this.$router.go(-1)">
                <img src="../assets/back2.png" alt="back">
            </div>
        
            <h2>Тарифы</h2>

            <div class="right_block_inner_balans">
                <img src="../assets/photo.png" alt="">
           
               
               <div class="right_block_inner_balans_right">
                    <p>Ваш баланс: <span>{{ convertBalance2 }} ₽</span></p>
                    <router-link to="/balance">Пополнить баланс</router-link>
               </div>
                
            </div>


            <div class="right_block_inner_logout">
                <a href="https://marketbot.biz/user/logout"><img src="../assets/header_exit.png"></a>
            </div>
        </div>



        <div class="right_tarif">
            <h4>Настройте тариф</h4>

            <div class="tarif_calculator">
                <div class="tarif_calculator_scroll">
                    <div class="tarif_calculator_scroll_first_block" style="box-shadow: 0 5px 10px -1px rgb(239,240,245) inset;">
                        <h1>01</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Подключение мессенджеров: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost"><strong>{{ firstBlockCount }}</strong> ₽/месяц + <a href="https://developers.facebook.com/docs/whatsapp/pricing/?translation" style="text-decoration: none;"><span>тарификация WhatsApp</span></a></p>

                        <div class="tarif_calculator_scroll_first_block_icons">

                            <div @mouseover="checkWhatsAppSpan = true" @mouseleave="checkWhatsAppSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span1" v-if="checkWhatsAppSpan">{{ this.info.pricelist.program_cost.GS }}₽</span>
                                <img v-if="this.info.used_features.features.includes('GS')" @click="clickWhatsAppDiv" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/whatsapp.png" alt="whatsapp">
                                <img @click="closeWhatsApp" v-if="!this.info.used_features.features.includes('GS')" class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': !checkWhatsApp }" src="../assets/whatsapp.png" alt="whatsapp">
                                <img @click="clickWhatsApp" v-if="!this.info.used_features.features.includes('GS')" class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': checkWhatsApp }" style="width:85%;border:0px;" src="../assets/whatsapp3.png" alt="whatsapp">
                                <p>WhatsApp</p>
                                <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div1">
                                    <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                    <p><strong>Как отключить?</strong> Удалить номер из раздела “каналы”.</p> 
                                </div>
                            </div>

                            <div @mouseover="checkTelegramSpan = true" @mouseleave="checkTelegramSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span2" v-if="checkTelegramSpan">{{ info.pricelist.program_cost.TL }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" @click="clickDiv" v-if="this.info.used_features.features.includes('TL')" src="../assets/telegram.png" alt="telegram">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': !checkTelegram }" v-if="!this.info.used_features.features.includes('TL')" @click="closeTelegram"  src="../assets/telegram.png" alt="telegram">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': checkTelegram }" v-if="!this.info.used_features.features.includes('TL')" @click="clickTelegram" style="width: 85%;border:0;" src="../assets/telegram3.png" alt="telegram">
                                <p>Telegram</p>
                                <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div2">
                                    <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                    <p><strong>Как отключить?</strong> Удалить бота из раздела “каналы”.</p> 
                                </div>
                            </div>


                            <div @mouseover="checkViberSpan = true" @mouseleave="checkViberSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span3" v-if="checkViberSpan">{{ info.pricelist.program_cost.VB }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" @click="clickDiv" v-if="this.info.used_features.features.includes('VB')" src="../assets/viber.png" alt="viber">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': !checkViber }" v-if="!this.info.used_features.features.includes('VB')" @click="closeViber"  src="../assets/viber.png" alt="viber">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': checkViber }" v-if="!this.info.used_features.features.includes('VB')" @click="clickViber" style="width: 85%;border:0;" src="../assets/viber3.png" alt="viber">
                                <p>Viber</p>
                                <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div3">
                                    <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                    <p><strong>Как отключить?</strong> Удалить бота из раздела “каналы”.</p> 
                                </div>
                            </div>


                            <div @mouseover="checkVkSpan = true" @mouseleave="checkVkSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span4" v-if="checkVkSpan">{{ info.pricelist.program_cost.VK }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" @click="clickDiv" v-if="this.info.used_features.features.includes('VK')" src="../assets/vk.png" alt="vk">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': !checkVk }" v-if="!this.info.used_features.features.includes('VK')" @click="closeVk"  src="../assets/vk.png" alt="vk">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': checkVk }" v-if="!this.info.used_features.features.includes('VK')" @click="clickVk" style="width: 85%;border:0;" src="../assets/vk3.png" alt="vk">
                                <p>Vkontakte</p>
                                <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div4">
                                    <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                    <p><strong>Как отключить?</strong> Удалить из раздела “каналы”.</p> 
                                </div>
                            </div>
                           
                        </div>

                        <div>
                            <label class="switch" v-if="!this.info.used_features.features.includes('waba_registered')">
                                <input @click="clickBusinessApi" type="checkbox" ref="businessapi">
                                <span class="slider round"></span>
                                <img class="img1" src="../assets/close2.png" alt="">
                                <img class="img2" src="../assets/tick.png" alt="">
                            </label>

                            <label class="switch" v-if="checkBusi && this.info.used_features.features.includes('waba_registered')">
                                <img class="img1" style="width: 35px;vertical-align:middle;padding-top: 10px;" @click="clickBusiDiv" src="../assets/btn_on.png" alt="" @mouseover="checkBusiSpan = true" @mouseleave="checkBusiSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span111" v-if="checkBusiSpan">{{ info.pricelist.waba_setup_fee }}₽</span>
                            </label>
                            <span v-if="!this.info.used_features.features.includes('waba_registered')">Подключение вашего номера к WhatsApp Business API</span>
                            <span v-if="checkBusi && this.info.used_features.features.includes('waba_registered')">Подключение вашего номера к WhatsApp Business API</span>
                            <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div1">
                                <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                <p><strong>Как отключить?</strong> Удалить номер из раздела “каналы”.</p> 
                            </div>
                        </div>


                        <div class="tarif_calculator_scroll_first_block_list">
                            <p>В стоимость входит:</p>
                            <p>1. Создание бизнес-аккаунта в Facebook.</p>
                            <p>2. Авторизация + модерация аккаунта Facebook.</p>
                            <p v-if="this.info.used_features.features.includes('waba_registered')">3. Подключение к WhatsApp Business API.</p>
                            <p v-if="!this.info.used_features.features.includes('waba_registered')">3. Подача заявки на получение авторизованного названия компании:</p>
                            <p v-if="this.info.used_features.features.includes('waba_registered')">4. Подача заявки на получение авторизованного названия компании: </p>
                            <strong>Marketbot</strong>
                            <img src="../assets/check2.png" alt="check2">
                        </div>

                    </div>



                    <div class="tarif_calculator_scroll_first_block">
                        <h1>02</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Настройка чат-центров: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost"><strong>{{ secondBlockCount }}</strong> ₽/месяц</p>

                        <div class="tarif_calculator_scroll_first_block_icons">


                            <div @mouseover="checkChatSpan = true" @mouseleave="checkChatSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span5" v-if="checkChatSpan">{{ info.pricelist.chat_cost }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" @click="clickDiv" v-if="this.info.used_features.features.includes('chat')" src="../assets/chat2.png" alt="chat2">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': !checkChat }" v-if="!this.info.used_features.features.includes('chat')" @click="closeChat"  src="../assets/chat2.png" alt="chat2">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': checkChat }" v-if="!this.info.used_features.features.includes('chat')" @click="clickChat" style="width: 85%;border:0;" src="../assets/chat3.png" alt="chat2">
                                <p>Чат</p>
                                <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div5">
                                    <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                    <p><strong>Как отключить?</strong> Убрать блоки “подключение оператора” из сценария И удалить ВСЕХ операторов.</p> 
                                </div>
                            </div>


                            <div @mouseover="checkWriteSpan = true" @mouseleave="checkWriteSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span6" v-if="checkWriteSpan">{{ info.pricelist.write_first_cost }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" @click="clickDiv" v-if="this.info.used_features.features.includes('bot')" src="../assets/question.png" alt="question">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': !checkWrite }" v-if="!this.info.used_features.features.includes('bot')" @click="closeWriteFirst"  src="../assets/question.png" alt="question">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': checkWrite }" v-if="!this.info.used_features.features.includes('bot')" @click="clickWriteFirst" style="width: 85%;border:0;" src="../assets/question3.png" alt="question">
                                <p>Написать первым</p>
                                <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div6">
                                    <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                    <p><strong>Как отключить?</strong> Убрать блок “меню” и “приветствие” из сценария.</p> 
                                </div>
                            </div>

                        



                            <div>      
                                <div class="tarif_calculator_scroll_first_block_icons_plus_minus tarif_calculator_scroll_first_block_icons_plus_minus1" v-if="!this.info.used_features.ops">
                                    <span class="tarif_calculator_scroll_first_block_icons_span66" v-if="checkOperator">{{ info.pricelist.op_cost }}₽</span>
                                    <p v-if="countOperator > 0" @click="clickOperatorMinus" class="tarif_calculator_scroll_first_block_icons_plus_minus_1 tarif_calculator_scroll_first_block_icons_plus_minus_11">-</p>
                                    <p v-if="countOperator == 0" class="tarif_calculator_scroll_first_block_icons_plus_minus_1 tarif_calculator_scroll_first_block_icons_plus_minus_11"  style="background-color:rgb(240,241,242)">-</p>


                                    <p class="tarif_calculator_scroll_first_block_icons_plus_minus_2 tarif_calculator_scroll_first_block_icons_plus_minus_22">{{ countOperator }}</p>
                                    <p @click="clickOperatorPlus" class="tarif_calculator_scroll_first_block_icons_plus_minus_3 tarif_calculator_scroll_first_block_icons_plus_minus_33" @mouseover="checkOperator = true" @mouseleave="checkOperator = false">+</p>
                                </div>


                                <div class="tarif_calculator_scroll_first_block_icons_plus_minus tarif_calculator_scroll_first_block_icons_plus_minus1" v-if="this.info.used_features.ops">
                                    <span class="tarif_calculator_scroll_first_block_icons_span66" v-if="checkOperator">{{ info.pricelist.op_cost }}₽</span>
                                    <p v-if="countOperator > 0" @click="clickOperatorMinus" class="tarif_calculator_scroll_first_block_icons_plus_minus_1 tarif_calculator_scroll_first_block_icons_plus_minus_11" >-</p>
                                    <p v-if="countOperator == 0" class="tarif_calculator_scroll_first_block_icons_plus_minus_1 tarif_calculator_scroll_first_block_icons_plus_minus_11"  style="background-color:rgb(240,241,242)">-</p>
                                    <p class="tarif_calculator_scroll_first_block_icons_plus_minus_2 tarif_calculator_scroll_first_block_icons_plus_minus_22">{{ this.info.used_features.ops + countOperator }}</p>
                                    <p @click="clickOperatorPlus" class="tarif_calculator_scroll_first_block_icons_plus_minus_3 tarif_calculator_scroll_first_block_icons_plus_minus_33" @mouseover="checkOperator = true" @mouseleave="checkOperator = false">+</p>
                                </div>


                                <p>Операторы</p>
                            </div>

                            </div>
                            <div class="tarif_calculator_scroll_first_block_list">
                                <p>Через чат менеджеры общаются с клиентами и ведут полноценный диалог, отправляют файлы и аудио сообщения. Чтобы не прыгать между приложениями мессенджеров в смартфоне, подключите чат и общайтесь с клиентами в одном месте через удобный интерфейс.</p>                
                                <p>Что бы написать клиенту в мессенджер первым, подключите функцию "Написать первым". </p>
                                <p>*доступно только для WhatsApp</p>
                                <p>Если в компании больше одного сотрудника, разделите права доступа к диалогам между ними. Теперь нет потребности заводить телефонные номера для каждого сотрудника, добавляйте оператора и распределяйте права доступа.</p>
                            </div>
                    </div>



                    <div class="tarif_calculator_scroll_first_block">
                        <h1>03</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Настройка чат-ботов: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost"><strong>{{ thirdBlockCount }}</strong> ₽/месяц</p>

                        <div class="tarif_calculator_scroll_first_block_icons">
                            <div @mouseover="checkEditorSpan = true" @mouseleave="checkEditorSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span7"  v-if="checkEditorSpan">{{ info.pricelist.bot }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" @click="clickDiv" v-if="this.info.used_features.features.includes('deferred_exec')" src="../assets/editor.png" alt="editor">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': !checkEditor }" v-if="!this.info.used_features.features.includes('deferred_exec')" @click="closeEditor"  src="../assets/editor.png" alt="editor">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': checkEditor }" v-if="!this.info.used_features.features.includes('deferred_exec')" @click="clickEditor" style="width: 85%;border:0;" src="../assets/editor3.png" alt="editor">
                                <p>Редактор сценария</p>
                                <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div7">
                                    <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                    <p><strong>Как отключить?</strong> Убрать блок “отложенное выполнение“ из сценария.</p> 
                                </div>
                            </div>



                            <div @mouseover="checkFunnelSpan = true" @mouseleave="checkFunnelSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span8" v-if="checkFunnelSpan">{{ info.pricelist.deferred_exec }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" @click="clickDiv" v-if="this.info.used_features.features.includes('deferred_exec')" src="../assets/funnel.png" alt="funnel">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': !checkFunnel }" v-if="!this.info.used_features.features.includes('deferred_exec')" @click="closeFunnel"  src="../assets/funnel.png" alt="funnel">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': checkFunnel }" v-if="!this.info.used_features.features.includes('deferred_exec')" @click="clickFunnel" style="width: 85%;border:0;" src="../assets/funnel3.png" alt="funnel">
                                <p>Автоворонки</p>
                                <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div8">
                                    <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                    <p><strong>Как отключить?</strong> Убрать блок “отложенное выполнение“ из сценария.</p> 
                                </div>
                            </div>
                        </div>


                      


                        <div class="tarif_calculator_scroll_first_block_list">
                            <p>Чат-бот это автоматизированный диалог с заранее заданным сценарием. Сценарий чат бота создается человеком. Подключив доступ к редактору, для вас станет доступен полный набор функций,  которого хватит создать ваш первый чат бот.</p>
                            <p>Автоворонки или по другому отложенный сценарий диалога. В нужное для вас время чат бот самостоятельно начнет диалог с клиентом или напомнит о себе.</p>
                        </div>

                    </div>



                    <div class="tarif_calculator_scroll_first_block">
                        <h1>04</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Интеграция CRM: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost"><strong>{{ fourthBlockCount }}</strong> ₽/месяц</p>

                        <div class="tarif_calculator_scroll_first_block_icons" v-if="this.info.used_features.features.includes('bitrix24')">
                            <div @mouseover="checkBitrixSpan = true" @mouseleave="checkBitrixSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span10" v-if="checkBitrixSpan">{{ info.pricelist.mailing }}₽</span>
                                <img @click="clickDivCrm" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/bitrix.png" alt="bitrix">
                                <p>Bitrix24</p>
                            </div>
                            <div @mouseover="chechAmoSpan = true" @mouseleave="chechAmoSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span11" v-if="chechAmoSpan">{{ info.pricelist.mailing }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" style="width: 85%;border:0;" src="../assets/amo3.png" alt="amo">
                                <p>amoCRM</p>
                            </div>
                            <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div7">
                                <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                <p><strong>Как отключить?</strong> Отключить в разделе CRM.</p> 
                            </div>
                        </div>




                        <div class="tarif_calculator_scroll_first_block_icons" v-if="this.info.used_features.features.includes('amocrm')">
                            <div @mouseover="checkBitrixSpan1 = true" @mouseleave="checkBitrixSpan1 = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span10" v-if="checkBitrixSpan1">{{ info.pricelist.mailing }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" style="width: 85%;border:0;" src="../assets/bitrix3.png" alt="bitrix">
                                <p>Bitrix24</p>
                            </div>
                            <div @mouseover="chechAmoSpan1 = true" @mouseleave="chechAmoSpan1 = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span11" v-if="chechAmoSpan1">{{ info.pricelist.mailing }}₽</span>
                                <img @click="clickDivCrm" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/amo.png" alt="amo">
                                <p>amoCRM</p>
                            </div>
                            <div class="tarif_calculator_scroll_first_block_icons_div tarif_calculator_scroll_first_block_icons_div8">
                                <p>Функция используется и ее нельзя выключить, сначала перестаньте использовать функцию.</p>
                                <p><strong>Как отключить?</strong> Отключить в разделе CRM.</p> 
                            </div>
                        </div>





                        <div class="tarif_calculator_scroll_first_block_icons" v-if="!this.info.used_features.features.includes('bitrix24') && !this.info.used_features.features.includes('amocrm')">
                            <div v-if="checkBitrix && !checkAmo" @mouseover="checkBitrixSpan2 = true" @mouseleave="checkBitrixSpan2 = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span10" v-if="checkBitrixSpan2">{{ info.pricelist.mailing }}₽</span>
                                <img @click="closeBitrix" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/bitrix.png" alt="bitrix">
                                <p>Bitrix24</p>
                            </div>
                            <div v-if="checkBitrix && !checkAmo" @mouseover="chechAmoSpan2 = true" @mouseleave="chechAmoSpan2 = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span11" v-if="chechAmoSpan2">{{ info.pricelist.mailing }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" style="width: 85%;border:0;" src="../assets/amo3.png" alt="amo">
                                <p>amoCRM</p>
                            </div>
                            

                            <div v-if="!checkBitrix && checkAmo" @mouseover="checkBitrixSpan3 = true" @mouseleave="checkBitrixSpan3 = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span10" v-if="checkBitrixSpan3">{{ info.pricelist.mailing }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" style="width: 85%;border:0;" src="../assets/bitrix3.png" alt="bitrix">
                                <p>Bitrix24</p>
                            </div>
                             <div v-if="!checkBitrix && checkAmo" @mouseover="chechAmoSpan3 = true" @mouseleave="chechAmoSpan3 = false">
                                 <span class="tarif_calculator_scroll_first_block_icons_span11" v-if="chechAmoSpan3">{{ info.pricelist.mailing }}₽</span>
                                <img @click="closeAmo" class="tarif_calculator_scroll_first_block_greyicons" src="../assets/amo.png" alt="amo">
                                <p>amoCRM</p>
                            </div>


                            <div v-if="!checkBitrix && !checkAmo" @mouseover="checkBitrixSpan4 = true" @mouseleave="checkBitrixSpan4 = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span10" v-if="checkBitrixSpan4">{{ info.pricelist.mailing }}₽</span>
                                <img @click="clickBitrix" class="tarif_calculator_scroll_first_block_greyicons" style="width: 85%;border:0;" src="../assets/bitrix3.png" alt="bitrix">
                                <p>Bitrix24</p>
                            </div>
                            <div v-if="!checkBitrix && !checkAmo" @mouseover="chechAmoSpan4 = true" @mouseleave="chechAmoSpan4 = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span11" v-if="chechAmoSpan4">{{ info.pricelist.mailing }}₽</span>
                                <img @click="clickAmo" class="tarif_calculator_scroll_first_block_greyicons" style="width: 85%;border:0;" src="../assets/amo3.png" alt="amo">
                                <p>amoCRM</p>
                            </div>

                        
                        </div>


                      


                        <div class="tarif_calculator_scroll_first_block_list">
                            <p>Для полноценной работы с клиентами, встройте интерфейс сервиса Marketbot в вашу CRM</p>
                        </div>

                    </div>




                    <div class="tarif_calculator_scroll_first_block">
                        <h1>05</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Рассылка сообщений: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost"><strong>{{ fifthBlockCount }}</strong> ₽/месяц</p>

                        <div class="tarif_calculator_scroll_first_block_icons">
                            <div @mouseover="checkMailSpan = true" @mouseleave="checkMailSpan = false">
                                <span class="tarif_calculator_scroll_first_block_icons_span9" v-if="checkMailSpan">{{ info.pricelist.mailing }}₽</span>
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-if="this.info.used_features.features.includes('bot')" src="../assets/mail2.png" alt="mail2">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': !checkMail }" v-if="!this.info.used_features.features.includes('bot')" @click="closeMail"  src="../assets/mail2.png" alt="mail2">
                                <img class="tarif_calculator_scroll_first_block_greyicons" v-bind:class="{ 'tarif_calculator_scroll_first_block_greyicons_opacity': checkMail }" v-if="!this.info.used_features.features.includes('bot')" @click="clickMail" style="width: 85%;border:0;" src="../assets/mail3.png" alt="mail2">
                                <p>Массовая рассылка</p>
                            </div>
                        </div>

                        <div class="tarif_calculator_scroll_first_block_list">
                            <p>Для того чтобы клиенты узнали о вашем событии моментально, используйте массовые рассылки.</p>
                        </div>

                    </div>



                    <div class="tarif_calculator_scroll_first_block">
                        <h1>06</h1>


                        <strong class="tarif_calculator_scroll_first_block_cost1">Хостинг: </strong>
                        <p class="tarif_calculator_scroll_first_block_cost"><strong>{{ sixthBlockCount }}</strong> ₽/месяц</p>

                        <div class="tarif_calculator_scroll_first_block_icons">
                            <div style="width: 30%;margin-left: 0;">
                                 <div class="tarif_calculator_scroll_first_block_icons_plus_minus" v-if="!this.info.used_features.storage_usage_kib">
                                    <span class="tarif_calculator_scroll_first_block_icons_span99" v-if="checkGb">{{ info.pricelist.storage_per_gib }}₽</span>
                                    <p v-if="countMemory > 0" @click="clickMemoryMinus" class="tarif_calculator_scroll_first_block_icons_plus_minus_1">-</p>
                                    <p v-if="countMemory == 0" class="tarif_calculator_scroll_first_block_icons_plus_minus_1" style="background-color:rgb(240,241,242)">-</p>
                                    
                                    <p class="tarif_calculator_scroll_first_block_icons_plus_minus_2">{{countMemory}} <span class="tarif_calculator_scroll_first_block_icons_plus_minus_span">гб</span></p>
                                    <p @click="clickMemoryPlus" class="tarif_calculator_scroll_first_block_icons_plus_minus_3" @mouseover="checkGb = true" @mouseleave="checkGb = false">+</p>
                                </div>



                                <div class="tarif_calculator_scroll_first_block_icons_plus_minus" v-if="this.info.used_features.storage_usage_kib">
                                    <span class="tarif_calculator_scroll_first_block_icons_span99" v-if="checkGb">{{ info.pricelist.storage_per_gib }}₽</span>
                                    <p v-if="countMemory > 0" @click="clickMemoryMinus" class="tarif_calculator_scroll_first_block_icons_plus_minus_1">-</p>
                                    <p v-if="countMemory == 0" class="tarif_calculator_scroll_first_block_icons_plus_minus_1" style="background-color:rgb(240,241,242)">-</p>
                                    <p class="tarif_calculator_scroll_first_block_icons_plus_minus_2">{{this.info.used_features.storage_usage_kib + countMemory}} <span class="tarif_calculator_scroll_first_block_icons_plus_minus_span">гб</span></p>
                                    <p @click="clickMemoryPlus" class="tarif_calculator_scroll_first_block_icons_plus_minus_3" @mouseover="checkGb = true" @mouseleave="checkGb = false">+</p>
                                </div>



                                <p>Память сервера</p>
                            </div>
                        </div>


                      


                        <div class="tarif_calculator_scroll_first_block_list">
                            <p>Чтобы хранить диалоги и повышать работоспособность сервиса, мы тратим место на серверах. А сервера которые не глючат, стоят не дешево.</p>
                        </div>

                    </div>
                </div>

                <div class="tarif_calculator_result">
                    <div class="tarif_calculator_result_grey" v-if="this.info.tariffdata.paid_until == 0 && this.info.tariffdata.trial_until >= unixtime">
                        <p>Бесплатный тестовый период завершится через <span style="color: rgb(207,30,65);">{{ Math.round((this.info.tariffdata.trial_until - unixtime)/24/60/60) }} {{ numpf( Math.round((this.info.tariffdata.trial_until - unixtime)/24/60/60)) }}</span></p>
                    </div>

                    <div class="tarif_calculator_result_grey" v-else-if="this.info.tariffdata.paid_until > this.info.tariffdata.trial_until && this.info.tariffdata.paid_until > unixtime">
                        <p>Модуль действителен еще: <span style="color: green">{{ Math.round((this.info.tariffdata.paid_until - unixtime)/24/60/60) }} {{ numpf((this.info.tariffdata.paid_until - unixtime)/24/60/60) }}</span></p>
                        <p v-if="this.info.tariffdata.write_first > 0">Функция "Написать первым" действительна еще: <span>8 {{ numpf(Math.round((this.info.tariffdata.paid_until)/1000/24/60/60)) }}</span></p>
                    </div>



                    <div class="tarif_calculator_result_red" v-else-if="this.info.tariffdata.trial_until < unixtime">
                        <div class="tarif_calculator_result_red1">
                            <img src="../assets/clock.png" alt="">
                        </div>
                        
                        <div class="tarif_calculator_result_red2">
                            <p><strong>Бесплатный пробный период закончился!</strong></p>
                            <p>Выберите тариф и пополните ваш баланс.</p>
                        </div>
                    </div>



                    <div class="tarif_calculator_result_red" v-else-if="this.info.tariffdata.paid_until < unixtime">
                        <div class="tarif_calculator_result_red1">
                            <img src="../assets/clock.png" alt="">
                        </div>
                        
                        <div class="tarif_calculator_result_red2">
                            <p><strong>Оплаченный период закончился!</strong></p>
                            <p>Выберите тариф и пополните ваш баланс.</p>
                        </div>
                    </div>


                    <p class="tarif_calculator_result_itogo">Итого:</p>

                    <h1><span v-if="checkYear" class="tarif_calculator_result_itogo_red_year">{{ convertNumber }} </span> {{ convertYear }} <span class="tarif_calculator_result_itogo_less"> ₽/ </span> <span class="tarif_calculator_result_itogo_less">месяц</span></h1>
                    <div class="tarif_calculator_result_checkbox">
                        <span class="tarif_calculator_result_checkbox_1" style="color:#bdbdbd;">Ежемесячно </span>
                        <label class="switch">
                            <input type="checkbox" ref="check" @click="clickDiscount">
                            <span class="slider round" ></span>
                        </label>
                        <span class="tarif_calculator_result_checkbox_1" style="color:#222;"> Ежегодно</span>
                        <span class="tarif_calculator_result_checkbox_1" style="color:#d6496f;"> -{{ info.pricelist.yearly_discount * 100 }}%</span>
                    </div>

                    <input type="submit" @click="submitTarif" value="ПОДКЛЮЧИТЬ">



                    <div class="tarif_calculator_result_modul">   
                        <p><span style="border-bottom: 1px solid rgb(207,30,65)">Привяжите карту</span> к аккаунту для подключения функций модуля</p>
                    </div>

                    <p class="tarif_calculator_result_list"><strong>Бесплатный</strong><span style="color:#370954;font-weight:500"> функционал</span></p>
                    <ul>
                        <li><div></div>Уведомления о лидах</li>
                        <li><div></div>Техническая поддержка</li>
                        <li><div></div>Аналитика</li>
                        <li><div></div>Внедрение и настройка</li>
                    </ul>


                    <p class="tarif_calculator_result_end">Если на вашем балансе недостаточно средств для подключения набора функций к модулю, деньги спишутся с подключенной карты. Подключить карту можно в <router-link to="/balance">Личном кабинете</router-link></p>
                </div>
            </div>
        </div>
    </div>


    <div class="block_for_phones">
        <p>Извините, просим перейти на сайт через компьютер</p>
    </div>
  



   
</template>


<script>
export default {
    name: 'Tarif',
    data(){
        return{
            info: [],
            infoUser: [],
            infoBalance: [],
            total: 0,
            countOperator: 0,
            countMemory: 0,
            checkWhatsApp: false, checkWhatsAppSpan:false, 
            checkTelegram: false, checkTelegramSpan: false,
            checkViber: false, checkViberSpan: false,
            checkVk: false, checkVkSpan: false,
            checkBusi: false, checkBusiSpan:false, 
            checkChat: false, checkChatSpan: false,
            checkWrite: false, checkWriteSpan: false,
            checkEditor: false, checkEditorSpan: false,
            checkFunnel: false, checkFunnelSpan: false,
            checkBitrix: false, checkBitrixSpan1: false,checkBitrixSpan2: false,checkBitrixSpan3: false,checkBitrixSpan4: false,checkBitrixSpan:false,
            chechAmo: false, chechAmoSpan1: false,chechAmoSpan2: false,chechAmoSpan3: false,chechAmoSpan4: false,chechAmoSpan: false,
            checkMail: false, checkMailSpan: false,
            checkYear: true, checkOperator: false, checkGb: false, 
            firstBlockCount: 0,
            secondBlockCount: 0,
            thirdBlockCount: 0,
            fourthBlockCount: 0,
            fifthBlockCount: 0,
            sixthBlockCount: 0,
            unixtime: Math.round(new Date().getTime() / 1000),
            botId: this.$route.params.bot,
            user_token: this.$cookie.getCookie('user_token')

        }
    },
    methods:{
        clickBusinessApi(event){
            if(event.target.checked){
                this.firstBlockCount += this.info.pricelist.waba_setup_fee
                if(this.$refs.check.checked == true){
                    this.total += this.info.pricelist.waba_setup_fee * (1-this.info.pricelist.yearly_discount) 
                    this.total = parseInt(this.total.toFixed(0))
                }
                else{
                     this.total += this.info.pricelist.waba_setup_fee
                }
            }
            else{
                this.firstBlockCount -= this.info.pricelist.waba_setup_fee
                if(this.$refs.check.checked == true){
                    this.total -= this.info.pricelist.waba_setup_fee * (1-this.info.pricelist.yearly_discount) 
                    this.total = parseInt(this.total.toFixed(0))
                }
                else{
                    this.total -= this.info.pricelist.waba_setup_fee
                }
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
        clickWhatsApp(){
            this.firstBlockCount += this.info.pricelist.program_cost.GS
            this.checkWhatsApp = !this.checkWhatsApp
            if(this.$refs.check.checked == true){
                this.total += this.info.pricelist.program_cost.GS / (1-this.info.pricelist.yearly_discount) 
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
                this.total -= this.info.pricelist.program_cost.GS / (1-this.info.pricelist.yearly_discount)
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
                this.total += this.info.pricelist.program_cost.TL / (1-this.info.pricelist.yearly_discount) 
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
                this.total -= this.info.pricelist.program_cost.TL / (1-this.info.pricelist.yearly_discount) 
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
                this.total += this.info.pricelist.program_cost.VB / (1-this.info.pricelist.yearly_discount)
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
                this.total -= this.info.pricelist.program_cost.VB / (1-this.info.pricelist.yearly_discount) 
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
                this.total += this.info.pricelist.program_cost.VK / (1-this.info.pricelist.yearly_discount) 
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
                this.total -= this.info.pricelist.program_cost.VK / (1-this.info.pricelist.yearly_discount) 
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
                this.total += this.info.pricelist.chat_cost / (1-this.info.pricelist.yearly_discount) 
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
                this.total -= this.info.pricelist.chat_cost / (1-this.info.pricelist.yearly_discount) 
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
                this.total += this.info.pricelist.write_first_cost / (1-this.info.pricelist.yearly_discount) 
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
                this.total -= this.info.pricelist.write_first_cost / (1-this.info.pricelist.yearly_discount) 
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
                this.total += this.info.pricelist.bot / (1-this.info.pricelist.yearly_discount) 
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
                this.total -= this.info.pricelist.bot / (1-this.info.pricelist.yearly_discount) 
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
                this.total += this.info.pricelist.deferred_exec / (1-this.info.pricelist.yearly_discount) 
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
                this.total -= this.info.pricelist.deferred_exec / (1-this.info.pricelist.yearly_discount) 
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
                this.total += this.info.pricelist.crm / (1-this.info.pricelist.yearly_discount) 
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
                this.total -= this.info.pricelist.crm / (1-this.info.pricelist.yearly_discount) 
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
                this.total += this.info.pricelist.crm / (1-this.info.pricelist.yearly_discount) 
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
                this.total -= this.info.pricelist.crm / (1-this.info.pricelist.yearly_discount)
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
                this.total += this.info.pricelist.mailing / (1-this.info.pricelist.yearly_discount) 
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
                this.total -= this.info.pricelist.mailing / (1-this.info.pricelist.yearly_discount) 
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                 this.total -= this.info.pricelist.mailing
            }
        },
        clickDiscount(event){
            this.checkYear = !this.checkYear
            if(event.target.checked == true){
                this.total = this.total / (1-this.info.pricelist.yearly_discount)
                this.total = parseInt(this.total.toFixed(0))
             
            }
            else{
                this.total = this.total * (1-this.info.pricelist.yearly_discount)
                this.total = parseInt(this.total.toFixed(0))
            }
        
        },
        clickOperatorPlus(){
            this.secondBlockCount += this.info.pricelist.op_cost
            this.countOperator += 1
            if(this.$refs.check.checked == true){
                this.total = this.total + this.info.pricelist.op_cost / (1-this.info.pricelist.yearly_discount) 
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
                this.total = this.total - this.info.pricelist.op_cost / (1-this.info.pricelist.yearly_discount) 
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
                this.total = this.total + this.info.pricelist.storage_per_gib / (1-this.info.pricelist.yearly_discount) 
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
                this.total = this.total - this.info.pricelist.storage_per_gib / (1-this.info.pricelist.yearly_discount) 
                this.total = parseInt(this.total.toFixed(0))
            }
            else{
                this.total = this.total - this.info.pricelist.storage_per_gib
            }
        },
        clickWhatsAppDiv(event){
            this.checkBusi = !this.checkBusi
            event.target.parentNode.childNodes[5].style.opacity = 1
            event.target.parentNode.childNodes[5].style.visibility = 'visible'
            setTimeout(function () {
                event.target.parentNode.childNodes[5].style.opacity = 0
                event.target.parentNode.childNodes[5].style.visibility = 'hidden'
            }, 5000);
        },
        clickDiv(event){
            event.target.parentNode.childNodes[5].style.top = event.screenY + 'px'
            event.target.parentNode.childNodes[5].style.opacity = 1
            event.target.parentNode.childNodes[5].style.visibility = 'visible'
            setTimeout(function () {
                event.target.parentNode.childNodes[5].style.opacity = 0
                event.target.parentNode.childNodes[5].style.visibility = 'hidden'
            }, 5000);
        },
        clickBusiDiv(event){
            event.target.parentNode.parentNode.childNodes[4].style.opacity = 1
            event.target.parentNode.parentNode.childNodes[4].style.visibility = 'visible'
            setTimeout(function () {
                event.target.parentNode.parentNode.childNodes[4].style.opacity = 0
                event.target.parentNode.parentNode.childNodes[4].style.visibility = 'hidden'
            }, 5000);
        },
        clickDivCrm(event){
            event.target.parentNode.parentNode.childNodes[2].style.top = event.screenY + 'px'
            event.target.parentNode.parentNode.childNodes[2].style.opacity = 1
            event.target.parentNode.parentNode.childNodes[2].style.visibility = 'visible'
            setTimeout(function () {
                event.target.parentNode.parentNode.childNodes[2].style.opacity = 0
                event.target.parentNode.parentNode.childNodes[2].style.visibility = 'hidden'
            }, 5000);
        },
    

        submitTarif(){
            const axios = require('axios');

            
        

            let user_token = this.user_token
            let botid = this.botId
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

            write_first = this.checkWrite ? 1 : 0

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
            params.append('user_token', user_token)
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
    computed: {
      convertNumber() {
        return this.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      },
      convertYear(){
          return Math.round(this.total * (1-this.info.pricelist.yearly_discount)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      },
      convertBalance2() {
        return Math.round(this.infoBalance.user_balance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      },
      
    },
    created() {
        const axios = require('axios');
        let self = this
        ///this.$cookie.setCookie('user_token', '9c329f7404f8d74f0cf841e35b7e4680')
        console.log(this.$route.params.bot)
        axios.get('https://marketbot.biz/tariff/get_data/?botid='+this.botId+'&user_token='+this.user_token)
            .then(function(response){
                self.info = response.data
                if(response.data.used_features.features.includes('waba_registered')){
                    self.total += response.data.pricelist.waba_setup_fee
                    self.firstBlockCount += response.data.pricelist.waba_setup_fee
                }
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
                    response.data.used_features.storage_usage_kib = Math.ceil(response.data.used_features.storage_usage_kib / 1024 / 1024)
                    self.total += (response.data.pricelist.storage_per_gib * response.data.used_features.storage_usage_kib)
                    self.sixthBlockCount += (response.data.pricelist.storage_per_gib * response.data.used_features.storage_usage_kib)
                }
            })

            axios.get('https://marketbot.biz/user/current?user_token='+this.user_token)
            .then(function(response){
                self.infoUser = response.data
            })
             axios.get('http://marketbot.biz/balance/get_data?user_token='+this.user_token)
            .then(function(response){
                self.infoBalance = response.data
            })

    }
}
</script>


<style>
    @media screen and (max-width: 2560px){
    .right_block{
        width: calc(100% - 78px);
    }
    .block_for_phones{
        display: none;
    }
    .left_block{
        float: left;
        position: fixed;
        height: 100vh;
        width: 78px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
    }
    .left_block_inner{
        margin-top: 300px;
    }
    .left_block_inner div{
        height: 70px;
        transition: 0.2s all ease;
    }
    .left_block_inner div:hover{
        background: rgba(0,0,0,.1);
    }
    .left_block_inner small{
        color: white;
        font-size: 10px;
        letter-spacing: 0;
    }
    .left_block_inner img{
        display: block;
        padding-top: 15px;
        margin-left: 35%;
        width: 30%;
        
    }
    .left_block_inner2{
        margin-top: 300px;
        margin-bottom: 42px;
        transition: 0.2s all ease;
    }





    .right_block{
        float: right;
        margin: 0;
    }
    .right_block_inner{
        width: 100%;
        margin: 0;
        text-align: left;
        height: 70px;
        background-color: #f6f6f6;
    }
    .right_block_inner_back{
        display: inline-block;
        width: 2%;
        margin-left: 3%;
        vertical-align: middle;
    }
    .right_block_inner h2{
        width: 20%;
        vertical-align: top;
        padding: 25px 0 0 10px;
        display: inline-block;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #370954;
        font-size: 1.1VW
    }
    .right_block_inner_balans{
        padding-top: 0.3%;
        width: 62%;
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
        display: block;
        text-align: left;
        font-weight: 500;
    }
    .right_block_inner_balans_right span{
        font-size: 26px;
        font-weight: 500;
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













    .right_tarif{
        width: 90%;
        text-align: left;
        height: 80vh;
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
        font-size: 14px;
        box-shadow: 0px 0px 10px 3px rgb(239,240,245);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        padding: 13px 0 13px 30px;
    }
    .tarif_calculator{
        height: 77vh;
        width: 100%;
        margin: 0px;
    }
    .tarif_calculator_scroll{
        box-shadow: 0 5px 10px -1px rgb(239,240,245) inset;
        width: 50%;
        vertical-align: top;
        display: inline-block;
        height: 100%;
        background-color: white;
        margin: 0;
        overflow: auto;
        overflow-x:hidden;
    }
    
    .tarif_calculator_result{
        padding-top: 10px;
        height: 98.8%;
        background-color: #f6f6f6;
        width: 50%;
        display: inline-block;
        margin: 0;
    }
    .tarif_calculator_result_itogo{
        margin-top: 60px;
        width: 100%;
        font-size: 13px;
        font-weight: 500;
        color: #370954;
        text-align: center;
    }
    .tarif_calculator_result h1{
        font-size: 38px;
        width: 100%;
        text-align: center;
        color: #d6496f;
        margin-top: 20px;
    }
    .tarif_calculator_result_itogo_less{
        font-size: 20px;
    }
    .tarif_calculator_result_checkbox{
        width: 100%;
        text-align: center;
        font-size: 0.9vw;
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
    .tarif_calculator_result_checkbox_1{
        font-weight: 500;
        font-size: 13px;
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
        font-size: 0.8vw;
        font-family: 'Montserrat', sans-serif;
        border: 0px;
        letter-spacing: 2px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
        padding: 16px;
        border-radius: 30px;
        width: 50%;
        margin-left: 25%;
        margin-top: 7%;
        transition: 0.8s all ease;
        cursor: pointer;
    }
    .tarif_calculator_result_list{
        font-size: 1vw;
        margin-top: 30px;
        width: 100%;
        text-align: center;
    }
    .tarif_calculator_result_list strong{
        font-weight: 700;
        font-size: 16px;
        color: #370954;
    }
    .tarif_calculator_result ul{
        margin: 0;
        margin-top: 3%;
    }
    .tarif_calculator_result li{
        font-weight: 400;
        margin-top: 4px;
        font-size: 14px;
        color: #333;
        margin-left: 30%;
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
        font-size:13px;
        line-height: 20px;
        color: #222;
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
        font-size: 0.9vw;
        margin: 20px 0;
        display: none;
    }
    .tarif_calculator_result_grey{
        width: 70%;
        margin: 0px 15% 0px 15%;
        background-color: rgb(227,228,229);
        text-align: center;
        padding: 10px 0;
        font-size: 0.8vw;
        margin-top: 40px;
        font-weight: 500;
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
        font-size: 14px;
        line-height: 20px;
        margin-top: 15px;
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
        width: 96%;
        padding: 0px 0px 0px 20px;
        margin: 0;
        border-bottom: 1px dashed rgb(207,208,209);
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div{
        position: fixed;
        left: 0px;
        background-color: rgba(214,73,111,1);
        width: 330px;
        text-align: left;
        visibility: hidden;
        padding: 10px 20px;
        transition: 0.5s all ease;
        opacity: 0;
        z-index: 100;
    }
    .tarif_calculator_scroll_first_block_icons_div1{
        left: 0px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div2{
        left: 120px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div3{
        left: 240px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div4{
        left: 360px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div5{
        left: 70px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div6{
        left: 190px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div7{
        left: 100px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div8{
        left: 220px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div p{
        color: white;
        margin: 0;
        font-size: 13px;
        font-weight: 500;
        margin: 5px 0;
        width: 100%;
        line-height: 17px;
        text-align: left;
    }
    .tarif_calculator_scroll_first_block h1{
        margin: 0;
        font-size: 4.9em;
        height: 40px;
        margin-left: -35px;
        color: rgb(241,242,243);
    }
    .tarif_calculator_scroll_first_block span{
        color:#222;
        font-weight: 400;
        font-size: 13px;
    }
    .tarif_calculator_scroll_first_block_cost{
        display: inline-block;
        width: 54%;
        padding-right: 1%;
        margin: 0;
        text-align: right;
        font-size: 13px;
        color: #999;
    }
    .tarif_calculator_scroll_first_block_cost span{
        color: #999;
        border-bottom: 1px solid #999;
    }
    .tarif_calculator_scroll_first_block_cost strong{
        font-size: 18px;
        font-weight: 500;
    }
    .tarif_calculator_scroll_first_block_cost1{
        display: inline-block;
        font-size: 14px;
        color: #370954;
        margin: 0;
        width: 45%;
    }
    .tarif_calculator_scroll_first_block_icons{
        position: relative;
        width: 80%;
        margin: 6% 10% 6% 8%;
        text-align: center;
    }
    .tarif_calculator_scroll_first_block_icons div{
        width: 15%;
        display: inline-block;
        vertical-align: top;
        margin: 0 4%; 
    }
    .tarif_calculator_scroll_first_block_icons img{
        width: 80%;
        margin: 0 0 0 18%;
        z-index: 5;
    }
    .tarif_calculator_scroll_first_block_icons p{
        width: 100%;
        text-align: center;
        margin: 5px 0;
        font-size: 12px;
        font-weight: 500;
        color: #777;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_greyicons{
        border: 2px solid rgb(247,248,249);
        width: 80%;
        border-radius: 40px;
        margin: 0 4% 0 5%;
        transition: position,visibility,opacity 0.8s ease;
    }
    .tarif_calculator_scroll_first_block_icons span{
        font-size: 0.6vw;
        font-weight: 600;
        color: white;
        background-color: #d6496f;
        padding: 1px 3px;
        border-radius: 10px;
        position: absolute;
        z-index: 10;
        top: 8px;
        margin-left: 16%;
        
    }
    .tarif_calculator_scroll_first_block_icons_span1{
        left: 0%;
    }
    .tarif_calculator_scroll_first_block_icons_span2{
        left: 22%;
    }
    .tarif_calculator_scroll_first_block_icons_span3{
        left: 44%;
    }
    .tarif_calculator_scroll_first_block_icons_span4{
        left: 66%;
    }
    .tarif_calculator_scroll_first_block_icons_span5{
        left: 12%;
    }
    .tarif_calculator_scroll_first_block_icons_span6{
        left: 34%;
    }
    .tarif_calculator_scroll_first_block_icons_span66{
        left: 57%;
    }
    .tarif_calculator_scroll_first_block_icons_span7{
        left: 23%;
    }
    .tarif_calculator_scroll_first_block_icons_span8{
        left: 44%;
    }
    .tarif_calculator_scroll_first_block_icons_span9{
        left: 34%;
    }
    .tarif_calculator_scroll_first_block_icons_span99{
        left: 34%;
    }
    .tarif_calculator_scroll_first_block_icons_span10{
        left: 24%;
    }
    .tarif_calculator_scroll_first_block_icons_span11{
        left: 45%;
    }
    .switch .tarif_calculator_scroll_first_block_icons_span111{
        font-size: 0.6vw;
        font-weight: 600;
        color: white;
        background-color: #d6496f;
        padding: 1px 3px;
        border-radius: 10px;
        position: absolute;
        z-index: 10;
        top: 8px;
        margin-left: 80%;
        left: 0%;
        top: 10%;
    }
    .tarif_calculator_scroll_first_block_greyicons_opacity{
        opacity: 0;
        width: 0px;
        height: 0px;
        visibility: hidden;
        position: absolute;

    }
    .tarif_calculator_scroll_first_block_list img{
        width: 18px;
        vertical-align: middle;
        margin-left: 4px;
        
    }
    .tarif_calculator_scroll_first_block_list {
        width: 90%;
        background-color: #f6f6f6;
        border-radius: 10px;
        margin: 5% 0;
        padding: 20px 0 20px 20px;
    }
    .tarif_calculator_scroll_first_block_list p{
        font-size: 13px;
        font-weight: 400;
        color: #222;
        margin: 0;
        line-height: 21px;
        
    }
    .tarif_calculator_scroll_first_block_list strong{
        font-weight: 600;
        font-size: 14px;
        line-height: 26px;
        color: #222;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus {
        border: 1px solid rgb(140,40,110);
        border-radius: 35px;
        background-color: rgb(248,249,250);
        height:65px;
        width: 65px;
        margin: 10px 0;
    }
    .tarif_calculator_scroll_first_block_icons_plus_minus .tarif_calculator_scroll_first_block_icons_plus_minus_span{
        color:rgb(140,40,110);
        font-size:0.3vw !important;
        position: relative;
        display: inline-block;
        top: 0;
        left: 0;
        width: 0px;
        background-color: inherit;
        margin: 0;
    }
    .tarif_calculator_scroll_first_block_icons_plus_minus p{
        color: rgb(140,40,110);
        display: inline-block;
        margin-top: 13px; 
        font-size: 1.1vw;
        margin: 0;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_1{
        margin: 0;
        position: relative;
        left: -14px;
        background-color: rgb(140,40,110);
        border: 1px solid white;
        color: white;
        width: 4px;
        font-size: 0.7em;
        border-radius: 45px;
        padding: 0 5px;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_2{
        margin: 24px 0px;
        font-size: 0.43vw;
        width: 24px;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_3{
        margin: 0;
        position: relative;
        left: 14px;
        width: 4px;
        background-color: rgb(140,40,110);
        border: 1px solid white;
        color: white;
        font-size: 0.7em;
        border-radius: 45px;
        padding:  0 5px;
    }

        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_11{
            margin: 0;
            left: -22px;
            width: 1px;
            font-size: 0.6em;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_22{
            margin: 22px 0px !important;
            font-size: 0.8em !important;
            width: 10px !important;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_33{
            margin: 0;
            left: 22px;
            width: 1px;
            font-size: 0.6em;
        }
    .tarif_calculator_result_itogo_red_year{
        color:grey;
        font-size:0.5em;
        font-weight:400;
        text-decoration:line-through;
        -webkit-text-decoration-color:rgb(207,30,65);
        text-decoration-color:rgb(207,30,65);
    }
    }
    @media screen and (max-width: 1920px){
        .right_block{
            width: calc(100% - 78px);
        }
    .block_for_phones{
        display: none;
    }
    .left_block{
        float: left;
        position: fixed;
        height: 100vh;
        width: 78px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
    }
    .left_block_inner{
        margin-top: 300px;
    }
    .left_block_inner div{
        height: 70px;
        transition: 0.2s all ease;
    }
    .left_block_inner div:hover{
        background: rgba(0,0,0,.1);
    }
    .left_block_inner small{
        color: white;
        font-size: 10px;
        letter-spacing: 0;
    }
    .left_block_inner img{
        display: block;
        padding-top: 15px;
        margin-left: 35%;
        width: 30%;
        
    }
    .left_block_inner2{
        margin-top: 300px;
        margin-bottom: 42px;
        transition: 0.2s all ease;
    }





    .right_block{
        float: right;
        margin: 0;
    }
    .right_block_inner{
        width: 100%;
        margin: 0;
        text-align: left;
        height: 70px;
        background-color: #f6f6f6;
    }
    .right_block_inner_back{
        display: inline-block;
        width: 2%;
        margin-left: 3%;
        vertical-align: middle;
    }
    .right_block_inner h2{
        width: 20%;
        vertical-align: top;
        padding: 25px 0 0 10px;
        display: inline-block;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #370954;
        font-size: 1.1VW
    }
    .right_block_inner_balans{
        padding-top: 0.3%;
        width: 62%;
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
        display: block;
        font-weight: 500;
        text-align: left;
    }
    .right_block_inner_balans_right span{
        font-size: 26px;
        font-weight: 500;
        color: #d6496f;
        
        
    }
 



    .right_block_inner_logout{
        width: 8%;
        display: inline-block;
        vertical-align: top;
        padding-top: 10px;
    }
    .right_block_inner_logout img{
        height: 31px;
        width: auto;
        vertical-align: top;
        
        border-left: 1px solid rgb(209,218,223);
        padding-left: 10px;
        padding: 10px 0 10px 30px;
    }













    .right_tarif{
        width: 90%;
        text-align: left;
        height: calc(100% - 120px);
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
        font-size: 14px;
        box-shadow: 0px 0px 10px 3px rgb(239,240,245);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        padding: 13px 0 13px 30px;
    }
    .tarif_calculator{
        height: 80vh;
        width: 100%;
        margin: 0px;
    }
    .tarif_calculator_scroll{
        box-shadow: 0 5px 10px -1px rgb(239,240,245) inset;
        width: 50%;
        vertical-align: top;
        display: inline-block;
        height: 100%;
        background-color: white;
        margin: 0;
        overflow: auto;
        overflow-x:hidden;
    }
    
    .tarif_calculator_result{
        padding-top: 10px;
        height: 98.8%;
        background-color: #f6f6f6;
        width: 50%;
        display: inline-block;
        margin: 0;
    }
    .tarif_calculator_result_itogo{
        margin-top: 60px;
        width: 100%;
        font-size: 13px;
        font-weight: 500;
        color: #370954;
        text-align: center;
    }
    .tarif_calculator_result h1{
        font-size: 38px;
        width: 100%;
        text-align: center;
        color: #d6496f;
        margin-top: 20px;
    }
    .tarif_calculator_result_itogo_less{
        font-size: 20px;
    }
    .tarif_calculator_result_checkbox{
        width: 100%;
        text-align: center;
        font-size: 0.9vw;
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
    .tarif_calculator_result_checkbox_1{
        font-weight: 500;
        font-size: 13px;
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
        font-size: 0.8vw;
        border: 0px;
        letter-spacing: 2px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
        padding: 16px;
        border-radius: 30px;
        width: 50%;
        margin-left: 25%;
        margin-top: 7%;
        transition: 0.8s all ease;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
    }
    .tarif_calculator_result_list{
        font-size: 1vw;
        margin-top: 30px;
        width: 100%;
        text-align: center;
    }
    .tarif_calculator_result_list strong{
        font-weight: 700;
        font-size: 16px;
        color: #370954;
    }
    .tarif_calculator_result ul{
        margin: 0;
        margin-top: 3%;
    }
    .tarif_calculator_result li{
        font-weight: 400;
        margin-top: 4px;
        font-size: 14px;
        color: #333;
        margin-left: 30%;
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
        font-size:13px;
        line-height: 20px;
        color: #222;
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
        font-size: 0.9vw;
        margin: 20px 0;
        display: none;
    }
    .tarif_calculator_result_grey{
        width: 70%;
        margin: 0px 15% 0px 15%;
        background-color: rgb(227,228,229);
        text-align: center;
        padding: 10px 0;
        font-size: 0.8vw;
        margin-top: 40px;
        font-weight: 500;
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
        font-size: 14px;
        line-height: 20px;
        margin-top: 15px;
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
        width: 96%;
        padding: 0px 0px 0px 20px;
        margin: 0;
        border-bottom: 1px dashed rgb(207,208,209);
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div{
        position: fixed;
        left: 0px;
        background-color: rgba(214,73,111,1);
        width: 330px;
        text-align: left;
        visibility: hidden;
        padding: 10px 20px;
        transition: 0.5s all ease;
        opacity: 0;
        z-index: 100;
    }
    .tarif_calculator_scroll_first_block_icons_div1{
        left: 0px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div2{
        left: 120px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div3{
        left: 240px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div4{
        left: 360px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div5{
        left: 70px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div6{
        left: 190px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div7{
        left: 100px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div8{
        left: 220px;
    }
    .tarif_calculator_scroll_first_block .tarif_calculator_scroll_first_block_icons_div p{
        color: white;
        margin: 0;
        font-size: 13px;
        font-weight: 500;
        margin: 5px 0;
        width: 100%;
        line-height: 17px;
        text-align: left;
    }
    .tarif_calculator_scroll_first_block h1{
        margin: 0;
        font-size: 4.9em;
        height: 40px;
        margin-left: -35px;
        color: rgb(241,242,243);
    }
    .tarif_calculator_scroll_first_block span{
        color:#222;
        font-weight: 400;
        font-size: 13px;
    }
    .tarif_calculator_scroll_first_block_cost{
        display: inline-block;
        width: 54%;
        padding-right: 1%;
        margin: 0;
        text-align: right;
        font-size: 13px;
        color: #999;
    }
    .tarif_calculator_scroll_first_block_cost span{
        color: #999;
        border-bottom: 1px solid #999;
    }
    .tarif_calculator_scroll_first_block_cost strong{
        font-size: 18px;
        font-weight: 500;
    }
    .tarif_calculator_scroll_first_block_cost1{
        display: inline-block;
        font-size: 14px;
        color: #370954;
        margin: 0;
        width: 45%;
    }
    .tarif_calculator_scroll_first_block_icons{
        position: relative;
        width: 80%;
        margin: 6% 10% 6% 8%;
        text-align: center;
    }
    .tarif_calculator_scroll_first_block_icons div{
        width: 15%;
        display: inline-block;
        vertical-align: top;
        margin: 0 4%; 
    }
    .tarif_calculator_scroll_first_block_icons img{
        width: 80%;
        margin: 0 0 0 18%;
        z-index: 5;
    }
    .tarif_calculator_scroll_first_block_icons p{
        width: 100%;
        text-align: center;
        margin: 5px 0;
        font-size: 12px;
        font-weight: 500;
        color: #777;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_greyicons{
        border: 2px solid rgb(247,248,249);
        width: 80%;
        border-radius: 40px;
        margin: 0 4% 0 5%;
        transition: position,visibility,opacity 0.8s ease;
    }
    .tarif_calculator_scroll_first_block_icons span{
        font-size: 0.6vw;
        font-weight: 600;
        color: white;
        background-color: #d6496f;
        padding: 1px 3px;
        border-radius: 10px;
        position: absolute;
        z-index: 10;
        top: 8px;
        margin-left: 16%;
        
    }
    .tarif_calculator_scroll_first_block_icons_span1{
        left: 0%;
    }
    .tarif_calculator_scroll_first_block_icons_span2{
        left: 22%;
    }
    .tarif_calculator_scroll_first_block_icons_span3{
        left: 44%;
    }
    .tarif_calculator_scroll_first_block_icons_span4{
        left: 66%;
    }
    .tarif_calculator_scroll_first_block_icons_span5{
        left: 12%;
    }
    .tarif_calculator_scroll_first_block_icons_span6{
        left: 34%;
    }
    .tarif_calculator_scroll_first_block_icons_span66{
        left: 57%;
    }
    .tarif_calculator_scroll_first_block_icons_span7{
        left: 23%;
    }
    .tarif_calculator_scroll_first_block_icons_span8{
        left: 44%;
    }
    .tarif_calculator_scroll_first_block_icons_span9{
        left: 34%;
    }
    .tarif_calculator_scroll_first_block_icons_span99{
        left: 34%;
    }
    .tarif_calculator_scroll_first_block_icons_span10{
        left: 24%;
    }
    .tarif_calculator_scroll_first_block_icons_span11{
        left: 45%;
    }
    .switch .tarif_calculator_scroll_first_block_icons_span111{
        font-size: 0.6vw;
        font-weight: 600;
        color: white;
        background-color: #d6496f;
        padding: 1px 3px;
        border-radius: 10px;
        position: absolute;
        z-index: 10;
        top: 8px;
        margin-left: 80%;
        left: 0%;
        top: 10%;
    }
    .tarif_calculator_scroll_first_block_greyicons_opacity{
        opacity: 0;
        width: 0px;
        height: 0px;
        visibility: hidden;
        position: absolute;

    }
    .tarif_calculator_scroll_first_block_list img{
        width: 18px;
        vertical-align: middle;
        margin-left: 4px;
        
    }
    .tarif_calculator_scroll_first_block_list {
        width: 90%;
        background-color: #f6f6f6;
        border-radius: 10px;
        margin: 5% 0;
        padding: 20px 0 20px 20px;
    }
    .tarif_calculator_scroll_first_block_list p{
        font-size: 13px;
        font-weight: 400;
        color: #222;
        margin: 0;
        line-height: 21px;
        
    }
    .tarif_calculator_scroll_first_block_list strong{
        font-weight: 600;
        font-size: 14px;
        line-height: 26px;
        color: #222;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus {
        border: 1px solid rgb(140,40,110);
        border-radius: 35px;
        background-color: rgb(248,249,250);
        height: 55px;
        width: 55px;
        margin: 10px 0;
    }
    .tarif_calculator_scroll_first_block_icons_plus_minus .tarif_calculator_scroll_first_block_icons_plus_minus_span{
        color:rgb(140,40,110);
        font-size:0.4vw !important;
        position: relative;
        display: inline-block;
        top: 0;
        left: 0;
        width: 0px;
        background-color: inherit;
        margin: 0;
    }
    .tarif_calculator_scroll_first_block_icons_plus_minus p{
        color: rgb(140,40,110);
        display: inline-block;
        margin-top: 13px; 
        font-size: 1.1vw;
        margin: 0;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_1{
        margin: 0;
        position: relative;
        left: -12px;
        background-color: rgb(140,40,110);
        border: 1px solid white;
        color: white;
        width: 4px;
        font-size: 0.7em;
        border-radius: 45px;
        padding: 0 5px;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_2{
        margin: 20px 0px;
        font-size: 0.55vw;
        width: 22px;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_3{
        margin: 0;
        position: relative;
        left: 12px;
        width: 4px;
        background-color: rgb(140,40,110);
        border: 1px solid white;
        color: white;
        font-size: 0.7em;
        border-radius: 45px;
        padding:  0 5px;
    }

        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_11{
            margin: 0;
            left: -18px;
            width: 1px;
            font-size: 0.6em;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_22{
            margin: 18px 0px !important;
            font-size: 0.8em !important;
            width: 10px !important;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_33{
            margin: 0;
            left: 18px;
            width: 1px;
            font-size: 0.6em;
        }
    .tarif_calculator_result_itogo_red_year{
        color:grey;
        font-size:0.5em;
        font-weight:400;
        text-decoration:line-through;
        -webkit-text-decoration-color:rgb(207,30,65);
        text-decoration-color:rgb(207,30,65);
    }
    }










    @media screen and (max-width: 1440px){
        .right_block{
            width: calc(100% - 78px);
        }
    .block_for_phones{
        display: none;
    }
    .left_block{
        float: left;
        position: fixed;
        height: 100vh;
        width: 78px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
    }
    .left_block_inner{
        margin-top: 25vh
    }
    .left_block_inner div{
        height: 70px;
        transition: 0.2s all ease;
    }
    .left_block_inner div:hover{
        background: rgba(0,0,0,.1);
    }
    .left_block_inner small{
        color: white;
        font-size: 10px;
        letter-spacing: 0;
    }
    .left_block_inner img{
        display: block;
        padding-top: 15px;
        margin-left: 35%;
        width: 30%;
        
    }
    .left_block_inner2{
        margin-top: 20vh;
        margin-bottom: 42px;
        transition: 0.2s all ease;
    }





    .right_block{
        float: right;

        margin: 0;
    }
    .right_block_inner{
        width: 100%;
        margin: 0;
        text-align: left;
        height: 70px;
        background-color: #f6f6f6;
    }
    .right_block_inner_back{
        display: inline-block;
        width: 3%;
        margin-left: 3%;
        vertical-align: middle;
    }
    .right_block_inner h2{
        vertical-align: top;
        width: 20%;
        padding: 25px 0 0 1%;
        display: inline-block;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #370954;
        font-size: 1.1VW
    }
    .right_block_inner_balans{
        padding-top: 0.3%;
        width: 62%;
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
        font-size: 0.90vw;
        color: #370954;
        display: block;
    }
    .right_block_inner_balans_right a{
        line-height: 10px;
        font-size: 0.90vw;
        color: #d6496f;
        display: block;
        font-weight: 500;
        text-align: left;
    }
    .right_block_inner_balans_right span{
        font-size: 1.80vw;
        font-weight: 500;
        color: #d6496f;
        
        
    }
 



    .right_block_inner_logout{
        width: 8%;
        display: inline-block;
        vertical-align: top;
    }
    .right_block_inner_logout img{
        height: 31px;
        width: auto;
        vertical-align: middle;
        border-left: 1px solid rgb(209,218,223);
        padding-left: 10px;
        padding: 8px 0 8px 30px;
    }













    .right_tarif{
        width: 90%;
        text-align: left;
        margin: 30px 30px 0 30px;
        height: calc(100vh - 130px);
        border: 1px solid rgb(229,230,231);
        background-color: rgb(248,249,250);
        border-radius: 8px;
        box-shadow: 0px 0px 10px 3px rgb(239,240,245);
    }
    .right_tarif h4{
        margin: 0;
        background-color: white;
        font-weight: 600;
        font-size: 0.97vw;
        box-shadow: 0px 0px 10px 3px rgb(239,240,245);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        padding: 13px 0 13px 30px;
    }
    .tarif_calculator{
        width: 100%;
        height: calc(100vh - 170px);
        margin: 0px;
    }
    .tarif_calculator_scroll{
        width: 50%;
        vertical-align: top;
        display: inline-block;
        height: 99%;
        background-color: white;
        margin: 0;
        overflow: auto;
        overflow-x:hidden;
    }
    .tarif_calculator_result{
        padding-top: 1%;
        height: 95.5%;
        padding-bottom: 0.7%;
        background-color: #f6f6f6;
        width: 50%;
        display: inline-block;
        margin: 0;
    }
    .tarif_calculator_result_itogo{
        margin-top: 5.3%;
        width: 100%;
        font-size: 0.902vw;
        font-weight: 500;
        color: #370954;
        text-align: center;
    }
    .tarif_calculator_result h1{
        font-size: 2.6388vw;
        width: 100%;
        text-align: center;
        color: #d6496f;
        margin-top: 0px;
    }
    .tarif_calculator_result_itogo_less{
        font-size: 1.38vw;
    }
    .tarif_calculator_result_checkbox{
        width: 100%;
        text-align: center;
        font-size: 0.9vw;
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
    .tarif_calculator_result_checkbox .slider{
        background-color: #2196F3;
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
    .tarif_calculator_result_checkbox .slider:before {
        left: 24px;
    }
    .tarif_calculator_result_checkbox_1{
        font-weight: 500;
        font-size: 0.902vw;
    }
    .tarif_calculator_result_checkbox input:checked + .slider {
        background-color: #ccc;
    }

    .tarif_calculator_result_checkbox input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    .tarif_calculator_result_checkbox input:checked + .slider:before {
        -webkit-transform: translateX(-24px);
        -ms-transform: translateX(-24px);
        transform: translateX(-24px);
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
        font-size: 0.8vw;
        border: 0px;
        letter-spacing: 2px;
        background: linear-gradient(353deg, rgba(120,51,137,1) 0%, rgba(214,73,111,1) 100%);
        padding:3% 7%;
        border-radius: 30px;
        width: 50%;
        margin-left: 25%;
        margin-top: 7%;
        transition: 0.8s all ease;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
    }
    .tarif_calculator_result_list{
        font-size: 1vw;
        margin-top: 3%;
        width: 100%;
        text-align: center;
    }
    .tarif_calculator_result_list strong{
        font-weight: 700;
        font-size: 1.111vw;
        color: #370954;
    }
    .tarif_calculator_result ul{
        margin: 0;
        margin-top: 3%;
    }
    .tarif_calculator_result li{
        font-weight: 400;
        margin-top: 1%;
        font-size: 0.972vw;
        color: #333;
        margin-left: 30%;
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
        font-size:0.902vw;
        line-height: 20px;
        color: #222;
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
        font-size: 0.9vw;
        margin: 3% 0;
        display: none;
    }
    .tarif_calculator_result_grey{
        width: 70%;
        margin: 0px 15% 0px 15%;
        background-color: rgb(227,228,229);
        text-align: center;
        padding: 2% 0;
        font-size: 0.8vw;
        margin-top: 3%;
        font-weight: 500;
    }
    .tarif_calculator_result_grey p{
        margin: 2% 0;
    }
    .tarif_calculator_result_red{
        width: 70%;
        margin: 0px 15% 0px 15%;
        background-color: rgba(214,73,111,1);
        text-align: center;
        padding: 0;
        color: white;
        font-size: 0.972vw;
        line-height: 20px;
        margin-top: 15px;
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
        width: 96%;
        padding: 0px 0px 0px 20px;
        margin: 0;
        border-bottom: 1px dashed rgb(207,208,209);
    }
    .tarif_calculator_scroll_first_block h1{
        margin: 0;
        font-size: 4.9em;
        height: 40px;
        margin-left: -35px;
        color: rgb(241,242,243);
    }
    .tarif_calculator_scroll_first_block span{
        color:#222;
        font-weight: 400;
        font-size: 0.90277vw;
    }
    .tarif_calculator_scroll_first_block_cost{
        display: inline-block;
        width: 54%;
        padding-right: 1%;
        margin: 0;
        text-align: right;
        font-size: 0.90277vw;
        color: #999;
    }
    .tarif_calculator_scroll_first_block_cost span{
        color: #999;
        border-bottom: 1px solid #999;
    }
    .tarif_calculator_scroll_first_block_cost strong{
        font-size:1.25VW;
        font-weight: 500;
    }
    .tarif_calculator_scroll_first_block_cost1{
        display: inline-block;
        font-size: 0.972vw;
        color: #370954;
        margin: 0;
        width: 45%;
    }
    .tarif_calculator_scroll_first_block_icons{
        position: relative;
        width: 80%;
        margin: 6% 10% 6% 8%;
        text-align: center;
    }
    .tarif_calculator_scroll_first_block_icons div{
        width: 15%;
        display: inline-block;
        vertical-align: top;
        margin: 0 4%; 
    }
    .tarif_calculator_scroll_first_block_icons img{
        width: 80%;
        margin: 0 0 0 18%;
        z-index: 5;
    }
    .tarif_calculator_scroll_first_block_icons p{
        width: 100%;
        text-align: center;
        margin: 5px 0;
        font-size: 0.833vw;
        font-weight: 500;
        color: #777;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_greyicons{
        border: 2px solid rgb(247,248,249);
        width: 80%;
        border-radius: 40px;
        margin: 0 4% 0 5%;
        transition: position,visibility,opacity 0.8s ease;
    }
    .tarif_calculator_scroll_first_block_icons span{
        font-size: 0.6vw;
        font-weight: 600;
        color: white;
        background-color: #d6496f;
        padding: 1px 3px;
        border-radius: 10px;
        position: absolute;
        z-index: 10;
        top: 8px;
        margin-left: 16%;
        
    }
    .tarif_calculator_scroll_first_block_icons_span1{
        left: 0%;
    }
    .tarif_calculator_scroll_first_block_icons_span2{
        left: 22%;
    }
    .tarif_calculator_scroll_first_block_icons_span3{
        left: 44%;
    }
    .tarif_calculator_scroll_first_block_icons_span4{
        left: 66%;
    }
    .tarif_calculator_scroll_first_block_icons_span5{
        left: 12%;
    }
    .tarif_calculator_scroll_first_block_icons_span6{
        left: 34%;
    }
    .tarif_calculator_scroll_first_block_icons_span7{
        left: 23%;
    }
    .tarif_calculator_scroll_first_block_icons_span8{
        left: 44%;
    }
    .tarif_calculator_scroll_first_block_icons_span9{
        left: 34%;
    }
    .tarif_calculator_scroll_first_block_icons_span10{
        left: 24%;
    }
    .tarif_calculator_scroll_first_block_icons_span11{
        left: 45%;
    }
    .tarif_calculator_scroll_first_block_greyicons_opacity{
        opacity: 0;
        width: 0px;
        height: 0px;
        visibility: hidden;
        position: absolute;

    }
    .tarif_calculator_scroll_first_block_list img{
        width: 18px;
        vertical-align: middle;
        margin-left: 4px;
        
    }
    .tarif_calculator_scroll_first_block_list {
        width: 90%;
        background-color: #f6f6f6;
        border-radius: 10px;
        margin: 5% 0;
        padding: 20px 0 20px 20px;
    }
    .tarif_calculator_scroll_first_block_list p{
        font-size: 0.902vw;
        font-weight: 400;
        color: #222;
        margin: 0;
        line-height: 21px;
        
    }
    .tarif_calculator_scroll_first_block_list strong{
        font-weight: 600;
        font-size: 0.97vw;
        line-height: 26px;
        color: #222;
    }
     
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus {
        border: 1px solid rgb(140,40,110);
        border-radius: 35px;
        background-color: rgb(248,249,250);
        height: 55px;
        width: 55px;
        margin: 8px 0;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus1 {
        height: 44px;
        width: 44px;
        margin: 6px 0;
    }
    .tarif_calculator_scroll_first_block_icons_plus_minus1 p{
        margin-top: 13px; 
       font-size: 0.3em;
    }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_11{
            margin: 0;
            left: -20px;
            width: 1px;
            font-size: 0.5em;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_22{
            margin: 16px 0px !important;
            font-size: 0.6em !important;
            width: 10px !important;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_33{
            margin: 0;
            left: 20px;
            width: 1px;
            font-size: 0.5em;
        }
    .tarif_calculator_scroll_first_block_icons_plus_minus .tarif_calculator_scroll_first_block_icons_plus_minus_span{
        color:rgb(140,40,110);
        font-size:0.5vw !important;
        position: relative;
        display: inline-block;
        top: 0;
        left: 0;
        width: 0px;
        background-color: inherit;
        margin: 0;
    }
    .tarif_calculator_scroll_first_block_icons_plus_minus p{
        color: rgb(140,40,110);
        display: inline-block;
        margin-top: 13px; 
        font-size: 0.9vw;
        margin: 0;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_1{
        margin: 0;
        position: relative;
        left: -11px;
        background-color: rgb(140,40,110);
        border: 1px solid white;
        color: white;
        width: 4px;
        font-size: 0.7em;
        border-radius: 45px;
        padding: 0 5px;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_2{
        margin: 18px 0px;
        font-size: 0.8vw;
        width: 23px;
    }
    .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_3{
        margin: 0;
        position: relative;
        left: 11px;
        width: 4px;
        background-color: rgb(140,40,110);
        border: 1px solid white;
        color: white;
        font-size: 0.7em;
        border-radius: 45px;
        padding:  0 5px;
    }
    .tarif_calculator_result_itogo_red_year{
        color:grey;
        font-size:0.5em;
        font-weight:400;
        text-decoration:line-through;
        -webkit-text-decoration-color:rgb(207,30,65);
        text-decoration-color:rgb(207,30,65);
    }
        .right_block{
            width: calc(100% - 78px);

        }
        .tarif_calculator_scroll_first_block {
            width: 95%;
        }
        
    }
    @media screen and (max-width: 1366px){
        .tarif_calculator_scroll_first_block {
            width: 94%;
        }
        .left_block_inner div{
        height: 50px;
        transition: 0.2s all ease;
    }
        .left_block_inner img{
        display: block;
        padding-top: 5px;
        margin-left: 35%;
        width: 30%;
        
    }
        .left_block_inner2{
        margin-top: 15vh;
        padding-bottom: 42px;
    }
        .tarif_calculator_result{
            height: 96.5%;
        }    
    }
    @media screen and (max-width: 1200px){
        .tarif_calculator_scroll_first_block_list p{
            font-size: 11px;
        }   
        .tarif_calculator_scroll_first_block_icons p{
            font-size: 0.6em;
        } 
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus1 {
            height: 44px;
            width: 44px;
            margin: 6px 0;
        }
        .tarif_calculator_scroll_first_block_icons_plus_minus1 p{
            margin-top: 13px; 
            font-size: 0.3em;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_11{
            margin: 0;
            left: -14px;
            width: 1px;
            font-size: 0.5em;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_22{
            margin: 13px 0px !important;
            font-size: 0.6em !important;
            width: 2px !important;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_33{
            margin: 0;
            left: 14px;
            width: 1px;
            font-size: 0.5em;
        }
        .tarif_calculator_result_grey{
            width: 70%;
            margin: 0px 15% 0px 15%;
            font-size: 0.7em;
        }
        
        .tarif_calculator_result_red{
            font-size: 0.7em;
        }
        .tarif_calculator_result_list{
            margin-top: 20px;
        }
        .tarif_calculator_result li{
            font-size: 12px;
            margin-left: 10%;
        }
        .tarif_calculator_result_end{
            font-size: 0.7em;
            line-height: 15px;
        }  
    

    }
    @media screen and (max-width: 1040px){
        .tarif_calculator_scroll_first_block_list p{
            font-size: 11px;
        }   
        .tarif_calculator_scroll_first_block_icons p{
            font-size: 0.6em;
        } 
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus1 {
            height: 28px;
            width: 28px;
            margin: 6px 0;
        }
        .tarif_calculator_scroll_first_block_icons_plus_minus1 p{
            margin-top: 13px; 
            font-size: 0.3em;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_11{
            margin: 0;
            left: -7px;
            width: 1px;
            font-size: 0.5em;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_22{
            margin: 3px 0px !important;
            font-size: 0.6em !important;
            width: 2px !important;
        }
        .tarif_calculator_scroll_first_block_icons .tarif_calculator_scroll_first_block_icons_plus_minus_33{
            margin: 0;
            left: 7px;
            width: 1px;
            font-size: 0.5em;
        }
        .tarif_calculator_result_grey{
            width: 70%;
            margin: 0px 15% 0px 15%;
            font-size: 0.7em;
        }
        
        .tarif_calculator_result_red{
            font-size: 0.7em;
        }
        .tarif_calculator_result_list{
            margin-top: 20px;
        }
        .tarif_calculator_result_end{
            line-height: 15px;
        }  
    
  
    
    
    }
     @media screen and (max-width: 1024px){
        .tarif_calculator_scroll_first_block {
            width: 92%;
        }
        .tarif_calculator_scroll_first_block_list p{
            font-size: 0.9vw;
            color: rgb(57,58,59);
            margin: 6px 0;
            line-height: 12px;
        }
        .tarif_calculator_result_end{
            line-height: 15px;
            margin: 2% 10% 0 10%;
        }
         .tarif_calculator_scroll_first_block_icons{
            width: 90%;
            margin: 6% 5% 6% 4%;
        }
    }
    @media screen and (max-width: 910px){
        .tarif_calculator_scroll_first_block_icons{
            width: 100%;
            margin: 6% 0% 6% 0%;
        }
    }
    @media screen and (max-width: 800px){
        .tarif_calculator_scroll_first_block {
            width: 90%;
        }
        .tarif_calculator_result_end{
            line-height: 15px;
            margin: 2% 10% 0 10%;
        }
        .tarif_calculator_scroll_first_block_list p{
            font-size: 0.9vw;
            color: rgb(57,58,59);
            margin: 5px 0;
            line-height: 9px;
        }
        .left_block_inner{
            margin-top: 100px;
        }
        .left_block_inner img{
            width: 20%;
            margin-left: 40%;
            margin-top: 30px;

        
        }
        .left_block_inner2{
            margin-top: 130px;
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
            padding: 15% 3% 18% 3%;
            margin: 0;
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