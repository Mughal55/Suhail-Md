const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Faizan:faizantechz@cluster0.6bynwff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_45_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICA0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjRGladjduQURiaWxFQm5PRnVybExuS2tRMFJ6eHp2K01hWlZQYVAwekNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2YVFlZ28wclJZNnlBdENHazZNZW5BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3OWVlYThjLWI5MDktNDk1OC05MzdhLWIwZGQ2ZDUwZWRiNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDI0MixcbiAgICAgIDIyMixcbiAgICAgIDEyMCxcbiAgICAgIDExLFxuICAgICAgMTMzLFxuICAgICAgMTYzLFxuICAgICAgMTI0LFxuICAgICAgMTI3LFxuICAgICAgMzMsXG4gICAgICAyMjIsXG4gICAgICAyMTAsXG4gICAgICA2MSxcbiAgICAgIDgzLFxuICAgICAgMjM2LFxuICAgICAgMTk5LFxuICAgICAgNzksXG4gICAgICA2OCxcbiAgICAgIDExNixcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDI1MixcbiAgICAgIDIwNSxcbiAgICAgIDEzLFxuICAgICAgMTg3LFxuICAgICAgNjIsXG4gICAgICAxNDMsXG4gICAgICAxMjgsXG4gICAgICA4MyxcbiAgICAgIDE5MSxcbiAgICAgIDg4LFxuICAgICAgMjQ4LFxuICAgICAgNTQsXG4gICAgICAyMTAsXG4gICAgICA0MSxcbiAgICAgIDIwMixcbiAgICAgIDI1LFxuICAgICAgMTA5LFxuICAgICAgNDcsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlo0M0ZLVE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEyNjgxMzI2MjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ3NDY4MTIxNTQyNzMxOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pTYjNxRUZFSURxd2JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV0ZvY1dxeU1HdW9OMWUrUlV6V2I0OVNMejhYUVlTUlhjZWVUaDRobnhpND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIreTM2SDlTUllQbXQzWXFRMWJLQlJEN1dBQTFGdmkrcFJXbzVXSDZoNUtGbFpLb3VqRUZmclA2dnJWTEJGcWFvbVAzWHg1c01Vano2cGxyWC85NmFEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtUjAyK2pTNC9Nd1lxNy9yek9mNXo5c3VQSU5zaWIxYzNtb2JJbkdML2dwUHBwQWRZVFVzV2dKWGFMSHlJcGlnVlN6WWg3SGFicnFEZW1YcXFlNWVCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMjY4MTMyNjI6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4NDAzMjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFdXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUV1cy5qc29uIjogIntcImtleURhdGFcIjpcInZXWGxlcXFGQzVCangzdkVIcUNOdHpuSit2REc5dUhudW82Y2tkYUdud0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxMjkyNjg2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyODQwMzI3MzYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
