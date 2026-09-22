# Privacy Policy for NivCraft

**Effective date:** 19 September 2026
**Last updated:** 19 September 2026

NivCraft ("NivCraft", "we", "us", or "our") provides a paper-trading, market-learning, watchlist, signal-scanning, analytics, and community application. This Privacy Policy explains how the NivCraft mobile application and its related services collect, use, disclose, retain, and protect information.

NivCraft is operated by the developer identified for NivCraft in its Google Play listing. For privacy questions or requests, contact **support@nivcraft.in**.

## 1. Scope

This Policy applies to NivCraft's Android application, backend APIs, legal pages, support channels, and related services. Third-party websites and services you choose to open or that operate inside the app, including broker, advertising, payment, and authentication services, apply their own privacy policies.

## 2. Information we collect

Depending on the features you use and the features currently enabled, we may process:

- **Account and profile information:** Firebase user identifier, name, email address, phone number (if phone login is enabled), profile photo, role, login timestamps, account creation and deletion timestamps, and a one-way account-identity hash derived from the sign-in email address or phone number. We use this hash for account restoration, entitlement integrity, referral-abuse prevention, and duplicate-reward prevention. We do not collect biometric identifiers or device fingerprints.
- **Authentication information:** sign-in tokens used to authenticate requests. Google/Firebase handles your sign-in credentials; NivCraft does not receive your Google password.
- **Broker connection information:** selected broker, connection state, broker-issued access tokens and related identifiers needed to retrieve market data. For Upstox and FYERS you connect through your own developer app registered with that broker: you enter its API Key and API Secret (and, for Upstox, a separate one-year Analytics Token if you use that connection method) directly into NivCraft. These values are stored only in your device's secure OS keystore and are never transmitted to or stored by NivCraft's backend; NivCraft's backend receives only the non-secret API key needed to build the broker's login page, and the app itself exchanges the broker's returned login code for a session, on your device. Market-data requests and client-side signal candle processing are performed by the app with the selected broker/provider; NivCraft does not receive your candle stream for signal analysis and does not use broker connections to place real-money orders.
- **Trading and learning information:** confirmed market region, enabled market access, paper-wallet currencies and balances, paper orders, positions, trade history, watchlists, reset history, trade plans, notes, tags, performance measures, and behavior insights. Paper wallets and all related balances are simulated only. Live paper wallets, pending orders, positions, backtest configurations and results, and market-data caches are local-first device data that is not synchronized or restorable across devices. Closed-history trade records and your watchlists are separately synchronized to the backend so they can be restored if you reinstall NivCraft or sign in on a new device, and closed-history records are also used to calculate the Community ladder.
- **Market-data and currency-conversion information:** the provider, instrument identifiers, and currencies needed to request quotes, instruments, option-chain, Coin Spot, Coin Futures, or currency-conversion data. The app requests market and conversion data directly from the selected provider where supported; NivCraft does not receive the device's candle stream for client-side signal processing.
- **Signals and notifications:** signal preferences, configured scans, signal results, daily signal usage, device notification permission, push token, and notification settings. Signal preferences and results stay on the device and are not routinely synchronized to NivCraft's backend. If you enable Signal Notifications, the app may perform scheduled background work and client-side signal processing on your device. A Firebase Cloud Messaging token is stored on the backend when needed for Community, mention, subscription, or human-support notifications.
- **Chart and price-alert information:** chart drawings, saved indicator templates, your last-used chart timeframe, chart trading display state, and recently viewed chart symbols are stored only on your device. Paper-trading entry, stop-loss, target, position, and pending-order values shown or changed from a chart follow the same local-first paper-trading records as the Positions and Orders screens. Price alerts you configure (the symbol, target price, direction, and trigger history) are also stored and evaluated only on your device, including through scheduled background work when the app is not open, and are not synchronized across devices or to NivCraft's backend. Chart symbol search, history, and quotes are requested by the app on your behalf and are not sent to the charting library provider directly.
- **Advertising information:** when advertising is enabled for your tier, NivCraft shows ads through **Google AdMob**. AdMob and Google's advertising partners process your device's **advertising identifier (Advertising ID)**, IP address, general (coarse, non-precise) location derived from IP, device and app information, and ad interaction, impression, and measurement data to select, deliver, cap the frequency of, and measure ads and to limit invalid activity. In the European Economic Area, the United Kingdom, and Switzerland, NivCraft presents a Google-certified consent message before serving personalized ads; elsewhere ads may be personalized unless you opt out in your Google account or device settings. If you complete a **rewarded ad** to obtain a small extra in-app allowance for the current period (one or more additional paper-wallet resets; never money or simulated capital), the ad network records that the ad was viewed and completed, and NivCraft records that the corresponding allowance was granted. NivCraft does not share your name, email, broker tokens, prices, symbols, wallet balances, trades, or user-authored text with the ad network.
- **Analytics and reliability information:** Firebase Analytics records coarse app-interaction and screen events, and Firebase Crashlytics records crash and reliability diagnostics. For chart trading, this may include the action category (for example, Add, Reduce, Modify, or a stop/target drag), the screen surface, and a failure type. It does not include order or position identifiers, prices, quantities, symbols, broker tokens, user-authored text, or other sensitive payloads in custom analytics, Crashlytics context, or debug diagnostics.
- **Community information:** profile information made visible in the community, follows, blocks, votes, trade ideas, shared simulated trades, general posts, comments, mentions, rankings, and related notifications. Content marked public is visible to other users. A shared-trade post contains an immutable snapshot of source trade values so later edits cannot rewrite values that existed when it was shared.
- **Support information:** feedback, feature requests, issue reports, messages, screenshots or diagnostic details you choose to send, app version, platform, and screen context.
- **Subscription and transaction information:** plan, tier, entitlement grants and revocations, price, currency, subscription state, auto-renewal state, expiry and renewal dates, and Google Play identifiers for your purchase (purchase token, order identifier, and product identifier). Subscriptions are sold and billed by **Google Play**. NivCraft does not receive or store your card, UPI, or bank credentials; Google Play and Google Payments process the payment under their own terms. NivCraft stores the current state of your subscription and an immutable ledger of its lifecycle events (purchase, renewal, cancellation, grace period, hold, expiry) for entitlement integrity, customer support, and billing validation.
- **Technical information:** IP address, request timestamps, app platform/version, device metadata, and server logs needed for security, delivery, troubleshooting, and abuse prevention.

