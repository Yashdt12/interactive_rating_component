let rating = -1;

const ratings = document.querySelectorAll('li');

for (let ratingButton of ratings) {
  ratingButton.addEventListener('click', () => {
    for (let rb of ratings) {
      rb.classList.remove('grey');
    }
    ratingButton.classList.add('grey');
    rating = ratingButton.textContent;
  });
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (rating == -1) {
    alert('Please select a rating');
    return;
  }
  const view1 = document.querySelector('.container-ratings');
  const view2 = document.querySelector('.container-thankyou');
  const ratingValue = document.querySelector('.rating-value');
  view1.classList.add('none');
  view2.classList.remove('none');
  ratingValue.textContent = rating;
});