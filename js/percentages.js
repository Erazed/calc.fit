$(document).ready(function() {
  updateOutputs();
});

$('#percentagesMaxInput').on('input', updateOutputs);

$('#customPercentageInput').on('input', updateOutputs);

$('#useTrainingMax').change(updateOutputs);

function updateOutputs() {
  var max = $('#percentagesMaxInput').val();
  $('#trainingMaxValue').text(Math.round(max * 0.9));
  if($('#useTrainingMax').prop('checked')) max *= 0.9;
  $('#customPercentageOutput').text(Math.round($('#customPercentageInput').val() * max / 100));
  $('.percentage-table td:last-child').each(function() {
    var value = Math.round($('#percentagesMaxInput').val() * $(this).attr('data-percentage'));
    $(this).text(Math.round($(this).attr('data-percentage') * max));
  });
}
