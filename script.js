const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];



const ref = {
    btnStart:document.querySelector('button[data-action="start"]'),
    btnStop:document.querySelector('button[data-action="stop"]'),
}

const rgbTimer ={
    idTimer:null,
    isActive:false,
    randomIntegerFromInterval(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    start(){
        if (this.isActive) {
            return;
        }
        this.isActive=true;
        this.idTimer=setInterval(()=> {
            colors.forEach((el,index,arr)=> {
                if(index === this.randomIntegerFromInterval(0,arr.length-1)) {
                    document.body.style.backgroundColor=`${el}`;
                }
            })

        },1000)
    },

    stop() {
        clearInterval(this.idTimer);
        this.isActive=false;
    },
};

ref.btnStart.addEventListener('click',rgbTimer.start.bind(rgbTimer));
ref.btnStop.addEventListener('click',rgbTimer.stop.bind(rgbTimer));
