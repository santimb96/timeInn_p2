const layout = {
        header: `<header><h1>Header</h1></header>`,
        footer:`<footer><h4>Footer</h4></footer>`,
        render: function () {
            document.getElementById("header").innerHTML = this.header;
            document.getElementById("footer").innerHTML = this.footer;
        }
}