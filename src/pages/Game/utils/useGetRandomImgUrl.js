export const useGetRandomImgUrl = (arrayCards) => {
  const imageNames = [
    'ampharos.png',
    'arcanine.png',
    'baxcalibur.png',
    'bulbasaur.png',
    'charmander.png',
    'cyclizar.png',
    'dondozo.png',
    'eevee.png',
    'entei.png',
    'espathra.png',
    'flaaffy.png',
    'fuecoco.png',
    'growlithe.png',
    'hawlucha.png',
    'koraidon.png',
    'lucario.png',
    'mimikyu.png',
    'miraidon.png',
    'murkrow.png',
    'ninetales.png',
    'pawmot.png',
    'pelipper.png',
    'pikachu.png',
    'quaquaval.png',
    'quaxly.png',
    'ravavroom.png',
    'smoliv.png',
    'spidops.png',
    'sprigatito.png',
    'squirtle.png',
    'tinkaton.png',
  ];

  const notRaffledImages = imageNames.filter(image => !arrayCards.some(card => card.cardImg.endsWith(image)) )

  const imagesToChooseFrom = notRaffledImages.length > 0 ? notRaffledImages : imageNames;

  const randomImage = imagesToChooseFrom[Math.floor(Math.random() * imagesToChooseFrom.length)];
  
  return `/cards/${randomImage}`;
}