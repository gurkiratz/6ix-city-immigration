import {
  BiServer,
  BiNews,
  BiDetail,
  BiRocket,
  BiPaperPlane,
  BiHelpCircle,
  BiLogIn,
  BiUser,
  BiError,
} from 'react-icons/bi'
import { HiAcademicCap, HiOutlineAcademicCap } from 'react-icons/hi'
import { BsHeadset } from 'react-icons/bs'
import {
  FaGlobeAmericas,
  FaLaptopCode,
  FaPassport,
  FaRegClock,
  FaRegTrashAlt,
} from 'react-icons/fa'
import { SiAircanada } from 'react-icons/si'
import { MdFamilyRestroom } from 'react-icons/md'
import { CgAirplane } from 'react-icons/cg'
import { GrUserWorker } from 'react-icons/gr'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { FaPersonCircleCheck } from 'react-icons/fa6'

const IconBoxData = [
  {
    classOption: 'bg-primary',
    icon: 'fal fa-layer-group fa-2x text-white',
    title: 'Good Performance',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state .',
  },
  {
    id: 2,
    classOption: 'bg-danger',
    icon: 'fal fa-shield-check fa-2x text-white',
    title: 'Highly Secure',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
  },
  {
    id: 3,
    classOption: 'bg-dark',
    icon: 'fal fa-code fa-2x text-white',
    title: 'Fast Development',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
  },
]
const FaqOneData = [
  {
    faqTitle: 'How does back pricing work?',
    faqDesc:
      'Progressively e-enable collaborative inexpensive supply chains. Efficiently maintain economically methods of empowerment for synergistic sound scenarios.',
  },
  {
    id: 2,
    faqTitle: 'How do I calculate how much price?',
    faqDesc:
      'Globally benchmark customized mindshare before clicks-and-mortar partnerships. Efficiently maintain economically sound scenarios and whereas client-based progressively.',
  },
  {
    id: 3,
    faqTitle: 'Can you show me an example?',
    faqDesc:
      'Dynamically visualize whereas competitive relationships. Progressively benchmark customized partnerships generate interdependent benefits rather sound scenarios and robust alignments.',
  },
]

// Testimonial data
/**
// const TestimonialData = [
//   {
//     authorImg: '/testimonial/1.jpg',
//     authorName: 'Mr.Rupan Oberoi',
//     authorTitle: 'Founder and CEO at Amaara Herbs',
//     quoteTitle: 'The Best Template You Got to Have it!',
//     authorQuote:
//       'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical',
//   },
//   {
//     id: 2,
//     authorImg: '/testimonial/2.jpg',
//     authorName: 'Joan Dho',
//     authorTitle: 'Founder and CTO',
//     quoteTitle: 'Best Template for SAAS Company!',
//     authorQuote:
//       'Dynamically create innovative core competencies with effective best practices promote innovative infrastructures.',
//   },
//   {
//     id: 3,
//     authorImg: '/testimonial/3.jpg',
//     authorName: 'Ranu Mondal',
//     authorTitle: 'Lead Developer',
//     quoteTitle: 'It is undeniably good!',
//     authorQuote:
//       'Rapidiously supply client-centric e-markets and maintainable processes progressively engineer',
//   },
//   {
//     id: 4,
//     authorImg: '/testimonial/4.jpg',
//     authorName: 'Mr.Rupan Oberoi',
//     authorTitle: 'Founder and CEO at Amaara Herbs',
//     quoteTitle: 'The Best Template You Got to Have it!',
//     authorQuote:
//       'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical',
//   },
// ]
 */

