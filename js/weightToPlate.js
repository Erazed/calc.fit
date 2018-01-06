updateWeightToPlateView();

$('#weightToPlateInput').on('input', updateWeightToPlateView);
$('#weightToPlateMens').change(updateWeightToPlateView);
$('#weightToPlateWomens').change(updateWeightToPlateView);
$('#weightToPlateCollars').change(updateWeightToPlateView);

function updateWeightToPlateView() {
  var plates = [{
      weight: 25,
      colour: 'red',
      height: 450,
      width: 67
    },
    {
      weight: 20,
      colour: 'blue',
      height: 450,
      width: 54
    },
    {
      weight: 15,
      colour: 'yellow',
      height: 450,
      width: 42
    },
    {
      weight: 10,
      colour: 'green',
      height: 450,
      width: 34
    },
    {
      weight: 5,
      colour: 'white',
      height: 230,
      width: 26.5
    },
    {
      weight: 2.5,
      colour: 'red',
      height: 210,
      width: 19
    },
    {
      weight: 2,
      colour: 'blue',
      height: 190,
      width: 19
    },
    {
      weight: 1.5,
      colour: 'yellow',
      height: 175,
      width: 18
    },
    {
      weight: 1,
      colour: 'green',
      height: 160,
      width: 15
    },
    {
      weight: 0.5,
      colour: 'white',
      height: 135,
      width: 13
    }
  ];
  var weight = Math.round($('#weightToPlateInput').val());
  if (weight > 500) weight = 500;

  weight -= $('input:radio[name ="weightToPlateBarType"]:checked').val();
  var collars = $('#weightToPlateCollars').prop('checked');
  if (collars) weight -= 5;
  weight /= 2;

  var calculatedPlates = [];
  while (weight > 0) {
    for (var i = 0; i < plates.length; i++) {
      if ((weight - plates[i].weight) >= 0) {
        weight -= plates[i].weight;
        calculatedPlates.push(plates[i]);
        break;
      }
    }
  }
  drawWeightToPlates(calculatedPlates, collars);
}

function drawWeightToPlates(plates, collars) {
  var canvas = document.getElementById('weightToPlateCanvas');
  var x = canvas.getContext('2d');
  canvas.width=1600;
  //Draw Bar
  x.fillRect(0, 400, 150, 100);
  x.fillRect(150, 325, 150, 250);
  x.fillRect(300, 375, 1600, 150);

  var plateOffset = 310;
  //Draw plates
  for(var i = 0; i < plates.length; i++) {
    x.fillStyle = plates[i].colour;
    x.fillRect(plateOffset, 450 - plates[i].height, plates[i].width * 2, plates[i].height * 2);
    plateOffset += 10;
    plateOffset += plates[i].width * 2;
  }

  //Draw collars
  if(collars) {
    x.fillStyle = '#d8d8d8';
    x.fillRect(plateOffset, 325, 150, 250);
  }
}
