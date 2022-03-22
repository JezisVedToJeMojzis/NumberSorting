//Registration of service worker
navigator.serviceWorker.register("serviceWorker.js")
    .then((reg) => {
        console.log("[Service Worker] registered", reg)
    })
    .catch(err => {
        console.log("error", err)
    })

//screen.orientation.lock(ORIENTATION) //Doesnt work

var data = {
    "level1":
        [
            {
                "sk_flag": "flags/sk_flag.png",
            }
        ],
    "level2":
        [
            {
                "en_flag": "flags/en_flag.png",
            }
        ],
    "level3":
        [
            {
                "es_flag": "flags/es_flag.png",
            }
        ],
    "level4":
        [
            {
                "ge_flag": "flags/ge_flag.png",
            }
        ],
    "level5":
        [
            {
                "ru_flag": "flags/ru_flag.png",
            }
        ],
    "level6":
        [
            {
                "hu_flag": "flags/hu_flag.png",
            }
        ],
    "level7":
        [
            {
                "pl_flag": "flags/pl_flag.png",
            }
        ],
    "level8":
        [
            {
                "pt_flag": "flags/pt_flag.png",
            }
        ],
    "level9":
        [
            {
                "fr_flag": "flags/fr_flag.png",
            }
        ],
    "level10":
        [
            {
                "it_flag": "flags/it_flag.png",
            }
        ],

};

//Thanks to this touch works on mobile
(function ($) {
    $.support.touch = 'ontouchend' in document;
    if (!$.support.touch) {
        return;
    }
    var mouseProto = $.ui.mouse.prototype,
        _mouseInit = mouseProto._mouseInit,
        touchHandled;

    function simulateMouseEvent (event, simulatedType) {
        if (event.originalEvent.touches.length > 1) {
            return;
        }
        event.preventDefault();
        var touch = event.originalEvent.changedTouches[0],
            simulatedEvent = document.createEvent('MouseEvents');

        simulatedEvent.initMouseEvent(
            simulatedType,    // type
            true,             // bubbles
            true,             // cancelable
            window,           // view
            1,                // detail
            touch.screenX,    // screenX
            touch.screenY,    // screenY
            touch.clientX,    // clientX
            touch.clientY,    // clientY
            false,            // ctrlKey
            false,            // altKey
            false,            // shiftKey
            false,            // metaKey
            0,                // button
            null              // relatedTarget
        );
        event.target.dispatchEvent(simulatedEvent);
    }
    mouseProto._touchStart = function (event) {
        var self = this;
        if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
            return;
        }
        touchHandled = true;
        self._touchMoved = false;
        simulateMouseEvent(event, 'mouseover');
        simulateMouseEvent(event, 'mousemove');
        simulateMouseEvent(event, 'mousedown');
    };

    mouseProto._touchMove = function (event) {
        if (!touchHandled) {
            return;
        }
        this._touchMoved = true;
        simulateMouseEvent(event, 'mousemove');
    };
    mouseProto._touchEnd = function (event) {
        if (!touchHandled) {
            return;
        }
        simulateMouseEvent(event, 'mouseup');
        simulateMouseEvent(event, 'mouseout');
        if (!this._touchMoved) {
            simulateMouseEvent(event, 'click');
        }
        touchHandled = false;
    };
    mouseProto._mouseInit = function () {
        var self = this;
        self.element
            .on('touchstart', $.proxy(self, '_touchStart'))
            .on('touchmove', $.proxy(self, '_touchMove'))
            .on('touchend', $.proxy(self, '_touchEnd'));
        _mouseInit.call(self);
    };
})(jQuery);

var droppedNumbers = 0;
var levels = 1;
var img = new Image();
$( init );

