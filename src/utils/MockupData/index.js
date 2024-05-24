import images from "../../assets/images/images"


// books data

const allBooksData = [
    {
        id: 1,
        author_id: 8,
        author_name: 'Murakami',
        book_name: 'After Dark',
        rating: {
            star: 4.0,
            views: 100,
            reviews: 5
        },
        category: 'Novel',
        publish_date: 'May 2007',
        language: 'English',
        pages: 208,
        read_time: '4-6 hours',
        type: 'Hardcover',
        publisher: 'Harvill Secker',
        old_price: 15,
        new_price: 10,
        plot_summary: 'In a hard-boiled city of crooks, grifts, and rackets lurk a pair of toughs: Box and They’re the kind of men capable of extracting apologies and reparations, of teaching you a chilling lesson. They seldom think twice, and ask very few questions. Until one night over the poker table, they encounter a pulp writer with wild ideas and an unscrupulous private detective, leading them into what is either a classic mystery or a senseless maze of corpses.',
        book_img: images.book_1

    },
    {
        id: 2,
        author_name: 'Mario Puzo',
        book_name: 'The Godfather',
        rating: {
            star: 4.9,
            views: 85,
            reviews: 15
        },
        category: 'Crime Fiction',
        publish_date: 'March 1969',
        language: 'English',
        pages: 448,
        read_time: '10-12 hours',
        type: 'Paperback',
        publisher: 'G.P. Putnam\'s Sons',
        old_price: 0,
        new_price: 14,
        plot_summary: 'The Godfather is a crime novel written by American _name Mario Puzo. Originally published in 1969, the novel details the story of a fictional Mafia family based in New York City (and Long Beach, New York), headed by Vito Corleone.',
        book_img: images.book_2
    },
    {
        id: 3,
        author_name: 'Daniel Cargallo',
        book_name: 'She Beyond Sun',
        rating: {
            star: 4.6,
            views: 165,
            reviews: 14
        },
        category: 'Scientific literature',
        publish_date: 'June 2019',
        language: 'English',
        pages: 320,
        read_time: '6-8 hours',
        type: 'Hardcover',
        publisher: 'Knopf',
        old_price: 19,
        new_price: 15,
        plot_summary: 'She Beyond Sun is a captivating Scientific literature novel that explores the possibilities of life beyond our solar system. With intricate world-building and compelling characters, Daniel Cargallo takes readers on an unforgettable journey through space and time.',
        book_img: images.book_3
    },
    {
        id: 4,
        author_name: 'Erik Spiekermann',
        book_name: 'Hello, I am Erik',
        rating: {
            star: 4.5,
            views: 120,
            reviews: 25
        },
        category: 'Scientific literature',
        publish_date: 'September 2020',
        language: 'English',
        pages: 256,
        read_time: '5-7 hours',
        type: 'Paperback',
        publisher: 'Random House',
        old_price: 15,
        new_price: 10,
        plot_summary: 'Hello, I am Erik is a fascinating Scientific literature of one of the most influential designers of our time, Erik Spiekermann. From his early years to his groundbreaking work in typography and graphic design, this book offers insight into the life and career of a true visionary.',
        book_img: images.book_4
    },
    {
        id: 5,
        author_name: 'Patrick Ness',
        book_name: 'More Than This',
        rating: {
            star: 4.4,
            views: 48,
            reviews: 42
        },
        category: 'Scientific literature',
        publish_date: 'September 2013',
        language: 'English',
        pages: 480,
        read_time: '8-10 hours',
        type: 'Paperback',
        publisher: 'Candlewick Press',
        old_price: 0,
        new_price: 200,
        plot_summary: 'More Than This is a gripping young adult novel that delves into themes of identity, reality, and survival. When Seth drowns, he wakes up alone, naked, and starving on the desolate English suburb where he grew up. As he navigates this strange new world, Seth must confront his past and unravel the mysteries of his existence.',
        book_img: images.book_5
    },
    {
        id: 6,
        author_name: 'Daniel GarGallo',
        book_name: 'She Beyond Sun',
        rating: {
            star: 4.5,
            views: 120,
            reviews: 25
        },
        category: 'Fiction',
        publish_date: 'January 2012',
        language: 'English',
        pages: 288,
        read_time: '5-7 hours',
        type: 'Paperback',
        publisher: 'Dial Press',
        old_price: 0,
        new_price: 166,
        plot_summary: 'From the Memoirs of a Non-Enemy Combatant is a darkly comedic novel that follows the misadventures of Boyet Hernandez, a Filipino fashion designer turned Guantanamo Bay detainee. Through Boyet’s witty narration, readers are treated to a satirical exploration of America’s War on Terror and the absurdity of modern warfare.',
        book_img: images.book_6
    },
    {
        id: 7,
        author_name: 'Mikhail Bulgakov',
        book_name: 'The Master & Margarita',
        rating: {
            star: 4.3,
            views: 30,
            reviews: 35
        },
        category: 'Novel',
        publish_date: '1967',
        language: 'Russian',
        pages: 384,
        read_time: '7-9 hours',
        type: 'Paperback',
        publisher: 'Vintage Books',
        old_price: 0,
        new_price: 100,
        plot_summary: 'The Master & Margarita is a surreal and satirical novel set in Soviet Russia. With its blend of fantasy, philosophy, and political commentary, Mikhail Bulgakov’s masterpiece has captivated readers around the world since its publication in 1967.',
        book_img: images.book_7
    },
    {
        id: 8,
        author_name: 'Donald',
        book_name: 'The Design of Everyday Things',
        rating: {
            star: 4.2,
            views: 20,
            reviews: 28
        },
        category: 'Business',
        publish_date: 'November 1988',
        language: 'English',
        pages: 368,
        read_time: '6-8 hours',
        type: 'Paperback',
        publisher: 'Basic Books',
        old_price: 0,
        new_price: 9,

        plot_summary: 'The Design of Everyday Things is a seminal work in the field of design psychology. In this groundbreaking book, Donald Norman explores the principles of user-centered design and the psychology of human interaction with everyday objects. From doors to smartphones, Norman reveals the hidden secrets behind good design and offers practical advice for creating products that are intuitive, enjoyable, and user-friendly.',
        book_img: images.book_8
    },
    {
        id: 9,
        author_id: 3,
        author_name: 'Jane Austen',
        book_name: 'Pride and Prejudice',
        rating: {
            star: 4.8,
            views: 200,
            reviews: 50
        },
        category: 'Romance',
        publish_date: 'January 1813',
        language: 'English',
        pages: 432,
        read_time: '9-11 hours',
        type: 'Paperback',
        publisher: 'Thomas Egerton',
        old_price: 12.99,
        new_price: 140,
        plot_summary: 'Pride and Prejudice is a classic romantic novel by Jane Austen. Set in early 19th-century England, the story follows the emotional development of Elizabeth Bennet, one of five sisters, as she navigates issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency.',
        book_img: images.book_9
    },
    {
        id: 10,
        author_id: 2,
        author_name: 'Leo Tolstoy',
        book_name: 'War and Peace',
        rating: {
            star: 4.7,
            views: 150,
            reviews: 45
        },
        category: 'Novel',
        publish_date: '1869',
        language: 'Russian',
        pages: 1225,
        read_time: '25-30 hours',
        type: 'Hardcover',
        publisher: 'The Russian Messenger',
        old_price: 20,
        new_price: 15,
        plot_summary: 'War and Peace is a historical novel by Leo Tolstoy, first published serially in 1865–69. It depicts relationships between the Rostov, Bolkonsky, Bezukhov, and Kuragin families and follows their members as they fight in the Napoleonic Wars.',
        book_img: images.book_10
    },
    {
        id: 11,
        author_name: 'Don DeLillo',
        book_name: 'The Names',
        rating: {
            star: 4.2,
            views: 80,
            reviews: 18
        },
        category: 'Business',
        publish_date: '1982',
        language: 'English',
        pages: 326,
        read_time: '6-8 hours',
        type: 'Paperback',
        publisher: 'Vintage Books',
        old_price: 13.99,
        new_price: 190,
        plot_summary: 'The Names is a novel by Don DeLillo, published in 1982. The story follows a man named James Axton as he travels across various international locations while investigating a mysterious cult. Through Axton\'s journey, DeLillo explores themes of language, identity, and globalization.',
        book_img: images.book_11,
    },
    {
        id: 12,
        author_name: 'Nathaniel Fick',
        book_name: 'One Bullet Away',
        rating: {
            star: 4.6,
            views: 120,
            reviews: 35
        },
        category: 'Biography',
        publish_date: '2005',
        language: 'Urdu',
        pages: 384,
        read_time: '7-9 hours',
        type: 'Paperback',
        publisher: 'Mariner Books',
        old_price: 16,
        new_price: 12,
        plot_summary: 'One Bullet Away is a memoir by Nathaniel Fick, a former United States Marine Corps officer. In the book, Fick provides a first-hand account of his experiences during the early years of the Iraq War, offering insights into the challenges and complexities of modern warfare.',
        book_img: images.book_12
    },
    {
        id: 13,
        author_name: 'Donna Tartt',
        book_name: 'The Goldfinch',
        rating: {
            star: 4.7,
            views: 250,
            reviews: 65
        },
        category: 'Literary Fiction',
        publish_date: '2013',
        language: 'Korean',
        pages: 864,
        read_time: '15-18 hours',
        type: 'Hardcover',
        publisher: 'Little, Brown and Company',
        old_price: 29.99,
        new_price: 240,
        plot_summary: 'The Goldfinch is a novel by Donna Tartt, which won the Pulitzer Prize for Fiction in 2014. The story follows a young boy named Theo Decker, who survives a terrorist attack at the Metropolitan Museum of Art in New York City. As Theo navigates the aftermath of the tragedy, he becomes entangled in the world of art forgery and crime.',
        book_img: images.book_13
    },
    {
        id: 14,
        author_name: 'Dante Alighieri',
        book_name: 'Divine Comedy',
        rating: {
            star: 4.9,
            views: 500,
            reviews: 150
        },
        category: 'Educational',
        publish_date: '14th century',
        language: 'Korean',
        pages: 928,
        read_time: '20-25 hours',
        type: 'Paperback',
        publisher: 'Various',
        old_price: 12,
        new_price: 100,
        plot_summary: 'The Divine Comedy is an epic poem by Dante Alighieri, composed in the 14th century. Divided into three parts—Inferno, Purgatorio, and Paradiso—the poem follows Dante\'s journey through Hell, Purgatory, and Heaven, guided by the poet Virgil and his beloved Beatrice. The Divine Comedy is widely considered one of the greatest works of world literature.',
        book_img: images.book_14
    },
    {
        id: 15,
        author_name: 'Dina Nayeri',
        book_name: 'A Teaspoon of Earth and Sea',
        rating: {
            star: 4.3,
            views: 90,
            reviews: 20
        },
        category: 'Literary Fiction',
        publish_date: '2013',
        language: 'Korean',
        pages: 384,
        read_time: '7-9 hours',
        type: 'Paperback',
        publisher: 'Riverhead Books',
        old_price: 14.99,
        new_price: 120,
        plot_summary: 'A Teaspoon of Earth and Sea is a novel by Dina Nayeri, published in 2013. Set in Iran during the 1980s, the story follows a young girl named Saba as she navigates the complexities of family, love, and identity in the aftermath of the Iranian Revolution. Through Saba\'s eyes, Nayeri offers a poignant exploration of the immigrant experience and the search for belonging.',
        book_img: images.book_15
    },

    {
        id: 16,
        author_id: 1, // Fyodor Dostoyevsky
        author_name: 'Fyodoe Dostoyevskiy',
        book_name: 'The Brothers Karamazov',
        rating: {
            star: 4.9,
            views: 400,
            reviews: 90
        },
        category: 'Educational',
        publish_date: '1880',
        language: 'Korean',
        pages: 796,
        read_time: '20-25 hours',
        type: 'Paperback',
        publisher: 'The Russian Messenger',
        old_price: 30,
        new_price: 240,
        plot_summary: 'The Brothers Karamazov is the final novel by Fyodor Dostoevsky, first published in 1880. It is a passionate philosophical novel that explores profound questions of morality, faith, and the existence of God through the tumultuous lives of three brothers: Dmitry, Ivan, and Alyosha Karamazov.',
        book_img: images.book_15
    },
    {
        id: 17,
        author_id: 4, // Charles Dickens
        author_name: 'Charles Dickens',
        book_name: 'Great Expectations',
        rating: {
            star: 4.7,
            views: 350,
            reviews: 75
        },
        category: 'Novel',
        publish_date: '1861',
        language: 'English',
        pages: 544,
        read_time: '15-18 hours',
        type: 'Paperback',
        publisher: 'Chapman & Hall',
        old_price: 18.99,
        new_price: 140,
        plot_summary: 'Great Expectations is a novel by Charles Dickens, first published in 1861. It is one of Dickens\'s most popular works and is now considered a classic of English literature. The story follows the life of an orphan named Pip, from his childhood through adulthood, as he navigates love, wealth, and social class in Victorian England.',
        book_img: images.book_14
    },
    {
        id: 18,
        author_id: 5, // William Shakespeare
        author_name: 'William Shakespeare',
        book_name: 'Romeo and Juliet',
        rating: {
            star: 4.9,
            views: 600,
            reviews: 120
        },
        category: 'Imaginative literature',
        publish_date: '1597',
        language: 'Urdu',
        pages: 368,
        read_time: '10-12 hours',
        type: 'Paperback',
        publisher: 'Various',
        old_price: 9.99,
        new_price: 100,
        plot_summary: 'Romeo and Juliet is a tragedy by William Shakespeare, written early in his career. It tells the story of two young star-crossed lovers whose deaths ultimately reconcile their feuding families. It was among Shakespeare\'s most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays.',
        book_img: images.book_13
    },
    {
        id: 19,
        author_id: 6, // Mark Twain
        author_name: 'Mark Twain',
        book_name: 'The Adventures of Tom Sawyer',
        rating: {
            star: 4.8,
            views: 350,
            reviews: 80
        },
        category: 'Business',
        publish_date: '1876',
        language: 'Urdu',
        pages: 224,
        read_time: '6-8 hours',
        type: 'Paperback',
        publisher: 'Chatto & Windus',
        old_price: 10,
        new_price: 100,
        plot_summary: 'The Adventures of Tom Sawyer is an adventure novel by Mark Twain, published in 1876. It tells the story of a young boy named Tom Sawyer and his adventures in the fictional town of St. Petersburg, inspired by Twain\'s own experiences growing up in Hannibal, Missouri.',
        book_img: images.book_14
    },
    {
        id: 20,
        author_id: 7, // Agatha Christie
        author_name: 'Agatha Christie',
        book_name: 'Murder on the Orient Express',
        rating: {
            star: 4.7,
            views: 300,
            reviews: 75
        },
        category: 'Imaginative literature',
        publish_date: 'January 1934',
        language: 'English',
        pages: 256,
        read_time: '5-7 hours',
        type: 'Paperback',
        publisher: 'Collins Crime Club',
        old_price: 12.99,
        new_price: 250,
        plot_summary: 'Murder on the Orient Express is a detective novel by Agatha Christie, featuring her detective Hercule Poirot. It was first published in the United Kingdom in 1934. The novel takes place on the luxurious Orient Express train, where Poirot investigates the murder of an American businessman.',
        book_img: images.book_12
    }


];

