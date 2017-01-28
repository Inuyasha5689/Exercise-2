new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertUser: function() {
                alert("Alert! Alert! Alert!");
            },
            updateValue: function(event) {
               this.value = event.target.value;
            }
        }
    });