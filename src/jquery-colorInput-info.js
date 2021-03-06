// info

$.colorInput.registerComponent('info', {
    selector: '.colorInput-info',
    template: '<ul class="colorInput-info">' + '<li><label>R:<input type="text" data-type="r"/></label></li>' + '<li><label>G:<input type="text" data-type="g"/></label></li>' + '<li><label>B:<input type="text" data-type="b"/></label></li>' + '<li><label>A:<input type="text" data-type="a"/></label></li>' + '</ul>',
    color: ['white', 'black', 'transparent'],
    init: function(api) {
        this.$info = $(this.template).appendTo(api.$picker);;
        this.$r = this.$info.find('[data-type="r"]');
        this.$g = this.$info.find('[data-type="g"]');
        this.$b = this.$info.find('[data-type="b"]');
        this.$a = this.$info.find('[data-type="a"]');


        this.$info.delegate('input', 'keyup update change', function(e) {
            var val;
            var type = $(e.target).data('type');
            switch (type) {
                case 'r':
                case 'g':
                case 'b':
                    val = parseInt(this.value, 10);
                    if (val > 255) {
                        val = 255;
                    } else if (val < 0) {
                        val = 0;
                    }
                    break;
                case 'a':
                    val = parseFloat(this.value, 10);
                    if (val > 1) {
                        val = 1;
                    } else if (val < 0) {
                        val = 0;
                    }
                    break;
            }
            if (isNaN(val)) {
                val = 0;
            }
            var color = {};
            color[type] = val;
            api.value(color);
        });

        this.update(api);
    },
    update: function(api) {
        this.$r.val(api.color.value.r);
        this.$g.val(api.color.value.g);
        this.$b.val(api.color.value.b);
        this.$a.val(api.color.value.a);
    },
});

