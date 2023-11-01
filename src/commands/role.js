const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('role')
    .setDescription('Roles a custom dice')
    .addStringOption(option =>
      option
        .setName('dice')
        .setDescription('What type of dice to role')
        .setRequired(true)
    ),
  async execute(interaction) {
    const [numDice, numSides] = interaction.options.getString('dice').split('d').map(Number);
    let total = 0;
    let results = [];

    if (isNaN(numDice) || isNaN(numSides) || numDice < 1 || numDice > 30 || numSides < 1 || numSides > 1001) {
      await interaction.reply('Invalid input. Please enter a valid input in the format "NdS", where N is the number of dice and S is the number of sides.');
      return;
    } else {
      console.log(`Rolling ${numDice}d${numSides}:`);
      for (let i = 0; i < numDice; i++) {
        const result = Math.floor(Math.random() * numSides) + 1;
        total += result;
        results.push(result);
      }
    }

    await interaction.reply(`\`\`\`${total} - ${numDice}d${numSides} (${results.join(' ')})\`\`\``);
  },
};