//authors data

const allAuthorsData = [
    {
        id: 1,
        book_count: 20,
        author_imgae: images.author_1,
        author_name: 'Fyodoe Dostoyevskiy'
    },
    {
        id: 2,
        book_count: 15,
        author_imgae: images.author_2,
        author_name: 'Leo Tolstoy'
    },
    {
        id: 3,
        book_count: 10,
        author_imgae: images.author_3,
        author_name: 'Jane Austen'
    },
    {
        id: 4,
        book_count: 12,
        author_imgae: images.author_4,
        author_name: 'Charles Dickens'
    },
    {
        id: 5,
        book_count: 18,
        author_imgae: images.author_5,
        author_name: 'William Shakespeare'
    },
    {
        id: 6,
        book_count: 25,
        author_imgae: images.author_6,
        author_name: 'Mark Twain'
    },
    {
        id: 7,
        book_count: 22,
        author_imgae: images.author_7,
        author_name: 'Agatha Christie'
    },
    {
        id: 8,
        book_count: 2,
        author_imgae: '',
        author_name: 'Haruki Murakami'
    },
    {
        id: 9,
        book_count: 1,
        author_imgae: '',
        author_name: 'Daniel Cargallo'
    },
    {
        id: 10,
        book_count: 1,
        author_imgae: '',
        author_name: 'Erik Spiekermann'
    },
    {
        id: 11,
        book_count: 1,
        author_imgae: '',
        author_name: 'Patrick Ness'
    },
    {
        id: 12,
        book_count: 1,
        author_imgae: '',
        author_name: 'C.R. Brunt'
    },
    {
        id: 13,
        book_count: 1,
        author_imgae: '',
        author_name: 'Donald Norman'
    },
    {
        id: 14,
        book_count: 1,
        author_imgae: '',
        author_name: 'Don DeLillo'
    },
    {
        id: 15,
        book_count: 1,
        author_imgae: '',
        author_name: 'Nathaniel Fick'
    },
    {
        id: 16,
        book_count: 1,
        author_imgae: '',
        author_name: 'Donna Tartt'
    },
    {
        id: 17,
        book_count: 1,
        author_imgae: '',
        author_name: 'Dante Alighieri'
    },
    {
        id: 18,
        book_count: 1,
        author_imgae: '',
        author_name: 'Dina Nayeri'
    }

];

