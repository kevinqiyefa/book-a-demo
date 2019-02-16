$(function() {
  const icon = 'fa-calendar';
  const header = '<h1>Book a Demo</h1>';
  const msg =
    'Helping us customize your demo by answeing the following questions below.';

  generateIconMsg(icon, header, msg);
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
  let icon, header, msg;
  let size = $('#size').val();
  let solution = $('input[name=solutions]:checked').val();

  event.preventDefault();

  if (!solution) return;

  $('form').hide();

  $('#icon-msg').remove();
  if (validateInputs(size, solution)) {
    icon = 'fa-calendar-check';
    header = `<h1>Awssome!</h1><h1>We'll contact you shortly</h1>`;
    msg = `We'll send you an email with avaliable times to meet.`;
  } else {
    icon = 'fa-calendar-times';
    header = `<h1>Oh no!</h1><h1>All our consultants are busy</h1>`;
    msg = `We'll send you know when the next one is avaliable`;
  }

  generateIconMsg(icon, header, msg);
});

const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const generateIconMsg = (icon, header, msg) => {
  $('header').after("<div id='icon-msg'></div>");

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
