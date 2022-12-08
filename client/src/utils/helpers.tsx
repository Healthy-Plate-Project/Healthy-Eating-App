export function apiServer() {
  const url = window.location.href;
  const slice = url.slice(0, 21);
  if (slice === "http://localhost:3000") {
    return "http://localhost:3001";

  } else if (slice === "https://dragon-fruit-") {

    return "https://dragon-fruit-app.herokuapp.com";
  } else if (slice === "https://healthy-eatin") {
    return "https://healthy-eating-project-359101.uc.r.appspot.com";
  }
}

export function convertMetersToMiles(meters: number) {
  return meters * 0.000621371192;
}

export function convertMilesToMeters(miles: number) {
  return miles * 1609.344;
}