import TelegramBot from "node-telegram-bot-api";
import dotenv from 'dotenv';
dotenv.config();

const TOKEN=process.env.BOT_TOKEN
const bot = new TelegramBot(TOKEN, { polling: true })

const savat=[]
const buyurtmalar=[]
bot.on("message", (msg) => {
    const chatId = msg.chat.id
    const firstName = msg.chat.first_name
    const text = msg.text
    if (text == "/start") {
        bot.sendMessage(
            chatId,
            `Assalomu aleykum ${firstName} \n 👇 Quyidagi menyudan kerakli bo‘limni tanlang`,
            {
                reply_markup: {
                    keyboard: [
                        ["🛒 Mahsulotlar", "🛒 Savat"],
                        ["📦 Buyurtmalar", "❓ Yordam"],
                    ],
                    resize_keyboard: true,
                },
            }
        )
    }

    else if(text=="📦 Buyurtmalar"){
         if (buyurtmalar.length==0) {
             bot.sendMessage(
                 chatId,
                    `📦 Sizning buyurtmalaringiz hozircha mavjud emas. \t 🛍 Mahsulotlar bo'limidan xarid qilishingiz mumkin.`
             )

         }else{
            bot.sendMessage(
                chatId, `Sizning buyurtmalaringiz: ${buyurtmalar.length}ta.`,{
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "👗👕 Buyurtmalarni ko'rish", callback_data: "b_korish" }
                    ],
                    [
                        { text: "🔙 Orqaga", callback_data: "orqaga" }
                    ],
                ]
            }
        }
            )
         }
    }
    else if (text == "🛒 Mahsulotlar") {
        bot.sendMessage(
            chatId,
            `Assalomu aleykum ${firstName} \n 👇 Quyidagi menyudan kerakli bo‘limni tanlang`,
            {
                reply_markup: {
                    keyboard: [
                        ["👩‍🦰Ayollar uchun"], ["👨‍🦰Erkaklar uchun"]
                    ],
                    resize_keyboard: true,
                },
            }
        )
    }
    else if(text=="🛒 Savat"){
        if (savat.length==0) {
            
            bot.sendMessage(
                chatId,
               `🛒 Savatingiz bo'sh!

🛍 Mahsulotlar bo'limidan xarid qiling.
👇 Quyidagi tugmani bosing:`
            )
        }
    }
    else if (text == "👩‍🦰Ayollar uchun") {
        bot.sendMessage(
            chatId,
            `Kategoriya tanlang  👇 `, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "👗 Ko‘ylaklar", callback_data: "women_dresses" }
                    ],
                    [
                        { text: "👕 Bluzkalar", callback_data: "women_blouses" }
                    ],
                    [
                        { text: "👖 Shimlar", callback_data: "women_pants" }
                    ],
                    [
                        { text: "🧥 Kurtkalar", callback_data: "women_jackets" }
                    ],
                    [
                        { text: "👜 Sumkalar", callback_data: "women_bags" }
                    ],
                    [
                        { text: "👠 Poyabzallar", callback_data: "women_shoes" }
                    ],
                    [
                        { text: "🔙 Orqaga", callback_data: "back" }
                    ]
                ]
            }
        })
    }
    else if (text == "👨‍🦰Erkaklar uchun") {
        bot.sendMessage(
            chatId,
            `Kategoriya tanlang  👇 `, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "👕 Futbolkalar", callback_data: "men_tshirts" }
                    ],
                    [
                        { text: "👖 Shimlar", callback_data: "men_pants" }
                    ],
                    [
                        { text: "🧥 Kurtkalar", callback_data: "men_jackets" }
                    ],
                    [
                        { text: "👟 Krossovkalar", callback_data: "men_shoes" }
                    ],
                    [
                        { text: "🧢 Kepkalar", callback_data: "men_caps" }
                    ],
                    [
                        { text: "🔙 Orqaga", callback_data: "back" }
                    ]
                ]
            }
        })
    }
    else if(text=="❓ Yordam"){
        bot.sendMessage(
            chatId,
             {
                reply_markup: {
                    keyboard: [
                        ["Sozlamalar ⚙️" ],
                        ["Bot yo'riqnomasi 📔"],
                        ["Admin 👩‍💻"],
                        ["Tilni o'zgartirish"],
                        ["Asosiy menuga qaytish 🔙"]
                    ],
                    resize_keyboard: true,
                },
            }
            
        )
    }
else if (text=="Sozlamalar ⚙️") {
    
}









    else {
        bot.sendMessage(
            chatId, `Botni qayta ishga tushirish uchun /start buyruqini yuboring!`
        )
    }
})

bot.on("callback_query", (query) => {
   const chatId=query.message.chat.id
   const data=query.message.date
   const userId = query.from.id;
   const messageId = query.message.message_id;


   if (data == ""){

   }





})