NivCraft does not intentionally collect precise location, contacts, SMS content, health data, or files unrelated to a feature you deliberately use.

## 3. How we use information

We use information to:

- create, authenticate, secure, and support your account;
- provide watchlists, paper trading, market data, signals, background scanning, notifications, analytics, community, referral, subscription, advertising, and support features;
- maintain your confirmed region, available markets, paper wallets, and currency display or conversion preferences;
- back up and restore your closed trade history and watchlists across your devices;
- calculate simulated performance, margin, backtests, rankings, and behavior insights;
- remember your settings and legal acceptance;
- sell, activate, verify, renew, and reconcile subscriptions with Google Play, keep your entitlement in step with your Google Play subscription's state, prevent duplicate rewards, and record entitlement grants and revocations;
- select, deliver, frequency-cap, and measure ads through Google AdMob, grant rewards for rewarded ads you choose to view, and detect invalid ad activity;
- diagnose failed operations, maintain service reliability, prevent fraud or abuse, and enforce our Terms;
- communicate service, security, support, transaction, and policy information; and
- meet legal, regulatory, accounting, and enforcement obligations.

We do not sell your personal information. We do not use broker tokens to execute trades. Providing personalized advertising signals to the ad network for the purpose of showing you ads may be considered "sharing" or a "sale" under some United States state laws; where that applies, you can opt out as described in section 6.

