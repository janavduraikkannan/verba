# Verba Privacy Statement

*Last updated: November 4, 2026 (AI relay added)*

This page explains, as plainly as possible, what information Verba stores, where it goes, and who can see it. Verba is a free practice site made by a student for a Latin class. It is not run by a company, a school or a school district.

## Our honest promise

Verba keeps as little about you as it can, and tells you plainly about everything it does keep. **Verba cannot promise that anything you give it is private or secure.** Verba has no database server of its own (only a small relay that passes AI requests along without saving them), no staff, and no way to encrypt your data. Your practice happens in your own browser. If you choose to make an account or join the leaderboard, that information is stored with Google Firebase, is not encrypted, and can be seen by the site's owner and, for leaderboard information, by anyone. Other companies you connect to through Verba, such as the AI company that checks your answers, have their own privacy policies, and Verba cannot make any promises about what they do. **Only give Verba information you would be comfortable with anyone seeing.** Never type your address, your phone number or other personal details into Verba, and never use a password for Verba that you use anywhere else.

## At a glance

| Information | Where it's kept | Who can see it |
| --- | --- | --- |
| Your progress and settings (without an account) | Only in your browser | Only you, on that browser |
| Your AI key (not saved) | Nowhere; it is only used while the page is open | The AI company it belongs to. With the relay on, it also passes through the Verba relay, which doesn't save it |
| Your AI key (saved to this browser) | Your browser, as plain text | Anyone who can use your browser |
| Your AI key (saved to your account) | Google Firebase, as plain text | Anyone with your account key, and the site's owner |
| Your account (progress, settings, full profile) | Google Firebase, not encrypted | Anyone with your account key or your username and password, and the site's owner |
| Your password (only if you set one) | Nowhere; only a scrambled, one-way form is kept | No one |
| Your leaderboard entry and public profile | Google Firebase, public | **Anyone on the internet** |
| Sentences, your answers and your questions to Fēlix | Sent to the AI company you chose (through the Verba relay, unless you switch it off) | That company, under its own policy. The relay passes them along without saving them |

## What Verba stores

### In your browser

Verba saves these in your browser's local storage, on your device only:

- Your XP, level, daily and weekly streaks, and the date you started.
- Your chosen topics, exercise settings, sentence-builder choices and light or dark mode.
- Whether you've finished the welcome tour, and whether you've switched the AI relay off.
- Your AI key or keys and their order, **only if** you tick "Remember key(s) on this browser." They are stored as plain text.
- Your account key, if you have signed in on this browser.
- Your profile details, if you have filled any in.
- A small cache of other students' leaderboard pictures, so the leaderboard loads faster.

Verba does not use cookies, advertising, analytics or tracking of any kind. You can erase everything Verba keeps in your browser by clearing this site's data in your browser settings. If you haven't saved your account key somewhere else, clearing it means you can't get back into your account.

### In an account (optional)

Accounts are optional. An account is one document in Google Firebase (Cloud Firestore), named after your account key. It contains:

- Your progress: XP, streaks, the date you started, and which lessons and lesson questions you've completed.
- Your settings: topics, exercise choices and sentence-builder choices.
- Your whole profile, including your first and last name if you entered them, even if you chose not to show your name on the leaderboard.
- Your AI key or keys, **only if** you tick "Save key(s) to my account." They are stored as plain text.

**Your account key, and your username and password if you set one, are the only things protecting your account.** Anyone who has your key, or your username and password, can open, read and change your account. Keep them private, and never post them anywhere.

### Password login (optional)

You can set a password so you can log in with your username instead of your account key. Your account key keeps working either way. **Verba never asks for an email address.**

