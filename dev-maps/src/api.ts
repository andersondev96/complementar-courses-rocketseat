const ACCESS_TOKEN_MAP_BOX = 
'access_token=pk.eyJ1IjoiYW5kZXJzb25mZXJyZWlyYTEzMDk5NiIsImEiOiJja2g5cnlvY2swZ2liMnRudTdzNzYxbjZiIn0.HV9H-QgZVX_75tyefk4ssw';

export const fetchLocalMapBox = (local: string) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
).then(response => response.json()).then(data => data);

export const fetchUserGithub = (login: string) =>
fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(data => data);