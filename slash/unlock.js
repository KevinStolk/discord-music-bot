const { SlashCommandBuilder } = require('@discordjs/builders');

const CHANNEL_ROLE = process.env.CHANNELROLE;

module.exports = {
  data: new SlashCommandBuilder().setName('unlock').setDescription('Unlocks the current channel.'),
  run: async ({ client, interaction }) => {
    interaction.editReply(`Channel is unlocked.`);
    interaction.channel.permissionOverwrites.create(
      interaction.guild.roles.cache.get(CHANNEL_ROLE),
      {
        SEND_MESSAGES: true,
      }
    );
  },
};
