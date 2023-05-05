<template>
    <div class="timer-container">
        <div class="timer">
            <div class="timer-value">
                <p>{{ timeRemaining.hours }}</p>
                <p>heures</p>
            </div>
            <div class="timer-value">
                <p>{{ timeRemaining.minutes }}</p>
                <p>minutes</p>
            </div>
            <div class="timer-value">
                <p>{{ timeRemaining.seconds }}</p>
                <p>secondes</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        endDate: {
            type: Date,
            required: true,
        },
    },
    data() {
        return {
            timeRemaining: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
        };
    },
    created() {
        setInterval(() => {
            const now = new Date();
            const timeDiff = this.endDate.getTime() - now.getTime();
            this.timeRemaining = this.getTimeRemaining(timeDiff);
        }, 1000);
    },
    methods: {
        getTimeRemaining(timeDiff) {
            let totalSeconds = Math.floor(timeDiff / 1000);
            if (totalSeconds < 0) {
                totalSeconds = 0;
                this.$emit('endtime')
            }
            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds / 3600) % 24);
            const minutes = Math.floor((totalSeconds / 60) % 60);
            const seconds = Math.floor(totalSeconds % 60);
            return {
                days,
                hours,
                minutes,
                seconds,
            };
        },
    },
};
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Covered+By+Your+Grace);

.timer-container {
    font-family: 'Covered By Your Grace', cursive;
    display: flex;
    justify-content: center;
    margin: 20px;
    color: white;
}

.timer {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 30%;
}

.timer-value {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.timer-value p {
    margin: 0;
    font-size: 30px;
}
</style>