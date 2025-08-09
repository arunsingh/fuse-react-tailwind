### RFC-006: BrowserStack Matrix & CI Hook

Goals
- Define device/OS/browser matrix (~3,000 combos) and nightly smoke runs

Plan
- Document matrix CSV, derive subsets for PRs (top 20) and nightly (full)
- Integrate BrowserStack Automate via GitHub Actions with secrets: BROWSERSTACK_USERNAME, BROWSERSTACK_ACCESS_KEY
- Use Playwright or WebDriver tests; start with a smoke suite

CI
- Add workflow job `browserstack-smoke` triggered nightly; summarize failures in PR comments


