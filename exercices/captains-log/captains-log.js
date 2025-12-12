// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const MIN = 1000
  const MAX = 9999
  let num = MIN + Math.random() * (MAX-MIN)
return "NCC-" + num
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const SMIN = 41000
  const SMAX = 42000
  let snum = SMIN + Math.random() * (SMAX-SMIN)
  return snum
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const CLASS = "DHJKLMNRTY"
  let pclass = Math.floor(Math.random() * CLASS.length)
  return CLASS[pclass]
}
