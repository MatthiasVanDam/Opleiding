$(document).ready(function() {
    /* Oefening || Selectors.    
      #  Vergeet niet de basis syntax: $('.your-selector');
      #  Meer info op: http://api.jquery.com/css/
      # Voorbeeld: css("propertyname","value");
      */
    /* #1: ID-Selector
      #
      #  Selecteer alle <h1> met de ID 'mijn-titel' en maak de tekstkleur rood.
      #
      */
    $('h1#mijn-titel').css('color', 'red');

    /* #2: Class-Selector
      #
      #  Selecteer alle <p> met de class 'test-class' en maak de tekstkleur blauw.
      #
      */
    $('p.test-class').css('color', 'blue');

    /* #2: Element-Selector
      #
      #  Selecteer alle <div> met de class 'bg-red' en zet de background-color op red;
      #  
      */
    $('div.bg-red').css('background-color', 'yellow')

    /* #3: Meerdere elementen
      #
      #  Selecteer alle <h2> en <h3>'s en verander de tekstkleur naar groen.
      #  
      */
    $('h2,h3').css('color', 'green')

    /* #4: Alle text-inputs meer padding geven
      #
      #  Selecteer alle text-inputs en zet de padding op 20px en de margin op 10px.
      #  Geef meerdere CSS-property's door gescheiden door een komma.
      */
    $(':text').css('padding', '20px', 'margin', '10px');


    /* #5: Parent-Child selector
      #
      #  Selecteer <address>-elementen in de footer en zet de font-size op 40px;
      #  
      */

    $('footer address').css('font-size', '40px')
        /* #5: Atrr selector
          #
          #  Selecteer alle <a>'s met een href="#", en zet de border rood
          #  
          */
    $('[href="#"]').css('border', '3px solid red')

    /* Experimenteer zelf met enkele selectors die je kan vinden op jQuery.com of W3C Schools */
}); // End of document.ready functie.