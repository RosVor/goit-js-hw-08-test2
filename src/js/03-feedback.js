import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const feedbackStateKey = 'feedback-form-state';

const saveFeedbackState = throttle(function () {
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackStateKey, JSON.stringify(feedbackState));
}, 500);

form.addEventListener('input', saveFeedbackState);
document.addEventListener('DOMContentLoaded', function () {
  const savedState = localStorage.getItem(feedbackStateKey);
  if (savedState) {
    const feedbackState = JSON.parse(savedState);
    emailInput.value = feedbackState.email;
    messageInput.value = feedbackState.message;
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(feedbackState);
  localStorage.removeItem(feedbackStateKey);
  emailInput.value = '';
  messageInput.value = '';
});