## 4. When information is shared

We disclose information only as needed for the purposes above, including to:

- **Google Firebase and Google Sign-In** for authentication, account security, push-notification delivery, privacy-safe analytics, and crash/reliability reporting;
- **Google Play and Google Payments** to sell, bill, verify, renew, and manage subscriptions, and to receive the subscription's status;
- **Google AdMob and Google's advertising technology partners** to select, deliver, cap, measure, and protect the integrity of ads, using the advertising identifier, IP address, coarse location, and ad-interaction data described above;
- **broker APIs selected by you** to retrieve quotes, instruments, option-chain, or other broker-backed market data;
- **cloud, database, networking, monitoring, email, and support providers** acting for us under appropriate safeguards;
- **other NivCraft users** when you publish community content or make profile/community activity visible; and
- **authorities, advisers, or affected parties** when reasonably necessary to comply with law, protect rights and safety, investigate abuse, or complete a merger, financing, or transfer of the service subject to applicable safeguards.

Third-party services may process data in India, the United States, or other countries where they operate.

## 5. Legal bases and choices

Where applicable law requires a legal basis, we process information to perform our agreement with you, with your consent (including for personalized advertising where consent is required), for our legitimate interests in operating and securing NivCraft and showing non-personalized ads, and to comply with law.

You can choose whether to connect a broker, publish community content, enable notifications or background scanning, view a rewarded ad, submit support details, or buy a plan. Device permissions can be changed in Android settings. Some core account and service data is necessary to provide NivCraft, and non-personalized ads may be shown where advertising is enabled for your tier and you have not purchased an ad-free plan.

## 6. Advertising and your choices

- **Ad-free access:** where advertising is enabled, the relevant paid tier removes ads. Your current tier's advertising behavior is shown on the Subscription page.
- **Personalized ads:** in the EEA, the UK, and Switzerland you are asked to consent before personalized ads are served, and you can review or withdraw that consent at any time from **Menu > Manage ad privacy choices** in the app (shown to users for whom it is required), or via Google's consent controls. Elsewhere, you can turn off ad personalization in **Android Settings > Google > Ads** (or your Google account's Ad settings).
- **Advertising ID:** you can reset your Advertising ID or delete it in **Android Settings > Privacy > Ads**. Deleting it causes apps to receive a string of zeros and limits ad personalization.
- **Rewarded ads are optional:** you only see a rewarded ad if you choose to watch one to obtain a stated in-app benefit.
- **US state privacy rights:** to opt out of "sharing"/"sale" of personal information for cross-context behavioral advertising, use the Google Ads settings above, or **Menu > Manage ad privacy choices** in the app where that control is shown. We honor recognized opt-out preference signals where legally required.

## 7. Data security

We use reasonable administrative, technical, and organizational safeguards, including authenticated API access, encrypted network transport where supported, restricted service access, and device secure storage for broker session tokens and, for Upstox and FYERS, your own developer-app API Key, API Secret, and (where applicable) Analytics Token. No storage or transmission method is completely secure, and we cannot guarantee absolute security. You are responsible for protecting your device, Google/Firebase account, and broker account.

## 8. Retention and deletion

We retain information only while needed for the purposes described above, including service delivery, security, dispute resolution, and legal or accounting duties.

