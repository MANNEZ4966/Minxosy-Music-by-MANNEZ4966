const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const { MessageEmbed } = require("discord.js");
const emoji = require('../../settings/emoji.json')

module.exports = new Command({
  // options
  name: "invite",
  description: `ลิค์เชิญของ Minxosy Music 2`,
  userPermissions: ['SEND_MESSAGES'],
  botPermissions: ['SEND_MESSAGES'],
  category: "Information",
  cooldown: 10,
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    interaction.followUp({embeds : [
        new MessageEmbed()
        .setColor(ee.color)
        .setTitle(` 💌 ขอบคุณที่เชิญหนูค่ะ!`)
        .setDescription(`>>> ** [กดตรงนี้](https://discord.com/api/oauth2/authorize?client_id=996658284603916389&permissions=8&scope=applications.commands+bot) **`)
        .setImage(`https://i.imgur.com/365aAFO.gif`)
        .setFooter({text : ee.footertext , iconURL : ee.footericon})
    ]})
  },
});
