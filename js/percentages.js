updatePercentagesOutputs();

$('#percentagesMaxInput').on('input', updatePercentagesOutputs);

$('#percentagesCustomInput').on('input', updatePercentagesOutputs);

$('#percentagesUseTrainingMax').change(updatePercentagesOutputs);

function updatePercentagesOutputs() {
  var max = $('#percentagesMaxInput').val();
  $('#percentagesTrainingMaxValue').text(Math.round(max * 0.9));
  if($('#percentagesUseTrainingMax').prop('checked')) max *= 0.9;
  $('#percentagesCustomOutput').text(Math.round($('#percentagesCustomInput').val() * max / 100));
  $('.percentages-table td:last-child').each(function() {
    var value = Math.round($('#percentagesMaxInput').val() * $(this).attr('data-percentage'));
    $(this).text(Math.round($(this).attr('data-percentage') * max));
  });
}
