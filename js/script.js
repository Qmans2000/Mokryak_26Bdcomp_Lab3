document.getElementById('field1').addEventListener('input', function() {
    const checkbox = document.querySelector('.checkbox');
    checkbox.classList.toggle('visible', this.value.trim() == '6655 8844 2233 5599');
});
