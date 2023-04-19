class Home {

    constructor() {
        const givenName = document.querySelector('.user-name');
        givenName.textContent = this.getUsername();
    }

    getUsername() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }
}