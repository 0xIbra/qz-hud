var bankAmount = 0;
var cashAmount = 0;
var changing = false;

(() => {
    $(".marchas").fadeOut();
    $(".kmnumero").fadeOut();
    $(".kmtexto").fadeOut();
    $(".contenedoropciones").fadeOut();
    $(".barragasolina").fadeOut();
    $(".fuel-progress").fadeOut();
    $(".fuel-container").fadeOut();
    $("#gaso-icon").fadeOut();
    $(".porcentaje").fadeOut();
    var selector = document.querySelector("#todo")
    selector.style = "opacity:0.0;"
});

$(function () {
    window.addEventListener("message", function (event) {

        if (event.data.action === 'updatemoney') {
            let type = event.data.type;
            if (type === 'crypto') {
                return;
            }

            let isMinus = event.data.minus;

            let classToToggle = 'plus';
            if (isMinus) {
                classToToggle = 'minus';
            }

            if (type === 'cash') {
                $('#cash').addClass(classToToggle);
                setTimeout(() => $('#cash').removeClass(classToToggle), 2000);
            } else if (type === 'bank') {
                $('#bank').addClass(classToToggle);
                setTimeout(() => $('#bank').removeClass(classToToggle), 2000);
            }

            let amount = event.data.amount;
            let selector = '#bank-amount-val';

            if (!isMinus) {
                amount = bankAmount + Math.round(amount);
            } else {
                amount = bankAmount - Math.round(amount);
            }
            if (event.data.type === 'cash') {
                selector = '#cash-amount-val';
                if (!isMinus) {
                    amount = cashAmount + Math.round(event.data.amount);
                } else {
                    amount = cashAmount - Math.round(event.data.amount);
                }
            }

            let currentAmount = bankAmount;
            if (event.data.type === 'cash') {
                currentAmount = cashAmount;
            }

            if (changing === false) {
                changing = true;
                $(selector).prop("Counter", currentAmount).animate({
                    Counter: amount
                },
                {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.round(now));
                    }
                });

                setTimeout(() => changing = false, 2500);
            }

            //
            if (type === 'bank') {
                if (!isMinus) {
                    bankAmount += Math.round(event.data.amount);
                } else {
                    bankAmount -= Math.round(event.data.amount);
                }
            } else if (type === 'cash') {
                if (!isMinus) {
                    cashAmount += Math.round(event.data.amount);
                } else {
                    cashAmount -= Math.round(event.data.amount);
                }
            }

            return;
        }

        if (event.data.pauseMenu == false) {
            var selector = document.querySelector("#todo")
            selector.style = "opacity:1.0;"

            var armour = event.data.armour;
            $("#armour-percent").html(Math.round(armour) + "");
            $("#armour-level").css("width", armour + "");

            var health = event.data.health;
            $("#health-percent").html(Math.round(health) + "");
            $("#health-level").css("width", health + "");

            var food = event.data.food;
            $("#food-percent").html(Math.round(food) + "");
            $("#food-level").css("width", food + "");

            var thirst = event.data.thirst;
            $("#thirst-percent").html(Math.round(thirst) + "");
            $("#thirst-level").css("width", thirst + "");

            var stress = event.data.stress;
            $("#stress-percent").html(Math.round(stress) + "");
            $("#stress-level").css("width", stress + "");

            var id = event.data.id;
            $("#id-percent").html("" + id);

            bankAmount = event.data.bankAmount;
            $("#bank-amount-val").text(Math.round(bankAmount) + "");

            cashAmount = event.data.cashAmount;
            $("#cash-amount-val").text(Math.round(cashAmount) + "");

        } else {
            var selector = document.querySelector("#todo")
            selector.style = "opacity:0.0;"
        }

        if (event.data.estoyencoche == true) {

            var selector2 = document.querySelector("#ui")
            selector2.style = "opacity:1.0; left:17%; margin-top:1vh; bottom:0%; display:block;bottom:2%;overflow: hidden;"

            //var selectorid = document.querySelector("#others")
            //selectorid.style = "opacity:0.0;"

            var selectorid2 = document.querySelector("#ox")
            selectorid2.style = "opacity:0.0;"

            var armour = event.data.armour;
            $("#armour-percent2").html(Math.round(armour) + "");
            $("#armour-level2").css("width", armour + "");

            var health = event.data.health;
            $("#health-percent2").html(Math.round(health) + "");
            $("#health-level2").css("width", health + "");

            var food = event.data.food;
            $("#food-percent2").html(Math.round(food) + "");
            $("#food-level2").css("width", food + "");

            var thirst = event.data.thirst;
            $("#thirst-percent2").html(Math.round(thirst) + "");
            $("#thirst-level2").css("width", thirst + "");

            var stress = event.data.stress;
            $("#stress-percent2").html(Math.round(stress) + "");
            $("#stress-level2").css("width", stress + "");

        } else {

            var selectorid2 = document.querySelector("#ox")
            selectorid2.style = "opacity:1.0;"

            var selector2 = document.querySelector("#ui")
            selector2.style = "opacity:1.0;"

            //var selectorid = document.querySelector("#others")
            //selectorid.style = "opacity:1.0;"

        }

        if (event.data.isinthewater == true || event.data.isinthewater == 1) {

            var selectorid = document.querySelector(".oxigeno")
            selectorid.style = "opacity:0.0;"

            var selector1 = document.querySelector(".oxigenoagua")
            selector1.style = "opacity:1.0;"

            var armour = event.data.armour;
            $("#armour-percent2").html(Math.round(armour) + "");
            $("#armour-level2").css("width", armour + "");

            var health = event.data.health;
            $("#health-percent2").html(Math.round(health) + "");
            $("#health-level2").css("width", health + "");

            var food = event.data.food;
            $("#food-percent2").html(Math.round(food) + "");
            $("#food-level2").css("width", food + "");

            var thirst = event.data.thirst;
            $("#thirst-percent2").html(Math.round(thirst) + "");
            $("#thirst-level2").css("width", thirst + "");

            var oxigenoagua = event.data.oxigenoagua;
            $("#oxigenoagua-percent").html(Math.round(oxigenoagua) + "");
            $("#oxigenoagua-level").css("width", oxigenoagua + "");


        } else {

            var oxigeno = event.data.oxigeno;
            $("#oxigeno-percent").html(Math.round(oxigeno) + "");
            $("#oxigeno-level").css("width", oxigeno + "");

            var selectorid = document.querySelector(".oxigeno")
            selectorid.style = "opacity:1.0;"

            var selector1 = document.querySelector(".oxigenoagua")
            selector1.style = "opacity:0.0;"
        }

        if (event.data.isVIP == true || event.data.isinthewater == 1) {

            var selectorid = document.querySelector(".oxigeno")
            selectorid.style = "opacity:0.0;"

            var selector1 = document.querySelector(".oxigenoagua")
            selector1.style = "opacity:1.0;"

            var armour = event.data.armour;
            $("#armour-percent2").html(Math.round(armour) + "");
            $("#armour-level2").css("width", armour + "");

            var health = event.data.health;
            $("#health-percent2").html(Math.round(health) + "");
            $("#health-level2").css("width", health + "");

            var food = event.data.food;
            $("#food-percent2").html(Math.round(food) + "");
            $("#food-level2").css("width", food + "");

            var thirst = event.data.thirst;
            $("#thirst-percent2").html(Math.round(thirst) + "");
            $("#thirst-level2").css("width", thirst + "");

            var oxigenoagua = event.data.oxigenoagua;
            $("#oxigenoagua-percent").html(Math.round(oxigenoagua) + "");
            $("#oxigenoagua-level").css("width", oxigenoagua + "");


        } else {

            var oxigeno = event.data.oxigeno;
            $("#oxigeno-percent").html(Math.round(oxigeno) + "");
            $("#oxigeno-level").css("width", oxigeno + "");

            var selectorid = document.querySelector(".oxigeno")
            selectorid.style = "opacity:1.0;"

            var selector1 = document.querySelector(".oxigenoagua")
            selector1.style = "opacity:0.0;"
        }

        if (event.data.quitarhud == true) {
            var selector = document.querySelector("#All")
            selector.style = "display:none;"

        }

        if (event.data.ponerhud == true) {
            var selector = document.querySelector("#All")
            selector.style = "display:block;"
        }

        if (event.data.ponerbarras == true) {
            var selector = document.querySelector("#barras")
            selector.style = "display:block;"
            var selector2 = document.querySelector("#All")
            selector2.style = "display:none;"
        }

        if (event.data.quitarbarras == true) {
            var selector = document.querySelector("#barras")
            selector.style = "display:none;"
            var selector2 = document.querySelector("#All")
            selector2.style = "display:block;"
        }


    })

})


