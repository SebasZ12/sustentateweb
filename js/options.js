var calendarOptions = {
  lang: 'es',
  googleCalendarApiKey: '',
  events: '',
  header: {
    left:   'title',
    center: '',
    right:  'today prev,next'
  },
  handleWindowResize: false,
  eventClick: function(event) {
  },
  eventRender: function(event, element) {
    var org = organizers.filter(function(o){ return o.email == event.creator.email })[0];
    $(element).css('background-color', org ? org.color : "#555555").css('color', "#ffffff");
    if(event.title.indexOf('Asamblea') != -1)
      $(element).css('font-size', "20px").css('font-weight', "600").css('text-align', 'center');
    $(element).attr('target', '_blank');
  }
};

var organizers = [
  {
    name: "APP",
    displayName: "APP",
    description: "Si nos organizamos….. votamos todos. ¿Qué día era la asamblea? ¿Dónde es la fiesta? ¿Cómo hago para….? Todo esto y menos hacemos en organización.",
    email: "partidodelared@gmail.com",
    color: "#169CBF"
  },
  {
    name: "Experiencias",
    displayName: "Experiencias",
    description: "Codeamos soluciones y desencriptamos problemas. Entrá a <a href='http://queproponen.com.ar' target='_blank'>¿Qué proponen? sarasa sarasa sarasa sarasa</a> o <a href='http://concesionopoly.com.ar' target='_blank'>Concesionopoly</a> y enterate. Todo con una pizca de amor.",
    email: "plataformas@partidodelared.org",
    color: "#EA4040"
  },
  {
    name: "Concientizar",
    displayName: "Concientizar",
    description: "NO, nos autofinanciamos pensando en crowdfunding, favoreciendo el contacto con otra organizaciones, impulsando la transparencia y a favor de cambios en la ley que hable de un voto y no un secreto.",
    email: "financiamiento@partidodelared.org",
    color: "#FF9800"
  },
];
