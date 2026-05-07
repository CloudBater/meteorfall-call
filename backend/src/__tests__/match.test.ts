import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { loadUser, safeProfile } from '../match';

describe('loadUser', () => {
  it('returns a user for a valid ID', () => {
    const user = loadUser(1);
    assert.ok(user, 'should return a user object');
    assert.equal(user.id, 1);
    assert.ok(typeof user.firstName === 'string');
    assert.ok(typeof user.age === 'number');
  });

  it('returns null for an out-of-range ID', () => {
    const user = loadUser(9999);
    assert.equal(user, null);
  });

  it('returns null for ID 0', () => {
    const user = loadUser(0);
    assert.equal(user, null);
  });
});

describe('safeProfile', () => {
  it('does not expose bank or financial fields', () => {
    const user = loadUser(1);
    assert.ok(user);
    const profile = safeProfile(user);
    assert.ok(!('bank' in profile), 'safeProfile must not contain bank field');
    assert.ok(!('ssn' in profile), 'safeProfile must not contain ssn field');
  });

  it('does not expose full home address', () => {
    const user = loadUser(1);
    assert.ok(user);
    const profile = safeProfile(user);
    assert.ok(!('address' in profile), 'safeProfile must not expose full address object');
  });

  it('includes only safe fields needed for matching', () => {
    const user = loadUser(1);
    assert.ok(user);
    const profile = safeProfile(user);
    assert.ok('age' in profile);
    assert.ok('city' in profile);
    assert.ok('jobTitle' in profile);
  });
});
