import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = name => readFileSync(new URL(`../legal/${name}.md`, import.meta.url), 'utf8');

for (const name of ['privacy-policy', 'terms-and-conditions', 'delete-account']) {
  test(`${name} discloses synced settings and local deletion limits`, () => {
    const text = read(name);
    for (const category of ['watchlist', 'strateg', 'Signals', 'Live F&O', 'backtest']) {
      assert.ok(text.includes(category), `Missing ${category}`);
    }
    assert.doesNotMatch(text, /full[ -]universe|universal[ -]scan|full[ -]catalog(?:ue)?[ -]scan/i);
    assert.match(text, /cannot remotely erase/);
    assert.match(text, /19 October 2026/);
    assert.doesNotMatch(text, /Signal preferences and results stay on the device/);
    assert.doesNotMatch(text, /positions, signal preferences, backtest configurations/);
    for (const [, target] of text.matchAll(/\]\(([^)]+\.md)\)/g)) {
      assert.ok(existsSync(new URL(`../legal/${target}`, import.meta.url)), `Broken link: ${target}`);
    }
  });
}

test('Terms version and sync restore limitations are explicit', () => {
  assert.match(read('terms-and-conditions'), /\*\*Terms version:\*\* 2026-10-19/);
  for (const name of ['privacy-policy', 'terms-and-conditions']) {
    assert.match(read(name), /changes that have not reached the backend cannot be restored/);
    assert.match(read(name), /Generated (?:signals|scan results)/);
  }
});
for (const name of ['privacy-policy', 'terms-and-conditions', 'delete-account']) {
  test(`${name} discloses retained access history and confirmed cancellation`, () => {
    const text = read(name);
    assert.match(text, /original expiry/);
    assert.match(text, /same verified identity/);
    assert.match(text, /duplicate welcome or referral rewards/);
    assert.match(text, /purchase tokens are removed/);
    assert.match(text, /deletion remains pending/);
    assert.doesNotMatch(text, /account does not cancel a Google Play subscription|its lifecycle-event log/);
  });
}
for (const name of ['privacy-policy', 'terms-and-conditions', 'delete-account']) {
  test(name + ' explains accepted-request local cleanup recovery', () => {
    const text = read(name);
    assert.match(text, /device-local cleanup journal/);
    assert.doesNotMatch(text, /If deletion is pending, local account data is preserved/);
  });
}

for (const [name, heading, nextHeading] of [
  ['privacy-policy', '## 8. Retention and deletion', '## 9. Your rights'],
  ['terms-and-conditions', '## 15. Suspension and termination', '## 16. Disclaimers'],
]) {
  test(`${name} places cleanup recovery in its deletion section`, () => {
    const text=read(name);
    const section=text.slice(text.indexOf(heading),text.indexOf(nextHeading));
    assert.match(section,/device-local cleanup journal/);
  });
}
