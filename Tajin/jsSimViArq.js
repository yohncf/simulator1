$(document).ready(function() {

    var nivelSelecto;

    document.getElementById("plano").src = "IMGSimViArq/logoColorR.png"; /*Carga logo en la pagina*/
    $(function() { /*Load maplight for building*/
        $('.map').maphilight({
            fill: true,
            fillOpacity: 0.4,
            strokeColor: 'A65329',
            strokeOpacity: 0,
            shadowColor: 'A65329',
            shadowOpacity: 0,
            fillColor: 'CC6633'
        });
        $('.nivel').click(function(e) {
            e.preventDefault();
            var data = $(this).mouseout().data('maphilight') || {};
            data.alwaysOn = !data.alwaysOn;
            $(this).data('maphilight', data).trigger('alwaysOn.maphilight');
            data.alwaysOn = !data.alwaysOn;
        });
    });
    function nombreTabla(n1,n2,n3,n4,n5,n6){
      $('#t1').text(n1);
      $('#t2').text(n2);
      $('#t3').text(n3);
      $('#t4').text(n4);
      $('#t5').text(n5);
      $('#t6').text(n6);
    }
    function ajusteTabla(d1, d2, d3, d4, d5, d6) {
        document.getElementById("detalles").rows[0].cells[1].innerHTML = "<h3>" + d1 + "</h3>";
        document.getElementById("detalles").rows[0].cells[3].innerHTML = "<h3>" + d2 + "</h3>";
        document.getElementById("detalles").rows[0].cells[5].innerHTML = "<h3>" + d3 + "</h3>";
        document.getElementById("detalles").rows[1].cells[1].innerHTML = "<h3>" + d4 + "</h3>";
        document.getElementById("detalles").rows[1].cells[3].innerHTML = "<h3>" + d5 + "</h3>";
        document.getElementById("detalles").rows[1].cells[5].innerHTML = "<h3>" + d6 + "</h3>";
    }
    $("#pisoder").show();
    $("#pisoizq").show();

    $('.nivel').click(function() { /*When one floor of the building is selected...*/
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 4000);
        $('#plano').hide();
        $('h2').hide();
        $('#pisoizq').hide();
        $('#pisoder').hide();
        $('#planta').css('background-color', 'rgb(217, 217, 217)');
        $('#txtcont').show();
        $('#etiquetas').show();

        $('#s2').html('<img id="render1" class="slide active-slide" src="IMGSimViArq/renders/Cocina.jpg" />')
        .append('<img id="render2" class="slide" src="IMGSimViArq/renders/Comedor.jpg" />')
        .append('<img id="render3" class="slide" src="IMGSimViArq/renders/Sala.jpg" />')
        .append('<img id="render4" class="slide" src="IMGSimViArq/renders/Recamara1.jpg" />')
        .append('<img id="render5" class="slide" src="IMGSimViArq/renders/Recamara2.jpg" />'); /*Loads renders for slider - gives the machine time to prepare the images*/

        document.getElementById("plano").style = "max-width: 100%";
        window.plant = $(this).attr("id");
        if (window.plant == "plantabaja") {
            document.getElementById("plano").src = "IMGSimViArq/PlantaBajaR.png";
            nivelSelecto = window.plant;
            $('#txtcont h1').text("Planta Baja");
            $("#pisoizq").show();
        }
        if (window.plant == "piso1") {
            document.getElementById("plano").src = "IMGSimViArq/Piso1R.png";
            nivelSelecto = window.plant;
            $('#txtcont h1').text("Piso 1");
        }
        if (window.plant == "piso2") {
            document.getElementById("plano").src = "IMGSimViArq/Piso1R.png";
            nivelSelecto = window.plant;
            $('#txtcont h1').text("Piso 2");
        }
        if (window.plant == "piso3") {
            document.getElementById("plano").src = "IMGSimViArq/Piso3R.png";
            nivelSelecto = window.plant;
            $('#txtcont h1').text("Piso 3");
            $('#s2').html('<img id="render1" class="slide active-slide" src="IMGSimViArq/renders/Cocina.jpg" />')
            .append('<img id="render3" class="slide" src="IMGSimViArq/renders/SalaEscaleras.jpg" />')
            .append('<img id="render4" class="slide" src="IMGSimViArq/renders/Recamara1.jpg" />')
            .append('<img id="render5" class="slide" src="IMGSimViArq/renders/Recamara2.jpg" />'); /*Specific images for this floor*/
        }
        if (window.plant == "roofg") {
            document.getElementById("plano").src = "IMGSimViArq/roofgardenR.png";
            nivelSelecto = window.plant;
            $('#txtcont h1').text("Roof Garden");
            $('#s2').html('<img id="renderT1" class="slide active-slide" src="IMGSimViArq/renders/Terraza1.jpg" />') /*Specific images for this floor*/
            .append('<img id="renderT2" class="slide" src="IMGSimViArq/renders/Terraza2.jpg" />')
            .append(' <img id="renderT3" class="slide" src="IMGSimViArq/renders/Terraza3.jpg" />');
        }

        $('.planopr').maphilight({ /*loads maplight for floor details*/
            fill: true,
            fillOpacity: 0.3,
            strokeColor: 'ff0000',
            strokeOpacity: 0,
            shadowColor: 'ff0000',
            shadowOpacity: 0,
            fillColor: 'ff0000'
        });
        $('.planodet').click(function(e) {
            e.preventDefault();
            var data = $(this).mouseout().data('maphilight') || {};
            data.alwaysOn = !data.alwaysOn;
            $(this).data('maphilight', data).trigger('alwaysOn.maphilight');
            data.alwaysOn = !data.alwaysOn;
        });
        console.log(nivelSelecto);
    });

    $('#depizq').click(function() { /*When left side of the floor is selected*/
      nombreTabla("M2 de construcción","Número de baños","Numero de estacionamientos","Número de recamaras","M2 de terrazas","M2 de Roof Garden");
      if (nivelSelecto == "roofg") {
          document.getElementById("piso").src = "IMGSimViArq/RG301R.png";
          $('.numdep').text("PH - 1");
          nombreTabla("M2 de Roof Garden","","","","","");
          ajusteTabla(46.69, "", "", "", "", "");
          $('#tabla').show();
      }
        if (nivelSelecto == "piso1") {
            document.getElementById("piso").src = "IMGSimViArq/Dep101A.png";
            $('.box h1').text("Departamento 101");
            ajusteTabla(73, 2, 2, 2, 7.4, " ");
            $("#t6").text("");
            $('#tabla').show();
        }
        if (nivelSelecto == "piso2") {
            document.getElementById("piso").src = "IMGSimViArq/Dep101A.png";
            $('.box h1').text("Departamento 201");
            ajusteTabla(73, 2, 2, 2, 7.4, " ");
            $("#t6").text("");
            $('#tabla').show();
        }
        if (nivelSelecto == "piso3") {
            document.getElementById("piso").src = "IMGSimViArq/Dep301A.png";
            $('.box h1').text("PH - 1");
            ajusteTabla(73, 2, 2, 2, 7.4, 46.69);
            $('#tabla').show();
        }
        $(".lightbox").show();
        $(".box").show();
        $('.zoomW').show();
        var zHeight = $('.zoomW').height();
        var zWidth = $('.zoomW').width();
        $('#piso').elevateZoom({
            zoomWindowPosition: "zoomW",
            zoomWindowHeight: zHeight,
            zoomWindowWidth: zWidth,
            borderSize: 5,
            borderColour: "#6A3A17",
            // scrollZoom: true,
            easing: true,
            containLensZoom: true,
        });
    });

    $('#depder').click(function() { /*When right side of the floor is selected*/
      nombreTabla("M2 de construcción","Número de baños","Numero de estacionamientos","Número de recamaras","M2 de terrazas","M2 de Roof Garden");
        if (nivelSelecto == "plantabaja") {
            document.getElementById("piso").src = "IMGSimViArq/DepPBA.png";
            $('.box h1').text(" Departamento PB");
            $("#t6").text("");
            ajusteTabla(73, 2, 2, 2, 20.1,"");
            $('#tabla').show();
        }
        if (nivelSelecto == "roofg") {
            document.getElementById("piso").src = "IMGSimViArq/RG302R.png";
            $('.numdep').text("PH - 2");
            nombreTabla("M2 de Roof Garden","","","","","");
            ajusteTabla(37.10, "", "", "", "", "");
            $('#tabla').show();
        }
        if (nivelSelecto == "piso1") {
            document.getElementById("piso").src = "IMGSimViArq/Dep102A.png";
            $('.box h1').text("Departamento 102");
            $("#t6").text("");
            ajusteTabla(73, 2, 2, 2, 7.4, " ");
            $('#tabla').show();
        }
        if (nivelSelecto == "piso2") {
            document.getElementById("piso").src = "IMGSimViArq/Dep102A.png";
            $('.box h1').text("Departamento 202");
            $("#t6").text("");
            ajusteTabla(73, 2, 2, 2, 7.4, " ");
            $('#tabla').show();
        }
        if (nivelSelecto == "piso3") {
            document.getElementById("piso").src = "IMGSimViArq/Dep302A.png";
            $('.box h1').text("PH - 2");
            ajusteTabla(73, 2, 2, 2, 7.4, 37.10);
            $('#tabla').show();
        }
        $(".lightbox").show();
        $(".box").show();

        $('.zoomW').show();
        var zHeight = $('.zoomW').height();
        var zWidth = $('.zoomW').width();
        $('#piso').elevateZoom({
            zoomWindowPosition: "zoomW",
            zoomWindowHeight: zHeight,
            zoomWindowWidth: zWidth,
            borderSize: 5,
            borderColour: "#6A3A17",
            // scrollZoom: true,
            cursor: "pointer",
            easing: true,
            containLensZoom: true,
        });
    });


    $('.close').click(function() { /*When the close button is clicked*/
        $('.lightbox').hide();
        $('.zoomW').hide();
        $.removeData($('#piso'), 'elevateZoom'); //remove zoom instance from image
        $('.zoomContainer').remove(); // remove zoom container from DOM
    });

    $('#piso').click(function() {
      $('.lightbox2').show();
      $('.box2').show();
      var heightad = $('.slide').height();
      console.log(heightad);
      $('.box2').css("height",heightad);
    });

    $('.next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        if (nextSlide.length == 0) {
            nextSlide = $('.slide').first();
        }
        currentSlide.fadeOut(1).removeClass('active-slide');
        nextSlide.fadeIn(10).addClass('active-slide');
    });
    $('.prev').click(function() {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        if (prevSlide.length == 0) {
            prevSlide = $('.slide').last();
        }
        currentSlide.fadeOut(1).removeClass('active-slide');
        prevSlide.fadeIn(10).addClass('active-slide');
    });


    // $(document).mouseup(function(e) {
    // var container = $(".box2");
    //
    //   if (!container.is(e.target) // if the target of the click isn't the container...
    //       &&
    //       container.has(e.target).length === 0) { // ... nor a descendant of the container
    //       container.hide();
    //       $('.lightbox2').hide();
    //   }
    $('.close2').click(function() { /*When the close button is clicked*/
        $('.lightbox2').hide();
    });

    $(window).load(function() { /*JS to resize map areas to promer img-div size. Responsive*/
        var ImageMap = function(map, img, width) {
                var n,
                    areas = map.getElementsByTagName('area'),
                    len = areas.length,
                    coords = [],
                    previousWidth = width; /*Size of original image input in declaration*/
                for (n = 0; n < len; n++) {
                    coords[n] = areas[n].coords.split(',');
                }
                this.resize = function() {
                    var n, m, clen,
                        x = img.offsetWidth / previousWidth;
                    for (n = 0; n < len; n++) {
                        clen = coords[n].length;
                        for (m = 0; m < clen; m++) {
                            coords[n][m] *= x;
                        }
                        areas[n].coords = coords[n].join(',');
                    }
                    previousWidth = document.body.clientWidth;
                    return true;
                };
                window.onresize = this.resize;
            },
            imageMap = new ImageMap(document.getElementById('Map'), document.getElementById('edificioimg'), 1875); /*Map_ID --- Image_ID, and original image width*/
        imageMap.resize(); /*Resizing for buildin map*/
        imageMap2 = new ImageMap(document.getElementById('Map1'), document.getElementById('plano'), 2730); /*Map_ID --- Image_ID, and original image width*/
        imageMap2.resize(); /*Resizing for floor detail map*/
        return;
    });

});
