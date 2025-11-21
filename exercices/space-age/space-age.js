//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const age = (planet, age) => {
  let years
  try
  {
    if(planet === "mercury"){
      years = Number((age/(31557600*0.2408467)).toFixed(2))

    }
      else if(planet ==="venus"){
      years = Number((age/(31557600*0.61519726)).toFixed(2))
    }
      else if(planet === "earth"){
      years = Number((age/31557600).toFixed(2))
    }
      else if(planet ==="mars"){
      years = Number((age/(31557600*1.8808158)).toFixed(2))
    }
      else if(planet ==="jupiter"){
      years = Number((age/(31557600*11.862615)).toFixed(2))
    }
      else if(planet ==="saturn"){
      years = Number((age/(31557600*29.447498)).toFixed(2))
    }
      else if(planet ==="uranus"){
      years = Number((age/(31557600*84.016846)).toFixed(2))
    }
      else if(planet ==="neptune"){
      years = Number((age/(31557600*164.79132)).toFixed(2))
    }
    else{
      throw new Error("not a planet");
    }
    return years
  }
  catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }
};
