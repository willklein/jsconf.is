/* eslint-disable quotes */
const speakers = [
  {
    name: 'Dan Abramov',
    slug: 'dan-abramov',
    twitter: 'dan_abramov',
    github: 'gaearon',
    website: '',
    companyWebsite: '',
    company: '',
    title: '',
    description: '',
  },
  {
    name: 'Sarah Drasner',
    slug: 'sarah-drasner',
    twitter: 'sarah_edo',
    github: 'sdras',
    website: 'https://sarahdrasnerdesign.com',
    companyWebsite: 'https://www.microsoft.com',
    company: 'Microsoft',
    title: 'Live and Machine Learn',
    description: `<p>The life we live online increasingly informs the way we live offline as well. Businesses live and die through algorithms like SEO, humans are sorted in government systems, and we make large, life-governing decisions through what is shown to us on the web: home buying, where to live, what to eat, and who we're in contact with regularly. The first shift we as web developers saw was people living and learning on the web more and more, which excited us. But as we start to automate those tasks through machine learning algorithms, a lot of us have trepidation. We know systems have flaws, what are the political and social consequences?</p><p>In this talk we'll explore this paradigm shift and some of it's dangers, but we'll also talk about the good impacts technology can bring. Helping people who need it, automating tasks for humans with disabilities, communication for emergency services: the possibilities for positive influence are endless. We'll explore just some of the tools that are out there, how with a little creativity, we can use these technologies for good. We as developers have a voice and chance to make a difference.</p>`,
    bio:
      'Sarah is an award-winning Speaker, Sr Cloud Developer Advocate at Microsoft, and Staff Writer at CSS-Tricks. Sarah is also the co-founder of Web Animation Workshops, with Val Head. She’s the author of SVG Animations from O’Reilly and has given Frontend Masters workshops on Vue.js and Advanced SVG Animations.',
  },
  {
    name: 'Anna Henningsen',
    slug: 'anna-henningsen',
    twitter: 'addaleax',
    github: 'addaleax',
    website: '',
    companyWebsite: '',
    company: '',
    title: 'Node.js: Where are we now, where are we going?',
    description: `<p>Node.js has been around for 9 years now, so you might think we’re getting closer to holding a finished piece of software in our hands. Yet somehow, despite placing a high value on stability, it is seeing a record number of commits and new contributors.</p><p>With the Node 10.0.0 release just around the corner, it’s worth taking a closer look at what has been changing and where Node.js is headed: HTTP/2 support, yS Modules, N-API, async_hooks and a Promise-based standard library are just some of the upcoming gems that this talk will put in the spotlight.</p>`,
    bio: 'Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community.',
  },
  {
    name: 'David Khourshid',
    slug: 'david-khourshid',
    twitter: 'davidkpiano',
    github: 'davidkpiano',
    website: 'https://www.codepen.io/davidkpiano',
    companyWebsite: 'https://www.microsoft.com/',
    company: 'Microsoft',
    title: 'Simplifying Complex UIs with Finite Automata & Statecharts',
    description: `<p>As the number of possible states in your app grows, developing UIs can become exponentially more complex. With the help of finite automata, or finite state machines (FSMs), you will be able to manage your app's states in a simple, robust way, and even visualize them! In this session, we will discover how FSMs and statecharts can take your UIs to the next level, with innovative techniques for implementing, testing, and visualizing your app's finite states in a robust, automated way, with plenty of use cases, demos, and resources.</p>`,
    bio:
      'David Khourshid is a Florida-based web developer for Microsoft, a tech author, and speaker. Also a fervent open-source contributor, he is passionate about JavaScript, CSS, animation, innovative user interfaces, and cutting-edge front-end technologies. When not behind a computer keyboard, he’s behind a piano keyboard or traveling.',
  },
  {
    name: 'Carolyn Stransky',
    slug: 'carolyn-stransky',
    twitter: 'carolstran',
    github: 'carolstran',
    website: '',
    companyWebsite: 'https://www.contentful.com/',
    company: 'Contentful',
    title: 'Humanizing Your Documentation',
    description: `<p>It’s no secret that most people don’t read technical documentation for pleasure. Users often come to your docs when they are frustrated with your software, disappointed that they haven't been able to solve the problem on their own and generally feeling pretty low. This is a little sad, yeah, but being aware of these feelings is key for developers and technical writers. These emotions frame the reader’s perspective and therefore, should shape the mood of our docs. After all, when you've been stuck on a bug for hours, do you really want to read something saying 'but this is so easy'? In this talk, we’ll discuss how the language we use affects our users and the first steps towards writing accessible, approachable and use case-driven documentation.</p>`,
    bio: `Carolyn is an American journalist and JavaScript developer based in Berlin, Germany. There, she works as a technical writer for Contentful and teaches front end development in the evenings at ReDI School of Digital Integration. Her interests revolve around accessibility and technology—with a focus on online abuse, human-computer and self-care.`,
  },
  {
    name: 'Raisa Cuevas',
    slug: 'raisa-cuevas',
    twitter: 'raisaveuc',
    github: 'raisaveuc',
    website: '',
    companyWebsite: 'https://www.google.com',
    company: 'Google',
    title: 'Augmented Reality: Past, Present, Future',
    description: `<p>Big brands across various industries are starting to realize the potential of augmented reality (AR) for innovation in marketing and in product. But with AR's history dating back to 1968, why has it suddenly become the next big thing? This talk will dive into the rich history of AR to help us understand and appreciate where the technology is now. You will learn some tools to build with AR today, and understand how the technology will open up creative possibilities for our future.</p>`,
    bio: `Raisa is a Creative Engineer at Google, building digital experiences to help users understand the brand. Born and raised in San Francisco, educated in Orange County, and employed in the Silicon Valley, she eventually decided it was time to get out of her California bubble and gain some international experience. Now into her third year in London, Raisa continues to grow more passionate about understanding Google's audiences in Europe, Middle East, and Africa, and their unique needs.`,
  },
  {
    name: 'Catherine Meade',
    slug: 'catherine-meade',
    twitter: 'catheraaine',
    github: 'catheraaine',
    website: 'http://catheraaine.com',
    companyWebsite: 'https://seesparkbox.com',
    company: 'Sparkbox',
    title: 'GitHub Pull Requests for Everyone',
    description: `
    <p>Reviewing a pull request can feel like a chore. If done poorly, PR reviews can mean a few hours of attempting to understand both the problem and the solution, then checking that the result matches the design. Sure, many of us have the luxury of walking to our coworker’s desk and getting a walk through. But what if the other dev isn’t free? What if they live in another time zone? What if you need a project manager or designer to look at your work, and they don’t have a local setup or much dev experience? </p>
    <p>In this session, we’ll go over some tips and technologies to make your pull request process a bit smoother. We’ll discuss:<br>
    - Writing clear issues/stories to build a good foundation<br>
    - Tools you can use for reviewing work with remote coworkers<br>
    - Keeping design reviews from turning into blockers<br>
    - Adding testing instructions to your PR description<br>
    - Leaving positive feedback so no one goes home grumpy</p>
    `.trim(),
    bio: `Catherine builds responsive websites up and down the stack with Sparkbox, focusing recently on a single enterprise level design system. Catherine has a strong passion for education; she spends her free time volunteering with Girl Develop It, sitting on the local leadership team and teaching code classes. Her other hobbies include reading, video and tabletop games, and making cat jokes. Twitter (and all the other things) as @catheraaine.`,
  },
  {
    name: 'Dan Gebhardt',
    slug: 'dan-gebhardt',
    twitter: 'dgeb',
    github: 'dgeb',
    website: '',
    companyWebsite: 'http://cerebris.com',
    company: 'Cerebris',
    title: 'Give Apps Online Superpowers by Optimizing them for Offline',
    description: `
    <p>Applications that are able to operate offline require a certain level of rigor for storing state and tracking mutations. It turns out that an application built with this rigor can also provide a better online user experience, by applying and tracking changes optimistically yet deterministically.</p>
    <p>This talk will provide an overview of the engineering required to build a successful offline web application. It will discuss how to track mutations and synchronize them using an approach inspired by git, as well as how to develop a natural UX that clearly represents the state of data in transition.</p>
    `.trim(),
    bio: `Dan has been developing web applications since the dark ages of the web (i.e. the late 90s). He's on the Ember.js and Glimmer.js core teams, an editor of the JSON:API spec, and the creator of Orbit.js. He loves to travel and hike with his family and fluffy dog.`,
  },
  {
    name: 'John Feminella',
    slug: 'john-feminella',
    twitter: 'jxxf',
    github: 'fj',
    website: 'http://jxf.me/',
    companyWebsite: 'https://pivotal.io/',
    company: 'Pivotal',
    title: 'Building with Blockchains: Better Distributed Applications',
    description: `
    <p>Blockchains are a new kind of data structure with many interesting applications, and are perhaps most notable for their use in cryptocurrencies like Bitcoin. In this talk, we’ll explore what a blockchain is, where and how you might use them (and when you shouldn't, despite what the hype might tell you!), and show how we might build our own in JS.</p>
    `.trim(),
    bio: `John Feminella is an avid technologist, occasional public speaker, and curiosity advocate. He serves as an advisor to Pivotal, where he works on helping enterprises transform the way they write, operate, and deploy software. He's also the cofounder of a tiny analytics monitoring and reporting startup named UpHex. John lives in Charlottesville, VA and likes meta-jokes, milkshakes, and referring to himself in the third person in speaker bios.`,
  },
  {
    name: 'Will Klein',
    slug: 'will-klein',
    twitter: 'willslab',
    github: 'willklein',
    website: 'http://willklein.co/',
    companyWebsite: '',
    company: '',
    title: 'End to End Testing: The Game Has Changed',
    description: `<p>Testing our JavaScript apps has come a long way. For years we relied on Selenium Webdriver to automate browser testing from outside the browser. Now we can use tools like Cypress to interact from the same JavaScript runtime as our app, without relying on remote APIs, language bindings, or browser-specific drivers.</p><p>Let's explore how Cypress created a new testing platform to enable an awesome developer experience. This includes "native" debugging and time travel capabilities. We'll walkthrough using Cypress and how it all works, so we can deliver better, well-tested software.</p>`.trim(),
    bio: `Will is a frontend engineer and co-organizes the React Denver meetup. He loves sharing what he can with the community, whether its organizing events, giving talks, or mentoring others. He is proud to be a father and husband, and lives on a healthy diet of coffee and ice cream in Longmont, Colorado.`,
  },
  {
    name: 'Maja Wichrowska',
    slug: 'maja-wichrowska',
    twitter: 'majapw',
    github: 'majapw',
    website: '',
    companyWebsite: 'https://www.airbnb.com/',
    company: 'Airbnb',
    title: 'Do the Right (to Left) Thing: Directional Content in React',
    description: `<p>In 2017, Airbnb supported 27 languages and had developed robust translation tools that made it easy to add more. We launched Croatian in May with little overhead beyond setting up the new domain and translating phrases. However, this was not true for all new languages; our next most requested language, Hebrew, posed a unique challenge. Because it reads right-to-left, the entire Hebrew UI must be flipped. Browsers only handle reversing the DOM structure, but styling and interactions must be coded manually.</p><p>This talk covers the journey of enabling right-to-left languages on airbnb.com. Recently, Airbnb has moved to a React frontend and away from Sass to a CSS-in-JS paradigm. We developed a performant and cross-browser solution for RTL that leveraged a CSS-in-JS abstraction layer to isolate the logic from our codebase. Our efforts led us most of the way to launching in Arabic and Hebrew while requiring little effort from our product engineers and with minimal disruption to their work.</p>`.trim(),
    bio: `Maja is a frontend software engineer at Airbnb. Her focus is on shared UI systems and writing sustainable code, and she maintains Airbnb's react-dates library and contributes to many other open-source repos as well.`,
  },
  {
    name: 'Nicole Chung',
    slug: 'nicole-chung',
    twitter: 'redconservatory',
    github: 'nicolechung',
    website: 'http://www.redconservatory.com/',
    companyWebsite: '',
    company: '',
    title: 'Sharing is Caring: build a peer-to-peer network with WebRTC',
    description: `<p>Yes, it’s still experimental, but you can build a peer-to-peer real-time connection using WebRTC - a connection that shares audio, video, files in a fast, highly secure, decentralized manner.</p><p>In this talk, we will cover how to open up a peer connection using JavaScript, and how to transmit data via a data channel.</p><p>We will demystify the underlying technologies of the WebRTC protocols (STUN and TURN for example) and show you that it’s possible to store files in a safe, highly secure and decentralized way.</p>`.trim(),
    bio: `As a Software Engineer at Toronto-based product studio TWG, Nicole Chung works with Node, React, and Redux to build fast and efficient user interfaces. She is also an occasional lead instructor at Canada Learning Code, a non-profit dedicated to building technical skills for all Canadians, and has mentored at HackerYou for their part-time JavaScript courses.`,
  },
  {
    name: 'Madlaina Kalunder',
    slug: 'madlaina-kalunder',
    twitter: 'anialdam',
    github: 'aadjou',
    website: 'https://madlaina.li/',
    companyWebsite: '',
    company: 'Archilogic',
    title: 'Building a raytracing engine with JS',
    description: `<p>In this talk we will build a 3D ray tracer with Javascript. We learn about the basics of real time 3D graphics and what we need in order to produce realistic looking 3D graphics in the browser.</p>`.trim(),
    bio: `Madlaina is a full stack developer and a 3d processes magician at Archilogic, 3d content accessible for people working on the web. She graduated at the Zurich University of Arts with a bachelor degree in Design, specialisation Game Design, combining the passion for design and story telling with the newest technologies. Madlaina believes in bringing people of different backgrounds together to solve problems in creative ways.`,
  },
  {
    name: 'Kate Compton',
    slug: 'kate-compton',
    twitter: 'galaxykate',
    github: 'galaxykate',
    website: 'http://www.galaxykate.com',
    companyWebsite: '',
    company: 'UC Santa Cruz',
    title: 'Creating generative art with Javascript',
    description: `<p>Can you write a program to create art? Code can create procedural content for games, but it can also create 3D printable objects, patterns for fabric, or Twitterbots that post code-created comic strips. Kate has produced all of these and more (and is known for outreach and education about generativity) and will demonstrate practical techniques behind generating emergent surprising and artistic worlds with Javascript, Canvas, and SVG.</p>`.trim(),
    bio: `Mad scientist, artist, inventor and researcher from the University of California Santa Cruz. Kate has built tools used by tens of thousands of people (including historians, children, and philosophers) to create interactive online bots.`,
  },
  {
    name: 'Michael Henretty',
    slug: 'michael-henretty',
    twitter: 'mikehenrty',
    github: 'mikehenrty',
    website: 'http://voice.mozilla.org/',
    companyWebsite: '',
    company: 'Mozilla',
    title: 'VoiceHTML - Speech Recognition as a Progressive Enhancement',
    description: `<p>Around 10 years ago, we had to reinvent the web to cope with tiny, touchable screens. In many ways we had to rethink the definition of a web application. These revisions yielded powerful new features like push notifications, and (usable) offline support.</p><p>With the rise of Voice Assistants [1], it's time to rethink the web once again. I would like to propose a new protocol for how voice assistants can interact with websites. The hope is to provide a viable alternative to the current "app store" model of the leading voice ecosystems. Instead, what if websites could advertise services that are voice enhanced, allowing voice assistance to find and interact more naturally with web content? To illustrate the idea, I will compare the use case of booking an airline ticket using a screen reader vs. a website enhanced with VoiceHTML.</p><p>1.) <a href="https://www.gminsights.com/industry-analysis/intelligent-virtual-assistant-iva-market" target="_blank">https://www.gminsights.com/industry-analysis/intelligent-virtual-assistant-iva-market</a></p>`.trim(),
    bio: `I am an front-end engineer at Mozilla working on Common Voice, a project to crowdsource a large database of voices to be used in open-source speech engines.`,
  },
  {
    name: 'Abhinav Rastogi',
    slug: 'abhinav-rastogi',
    twitter: '_abhinavrastogi',
    github: 'abhinavrastogi',
    website: '',
    companyWebsite: 'https://flipkart.com',
    company: 'Flipkart',
    title: 'Scaling NodeJS beyond the ordinary',
    description: `<p>We have been using Node as our primary web serving layer for the last 3 years at Flipkart, continuously adding more features, more properties and most importantly, more traffic onto it. This has led to the discovery of a lot of bottlenecks and a lot of late-night load tests. In this talk, I’ll be focusing on scaling a Node based web server and what kind of issues we have run into. This will include different approaches to attacking this problem like horizontal and vertical scaling. I will be taking you through the variety of resource bottlenecks you can expect to run into, like network, memory, disk and cpu. I’ll touch upon how to find these bottlenecks and what technologies you can use to solve them.</p>`.trim(),
    bio: `I lead frontend development at Flipkart.com. Also interested in game dev, music and space stuff!`,
  },
  {
    name: 'Bryan Hughes',
    slug: 'bryan-hughes',
    twitter: 'nebrius',
    github: 'nebrius',
    website: 'https://nebri.us',
    companyWebsite: 'https://microsoft.com',
    company: 'Microsoft',
    title: '\\"Works for Me\\"',
    description: `<p>"Works for me." The words spoken to dismiss a thousand bugs. "Can't Reproduce." Issue closed. "You're getting worked up over nothing." "It was just a joke." "I worked just as hard to get here." "It didn't bother me." Problem dismissed.</p><p>"Works for me" is a natural reaction when confronted with cultural issues that don't impact us directly. It's a statement that isn't innacurate, but is wildly incomplete. We have to learn to see past our own experiences and see and accept the experiences of others.</p><p>This talk will dive into how and why dismissal of culture concerns happens in the tech community, and how we can combat it with knowledge and empathy.</p>`.trim(),
    bio: `Bryan Hughes is a technical evangelist at Microsoft and long-time member of the Node.js and NodeBots communities. Bryan is the creator of Raspi IO which provides Raspberry Pi support for the Johnny-Five JavaScript robotics library. Bryan also created Raver Lights, a distributed wireless wearable lighting system designed for festivals. Outside of tech, Bryan is an amateur photographer, occasional writer, a once upon a time pianist, and a wine aficionado.`,
  },
  {
    name: 'Nara Kasbergen',
    slug: 'nara-kasbergen',
    twitter: 'xiehan',
    github: 'xiehan',
    website: 'http://nara.codes',
    companyWebsite: '',
    company: 'NPR',
    title: 'Empathy as a Service: Supporting Mental Health in Tech',
    description: `<p>1 in 5 Americans are living with a mental illness such as depression, bipolar, anxiety, or ADHD. As a community, the single most damaging thing we can do is perpetuate the stigma against mental disorders. This talk will begin with an overview of key statistics about mental wellness, followed by the efforts of the non-profit organization Open Sourcing Mental Illness to gather more data about mental health in the tech industry, and conclude with the bulk of the talk focusing on ideas and strategies for making our tech workplaces more accommodating and inclusive.</p>`.trim(),
    bio: `Nara Kasbergen is a senior full-stack developer in NPR (National Public Radio)’s Digital Media group. She hails from The Netherlands and lived in Munich, Houston, Pittsburgh, Tokyo, and New York City prior to settling down in Washington, DC. In her spare time, she satisfies her foodie habits by trying out all of the best restaurants in the city, collects board games, and watches too much Netflix.`,
  },
  {
    name: 'Sarrah Vesselov',
    slug: 'sarrah-vesselov',
    twitter: 'svesselov',
    github: '',
    gitlab: 'SarrahVesselov',
    website: 'http://sarrahvesselov.com/',
    companyWebsite: 'https://gitlab.com',
    company: 'GitLab',
    title: 'How to style in React and not lose friends',
    description: `<p>Aside from recent political events, I don't know of another topic sure to cause more heated debate than how you should style React components. This talk sets out to cover the main methods for styling in React (and beyond).</p><p>Through code examples, we will explore the pros and cons of just some of the methods out there. You will learn to make styling decisions based on the scale and type of project. By the end, you should feel confident that there is hope! You can style React components without losing friends.</p>`.trim(),
    bio: `Sarrah Vesselov is a UI/UX Developer with over 10 years of experience in web design and development. She currently works for GitLab as UX Lead, setting the overall direction of UX from both a design and application experience view. Prior to that, she was Senior UI Developer at Nitro Solutions and UI / UX Lead at Mad Mobile. She also serves as the Director for the Women Who Code and Girl Develop It Tampa chapters.`,
  },
  {
    name: 'Dominik Kundel',
    slug: 'dominik-kundel',
    twitter: 'dkundel',
    github: 'dkundel',
    website: 'https://moin.world',
    companyWebsite: '',
    company: 'Twilio',
    title: 'XSS, CSRF, CSP, JWT, WTF? IDK ¯\\_(ツ)_/¯',
    description: `<p>Robert'); DROP TABLE Students;-- The little Bobby Tables is embodying the classical fear of SQL injections when building web applications.</p><p>However, SQL injections are just one aspect of things we need to worry about when building web applications. With the recent popularity of Angular, React and other Single Page Application frameworks we got more logic executing on the front-end create new problems and make you forget about others.</p><p>In this talk you will learn about XSS, CSRF, CORS, JWT, HTTPS, SPAs, REST APIs and other weird abbreviations, how to protect yourself and your users from the new generation of Bobby Tables.</p>`.trim(),
    bio: `Dominik is a Developer Evangelist for Twilio in Berlin. He has a passion for JavaScript, hackathons, teaching and good whiskey. You will usually find him speaking at meetups and conferences, mentoring at hackathons and CoderDojos or work on open source projects.`,
  },
  {
    name: 'Arun Michael Dsouza',
    slug: 'arun-michael-dsouza',
    twitter: 'amdsouza92',
    github: 'arunmichaeldsouza',
    website: 'http://arunmichaeldsouza.com',
    companyWebsite: '',
    company: 'AdPushup Inc.',
    title: 'Houdini - What lies ahead',
    description: `<p>This talk aims at covering the CSS Houdini spec and its amalgamation with JavaScript. </p><p>CSS Houdini is a W3C effort to define lower-level CSS APIs for developers to understand, recreate, and extend high level CSS authoring features. </p><p>This talk will focus on current ideas (being discussed by the CSS Houdini working group), finalised specifications, future plans for development of CSS Houdini and how it will change the way we use JavaScript APIs to create rich user experiences.</p>`.trim(),
    bio: `Arun is a Full Stack JavaScript Engineer from New Delhi, India currently working with AdPushup Inc. on various Ad-Tech related technologies and products. He wrote his first large scale ERP application in C++, while he was still in high school, since then he has been an avid technologist, specialising in the web domain. Being an Open Source enthusiast, he has released several utilities and libraries for AngularJS, NodeJS, JavaScript/JQuery, SASS/CSS etc.`,
  },
  {
    name: 'Opher Vishnia',
    slug: 'opher-vishnia',
    twitter: 'opherv',
    github: 'opherv',
    website: 'http://opherv.com',
    companyWebsite: '',
    company: 'Eko',
    title: 'Wait, you can do that with JavaScript…!?',
    description: `<p>In 98’ I made my first webpage, which leveraged JavaScript to annoy visitors with blinking text animations. In 2017 I developed a film entirely in JS, which debuted in the Tribeca Film Festival. You can do so much with the browser today: Procedural art, interactive VR, physical simulation, real-time multiplayer games - and that’s just the tip of the iceberg. In this talk I want to take you a step further beyond sites and Web Apps. Perhaps your next project could push the envelope of the web as we know it?</p>`.trim(),
    bio: `For the past four years Opher has been working at Eko as lead creative developer, specializing in web technologies. His day-to-day involves working with both creative teams (design, art, film) as well as development teams to push the envelope of interactive video, a new and exciting creative medium. His latest work involved the VR film “Broken Night” and was featured at Cannes film festival and the Tribeca Film Festival in NYC.`,
  },
  {
    name: 'Martin Kleppe',
    slug: 'martin-kleppe',
    twitter: 'aemkei',
    github: 'aemkei',
    website: 'http://aem1k.com/',
    companyWebsite: '',
    company: 'Ubilabs',
    title: 'Daedalus – Though the Maze of Code',
    description: `<p>In Greek mythology, Daedalus (Greek: Δαίδαλος "to work artfully") was a skillful craftsman and artist who created the first Labyrinth. People like him still exist and are known as creative coders and code golfers. They push the limits of what is possible with JavaScript and open new doors for others.</p><p>Follow Martin on his journey through a maze of JavaScript, CSS, and HTML where the boundaries between art and code are blurred. This entertaining talk will show off invisible code, tweet-sized games, Asian programs, symmetric JavaScript, polyglot inceptions, self-modifying functions, exotic symbols and much more mind-blowing examples.</p>`.trim(),
    bio: `Mapper. Reducer. Creator of JSFuck, co-founder of Ubilabs, involved in JSUnconf, code golfing at aem1k.com, GDE for the Google Maps API.`,
  },
  {
    name: 'Armagan Amcalar',
    slug: 'armagan-amcalar',
    twitter: 'dashersw',
    github: 'dashersw',
    website: 'https://arm.ag',
    companyWebsite: '',
    company: 'unu GmbH',
    title: "Code, Play & Rock 'n' Roll: A WebAudio Experiment",
    description: `<p>The speaker hits the “stage” with a guitar, playing memorable rock tunes using a web browser as an amplifier. This talk is about pushing the limits of what a web browser can do, and goes over pedalboard.js, an open source JavaScript framework for building real-time guitar effects in the browser.</p><p>Demonstrating both code and music, talking a little bit about math and signal processing, the speaker paints a picture of the current state of the web and how capable it is as a platform. He then goes on to present a way to make a collaborative music session using pedalboard.js over WebRTC, so people can play along with friends in real-time even if they are miles away.</p>`.trim(),
    bio: `Armagan is a software architect from Berlin and currently works as the Head of Software Engineering at unu GmbH. Following the software craftsmanship philosophy, he teaches young engineering graduates on software and helps them enter the software industry in various NGO contexts and universities. For the past 4 years, he has been focusing on distributed cloud architectures and developed among many others, an open-source framework, cote.js, for building microservices with Node.js.`,
  },
]

// Sort them by name
speakers.sort((speakerA, speakerB) =>
  speakerA.name.localeCompare(speakerB.name)
)

module.exports = speakers