- Active-account data is generally retained while your account remains active.
- Public Community posts, ideas, shared trades, comments, votes, mentions, and their backend read caches are automatically removed after the administrator-configured Community retention period, currently 35 days. You may also delete your own content earlier. The retention period can change and content may disappear sooner following a lawful moderation or administrator purge.
- Complete paper-trading history on your device is not subject to the automatic Community cleanup. Closed-history records synchronized to the backend for Community-ladder calculation and cross-device restoration, and your synchronized watchlists, remain only while needed for those purposes or until account deletion.
- Live paper-wallet balances, positions, and pending orders are not synchronized to NivCraft's backend. They are not restored if a device is lost, its app data is cleared, or NivCraft is reinstalled, unless covered by an available device backup outside NivCraft's control.
- **Account deletion is a single, centralized process** that runs the same way whether you delete the account yourself in the app or ask NivCraft support to delete it on your verified request. When it runs, we delete or de-identify profile, watchlist, paper-trading, Community (including your Community sharing preferences and consent records), broker-access grants, support-chat, push-device, device-session, and similar user-specific service data. Authored Community parents and their child comments, votes, mentions, and pending notification jobs are removed together. Deleting the account in the app also clears your broker/developer-app credentials (API Key, API Secret, Analytics Token) and your chart drawings, indicator templates, and price alerts from that device, since these are stored only on-device and NivCraft's backend never holds a copy to delete. Legal acceptance is cleared, so a returning account must accept the then-current Terms again. NivCraft keeps a durable deletion record showing when the account was deleted and, for a support-initiated deletion, which administrator performed it and the stated reason.
- **Deleting your NivCraft account does not cancel a Google Play subscription.** Google Play manages billing and renewals. To stop future charges you must cancel the subscription in the Google Play app or at play.google.com/store/account/subscriptions. Account deletion disables renewal handling inside NivCraft only.
- On deletion we remove the Google Play purchase record and its lifecycle-event log, and clear the Google Play purchase token from the payment ledger. The de-identified payment ledger (plan, price, currency, status, dates) and the entitlement grant-and-revocation ledger are retained, so no re-usable Google Play purchase credential remains.
- We may otherwise retain only restricted records needed for a stated lawful purpose: the one-way account-identity hash (not a biometric or device fingerprint), account creation and deletion timestamps, membership and entitlement tier, premium expiry, the entitlement grant-and-revocation ledger, the payment and renewal ledger, the referral/reward ledger, the deletion record, and records needed for fraud prevention, disputes, tax, accounting, or other legal compliance. The retained account-identity hash is not displayed to users and is used to prevent duplicate welcome offers, rewards, or entitlement abuse. Retained records are not used to recreate deleted Community, support, watchlist, wallet-balance, order, position, or practice-trading content.
- We retain those restricted records only while needed for the stated purpose or a legal obligation. If you need details about a particular retained category, contact us at **support@nivcraft.in**.
- Backup copies may remain for a limited rotation period before being overwritten.

You can delete your account in NivCraft through **Menu > Delete Account**. If you cannot access the app, follow [Account and Data Deletion](delete-account.md) to submit a web-accessible request. We may need to verify that you control the account.

## 9. Your rights

Subject to applicable law, you may request access, correction, deletion, restriction, objection, portability, withdrawal of consent, or information about our processing. Contact **support@nivcraft.in**. We may verify your identity and may retain information where law permits or requires it.

You may also complain to the Data Protection Board of India or another data-protection authority available in your jurisdiction once the applicable complaint channel is available.

## 10. Children

NivCraft is intended for adults aged 18 or older. We do not knowingly collect personal information from children, and ad requests are not directed to children or made in an age-restricted "for families" context. If you believe a child has provided personal information, contact us so we can investigate and delete it where appropriate.

## 11. Financial-information notice

NivCraft provides simulated trading and educational tools. It is not a broker, exchange, investment adviser, research analyst, or portfolio manager. Signals, rankings, analytics, market data, and community content are not personalized financial advice or a recommendation to transact.

## 12. Changes to this Policy

We may update this Policy as NivCraft, our providers, or legal requirements change. We will update the date above and provide additional notice or consent when required. The centrally hosted public version linked from the app is the controlling Privacy Policy; copies bundled with source code are non-controlling publication mirrors.

## 13. Contact

**NivCraft Privacy Contact**  
Email: [support@nivcraft.in](mailto:support@nivcraft.in)
Country of operation: India