const TestimonialData = [
  {
    authorName: 'Arshpreet Kaur',
    authorTitle: 'LMIA, PR',
    quoteTitle: 'First my Work Permit Extension, then LMIA and now my PR!',
    authorQuote:
      "Whoever is reading this review if you are thinking about the services from 6ix city immigration its worth your time and money. This review is long pending I got into contact with Harsh through a friend. I got my work permit extension by her, LMIA and now my PR. She always adviced me in my favour. I'm glad that i trusted her and everything happened as she said. I could have added this review a long ago but i wanted to share my thorough experience. Thanks Harsh for being patient and generous even on the days when i was stressing out.",
    authorImg: '/testimonial/arshpreet.png',
    target: 'testimonial-tab-1',
    active: 'active show',
  },
  {
    authorName: 'Manush Patel',
    authorTitle: 'Common Law Work Permit Extension',
    quoteTitle: 'I had many questions...',
    authorQuote:
      'I had many questions when I first called Harshpreet regarding common law work permit extension. She answered everything and listened to me very calmly and helped us throughout the entire process by staying in constant touch with us. Thank you for all the help. I would definitely recommend 6ix city immigration for your immigration needs.',
    authorImg: '/testimonial/manush.png',
    target: 'testimonial-tab-2',
  },
  {
    authorName: 'Ravinder Pal Singh',
    authorTitle: 'PR, Super Visa, US Visa & Spousal PR',
    quoteTitle: 'With 6 consecutive 100% success rate cases for me!',
    authorQuote:
      "The number one go to person for all your immigration needs. Harsh treats all her cases as if they are her own. With 6 consecutive 100% success rate cases for me personally from work permit, PR, Parent's Super Visa, Visitor, US Visa to Spousal PR visa. They treat their clients as family. I highly recommend them as the most dedicated immigration consultant in town.",
    authorImg: '/testimonial/rv.jpg',
    target: 'testimonial-tab-2',
  },

  {
    authorName: 'Misfal',
    authorTitle: 'PR File',
    quoteTitle: 'I had a PR application refused due to a clerical error!',
    authorQuote:
      'I would highly recommend 6ix City Immigration Inc to anyone who needs immigration services. Harshpreet has great knowledge with immigration regulations and can assist with complicated scenarios. In my case, I consulted 6ix city immigration services after I had a PR application refused due to a clerical error. I also had a work permit expiring soon at the time. Harshpreet took the time to understand the situation and gave me proper guidance on the next steps. Throughout the process they were also available to answer any questions and issues I had. They were also very thorough in vetting the required documents for my application which made me wish  I had used their services the first time around and saved a lot of time and anguish. Since then I have referred a few people to their services and all of them have had good experiences.',
    authorImg: '/testimonial/misfal.png',
    target: 'testimonial-tab-3',
  },
  {
    authorName: 'Mrunali Vekariya',
    authorTitle: 'Visa Extension',
    quoteTitle: 'Harshpreet mam is really wonderful and great with her work!',
    authorQuote:
      'Harshpreet mam is really wonderful and great with her work, she is patient and particular about everything, be it a simple process or a complicated one, she helped me with my extension visa and my file had some complications, but it went really smoothly, its all because of her!',
    authorImg: '/testimonial/mrunali.png',
    target: 'testimonial-tab-4',
  },
  {
    authorName: 'Narinder Randhawa',
    authorTitle: 'Family Visitor Visa & Work Permit',
    quoteTitle:
      "Harsh's in-depth knowledge of immigration laws and procedures gave me confidence and peace of mind!",
    authorQuote:
      'As someone seeking immigration assistance, I am grateful beyond words for choosing Harsh Preet Kaur 6ix City immigration lawyer. Harsh Preet Kaur impressed me with her professionalism, expertise, and dedication. She offered insightful advice and guidance throughout the entire immigration process. Her in-depth knowledge of immigration laws and procedures gave me confidence and peace of mind. Thanks to Harsh Preet, my immigration journey for granting family Visitor Visa & Work permit was a success. She navigated through the complexities of the process with expertise and unwavering commitment. I wholeheartedly recommend Harsh to anyone in need of immigration services. She is the epitome of excellence in her field and has positively impacted my life.',
    authorImg: '/testimonial/narinder.png',
    target: 'testimonial-tab-5',
  },
  {
    authorName: 'Mehak Kaur',
    authorTitle: 'PR File',
    quoteTitle: 'I had the best experience ever!',
    authorQuote:
      "My file for PR was applied by Harshpreet and I had the best experience ever as I had nothing to worry for. She took all the pain and explains everything in detail and nicely with lots of patience. She broke down the complete process step by step and she is just one call away for the solutions of any problem you face. I don't think I would have got any other better agent for myself. Come guys and get your work done stress free.",
    authorImg: '/testimonial/mehak.png',
    target: 'testimonial-tab-6',
  },
  {
    authorName: 'Tamilarasi Ramamoorthy',
    authorTitle: 'PR File',
    quoteTitle:
      "I got my Permanent Residence recently with Harshpreet's guidance!",
    authorQuote:
      "Thank you 6ix city immigration for your excellent service. I got my Permanent Residence recently with Harshpreet's guidance and my experience with 6ix city immigration was amazing. She is really helpful and answered all my questions and concern at all hours and I definitely recommend their service for any Immigration purposes.",
    authorImg: '/testimonial/4.jpg',
    target: 'testimonial-tab-6',
  },
  {
    authorName: 'Vishnu Prabhakar',
    authorTitle: 'Visa',
    quoteTitle: ' I highly recommend 6ix City Immigration Inc.!',
    authorQuote:
      "I had the pleasure of working with Harshpreet Kaur, my immigration consultant at 6ix City Immigration Inc., and I must say, my experience with this company was exceptional. I highly recommend 6ix City Immigration Inc. and specifically, Harshpreet Kaur, to anyone who is considering immigrating to Canada. The entire team at 6ix City Immigration Inc. are experts in their field and have a deep understanding of the immigration process. With Harshpreet's guidance and support, the entire process of immigrating to Canada became a smooth and seamless experience for me.",
    authorImg: '/testimonial/vishu.png',
    target: 'testimonial-tab-6',
  },
  {
    authorName: 'Jasmeen Sandhu',
    authorTitle: 'Super Visa',
    quoteTitle: 'My parents had 3 visitor visa refusals!',
    authorQuote:
      'My parents had 3 visitor visa refusals. I was worried about their super visa application. Harshpreet is a wonderful professional. She answers all your questions and doubts in timely manner. Hats off to Harsh and her team, my parents got their super visa in less than 2 months. If you want to best use your time and money, I would highly recommend 6ix City Immigration to everyone.',
    authorImg: '/testimonial/jasmeen.png',
    target: 'testimonial-tab-6',
  },
]

const TestimonialOneData = [
  {
    id: '#testimonial-tab-1',
    activeClass: 'active',
    title: 'I had many questions!',
    desc: 'I had many questions when I first called Harshpreet regarding common law work permit extension. She answered everything and listened to me very calmly and helped us throughout the entire process by staying in constant touch with us. Thank you for all the help. I would definitely recommend 6ix city immigration for your immigration needs.',
    authorName: 'Manush Patel',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-1.jpg',
    authorAvatar: '/testimonial/1.jpg',
  },
  {
    id: '#testimonial-tab-2',
    title: 'Embarrassed by the First Version.',
    desc: 'Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leveraother backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.',
    authorName: 'Rupan Oberoi',
    authorDesn: 'Web Designer',
    authorThumb: '/testimonial/t-2.jpg',
    authorAvatar: '/testimonial/2.jpg',
  },
  {
    id: '#testimonial-tab-3',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Jaspinder Kaur',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-3.jpg',
    authorAvatar: '/testimonial/3.jpg',
  },
  {
    id: '#testimonial-tab-4',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-4.jpg',
    authorAvatar: '/testimonial/4.jpg',
  },
  {
    id: '#testimonial-tab-5',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-5.jpg',
    authorAvatar: '/testimonial/5.jpg',
  },
]

