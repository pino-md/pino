let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m) => {
    let o
    try {
        o = await exec('rm -rf tmp && mkdir tmp')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
        await m.reply('Berhasil')
    }
}
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp|ctmp|tmp)$/i
handler.owner = true
module.exports = handler
