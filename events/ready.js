const client = require("..");
const player = require("../handlers/player");
const { databasing } = require("../handlers/functions");

client.on("ready", async () => {
  console.log(`> ${client.user.username} Online <`.bgGreen);
  client.user.setActivity({
    name: `/help | นี่คือไฟล์บอทของ MANNEZ.js#4966`,
    type: "PLAYING",
  });

  // player
  await client.guilds.fetch();

  await client.guilds.cache.forEach(async (guild) => {
    await databasing(guild.id);
    client.updatemusic(guild);
  });
});



var os2 = require('os-utils');

os2.cpuUsage(function(v){
    console.log( 'CPU Usage (%): ' + v );
});