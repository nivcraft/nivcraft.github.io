# NivCraft Account and Data Deletion

**Last updated:** 19 October 2026

NivCraft users can request deletion of their app account and associated data by either method below. Both methods run the **same centralized deletion process** on NivCraft's backend, so the backend data-removal outcome is identical. Accepted in-app deletion also clears local account data on the device where you perform it; a support request cannot remotely erase other devices.

## Delete in the app

1. Sign in to NivCraft.
2. Open **Menu**.
3. Select **Delete Account** below **Logout**.
4. Review the notice and confirm deletion.

The app signs out after the deletion request is accepted. Once the server accepts the request, the app clears local account data on this device even if backend billing or identity deletion is still pending. A device-local cleanup journal resumes interrupted cleanup when the app is next opened. Backend completion and renewal cancellation are reported separately. An offline device or an app that is no longer opened cannot be remotely wiped.

## Request deletion without the app

Email **support@nivcraft.in** from the email address associated with your NivCraft account. Use the subject **NivCraft account deletion request** and state that you want your NivCraft account and associated data deleted.

We may ask for limited information to verify that you control the account. Do not send a password, one-time password, broker token, card number, or bank credential. When NivCraft support performs the deletion on your behalf, we record which administrator ran it, when, and the stated reason.

## Renewal cancellation and pending deletion

When you request account deletion, NivCraft first asks Google Play to stop future renewal and confirms the reported renewal state before completing backend account-data deletion. If Play is unavailable or cancellation is not confirmed, the account is locked and deletion remains pending while the backend retries; cancellation and deletion are not represented as complete. You can also manage or cancel directly in Google Play at play.google.com/store/account/subscriptions. Deleting or uninstalling the app alone does not cancel a subscription. Stopping renewal does not request a refund or restart the paid period; any existing payment commitment remains governed by Google Play. You may return to use valid remaining access under its original expiry.

## What is deleted and what may be retained

After verification, the centralized deletion process deletes or de-identifies profile, watchlist, strategy, paper-trading history synchronized for ranking and restore, synchronized Signals settings and scan scope, Live F&O settings and overrides, Community (including sharing preferences and consent records), broker-access grants, support-chat, push-device, device-session, and similar user-specific data held by NivCraft. Authored Community items and their child comments, votes, mentions, and queued notifications are removed together. Recorded Terms acceptance is cleared. If you later return, you must accept the then-current Terms again.

If you connected a broker through your own developer app (Upstox or FYERS), its API Key, API Secret, and any Analytics Token are stored only on your device and are never held by NivCraft's backend; deleting the account in the app clears them from that device the same way it clears your chart drawings, indicator templates, chart trading display state, and price alerts, which are also device-only. Open paper positions and pending paper orders are local-first device data; deletion in the app clears them from that device. A web or email request deletes NivCraft-held account data but cannot reach a device that is offline or no longer connected.

Once the server accepts account deletion in the app, NivCraft clears the active local session and local account data on that device, including scan settings, generated Signals and Live F&O histories, and saved backtest results. Generated scan histories and saved backtest results are device-only; there is no backend copy of those results to delete. A web or email request cannot remotely erase data stored on another device that is offline or no longer connected to NivCraft; after a web request, clear NivCraft app data or uninstall NivCraft on each device you used. Data stored in device or cloud backups outside NivCraft's control may remain until you remove it or the backup rotates.

NivCraft retains a restricted entitlement grant-and-revocation ledger and de-identified Google Play access-history events, including tier or plan, grant date, original expiry and revocation status. These records remain linked to a one-way account-identity hash so that, if you later sign up with the same verified identity, valid remaining premium access can be recognized without restarting its expiry or issuing duplicate welcome or referral rewards. Expired or revoked access is not renewed by returning. Retained history does not recreate deleted profile, Community, support, watchlist, wallet-balance, order, position or practice-trading content. Reusable Google Play purchase tokens are removed from operational records, access-history events and retained payment references after renewal cancellation is confirmed. Restricted retention is limited to these service-continuity, entitlement-integrity, fraud-prevention, dispute and legal/accounting purposes; contact support@nivcraft.in about a retained record.

NivCraft may retain only restricted records needed for a stated lawful purpose: a one-way account-identity hash derived from the sign-in email address or phone number (not a biometric or device fingerprint), account creation and deletion timestamps, the deletion record (including the acting administrator and reason for a support-initiated deletion), membership and entitlement tier, premium expiry, the entitlement grant-and-revocation ledger, the de-identified payment and renewal ledger (plan, price, currency, status, dates), the referral/reward ledger, and records required for fraud prevention, disputes, tax, accounting, or legal compliance. These records prevent repeated welcome offers or rewards and preserve legitimate billing history without retaining your deleted Community, support, watchlist, wallet-balance, order, position, or practice-trading content. Restricted records are retained only while needed for that purpose or a legal obligation. Backups may remain until their limited rotation period ends. See the [Privacy Policy](privacy-policy.md) for more detail.

We will normally complete a verified request within 30 days, or explain if applicable law permits or requires additional time.

Contact: [support@nivcraft.in](mailto:support@nivcraft.in)