function init() {
    droppedNumbers = 0;
    $('#numbers').html( '' );
    $('#slots').html( '' );

    if(levels===1) { //slovak
        //Add img from json into div in html
        data.level1.forEach( function(obj) {
            img.src = obj.sk_flag;
            img.setAttribute("id", "flag");
            document.getElementById("flags").appendChild(img);
        });
        var numbers = ["jeden", "dva", "tri", "štyri", "päť", "šesť", "sedem", "osem", "deväť", "desať"];
        numbers.sort(function () {
            return Math.random() - .5
        });
    }
    if(levels===2) { //english
        data.level2.forEach( function(obj) {
            img.src = obj.en_flag;
            img.setAttribute("id", "flag");
            document.getElementById("flags").appendChild(img);
        });
        var numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
        numbers.sort(function () {
            return Math.random() - .5
        });
    }
    if(levels===3) { //spanish
        data.level3.forEach( function(obj) {
            img.src = obj.es_flag;
            img.setAttribute("id", "flag");
            document.getElementById("flags").appendChild(img);
        });
        var numbers = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
        numbers.sort(function () {
            return Math.random() - .5
        });
    }
    if(levels===4) { //german
        data.level4.forEach( function(obj) {
            img.src = obj.ge_flag;
            img.setAttribute("id", "flag");
            document.getElementById("flags").appendChild(img);
        });
        var numbers = ["eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn"];
        numbers.sort(function () {
            return Math.random() - .5
        });
    }
    if(levels===5) { //russian
        data.level5.forEach( function(obj) {
            img.src = obj.ru_flag;
            img.setAttribute("id", "flag");
            document.getElementById("flags").appendChild(img);
        });
        var numbers = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять"];
        numbers.sort(function () {
            return Math.random() - .5
        });
    }
    if(levels===6) { //hungarian
        data.level6.forEach( function(obj) {
            img.src = obj.hu_flag;
            img.setAttribute("id", "flag");
            document.getElementById("flags").appendChild(img);
        });
        var numbers = ["egy", "kettő", "három", "négy", "öt", "hat", "hét", "nyolc", "kilenc", "tíz"];
        numbers.sort(function () {
            return Math.random() - .5
        });
    }
    if(levels===7) { //polish
        data.level7.forEach( function(obj) {
            img.src = obj.pl_flag;
            img.setAttribute("id", "flag");
            document.getElementById("flags").appendChild(img);
        });
        var numbers = ["jeden", "dwa", "trzy", "cztery", "pięć", "sześć", "siedem", "osiem", "dziewięć", "dziesięć"];
        numbers.sort(function () {
            return Math.random() - .5
        });
    }
    if(levels===8) { //portuguesse
        data.level8.forEach( function(obj) {
            img.src = obj.pt_flag;
            img.setAttribute("id", "flag");
            document.getElementById("flags").appendChild(img);
        });
        var numbers = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
        numbers.sort(function () {
            return Math.random() - .5
        });
    }
    if(levels===9) { //french
        data.level9.forEach( function(obj) {
            img.src = obj.fr_flag;
            img.setAttribute("id", "flag");
            document.getElementById("flags").appendChild(img);
        });
        var numbers = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];
        numbers.sort(function () {
            return Math.random() - .5
        });
    }  if(levels===10) { //italian
        data.level10.forEach( function(obj) {
            img.src = obj.it_flag;
            img.setAttribute("id", "flag");
            document.getElementById("flags").appendChild(img);
        });
        var numbers = ["uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci"];
        numbers.sort(function () {
            return Math.random() - .5
        });
    }

    //Numbers creation
    for ( var i=0; i<10; i++ ) {
        $('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'number'+numbers[i]).appendTo( '#numbers' ).draggable( {
            containment: '#container',
            stack: '#numbers div',
            cursor: 'move',
            revert: true
        } );
    }

    //Slots creation
    var slots = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    for ( var i=1; i<=10; i++ ) {
        $('<div>' + slots[i-1] + '</div>').data( 'number', i ).appendTo( '#slots' ).droppable( {
            accept: '#numbers div',
            hoverClass: 'hovered',
            drop: numberDragging
        } );
    }
}

