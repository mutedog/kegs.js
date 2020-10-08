/*jshint esversion: 6 */

let kegData = '../beers.json';

new Vue({
    el: '#root',
    data: {
        Kegs: []
    },
    mounted() {
        fetch(kegData)
            .then(response => response.json())
            .then(data => (this.Kegs = data));
    },
    methods: {
        toggleForm(keg) {
            keg.showForm = !keg.showForm;
        },
        imgSrm(srm) {
            return 'images/srm/SRM '+srm+'.png';
        },
        imgKegvol(vol) {
            return 'images/kegs/'+Math.floor((vol / 640) * 100)+'.png';
        },
        save(i, newVol) {
            this.Kegs[i].volume = newVol;
            this.toggleForm(this.Kegs[i]);
            fetch('json.php', {
                method: 'POST',
                cache: 'no-cache',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.Kegs)
            });
        }
    }
});