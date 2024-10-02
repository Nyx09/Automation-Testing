class Pages {
    async page(pageName) {
        switch (pageName) {
            case 'login':
                await browser.url('https://the-internet.herokuapp.com/login'); // Replace with your actual login URL
                break;
            // Add more cases for other pages as needed
            default:
                throw new Error(`Page "${pageName}" is not defined`);
        }
    }
}

export const pages = new Pages();
