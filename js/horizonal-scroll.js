var blocks = document.getElementsByClassName('item');
var container = document.getElementsByClassName('frame');
var hs = new HorizontalScroll.default({
  blocks: blocks,
  container: container,
  inAnimated: true,
  springEffect: .8,
  skewReducer: 30
});