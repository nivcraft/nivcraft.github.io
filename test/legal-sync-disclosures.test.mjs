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
    assert.match(text, /17 October 2026/);
    assert.doesNotMatch(text, /Signal preferences and results stay on the device/);
    assert.doesNotMatch(text, /positions, signal preferences, backtest configurations/);
    for (const [, target] of text.matchAll(/\]\(([^)]+\.md)\)/g)) {
      assert.ok(existsSync(new URL(`../legal/${target}`, import.meta.url)), `Broken link: ${target}`);
    }
  });
}

test('Terms version and sync restore limitations are explicit', () => {
  assert.match(read('terms-and-conditions'), /\*\*Terms version:\*\* 2026-10-17/);
  for (const name of ['privacy-policy', 'terms-and-conditions']) {
    assert.match(read(name), /changes that have not reached the backend cannot be restored/);
    assert.match(read(name), /Generated (?:signals|scan results)/);
  }
});