const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `*────── 「 LIST SEWA 」 ──────*

Hai 👋
*OPEN SEWA BOT BY PINO MD*

     *FITUR:*
⬡ ANTILINK (HAPUS PESAN)
⬡ DELETE MESSAGE
⬡ DATABASE MENU
⬡ CATATAN MENU
⬡ DOWNLOAD MENU
⬡ SEARCH MENU
⬡ ISLAMIC MENU
⬡ PRIMBON MENU
⬡ ANIME MENU
⬡ VOICE CHANGER MENU
⬡ ANONYMOUS MENU
FITUR ADA BANYAK
BISA HAPUS LINK GC ORANG
BISA HAPUS PESAN ORANG

*COCOK DIBUAT JAGA GRUP ISIAN DAN GRUP JB , GRUP KELAS JUGA BISA. UNTUK MEMPERMUDAH ADMIN GRUP*

*HARGA SEWA BOT*
⬡ PERMANEN : 25K
⬡ 30 HARI : 20K
⬡ 7 HARI : 10K
⬡ 3 HARI : 5K

*JADI MEMBER PREMIUM BOT*
⬡ PERMANEN : 45K
⬡ 30 HARI : 20K
⬡ 7 HARI : 10K
⬡ 3 HARI : 5K

*INFO:*
- BOT ON 24 JAM NONSTOP
- FAST RESPON
- ANTI DELAY
- BERGARANSI
- TESTI ADA
- GRUP BOT ADA

💳 *PEMBAYARAN VIA* 💳
⬡ GOPAY
⬡ DANA 
⬡ ALL QRIS

*GANJA? BUKAN BOT ABAL²*
*TAWAR? HARGA MURAH ADA DI SINI* https://pinomd.rf.gd/
*MINAT? CHAT NO DIBAWAH👇*
OWNER : https://wa.me/628895377665?text=BANG+SEWA+BOT+WA`
let message = await prepareWAMessageMedia({ image: {url: 'https://c.top4top.io/p_2433m1yc00.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: sewa,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '🏧 Group Bot',
               url: 'https://chat.whatsapp.com/BP4sCRPHudDGtSOjQvXTGH'
             }

           },
               {
             callButton: {
               displayText: 'Kontak Owner',
               phoneNumber: '+62 889-5377-665'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             },

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^beliprem|sewa|sewabot$/i

module.exports = handler
