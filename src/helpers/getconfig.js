const config = require("../../config");

/**
 * This section of code is proudly written by Ririko herself (up until a point)
 */

/**
 * @version 2
 * @returns {*|number} PORT Number
 */
const port = () => {
  return process.env.PORT || config.PORT;
};

/**
 * @version 1
 * @returns {*|string} Language
 */
const language = () => {
  return process.env.LANGUAGE || config.LANGUAGE;
};

/**
 * @version 1
 * @returns {*|string} Discord Prefix (e.g: !)
 */
const discordPrefix = () => {
  return process.env.DISCORD_BOT_PREFIX || config.DISCORD.Prefix;
};

/**
 * @version 1
 * @returns {*|string} Discord token
 */
const discordToken = () => {
  return process.env.DISCORD_BOT_TOKEN || config.DISCORD.Token;
};

/**
 * @version 1
 * @returns {*|string} Discord Bot ID
 */
const discordBotID = () => {
  return process.env.DISCORD_BOT_ID || config.DISCORD.ID;
};

/**
 * @version 1
 * @returns {string[]|*|*[]} Array of Discord IDs - Bot Owner
 */
const discordBotOwners = () => {
  try {
    const env = process.env.DISCORD_OWNER_IDS;
    if (env) {
      return env.split(" ");
    } else {
      const cfg = config.DISCORD.Users?.Owners;
      if (cfg.length === 0) {
        return [];
      } else {
        return cfg;
      }
    }
  } catch (e) {
    return [];
  }
};

/**
 * @version 1
 * @returns {[string]|*|*[]} Arrays of Discord IDs - Allowed AI Users
 */
const allowedAIUsers = () => {
  try {
    const env = process.env.DISCORD_AI_ALLOWED_USERS;
    if (env) {
      return env.split(" ");
    } else {
      const cfg = config.DISCORD.Users?.AIAllowedUsers;
      if (cfg.length === 0) {
        return [];
      } else {
        return cfg;
      }
    }
  } catch (e) {
    return [];
  }
};

/**
 * @version 1
 * @returns {*|string} Discord Prefix for AI features (e.g: .)
 */
const AIPrefix = () => {
  return process.env.DISCORD_AI_PREFIX || config.AI.Prefix;
};

/**
 * @version 1
 * @returns {*|string} AI provider
 */
const AIProvider = () => {
  return process.env.AI_PROVIDER || config.AI.Provider;
};

/**
 * @version 1
 * @returns {*|string} AI token
 */
const AIToken = () => {
  return process.env.AI_TOKEN || config.AI.Token;
};

/**
 * @version 1
 * @returns {*|boolean} If AI features allowed for certain users only
 */
const AIEnableWhitelist = () => {
  return process.env.AI_ENABLE_WHITELIST || config.AI.EnableWhitelist;
};

/**
 * @version 2
 * @returns {string[]} Get AI personality
 */
const AIPersonality = () => {
  return config.AI.Personality;
};

/**
 * @version 2
 * @returns {*|string} Get prompts / AI features
 */
const AIPrompts = () => {
  return config.AI.Prompts;
};

/**
 * @version 1
 * @returns {*|string} DB engine
 */
const dbEngine = () => {
  return process.env.DB_ENGINE || config.DATABASE.Engine;
};

/**
 * @version 1
 * @returns {*|string} MongoDB access URI with username, password (optional database name)
 */
const mongoAccessURI = () => {
  return process.env.MONGODB_ACCESS_URI || config.DATABASE.MongoDB.AccessURI;
};

/**
 * @version 1
 * @returns {*|number} Debug Level
 */
const debugLevel = () => {
  return process.env.DEBUG_LEVEL || config.DEBUG.Level;
};

/**
 * @version 1
 * @returns {*|string} The directory to store logs
 */
const logDirectory = () => {
  return process.env.LOG_DIR || config.DEBUG.LogDir;
};

/**
 * @version 2
 * @returns {string|string}
 */
const twitchClientId = () => {
  return process.env.TWITCH_CLIENT_ID || config.TWITCH.clientId;
};

/**
 * @version 2
 * @returns {string|string}
 */
const twitchClientSecret = () => {
  return process.env.TWITCH_CLIENT_SECRET || config.TWITCH.clientSecret;
};

module.exports = {
  port,
  language,
  discordPrefix,
  discordToken,
  discordBotID,
  discordBotOwners,
  allowedAIUsers,
  AIPrefix,
  AIProvider,
  AIToken,
  AIEnableWhitelist,
  AIPersonality,
  AIPrompts,
  dbEngine,
  mongoAccessURI,
  debugLevel,
  logDirectory,
  twitchClientId,
  twitchClientSecret,
};
