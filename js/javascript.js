// Get Input Element From DOM
const filterInput = document.querySelector('#filterInput');
const Ul = document.querySelector('#names');
const items = Ul.querySelectorAll('.collection-item a');

// Building Function
function filterName() {
   const filterValue = filterInput.value.toUpperCase();
   for(item of items) {
       if(item.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
         item.style.display = '';
       } else {
         item.style.display = 'none';
       }
   }
}
// Add Event Listener
filterInput.addEventListener('input',filterName);