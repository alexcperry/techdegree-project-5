

$('.search-box').on('keyup', function () {

  let searchTerm = $('.search-box').val();


  $('.gallery-link').each(function (index, link) {

    let photoDescription = $(link).attr('data-title').toLowerCase();

    console.log(!photoDescription.includes(searchTerm));
    if (!photoDescription.includes(searchTerm)) {
      $(link).css('display', 'none');
    } else {
      $(link).css('display', 'block');
    }

  });
});