# LeagueVault

Desktop account manager for League of Legends: ranks, LP history, recent games, champion stats, live game scouting and fast account switching for Windows.

**Download:** [LeagueVaultSetup.exe](https://github.com/DevEpsilon/LeagueVault-Releases/releases/latest/download/LeagueVaultSetup.exe) (Windows 10/11). The app updates itself when a new version is published here.

Windows may show a SmartScreen warning because the installer isn't code-signed yet. Click **More info → Run anyway**.

## Riot API access

LeagueVault needs Riot API access to load ranks and games. Either paste your own key from [developer.riotgames.com](https://developer.riotgames.com/) in Settings, or use an invite code if you were given one.

Your accounts, passwords and API key stay on your PC, encrypted with Windows. Nothing is uploaded.

## Privacy

See the [privacy policy](privacy.md). In short: your data stays on your PC; Riot API requests go to Riot directly or through the invite-code relay.

## Report a problem

Open an issue in this repository with what happened. In the app, Settings → Help → **View error log** and Settings → Riot & client → **Export client diagnostics** produce files you can attach (secrets are removed).

---

LeagueVault isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.


## Website preview

The landing page is a static website: no build step or dependencies. From this directory, run:

```powershell
node preview-server.cjs
```

Open http://127.0.0.1:4173. Stop the preview with Ctrl+C. You can also open index.html directly.

The screenshots in `assets/shots/` are real captures of the app running with its built-in sample accounts (`backend/demoData.js`), with the setup banners hidden. Retake them when the app's look changes. The tour switches pages with arrow keys, Home and End. Motion respects the system's reduced-motion setting.

Publish index.html, styles.css, site.js, privacy.html and assets/ together through the repository's existing GitHub Pages deployment. privacy.md remains the policy source. Download links use GitHub's latest-release URL, so they follow whichever release is marked Latest (prereleases are skipped). Update the version label in index.html when you publish a new release.
