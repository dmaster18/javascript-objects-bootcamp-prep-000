var playlist = {
  artistName: 'songTitle'
}

function updatePlaylist (playlist, artistName, value) {
  return Object.assign({}, obj, {[key]: value});
}

function removeFromPlaylist(obj, key) {
  delete obj.key;

}