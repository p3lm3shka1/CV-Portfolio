// import "dotenv/config";
// import { Translator } from "deepl-node";
// import { readFileSync, writeFileSync } from "fs";

// const AUTH_KEY = process.env.DEEPL_API_KEY;

// if (!AUTH_KEY) {
//   console.error(" DEEPL_API_KEY not found in .env");
//   process.exit(1);
// }

// const translator = new Translator(AUTH_KEY);

// const SOURCE_LANG = "en";
// const TARGET_LANGS = {
//   lt: "LT",
// };

// async function translateValue(text, targetLang) {
//   if (typeof text !== "string" || text.trim() === "") return text;
//   const result = await translator.translateText(text, SOURCE_LANG, targetLang);
//   return result.text;
// }

// async function translateObject(obj, targetLang) {
//   const result = {};

//   for (const [key, value] of Object.entries(obj)) {
//     if (Array.isArray(value)) {
//       result[key] = [];
//       for (const item of value) {
//         if (typeof item === "object") {
//           result[key].push(await translateObject(item, targetLang));
//         } else {
//           result[key].push(await translateValue(item, targetLang));
//         }
//       }
//     } else if (typeof value === "object") {
//       result[key] = await translateObject(value, targetLang);
//     } else {
//       result[key] = await translateValue(value, targetLang);
//     }
//   }

//   return result;
// }

// async function main() {
//   const filePath = "src/data/translations.json";
//   const file = JSON.parse(readFileSync(filePath, "utf-8"));
//   const en = file.en;

//   for (const [langKey, deeplCode] of Object.entries(TARGET_LANGS)) {
//     console.log(`Translating to ${langKey}...`);
//     file[langKey] = await translateObject(en, deeplCode);
//     console.log(`${langKey} done!`);
//   }

//   writeFileSync(filePath, JSON.stringify(file, null, 2));
//   console.log("\n translations.json updated!");
// }

// main();