//reviews

const allReviewsData = [
    {
        id: 1,
        viewer_name: 'Geoffrey Mott',
        viewer_img: images.viewer_1,
        date: '10 october 2022',
        review: 'Muscle by Alan Trotter is a fresh piece of noir fiction. Our main characters are the two crooks Box and _____. They are on the hunt for odd jobs that most of us, hopefully, would not be willing to fulfill. It felt reminiscent of both A Clockwork Orange and The Time Machine. I guess that can seem like a strange combination, but Alan Trotter made it work.When Box and _____. encounter a private detective and this strange writer, events quickly start to unravel. Oh, and there is a girl of course! Ixsas',
        star: 4,
    },
    {
        id: 2,
        viewer_name: 'Lisa Anderson',
        viewer_img: images.viewer_2,
        date: '10 october 2022',
        review: 'Oh I really disliked this in the end. What middling interest I had was completely lost by the fifth and last section.This is the story of two tough guys, goons for hire, as they pick up odd jobs roughing up guys, collecting debts and breaking hands. All written as a kind of Chandler pastiche, but possibly more of a parody.One of the goons, Box, passes the time reading sci-fi stories from pulp magazines an acquaintance writes for. Then, as the story progresses and the pair"s jobs take a dark turn',
        star: 1,
    },
    {
        id: 3,
        viewer_name: 'Florencio Dorrance',
        viewer_img: images.viewer_4,
        date: '10 october 2022',
        review: 'This is fantastic, and could have been written just for me. Grimly funny absurdist-existentialist noir that incorporates pulp sci-fi as well as hardboiled crime fiction elements to become a surprisingly powerful examination of the lasting impact of male violence in its many forms.It also does one of my favourite things, which is to recount other fictional stories within its own pages, a Vonnegut-style technique I never seem to tire of. The ending, too, which some have complained about, I think works perfectly.Phenomenally entertaining and sneakily profound.',
        star: 5,
    },
    {
        id: 4,
        viewer_name: 'Geoffrey Mott',
        date: '10 october 2022',
        review: 'Read a great review in the Guardian and took a chance. I should have paid more attention to the comparison with The New York Trilogy, my least favourite Auster experience.This does noir tropes really well with women always called “twists” or “frails”, but I wasn’t really on board for the final section where it all gets a bit meta. I’m down for literary noir, but this was no Motherless Brooklyn.',
        star: 3,
    },
];

//categories data
const categoriesData = [
    {
        id: 1,
        name: 'Imaginative literature',
        check: false,
    },
    {
        id: 2,
        name: 'Scientific literature',
        check: false,
    },
    {
        id: 3,
        name: 'Business',
        check: false,
    },
    {
        id: 4,
        name: 'Educational',
        check: false,
    },
    {
        id: 5,
        name: 'Other',
        check: false,
    },
]

//language data
const languagesData = [
    {
        id: 1,
        name: 'English',
        check: false,
    },
    {
        id: 2,
        name: 'Urdu',
        check: false,
    },
    {
        id: 3,
        name: 'Korean',
        check: false,
    },
]
export {
    allBooksData,
    allAuthorsData,
    categoriesData,
    languagesData

}