const registerTestimonial = [
  {
    active: 'active show',
    target: 'testimonial-tab-1',
    header: 'The Best Template You Got to Have it!',
    info: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global.',
    name: 'Joe Richard',
    title: 'Visual Designer',
  },
  {
    target: 'testimonial-tab-2',
    header: 'Amazing Quiety template!',
    info: 'Distinctively engineer client-centered information. Progressively customize client-centered repurpose viral e-services whereas before 24/7 total linkage.',
    name: 'Oberoi R.',
    title: 'CEO at Herbs',
  },
  {
    target: 'testimonial-tab-3',
    header: 'Embarrassed by the First Version!',
    info: ' Efficiently whiteboard cross-unit meta-services. Quickly transition standardized schemas via leveraged users. Assertively actualize mission-critical supply chains through.',
    name: 'Joan Dho',
    title: 'Founder and CTO',
  },
]
const registerTestimonialTarget = [
  {
    active: 'active',
    target: '#testimonial-tab-1',
    image: '/testimonial/1.jpg',
  },
  {
    target: '#testimonial-tab-2',
    image: '/testimonial/2.jpg',
  },
  {
    target: '#testimonial-tab-3',
    image: '/testimonial/3.jpg',
  },
]

//
const testimonialAuthor = [
  {
    name: 'Arshpreet Kaur',
    title: 'LMIA, PR',
    image: '/testimonial/arshpreet.png',
    target: '#testimonial-tab-1',
  },
  {
    name: 'Manush Patel',
    title: 'Common Law Work Permit Extension',
    image: '/testimonial/manush.png',
    target: '#testimonial-tab-2',
  },
  {
    name: 'Ravinder Pal Singh',
    title: 'PR, Super Visa, US Visa & Spousal PR',
    image: '/testimonial/rv.jpg',
    target: '#testimonial-tab-2',
  },

  {
    name: 'Misfal',
    title: 'PR file',
    image: '/testimonial/misfal.png',
    target: '#testimonial-tab-3',
  },
  {
    name: 'Mrunali Vekariya',
    title: 'Visa Extension',
    image: '/testimonial/mrunali.png',
    target: '#testimonial-tab-3',
  },
  {
    name: 'Narinder Randhawa',
    title: 'Family Visitor Visa & Work Permit',
    image: '/testimonial/narinder.png',
    target: '#testimonial-tab-4',
  },
  {
    name: 'Mehak Kaur',
    title: 'PR File',
    image: '/testimonial/mehak.png',
    target: '#testimonial-tab-6',
  },
  {
    name: 'Tamilarasi Ramamoorthy',
    title: 'PR File',
    image: '/testimonial/5.jpg',
    target: '#testimonial-tab-6',
  },
  {
    name: 'Vishnu Prabhakar',
    title: 'Visa',
    image: '/testimonial/vishu.png',
    target: '#testimonial-tab-6',
  },
  {
    name: 'Jasmeen Sandhu',
    title: 'Super Visa',
    image: '/testimonial/jasmeen.png',
    target: '#testimonial-tab-6',
  },
]

