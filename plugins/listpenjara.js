    let handler = async (m, { conn, usedPrefix }) => {
    let users = Object.entries(global.db.data.users.penjara).filter(user => user[1].penjara)
    let now = new Date() * 1

┌ *Daftar User yang di penjara*
│ Total : ${users.length} User${users ? '\n' + users.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│ wa.me/${jid.split('@')[0]}
│ ${(global.db.data.users[jid].penjaraDate - now) > 1 ? msToDate(global.db.data.users[jid].penjaraDate - now) : '*Permanen!*'}
`.trim()).join('\n') : ''}
└────
`.trim())
}
handler.help = ['listpenjara']
handler.tags = ['rpg']
handler.command = /^listpenjara?$/i
module.exports = handler


function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }
