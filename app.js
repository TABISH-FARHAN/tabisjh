
const deadline = new Date();
deadline.setDate(deadline.getDate() + 7); // Set the deadline to 7 days from now

const intervalId = setInterval(() => {
  const now = new Date();
  const difference = deadline - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  if (difference < 0) {
    clearInterval(intervalId);
    document.getElementById('countdown-timer').textContent = 'Time is up!';
  }
}, 1000);