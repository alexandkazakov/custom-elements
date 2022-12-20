var selector = document.getElementById("phone");

var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

new JustValidate('.js-form', {
    colorWrong: '#FF5C00',
    rules: {
        // name: {
        //     required: true,
        //     minLength: 3,
        // },
        phone: {
            required: true,
        },
    },

    messages: {
        // name: {
        //     minLength: 'Имя слишком короткое',
        // },
        name: 'Вы не ввели имя',
        email: 'Вы не ввели email',
        phone: 'Вы не ввели телефон',
    }
});