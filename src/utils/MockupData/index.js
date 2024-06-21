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
        book_img: images.book_1,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'


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
        book_img: images.book_2,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        book_img: images.book_3,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        book_img: images.book_4,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        book_img: images.book_5,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        book_img: images.book_6,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        book_img: images.book_7,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

    },
    {
        id: 8,
        author_name: 'Donald Norman',
        author_id: 13,
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
        book_img: images.book_8,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        book_img: images.book_9,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        book_img: images.book_10,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'
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
        book_img: images.book_12,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'
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
        book_img: images.book_13,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'
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
        book_img: images.book_14,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'
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
        book_img: images.book_15,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        book_img: images.book_15,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        language: 'Urdu',
        pages: 544,
        read_time: '15-18 hours',
        type: 'Paperback',
        publisher: 'Chapman & Hall',
        old_price: 18.99,
        new_price: 140,
        plot_summary: 'Great Expectations is a novel by Charles Dickens, first published in 1861. It is one of Dickens\'s most popular works and is now considered a classic of English literature. The story follows the life of an orphan named Pip, from his childhood through adulthood, as he navigates love, wealth, and social class in Victorian England.',
        book_img: images.book_14,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        book_img: images.book_13,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        book_img: images.book_14,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

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
        language: 'Urdu',
        pages: 256,
        read_time: '5-7 hours',
        type: 'Paperback',
        publisher: 'Collins Crime Club',
        old_price: 12.99,
        new_price: 250,
        plot_summary: 'Murder on the Orient Express is a detective novel by Agatha Christie, featuring her detective Hercule Poirot. It was first published in the United Kingdom in 1934. The novel takes place on the luxurious Orient Express train, where Poirot investigates the murder of an American businessman.',
        book_img: images.book_12,
        description: 'A novel exploring themes of language, identity, and terrorism through the experiences of a risk analyst in 1970s Greece.'

    },
    {
        id: 21,
        author_id: 8,
        author_name: 'Haruki Murakami',
        book_name: 'Kafka on the Shore',
        rating: {
            star: 4.3,
            views: 220,
            reviews: 60
        },
        category: 'Novel',
        publish_date: '2002',
        language: 'Urdu',
        pages: 467,
        read_time: '10-12 hours',
        type: 'Hardcover',
        publisher: 'Shinchosha',
        old_price: 25,
        new_price: 20,
        plot_summary: 'Kafka on the Shore is a metaphysical novel that intertwines the lives of a fifteen-year-old runaway, Kafka, and an elderly man, Nakata, in a surreal and fantastical narrative.',
        book_img: images.book_1,
        description: 'A metaphysical novel that explores themes of memory, identity, and destiny through intertwined narratives of a runaway teenager and an elderly man with a mysterious past.'
    },
    {
        id: 22,
        author_id: 9,
        author_name: 'Gabriel Garcia Marquez',
        book_name: 'One Hundred Years of Solitude',
        rating: {
            star: 4.8,
            views: 400,
            reviews: 150
        },
        category: 'Magical Realism',
        publish_date: '1967',
        language: 'Spanish',
        pages: 417,
        read_time: '10-12 hours',
        type: 'Paperback',
        publisher: 'Harper & Row',
        old_price: 20,
        new_price: 15,
        plot_summary: 'One Hundred Years of Solitude chronicles the rise and fall of the Buendía family in the fictional town of Macondo, blending realism and fantasy.',
        book_img: images.book_2,
        description: 'A landmark novel in magical realism, depicting the saga of the Buendía family and the mythical town of Macondo.'
    },
    {
        id: 23,
        author_id: 29,
        author_name: 'Toni Morrison',
        book_name: 'Beloved',
        rating: {
            star: 4.5,
            views: 320,
            reviews: 100
        },
        category: 'Historical Fiction',
        publish_date: '1987',
        language: 'English',
        pages: 324,
        read_time: '8-10 hours',
        type: 'Paperback',
        publisher: 'Knopf',
        old_price: 18,
        new_price: 12,
        plot_summary: 'Beloved is a novel about an escaped slave named Sethe who is haunted by the ghost of her deceased daughter.',
        book_img: images.book_3,
        description: 'A powerful narrative on the legacy of slavery, memory, and trauma, centered around Sethe and the haunting presence of her daughter\'s ghost.'
    },
    {
        id: 24,
        author_id: 11,
        author_name: 'Hermann Hesse',
        book_name: 'Siddhartha',
        rating: {
            star: 4.4,
            views: 180,
            reviews: 50
        },
        category: 'Philosophical Fiction',
        publish_date: '1922',
        language: 'German',
        pages: 152,
        read_time: '4-6 hours',
        type: 'Paperback',
        publisher: 'New Directions',
        old_price: 12,
        new_price: 8,
        plot_summary: 'Siddhartha is a philosophical novel that explores the spiritual journey of a man named Siddhartha during the time of the Buddha.',
        book_img: images.book_4,
        description: 'A profound exploration of spiritual enlightenment and self-discovery, set in ancient India during the time of the Buddha.'
    },
    {
        id: 25,
        author_id: 12,
        author_name: 'Kurt Vonnegut',
        book_name: 'Slaughterhouse-Five',
        rating: {
            star: 4.7,
            views: 350,
            reviews: 120
        },
        category: 'Satire',
        publish_date: '1969',
        language: 'Urdu',
        pages: 275,
        read_time: '6-8 hours',
        type: 'Paperback',
        publisher: 'Delacorte',
        old_price: 15,
        new_price: 10,
        plot_summary: 'Slaughterhouse-Five is a satirical novel about the experiences of Billy Pilgrim, a soldier who becomes "unstuck in time" and witnesses various moments of his life, including the bombing of Dresden.',
        book_img: images.book_5,
        description: 'A satirical and science fiction novel exploring the themes of war, trauma, and the nonlinear nature of time through the experiences of Billy Pilgrim.'
    },
];

