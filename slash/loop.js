const { SlashCommandBuilder } = require('@discordjs/builders');
const { QueueRepeatMode } = require('discord-player');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('loop')
    .setDescription('Go into a loop mode')
    .addStringOption((option) =>
      option
        .setName('mode')
        .setDescription('The loop mode you want')
        .setRequired(true)
        .addChoice('OFF', 'OFF')
        .addChoice('Queue', 'QUEUE')
        .addChoice('Track', 'TRACK')
    ),
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guildId);

    if (!queue) return await interaction.editReply('There are no songs in the queue');

    if (queue) {
      const loop = interaction.options.getString('mode');
      if (loop === 'OFF') {
        const queueMode = await queue.setRepeatMode(QueueRepeatMode.OFF);
        return await interaction.editReply(
          queueMode ? `Successfully set the loop mode to ${loop}` : `Command failed...`
        );
      } else if (loop === 'TRACK') {
        const queueMode = await queue.setRepeatMode(QueueRepeatMode.TRACK);
        return await interaction.editReply(
          queueMode ? `Successfully set the loop mode to ${loop}` : `Command failed...`
        );
      } else if (loop === 'QUEUE') {
        const queueMode = await queue.setRepeatMode(QueueRepeatMode.QUEUE);
        return await interaction.editReply(
          queueMode ? `Successfully set the loop mode to ${loop}` : `Command failed...`
        );
      }
    }
  },
};
