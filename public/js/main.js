window.addEventListener( "load", onLoad.bind( this ) );

function onLoad() {
    setTimeout( function () {
        var $loader = document.querySelector( "loader" );
        $loader.classList.add( "hide" );

        setTimeout( function () {
            $loader.parentNode.removeChild( $loader );
        }, 150 );
    }, 1000 )
}