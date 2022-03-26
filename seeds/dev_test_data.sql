DROP DATABASE plant_heaven;

CREATE DATABASE plant_heaven;

USE plant_heaven;

CREATE TABLE products(
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(100) NOT NULL,
    Image VARCHAR(100) NOT NULL,
    Price DECIMAL(6,2) NOT NULL,
    Description TEXT NOT NULL,
    Category VARCHAR(30) NOT NULL,
    Sale VARCHAR(30)
);

INSERT INTO products
    (Title, Image, Price, Description, Category, Sale)
VALUES
    ("Monstera 'Split-Leaf'", "./img/prod1.jpeg", "19.99", "It is a climbing, evergreen perennial vine that is perhaps most noted for its large perforated leaves on thick plant stems and its long cord-like aerial roots.", "monstera", ""),
    ("Pothos 'N'joy'", "./img/prod2.jpeg", "13.99", "This Air purifying plant is arguably one of the easiest plants to grow indoors. The pothos grows in a vine like fashion making it a great plant to have in a hanging display to fill up any empty space on a shelf or desktop.", "pothos", "SALE"),
    ("Succulent 'String of Pearls'", "./img/prod3.jpeg", "12.99", "The string of pearls is a trailing succulent native to South Africa. This plant has long, loose tendrils with pearl shaped foliage which retains the plants' water.", "succulent", "CLEARANCE"),
    ("Peperomia 'Rosso'", "./img/prod4.jpeg", "19.99", "The Rosso has very distinctive pointed leaves with an attractive flowering variety with striking red undersides and deeply grooved glossy green leaves. Native to tropical Brazil, this plant will require similar care to most peperomias and succulents", "peperomia", ""),
    ("Zamioculcas Zamiifolia 'ZZ'", "./img/prod5.jpeg", "14.99", "The drought-tolerant ZZ plant is a wonderful addition to low-light situations in homes and offices, but all parts of this plant are poisonous. Keep it away from children and pets.", "zamioculcas", "CLEARANCE"),
    ("Spider Plant 'Bonnie'", "./img/prod6.jpeg", "21.99", "The Spider plant produces small white flowers that grow along a long stalk independent to the leaves of the spider plant. Also known for their air purifying qualities, the spider plant is a great companion to any household or office.", "spider", ""),
    ("Pothos 'Golden'", "./img/prod7.jpeg", "19.99", "This Air purifying plant is arguably one of the easiest plants to grow indoors. The pothos grows in a vine like fashion making it a great plant to have in a hanging display to fill up any empty space on a shelf or desktop.", "pothos", ""),
    ("Calathea Lancifolia 'Rattlesnake'", "./img/prod8.jpeg", "19.99", "This Calathea Lancifolia also commonly called the Rattlesnake comes with dark green leaves that have unique ripples. Like all Calathea plants, the leaves adjust as the sun rotates throughout the day.", "calathea", "SALE"),
    ("Money Tree 'Guiana Chestnut' Pachira Braid", "./img/prod9.jpeg", "29.99", "Native to central and South America, the Money Tree is a braided tree that can grow up to 6-8 feet indoors or be trained as a bonsai. In east Asia, the Money Tree is often used by those who practice Feng Shui to bring positive 'Chi', or energy, into the room.", "pachira", ""),
    ("Bird's Nest 'Nidus' Fern", "./img/prod10.jpeg", "19.99", "Native to the tropical regions of Asia and east Africa, Asplenium Nidus has large, light green, often crinkled leaves. This tropical plant prefers 'rainforest' conditions in partial shade or indirect sunlight, and high humidity. With the proper environment and attentive care, leaves can grow up to 5 ft long.", "fern", ""),
    ("Maranta 'Red Prayer'", "./img/prod11.jpeg", "39.99", "The Maranta is a evergreen perennial native to Central and South America. This plant flat oval leaves with a line pattern that runs symmetrically across the leaves.", "maranta", ""),
    ("Pothos 'Neon'", "./img/prod12.jpeg", "19.99", "An electrifying color variation on the standard Pothos. 'Neon' has all of the tough, reliable features houseplant lovers have come to expect from Pothos, but with glowing, neon-green foliage.", "pothos", "SALE")
;

CREATE TABLE testimonials(
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Job VARCHAR(100) NOT NULL,
    Message TEXT NOT NULL,
    Image VARCHAR(100) NOT NULL
)

INSERT INTO testimonials
    (Name, Job, Message, Image)
VALUES
    ("Harold Kumar", "Interior Designer", "Plant was very well packed, nice and warm and cozy with the cold protection pack. Nice plant, was well watered and arrived looking great. Very well satisfied. Would not hesitate to buy again.", "./img/testimonial1.jpg"),
    ("Travis Scoff", "Artist", "Plant arrived wrapped beautifully, with care, and the plant was lovely and larger than expected! The vibe of my space is very important to me and Plant Heaven has any type of house plant I could ever imagine wanting. Highly recommend!", "./img/testimonial2.png"),
    ("John Blaze", "Realtor", "As always, I love the plant... Plant Heaven is the best place to get plants online. They always arrive to the door, healthy and packed with care. I have never had a problem...", "./img/testimonial3.png")
;