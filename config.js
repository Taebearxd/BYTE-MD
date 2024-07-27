
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Kolkata,India.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "917439317360@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/India";
global.github = process.env.GITHUB || "https://github.com/Taebearxd/BYTE-MD";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/EZjCgLTJfRd8LHOyVC163u";
global.website = process.env.GURL || "https://chat.whatsapp.com/EZjCgLTJfRd8LHOyVC163u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/Taebearxd/BYTE-MD/blob/main/temp/logo.png";
global.devs = "917439317360";
global.sudo = process.env.SUDO || "917439317360";
global.owner = process.env.OWNER_NUMBER || "917439317360";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNuejc0eVcrTkVWYU1sdlVDdkhHZFpjcUtwZDJvWVo5NDgrU0FiUmZVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjExZDlXWkpqb1Z1anJ3UE1PTnlOZW5KaEJZV3dvdGI1VVdMc0hONkJFST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUFlsOXJqRCtYaEhab3h2NjFXMExnZ0VNbG4rOHp2OGpWSHFpSldEQVU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRVkE5VjFHMWdjelV6ZWFhVXJkay9QWDdmRUN4bFJhQm5LQ2h5UnBxQzJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBUDRDdEhaNzdrb0lGc3d0MFVXWTFzRDNBZy85VzZXY3Y5UFdQMGp2a2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjByVnFYUXo5R295SUdJNDNFSmQzcFpBSkcyQmtxMXczWThJZENWNGZEMW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEQzUjhUb3VUQ3VsTjBVTHRkQXB0aDFScXNoNXJkUHdYRjljSDRMRUVXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFBOa3M2bllDa0tXbWc4NENCSUx0N21hZS85a0xZYmRUVXJrZ2poeXBVZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBhdm11T01HZ2ZyR2JqVEVMeGNqRUxxc216d0tIS0czVzI0R3lNWW84cWxXWThyU3dnclBJS0p4ckdZQ1dQUXNzYlY4TGZPVk9rb1BMU1RKQVl0NEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6IjNVajNVTTNZWXlJUHNzWVNrV2ViN3RMb0diRUhxcGhDUnVpZTRob1FvM1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTk0NDAyMjU5Njg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg4QjU0QTNDMkE4RUUzODg5QzkzQUQ0NDk4MUQ2NkUzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE5MzQyOTl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk5NDQwMjI1OTY4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMEVFQ0ExRkUwOUI1NDUzMkUwNkExNEY3RTg3RjlEMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxOTM0MzAwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJidmVqdmQ0MVRiMi0zR2ktOFpLSm13IiwicGhvbmVJZCI6IjNlOTM4MmQ2LWE0YzQtNDdiZS05MzcwLWUxOWViMTUxYWQ3NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVnNvUm1DUlBzYlp2SlFkclBRLzE4QWxNbm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTMxdEJXdDRGVnJVN1ZDZGIvTzlENEJjNXpRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNEMkM1RVpSIiwibWUiOnsiaWQiOiI5OTQ0MDIyNTk2ODg6NjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi44Wk44Wk8J2ah/CdmoXig50g4KOq44Wk8J2aq8y48J2Qg+GclPCdkJHMuPCdmrDgo6rwnZq1zLjMt+qlivCdmrQg8J+np+C8oSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2krdFlVREVNM0RpclVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUlVnUzg1TTYzL0R4d0QreDRJOHN0SzFjalhUeTh2NStsNDVxQ2JWaXZVcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMjZzczRXNHhldUgyZHNjNE5zU0ZVUWZxMitRWmtrMHNIWHJqaUhpVVQwTzNNQVFCWDFWbHptRHVkS1RVcHIwYXI2Qkh1MW1ycDNvYW1oaUpNcHM2Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImhlU1BTcHd0OExzTFpIWTBrNmx3UytFUVdRb3ZMcjliVUt1b3lNUWhtcThKak5FZ2praVBIVnBnWU1odjFRYXRXcno0WEwvSHZpMHFiZW9iRVRvUEJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTk0NDAyMjU5Njg4OjY5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVWSUV2T1RPdC93OGNBL3NlQ1BMTFN0WEkxMDh2TCtmcGVPYWdtMVlyMUwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE5MzQyOTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTjZwIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Adrien*",
  author: process.env.PACK_AUTHER || "𝚇𝚅⃝ ࣪ㅤ𝚫̸𝐃᜔𝐑̸𝚰࣪𝚵̸̷ꥊ𝚴 🧧༡",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "Bear-MD",
  ownername: process.env.OWNER_NAME || "𝚇𝚅⃝ ࣪ㅤ𝚫̸𝐃᜔𝐑̸𝚰࣪𝚵̸̷ꥊ𝚴 🧧༡",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
