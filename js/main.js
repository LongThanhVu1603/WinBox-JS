const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const more = document.querySelector('#more');

const about_content = document.querySelector('#about-content');
const contact_content = document.querySelector('#contact-content');
const more_content = document.querySelector('#more-content');


about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        // use mount to show content
        mount: about_content,
        onfocus: function () {
        this.setBackground('#00aa00')
        },
        onblur: function () {
        this.setBackground('#777')
        },
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        width: '400px',
        height: '400px',
        top: 100,
        right: 50,
        bottom: 50,
        left: 100,
        // use mount to show content
        mount: contact_content,
        onfocus: function () {
        this.setBackground('#00aa00')
        },
        onblur: function () {
        this.setBackground('#777')
        },
    })
})

more.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'More',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 150,
        // use mount to show content
        mount: more_content,
        onfocus: function () {
        this.setBackground('#00aa00')
        },
        onblur: function () {
        this.setBackground('#777')
        },
    })
})