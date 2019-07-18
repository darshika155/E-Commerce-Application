module.exports = {
  renderHomePage: function(req, res) {
    var fs = require("fs");

    var data = fs.readFileSync("./data1.json");
    data = JSON.parse(data);
    _.each(data.products, function(data, index) {
      data.imageName = "/images/" + data.imageName;
    });
    res.json({
      layout: false,
      products: data.products,
      front_image: "/images/" + data.front_image
    });
  }
};
