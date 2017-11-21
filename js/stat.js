'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // black
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(255, 255, 255, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);


  // black;
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var barHeigth = 20; // px;
  var initialX = 150; // px;
  var indent = 90; // px;
  var initialY = 240; // px;
  var lineWitdth = 40; // px;
  var maxTime = -1;

var getMaxElement = function () {

  for (var i = 0; i < times.length; i++) { // поиск максимального элемента массива
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }
  return maxTime;
  };

  var histogramHeigth = -150; // px;
  var step = histogramHeigth / maxTime; // px; рассчитывает пропорции

var getColumns = function () {
    for (i = 0; i < times.length; i++) { // перебирает массив ставит столбики имена и время
    ctx.fillStyle = names[i] === 'Вы' ? 'red' : 'rgba(0, 0, 255, ' + getRandomValue(0.3, 1) + ')';
    ctx.fillRect(initialX + indent * i, initialY, lineWitdth, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + indent * i, initialY + barHeigth);
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, histogramHeigth + initialY - barHeigth / 2);
  }
  return ?;
};

  function getRandomValue(minRandom, maxRandom) {
    return Math.random() * (maxRandom - minRandom) + minRandom;
  }
};
