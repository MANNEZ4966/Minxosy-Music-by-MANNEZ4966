const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const emoji = require("../../settings/emoji.json");
const player = require("../../handlers/player");

module.exports = new Command({
  // options
  name: "play",
  description: `เปิดเพลง`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  options: [
    {
      name: "song",
      description: `วางลิงค์ url / ชื่อเพลงที่จะเล่น`,
      type: "STRING",
      required: true,
    },
  ],
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    let channel = interaction.member.voice.channel;
    if (!channel) {
      return interaction.followUp(
        `** ${emoji.ERROR} คุณต้องเข้าห้องเสียงก่อนค่ะ! **`
      );
    } else if (
      interaction.guild.me.voice.channel &&
      !interaction.guild.me.voice.channel.equals(channel)
    ) {
      return interaction.followUp(
        `** ${emoji.ERROR} ต้องเข้ามาในห้องเสียงที่มีหนูค่ะ **`
      );
    } else if (interaction.guild.me.voice.serverMute) {
      return interaction.followUp(
        `** ${emoji.ERROR} หนูโดนปิดเสียงค่ะ เปิดเสียงหนูก่อนค่ะ! **`
      );
    } else {
      let song = interaction.options.getString("song");
      player
        .play(channel, song, {
          member: interaction.member,
          textChannel: interaction.channel,
        })
        .then((m) => {
          interaction.followUp(`เพิ่ม ${song} เข้าไปในคิว`).then((msg) => {
            msg.delete().catch((e) => {});
          });
        });
    }
  },
});
