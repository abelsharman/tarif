<template>
  <div class="chat_block">
        <div class="chat_block_inner">
            <table>
                <tr class="chat_block_inner_row_heading" style="border:0px;">
                    <th style="width: 51%;">Название</th>
                    <th class="chat_block_inner_table_special_th" style="width: 19%">Каналы</th>
                    <th class="chat_block_inner_table_special_th" style="width: 12%">Лиды</th>
                    <th class="chat_block_inner_table_special_th" style="width: 18%">Срок</th>
                </tr>

                <tr>
                    <td style="width: 51%;">ID</td>
                    <td style="width: 19%">+777777777</td>
                    <td class="chat_block_inner_third_column">
                        <div class="chat_block_inner_margin">
                            <p>1235 лидов</p>
                            <p>242 контакта</p>
                            <a href="#">Подробнее</a>
                        </div>
                    </td>
                    <td style="width: 13%;">Модуль действителен</td>
                    <td style="width: 5%;">Button to destroy it down</td>
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

    .chat_block_inner_third_column{
        width: 12%;

    }
    .chat_block_inner_margin{
        margin-left: 20px;
    }
    .chat_block_inner_third_column p{
        margin: 0;
        font-size: 14px;
        font-weight: 500;
    }
    .chat_block_inner_third_column a{
        color: rgb(180, 46, 120);
        font-size: 14px;
    }


</style>