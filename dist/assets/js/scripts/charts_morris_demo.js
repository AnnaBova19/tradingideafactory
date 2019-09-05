$(function() {

    Morris.Line({
        element: 'morris_line_chart',
            data: [
                { month: '2017-01', value: 25 },
                { month: '2017-02', value: 40 },
                { month: '2017-03', value: 30 },
                { month: '2017-04', value: 55 },
                { month: '2017-05', value: 100 },
                { month: '2017-06', value: 120 },  
                { month: '2017-07', value: 70 },
                { month: '2017-08', value: 90 },
                { month: '2017-09', value: 145 },
                { month: '2017-10', value: 150 },
                { month: '2017-11', value: 130 },
                { month: '2017-12', value: 80 },
                { month: '2018-01', value: 65 },
                { month: '2018-02', value: 100 },
                { month: '2018-03', value: 110 },
                { month: '2018-04', value: 100 },
                { month: '2018-05', value: 140 }
            ],
        xkey: 'month',
        xLabelFormat: function(date){
          return moment(date).format('MMM YYYY');
        },
        xLabelAngle: 45,
        ykeys: ['value'],
        yLabelFormat: function(value){
          return value + '%';
        },
        resize: true,
        lineWidth:4,
        labels: ['Value'],
        lineColors: ['#18C5A9'],
        pointSize:5
    });

    Morris.Bar({
        element: 'morris_bar_chart',
        data: [{ y: '2006', a: 60, b: 50 },
            { y: '2007', a: 45, b: 29 },
            { y: '2008', a: 80, b: 48 },
            { y: '2009', a: 58, b: 40 },
            { y: '2010', a: 74, b: 19 },
            { y: '2011', a: 59, b: 31 },
            { y: '2012', a: 40, b: 75 } ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true,
        barColors: ['#18C5A9', '#c7cccf'],
    });

    Morris.Area({
        element: 'morris_area_chart',
        data: [{ period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647 },
            { period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441 },
            { period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501 },
            { period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689 },
            { period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293 },
            { period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881 },
            { period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588 },
            { period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175 },
            { period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028 },
            { period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791 } ],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        lineColors: ['#8ce2d4', '#5dd6c3','#18C5A9'],
        lineWidth:2,
        pointSize:1,
    });

    Morris.Donut({
        element: 'morris_donut_chart',
        data: [{ label: "Download Sales", value: 12 },
            { label: "In-Store Sales", value: 30 },
            { label: "Mail-Order Sales", value: 20 } ],
        resize: true,
        colors: ['#8ce2d4', '#5dd6c3','#18C5A9'],
    });

});
