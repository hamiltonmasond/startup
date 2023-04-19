class Home {

    constructor() {
        const givenName = document.querySelector('.username');
        givenName.textContent = this.getUsername();
    }

    getUsername() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }
}