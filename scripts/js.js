
function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}

jQuery(document).ready(function($) {
    new Card({
        form: document.querySelector('.form-credit'),
        container: '.card-wrapper-credit',
        formSelectors: {
            numberInput: 'input#numero-cartao', // optional — default input[name="number"]
            expiryInput: 'input#validade-cartao', // optional — default input[name="expiry"]
            cvcInput: 'input#cod-secure', // optional — default input[name="cvc"]
            nameInput: 'input#nome-cartao' // optional - defaults input[name="name"]
        },
        placeholders: {
            number: '•••• •••• •••• ••••',
            name: 'Nome no Cartão',
            expiry: '••/••',
            cvc: '•••'
        },
        type: 'credit'
    });
    new Card({
        form: document.querySelector('.form-debit'),
        container: '.card-wrapper-debit',
        formSelectors: {
            numberInput: 'input#numero-cartao', // optional — default input[name="number"]
            expiryInput: 'input#validade-cartao', // optional — default input[name="expiry"]
            cvcInput: 'input#cod-secure', // optional — default input[name="cvc"]
            nameInput: 'input#nome-cartao' // optional - defaults input[name="name"]
        },
        placeholders: {
            number: '•••• •••• •••• ••••',
            name: 'Nome no Cartão',
            expiry: '••/••',
            cvc: '•••'
        },
        type: 'debit'
    });
});

//FORM
$("form").submit(function() {
    $(this).submit(function() {
        return false;
    });
    return true;
});

    $(document).ready(function() {
        $('#total-amount').text($('#parcelas').val().split('|')[1]);
        $('#credit-card-tab').click(function() {
            setAmountSelect('#parcelas')
        });
        $('#boleto-tab').click(function() {
            setAmountById('#boleto-amount')
        });
        $('#debit-card-tab').click(function() {
            setAmountById("#debit-amount")
        });
        $('#wallet-tab').click(function() {
            setAmountSelect('#parcelas-wallet')
        });
        $('#parcelas').change(function() {
            setAmountSelect('#parcelas')
        });
        $('#parcelas-wallet').change(function() {
            setAmountSelect('#parcelas-wallet')
        });
    });

function setAmountById(id) {
    $("#total-amount").text($(id).text());
}

function setAmountSelect(id) {
    var instalmentValues = $(id).val().split('|');
    console.log(instalmentValues);
    if (instalmentValues[2] === "True") {
        $(id + "-message").show();
    } else {
        $(id + "-message").hide();
    }
    $('#total-amount').text(instalmentValues[1]);
}