const testimonialOne = [
  {
    name: 'Arshpreet Kaur',
    title: 'LMIA, PR',
    header: 'First my Work Permit Extension, then LMIA and now my PR!',
    description:
      "Whoever is reading this review if you are thinking about the services from 6ix city immigration its worth your time and money. This review is long pending I got into contact with Harsh through a friend. I got my work permit extension by her, LMIA and now my PR. She always adviced me in my favour. I'm glad that i trusted her and everything happened as she said. I could have added this review a long ago but i wanted to share my thorough experience. Thanks Harsh for being patient and generous even on the days when i was stressing out.",
    image: '/testimonial/client-3.jpg',
    target: 'testimonial-tab-1',
    active: 'active show',
  },
  {
    name: 'Manush Patel',
    title: 'Common Law Work Permit Extension',
    header: 'I had many questions...',
    description:
      'I had many questions when I first called Harshpreet regarding common law work permit extension. She answered everything and listened to me very calmly and helped us throughout the entire process by staying in constant touch with us. Thank you for all the help. I would definitely recommend 6ix city immigration for your immigration needs.',
    image: '/testimonial/client-1.jpg',
    target: 'testimonial-tab-2',
  },
  {
    name: 'Ravinder Pal Singh',
    title: 'PR, Super Visa, US Visa & Spousal PR',
    header: 'With 6 consecutive 100% success rate cases for me!',
    description:
      "The number one go to person for all your immigration needs. Harsh treats all her cases as if they are her own. With 6 consecutive 100% success rate cases for me personally from work permit, PR, Parent's Super Visa, Visitor, US Visa to Spousal PR visa. They treat their clients as family. I highly recommend them as the most dedicated immigration consultant in town.",
    image: '/testimonial/client-3.jpg',
    target: 'testimonial-tab-2',
  },

  {
    name: 'Misfal',
    title: 'PR File',
    header: 'I had a PR application refused due to a clerical error!',
    description:
      'I would highly recommend 6ix City Immigration Inc to anyone who needs immigration services. Harshpreet has great knowledge with immigration regulations and can assist with complicated scenarios. In my case, I consulted 6ix city immigration services after I had a PR application refused due to a clerical error. I also had a work permit expiring soon at the time. Harshpreet took the time to understand the situation and gave me proper guidance on the next steps. Throughout the process they were also available to answer any questions and issues I had. They were also very thorough in vetting the required documents for my application which made me wish  I had used their services the first time around and saved a lot of time and anguish. Since then I have referred a few people to their services and all of them have had good experiences.',
    image: '/testimonial/client-2.jpg',
    target: 'testimonial-tab-3',
  },
  {
    name: 'Mrunali Vekariya',
    title: 'Visa Extension',
    header: 'Harshpreet mam is really wonderful and great with her work!',
    description:
      'Harshpreet mam is really wonderful and great with her work, she is patient and particular about everything, be it a simple process or a complicated one, she helped me with my extension visa and my file had some complications, but it went really smoothly, its all because of her!',
    image: '/testimonial/client-2.jpg',
    target: 'testimonial-tab-4',
  },
  {
    name: 'Narinder Randhawa',
    title: 'Family Visitor Visa & Work Permit',
    header:
      "Harsh's in-depth knowledge of immigration laws and procedures gave me confidence and peace of mind!",
    description:
      'As someone seeking immigration assistance, I am grateful beyond words for choosing Harsh Preet Kaur 6ix City immigration lawyer. Harsh Preet Kaur impressed me with her professionalism, expertise, and dedication. She offered insightful advice and guidance throughout the entire immigration process. Her in-depth knowledge of immigration laws and procedures gave me confidence and peace of mind. Thanks to Harsh Preet, my immigration journey for granting family Visitor Visa & Work permit was a success. She navigated through the complexities of the process with expertise and unwavering commitment. I wholeheartedly recommend Harsh to anyone in need of immigration services. She is the epitome of excellence in her field and has positively impacted my life.',
    image: '/testimonial/client-2.jpg',
    target: 'testimonial-tab-5',
  },
  {
    name: 'Mehak Kaur',
    title: 'PR File',
    header: 'I had the best experience ever!',
    description:
      "My file for PR was applied by Harshpreet and I had the best experience ever as I had nothing to worry for. She took all the pain and explains everything in detail and nicely with lots of patience. She broke down the complete process step by step and she is just one call away for the solutions of any problem you face. I don't think I would have got any other better agent for myself. Come guys and get your work done stress free.",
    image: '/testimonial/client-1.jpg',
    target: 'testimonial-tab-6',
  },
  {
    name: 'Tamilarasi Ramamoorthy',
    title: 'PR File',
    header: "I got my Permanent Residence recently with Harshpreet's guidance!",
    description:
      "Thank you 6ix city immigration for your excellent service. I got my Permanent Residence recently with Harshpreet's guidance and my experience with 6ix city immigration was amazing. She is really helpful and answered all my questions and concern at all hours and I definitely recommend their service for any Immigration purposes.",
    image: '/testimonial/client-4.jpg',
    target: 'testimonial-tab-6',
  },
  {
    name: 'Vishnu Prabhakar',
    title: 'Visa',
    header: ' I highly recommend 6ix City Immigration Inc.!',
    description:
      "I had the pleasure of working with Harshpreet Kaur, my immigration consultant at 6ix City Immigration Inc., and I must say, my experience with this company was exceptional. I highly recommend 6ix City Immigration Inc. and specifically, Harshpreet Kaur, to anyone who is considering immigrating to Canada. The entire team at 6ix City Immigration Inc. are experts in their field and have a deep understanding of the immigration process. With Harshpreet's guidance and support, the entire process of immigrating to Canada became a smooth and seamless experience for me.",
    image: '/testimonial/client-1.jpg',
    target: 'testimonial-tab-6',
  },
  {
    name: 'Jasmeen Sandhu',
    title: 'Super Visa',
    header: 'My parents had 3 visitor visa refusals!',
    description:
      'My parents had 3 visitor visa refusals. I was worried about their super visa application. Harshpreet is a wonderful professional. She answers all your questions and doubts in timely manner. Hats off to Harsh and her team, my parents got their super visa in less than 2 months. If you want to best use your time and money, I would highly recommend 6ix City Immigration to everyone.',
    image: '/testimonial/client-3.jpg',
    target: 'testimonial-tab-6',
  },
]

///footer data
const footerPrimaryPages = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about-us',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Career',
    href: '/career',
  },
  {
    title: 'Integrations',
    href: '/integrations',
  },
  {
    title: 'Integrations Single',
    href: '/integration-single',
  },
]

const footerPages = [
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Blog',
    href: '/blogs',
  },
  {
    title: 'Blog Details',
    href: '/blog-single',
  },
  {
    title: 'Contact',
    href: '/contact-us',
  },
  {
    title: 'Career Single',
    href: '/career-single',
  },
  {
    title: 'Services Single',
    href: '/single-service',
  },
]
const footerTemplate = [
  {
    title: 'Contact',
    href: '/contact-us',
  },
  {
    title: 'Support',
    href: '/help-center',
  },
  {
    title: 'Support Single',
    href: '/help-center-single',
  },
  {
    title: 'Request for Demo',
    href: '/request-call',
  },
  {
    title: 'Coming Soon',
    href: '/coming-soon',
  },
  {
    title: 'Career Single',
    href: '/career-single',
  },
]

//navbar data
const navHomeOne = [
  {
    title: 'Sass Company 1',
    info: "It's for SaaS Software Company",
    href: '/',
  },
  {
    title: 'Sass Company 2',
    info: ' Modern Sass agency',
    href: 'sass-company-two',
  },
  {
    title: 'Desktop App',
    info: 'Web Software Company',
    href: 'desktop-app',
  },

  {
    title: 'App Landing',
    info: ' App and Software Landing',
    href: 'app-landing',
  },
  {
    title: 'Software Application',
    info: 'IT solutions and SaaS Application',
    href: 'software-application',
  },
  {
    title: 'Startup Agency',
    info: 'Different type of Agency',
    href: 'startup-agency',
  },
  {
    title: 'Data Analysis',
    info: ' Software & Data Analysis',
    href: 'data-analysis',
  },
  {
    title: 'App Landing Two',
    info: 'Software & Data Analysis',
    href: 'app-landing-two',
  },
  {
    title: 'IT Solution',
    info: 'IT Solution and Sass Application',
    href: 'it-solution',
  },
]

