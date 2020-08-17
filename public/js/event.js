$(document).ready(() => {

    const queryEventsByDate = (date) => {
        return $.ajax({
            url: `/api/event/date/${date}`,
            data: '',
            method: 'GET'
        });
    };

    let eventsPage = {
        'fetchedEvents': '',
        'displayDate': 'Sat Aug 29',
        'currentDate': '',
        'today': '',

        shiftWeekendDate: function() {
            //for toggle controls
            return 0;
        },

        getClosestWeekendDate: function() {
            //for initial State
            return 0;
        },

        getCurrentDate: function() {
            this.today = moment().format('ddd MMM D');
        },

        fetchCurrentEvents: async function() {
            //get dates from moment JS
            const date = 'Sat Aug 29';
            try {
                this['fetchedEvents'] = await queryEventsByDate(date);
                console.log(this['fetchedEvents']);
                //window.location.href = '/event';
            } catch(err) {
                //$('#login-textbox-label').text(err.responseText);
                //$('#login-textbox-label').css('color', 'red');
            }
        }
    };

    let ep = eventsPage;

    initialState = () => {
        //fetch current events data
        ep.fetchCurrentEvents();
        ep.getCurrentDate();
    };

    initialState();

});