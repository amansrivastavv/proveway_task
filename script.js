const radioButtons = document.querySelectorAll('input[name="unit"]');
const totalPrice = document.getElementById('totalPrice');

const prices = {
  1: 10,
  2: 18,
  3: 24
};

radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    const selectedValue = radio.value;

    document.querySelectorAll('.offer-box').forEach((box) => {
      const input = box.querySelector('input[name="unit"]');
      const selectors = box.querySelector('.selectors');

      if (input.value === selectedValue) {
        box.classList.add('expanded');
        if (selectors) selectors.style.display = 'block';
      } else {
        box.classList.remove('expanded');
        if (selectors) selectors.style.display = 'none';
      }
    });

  
    totalPrice.textContent = `$${prices[selectedValue]}.00 USD`;
  });
});


const defaultSelected = document.querySelector('input[name="unit"]:checked');
if (defaultSelected) {
  defaultSelected.dispatchEvent(new Event('change'));
}
