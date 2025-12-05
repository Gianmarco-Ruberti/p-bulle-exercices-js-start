// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let min = 1000
  let max = 9999
  let num = min + Math.random() * (max-min)
return "NCC-" + num
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let Smin = 41000
  let Smax = 42000
  let Snum = Smin + Math.random() * (Smax-Smin)
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