function numberDragging(event, ui) {

    var number = ui.draggable.data('number');
    var slot=$(this).data('number');;

    if (levels === 1 ){ //slovak
        if (number === "jeden") {
            number = 1;
        }
        if (number === "dva") {
            number = 2;
        }
        if (number === "tri") {
            number = 3;
        }
        if (number === "štyri") {
            number = 4;
        }
        if (number === "päť") {
            number = 5;
        }
        if (number === "šesť") {
            number = 6;
        }
        if (number === "sedem") {
            number = 7;
        }
        if (number === "osem") {
            number = 8;
        }
        if (number === "deväť") {
            number = 9;
        }
        if (number === "desať") {
            number = 10;
        }
    }
    if (levels === 2 ){ //english

        if (number === "one") {
            number = 1;
        }
        if (number === "two") {
            number = 2;
        }
        if (number === "three") {
            number = 3;
        }
        if (number === "four") {
            number = 4;
        }
        if (number === "five") {
            number = 5;
        }
        if (number === "six") {
            number = 6;
        }
        if (number === "seven") {
            number = 7;
        }
        if (number === "eight") {
            number = 8;
        }
        if (number === "nine") {
            number = 9;
        }
        if (number === "ten") {
            number = 10;
        }
    }
    if (levels === 3 ){ //spanish
        if (number === "uno") {
            number = 1;
        }
        if (number === "dos") {
            number = 2;
        }
        if (number === "tres") {
            number = 3;
        }
        if (number === "cuatro") {
            number = 4;
        }
        if (number === "cinco") {
            number = 5;
        }
        if (number === "seis") {
            number = 6;
        }
        if (number === "siete") {
            number = 7;
        }
        if (number === "ocho") {
            number = 8;
        }
        if (number === "nueve") {
            number = 9;
        }
        if (number === "diez") {
            number = 10;
        }
    }
    if (levels === 4 ){ //german
        if (number === "eins") {
            number = 1;
        }
        if (number === "zwei") {
            number = 2;
        }
        if (number === "drei") {
            number = 3;
        }
        if (number === "vier") {
            number = 4;
        }
        if (number === "fünf") {
            number = 5;
        }
        if (number === "sechs") {
            number = 6;
        }
        if (number === "sieben") {
            number = 7;
        }
        if (number === "acht") {
            number = 8;
        }
        if (number === "neun") {
            number = 9;
        }
        if (number === "zehn") {
            number = 10;
        }
    }
    if (levels === 5 ){ //russian
        if (number === "один") {
            number = 1;
        }
        if (number === "два") {
            number = 2;
        }
        if (number === "три") {
            number = 3;
        }
        if (number === "четыре") {
            number = 4;
        }
        if (number === "пять") {
            number = 5;
        }
        if (number === "шесть") {
            number = 6;
        }
        if (number === "семь") {
            number = 7;
        }
        if (number === "восемь") {
            number = 8;
        }
        if (number === "девять") {
            number = 9;
        }
        if (number === "десять") {
            number = 10;
        }
    }
    if (levels === 6 ){ //hungary
        if (number === "egy") {
            number = 1;
        }
        if (number === "kettő") {
            number = 2;
        }
        if (number === "három") {
            number = 3;
        }
        if (number === "négy") {
            number = 4;
        }
        if (number === "öt") {
            number = 5;
        }
        if (number === "hat") {
            number = 6;
        }
        if (number === "hét") {
            number = 7;
        }
        if (number === "nyolc") {
            number = 8;
        }
        if (number === "kilenc") {
            number = 9;
        }
        if (number === "tíz") {
            number = 10;
        }
    }
    if (levels === 7 ){ //polish
        if (number === "jeden") {
            number = 1;
        }
        if (number === "dwa") {
            number = 2;
        }
        if (number === "trzy") {
            number = 3;
        }
        if (number === "cztery") {
            number = 4;
        }
        if (number === "pięć") {
            number = 5;
        }
        if (number === "sześć") {
            number = 6;
        }
        if (number === "siedem") {
            number = 7;
        }
        if (number === "osiem") {
            number = 8;
        }
        if (number === "dziewięć") {
            number = 9;
        }
        if (number === "dziesięć") {
            number = 10;
        }
    }
    if (levels === 8 ){ //portuguesse
        if (number === "um") {
            number = 1;
        }
        if (number === "dois") {
            number = 2;
        }
        if (number === "três") {
            number = 3;
        }
        if (number === "quatro") {
            number = 4;
        }
        if (number === "cinco") {
            number = 5;
        }
        if (number === "seis") {
            number = 6;
        }
        if (number === "sete") {
            number = 7;
        }
        if (number === "oito") {
            number = 8;
        }
        if (number === "nove") {
            number = 9;
        }
        if (number === "dez") {
            number = 10;
        }
    }
    if (levels === 9 ){ //french
        if (number === "un") {
            number = 1;
        }
        if (number === "deux") {
            number = 2;
        }
        if (number === "trois") {
            number = 3;
        }
        if (number === "quatre") {
            number = 4;
        }
        if (number === "cinq") {
            number = 5;
        }
        if (number === "six") {
            number = 6;
        }
        if (number === "sept") {
            number = 7;
        }
        if (number === "huit") {
            number = 8;
        }
        if (number === "neuf") {
            number = 9;
        }
        if (number === "dix") {
            number = 10;
        }
    }
    if (levels === 10 ){ //italian
        if (number === "uno") {
            number = 1;
        }
        if (number === "due") {
            number = 2;
        }
        if (number === "tre") {
            number = 3;
        }
        if (number === "quattro") {
            number = 4;
        }
        if (number === "cinque") {
            number = 5;
        }
        if (number === "sei") {
            number = 6;
        }
        if (number === "sette") {
            number = 7;
        }
        if (number === "otto") {
            number = 8;
        }
        if (number === "nove") {
            number = 9;
        }
        if (number === "dieci") {
            number = 10;
        }
    }

    //If number is dropped onto correct slot
    if (number === slot) {
        ui.draggable.addClass('correct');
        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position({
            of: $(this), my: 'left top', at: 'left top'
        });
        //Number stays where its dropped
        ui.draggable.draggable('option', 'revert', false);
        droppedNumbers++;
    }
    //Next level
    if (droppedNumbers === 10) {
        //Delete img from div in html
        document.getElementById("flags").removeChild(img);
        //Increment level
        levels++;
        //Reset game after 10th level
        if (levels === 11){
            levels = 1;
        }
        init();
    }
}
