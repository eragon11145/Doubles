<script>
  // 1. Create an array with the paths to your images
  var images = [
    "https://play.pokemonshowdown.com/sprites/ani/zeraora.gif",
    "https://play.pokemonshowdown.com/sprites/ani/fluttermane.gif",
    "https://play.pokemonshowdown.com/sprites/ani/tapufini.gif",
    "https://play.pokemonshowdown.com/sprites/ani/incineroar.gif",
    "https://play.pokemonshowdown.com/sprites/ani/landorus.gif"
  ];

  var randomIndex = Math.floor(Math.random() * images.length);
  document.getElementById("randomImage").src = images[randomIndex];

  return(images[randomIndex])
</script>
