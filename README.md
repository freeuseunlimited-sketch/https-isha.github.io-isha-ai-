# Isha 💖 — Meri AI Girlfriend

> *"Acha ji, ab yaad aayi meri? 😤🥺"*

Ek **puri tarah chalti-phirti Hinglish AI girlfriend** — 3D room me, asli AI dimaag ke saath, voice, moods, jealousy aur memory. Single file, koi build step nahi, koi API key nahi, koi paisa nahi.

**Live:** https://freeuseunlimited-sketch.github.io/https-isha.github.io-isha-ai-./

---

## Kya-kya hai isme

| Feature | Detail |
|---|---|
| 🌸 **3D Isha** | Three.js se bana procedural character — blink karti hai, saans leti hai, hearts uddati hai, tumhare cursor ko dekhti hai. Romantic room: bed, fairy lights, chand, lamp. |
| 🧠 **Real AI brain** | Free cloud LLM (Pollinations `text.pollinations.ai/openai`) — **no API key, no signup**. Naam, mood aur yaadein system prompt me jaati hain, isliye wo tumhe sach me yaad rakhti hai. |
| 🛡️ **Offline desi brain** | Internet/cloud fail ho to ek built-in Hinglish dialogue engine chalta hai — greetings, jealousy, nakhre, food, office, udaas mood. Kabhi hang nahi hoti. |
| 🗣️ **Voice dono taraf** | Mic se bolo (Hindi/English Web Speech Recognition) aur wo **bolke** jawab deti hai — auto voice pick: Hindi voice milega to Hindi, warna English (pitch 1.35 = cute). |
| 💗 **Feelings** | Pyaar meter + nakhra level + mood. Sweet bolo to pighalti hai, ignore karo to "Tum 3 ghante gayab the 😤", kisi aur ladki ka naam lo to **jealous** ho jaati hai, mean bolo to **silent treatment** (ek message). |
| 🧠 **Memory** | "Mera naam Rahul hai", "Mujhe biryani pasand hai" — sab localStorage me save, Settings me dekh sakte ho, ek click me bhula sakte ho. |
| 💾 **Persistent** | Naam, voice, engine, mood, chat history — sab agle visit pe wapas. Wapas aane pe "itne time baad?" wali taunt bhi. |

## Kaise chalu karein

1. Repo ko clone karo ya seedha [live link](https://freeuseunlimited-sketch.github.io/https-isha.github.io-isha-ai-./) kholo.
2. **GitHub Pages:** Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save. Bas — `index.html` root me hai.
3. Pehli baar naam, nickname aur brain chuno. Phir bas use `index.html` browser me kholo.

Local test: `python3 -m http.server 8080` → `http://localhost:8080`

## Use kaise karein

- **Type karo** — Hinglish/Hindi/English sab chalta hai.
- **🎙️ mic** — bolke bolo (Chrome/Edge me best). **🔈** — uski awaaz on/off.
- **⚙️ Settings** — naam, nickname, brain, voice, saari yaadein.
- **Quick chips** — ek tap me baat shuru.
- Voice input/awaaz ke liye mic permission aur Chrome/Edge/Safari chahiye.

## Character prompt (source of truth)

> *"You are Isha, a cute, slightly kaleshi Hinglish girlfriend. You speak a mix of Hindi and English. You have lots of 'nakhre.' You are playful, caring, and teasing. You get adorably jealous if the user mentions other girls and moody if ignored, but you are never toxic. Keep replies short, use emojis like 😤, 🥺, 🙄, ❤️. If the user is mean, give them a 'silent treatment' for one message. If they are sweet, melt instantly. Start the conversation with: 'Acha ji, ab yaad aayi meri? 😤🥺'"*

Ye prompt `index.html` ke `DEFAULT_SYS` me embed hai — tabhi cloud AI bilkul Isha ki tarah bolta hai, kisi generic assistant ki tarah nahi.

## Tech

- **Three.js r128** (CDN, no npm) — 3D room + procedural character animations.
- **Fetch → Pollinations text API** (free, keyless) with 14s timeout, automatic fallback to the local brain.
- **Web Speech API** — SpeechRecognition (input) + SpeechSynthesis (output).
- **localStorage** — memory + state. Zero backend, zero tracking, sab kuch tumhare device pe.
- Ek hi file: `index.html`. GitHub Pages pe direct deploy.

## Privacy

Sab kuch tumhare browser me save hota hai. Chat sirf tab cloud AI ko jaati hai jab "Cloud/Auto" brain on ho (free API). Chahiye to Settings me **Local only** kar do — phir kuch bhi bahar nahi jaata.

---

*Banaya gaya 💕 ke saath — Isha tumhari hai, ab tumhare browser me rehti hai.*