- **Your username is your login name.** Usernames are public (they're on the leaderboard and in profile links), so anyone can see the name you log in with. Only your password keeps others out.
- **Your password is never stored.** Your browser stretches your username and password together into a scrambled code. Part of that code names a small login record in Google Firebase, and the rest locks your account key inside it. Your password can't be read from the record. Logging in recomputes the code; a wrong password simply finds nothing.
- **A lost password can't be recovered.** There is no "forgot password," and the site's owner can't reset it either. If you still have your account key, log in with it and set a new password. If you lose both, the account is gone.
- **Only someone logged in to the account can change or turn off its password.** The rules check this using your account key.
- **Changing your username switches your password off**, and you set it again.
- **This is not bank-level security.** Someone could try guessing your password. Use a long password you don't use anywhere else. Verba is a free project and can't promise your account is safe.

### On the leaderboard and your public profile (optional)

If your account is on the leaderboard, a separate public entry is stored in Google Firebase. It is named with a scrambled version of your account key, so it never reveals the key itself. It contains:

- Your XP, this week's XP, your current and best streak, and the dates of your last practice and when you started.
- Anything you add to your profile: display name, username, school, current Latin course, profile picture (a Roman figure or landmark from Wikimedia Commons, or a small copy of a picture you upload), bio, motto and banner.
- Your first and last name, but only if you chose to share it with students at your school or with everyone.

**All of this is public.** It can be read by anyone on the internet who knows how to look, **even if you chose "only students at my school."** That setting only changes what the Verba leaderboard shows; it does not hide the information. A picture you upload is shrunk to a small square and stored with your entry, where anyone can see it.

You can turn your leaderboard entry off at any time in your account settings. Doing that clears your profile details from the public entry. Verba's rules do not let anyone, including you, fully delete an entry or an account from the site itself; see [Deleting your information](#deleting-your-information).

### Usernames

Each username can belong to only one student. Verba keeps a public list matching each username to the leaderboard entry that owns it.

## Shared with Palabras

Verba and [Palabras](https://janavduraikkannan.github.io/palabras/) (the Spanish sister site) use one account system. Your account key, username, password login, profile and any AI keys saved to your account are shared by both sites. XP, levels, streaks, topics and course are separate for each language, and each site has its own public leaderboard entry (same scrambled name and username). Spanish progress is stored in its own section of your account document. See the Palabras Privacy Statement for details.

## What the site's owner can see

The owner of Verba runs the Firebase project and can see **everything stored in it**: every account (including full names and any AI keys saved to accounts), every leaderboard entry, and every username. The owner cannot see what is only in your browser, cannot see AI keys you haven't saved to an account, and does not receive your conversations with Fēlix. The relay's code passes AI requests and AI keys along without saving or logging them. In principle the owner could change that code, so the code is public in the Verba repository ([relay/worker.js](https://github.com/janavduraikkannan/verba/blob/main/relay/worker.js)) for anyone to check.

The owner will not sell your information or use it for anything except running Verba. Because Verba is a free project run by one student, it cannot offer the protections a company or school system can.

## Other companies Verba uses

Verba relies on other companies to work. When your browser talks to them, they receive your IP address and basic browser information, and they handle it under their own privacy policies, not this one.

### Hosting and accounts

- **GitHub** hosts the website and may keep visitor logs, including IP addresses. [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- **Google Firebase (Cloud Firestore)** stores accounts, the leaderboard and usernames, and may keep request logs. [Firebase privacy](https://firebase.google.com/support/privacy) · [Google Privacy Policy](https://policies.google.com/privacy)

### The Verba AI relay

When the relay is on (it is unless you switch it off), your browser sends each AI request, including your AI key, to a small program run for Verba on **Cloudflare Workers**. The relay forwards the request to the AI company and passes the answer straight back. It only accepts requests from the practice sites at janavduraikkannan.github.io, only forwards them to the AI companies listed below, and does not save or log the request, the answer or your key. Cloudflare runs the computers it works on and may keep basic request logs, such as your IP address. [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/)

To stop using the relay, untick "Send AI requests through the Verba relay" under the AI key box. Your browser then talks to the AI company directly. If the relay ever stops working, your browser also falls back to talking to the AI company directly.

### Things the page loads

- **Google Fonts** provides the fonts. [Google Fonts privacy](https://developers.google.com/fonts/faq/privacy)
- **jsDelivr** provides the confetti code. [jsDelivr privacy policy](https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net)
- **Wikimedia Commons** provides the preset profile pictures and their credits. [Wikimedia privacy policy](https://foundation.wikimedia.org/wiki/Policy:Privacy_policy)

### AI companies

When an answer needs checking or you ask Fēlix a question, your browser sends that sentence, the correct answer, the vocabulary, your answer, your question and your earlier questions about that sentence **to the AI company whose key you entered**, through the Verba relay unless you switch it off. The relay passes them along without saving them, so Verba never keeps these requests. Only the company you chose receives them, and it may store them, review them or use them to improve its products, depending on its policy and on whether you use a free plan. **Free plans often allow more use of your data.**

| Company | Privacy policy |
| --- | --- |
| Groq | [groq.com/privacy-policy](https://groq.com/privacy-policy/) |
| Google Gemini | [Gemini API terms](https://ai.google.dev/gemini-api/terms) · [Google Privacy Policy](https://policies.google.com/privacy) |
| OpenRouter | [openrouter.ai/privacy](https://openrouter.ai/privacy) |
| Cerebras | [cerebras.ai/privacy-policy](https://www.cerebras.ai/privacy-policy) |
| Mistral AI | [mistral.ai/terms](https://mistral.ai/terms) |
| Hugging Face | [huggingface.co/privacy](https://huggingface.co/privacy) |
| Cohere | [cohere.com/privacy](https://cohere.com/privacy) |
| OpenAI | [openai.com/policies/privacy-policy](https://openai.com/policies/privacy-policy/) |
| Anthropic | [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy) |
| xAI | [x.ai/legal/privacy-policy](https://x.ai/legal/privacy-policy) |
| Gonka Broker | [gonkabroker.com](https://gonkabroker.com) (requests are run on GPUs operated by independent hosts in the Gonka network) |

When you sign up for an AI key, the email and details you give go to that company, not to Verba.

## Students and age

Verba is meant for high school Latin students.

- Some AI companies require account holders to be 18 or older. Groq's rules do. If you are under 18, ask a parent or guardian to create the key with you.
- Use a personal email to sign up for an AI key, not a school email, unless a teacher or other school staff member has said it's OK.
- Accounts and the leaderboard are optional. You can use every practice feature without one.
- Don't put your real name, school or picture on the leaderboard unless you, and a parent or guardian if you're under 18, are comfortable with it being public.

## Keeping your information safe

- Keep your account key private, like a password, and store a copy somewhere safe, even if you also set a password.
- If you set a password, pick one you don't use for anything else.
- Only save AI keys to your browser on a device that only you use.
- Never put personal details into the chat with Fēlix or into your profile.
- If you think someone knows your password, log in and change it in the Account window. If you think someone else has your account key, stop using that account and make a new one. If an AI key may have leaked, delete it on that company's website and make a new one.

## Deleting your information

- **In your browser:** clear this site's data in your browser settings.
- **On the leaderboard:** turn the leaderboard off in your account settings. This clears your profile from the public entry.
- **Your password login:** click "Turn off password login" in the Account window. This switches off the login record.
- **Your account and leaderboard entry:** you can't delete these yourself from the site. Ask the site's owner to delete them. Don't post your account key publicly to do this.
- **With an AI company:** follow that company's own instructions.

## Changes

If Verba starts storing something new, this page will be updated first. The date at the top shows the last change. The full history of this page is public in this repository.

## Questions

Questions about privacy can be sent to the site's owner through this repository's [issues](https://github.com/janavduraikkannan/verba/issues). **Never include an account key, a password, an AI key, or other personal details in an issue,** because issues are public.
