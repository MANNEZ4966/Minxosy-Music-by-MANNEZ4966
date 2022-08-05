const { Command } = require(`reconlx`);
const ee = require(`../../settings/embed.json`);
const config = require(`../../settings/config.json`);
const { MessageEmbed, version } = require(`discord.js`);
const emoji = require(`../../settings/emoji.json`);
const { duration } = require(`../../handlers/functions`);
let cpuStat = require("cpu-stat");
let os = require("os");
var os2 = require('os-utils');
const osu = require('node-os-utils')
require('loadavg-windows')
const A1 = (os.platform())
const A2 = (os.totalmem()) / 1024 / 1024 / 1024
const A3 = (os.arch())
const A4 = (os.cpus().map((i) => `${i.model}`)[0])
const A5 = (os.cpus().map((i) => `${i.speed}`)[0]) / 1024
const A6 = (os.platform())
const A7 = (os.uptime())

const cpu = osu.cpu
const usage = (cpu.loadavgTime() / 2) * 10

console.log(usage)

os2.cpuUsage(function(v){
    console.log( 'CPU Usage (%): ' + v );
});
                  
module.exports = new Command({
  // options
  name: `botinfo`,
  description: `ข้อมูลของบอท`,
  userPermissions: [`SEND_MESSAGES`],
  botPermissions: [`SEND_MESSAGES`],
  category: `Information`,
  cooldown: 10,
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    
                  
    interaction.followUp({
      embeds: [
        new MessageEmbed()
          .setColor(ee.color)
          .setImage(`
          https://i.imgur.com/365aAFO.gif
`)
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL({ dynamic: true }),
          })
          .setDescription(
            `ข้อมูลบอท \n\n`
          )
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .addFields([
            {
              name: `🤖 ชื่อบอท`,
              value: `>>> \`${client.user.username}\``,
              inline: true,
            },
            {
              name: `🏓 ปิง`,
              value: `>>> \`${client.ws.ping}ms\``,
              inline: true,
            },
            {
              name: `🎛️ จำนวนเซิร์ฟเวอร์`,
              value: `>>> \`${client.guilds.cache.size} Servers\``,
              inline: true,
            },
            {
              name: `👨‍👧‍👧 ผู้ใช้`,
              value: `>>> \`${client.users.cache.size} Users\``,
              inline: true,
            },
            {
              name: `📂 ช่อง`,
              value: `>>> \`${client.channels.cache.size} Channels\``,
              inline: true,
            },
            {
              name: `🔗 Node.js เวอร์ชั่น`,
              value: `>>> \`${process.version}\``,
              inline: true,
            },
            {
              name: `🔗 Discord.js เวอร์ชั่น`,
              value: `>>> \`${version}\``,
              inline: true,
            },
            {
              name: `💾 CPU Usage`,
              value: `>>> \`${usage}% | 100% => 1Core\``,
              inline: false,
            },
            {
              name: `💾 Ram Usage`,
              value: `>>> \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``,
              inline: false,
            },
            {
              name: `💾 ข้อมูลเซิร์ฟเวอร์บอท`,
              value: `>>> \`\`\`OS type : ${A1}\nPlatform : ${A6}\nRam : ${A2} gb\nArch : ${A3}\n\nServer Uptime : ${A7}\nCPU\n${A4}\nSpeed : ${A5}gh\`\`\``,
              inline: false,
            },
            {
              name: `${emoji.setup} คำสั่งบอท`,
              value: `>>> \`\`\` Commands ${client.commands.size} , SubCommands ${client.subcmd.size}\`\`\``,
            },
            {
              name: `${emoji.time} ระยะเวลาออนไลน์`,
              value: `>>> \`\`\`${duration(client.uptime)
                .map((i) => `${i}`)
                .join(` , `)}\`\`\``,
            },
          ])
          .setFooter({ text: ee.footertext, iconURL: ee.footericon }),
      ],
    });
  },
});