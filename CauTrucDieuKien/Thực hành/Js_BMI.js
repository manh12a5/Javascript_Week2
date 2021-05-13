let kg, m, bmi, cm;
kg= parseFloat(prompt('Nhap So Can (kg): '));
cm= parseFloat(prompt('Nhap Chieu Cao (cm): '));
m= cm/100;
bmi = kg /( m * m);
if (bmi < 18.5) {
    alert('Gay');
} else if (bmi < 25) {
    alert('Binh Thuong');
} else if (bmi < 30) {
    alert('Qua Can');
} else if (bmi >= 30) {
    alert('Beo Phi');
} else {
    alert("Nhap Lai ");
}
