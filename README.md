# Verba

**Latin sentence practice from Latin I Honors through AP Latin, with Fēlix the tutor cat.**

**Use it here: https://janavduraikkannan.github.io/verba/**

Part of **[Linguae](https://janavduraikkannan.github.io/linguae/)**, the home page for every language site, with one account for all of them.

Learning Spanish too? [Palabras](https://janavduraikkannan.github.io/palabras/) is Verba's Spanish sister site, with Fēlix's cousin Felicísimo. The same account works on both; XP and levels are separate for each language.

Verba builds fresh Latin sentences from the topics you pick, then has you translate the whole sentence, English to Latin or Latin to English. It checks your answer, tells you exactly what went wrong, and lets you ask Fēlix, an AI tutor, questions about the grammar along the way. It was made for a high school Latin class, and its topics follow the Tennessee course sequence (Latin I Honors, Latin II Honors, Latin III Honors, AP Latin).

> **Privacy, in short:** Verba has no server of its own. Your practice runs in your browser, your AI key goes straight from your browser to the AI company you chose, and nothing is saved anywhere else unless you make an account. If you do, your account and anything you put on the leaderboard are stored with Google Firebase, are **not encrypted**, and **are not private**. Read the full [Privacy Statement](PRIVACY.md) before making an account.

> **Passwords, in short:** optional, and Verba never asks for an email. You log in with your username and password. **A forgotten password can't be recovered**, so keep your account key saved too.

## What it does

- **Topics by course.** Every grammar topic from Latin I through AP Latin, grouped under the class it's taught in. Topics already covered in class are shaded.
- **Build your own sentence type.** Pick a main structure (statement, question, indirect statement, conditional, gapping and more) and the grammar that should appear inside it.
- **Focus.** Press Focus on any topic or sentence ingredient and every sentence will practice at least one focus item, mixing in your other ticked topics. Anything not ticked never appears.
- **Whole-sentence translation.** You type the entire sentence. Word order that doesn't change the meaning never counts against you.
- **Identify the use.** See a highlighted Latin word and name its use (genitive of possession, ablative of means and more), typed for full XP or by multiple choice for half.
- **Extra credit.** After a translation, name the use of one word for bonus XP. Opening that case's chart voids it.
- **Fair macron checking.** A missing macron is pointed out but still counts as correct, unless the macron changes which form the word is.
- **Fēlix, the AI tutor cat.** Ask as many questions as you like. Before you answer, Fēlix judges whether a question gives away too much; after you answer, you can ask anything.
- **Charts and vocabulary.** Ending charts and a vocabulary list for each sentence, shown by default and easy to hide. Click a vocabulary word to insert it.
- **XP, levels and streaks.** Roman ranks from Discipulus to Imperātor, a daily streak, and a Laurea for finishing AP Latin.
- **Optional accounts and a live leaderboard.** A personal account key keeps your progress on every device. You can also set a password and log in with your username instead; the account key always works too.
- **Light and dark mode.**

## Getting started

1. Open the site. Fēlix walks you through setup the first time.
2. Get a free AI key. The site uses it to check answers and to power Fēlix. The [step-by-step guide](https://janavduraikkannan.github.io/verba/getkey.html) shows how to get a free Groq key, and the [keys page](https://janavduraikkannan.github.io/verba/keys.html) lists every provider that works.
3. Pick your topics and start translating.

Verba itself is free. The AI providers it supports all have free options; a few paid providers are supported too if you already have a key.

## Accounts

Accounts are optional. Every account has an **account key** (it looks like `VERBA-XXXX-XXXX-…`), and the key is the account: paste it on any device to log in.

You can also set a **password** in the Account window, or during the welcome tour. Then you can log in on any device with your **username** and password, and everything comes with you: XP, streaks, topics, settings, your profile, and your AI key if you chose to save it to your account.

- **Optional.** The account key always works as a login, with or without a password.
- **No email.** Verba never asks for an email address and never sends any.
- **Your username is your login name.** Usernames are already unique, and capital letters and macrons don't matter, so the username "Fēlīx" can log in as "felix". Usernames are public, which is why a strong password matters.
- **A lost password is gone forever.** There's no "forgot password." If you still have your account key, log in with it and set a new password. If you have neither, the account can't be recovered.
- **Changing it.** Only someone logged in to the account (with the key, or the username and password) can change or turn off its password.
- **Changing your username switches your password off.** You set it again afterwards (the site tells you).
- **Use a password you don't use anywhere else.** Verba can't promise this is secure; see the Privacy Statement.

**How it's stored.** The username and password are stretched together in your browser (PBKDF2-SHA256, 310,000 rounds). Part of the result names a record in Firebase, and the rest encrypts your account key inside that record, so the record doesn't reveal your password or even which username it belongs to. The password is never stored or sent anywhere. Each change to a login record has to prove it comes from the account (a hash chain made from the account key, checked by [`firestore.rules`](firestore.rules)). That's also why a username change switches the password off: the record is built from the username, and Verba can't rebuild it without knowing your password.

## How it works

Verba is a static website hosted on GitHub Pages. There is no Verba server and no build step:

- **The app** is split into small files. Everything outside `site/` is shared with the other Linguae practice sites and identical on each; `site/` holds what is only Verba (see the table below).
- **AI requests** go directly from your browser to the provider whose key you entered (Groq, Google Gemini, OpenRouter, Cerebras, Mistral, Hugging Face, Cohere, OpenAI, Anthropic or xAI).
- **Accounts, password logins and the leaderboard** use Google Firebase (Cloud Firestore). The access rules are [`firestore.rules` in the linguae repository](https://github.com/janavduraikkannan/linguae/blob/main/firestore.rules). Nothing about accounts is stored in this GitHub repository.

### Repository layout

| Path | What it is |
| --- | --- |
| `index.html`, `keys.html`, `getkey.html` | The pages. These are identical on every practice site; Verba's name, cat and wording are filled in from `site/config.js` |
| `css/` | Styles, identical on every practice site (`main.css` for the app, `usemode.css` for the identify-the-use tab) |
| `js/` | The app, identical on every practice site, one file per part: `core.js` (state and saving), `topics.js` (start screen), `ai.js` and `keys.js` (AI providers and keys), `onboarding.js`, `tutor.js` (asking Fēlix), `drill.js` (each new sentence), `check.js` (checking answers), `progress.js` (XP and streaks), `sync.js` and `login.js` (accounts), `leaderboard.js`, `pages.js` (profile and ranks pages), `profile.js`, `identify.js` and `usemode.js` (the identify-the-use tab), `vocab.js`, `widgets.js`, `boot.js` (start-up), plus `head.js` and `site-fill.js` (put the site's own text into the pages) |
| `site/` | Everything that is only Verba: `config.js` (names, wording, courses, ranks, profile pictures), `cat.js` (Fēlix's personality and the AI prompts), `language.js` (how Latin behaves in the shared code: typing accents, charts, marking words), `engine.js` (the Latin sentence engine and answer checker), `uses.js` (extra uses for the identify-the-use tab) and `theme.css` (colours) |
| `img/felix/` | Fēlix, in every mood |
| `img/icons/` | Interface icons |
| `media/` | The key tutorial video, its captions and poster |
| `tools/felix.py` | The script that draws Fēlix |
| `tools/sync_shared.py` | Copies the shared files (everything outside `site/`) from Verba to Palabras, Mots and Wörter; `--check` only reports differences. Change shared code here, then run it |
| `unused/` | Older artwork and resources, kept on purpose but not used by the site |

## Privacy

See the full **[Privacy Statement](PRIVACY.md)**: what Verba stores, who can see it, what the site's owner can see, and which other companies are involved.

## Contributing and issues

Suggestions, bug reports and pull requests are welcome, but **none are guaranteed to be read, answered or accepted**. Anything submitted may be checked and manually approved at the owner's discretion. See **[Contributing](CONTRIBUTING.md)** for details.

**Never post an account key, a password or an AI key in an issue or pull request.**

## Credits

- Icons by Lorc and Delapouite from [game-icons.net](https://game-icons.net), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) (see `img/icons/LICENSE-game-icons.txt`).
- Day and night switch after Adam Argyle, "Building a theme switch component" ([web.dev](https://web.dev/articles/building/a-theme-switch-component), Apache 2.0), with a sun from [Feather Icons](https://feathericons.com) (MIT) and easings from [Open Props](https://open-props.style) (MIT).
- Confetti by [canvas-confetti](https://github.com/catdad/canvas-confetti) (ISC).
- Profile pictures of Roman figures and places come from [Wikimedia Commons](https://commons.wikimedia.org); each picture's author and license are shown on the site.
- Fonts: Fraunces, Figtree and Gentium Book Plus, from [Google Fonts](https://fonts.google.com) (SIL Open Font License).
- Older artwork in `unused/fluent-emoji/` is [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji) (MIT).
- Fēlix was drawn for Verba.

## License

No license has been chosen for Verba's own code and artwork yet, so all rights are reserved by the owner. The third-party pieces listed under Credits keep their own licenses.
