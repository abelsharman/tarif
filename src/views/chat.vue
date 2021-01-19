<template>
  <div class="chat_block">
        <div class="chat_block_inner">
            <table>
                <tr class="chat_block_inner_row_heading" style="border:0px;">
                    <th style="width: 51%;">Название</th>
                    <th class="chat_block_inner_table_special_th" style="width: 19%">Каналы</th>
                    <th class="chat_block_inner_table_special_th" style="width: 12%">Лиды</th>
                    <th class="chat_block_inner_table_special_th" colspan = 2 style="width: 18%">Срок</th>
                
                </tr>

                <tr>
                    <td style="width: 51%;">ID</td>
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
                                <span>Новые: </span>
                                <img src="" alt="">
                                <span>Сегодня</span>
                                <img src="" alt="">
                                <span></span>
                                <img src="" alt="">
                            </div>
                        </div>
                    </td>
                    <td class="chat_block_inner_third_column">
                        <div class="chat_block_inner_margin">
                            <p>1235 лидов</p>
                            <p>242 контакта</p>
                            <a href="#">Подробнее</a>
                        </div>
                    </td>
                    <td class="chat_block_inner_fourth_column">
                        <div class="chat_block_inner_margin">
                            <p>Модуль действителен еще:<span>93 дня</span></p>
                            <a href="#">Настроить тариф</a>
                        </div>
                    </td>
                    <td class="chat_block_inner_fifth_column">
                        <img src="../assets/close.png" alt="close">
                    </td>
                </tr>
            </table>
        </div>
  </div>
  
</template>

<script>
export default {
    name: 'chat'
}
</script>

<style>
    .chat_block{
        margin: 0;
        height: 400px;
        text-align: left;
        width: 99%;
        padding: 10px;
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
        border-collapse: collapse;
    }
    .chat_block_inner tr{
        border-bottom: 1px dashed rgb(207,219,224);
        border-left: 5px solid rgb(207,219,224);
    }
    .chat_block_inner th{
        text-transform: uppercase;
        height: 50px;
        font-weight: 500;
        padding-left: 20px;
    }
    .chat_block_inner_table_special_th{
        color: rgb(128, 156, 174);
    }
    .chat_block_inner td{
        height: 200px;
        border-left: 1px solid rgb(229, 230, 231);
        background-color: rgb(249,250,251);
        justify-content: center;
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
    .chat_block_inner_third_column{
        width: 12%;

    }
    .chat_block_inner_margin{
        width: 80%;
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
        width: 60%;
        margin-left: 22%;
    }

</style>