//authors data

const allAuthorsData = [
    {
        id: 1,
        book_count: 0,
        author_image: images.author_1,
        author_name: 'Fyodoe Dostoyevskiy',
        category: 'Classic Literature',
        language: 'Russian'
    },
    {
        id: 2,
        book_count: 0,
        author_image: images.author_2,
        author_name: 'Leo Tolstoy',
        category: 'Classic Literature',
        language: 'Russian'
    },
    {
        id: 3,
        book_count: 0,
        author_image: images.author_3,
        author_name: 'Jane Austen',
        category: 'Romance',
        language: 'English'
    },
    {
        id: 4,
        book_count: 0,
        author_image: images.author_4,
        author_name: 'Charles Dickens',
        category: 'Classic Literature',
        language: 'English'
    },
    {
        id: 5,
        book_count: 0,
        author_image: images.author_5,
        author_name: 'William Shakespeare',
        category: 'Drama',
        language: 'English'
    },
    {
        id: 6,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'Mark Twain',
        category: 'Adventure',
        language: 'English'
    },
    {
        id: 7,
        book_count: 0,
        author_image: images.author_7,
        author_name: 'Agatha Christie',
        category: 'Mystery',
        language: 'English'
    },
    {
        id: 8,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'Haruki Murakami',
        category: 'Magical Realism',
        language: 'Japanese'
    },
    {
        id: 9,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'Daniel Cargallo',
        category: 'Science Fiction',
        language: 'English'
    },
    {
        id: 10,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'Erik Spiekermann',
        category: 'Design',
        language: 'German'
    },
    {
        id: 11,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'Patrick Ness',
        category: 'Young Adult',
        language: 'English'
    },
    {
        id: 12,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'C.R. Brunt',
        category: 'Historical Fiction',
        language: 'Urdu'
    },
    {
        id: 13,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'Donald Norman',
        category: 'Non-Fiction',
        language: 'English'
    },
    {
        id: 14,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'Don DeLillo',
        category: 'Postmodern Fiction',
        language: 'Urdu'
    },
    {
        id: 15,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'Nathaniel Fick',
        category: 'Memoir',
        language: 'Urdu'
    },
    {
        id: 16,
        book_count: 0,
        author_image: images.author_5,
        author_name: 'Donna Tartt',
        category: 'Literary Fiction',
        language: 'English'
    },
    {
        id: 17,
        book_count: 0,
        author_image: images.author_5,
        author_name: 'Dante Alighieri',
        category: 'Epic Poetry',
        language: 'Italian'
    },
    {
        id: 18,
        book_count: 0,
        author_image: images.author_5,
        author_name: 'Dina Nayeri',
        category: 'Contemporary Fiction',
        language: 'English'
    },
    {
        id: 19,
        book_count: 0,
        author_image: images.author_4,
        author_name: 'J.K. Rowling',
        category: 'Fantasy',
        language: 'English'
    },
    {
        id: 20,
        book_count: 0,
        author_image: images.author_2,
        author_name: 'George Orwell',
        category: 'Dystopian',
        language: 'English'
    },
    {
        id: 21,
        book_count: 0,
        author_image: images.author_1,
        author_name: 'Isaac Asimov',
        category: 'Science Fiction',
        language: 'English'
    },
    {
        id: 22,
        book_count: 0,
        author_image: images.author_2,
        author_name: 'J.R.R. Tolkien',
        category: 'Fantasy',
        language: 'English'
    },
    {
        id: 23,
        book_count: 0,
        author_image: images.author_3,
        author_name: 'Ernest Hemingway',
        category: 'Classic Literature',
        language: 'English'
    },
    {
        id: 24,
        book_count: 0,
        author_image: images.author_4,
        author_name: 'Gabriel Garcia Marquez',
        category: 'Magical Realism',
        language: 'Spanish'
    },
    {
        id: 25,
        book_count: 0,
        author_image: images.author_5,
        author_name: 'Franz Kafka',
        category: 'Modernist Literature',
        language: 'German'
    },
    {
        id: 26,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'Virginia Woolf',
        category: 'Modernist Literature',
        language: 'English'
    },
    {
        id: 27,
        book_count: 0,
        author_image: images.author_2,
        author_name: 'Albert Camus',
        category: 'Philosophical Fiction',
        language: 'French'
    },
    {
        id: 28,
        book_count: 0,
        author_image: images.author_2,
        author_name: 'Hermann Hesse',
        category: 'Philosophical Fiction',
        language: 'German'
    },
    {
        id: 29,
        book_count: 0,
        author_image: images.author_3,
        author_name: 'Toni Morrison',
        category: 'Literary Fiction',
        language: 'English'
    },
    {
        id: 30,
        book_count: 0,
        author_image: images.author_3,
        author_name: 'Gabriel Garcia Marquez',
        category: 'Magical Realism',
        language: 'Spanish'
    },
    {
        id: 31,
        book_count: 0,
        author_image: images.author_1,
        author_name: 'Kurt Vonnegut',
        category: 'Satire',
        language: 'English'
    },
    {
        id: 32,
        book_count: 0,
        author_image: images.author_2,
        author_name: 'George Eliot',
        category: 'Classic Literature',
        language: 'English'
    },
    {
        id: 33,
        book_count: 0,
        author_image: images.author_3,
        author_name: 'James Joyce',
        category: 'Modernist Literature',
        language: 'English'
    },
    {
        id: 34,
        book_count: 0,
        author_image: images.author_4,
        author_name: 'Franz Kafka',
        category: 'Modernist Literature',
        language: 'German'
    },
    {
        id: 35,
        book_count: 0,
        author_image: images.author_5,
        author_name: 'H.G. Wells',
        category: 'Science Fiction',
        language: 'English'
    },
    {
        id: 36,
        book_count: 0,
        author_image: images.author_6,
        author_name: 'Margaret Atwood',
        category: 'Dystopian',
        language: 'English'
    },

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
        viewer_img: images.viewer_3,
        date: '10 october 2022',
        review: 'This is fantastic, and could have been written just for me. Grimly funny absurdist-existentialist noir that incorporates pulp sci-fi as well as hardboiled crime fiction elements to become a surprisingly powerful examination of the lasting impact of male violence in its many forms.It also does one of my favourite things, which is to recount other fictional stories within its own pages, a Vonnegut-style technique I never seem to tire of. The ending, too, which some have complained about, I think works perfectly.Phenomenally entertaining and sneakily profound.',
        star: 5,
    },
    {
        id: 4,
        viewer_name: 'Geoffrey Mott',
        date: '10 october 2022',
        viewer_img: images.viewer_4,
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
    allReviewsData,
    categoriesData,
    languagesData

}