const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `*────── 「 DONASI 」 ──────*

Hai kak 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 😁
Thanks!
┏━━━•❅•°•❈〔 𝗱𝗼𝗻𝗮𝘀𝗶 〕
┣➲ Scan Barcod Qrisnya diatas🤗
┗━━━•❅•°•❈
Contact person Owner:
wa.me/628895377665 (Owner)`
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
               displayText: '',
               phoneNumber: '+62 889-5377-665'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

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

handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^donasi$/i

module.exports = handler
