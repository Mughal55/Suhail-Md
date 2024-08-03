const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ismailamir4897:<CHKFhkLBbuHUnq7V>@cluster0.xxkwj2r.mongodb.net/"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923126813262";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_22_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDczLFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDgwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAwLFxuICAgICAgICAxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDQyLFxuICAgICAgICAzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqbGUyTE92dkszTmRPT0dqdUFUNkd4NnRTUFBNUmJiTVhPUFF1cEx2VkpVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4bVlVYjZMT1JwZXc5MWtyMV9sd3JBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZkZTYzMTgzLTIwNmEtNGYxOC04ODU1LWNkYTI1MzgwZDgwOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxNTMsXG4gICAgICAxMTksXG4gICAgICAyMzksXG4gICAgICAyMDEsXG4gICAgICAxMzYsXG4gICAgICAxMixcbiAgICAgIDk5LFxuICAgICAgOTIsXG4gICAgICAxMzcsXG4gICAgICAxOSxcbiAgICAgIDYxLFxuICAgICAgMTY3LFxuICAgICAgMjU1LFxuICAgICAgMjA3LFxuICAgICAgMTk4LFxuICAgICAgMTM3LFxuICAgICAgMTYxLFxuICAgICAgNDMsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTU2LFxuICAgICAgMTUzLFxuICAgICAgMzQsXG4gICAgICA3MCxcbiAgICAgIDE1MCxcbiAgICAgIDI1MCxcbiAgICAgIDIxMSxcbiAgICAgIDE4MCxcbiAgICAgIDIwNixcbiAgICAgIDIwNyxcbiAgICAgIDIyOSxcbiAgICAgIDQxLFxuICAgICAgNTcsXG4gICAgICA3MixcbiAgICAgIDEyOSxcbiAgICAgIDI0NixcbiAgICAgIDUsXG4gICAgICAyNTAsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkdQWUc2M0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEyNjgxMzI2Mjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDc0NjgxMjE1NDI3MzE6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNN1YyOWtIRUtYOXRyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVxd25CQnJsY0pCNVRVMUo1a3hQcW1MVHZkdGdPUlZ0b29lUGdFT3U0Vk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiby9PemxHMnVTb20rTHlsL3UzeXVsY0lLNnlnWDdwVk5BUlRBbnFtb3R0amV0S3RCZE9rS1BSeWZkMHZhaWoyR0swZjNnZDAzUDFPMG40NUV5blFQRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibjArWnNHMXBmSG5iNGpHY1hpZU1GMXNmNTRVdnQraFh0TU5vc0dyaFN6M2YxbVlFbXVodjQ5elNMcno5ZWtYaTVVTXc4Vml2Wmdxd1gvYUc2cERrQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTI2ODEzMjYyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NjI1NjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIUTdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhRNy5qc29uIjogIntcImtleURhdGFcIjpcImZja0thVjRUamhpM3lQdll1alNhcFVxaCs0SnJnekZjbzJqQ09OeWhlVkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2NzE5NjYyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Umer Md",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
