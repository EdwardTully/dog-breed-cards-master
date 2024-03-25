



const breedImages = [
    {
        id: 1,
        title: 'Bernese Mountain Dog',
        image: '../images/bernese-mountain-dog-642013_640.jpg',
        info: 'The Bernese Mountain Dog is slightly longer than tall, though appearing square. This breed is a sturdy, large, hardy dog with a combination of strength, speed, and agility. The Bernese’s natural working gait is a slow trot, but with good reach and drive. The thick coat is moderately long, and slightly wavy or straight, providing insulation from the cold. The expression is gentle, and the color is striking.',
        price: '$1200'
    },
    {
        id: 2,
        title: 'Great Dane',
        image: '../images/great-dane-2973438_640.jpg',
        info: 'This regal breed combines great size and power with elegance. They are square proportioned and well balanced. The gait is strong and powerful with long, easy strides. The coat is short, thick, and glossy. The Great Dane is most noteworthy for its majestic carriage and appearance— the Apollo of Dogs.',
        price: '$1200'
    },
    {
        id: 3,
        title: 'Labrador Retriever',
        image: '../images/labrador-retriever-1210559_640.jpg',
        info: 'The Labrador is a moderate dog, not extreme in any way. It is square or slightly longer than tall, of fairly large bone and substance. The breeds broad head and strong jaws enabled the dog to carry the largest game birds, such as Canada geese. A heavy body and strong legs enable the dog to swim and run powerfully. The coat, which is short, straight, and dense with a soft undercoat, is weatherproof and helps to protect it from icy waters. The Lab is a working retriever and possesses style without over-refinement, and substance without clumsiness.',
        price: '$1200'
    },
    {
        id: 4,
        title: 'Newfoundland Retriever',
        image: '../images/newfoundland-609531_640.jpg',
        info: "The Newfoundland is a large, heavily boned, powerful dog, strong enough to pull a drowning man from rough seas. The dog's appearance is both huggable but imposing. This breed is slightly longer than it is tall. The gait gives the impression of effortless power, with good reach and drive, and the double coat is a soft, dense undercoat with a coarse, moderately long and straight outer coat. The dog's soft expression reflects its benevolent and dignified temperament.",
        price: '$1200'
    },
    {
        id: 5,
        title: 'Stupid Pug',
        image: '../images/pug-4314106_640.jpg',
        info: 'The Pug is often described as a lot of dog in a small space. These sturdy, compact dogs are a part of the American Kennel Club’s Toy group, and are known as the clowns of the canine world because they have a great sense of humor and like to show off. Square-proportioned, compact and of a stocky build, the Pug is a large dog in a little space. Their gait is strong and jaunty, but with a slight roll of the hindquarters. Their distinctive expression is soft and solicitous. Their forehead has large, deep wrinkles. Their coat is fine, smooth, and short.',
        price: '$1200'
    },
    {
        id: 6,
        title: 'Golden Retriever',
        image: '../images/golden-1994692_640.jpg',
        info: 'Goldens are athletic, strong and capable of carrying heavy game over land and water, using a broad, powerful head with strong neck and well-developed fore and hindquarters. The breed is slightly longer than tall, with a smooth, powerful, ground-covering gait, and dense, straight or wavy outer water-repellent coat.',
        price: '$1200'
    },
    {
        id: 7,
        title: 'Irish Setter',
        image: '../images/irishsetter-3672738_640.jpg',
        info: "A breathtakingly beautiful dog, the Irish Setters beauty is in part the result of historical necessity. Its elegant, yet substantial build enabled this breed to hunt with speed and stamina. The build is slightly longer than tall, giving ample room for movement without interference between fore and hind legs. The trot is ground covering and efficient. The coat is flat, straight, and of moderate length, with longer feathering on ears, backs of legs, belly, chest, and tail, providing protection from briars without becoming entangled in them. The rich mahogany color is unique and beautiful.",
        price: '$1200'
    },
    {
        id: 8,
        title: 'Greyhound',
        image: '../images/greyhound-859394_640.jpg',
        info: 'The ultimate running dog, the Greyhound is built for speed. Long legs and an arched back enable the dog to contract and stretch maximally while executing the double-suspension gallop. Greyhounds have tremendous muscle mass and light legs, further enhancing speed. The feet are long and narrow, giving maximum leverage. The long tail serves as a rudder and brake when running at high speed. The coat is short and smooth. Two registries of Greyhounds are available: AKC (show) and NGA (racing). Retired NGA Greyhounds are smaller, sturdier, and faster than show dogs and, given their past training in racing, may be more inclined to chase small animals.',
        price: '$1200'
    },
    {
        id:9,
        title: 'German Shepherd',
        image: '../images/shepherd-dog-3388580_640.jpg',
        info: 'The German Shepherd Dog has an outline of smooth curves on a longer than tall body that’s strong, agile, substantial, and an exceptionally outreaching and elastic gait, covering the ground in great strides. The breed’s dense, straight or slightly wavy double coat comprises harsh, close lying medium length hair.',
        price: '$1200'
    },
    {
        id: 10,
        title: 'Saint Bernard',
        image: '../images/stbernard-1226205_640.jpg',
        info: 'The Saint Bernard is powerful and proportionately tall. They are strong and well-muscled, necessary qualities that, in the past, helped them to travel through deep snow. Their coat comes in two types: smooth, in which the short hair is very dense and tough, and long, in which the medium length hair is straight to slightly wavy. Their expression is often thought to appear intelligent.',
        price: '$1200'
    },
    {
        id: 11,
        title: 'Bernese Mountain Dog',
        image: '../images/bernese-mountain-dog-642013_640.jpg',
        info: 'The Bernese Mountain Dog is slightly longer than tall, though appearing square. This breed is a sturdy, large, hardy dog with a combination of strength, speed, and agility. The Bernese’s natural working gait is a slow trot, but with good reach and drive. The thick coat is moderately long, and slightly wavy or straight, providing insulation from the cold. The expression is gentle, and the color is striking.',
        price: '$1200'
    },
    {
        id:12,
        title: 'Great Dane',
        image: '../images/great-dane-2973438_640.jpg',
        info: 'This regal breed combines great size and power with elegance. They are square proportioned and well balanced. The gait is strong and powerful with long, easy strides. The coat is short, thick, and glossy. The Great Dane is most noteworthy for its majestic carriage and appearance— the Apollo of Dogs.',
        price: '$1200'
    },
    {
        id: 13,
        title: 'Labrador Retriever',
        image: '../images/labrador-retriever-1210559_640.jpg',
        info: 'The Labrador is a moderate dog, not extreme in any way. It is square or slightly longer than tall, of fairly large bone and substance. The breeds broad head and strong jaws enabled the dog to carry the largest game birds, such as Canada geese. A heavy body and strong legs enable the dog to swim and run powerfully. The coat, which is short, straight, and dense with a soft undercoat, is weatherproof and helps to protect it from icy waters. The Lab is a working retriever and possesses style without over-refinement, and substance without clumsiness.',
        price: '$1200'
    },
    {
        id: 14,
        title: 'Newfoundland Retriever',
        image: '../images/newfoundland-609531_640.jpg',
        info: "The Newfoundland is a large, heavily boned, powerful dog, strong enough to pull a drowning man from rough seas. The dog's appearance is both huggable but imposing. This breed is slightly longer than it is tall. The gait gives the impression of effortless power, with good reach and drive, and the double coat is a soft, dense undercoat with a coarse, moderately long and straight outer coat. The dog's soft expression reflects its benevolent and dignified temperament.",
        price: '$1200'
    },
    {
        id: 15,
        title: 'Stupid Pug',
        image: '../images/pug-4314106_640.jpg',
        info: 'The Pug is often described as a lot of dog in a small space. These sturdy, compact dogs are a part of the American Kennel Club’s Toy group, and are known as the clowns of the canine world because they have a great sense of humor and like to show off. Square-proportioned, compact and of a stocky build, the Pug is a large dog in a little space. Their gait is strong and jaunty, but with a slight roll of the hindquarters. Their distinctive expression is soft and solicitous. Their forehead has large, deep wrinkles. Their coat is fine, smooth, and short.',
        price: '$FREE'
    },
    {
        id: 16,
        title: 'Golden Retriever',
        image: '../images/golden-1994692_640.jpg',
        info: 'Goldens are athletic, strong and capable of carrying heavy game over land and water, using a broad, powerful head with strong neck and well-developed fore and hindquarters. The breed is slightly longer than tall, with a smooth, powerful, ground-covering gait, and dense, straight or wavy outer water-repellent coat.',
        price: '$1200'
    },
    {
        id: 17,
        title: 'Irish Setter',
        image: '../images/irishsetter-3672738_640.jpg',
        info: "A breathtakingly beautiful dog, the Irish Setters beauty is in part the result of historical necessity. Its elegant, yet substantial build enabled this breed to hunt with speed and stamina. The build is slightly longer than tall, giving ample room for movement without interference between fore and hind legs. The trot is ground covering and efficient. The coat is flat, straight, and of moderate length, with longer feathering on ears, backs of legs, belly, chest, and tail, providing protection from briars without becoming entangled in them. The rich mahogany color is unique and beautiful.",
        price: '$1200'
    },
    {
        id: 18,
        title: 'Greyhound',
        image: '../images/greyhound-859394_640.jpg',
        info: 'The ultimate running dog, the Greyhound is built for speed. Long legs and an arched back enable the dog to contract and stretch maximally while executing the double-suspension gallop. Greyhounds have tremendous muscle mass and light legs, further enhancing speed. The feet are long and narrow, giving maximum leverage. The long tail serves as a rudder and brake when running at high speed. The coat is short and smooth. Two registries of Greyhounds are available: AKC (show) and NGA (racing). Retired NGA Greyhounds are smaller, sturdier, and faster than show dogs and, given their past training in racing, may be more inclined to chase small animals.',
        price: '$1200'
    },
    {
        id:19,
        title: 'German Shepherd',
        image: '../images/shepherd-dog-3388580_640.jpg',
        info: 'The German Shepherd Dog has an outline of smooth curves on a longer than tall body that’s strong, agile, substantial, and an exceptionally outreaching and elastic gait, covering the ground in great strides. The breed’s dense, straight or slightly wavy double coat comprises harsh, close lying medium length hair.',
        price: '$1200'
    },
    {
        id: 20,
        title: 'Saint Bernard',
        image: '../images/stbernard-1226205_640.jpg',
        info: 'The Saint Bernard is powerful and proportionately tall. They are strong and well-muscled, necessary qualities that, in the past, helped them to travel through deep snow. Their coat comes in two types: smooth, in which the short hair is very dense and tough, and long, in which the medium length hair is straight to slightly wavy. Their expression is often thought to appear intelligent.',
        price: '$1200'
    }
    ,
    {
        id: 21,
        title: 'Chocolate Labrador',
        image: '../images/SWZSwYS2RUKrQOTfrnHBGw.jpg',
        info: 'Uh, yeah.  This is a chocolate lab.  Not the sharpest tool in the shed, but loves to play and eat and relax.  While he acts like an obedient servant of his masters, he would likely pack his toys up and leave if he could move to the water.  BTW, this one is scared of docks and boats and stairs, and slippery floors.',
        price: '$NFS'
    }
]

export default breedImages
