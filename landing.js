const html = `
<head>
    <title> Fortune Machine </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css">
</head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

body {
    background-color: rgba(0,0,0,.8);
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    animation: MoveUpDown 1s infinite alternate;
    font-size: 1.7rem;
    font-family: 'Indie Flower', cursive;
    border-radius: 32px;
    background-color: #fff;
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
}

@keyframes MoveUpDown {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-.5rem);
    }
}

.card:hover {
    transition: .5s;
    background-color: #e0e0e0;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.4);
}

</style>
<body class="text-center">
<div class="card d-block mx-auto animated fadeInDown" id="button" style="width: 15rem; height: 15rem;">
    <div class="card-body">
        <img src="https://officialpsds.com/imageview/7y/3v/7y3vm6_large.png?1535118838" class="d-block mx-auto" style="width:8rem; height: 8rem;">
        <span class="mt-5">ask what your future holds</span>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.5.0.js" integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc=" crossorigin="anonymous"></script>
<script type="text/javascript">

// Add click event to button that triggers fetch request
$('#button').on('click', () => {
    loadVariant();
});

function loadVariant() {
    // Fetch one of the variants
    fetch(window.location.pathname, {
        method: 'POST'
    }).then( (response) => {
        // Retrieve the HTML
        response.text().then( text => {
            $('title').text('Your Fortune Is...')

            // Switch from landing page to variant page
            $('#button').fadeOut(1500, function() {
                $('body').html(text);

                // Check if it's variant 0 (rejection) and change the SVG if it is
                if(text.includes('passed over')) {
                    $('svg').html(\`<path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm0 57.5C16.836 59.5 4.5 47.164 4.5 32S16.836 4.5 32 4.5S59.5 16.836 59.5 32S47.164 59.5 32 59.5z" fill="#626262"/><circle cx="20.5" cy="24.592" r="5" fill="#626262"/><circle cx="43.5" cy="24.592" r="5" fill="#626262"/><path d="M32 36.572c-6.354 0-11.314 3.604-13.771 7.65c-.658 1.082.217 2.254 1.188 1.578c8.109-5.656 17.107-5.623 25.168 0c.971.676 1.846-.496 1.188-1.578c-2.459-4.046-7.419-7.65-13.773-7.65" fill="#626262"/>\`)
                    .attr('viewBox','0 0 64 64').attr('class','h-6 w-6 text-red-600').parent().removeClass('bg-green-100').addClass('bg-red-100');
                }
            });
        })
    })
}
</script>
</body>`

module.exports = html;