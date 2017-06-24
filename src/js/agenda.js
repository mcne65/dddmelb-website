$(document).ready(function() {
  $('#agenda-modal').on('show.bs.modal', function(e) {
    var agendaItem = $(e.relatedTarget);

    var id = agendaItem.attr('id');
    if(history && history.replaceState) {
      history.replaceState(null, null, '#'+id);
    }
    else {
      location.hash = '#'+id;
    }

    var room = agendaItem.find('.area').text() || '';
    var sessionTitle = agendaItem.find('.info').text() || '';
    var speaker = agendaItem.find('.speaker').text() || '';
    var speakerTwitter = agendaItem.find('.twitter').text() || '';
    var speakerWebsite = agendaItem.find('.website').text() || '';
    var sessionAbstract = agendaItem.find('.abstract').html() || '';
    var modal = $(this);

    modal.find('.modal-title').text(room + ": " + sessionTitle);
    modal.find('.speaker').html(speaker + " " + speakerTwitter + "<br />" + speakerWebsite);
    modal.find('.modal-body').html(sessionAbstract);
  });

  if(document.location.pathname.startsWith("/agenda") && document.location.hash) {
    $(document.location.hash).trigger('click');
  }
});