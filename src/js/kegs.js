/*jshint esversion: 6 */
//import kegs from '../beers.json';

let kegData = '../beers.json';
/*
let kegs = [
                {
                    "tap": 1,
                    "name": "S'en Moque",
                    "style": "Biere de Garde",
                    "brewer": "Mute Dog Brewery",
                    "abv": 8.9,
                    "ibu": 21,
                    "srm": 8,
                    "volume": 424,
                    "pour": "",
                    "showForm": false
                },
                {
                    "tap": 2,
                    "name": "Summer Time",
                    "style": "Kolsch",
                    "brewer": "Mute Dog Brewery",
                    "abv": 5,
                    "ibu": 26,
                    "srm": 4,
                    "volume": 95,
                    "pour": "",
                    "showForm": false
                },
                {
                    "tap": 3,
                    "name": "Boppledock",
                    "style": "Dopplebock",
                    "brewer": "Mute Dog Brewery",
                    "abv": 8.0,
                    "ibu": 20,
                    "srm": 12,
                    "volume": 324,
                    "pour": "",
                    "showForm": false
                },
                {
                    "tap": 4,
                    "name": "Dr. Limey",
                    "style": "Hard Seltzer",
                    "brewer": "Mute Dog Brewery",
                    "abv": 4,
                    "ibu": 0,
                    "srm": 0,
                    "volume": 640,
                    "pour": "",
                    "showForm": false
                }
            ];*/

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