(function($){
    $(function(){
        $("#submit").on("submit",function  (e) {
            e.preventDefault();
            console.log();
            $.post("/home/A_F", $(this).serialize(), function( data ) {
                //if (data == 'succes' ) {
                    //window.location.replace(`/home`);
                //}
                //else if(data == 'mailExist'){}
                var xValues = new Array();
                var yValues = new Array();
                var yValues_ang = new Array();

                for (let index = -10; index <= 10; index++) {
                    xValues[index + 10] = index;
                    yValues[index + 10] = data[index + 10].abs;
                    yValues_ang[index + 10] = data[index + 10].ang;
                }

                var trace1 = {
                    x: xValues,
                    y: yValues,
                    type: 'scatter'
                };
                var trace2 = {
                    x: xValues,
                    y: yValues_ang,
                    type: 'scatter'
                };
                console.log(data[data.length - 1]);
                var data_abs = [trace1];
                var data_ang = [trace2];
                Plotly.newPlot('plotAbs', data_abs);
                Plotly.newPlot('plotAng', data_ang);
                var elements = document.querySelectorAll('.tit');
                elements = elements.length ? elements : [elements];
                for (var index = 0; index < elements.length; index++) {
                    elements[index].style.visibility = 'visible';
                }
           });
        })

    }); // end of document ready
})(jQuery); // end of jQuery name space
