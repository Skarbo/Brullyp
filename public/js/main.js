window.addEventListener( "load", onLoad.bind( this ) );

function onLoad() {
    setTimeout( function () {
        var $loader = document.querySelector( "loader" );
        $loader.classList.add( "hide" );

        var isFirefox = navigator.userAgent.toLowerCase().indexOf( 'firefox' ) > -1,
            isNoRotate = isFirefox,
            $objects = document.querySelectorAll( "object" );

        if ( isNoRotate ) {
            var $object,
                objectsLength = $objects.length;
            for ( var i = 0; i < objectsLength; i++ ) {
                $object = $objects[i];
                ($object.contentDocument || $object.contentWindow.document).querySelector( "svg" ).classList.add( "no-rotate" );
            }
        }

        setTimeout( function () {
            $loader.parentNode.removeChild( $loader );
        }, 150 );
    }, 1000 )
}