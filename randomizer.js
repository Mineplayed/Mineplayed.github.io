document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
        
var xDown = null;                                                        
var yDown = null;

// Get all the images
image_array = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
    "31.jpg",
    "32.jpg",
    "33.jpg",
    "34.jpg",
    "35.jpg",
    "36.jpg",
    "37.jpg",
    "38.jpg",
    "39.jpg",
    "40.jpg",
    "41.jpg",
    "42.jpg",
    "43.jpg",
    "44.jpg",
    "45.jpg",
    "46.jpg",
    "47.jpg",
    "48.jpg",
    "49.jpg",
    "50.jpg",
    "51.jpg",
    "52.jpg",
    "53.jpg",
    "54.jpg",
    "55.jpg",
    "56.jpg",
    "57.jpg",
    "58.jpg",
    "59.jpg",
    "60.jpg",
    "61.jpg",
    "62.jpg",
    "63.jpg",
    "64.jpg",
    "65.jpg",
    "66.jpg",
    "67.jpg",
    "68.jpg"
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('img_shower').src = `./img/dossiers/${selected_image}`
  }

  function check()
        {
            var password = document.getElementById("Pass").value;

            if (password == "Les cowboys sont géniaux", "Les cowboys sont géniaux ")
            {
              alert("Même si Sacha à une mauvaise orthographe");
            }
        }

        
        
  function getTouches(evt) {
    return evt.touches ||             // browser API
      evt.originalEvent.touches; // jQuery
    }                                                     
                                                                                 
  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
    };                                                
                                                                                 
        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }
        
            var xUp = evt.touches[0].clientX;                                    
            var yUp = evt.touches[0].clientY;
        
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
                                                                                 
            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    /* right swipe */
                    window.location.href = './img/autres/easter_egg_swipe_right.html';
                    return false; 
                } else {
                    /* left swipe */
                }                       
            } else {
                if ( yDiff > 0 ) {
                    /* down swipe */ 
                } else { 
                    /* up swipe */
                }                                                                 
            }
            /* reset values */
            xDown = null;
            yDown = null;                                             
        };