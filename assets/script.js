document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorElement = document.getElementById('error-message');

  const validUsername = "kelompok8";
  const validPassword = "gitajinggarosita";

  if (username === validUsername && password === validPassword) {
    window.location.href = "dashboard.html";
  } else {
    errorElement.textContent = "Username atau password salah!";
  }
});

function fetchData() {
  fetch("http://localhost:3000/api/data?apikey=kelompok8iotkey") 
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA:", data);
      const last = data; // Ambil data terakhir

      // Tampilkan nilai sensor
      document.getElementById("pressure-value").textContent = `${last.pressure} psi`;
      document.getElementById("humidity-value").textContent = `${last.humidity} %`;
      document.getElementById("sound-value").textContent = `${last.sound} dB`;
      document.getElementById("vibration-value").textContent = `${last.vibration} Hz`;
      document.getElementById("windspeed-value").textContent = `${last.windspeed} m/s`;
      })
     .catch(err => console.error("Gagal mengambil data:", err));
}

function togglePressure() {
  const btn = document.getElementById('pressure-button');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'Pressure OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500');
    addLog('pressure dimatikan');
  } else {
    btn.textContent = 'Pressure ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('pressure dinyalakan');
  }
}

function toggleHumidity() {
  const btn = document.getElementById('humidity-button');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'Hygrometer OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500');
    addLog('hygrometer dimatikan');
  } else {
    btn.textContent = 'Hygrometer ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('hygrometer dinyalakan');
  }
}

function toggleSound() {
  const btn = document.getElementById('sound-button');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'Soundmeter OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500');
    addLog('soundmeter dimatikan');
  } else {
    btn.textContent = 'Soundmeter ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('soundmeter dinyalakan');
  }
}

function toggleVibration() {
  const btn = document.getElementById('vibration-button');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'Vibration OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500');
    addLog('Vibration dimatikan');
  } else {
    btn.textContent = 'Vibration ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('Vibration dinyalakan');
  }
}

function toggleWindspeed() {
  const btn = document.getElementById('windspeed-button');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'Windspeed OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500');
    addLog('Windspeed dimatikan');
  } else {
    btn.textContent = 'Windspeed ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('Windspeed dinyalakan');
  }
}

// Log Aktivitas
function addLog(message) {
  const logElement = document.getElementById('activity-log');
  const time = new Date().toLocaleTimeString();
  const entry = document.createElement('p');
  entry.textContent = `[${time}] ${message}`;
  logElement.appendChild(entry);
}

// Inisialisasi (Hapus atau definisikan fungsi ini jika tidak ada)
addLog('Sistem IoT berjalan!');
fetchData();
setInterval(fetchData, 1000);