const navHomeTwo = [
  {
    title: 'Cyber Security',
    info: 'Cyber Security Landing Page',
    href: 'cyber-security',
  },
  {
    title: 'Crypto Currency',
    info: 'Crypto Currency Landing Page',
    href: 'crypto-currency',
  },
  {
    title: 'Game Solution',
    info: 'Crypto Server Landing Page',
    href: 'game-solution',
  },
  {
    title: 'Payment Gatway',
    info: 'Payment Landing Page',
    href: 'payment-gateway',
  },
  {
    title: 'Digital Marketing',
    info: 'Digital Landing Page',
    href: 'digital-marketing',
  },
  {
    title: 'Conference',
    info: 'Conference Landing Page',
    href: 'conference',
  },

  {
    title: 'Quiety Insurance',
    info: 'Quiety Landing Page',
    href: 'quiety-insurance',
  },

  {
    title: 'Sass Marketing',
    info: 'Sass Marketing Landing Page',
    href: 'sass-marketing',
  },
]

//Offcanvas Menu
const offcanvasMenuData = [
  {
    title: 'Sass Company 1',
    info: "It's for SaaS Software Company",
    href: '/',
  },
  {
    title: 'Sass Company 2',
    info: ' Modern Sass agency',
    href: 'sass-company-two',
  },
  {
    title: 'Desktop App',
    info: 'Web Software Company',
    href: 'desktop-app',
  },

  {
    title: 'App Landing',
    info: ' App and Software Landing',
    href: 'app-landing',
  },
  {
    title: 'Software Application',
    info: 'IT solutions and SaaS Application',
    href: 'software-application',
  },
  {
    title: 'Startup Agency',
    info: 'Different type of Agency',
    href: 'startup-agency',
  },
  {
    title: 'Data Analysis',
    info: ' Software & Data Analysis',
    href: 'data-analysis',
  },
  {
    title: 'App Landing Two',
    info: 'Software & Data Analysis',
    href: 'app-landing-two',
  },
  {
    title: 'IT Solution',
    info: 'IT Solution and Sass Application',
    href: 'it-solution',
  },
  {
    title: 'Cyber Security',
    info: 'Cyber Security Landing Page',
    href: 'cyber-security',
  },
  {
    title: 'Crypto Currency',
    info: 'Crypto Currency Landing Page',
    href: 'crypto-currency',
  },
  {
    title: 'Game Solution',
    info: 'Crypto Server Landing Page',
    href: 'game-solution',
  },
  {
    title: 'Payment Gatway',
    info: 'Payment Landing Page',
    href: 'payment-gateway',
  },
  {
    title: 'Digital Marketing',
    info: 'Digital Landing Page',
    href: 'digital-marketing',
  },
  {
    title: 'Conference',
    info: 'Conference Landing Page',
    href: 'conference',
  },
  {
    title: 'Quiety Insurance',
    info: 'Quiety Landing Page',
    href: 'quiety-insurance',
  },
  {
    title: 'Sass Marketing',
    info: 'Sass Marketing Landing Page',
    href: 'sass-marketing',
  },
]

const servicesData = [
  {
    id: 1,
    title: 'Express Entry',
    serviceDesc: 'CEC, FSW, FST, Occupational based draws',
    icon: <SiAircanada />,
    component: SiAircanada,
    href: '/services/express-entry',
    color: 'danger',
  },
  {
    id: 2,
    title: 'Family class sponsorship',
    serviceDesc: 'Parents Sponsorship | Spousal Sposorship',
    icon: <MdFamilyRestroom />,
    component: MdFamilyRestroom,
    href: '/services/family-class-sponsorship',
    color: 'success',
  },
  {
    id: 3,
    title: 'Visitor / Super Visa',
    serviceDesc: 'Visitor / Super Visa',
    icon: <CgAirplane />,
    component: CgAirplane,
    href: '/services/visitor-super-visa',
    color: 'info',
  },
  {
    id: 4,
    title: 'LMIA',
    serviceDesc: 'PR Support & Dual Intent',
    icon: <FaPassport />,
    component: FaPassport,
    href: '/services/labour-market-impact-assessment',
    color: 'warning',
  },
  {
    id: 5,
    title: 'Study Permit',
    serviceDesc: 'Initial Permit or Permit Extension',
    icon: <HiAcademicCap />,
    component: HiAcademicCap,
    href: '/services/study-permit',
    color: 'info',
  },
  {
    id: 6,
    title: 'Work Permit',
    serviceDesc:
      'PGWP, Spousal Work Permit, Co-op Work Permit, BOWP, LMIA Based Work Permit',
    icon: <GrUserWorker />,
    component: GrUserWorker,
    href: '/services/work-permit',
    color: 'danger',
  },
  {
    id: 7,
    title: 'TRV',
    serviceDesc: 'Study Visa | Work Visa | Visitor Record',
    icon: <HiBuildingOffice2 />,
    component: HiBuildingOffice2,
    href: '/',
    color: 'danger',
  },
  {
    id: 8,
    title: 'Citizenship',
    serviceDesc: 'Canadian Citizenship',
    icon: <FaPersonCircleCheck />,
    component: FaPersonCircleCheck,
    href: '/services/canadian-citizenship',
    color: 'success',
  },
  {
    id: 9,
    title: 'International',
    serviceDesc: 'USA / UK / India Visa',
    icon: <FaGlobeAmericas />,
    component: FaGlobeAmericas,
    href: '/',
    color: 'info',
  },
]

const navCompanyLinks = [
  {
    title: 'Contact Us',
    icon: <BiLogIn />,
    href: 'contact-us',
  },
  {
    title: 'Service Single',
    icon: <BiServer />,
    href: 'single-service',
  },
  {
    title: 'Our Latest News',
    icon: <BiNews />,
    href: 'blogs',
  },
  {
    title: 'News Details',
    icon: <BiDetail />,
    href: 'blog-single',
  },
  {
    title: 'Career',
    icon: <HiOutlineAcademicCap />,
    href: 'career',
  },
  {
    title: 'Career Single',
    icon: <HiOutlineAcademicCap />,
    href: 'career-single',
  },
  {
    title: 'Integrations',
    icon: <BiRocket />,
    href: 'integrations',
  },
  {
    title: 'Integrations Single',
    icon: <BiPaperPlane />,
    href: 'integration-single',
  },
]

