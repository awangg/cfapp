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
$('#button').on('click', () => {
    loadVariant();
});

function loadVariant() {
    fetch(window.location.pathname, {
        method: 'POST'
    }).then( (response) => {
        response.text().then( text => {
            $('#button').fadeOut(1500, function() {
                $('body').html(text);
            });
        })
    })
}
</script>
</body>`

module.exports = html;