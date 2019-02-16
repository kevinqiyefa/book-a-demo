$(function() {
  const icon = 'fa-calendar';
  const header = '<h1>Book a Demo</h1>';
  const msg =
    'Helping us customize your demo by answeing the following questions below.';

  generateIconMsg('header', icon, header, msg);
});

$('#email').change(() => {
  const $email = $('#email');
  const $errorMsg = $('.errorMsg');
  const email = $email.val();

  if (!validateEmail(email)) {
    $email.css('border', '2px solid #D5322F');
    $errorMsg.show();
  } else {
    $email.css('border', '2px solid #5BC759');
    $errorMsg.hide();
  }
});

$('#content').submit(event => {
  event.preventDefault();

  let size = $('#size').val();
  let solution = $('input[name=solutions]:checked').val();

  if (!solution) return;

  $('form').hide();

  if (validateInputs(size, solution)) {
    $('#icon-msg').remove();
  }

  // console.log(validateEmail(email));
});

const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const generateIconMsg = (tag, icon, header, msg) => {
  $(tag).after("<div id='icon-msg'></div>");

  $('#icon-msg').append(
    `<div id='calendar-icon'><i class='far ${icon}'></i></div>`
  );

  $('#icon-msg').append(header);
  $('#icon-msg').append(`<p>${msg}</p>`);
};

const validateInputs = (size, solution) => {
  return (
    size !== '1-10' &&
    solution !== 'DS' &&
    solution !== 'FTS' &&
    solution !== 'price'
  );
};
