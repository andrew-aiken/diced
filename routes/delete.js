const { REST, Routes } = require('discord.js');
// const { clientId, guildId, token } = require('./config.json');
const dotenv = require('dotenv');
dotenv.config();

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// for global commands
rest.delete(Routes.applicationCommand(process.env.ID, '1039588147824181369'))
  .then(() => console.log('Successfully deleted application command'))
  .catch(console.error);
