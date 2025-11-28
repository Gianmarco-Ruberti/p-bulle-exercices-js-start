//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const age = (planet, age) => {
  const ORBITAL_PERIODS = { mercury: 0.2408467, venus: 0.61519726, earth: 1.0, mars: 1.8808158, jupiter: 11.862615, saturn: 29.447498, uranus: 84.016846, neptune: 164.79132, };
  let years
    if(planet === "mercury"){
      years = Number((age/(31557600*ORBITAL_PERIODS.mercury)).toFixed(2))

    }
      else if(planet ==="venus"){
      years = Number((age/(31557600*ORBITAL_PERIODS.venus)).toFixed(2))
    }
      else if(planet === "earth"){
      years = Number((age/31557600).toFixed(2))
    }
      else if(planet ==="mars"){
      years = Number((age/(31557600*ORBITAL_PERIODS.mars)).toFixed(2))
    }
      else if(planet ==="jupiter"){
      years = Number((age/(31557600*ORBITAL_PERIODS.jupiter)).toFixed(2))
    }
      else if(planet ==="saturn"){
      years = Number((age/(31557600*ORBITAL_PERIODS.saturn)).toFixed(2))
    }
      else if(planet ==="uranus"){
      years = Number((age/(31557600*ORBITAL_PERIODS.uranus)).toFixed(2))
    }
      else if(planet ==="neptune"){
      years = Number((age/(31557600*ORBITAL_PERIODS.neptune)).toFixed(2))
    }
    else{
      throw new Error("not a planet");
    }
    return years
  }
