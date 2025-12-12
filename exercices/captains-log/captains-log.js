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
  let Snum = SMIN + Math.random() * (SMAX-SMIN)
  return Snum
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const CLASS = "DHJKLMNRTY"
  let Pclass = Math.floor(Math.random() * CLASS.length)
  return CLASS[Pclass]
}
