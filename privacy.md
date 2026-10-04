# LeagueVault privacy policy

Last updated: 4 October 2026

LeagueVault is a free hobby project. It has no accounts, no ads and no analytics.

## What stays on your computer

Everything you put in LeagueVault: account usernames and passwords, saved Riot Client sessions, your Riot API key, notes, tags, settings, and the ranks and match data downloaded for your accounts. Passwords, sessions and keys are encrypted with your operating system's encryption (Windows DPAPI or the macOS Keychain), and optionally with your own lock password. None of it is uploaded anywhere by LeagueVault.

## What leaves your computer, and to whom

- **Riot Games API.** To show ranks and matches, LeagueVault sends Riot IDs, account identifiers (PUUIDs) and match IDs to Riot's API, either directly with your own API key, or
- **through the LeagueVault relay** if you use an invite code. The relay (a Cloudflare Worker run by the LeagueVault developer) forwards the same requests to Riot, caches Riot's responses for a short time so repeated requests are cheaper, and sees your invite code. It never receives passwords, sessions or anything about your League client. Cloudflare may keep standard request logs (such as IP addresses) as described in Cloudflare's own privacy policy.
- **Riot Data Dragon and Community Dragon** for champion, item and rank images.
- **GitHub** when the app checks for updates (a normal download request), or when you choose to report a problem (you see and submit the report yourself on github.com).
- **Stats websites** (OP.GG, League of Graphs, u.gg, and others) only when you click a link to them; they open in your browser.

## Your League client

On Windows, LeagueVault talks to the Riot Client and League client running on your own computer (to sign in, read your account's data, and use profile tools). This stays on your computer.

## Deleting your data

Settings → Security → **Delete everything** removes all LeagueVault data from your computer. Uninstalling keeps your data so reinstalling doesn't lose it; delete it first if you want it gone.

## Contact

Open an issue at https://github.com/DevEpsilon/LeagueVault-Releases/issues

LeagueVault isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
