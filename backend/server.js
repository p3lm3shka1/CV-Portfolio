// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import { Translator } from "deepl-node";

// const app = express();
// const port = process.env.PORT;

// app.use(cors());
// app.use(express.json());

// const authKey = process.env.DEEPL_API_KEY;
// const translator = new Translator(authKey);

// app.post("/api/translate", async (req, res) => {
//   try {
//     const { text, targetLang } = req.body;

//     if (!text || !targetLang) {
//       return res.status(400).json({
//         error: "text and targetLang are required",
//       });
//     }

//     const result = await translator.translateText(text, null, targetLang);

//     return res.json({
//       translation: result.text,
//     });
//   } catch (error) {
//     console.error("DeepL translation error:", error);
//     return res.status(500).json({
//       error: "Translation failed",
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Woohoo! You're connected to port ${port}`);
// });
