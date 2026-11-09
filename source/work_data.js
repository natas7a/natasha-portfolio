const WORK = [
  {
    id: 'upf', case: true,
    title: 'How an AI chatbot\'s stance shapes the way people discuss and decide',
    short: 'AI peer study',
    org: 'Universitat Pompeu Fabra, TIDE group', period: 'Apr – Oct 2026', start: '2026-04', end: '2026-10',
    role: 'Research intern', status: 'Paper under review',
    themes: ['hci', 'alignment', 'learning', 'access', 'impacts'],
    lede: 'When two people talk a problem through with an AI chatbot in the room, does the way the chatbot joins in change how they reach a decision? I studied 26 conversations to find out, then gave the ideas back to the people who took part.',
    steps: [
      { t: 'Focus', d: 'Does an AI peer\'s conversational stance change how a group shares, agrees and builds on ideas?', done: true },
      { t: 'Run the study', d: '52 participants in 26 video calls, each with an AI peer taking one of two stances', done: true },
      { t: 'Code', d: '2,244 lines coded with 11 codes; two coders agreed on 89% of a shared sample', done: true },
      { t: 'Analyse', d: 'Transition network analysis, resampling and permutation tests, and close reading of idea episodes', done: true },
      { t: 'Write', d: 'First-author research article, now in anonymous peer review', done: true },
      { t: 'Share back', d: 'A 34-page illustrated booklet for participants', done: true }
    ],
    images: [
      { src: PHOTOS.bk_cover, alt: 'Three pages of the participant booklet: the cover, a page of 52 figures showing who took part, and a draft AI-use statement form', label: 'Pages from the participant booklet' },
      { src: PHOTOS.bk_spread, alt: 'Two booklet pages comparing students and educators: the ideas they shared, and their deeper common ground', label: 'Students and educators, side by side' },
      { src: PHOTOS.bk_learn, alt: 'Two booklet pages: AI as a tool, and an AI that guides rather than answers', label: 'What students wanted from AI in their learning' }
    ],
    nums: [['52', 'participants in 26 conversations'], ['2,244', 'lines of conversation coded']],
    brief: ['Chatbots are starting to join group work as peers, but we know little about how the stance they take changes the way people build ideas together.', 'Wrote the prompts for the AI peer\'s two stances, ran a study with 52 participants, coded 2,244 lines of conversation and compared the two stances with transition network analysis.', 'A first-author research article now under peer review, and a 34-page illustrated booklet that gave the ideas back to every participant.'],
    facts: [['Role', 'Research intern'], ['With', 'TIDE group, supervised by Prof. Davinia Hernández-Leo'], ['Participants', '52 (40 students, 12 educators)'], ['Outcome', 'First-author article under review; booklet']],
    sections: [
      ['The question', '<p>Chatbots are starting to join group discussions as peers rather than as tools. An AI peer can be designed to push a group towards agreement, or to question its ideas before it agrees. We know little about how that choice changes what people actually do in conversation: when they share reasons, when they agree, and when they build on each other\'s ideas.</p>'],
      ['My role', '<p>I was a research intern in the TIDE group (Interactive &amp; Distributed Technologies for Education) at Universitat Pompeu Fabra in Barcelona, supervised by Prof. Davinia Hernández-Leo.</p><p>I wrote the prompts that gave the AI peer its two stances, ran the study sessions, coded and analysed the conversation data, <strong>wrote the research article</strong> and wrote the participant booklet.</p>'],
      ['How the study worked', '<p>52 people took part: 40 students and recent graduates and 12 university educators, with 19 first languages between them. They met in 26 video calls, each with two people and an AI peer. Each person spent five minutes on an idea alone, then the group had 15 minutes to agree on one priority for how learning, teaching or assessment should change now that generative AI is here.</p><p>The AI peer spoke with a synthetic voice and took one of two <strong>conversational stances</strong>. A large language model proposed each of its turns, and a researcher checked or edited them before they were spoken (a Wizard-of-Oz set-up), so we could study the stances before building a fully autonomous agent. The study had ethics approval, and all data were pseudonymised.</p>'],
      ['Process', 'STEPS'],
      ['How the analysis worked', '<ol class="learn"><li>Each line of the 26 transcripts, 2,244 in all, got one of 11 codes for the job it does, such as proposing an idea, sharing context, agreeing, building on an idea or challenging. The scheme builds on Weinberger and Fischer (2006) and on O\'Connor and Michaels (2019).</li><li>Two researchers coded three discussions independently and agreed on 347 of 389 lines (Cohen\'s κ = .87).</li><li>Transition network analysis then showed, for each stance, how often each move was followed by each other move, with human and AI moves kept apart. Intervals came from resampling groups 2,000 times, and differences were checked with permutation tests.</li><li>Finally, close reading of individual idea episodes, including counter-cases, checked the patterns against what people actually said.</li></ol>'],
      ['What I would do differently', '<ul class="learn"><li>Run a larger study, with groups randomly allocated to each stance.</li><li>Test a fully autonomous AI peer, rather than one checked by a researcher, and give it a way to take the floor without cutting across someone.</li><li>Double-code discussions from both conditions, not just one.</li></ul>'],
      ['Sharing it back', '<p>Research rarely returns to the people who made it possible. So I wrote and designed a 34-page anonymised booklet for participants, “Learning, teaching and assessment in the age of AI”. It gathers the ideas from all 26 conversations and compares how students and educators see them. It is separate from the analysis in the paper.</p>IMG:1BOOKLET'],
      ['What the booklet found', '<ul class="learn"><li>Students and educators never sat in the same conversation, yet their ideas overlapped in three places: judge the thinking, not the product; explain the work out loud; and keep some moments with AI and some without.</li><li>Both groups thought a ban on AI wasn\'t realistic, and both wanted honest disclosure of AI use, such as a form handed in with the work.</li><li>The gaps were telling: several students raised AI\'s environmental and data costs, and no educator did. Educators raised how hard change is for a university and its staff, which students rarely did.</li><li>Students wanted AI that guides them to an answer rather than giving it, and to do their own thinking first.</li></ul>IMG:2'],
      ['What I learnt', '<ul class="learn"><li>Coding every turn by hand was slow, but it made the patterns in the network analysis much easier to read and explain.</li><li>Writing for reviewers and writing for participants are different jobs: the booklet needed a plainer structure than the article, not just simpler words.</li></ul>'],
      ['Skills used', 'PILLS:Study design|Prompt engineering|Wizard-of-Oz prototyping|Qualitative coding|Inter-rater reliability|Transition network analysis|Resampling and permutation tests|Research writing|Information design'],
      ['Outcomes', '<p>A research article submitted to a human–computer interaction venue, now in anonymous peer review, and an anonymised booklet for the people who took part. I can\'t share the article\'s results or venue until there\'s a decision; I\'ll add them here then.</p>']
    ]
  },
  {
    id: 'fellowship', case: true,
    title: 'A fellowship teaching young child-safety leaders to use foresight',
    short: 'Child Safety & AI Fellowship',
    org: 'Until Tomorrow, with the Asia-Europe Foundation', period: 'Aug 2026 – now', start: '2026-08', end: null,
    role: 'Founder, now mentor', status: 'Running now',
    themes: ['safety', 'foresight', 'learning', 'impacts'],
    lede: 'Young child-safety advocates know the risks children face today, but have few tools for the ones still on their way. I built a six-week foresight programme to give them some.',
    steps: [
      { t: 'Spot the gap', d: 'Child-safety advocates have few tools for risks that haven\'t arrived yet', done: true },
      { t: 'Design', d: 'Six weekly modules, an introduction to foresight, readings for each week', done: true },
      { t: 'Build', d: 'Programme website and recruitment process', done: true },
      { t: 'Assemble the team', d: '4 facilitators, a recruitment lead and 3 advisors', done: true },
      { t: 'Select', d: 'Applications from 30+ countries; 33 participants in 3 cohorts', done: true },
      { t: 'Run', d: 'Cohorts in progress', done: false }
    ],
    images: [
      { src: PHOTOS.zoom, alt: 'Natasha and ten fellowship participants on a video call, smiling at the camera', label: 'An online session with participants from the cohort' },
      { src: PHOTOS.ut_banner, alt: 'Banner reading Child Safety & AI Fellowship, Futures Thinking in Practice, 3 October to 14 November 2026, with the Until Tomorrow and Asia-Europe Foundation logos', label: 'The fellowship, run with the Asia-Europe Foundation, 3 October to 14 November 2026' },
      { src: PHOTOS.ut_signal, alt: 'Until Tomorrow post titled Signal of the week: governments are stepping in on children\'s access to digital platforms, with Australia\'s minimum age of 16 for social media accounts', label: 'Instagram post, signal of the week: a change happening now, and why it could matter by 2040' },
      { src: PHOTOS.ut_toolkit, alt: 'Until Tomorrow foresight toolkit card: a good frame answers four questions, what, where, when and who', label: 'Instagram post from the foresight toolkit: how to frame a question about the future' },
      { src: PHOTOS.ut_doc, alt: 'The shared document for cohort 1 of the Child Safety & AI Fellowship, open on the Introduction tab, with tabs for framing, sensemaking, scenarios, backcasting and a simulation game', label: 'The shared session document for cohort 1, with a tab for each session' }
    ],
    nums: [['30+', 'countries applied'], ['8', 'people in the team I built']],
    brief: ['Child-safety advocates have few tools for risks that haven\'t arrived yet.', 'Designed a six-week foresight programme from scratch, built its website and recruitment, and assembled a team of 8.', 'A programme that didn\'t exist before, now running in 3 cohorts with applicants from 30+ countries.'],
    facts: [['Role', 'Founder, now mentor'], ['Partner', 'Asia-Europe Foundation (ASEF)'], ['Reach', '30+ countries applied, 6 continents'], ['Status', 'Running now']],
    sections: [
      ['The problem', '<p>How can we protect children from technology risks that haven\'t fully arrived yet, without taking away their agency? Young people working on child safety often have strong values and networks but few structured ways to think ahead.</p>'],
      ['My role', '<p>I founded the fellowship at Until Tomorrow, the youth-led foresight and technology collective I run, in partnership with the Asia-Europe Foundation. I\'m now a mentor on the programme.</p><p>I <strong>designed the programme from scratch</strong>, built its website and recruitment process, and assembled a team of eight: four facilitators, a recruitment lead and three advisors.</p>'],
      ['Approach', '<p>Each week pairs a foresight method with child-safety questions. Participants start with an introduction to foresight, then work through weekly readings and sessions run by the facilitators.</p><p>Foresight means thinking systematically about several possible futures rather than predicting one, so that people can act before a risk becomes a crisis.</p>IMG:1LINKS'],
      ['Process', 'STEPS'],
      ['Skills used', 'PILLS:Programme design|Foresight|Curriculum writing|Web building (HTML, CSS, JS)|Recruitment|Team leadership|Partnership management'],
      ['Materials', '<p>Each session has its own tab in a shared document for the cohort, from the introduction to framing, sensemaking, scenarios, backcasting and a simulation game. Until Tomorrow also shares the ideas on Instagram, with a signal of the week to debate and a foresight toolkit that explains each method in a few lines.</p>IMG:4ROW:2,3'],
      ['What I\'m learning so far', '<ul class="learn"><li>Plan for more interest than you expect: demand for the fellowship was higher than we anticipated, and the programme has to be ready to scale or select.</li><li>A programme spread across 30+ countries has to be planned around time zones and connections, not only content.</li><li>Clear roles in a small team (facilitators, recruitment, advisors) made it possible to build and run the programme alongside my studies.</li></ul>'],
      ['What\'s next', '<p>The cohorts are running now. I\'ll add what participants produced once they finish.</p>']
    ]
  },
  {
    id: 'sunflower', case: true,
    title: 'Sunflower: public data that people can check for themselves',
    short: 'Sunflower',
    org: 'Sunflower (sunflower-data.com)', period: 'May 2025 – now', start: '2025-05', end: null,
    role: 'Co-founder & product lead', status: '2nd of 250+ teams',
    themes: ['access', 'policy', 'hci'],
    lede: 'People stop trusting a summary of public data when they can\'t see where it came from. I lead the product and design how Sunflower shows its sources.',
    steps: [
      { t: 'Prototype', d: 'Council of Europe "Democracy\'s Firewall" Hackathon: 2nd of 250+ teams', done: true },
      { t: 'Design for trust', d: 'A design that shows people where each claim comes from', done: true },
      { t: 'Accelerate', d: 'People Powered & Coglobal Democratic Innovations Accelerator, 2026', done: true },
      { t: 'Online', d: 'sunflower-data.com', done: true }
    ],
    images: [
      { src: PHOTOS.sf_cover, alt: 'Pitch slide reading introducing Sunflower, with a yellow phone, sunflowers and the Council of Europe Democracy\'s Firewall logo', label: 'Our pitch at the Council of Europe "Democracy\'s Firewall" hackathon, June 2025' },
      { src: PHOTOS.sf_first, alt: 'Pitch slide: the Sunflower logo with the words unbiased, intuitive, user-centred, and a hand holding a phone over a map of Europe', label: 'The first idea of the app, from the hackathon pitch' },
      { src: PHOTOS.sf_locked, alt: 'Pitch slide: a crumpled sheet reading inaccessible open data, taped behind metal bars', label: 'The problem as we pitched it: open data that people can\'t get to' },
      { src: PHOTOS.sf_before, alt: 'Pitch slide listing the app\'s functions, curated content, community insights and a user-friendly interface, around a phone showing a list of datasets', label: 'The app\'s functions, from our May 2026 pitch deck' },
      { src: PHOTOS.sf_after, alt: 'Draft home page: headlines from a left-leaning paper, a right-leaning paper and a public broadcaster around a phone showing rents in Bologna, with the line Sunflower puts every story next to how others cover it', label: 'A draft of the new home page' },
      { src: PHOTOS.sf_numbers, alt: 'Draft home page: a phone showing rents in Bologna up 18% in five years, beside a map of 7,900+ municipalities and an employment chart', label: 'The draft then links each story to the official numbers behind it' }
    ],
    nums: [['2nd', 'of 250+ teams, Council of Europe'], ['1', 'accelerator place, 2026']],
    brief: ['People can\'t check public data they can\'t find or read, and disinformation fills the gap.', 'Co-founded the platform and lead its product and design, so every summary sits next to its source.', 'A working platform, 2nd of 250+ teams at a Council of Europe hackathon and selected for a democratic innovations accelerator.'],
    facts: [['Role', 'Co-founder & product lead'], ['Team', 'Three co-founders'], ['Recognition', '2nd of 250+ teams, Council of Europe'], ['Support', 'Democratic Innovations Accelerator']],
    sections: [
      ['The problem', '<p>Public data is meant to be open, but it is often scattered and hard to read. When people can\'t see where a claim comes from, they can\'t check it, and disinformation thrives in that gap.</p>IMG:2'],
      ['My role', '<p>I co-founded Sunflower with two others and lead the product. My part is the design and user experience: making sure <strong>non-technical citizens can see the source</strong> behind what they read and check it themselves.</p><p>Like Signal, we don\'t use AI where it isn\'t needed, and Sunflower doesn\'t use any. We put our users\' privacy first.</p>'],
      ['Process', 'STEPS'],
      ['', 'IMG:1'],
      ['Where testing changed our direction', '<p>Testing showed us that young people outside academia didn\'t want raw data. They wanted something more visual that they could apply directly to their own lives.</p><p>So we went back to the basics: what the app is for, and who it is for. We rethought Sunflower\'s purpose and its target audience around what those users told us.</p>'],
      ['Building it as a venture', '<p>Sunflower was selected for the People Powered &amp; Coglobal Democratic Innovations Accelerator in 2026. In our mentor sessions, we worked through who Sunflower should serve, weighing young people against schools and municipalities, and how it could be funded.</p><p>At first, we assumed the money would come from companies. That changed as we worked through these questions with our mentors.</p>'],
      ['Recognition', '<p>2nd of 250+ teams at the Council of Europe "Democracy\'s Firewall" Hackathon (June 2025), then selected for the People Powered &amp; Coglobal Democratic Innovations Accelerator (spring 2026).</p><p><a href="https://sunflower-data.com" target="_blank" rel="noopener">Visit sunflower-data.com</a> · <a href="https://eutopia-university-ksup.cyu.fr/english-version/student-initiative-sunflower-open-data-access-media-and-information-literacy" target="_blank" rel="noopener">EUTOPIA article</a></p>'],
      ['What I\'m learning so far', '<ul class="learn"><li>Transparency has to be visible at the moment of reading: a sources page that nobody opens doesn\'t build trust.</li><li>Pitching to non-technical judges made us explain the product in one sentence, which improved it too.</li><li>Most product decisions are about what to leave out.</li><li>Don\'t hold on too tightly to the first idea: Sunflower has changed a lot since the hackathon, and it got better each time we let it evolve.</li></ul>'],
      ['Skills used', 'PILLS:Product leadership|User experience and interface design|Information architecture|Privacy-first design|Pitching']
    ]
  },
  {
    id: 'unesco', case: true,
    title: 'Bringing young people\'s voices into UNESCO\'s decisions',
    short: 'UNESCO80 youth consultation',
    org: 'UNESCO Global Youth Community', period: 'Mar 2025 – now', start: '2025-03', end: null,
    role: 'Steering Committee member', status: 'Ongoing',
    themes: ['policy', 'foresight', 'learning'],
    lede: 'Young people are asked for their views all the time, but rarely see where those views end up. I help draft youth input to UNESCO and follow it to the people who decide.',
    steps: [
      { t: 'Represent', d: 'Sole community delegate at the 14th Youth Forum, Samarkand', done: true },
      { t: 'Co-draft', d: 'The Forum\'s conclusions', done: true },
      { t: 'Present', d: 'To member states at the 43rd General Conference, Nov 2025', done: true },
      { t: 'Consult', d: 'Youth Focal Point, Europe & North America: 145 young leaders, 135 countries', done: true },
      { t: 'Deliver', d: 'Presented the Call by Young People to the Director-General, Sep 2026', done: true },
      { t: 'Follow up', d: 'Tracking how the recommendations are implemented', done: false }
    ],
    images: [
      { src: PHOTOS.unesco, alt: 'Natasha with young leaders and officials on the stage at UNESCO headquarters, in front of a wall of national flags', label: 'At UNESCO headquarters in Paris, 25 September 2026' },
      { src: PHOTOS.floor, alt: 'Natasha speaking into a delegate microphone at a conference table', label: 'Speaking from the floor during a session' },
      { src: PHOTOS.call_panel, alt: 'Young leaders and officials at a long table at UNESCO headquarters, with the speakers\' portraits on the screen behind them', label: 'The Call by Young People being presented at UNESCO headquarters, September 2026' },
      { src: PHOTOS.call_group, alt: 'Young leaders and officials in a group photo at UNESCO headquarters, in front of the EU, French and UN flags', label: 'Young leaders and officials at UNESCO headquarters after the Call was presented, September 2026' },
      { src: PHOTOS.samarkand_podium, alt: 'Natasha seated at a UNESCO podium in Samarkand, beside the UN flag', label: 'At the 14th UNESCO Youth Forum in Samarkand, 2025' }
    ],
    nums: [['145', 'young leaders, 135 countries'], ['1 of 11', 'presenters to the Director-General']],
    brief: ['Young people\'s views rarely reach the people who decide at UNESCO.', 'Co-drafted the Youth Forum\'s conclusions and was Youth Focal Point for Europe and North America in the UNESCO80 consultation.', 'The conclusions were presented to member states, and the Call by Young People was presented to the Director-General.'],
    facts: [['Role', 'Steering Committee member'], ['Community', '500+ members'], ['Consultation', '145 young leaders, 135 countries'], ['Status', 'Ongoing']],
    sections: [
      ['The context', '<p>The Global Youth Community is UNESCO\'s largest youth coalition, with 500+ members. Its job is to make young people\'s priorities heard across the UN system.</p>'],
      ['My role', '<p>As a Steering Committee member, I co-authored the <strong><a href="https://unesdoc.unesco.org/ark:/48223/pf0000396223" target="_blank" rel="noopener">Conclusions of the 14th UNESCO Youth Forum</a></strong>, presented to member states at the 43rd General Conference, and I now help track their implementation.</p><p>In the UNESCO80 youth consultation, I was the Youth Focal Point for Europe and North America. I was one of 11 young leaders who presented the resulting <a href="https://www.unesco.org/sites/default/files/medias/fichiers/2026/09/FINAL%20-%20Call%20by%20Young%20People%20for%20a%20New%20Culture%20of%20Peace%20-cover.pdf" target="_blank" rel="noopener">Call by Young People</a> and Reflection Document to the Director-General and the French Minister for Europe and Foreign Affairs.</p>'],
      ['Process', 'STEPS'],
      ['', 'ROW:4,1'],
      ['Outcomes', '<p>The Forum\'s conclusions were presented to member states at the 43rd General Conference in November 2025. The Call by Young People, drawn from 145 young leaders in 135 countries, was presented to the Director-General in September 2026.</p>ROW:2,3'],
      ['What I learnt', '<ul class="learn"><li>Most of this work is translation: turning very different positions from many countries into wording a whole community can stand behind.</li><li>A recommendation only matters if someone tracks it afterwards, which is why I stayed on to follow implementation.</li><li>Data visualisation is a powerful way to synthesise ideas: I coded participants\' input and analysed it, and seeing it visually made the common ground much easier to find.</li></ul>'],
      ['Skills used', 'PILLS:Policy drafting|Consultation|Multi-stakeholder negotiation|Public speaking|English and French']
    ]
  },
  { id: 'climate', short: 'Climate Cardinals', title: 'Deputy Director of Education', org: 'Climate Cardinals', when: '2023 – 26', start: '2023-07', end: '2026-02', themes: ['learning', 'access'], tag: 'Leadership' },
  { id: 'igpde', short: 'Design-fiction workshops', title: 'Design-fiction workshops for senior civil servants', org: 'IGPDE, French Ministry of Economy', when: '2025', start: '2025-06', end: '2025-06', themes: ['foresight', 'policy'], tag: 'Facilitation' },
  { id: 'humane', short: 'Humane Intelligence', title: 'AI & child safety volunteer', org: 'Humane Intelligence', when: '2026 – now', start: '2026-09', end: null, themes: ['safety', 'impacts'], tag: 'Volunteering' },
  { id: 'chatham', short: 'Chatham House Common Futures', title: 'Common Futures Conversations, AI & Technology group', org: 'Chatham House', when: '2026 – 27', start: '2026-03', end: '2027-03', themes: ['policy', 'impacts'], tag: 'Network' },
  { id: 'bluedot', short: 'AGI Strategy course (BlueDot)', title: 'AGI Strategy course', org: 'BlueDot Impact', when: '2026 – now', start: '2026-11', end: null, themes: ['alignment', 'safety'], tag: 'Course' },
  { id: 'sentient', short: 'Sentient Futures fellowship', title: 'AI×Animals Fellowship', org: 'Sentient Futures', when: '2026', start: '2026-04', end: '2026-06', themes: ['impacts', 'foresight'], tag: 'Fellowship' },
  { id: 'passculture', short: 'pass Culture app testing', title: 'User testing for the pass Culture app', org: 'French Ministry of Culture · app with 4.7M+ users', when: '2023 – 24', start: '2023-08', end: '2024-09', themes: ['hci', 'access'], tag: 'User research' }
];

