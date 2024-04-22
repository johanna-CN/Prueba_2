// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$().ready(function() {
    $('#enviarCorreo').click(function(){
        Swal.fire({
            title: "Correo Enviado!",
            text: "El correo fue enviado correctamente...",
            icon: "success"
          });
    })

    function cambiarColor(current) {
        if ( current.style.color !== "red" ) {
            $(current).css({
                color: 'red'
            })
            return
        }
        
        $(current).css({
            color: 'white'
        })
    }

    const headings = ['.nosotros__heading', '.destacados__heading', '.contacto__heading']

    headings.forEach( head => {
        $(head).on('dblclick', function() {
            cambiarColor(this)
        })
    })

    $('.card').each((i, v) => {
        $(v).click(function() {
            $(this).find('.card-text').toggle()
        })
    });

    $('a').on('click', function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            })
        }
    })
})
