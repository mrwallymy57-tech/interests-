// whatsapp-script.js
// DOM Elements
const phoneStep = document.getElementById('phoneStep');
const codeStep = document.getElementById('codeStep');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const verifyBtn = document.getElementById('verifyBtn');
const countrySelect = document.getElementById('country');
const phoneInput = document.getElementById('phone');
const verificationCode = document.getElementById('verificationCode');
const phoneNumberDisplay = document.getElementById('phoneNumberDisplay');
const countdownElement = document.getElementById('countdown');
const timerElement = document.getElementById('timer');
const resendLink = document.getElementById('resendLink');

let countdown = 30;
let countdownInterval;

// Format phone number input
phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
});

verificationCode.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 6) {
        value = value.substring(0, 6);
    }
    e.target.value = value;
});

// Next button click
nextBtn.addEventListener('click', function() {
    const phone = phoneInput.value.trim();
    const country = countrySelect.value;
    
    if (!phone) {
        alert('يرجى إدخال رقم الهاتف');
        return;
    }
    
    if (phone.length < 7) {
        alert('يرجى إدخال رقم هاتف صالح');
        return;
    }
    
    // Display phone number in verification step
    phoneNumberDisplay.textContent = country + ' ' + phone;
    
    // Switch to verification step
    phoneStep.classList.remove('active');
    codeStep.classList.add('active');
    step1.classList.remove('active');
    step1.classList.add('completed');
    step2.classList.add('active');
    
    // Start countdown
    startCountdown();
});

// Back button click
backBtn.addEventListener('click', function() {
    codeStep.classList.remove('active');
    phoneStep.classList.add('active');
    step2.classList.remove('active');
    step1.classList.add('active');
    step1.classList.remove('completed');
    
    // Clear verification code
    verificationCode.value = '';
    
    // Stop countdown
    stopCountdown();
});

// Verify button click
verifyBtn.addEventListener('click', function() {
    const code = verificationCode.value.trim();
    
    if (!code) {
        alert('يرجى إدخال رمز التحقق');
        return;
    }
    
    if (code.length !== 6) {
        alert('يرجى إدخال رمز تحقق صالح مكون من 6 أرقام');
        return;
    }
    
    // Simulate verification success
    alert('تم التحقق بنجاح! سيتم توجيهك إلى واتساب الآن.');
    // In a real app, you would redirect to the main WhatsApp interface
});

// Resend link click
resendLink.addEventListener('click', function() {
    // Simulate resending code
    alert('تم إرسال رمز التحقق الجديد إلى رقم هاتفك.');
    startCountdown();
});

// Countdown functions
function startCountdown() {
    countdown = 30;
    countdownElement.textContent = countdown;
    resendLink.classList.remove('active');
    
    countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            stopCountdown();
            resendLink.classList.add('active');
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdownInterval);
    timerElement.style.display = 'none';
                                  }
