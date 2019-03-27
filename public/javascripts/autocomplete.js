let d = [ 
    {
        "name": "Myanmar", 
        "capital": "yangon",
        "continent": "asia",
        "img": "https://dynamic.zacdn.com/d3kfTdUmZH3RnXI82eNpEhpasqc=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/bonia-1586-1393741-1.jpg"
    }, 
    {
        "name": "Morocco", 
        "capital": "yangon",
        "continent": "asia",
        "img": "https://dynamic.zacdn.com/d3kfTdUmZH3RnXI82eNpEhpasqc=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/bonia-1586-1393741-1.jpg"
    }, 
    {
        "name": "Thailand", 
        "capital": "bangkok",
        "continent": "asia",
        "img": "https://dynamic.zacdn.com/d3kfTdUmZH3RnXI82eNpEhpasqc=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/bonia-1586-1393741-1.jpg"
    }, 
    {
        "name": "Singapore", 
        "capital": "singapore",
        "continent": "asia",
        "img": "https://dynamic.zacdn.com/d3kfTdUmZH3RnXI82eNpEhpasqc=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/bonia-1586-1393741-1.jpg"
    }, 
];

$(document).ready(function() { 
    $(".flexdatalist").flexdatalist({
        minLength: 1,
        selectionRequired: true,
        visibleProperties: ["img", "name", "capital", "continent"],
        iconProperty: "img",
        searchIn: "name",
        data: d 
    });
});
