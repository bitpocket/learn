function ajax({
  type = "get",
  url = requiredParameter(url),
  data = {}
} = {}) {
  console.log(JSON.stringify({ type, url, data },
  null, 2));
}

function requiredParameter(name){
  throw new Error (`missiong "${name}"`);
}

try {
  ajax({
    //  url: "http://"
  })
}
catch (e) {console.log(e.message);}
