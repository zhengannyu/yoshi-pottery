var blocks = document.getElementsByClassName('item');
var container = document.getElementsByClassName('frame');
var hs = new HorizontalScroll.default({
  blocks: blocks,
  container: container,
  // isAnimated: true,
  springEffect: .5,
  // skewReducer: 5
});