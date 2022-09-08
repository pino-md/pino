let handler = async m => m.reply(`
 ╭─「 *Tutorial Main Bot Rpg* 」 
 │  
 │〘 Tutorial EPIC RPG 〙 
 │• *.hadiah* 
 │   Staterpack yang bisa di klaim  
 │   12 jam sekali 
 │• *.mulung* 
 │• *.adventure* 
 │• *.fight* 
 │   Untuk mencari resource seperti  
 │   Money, Exp, dll..,dibutuhkan   
 │   minimal 80 nyawa untuk bisa  
 │   melakukannya dan, kamu tidak  
 │   dapat spam karena ada delay 5  
 │   menit 
 │• *.heal* 
 │   Untuk memakai potion/untuk  
 │   mengisi nyawa/health 
 │• *.shop buy potion* 
 │   Untuk membeli potion dan ketik  
 │   *.leaderboard* 
 │   *.lb* 
 │   untuk melihat top global 
 │• *.shop* 
 │   Untuk membeli atau menjual sesuatu 
 │• *.shop buy <crate> <jumlah>* 
 │   Untuk membeli Crate 
 │• *.profile* 
 │• *.profileall* 
 │   untuk mengetahui No whatsapmu, dll 
 │• *.inv* 
 │• *.inventory*  
 │   Untuk mengecek nyawa, money, dll. 
 │• *.judi <jumlah>* 
 │   *_Jangan judi, Karena gk bakal_* 
 │   *_balik modal.BENERAN GK BOHONG_* 
 │   
 │*© 𝚇𝚈𝚁𝙰 𝙱𝙾𝚃 2020-2021* 
 ╰─「 *Tutorial Main BOT RPG* 」
`.trim()) // Tambah sendiri kalo mau
handler.help = ['caramain']
handler.tags = ['main']
handler.command = /^(pakai|carapakai|caramain)$/i

module.exports = handler
