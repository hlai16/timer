

const timer = (sec) => {
    sec = process.argv.slice(2);
    for (let time of sec) {
        if (time === '' || time < 0 || isNaN(time)) {
            return false;
        } else {
            const convertToSec = time * 1000;
            setTimeout(() => {
            process.stdout.write('beep');
        }, convertToSec);
        }
        
    }
}

timer();