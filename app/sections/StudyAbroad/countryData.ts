import { getStudyAbroadData } from "@/app/api-services/services/studyAbroad";

export interface WhyChooseCard {
    title: string;
    description: string;
}

export interface CountryData {
    name: string;
    paragraph: string;
    backgroundImage: string;
    greenSectionContent: string[];
    animalShadow: string; // image path or component
    universityLogos: { logo: string, height: string, title: string }[]; // image paths
    whyChooseCards: WhyChooseCard[];
    blueAnimal: string;
    heading: string;
}

export const countryData: Record<string, CountryData> = {
    australia: {
        name: 'Australia',
        heading: 'Group of Eight Universities',
        paragraph: 'The United States takes pride in its technical development, and it has ensured that all levels of education are well-equipped with cutting-edge equipment.', // placeholder
        backgroundImage: '/australia/opera.png',
        greenSectionContent: [
            'Australia has the second-most astounding human advancement list of all inclusive.',
            'Australian degrees are universally perceived.',
            'Australia positions with UK and US as a standout amongst the best places to live in.',
            'Australia positions very in worldwide examinations of national execution like personal satisfaction, wellbeing, training, and the security of common freedoms.',
            'You can work multi-week and settle after studies.'
        ],
        animalShadow: '/australia/kangaroo.svg',
        universityLogos: [
            { logo: '/australia/Australian_National_University-Logo.wine.png', height: '', title: 'Australian National University' },
            { logo: '/australia/Monash_University_logo.svg.png', height: '', title: 'Monash University' },
            { logo: '/australia/adelaide.svg', height: '', title: 'University of Adelaide' },
            { logo: '/australia/Melbourne1.svg', height: '', title: 'University of Melbourne' },
            { logo: '/australia/unsw.svg', height: '', title: 'University of New South Wales' },
            { logo: '/australia/The_University_Of_Queensland_logo_logotype.png', height: '', title: 'University of Queensland' },
            { logo: '/australia/The-university-of-Sydney_Logo_original.png', height: '', title: 'University of Sydney' },
            { logo: '/australia/westernAus.svg', height: '', title: 'University of Western Australia' },
        ],
        blueAnimal: '/australia/kangaroo-blue.svg',
        whyChooseCards: [
            { title: 'Globally Ranking Institutions', description: '36 of Australian Universities make it to the top 1000 list released by QS for World University Ranking 2021. Seven of these are ranked among the top 100 world universities.' },
            { title: 'Extensive Student Support', description: 'The ESOS (Education Services for Overseas Students) Act lays the framework for the enforcement of best law practices to protect the rights of international students studying in Australia.' },
            { title: 'Easy Policy for Student Visa', description: 'The process to obtain Student Visa Australia is quite easy and hassle-free as compared to other countries. To study in Australia, foreign students can apply for Student Visa subclass 500. The student visa acceptance rate is 85%- 95%, so any prospective student with good grades and necessary documents can expect visa grant mail.' },
            { title: 'Employment Opportunities', description: 'Education from Australia makes you work-ready for the competitive global market. As per statistics, around 79% of graduates find employment after completion of their program from Australia, six percent of graduates enroll for further studies, and four percent of the total student population are self-employed.' },
            { title: 'Funding Option', description: 'Australian government invests around 300 million AUD in international student scholarships. Around 300 Australian Awards were offered to international students from over 55 countries in 2019.' },
        ]
    },

    usa: {
        name: 'USA',
        heading: 'Ivy League Schools',
        paragraph:
            'The United States takes pride in its technical development, and it has ensured that all levels of education are well-equipped with cutting-edge equipment.',
        backgroundImage: '/usa/usaN.png',
        greenSectionContent: [
            'The US has six of the top 10 universities in the world. Degrees from these colleges have a global repute.',
            'Campus life is rich in diversity, bringing together students from around the world and various cultural backgrounds.',
            'Experience interactive learning with expert professors, debates, and peer engagement.',
            'Universities offer modern facilities, advanced technology, and rich knowledge resources.',
            'Universities offer state-of-the-art facilities, including modern classrooms, high-speed internet, and advanced technology',
        ],
        animalShadow: '/usa/eagle-green.svg',
        universityLogos: [
            { logo: '/usa/Brown-University.png', height: '', title: 'Brown University' },
            { logo: '/usa/columbia-university.jpg', height: '', title: 'Columbia University' },
            { logo: '/usa/cornell-university.png', height: '', title: 'Cornell University' },
            { logo: '/usa/Dartmouth-College-Logo.png', height: '', title: 'Dartmouth College' },
            { logo: '/usa/harvard-logo.png', height: '', title: 'Harvard University' },
            { logo: '/usa/UniversityofPenn.png', height: '', title: 'University of Pennsylvania' },
            { logo: '/usa/princeton-logo.png', height: '', title: 'Princeton University' },
            { logo: '/usa/yale-university.png', height: '', title: 'Yale University' },
        ],
        blueAnimal: '/usa/eagle-blue.svg',
        whyChooseCards: [
            {
                title: 'Outstanding Education',
                description:
                    'Through the unique curriculum, the education system not only emphasizes on majors but also on liberal arts. Liberal arts may not provide much of subject knowledge as a major does but instead contributes to more creative, thoughtful, and bold problem-solving ability. You will start thinking beyond the boundaries of only "majors".',
            },
            {
                title: 'Multicultural Environment',
                description:
                    'Diversity helps you grow to/from all aspects of life. The U.S. being a favorite destination for the students has a variety in every feature such as race, culture, religion, and intellect. University students get to know a lot outside the classroom. Be a part of various clubs and activities which can help in building network with diverse people and find students with the same interests.',
            },
            {
                title: 'Flexibility in the U.S. Education System',
                description:
                    "A flexible education system is available in the country, so you are not forced to pursue general studies all over the year. Liberal arts of choosing the interesting subjects help the U.S. your want to study in a concentrated & narrowed-down view. University is available at all levels such as associate, bachelor's, master's, and doctorate. It is distinctly different from other rigid education systems.",
            },
            {
                title: 'Practical Aspects of Education',
                description:
                    'Studies in the U.S. universities is focused on practical aspects of the subject which, on a broader view makes the students all-rounder.',
            },
        ],
    },
    

    canada: {
        name: 'Canada',
        heading: 'Top-tier, Prestigious Schools of Canada',
        paragraph:
            'Get an education in Canada, and your diploma will be instantly recognized around the world.',
        backgroundImage: '/canada/canadaN.png',
        greenSectionContent: [
            'Great Canadian universities.',
            'Accessible Canadian student visa process.',
            'Canada has a great social system.',
            'Canada has affordable tuition fees and living costs.',
            'Canada has a perfect blend of nature, technology, and culture.',
        ],
        animalShadow: '/canada/animal-green.svg',
        universityLogos: [
            { logo: '/canada/University_of_Toronto-Logo.wine.png', height: '', title: 'University of Toronto' },
            { logo: '/canada/mcgill.svg', height: '', title: 'McGill University' },
            { logo: '/canada/university of british columbia.png', height: '', title: 'University of British Columbia' },
            { logo: '/canada/university-of-alberta.svg', height: '', title: 'University of Alberta' },
            { logo: '/canada/Universite_de_Montreal_logo.png', height: '', title: 'Université de Montréal' },
            { logo: '/canada/university of calgary.png', height: '', title: 'University of Calgary' },
            { logo: '/canada/university-of-ottawa.png', height: '', title: 'University of Ottawa' },
            { logo: '/canada/velute.svg', height: '', title: 'Western University' },
            { logo: '/canada/University_of_Waterloo.png', height: '', title: 'University of Waterloo' },
            { logo: '/canada/McMaster_University.png', height: '', title: 'McMaster University' },
        ],
        blueAnimal: '/canada/animal-blue.svg',
        whyChooseCards: [
            {
                title: 'How much money will it take to study in Canada?',
                description:
                    "Cost of studying in Canada will depend upon the level of degree, university and program you are applying to. Average tuition fees of bachelor's degree is between 18000 to 20000 CAD per annum and masters costs around 25000 to 17000 CAD per annum.",
            },
            {
                title: 'Which course is best for study in Canada?',
                description:
                    'MBA, computer science & IT, business, finance, engineering, engineering management, physical & earth sciences, agricultural sciences, etc. are some of the popular courses to study in Canada.',
            },
            {
                title: 'Is there any age limit for Canada student visa?',
                description:
                    'No, there is no age limit for Canada student visa. However, students of higher age are required to provide substantial explanation about the gap years in their studies.',
            },
            {
                title: 'How much student can earn in Canada?',
                description:
                    'Students get paid on an hourly basis for their part-time work in Canada. The average pay is 10 CAD per hour.',
            },
        ],
    },
    

    newzealand: {
        name: 'New Zealand',
        heading: "Top 8 Universities in New Zealand",
        paragraph:
            "New Zealand, one of the finest locations to live, is home to some of the world's most prestigious educational institutions. Because New Zealand is tiny and uncrowded, moving around and getting things done is simple.",
        backgroundImage: '/new-zealand/newzeland.png', // Update based on your asset path
        greenSectionContent: [
            "New Zealand, the world\'s second most peaceful country, has all 8 state universities ranked in the top 3% globally.",
            'Easy entry requirements.',
            'A great destination.',
            'The healthy outdoor student lifestyle.',
        ],
        animalShadow: '/new-zealand/kiwi.svg', // Placeholder path, adjust if needed
        universityLogos: [
            { logo: '/new-zealand/lincoln.svg', height: '', title: 'Lincoln University' },
            { logo: '/new-zealand/canterbury.svg', height: '', title: 'University of Canterbury' },
            { logo: '/new-zealand/ingenio.svg', height: '', title: 'University of Auckland' },
            { logo: '/new-zealand/massey.svg', height: '', title: 'Massey University' },
            { logo: '/new-zealand/unvstylogo.svg', height: '', title: 'Victoria University of Wellington' },
        ],
        blueAnimal: '/new-zealand/newzealand.png',
        whyChooseCards: [
            {
                title: 'Imparts High Quality Education',
                description:
                    'Depending upon the QS world ranking, all state-funded universities of New Zealand rank within top 500 educational institutions around the world. It is ranked within 3% of all the well-known universities in the world.',
            },
            {
                title: 'Ease of Migration',
                description:
                    'If the students benefit the country through some skills, they are prioritized more than the remaining. The process of student visa acceptance and becoming a permanent citizen is easier for them in comparison to others.',
            },
            {
                title: 'Post Study Work Visa (Open)',
                description:
                    'After graduating, students are allowed to work in New Zealand for next 12 months starting from the date of completion of their program. They can apply for post study work visa (open) for the same.',
            },
            {
                title: 'Safety in NZ',
                description:
                    'It is 2nd most peaceful and considerably low corruption country in the world.',
            },
        ],
    },

    uk: {
        name: 'United Kingdom',
        heading: 'The Russell Group',
        paragraph:
            "The United Kingdom has been the favored destination for some of history's most influential thinkers. The United Kingdom's long-standing reputation for intellectual achievement, as well as its universities, continue to raise the standard in the academic world.",
        backgroundImage: '/uk/uk-bg.jpg',
        greenSectionContent: [
            'UK colleges rank among the best and offer globally recognized qualifications.',
            'The UK produces 5% of global research and 14% of the most cited papers.',
            'Universities offer flexible options to mix academic and professional courses.',
            'Teaching methods encourage creativity, skill development, and independence.',
        ],
        animalShadow: '/uk/deer-shadow.svg',
        universityLogos: [
            { logo: '/uk/university-of-oxford9718.jpg', height: '', title: 'University of Oxford' },
            { logo: '/uk/cambridge.svg', height: '', title: 'University of Cambridge' },
            { logo: '/uk/imperial-college-london-university.png', height: '', title: 'Imperial College London' },
            { logo: '/uk/university-of-bristol9427.jpg', height: '', title: 'University of Bristol' },
            { logo: '/uk/Logo-page-graphics6-e1737113535639.webp', height: '', title: 'University of Leeds' },
            { logo: '/uk/the-university-of-nottingham-1-logo-svg-vector (1).svg', height: '', title: 'University of Nottingham' },
            { logo: '/uk/university-of-sheffield.webp', height: '', title: 'University of Sheffield' },
            { logo: '/uk/University_of_Warwick_logo.svg', height: '', title: 'University of Warwick' },
            { logo: '/uk/queens-university-belfast-logo.png', height: '', title: "Queen's University Belfast" },
            { logo: '/uk/Uni_Exeter.svg.png', height: '', title: 'University of Exeter' },
            { logo: '/uk/manchester.jpg', height: '', title: 'University of Manchester' },
            { logo: '/uk/edinburgh.jpeg', height: '', title: 'University of Edinburgh' },
            { logo: '/uk/queen-mary-university.png', height: '', title: 'Queen Mary University of London' },
            { logo: '/uk/cardiff-university.png', height: '', title: 'Cardiff Metropolitan University' },
            { logo: '/uk/university_liverpool.jpg', height: '', title: 'University of Liverpool' },
            { logo: '/uk/durhan-university.png', height: '', title: 'Durham University' },
            { logo: '/uk/university of york.png', height: '', title: 'University of York' },
            { logo: '/uk/University_of_Southampton.png', height: '', title: 'University of Southampton' },
            { logo: '/uk/newcastle university.png', height: '', title: 'Newcastle University' },
            { logo: '/uk/university of glassgow.png', height: '', title: 'University of Glasgow' },
            { logo: "/uk/King's_College_London.png", height: '', title: "King's College London" },
            { logo: '/uk/London_school_of_economics.png', height: '', title: 'London School of Economics' },
            { logo: '/uk/University_College_London.png', height: '', title: 'University College London' },
        ],
        blueAnimal: '/uk/deer-blue.png',
        whyChooseCards: [
            {
                title: 'Great Place to Live and Study',
                description:
                    'If you are in UK, you have got Europe right on your doorstep. Within one hour, you can be in Amsterdam or Paris. A 2-hour flight can take you to Spain, Germany or Italy.',
            },
            {
                title: 'Shorter Duration of Courses',
                description:
                    "Courses in the UK are generally shorter than in many other countries. The country offers 3-year undergraduate degrees and 1-year master's programmers at the universities. It helps reduce tuition and accommodation costs to study in the UK for international students.",
            },
            {
                title: 'Scholarship and Financial Aid',
                description:
                    'There are hundreds of scholarships, grant schemes and bursaries offered by UK. International students get up to 100% Scholarship on tuition fees in selected Universities.',
            },
        ],
    },

    europe: {
        name: 'Europe',
        heading: 'Top Universities in Europe',
        paragraph:
            "With over 40 countries in Europe, it can be hard to decide where to spend a semester, summer, J-term, or year learning overseas! Each country has something to offer whether it's the cuisine, culture, stunning landscapes, or captivating languages.",
        backgroundImage: '/europe/europe.png', // Update with actual path
        greenSectionContent: [
            'Europe is a historic hub for learning with over 4000 higher education institutions.',
            'Education is largely subsidized through taxes in Europe.',
            'Students benefit from high academic standards and rich cultural diversity.',
          ],
        animalShadow: '/europe/yakh.svg', // Replace with accurate shadow if different
        universityLogos: [
            { logo: '/europe/kth.svg', height: '', title: 'KTH Royal Institute of Technology' },
            { logo: '/europe/ludovich.svg', height: '', title: 'Ludwig Maximilian University of Munich' },
            { logo: '/europe/tum_logo.jpg', height: '', title: 'Technical University of Munich' },
            { logo: '/europe/sigillvm.svg', height: '', title: 'University of Bologna' },
            // { logo: '/europe/osloensis.svg', height: '', title: 'University of Oslo' },
            { logo: '/europe/University_of_Edinburgh.png', height: '', title: 'University of Edinburgh' },
            { logo: '/europe/cambridge-logo.png', height: '', title: 'University of Cambridge' },

        ],
        blueAnimal: '/europe/europe-blue.png',
        whyChooseCards: [
            {
                title: 'Quality of Education',
                description:
                    "Europe's quality of universities is extremely good and includes some of the world's top-ranked institutions. These universities – as well as many other European universities – are all held in high regard worldwide and demonstrate Europe's ability to provide an exceptional standard of teaching for postgraduate students.",
            },
            {
                title: 'High Standard of Living',
                description:
                    'Studying abroad and in a country that speaks a language which is different to your mother tongue will definitely reflect well on you. It demonstrates that you are adventurous, adaptable and willing to learn about a different culture and way of living.',
            },
            {
                title: 'Job Prospects',
                description:
                    'Studying in a European city is beneficial for your future career as they tend to be large and diverse in their student population. This enables the postgraduate student a wider life experience as well as offering an excellent networking potential.',
            },
        ],
    },
    uae: {
        name: 'UAE',
        heading: 'Top Universities in UAE',
        paragraph:
            "The United Arab Emirates (UAE) is rapidly emerging as a global education hub with its futuristic cities, world-class infrastructure, and diverse student population. From business to AI, the UAE offers top-tier education aligned with global industry needs.",
        backgroundImage: '/uae/burj-khalifa.jpg', // Update with actual background image path
        greenSectionContent: [
            'UAE is home to globally ranked universities including international campuses from the US, UK, and Australia.',
            'The country offers a safe, multicultural environment and modern lifestyle with excellent student amenities.',
            'UAE\'s strategic location provides access to global opportunities, internships, and employment across sectors.',
        ],
        animalShadow: '/uae/falcon.png', // Replace with accurate falcon shadow
        universityLogos: [
            { logo: '/uae/Khalifa.png', height: '', title: '' },
            { logo: '/uae/ueau.jpg', height: '', title: '' },
            { logo: '/uae/aus.png', height: '', title: '' },
            { logo: '/uae/zu.png', height: '', title: '' },
            { logo: '/uae/Heriot-Watt_University_logo.svg', height: '', title: '' },
            { logo: '/uae/UD-logo.png', height: '', title: '' },
        ],
        blueAnimal: '/uae/falcon-blue.png', // Stylized falcon image
        whyChooseCards: [
            {
                title: 'Global Education Hub',
                description:
                    'UAE hosts top-ranking universities and international campuses offering globally recognized degrees across various disciplines.',
            },
            {
                title: 'Safe & Diverse Environment',
                description:
                    'The UAE is known for its safety, hospitality, and cultural diversity, making it a welcoming destination for international students.',
            },
            {
                title: 'Work Opportunities & Career Growth',
                description:
                    'Students can access internships, part-time work (with approvals), and job opportunities in sectors like technology, finance, media, and hospitality.',
            },
            {
                title: 'Affordable Tuition & Modern Living',
                description:
                    'Compared to other study destinations, UAE offers competitive tuition fees, world-class housing, and modern amenities tailored for student life.',
            },
            {
                title: 'Post-Study Residency Options',
                description:
                    'Graduates can apply for job-seeker or long-term visas, and exceptional students may qualify for the UAE Golden Visa program.',
            },
        ],
    },

    // Add other countries here...
};

export const getCountryData = async () => {
    try {
        const apiData = await getStudyAbroadData();
        console.log(apiData);

        if (Object.keys(apiData).length > 0) {
            return apiData;
        }
        return countryData;
    } catch (error) {
        console.error("API call failed, falling back to mock data", error);
        return countryData;
    }
}; 