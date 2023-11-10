// logic.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const dobInput = document.getElementById('in-date');
        const resultDiv = document.getElementById('result');

        const dob = dobInput.value;
        const dobDate = new Date(dob);
        const currentDate = new Date();

        let ageYears = currentDate.getFullYear() - dobDate.getFullYear();
        let ageMonths = currentDate.getMonth() - dobDate.getMonth();
        let ageDays = currentDate.getDate() - dobDate.getDate();

        if (ageDays < 0) {
            const daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
            ageDays += daysInLastMonth;
            ageMonths--;
        }

        if (ageMonths < 0) {
            ageMonths += 12;
            ageYears--;
        }

        resultDiv.textContent = `Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
    });
});