$(function () {

    window.addEventListener('message', function (event) {
        const v = event.data;

        if (v.type === 'cinturon:toggle') {
            if (v.toggle !== null || v.toggle === true && v.checkIsVeh != null || v.checkIsVeh === 1 === true) {
                $('.cinturon').html(`
                    <img src="./img/cinturon.png" id = "cinturon">
                `)
                //$('#cinturon').css({'filter' : 'invert(1)'})
            }
            if (v.checkIsVeh) {
                if (v.toggle) {
                    $('.cinturon').html(`
                        <img src="./img/cinturonpuesto.png" id = "cinturon">
                    `)
                } else {
                    $('.cinturon').html(`
                        <img src="./img/cinturon.png" id = "cinturon">
                    `)
                }

                if (v.toggle === true) { val = '0' } else { val = '1' }

                //$('#cinturon').css({'filter' : 'invert('+val+')'})
            }
        }


        if (v.luces == 1) {
            $('#faro').css({ 'color': 'white', 'text-shadow': '0 0 0 white' })
        };

        if (v.luceslargas == 1) {
            $('#faro').css({ 'color': 'white', 'text-shadow': '0 0 .4vw white' })
        };

        if (v.luces == 0 && v.luceslargas == 0) {
            $('#faro').css({ 'color': '#928b94', 'text-shadow': '0 0 0 white' })
        }

        if (v.locked == 1) {
            $('#bloqueo').css({ 'color': 'rgb(0, 235, 74)' });
        } else if (v.locked == 2) {
            $('#bloqueo').css({ 'color': 'rgb(235, 0, 51)' });
        }

        if (v.damage <= 900) {
            $('#daño').css({ 'color': 'rgb(235, 0, 51)' });
        } else if (v.damage > 900) {
            $('#daño').css({ 'color': '#928b94' });
        }

        if (v.type === 'carhud:update') {
            if (v.isInVehicle) {
                $(".contenedoropciones").fadeIn();
                $(".marchas").fadeIn();
                $(".marchas").html(Math.round(v.gear) + "");
                $(".kmnumero").fadeIn();
                $(".kmtexto").fadeIn();
                $(".kmnumero").html(('000' + Math.round(v.speed)).substr(-3));
                $(".barragasolina").fadeIn();
                $("#gaso-icon").fadeIn();
                $(".fuel-container").fadeIn();
                $(".fuel-progress").fadeIn();
                $(".porcentaje").fadeIn();
                $(".fuel-progress").css("width", Math.round(v.fuel) + "%");
                $(".porcentaje").html(Math.round(v.fuel) + "%");
                $(".porcentaje").html(Math.round(v.fuel) + "%");

            } else {
                $(".contenedoropciones").fadeOut();
                $(".marchas").fadeOut();
                $(".kmnumero").fadeOut();
                $(".kmtexto").fadeOut();
                $(".fuel-progress").fadeOut();
                $(".fuel-container").fadeOut();
                $("#gaso-icon").fadeOut();
                $(".porcentaje").fadeOut();
            }

            if (v.bankAmount != null && v.cashAmount != null) {
                bankAmount = Math.round(v.bankAmount);
                cashAmount = Math.round(v.cashAmount);

                $("#bank-amount-val").text(bankAmount);
                $("#cash-amount-val").text(cashAmount);
            }

            if (Math.round(v.speed) === 0) {
                $(".kmnumero").html("000");
            }
        }
    });
});
