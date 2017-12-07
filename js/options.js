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
    displayName: "Aplicación móvil",
    description: "Nuestra aplicación móvil es un espacio digital donde podrás conocer si un producto es reciclable o no.",
    email: "partidodelared@gmail.com",
    color: "#169CBF"
  },
  {
    name: "Difusion",
    displayName: "Difusión",
    description: "Diseñamos e implementamos campañas para organizaciones dando a conocer el desarrollo sostenible en las redes sociales",
    email: "plataformas@partidodelared.org",
    color: "#EA4040"
  },
  {
    name: "Conciencia",
    displayName: "Conciencia",
    description: "Ofrecemos capacitaciones sobre cuidado del ambiente en el hogar, empresa y comunidad acompañando con una fuerte campaña de comunicación",
    email: "financiamiento@partidodelared.org",
    color: "#FF9800"
  },
];
