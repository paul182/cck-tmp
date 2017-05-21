$(document).ready(function(){
    var guestPopoverTemplate = '<div class="popover" role="tooltip"><div class="arrow"></div><div>Looking for a fresh cast. Sign up to find put more <button type="button" class="btn btn-primarygradient">Sign Up / Sign in</button></div></div>';
		
    $('[data-toggle="popover"]').popover({
        template: guestPopoverTemplate,
        html: true
    });   
});