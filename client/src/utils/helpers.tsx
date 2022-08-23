function apiServer() {
  const url = window.location.href;
  const slice = url.slice(0, 21);
  if (slice === 'http://localhost:3000') {
    return 'http://localhost:3001'
  } else {
    return 'https://healthy-eating-project-359101.uc.r.appspot.com';
  }
}

function convertMetersToMiles(meters: number) {
  return meters * 0.000621371192;
}

function convertMilesToMeters(miles: number) {
  return miles * 1609.344;
}

export {
  apiServer,
  convertMetersToMiles,
  convertMilesToMeters
}