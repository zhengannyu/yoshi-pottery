var blocks = document.getElementsByClassName('item');
var container = document.getElementsByClassName('frame');
var hs = new HorizontalScroll.default({
  blocks: blocks,
  container: container,
  springEffect: .5,
});