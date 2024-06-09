const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348076815336";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_09_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZnJMbTdvKzgxbzBqZEo4NmdDUUtrZHF5RmVOTWZUZ25rTU5vQVcwcGE2dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0ZMWW5yMTVSNy1YWUIxOUR3OU1hZ1wiLFxuICBcInBob25lSWRcIjogXCI5OGMzZTEwNy04MTFiLTQ0ZmItYjIzYS1hY2UyMGM4OWM3ZGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAxNjUsXG4gICAgICAyNTIsXG4gICAgICA4MSxcbiAgICAgIDE5LFxuICAgICAgMjEwLFxuICAgICAgMTcwLFxuICAgICAgMTU5LFxuICAgICAgMTUyLFxuICAgICAgMTUxLFxuICAgICAgOTUsXG4gICAgICAyNCxcbiAgICAgIDEwNyxcbiAgICAgIDE1MyxcbiAgICAgIDEzOSxcbiAgICAgIDE4OSxcbiAgICAgIDExNSxcbiAgICAgIDI0MixcbiAgICAgIDE1MSxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICA3LFxuICAgICAgMTUwLFxuICAgICAgMjQ2LFxuICAgICAgODEsXG4gICAgICAzMixcbiAgICAgIDIzMixcbiAgICAgIDcsXG4gICAgICA3NixcbiAgICAgIDIwNSxcbiAgICAgIDE3MixcbiAgICAgIDI1MyxcbiAgICAgIDE3MyxcbiAgICAgIDcsXG4gICAgICA4MSxcbiAgICAgIDQsXG4gICAgICA2LFxuICAgICAgMjQ2LFxuICAgICAgMTA1LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBXTUdTRURMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc2ODE1MzM2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3OTQzMDcyMzMwOTY2MDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04vZTJyMERFTCtCbExNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicUtLSEs4V0I2SDZhTUhweHl6NmtwbWR0dXZSNXJLTFdOaVN4a2kvWlRVdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHbUY2TUZwU3JOZXR2OUthWFZuRkpFVFdOY2IrWlNKZzlhM0NPby9leGhJYmh5WnBPSlV3MU15WFl6UU1ZRDBWaDdYRGYxZytIRXQ5SjgzdCtmQlhBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnRndHQTlMZ2F6OGxTazF1dVJ6aXlJdGMzZW9wVkRBMFNQL0x1UE9wS0lSRnVYeThZTytPVzhrRzhaSkVtK2t2cnV5ZmxDRUVsWVlBZWZKRy9WUXhBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc2ODE1MzM2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODk1MzYzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
