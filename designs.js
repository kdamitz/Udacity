// Select color input
const $colorPicker = document.getElementById("colorPicker");
const $sizePicker = document.getElementById("sizePicker");
const $table = document.getElementById("pixelCanvas")

$("input[type='submit']").on("click", function(event) {
  event.preventDefault();

  const height = $("#inputHeight").val();
  const width = $("#inputWidth").val();

  makeGrid(height,width);
});
// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {
  $table.innerHTML = '';
  for (let i = 0; i < height; i++) {
    $("#pixelCanvas").append($("<tr></tr>"));
    for (let j = 0; j < width; j++) {
      $("tr").last().append($("<td></td>"));
    }
  }

  $("#pixelCanvas").on("click", "td", function() {
    $(this).css("background-color", $("#colorPicker").val());
  });

}
