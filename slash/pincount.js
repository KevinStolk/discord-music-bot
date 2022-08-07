const { SlashCommandBuilder } = require('@discordjs/builders');

const CHANNEL_ROLE = process.env.CHANNELROLE;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pincount')
    .setDescription('Checks the pincount in the current channel.'),
  run: async ({ client, interaction }) => {
    await interaction.channel.messages
      .fetchPinned()
      .then((messages) => {
        if (messages.size == 50) {
          interaction.editReply(`Pin Limit!!!!!! Channel going in lockdown.`);
          interaction.channel.permissionOverwrites.create(
            interaction.guild.roles.cache.get(CHANNEL_ROLE),
            {
              SEND_MESSAGES: false,
            }
          );
        } else {
          interaction.editReply(`Pin Count: ${messages.size}`);
        }
      })
      .catch(console.error);
  },
};
