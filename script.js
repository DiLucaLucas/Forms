document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('options');

    // Función para generar opciones desde un JSON
    const fetchOptions = async () => {
        try {
            const response = await fetch('options.json');
            const data = await response.json();

            data.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.label;
                selectElement.appendChild(optionElement);
            });
        } catch (error) {
            console.error('Error al cargar las opciones:', error);
        }
    };

    fetchOptions();

    // Manejo del evento submit
    document.getElementById('myForm').addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log(data);
    });
});
