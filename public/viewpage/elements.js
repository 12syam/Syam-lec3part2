//main root element
export const root = document.getElementById('root');

export const MENU = {
    SignIn : document.getElementById('menu-signin'),
    Home : document.getElementById('menu-home'),
    Purchases : document.getElementById('menu-purchases'),
    SignOut : document.getElementById('menu-signout'),
    Cart: document.getElementById('menu-cart'),
    Profile: document.getElementById('menu-profile'),
    CartItemCount: document.getElementById('menu-cart-item-count'),
}

//Form
//export const formSignIn = document.getElementById('form-signin');
/*export const formAddProduct = {
    form: document.getElementById('form-add-product'),
    imageTag: document.getElementById('form-add-product-image-tag'),
    imageButton: document.getElementById('form-add-product-image-button'),
}*/
/*export const formEditProduct = {
    form: document.getElementById('form-edit-product'),
    imageTag: document.getElementById('form-edit-product-image-tag'),
    imageButton: document.getElementById('form-edit-product-image-button'),
}*/
//Modals
export const modalInfobox = {
    modal:new bootstrap.Modal(document.getElementById('modal-infobox'), {backdrop: 'static'}),
    title:document.getElementById('modal-infobox-title'),
    body:document.getElementById('modal-infobox-body'),
}

export const modalTransaction ={
    modal: new bootstrap.Modal(document.getElementById('modal-transaction'),{backdrop:'static'}),
    title: document.getElementById('modal-transaction-title'),
    body: document.getElementById('modal-transaction-body')
}

export const modalSignin = {
    modal:new bootstrap.Modal(document.getElementById('modal-signin'),{backdrop:'static'}),
    form: document.getElementById('form-signin'),
    showSignupModal: document.getElementById('button-show-signup-modal'),
}

export const modalSignup = {
    modal:new bootstrap.Modal(document.getElementById('modal-signup'),{backdrop:'static'}),
    form: document.getElementById('modal-signup-form'),
}