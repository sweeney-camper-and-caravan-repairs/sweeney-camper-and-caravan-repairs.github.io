async function getInfoFromArena() {
  let url = "http://api.are.na/v2/channels/teacs";
  let response = await fetch(url);

  let channelJSON = await response.json(); // read response body and parse as JSON
  //   console.log(channelJSON);

  let blocks = channelJSON.contents;
  console.log(blocks);

  blocks.forEach((block) => {
    console.log(`single block: ${block}`);
  });
}

// alert(commits[0].author.login);
