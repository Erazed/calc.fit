updateMaxOutputs();

$('#maxWeightInput').on('input', updateMaxOutputs);
$('#maxRepsInput').on('input', updateMaxOutputs);

function updateMaxOutputs() {
    var w = $('#maxWeightInput').val();
    var r = $('#maxRepsInput').val();

    $('#maxEpleyOutput').text(epley(w,r));
    $('#maxBrzyckiOutput').text(brzycki(w,r));
    $('#maxMcGlothinOutput').text(McGlothin(w,r));

    $('#maxLombardiOutput').text(lombardi(w,r));
    $('#maxMayhewOutput').text(mayhew(w,r));
    $('#maxOConnerOutput').text(oConner(w,r));

    $('#maxWathanOutput').text(wathan(w,r));
    $('#maxBaechleOutput').text(baechle(w,r));
    $('#maxDosRemediosOutput').text(dosRemedios(w,r));

    function epley(w, r) {
      if(r === '1') return Math.round(w);
      return Math.round(w * (1 + r / 30));
    }

    function brzycki(w, r) {
      if(r === '1') return Math.round(w);
      return Math.round(w * (36 / (37 - r)));
    }

    function McGlothin(w, r) {
      if(r === '1') return Math.round(w);
      return Math.round((100 * w) / (101.3 - 2.67123 * r));
    }

    function lombardi(w, r) {
      if(r === '1') return Math.round(w);
      return Math.round(w * r ** 0.10);
    }

    function mayhew(w, r) {
      if(r === '1') return Math.round(w);
      return Math.round((100 * w) / (52.2 + 41.9 * Math.E ** (-0.055 * r)));
    }

    function oConner(w, r) {
      if(r === '1') return Math.round(w);
      return Math.round(w * (1 + r / 40));
    }

    function wathan(w, r) {
      if(r === '1') return Math.round(w);
      return Math.round((100 * w) / (48.8 + 53.8 * Math.E ** (-0.075 * r)))
    }

    function baechle(w, r) {
      var mapping = [0, 1, .95, .93, .9, .87, .85, .83, .8, .77, .75, '-', 67, '-', '-', .65];
      if(mapping[r] === '-') return '-';
      return Math.round(w / mapping[r]) || '-';
    }

    function dosRemedios(w, r) {
      var mapping = [0, 1, .92, .9, .87, .85, .82, '-', .75, '-', .7, '-', 65, '-', '-', .6];
      if(mapping[r] === '-') return '-';
      return Math.round(w / mapping[r]) || '-';
    }
}
