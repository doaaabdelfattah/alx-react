import $ from "jquery";

// Document ready function
$(document).ready(function () {
  // Create three paragraph elements
  const paragraph1 = $('<p>').text('Holberton Dashboard');
  const paragraph2 = $('<p>').text('Dashboard data for the students');
  const paragraph3 = $('<p>').text('Copyright - Holberton School');

  // Append paragraphs to the body
  $('body').append(paragraph1, paragraph2, paragraph3);
});