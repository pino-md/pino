const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let tags = {
  'rpgabsen': '๐๐๐-๐๐๐๐๐',
  'rpg': '๐๐๐',
  'game': '๐๐๐๐',
  'xp': '๐๐๐ & ๐๐๐๐๐',
  'sticker': '๐๐๐๐๐๐๐',
  'main': '๐๐๐๐',
  'kerang': '๐๐๐๐๐๐ ๐๐๐๐๐',
  'quotes': '๐๐๐๐๐๐',
  'admin': '๐๐๐๐๐',
  'group': '๐๐๐๐๐',
  'internet': '๐๐๐๐๐๐๐๐',
  'anonymous': '๐๐๐๐ ๐๐๐๐',
  'downloader': '๐๐๐๐๐๐๐๐๐๐',
  'berita': '๐๐๐๐๐๐',
  'tools': '๐๐๐๐๐',
  'fun': '๐๐๐',
  'database': '๐๐๐๐๐๐๐๐', 
  'vote': '๐๐๐๐๐๐',
  'absen': '๐๐๐๐๐',
  'catatan': '๐๐๐๐๐๐๐',
  'jadian': '๐๐๐๐๐๐',
  'islami': '๐๐๐๐๐๐',
  'owner': '๐๐๐๐๐',
  'advanced': '๐๐๐๐๐๐๐๐',
  'info': '๐๐๐๐',
  'audio': '๐๐๐๐๐',
  'serti': '๐๐๐๐๐๐๐๐๐๐',
  'asupan': '๐๐๐๐๐๐',
  'maker': '๐๐๐๐๐',
}
const defaultMenu = {
  before: `
โโโโโโขเณโข:๏ฝฅ๏พโง:๏ฝฅ๏พโง
โ๊ ๐ป๐๐, %ucapan %name! ๐
โโโโโขโโขยฐโขโ
โโฆโโโข โขโ โขโๅฝกโ
โโ*๐๐๐๐๐:* 
โ๐%wib WIB
โ๐%wita WITA
โ๐%wit WIT
โ๐*๐๐๐ซ๐ข:* %week
โ๐*๐๐๐ง๐ ๐ ๐๐ฅ:* %date
โ๐*๐๐ฉ๐ญ๐ข๐ฆ๐:* %uptime (%muptime)
โ๐จโ๐จโ๐งโ๐ง*๐๐ฎ๐ฉ๐ฉ๐จ๐ซ๐ญ ๐๐:*
โ https://chat.whatsapp.com/CnxVBXsAxSS4XNCQecdVrM
โยปโโใโง๏ฝฅ๏พ: โง๏พ๏ฝฅ:
๐ค๐๐ฌ๐๐ซ๐ง๐๐ฆ๐: %name
๐๐๐ข๐ฆ๐ข๐ญ๐ฆ๐ฎ: %limit
๐ถ๐๐๐ฏ๐๐ฅ๐ฆ๐ฎ: %level
๐๏ธโโ๏ธ๐๐ฑ๐ฉ๐ฆ๐ฎ: %exp
%readmore`.trimStart(),
  header: 'โโฃโโใ %category ใโโโโฌฃ',
  body: 'โ โ %cmd %islimit %isPremium',
  footer: 'โฃโโโโโโโโโโโโโฌฃ\n',
  after: `๐ผ๐ฐ๐ณ๐ด ๐๐ธ๐๐ฒ๐ท โค ๐๐๐๐๐๐`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(โ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(โ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    conn.sendButton(m.chat, text.trim(), 'https://pinomd.rf.gd', null, [['Rules', '.rules'],['Cara Main', '.pakai']], m)
    /*conn.sendHydrated(m.chat, text.trim(), 'โ premium | โ limit', null, 'https://aiinne.github.io/', 'Website', '', '', [
      ['Donate', '/donasi'],
      ['Sewa Bot', '/sewa'],
      ['Owner', '/owner']
    ], m)*/
    /*let url = `https://telegra.ph/file/ab1df70dfd5c2bac64da1.jpg`.trim()
    let res = await fetch(url)
    let buffer = await res.buffer()
    let message = await prepareWAMessageMedia({ image: buffer }, { upload: conn.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: text.trim(),
                            hydratedFooterText:'โ premium | โ limit',
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://Ainebot.github.io/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: '/donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewa',
                                    id: '/sewa'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: '/owner'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })*/
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = '๐๐ข๐จ๐ช ๐๐ข๐ฌ'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = '๐๐ข๐จ๐ช ๐๐ข๐ฌ'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = '๐๐ช๐ข๐ฏ๐จ ๐๐ข๐ฌ'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = '๐๐ฐ๐ณ๐ฆ ๐๐ข๐ฌ'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = '๐๐ฆ๐ญ๐ข๐ฎ๐ข๐ต ๐ฑ๐ฆ๐ต๐ข๐ฏ๐จ ๐ฌ๐ข๐ฌ'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = '๐๐ข๐ญ๐ข๐ฎ ๐๐ข๐ฌ'
        } else {
          ucapanWaktu = '๐๐ฆ๐ญ๐ข๐ฎ๐ข๐ต ๐๐ข๐ญ๐ข๐ฎ ๐๐ข๐ฌ!'
        }	
        return ucapanWaktu
}
