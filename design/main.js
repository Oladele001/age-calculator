const calculateage = document.getElementById ('calculate');
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const daysInput = document.getElementById('days');
const monthsInput = document.getElementById('months');
const yearsInput = document.getElementById('years');

calculateage.addEventListener('click', () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    if(month < 1 || month > 12){
        yearsInput.value = '--years';
        monthsInput.value = '--months';
        daysInput.value = '--days';
    }else if (day < 1 || day > 31){
        yearsInput.value = '--years';
        monthsInput.value = '--months';
        daysInput.value = '--days';
    }else if((month === 4 || month === 6 || month === 9 || month === 11) && day > 30){
        yearsInput.value = '--years';
        monthsInput.value = '--months';
        daysInput.value = '--days';
    }else if(month === 2 && (day > 29 || (day === 29 && !(year % 4 === 0 && (year % 100 !== 0 || year % 400=== 0))))){
        yearsInput.value = '--years';
        monthsInput.value = '--months';
        daysInput.value = '--days';
    }else{
        const birthDate = new Date (year, month - 1,day);
        const today = new Date();
        let age = today.getTime() - birthDate.getTime();
        age = Math.floor(age / (1000 * 60 * 60 * 24));
        const years = Math.floor(age / 365.25);
        age -=years * 365.25;
        const months = Math.floor(age / 30.44);
        age -= months * 30.44;
        const days  = Math.floor(age);
        yearsInput.value = `${years} years`;
        monthsInput.value = `${months} months`;
        daysInput.value = `${days} days`;
    }
});