const navCompanyPage = [
  {
    title: 'Help Center',
    icon: <BiHelpCircle />,
    href: 'help-center',
  },
  {
    title: 'Help Details',
    icon: <BsHeadset />,
    href: 'help-center-single',
  },
  {
    title: 'Request for Demo',
    icon: <FaLaptopCode />,
    href: 'request-call',
  },
  {
    title: 'User Login',
    icon: <BiLogIn />,
    href: 'login',
  },
  {
    title: 'User SignUp',
    icon: <BiUser />,
    href: 'register',
  },
  {
    title: 'Recovery Account',
    icon: <FaRegTrashAlt />,
    href: 'password-reset',
  },
  {
    title: '404 Page',
    icon: <BiError />,
    href: '404',
  },
  {
    title: 'Coming Soon',
    icon: <FaRegClock />,
    href: 'coming-soon',
  },
]

//pricing data
const pricingData = [
  {
    title: 'Stater',
    price: '$25',
    time: '/month',
    bgColor: 'bg-white',
    textColor: 'text-primary',
    btnColor: 'btn-outline-primary',
    shape: 'left--40 bottom--40',
    listItem: [
      {
        li: '1 Team',
      },
      {
        li: '1 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: 'Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },

  {
    title: 'Advanced',
    price: '$45',
    time: '/month',
    bgColor: 'bg-gradient',
    textColor: 'text-warning',
    btnColor: 'btn-primary',

    listItem: [
      {
        li: '5 Team',
      },
      {
        li: '3 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: '24 Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },

  {
    title: 'Premium',
    price: '$75',
    time: '/month',
    bgColor: 'bg-white',
    textColor: 'text-primary',
    btnColor: 'btn-outline-primary',
    shape: 'right--40 top--40',
    listItem: [
      {
        li: '6 Team',
      },
      {
        li: '8 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: '40 Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },
]

//integration data
const integrationOneRight = [
  {
    image: '/integations/7.png',
    className: 'integration-7',
  },
  {
    image: '/integations/8.png',
    className: 'integration-8',
  },
  {
    image: '/integations/9.png',
    className: 'integration-9',
  },
  {
    image: '/integations/10.png',
    className: 'integration-10',
  },
  {
    image: '/integations/11.png',
    className: 'integration-11',
  },
  {
    image: '/integations/12.png',
    className: 'integration-12',
  },
]

const integrationFeature = [
  {
    logo: '/integations/1.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/2.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/3.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/4.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/5.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/6.png',
    type: 'Basic',
    class: 'bg-danger-soft text-danger',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/7.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/8.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/9.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
]

const integrationOneLeft = [
  {
    image: '/integations/1.png',
    className: 'integration-1',
  },
  {
    image: '/integations/2.png',
    className: 'integration-2',
  },
  {
    image: '/integations/3.png',
    className: 'integration-3',
  },
  {
    image: '/integations/4.png',
    className: 'integration-4',
  },
  {
    image: '/integations/5.png',
    className: 'integration-5',
  },
  {
    image: '/integations/6.png',
    className: 'integration-6',
  },
]

//ourTeam data
const ourTeam = [
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-1.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-2.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-3.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-4.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-5.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-6.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-7.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-8.jpg',
  },
]

//blog data
const blogFeatureData = [
  {
    image: '/blog/blog-1.jpg',
    type: 'Design',
    header: 'Do you really understand the concept of product value?',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/6.jpg',
    author: 'Jane Martin',
    data: 'April 24, 2021',
    class: 'bg-warning-soft',
  },
  {
    image: '/blog/blog-2.jpg',
    type: 'Customer',
    header: 'Why communities help you build better products for your business',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the  other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/1.jpg',
    author: 'Veronica P. Byrd',
    data: 'April 24, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-3.jpg',
    type: 'Development',
    header: 'Why communities help you build better products',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/3.jpg',
    author: 'Martin Gilbert',
    data: 'May 20, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-4.jpg',
    type: 'Marketing',
    header: 'The role of product ops in successful distributed teams',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/4.jpg',
    author: 'Raymond H. Martin',
    data: 'June 10, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-5.jpg',
    type: 'UI/UX',
    header: 'The modern product manager’s tech stack',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/5.jpg',
    author: 'Luthar Martin',
    data: 'July 24, 2021',
    class: 'bg-warning-soft',
  },
  {
    image: '/blog/blog-6.jpg',
    type: 'Management',
    header: '30 product management thought leaders to follow',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/6.jpg',
    author: 'Donna Martin',
    data: 'August 25, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-7.jpg',
    type: 'Design',
    header: 'New analyst report: Digital product management tools and tech',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/1.jpg',
    author: 'Donna R. Book',
    data: 'September 24, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-8.jpg',
    type: 'Development',
    header: 'A frank discussion about diversity, inclusion, and allyship',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/3.jpg',
    author: 'Donna R. Martin',
    data: 'October 24, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-9.jpg',
    type: 'Design',
    header: '4 steps for measuring the impact of product discovery',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/2.jpg',
    author: 'Martin Luthar',
    data: 'November 24, 2021',
    class: 'bg-warning-soft',
  },
]

//blog services data
const blogServicesData = [
  {
    image: '/service/family.jpg',
    type: 'Design',
    header: 'Family Class Sponsorship',
    info: 'Family is at the heart of every Canadian community. The Family Class Sponsorship program allows Canadian citizens and permanent residents to reunite with their loved ones by sponsoring them to come to Canada as permanent residents.',
    profilePic: '/testimonial/6.jpg',
    author: 'Jane Martin',
    data: 'April 24, 2021',
    class: 'bg-warning-soft',
  },
  {
    image: '/service/labor-market.jpg',
    type: 'Customer',
    header: 'LMIA',
    info: 'Labour Market Impact Assessment (LMIA) is a crucial process for Canadian employers looking to hire foreign workers. It ensures that hiring a foreign worker will not negatively affect the Canadian labour market.',
    profilePic: '/testimonial/1.jpg',
    author: 'Veronica P. Byrd',
    data: 'April 24, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/service/work.jpg',
    type: 'Development',
    header: 'Work Permit',
    info: 'Canada offers abundant opportunities for skilled workers from around the world. Whether you are looking to gain international work experience, support your family, or explore new career prospects, obtaining a Work Permit is a crucial step.',
    profilePic: '/testimonial/3.jpg',
    author: 'Martin Gilbert',
    data: 'May 20, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-4.jpg',
    type: 'Marketing',
    header: 'The role of product ops in successful distributed teams',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/4.jpg',
    author: 'Raymond H. Martin',
    data: 'June 10, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-5.jpg',
    type: 'UI/UX',
    header: 'The modern product manager’s tech stack',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/5.jpg',
    author: 'Luthar Martin',
    data: 'July 24, 2021',
    class: 'bg-warning-soft',
  },
  {
    image: '/blog/blog-6.jpg',
    type: 'Management',
    header: '30 product management thought leaders to follow',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/6.jpg',
    author: 'Donna Martin',
    data: 'August 25, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-7.jpg',
    type: 'Design',
    header: 'New analyst report: Digital product management tools and tech',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/1.jpg',
    author: 'Donna R. Book',
    data: 'September 24, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-8.jpg',
    type: 'Development',
    header: 'A frank discussion about diversity, inclusion, and allyship',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/3.jpg',
    author: 'Donna R. Martin',
    data: 'October 24, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-9.jpg',
    type: 'Design',
    header: '4 steps for measuring the impact of product discovery',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/2.jpg',
    author: 'Martin Luthar',
    data: 'November 24, 2021',
    class: 'bg-warning-soft',
  },
]

//career data
const careerJobCard = [
  {
    type: 'Remote - Full Time',
    position: 'Developer',
    title: 'Jr Frontend Developer',
    className: 'bg-primary-soft text-primary',
    listItem: [
      {
        media: 'Google',
        location: 'London, UK',
        salary: '$35-$45k',
      },
    ],
  },
  {
    type: 'Remote - Full Time',
    position: 'Designer',
    title: 'UI/UX and Product Designer',
    className: 'bg-danger-soft text-danger',
    listItem: [
      {
        media: 'Figma',
        location: 'San Francissco',
        salary: '$25-$35k',
      },
    ],
  },
  {
    type: 'Full Time',
    position: 'Manager',
    title: 'Senior Office Manager',
    className: 'bg-success-soft text-success',
    listItem: [
      {
        media: 'Dribble',
        location: 'California',
        salary: '$55-$65k',
      },
    ],
  },
  {
    type: 'Remote',
    position: 'Developer',
    title: 'Senior Backend Developer',

    listItem: [
      {
        media: 'Slack',
        location: 'United State US',
        salary: '$55-$62k',
      },
    ],
  },
]

//help center data
const helpCenterFaqDetails = [
  {
    title: 'All Support Articles',
    target: 'support-tab-1',
    class: 'show active',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },

  {
    title: 'Payments Query',
    target: 'support-tab-2',
    listItem: [
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical with high standards in e-markets. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },

  {
    title: 'Setup or Installment',
    target: 'support-tab-3',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Technical Support',
    target: 'support-tab-4',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Retailers & Customer',
    target: 'support-tab-5',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Security Issues',
    target: 'support-tab-6',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Brand Creation',
    target: 'support-tab-7',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Legal Support',
    target: 'support-tab-8',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
]

//desktop app integration two
const brandName = [
  {
    image: '/integations/airbnb.png',
    brand: 'Airbnb',
  },
  {
    image: '/integations/figma.png',
    brand: 'Figma',
  },
  {
    image: '/integations/facebook.png',
    brand: 'Facebook',
  },
  {
    image: '/integations/sales-force.png',
    brand: 'Sales Force',
  },
  {
    image: '/integations/atlassian.png',
    brand: 'Atlassion',
  },
  {
    image: '/integations/dropbox-2.png',
    brand: 'Dropbox',
  },
  {
    image: '/integations/dynamic-365.png',
    brand: 'Dynamic-365',
  },
  {
    image: '/integations/erecruiter.png',
    brand: 'Erecruiter',
  },
  {
    image: '/integations/evernote.png',
    brand: 'Evernote',
  },
  {
    image: '/integations/google-icon.png',
    brand: 'Google',
  },
  {
    image: '/integations/slack.png',
    brand: 'Slack',
  },
  {
    image: '/integations/google-analytics.png',
    brand: 'Google Analytics',
  },
  {
    image: '/integations/google-drive.png',
    brand: 'Google Drive',
  },
  {
    image: '/integations/hubspot.png',
    brand: 'Hubspot',
  },
  {
    image: '/integations/instagram.png',
    brand: 'Instagram',
  },
  {
    image: '/integations/linkedin.png',
    brand: 'Linkedin',
  },
  {
    image: '/integations/mailchimp.png',
    brand: 'Mailchimp',
  },
  {
    image: '/integations/marekto.png',
    brand: 'Merekto',
  },
]
//Service IT
const ItServiceData = [
  {
    serviceImg: '/service/coding.png',
    serviceTitle: 'Web Development',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom border-end',
  },
  {
    serviceImg: '/service/app-development.png',
    serviceTitle: 'App Development',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom border-end',
  },
  {
    serviceImg: '/service/shield.png',
    serviceTitle: 'Data Security',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom',
  },
  {
    serviceImg: '/service/curve.png',
    serviceTitle: 'UI/UX Development',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-end',
  },
  {
    serviceImg: '/service/graphic-design.png',
    serviceTitle: 'Graphics Design',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-end',
  },
  {
    serviceImg: '/service/promotion.png',
    serviceTitle: 'Digital Marketing',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: '',
  },
  {
    serviceImg: '/service/promotion.png',
    serviceTitle: 'Digital Marketing',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: '',
  },
]

// Service Immigration
const ImmigrationServiceData = [
  {
    serviceImg: '/service/coding.png',
    serviceTitle: 'Express Entry',
    serviceDesc: 'CEC, FSW, FST, Occupational based draws',
    className: 'border-bottom border-end',
  },
  {
    serviceImg: '/service/app-development.png',
    serviceTitle: 'App Development',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom border-end',
  },
  {
    serviceImg: '/service/shield.png',
    serviceTitle: 'Data Security',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom',
  },
  {
    serviceImg: '/service/curve.png',
    serviceTitle: 'UI/UX Development',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-end',
  },
  {
    serviceImg: '/service/graphic-design.png',
    serviceTitle: 'Graphics Design',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-end',
  },
  {
    serviceImg: '/service/promotion.png',
    serviceTitle: 'Digital Marketing',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: '',
  },
  {
    serviceImg: '/service/promotion.png',
    serviceTitle: 'Digital Marketing',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: '',
  },
]

const testimonialFourData = [
  {
    quoate:
      'You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.',
    authorAvatar: '/testimonial/app-testimonial-1.png',
    authorName: 'Noah L. Paulsen',
    quoateDate: 'Feb 19, 2022',
  },
  {
    quoate:
      'You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.',
    authorAvatar: '/testimonial/app-testimonial-2.png',
    authorName: 'Noah L. Paulsen',
    quoateDate: 'Feb 19, 2022',
  },
  {
    quoate:
      'You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.',
    authorAvatar: '/testimonial/app-testimonial-3.png',
    authorName: 'Ariya Stark',
    quoateDate: 'June 24, 2022',
  },
]
const cryptoBlogData = [
  {
    blogThumb: '/cbl-1.png',
    blogTitle: 'How Filecoin is Up in a Week Could Take Care',
    blogExerpt:
      'Words combined with a handful of model to generate which looks reasonable.',
    authorAvatar: '/testimonial/app-testimonial-1.png',
    authorName: 'St Adward',
    postDate: 'Feb 19, 2022',
  },
  {
    blogThumb: '/cbl-2.png',
    blogTitle: 'How Filecoin is Up in a Week Could Take Care',
    blogExerpt:
      'Words combined with a handful of model to generate which looks reasonable.',
    authorAvatar: '/testimonial/app-testimonial-2.png',
    authorName: 'St Adward',
    postDate: 'Feb 19, 2022',
  },
  {
    blogThumb: '/cbl-3.png',
    blogTitle: 'How Filecoin is Up in a Week Could Take Care',
    blogExerpt:
      'Words combined with a handful of model to generate which looks reasonable.',
    authorAvatar: '/testimonial/app-testimonial-3.png',
    authorName: 'St Adward',
    postDate: 'Feb 19, 2022',
  },
]
const cyberBlogData = [
  {
    blogThumb: '/blog/c-blog-1.jpg',
    postAuthor: 'Admin',
    postDate: 'April 25, 2022',
    title: 'The Steps to GainingPrivileged Access Security',
    linkText: 'Read more',
  },
  {
    blogThumb: '/blog/c-blog-2.jpg',
    postAuthor: 'Admin',
    postDate: 'April 25, 2022',
    title: 'Protect Your Workplace FromCyber Attacks',
    linkText: 'Read more',
  },
  {
    blogThumb: '/blog/c-blog-3.jpg',
    postAuthor: 'Admin',
    postDate: 'April 25, 2022',
    title: 'Mid-Market Businesses, Don’tSmall about Security',
    linkText: 'Read more',
  },
]

const insuranceBrands = [
  {
    url: '/clients/2.svg',
  },
  {
    url: '/clients/3.svg',
  },
  {
    url: '/clients/4.svg',
  },
  {
    url: '/clients/5.svg',
  },
  {
    url: '/clients/6.svg',
  },
  {
    url: '/clients/7.svg',
  },
  {
    url: '/clients/8.svg',
  },
]

const insuranceGallery = [
  {
    url: '/insurance/01.jpg',
  },
  {
    url: '/insurance/01.jpg',
  },
  {
    url: '/insurance/01.jpg',
  },
  {
    url: '/insurance/01.jpg',
  },
  {
    url: '/insurance/01.jpg',
  },
  {
    url: '/insurance/01.jpg',
  },
  {
    url: '/insurance/01.jpg',
  },
  {
    url: '/insurance/01.jpg',
  },
]

export {
  offcanvasMenuData,
  cyberBlogData,
  cryptoBlogData,
  testimonialFourData,
  ItServiceData,
  ImmigrationServiceData,
  IconBoxData,
  FaqOneData,
  TestimonialData,
  TestimonialOneData,
  registerTestimonial,
  registerTestimonialTarget,
  navHomeOne,
  navHomeTwo,
  servicesData,
  navCompanyLinks,
  navCompanyPage,
  footerPrimaryPages,
  footerPages,
  footerTemplate,
  testimonialOne,
  testimonialAuthor,
  pricingData,
  integrationOneLeft,
  integrationOneRight,
  integrationFeature,
  ourTeam,
  blogFeatureData,
  blogServicesData,
  careerJobCard,
  helpCenterFaqDetails,
  brandName,
  insuranceBrands,
  insuranceGallery,
}
