import { infoCardType } from "@/components/pages/types/type";
// import { title } from "process";

export interface ListMenuChildProps {
  id: number;
  content: string;
  link: string;
  target: boolean;
}

export interface ListMenuProps {
  id: number;
  content: string;
  link: string;
}

export interface FooterSocialNetworkProps {
  id: number;
  link: string;
  name: string;
  icon: string;
}

export interface PossibleProps {
  id: number;
  titleKey: string;
  contentKey: string;
  image: string;
}

export interface OperatingPrinciplesProps {
  id: number;
  title: string;
  content: string[];
  image?: string;
}

export interface TestimonialsProps {
  quote: string[];
  name: string;
  src: string;
}

export interface DigitalAssetManagementProps {
  id: number;
  title: string;
  content: string[];
}

export interface ConclusionProps {
  id: number;
  title: string;
  description: string[];
}

export interface KeyFeaturesSwapProps {
  id: number;
  title: string;
  description: string;
}

export interface IntroductionIdentificationProps {
  id: number;
  title: string;
  content: string;
}

export interface VisionsMissionsProps {
  id: number;
  title: string;
  content: string;
  image: string;
}


export const KeyFeaturesSwapData: KeyFeaturesSwapProps[] = [
  
  {
    id:1, 
    title: "Solutions.OverviewPioneSwap.KYC",
    description: "Solutions.OverviewPioneSwap.Ensures"
  },
  {
    id:2, 
    title: "Solutions.OverviewPioneSwap.Escrow",
    description: "Solutions.OverviewPioneSwap.parties"
  },
  {
    id:3, 
    title: "Solutions.OverviewPioneSwap.Messaging",
    description: "Solutions.OverviewPioneSwap.Allows"
  },
  {
    id:4, 
    title: "Solutions.OverviewPioneSwap.Analytics",
    description: "Solutions.OverviewPioneSwap.reputation"
  },
    {
    id:5, 
    title: "Solutions.OverviewPioneSwap.Support",
    description: "Solutions.OverviewPioneSwap.Enables"
  }
]


export const BenefitsPioneFarmData: DigitalAssetManagementProps[] = [
  {
    id: 0,
    title: "Yummy_data.BenefitsPioneFarmData.title_0",
    content: [
      "Yummy_data.BenefitsPioneFarmData.content_0_0",
      "Yummy_data.BenefitsPioneFarmData.content_0_1",
      "Yummy_data.BenefitsPioneFarmData.content_0_2",
      "Yummy_data.BenefitsPioneFarmData.content_0_3",
    ],
  },
  {
    id: 1,
    title: "Yummy_data.BenefitsPioneFarmData.title_1",

    content: [
      "Yummy_data.BenefitsPioneFarmData.content_1_0",
      "Yummy_data.BenefitsPioneFarmData.content_1_1",
      "Yummy_data.BenefitsPioneFarmData.content_1_2",
      "Yummy_data.BenefitsPioneFarmData.content_1_3",
      "Yummy_data.BenefitsPioneFarmData.content_1_4",
    ],
  },
  {
    id: 2,
    title: "Yummy_data.BenefitsPioneFarmData.title_2",

    content: [
      "Yummy_data.BenefitsPioneFarmData.content_2_0",
      "Yummy_data.BenefitsPioneFarmData.content_2_1",
      "Yummy_data.BenefitsPioneFarmData.content_2_2",
    ],
  },
];

export const HealthRecordManagementData: IntroductionIdentificationProps[] = [
  {
    id: 1,
    title: "Yummy_data.HealthRecordManagementData.title_1",
    content: "/assets/images/HealthRecordManagement_1.png",
  },
  {
    id: 2,
    title: "Yummy_data.HealthRecordManagementData.title_2",
    content: "/assets/images/HealthRecordManagement_2.png",
  },
  {
    id: 3,
    title: "Yummy_data.HealthRecordManagementData.title_3",
    content: "/assets/images/HealthRecordManagement_3.png",
  },
];

export const TestimonialsData: TestimonialsProps[] = [
  {
    quote: [
      "Yummy_data.TestimonialsData.quote_0_0",
      "Yummy_data.TestimonialsData.quote_0_1",
      "Yummy_data.TestimonialsData.quote_0_2",
      "Yummy_data.TestimonialsData.quote_0_3",
      "Yummy_data.TestimonialsData.quote_0_4",
      "Yummy_data.TestimonialsData.quote_0_5",
      "Yummy_data.TestimonialsData.quote_0_6",
      "Yummy_data.TestimonialsData.quote_0_7",
      "Yummy_data.TestimonialsData.quote_0_8",
      "Yummy_data.TestimonialsData.quote_0_9",
    ],
    name: "Yummy_data.TestimonialsData.name_0",
    src: "/assets/images/pione_ai_1.png",
  },
  {
    quote: [
      "Yummy_data.TestimonialsData.quote_1_0",
      "Yummy_data.TestimonialsData.quote_1_1",
      "Yummy_data.TestimonialsData.quote_1_2",
      "Yummy_data.TestimonialsData.quote_1_3",
      "Yummy_data.TestimonialsData.quote_1_4",
    ],
    name: "Yummy_data.TestimonialsData.name_1",
    src: "/assets/images/pione_ai_2.png",
  },
  {
    quote: [
      "Yummy_data.TestimonialsData.quote_2_0",
      "Yummy_data.TestimonialsData.quote_2_1",
      "Yummy_data.TestimonialsData.quote_2_2",
      "Yummy_data.TestimonialsData.quote_2_3",
      "Yummy_data.TestimonialsData.quote_2_4",
      "Yummy_data.TestimonialsData.quote_2_5",
    ],
    name: "Yummy_data.TestimonialsData.name_2",
    src: "/assets/images/pione_ai_3.png",
  },
  {
    quote: [
      "Yummy_data.TestimonialsData.quote_3_0",
      "Yummy_data.TestimonialsData.quote_3_1",
      "Yummy_data.TestimonialsData.quote_3_2",
    ],
    name: "Yummy_data.TestimonialsData.name_3",
    src: "/assets/images/pione_ai_4.png",
  },
  {
    quote: [
      "Yummy_data.TestimonialsData.quote_4_0",
      "Yummy_data.TestimonialsData.quote_4_1",
      "Yummy_data.TestimonialsData.quote_4_2",
      "Yummy_data.TestimonialsData.quote_4_3",
      "Yummy_data.TestimonialsData.quote_4_4",
      "Yummy_data.TestimonialsData.quote_4_5",
      "Yummy_data.TestimonialsData.quote_4_6",
      "Yummy_data.TestimonialsData.quote_4_7",
      "Yummy_data.TestimonialsData.quote_4_8",
      "Yummy_data.TestimonialsData.quote_4_9",
      "Yummy_data.TestimonialsData.quote_4_10",
      "Yummy_data.TestimonialsData.quote_4_11",
    ],
    name: "Yummy_data.TestimonialsData.name_4",
    src: "/assets/images/pione_ai_5.png",
  },
];

export const ListMenuChildData: ListMenuChildProps[] = [
  {
    id: 0,
    content: "common.header.navbar.about.whitepaper",
    link: "https://pionechain.com/whitepaper.pdf",
    target: true,
  },
  // {
  //   id: 1,
  //   content: "common.header.navbar.about.ourTeam",
  //   link: "/our-team",
  //   target: false,
  // },
  {
    id: 2,
    content: "common.header.navbar.about.tokenomic",
    link: "/tokenomics",
    target: false,
  },

  {
    id: 4,
    content: "common.header.navbar.about.document",
    link: "https://pione.org/",
    target: true,
  },
  // { id: 5, content: "Join Us", link: "/join-us", target: true },
];

export const ListMenuData: ListMenuProps[] = [
  { id: 0, content: "common.header.navbar.eco", link: "/ecosystem" },
  { id: 1, content: "common.header.navbar.blockchain", link: "/pione-scan"},
  // { id: 2, content: "common.header.navbar.application", link: "/form-listing" },
  { id: 3, content: "common.header.button", link: "/contact-us" },
];

export const FooterSocialNetworkData: FooterSocialNetworkProps[] = [
  {
    id: 0,
    name: "Telegram",
    link: "https://t.me/pionechain",
    icon: "/svg/icon_telegram.svg",
  },
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/pione_chain",
    icon: "/svg/icon_twitter.svg",
  },
  {
    id: 2,
    name: "Facebook",
    link: "https://www.facebook.com/pionechain",
    icon: "/svg/icon_facebook.svg",
  },
  {
    id: 3,
    name: "Youtube",
    link: "https://www.youtube.com/@pione_chain",
    icon: "/svg/icon_youtube.svg",
  },
  {
    id: 4,
    name: "Tiktok",
    link: "https://www.tiktok.com/@pione_chain",
    icon: "/svg/icon_tiktok.svg",
  },
];

export const ResourcesData: ListMenuProps[] = [
  { id: 0, content: "common.footer.item1.policy", link: "/privacy-policy" },
  { id: 1, content: "common.footer.item1.term", link: "/terms-conditions" },
];

export const PossibleData: PossibleProps[] = [
  {
    id: 1,
    titleKey: "home.possibleSection.card1.title",
    contentKey: "home.possibleSection.card1.description",
    image: "/svg/possible_0.svg",
  },
  {
    id: 2,
    titleKey: "home.possibleSection.card2.title",
    contentKey: "home.possibleSection.card2.description",
    image: "/svg/possible_1.svg",
  },
  {
    id: 3,
    titleKey: "home.possibleSection.card3.title",
    contentKey: "home.possibleSection.card3.description",
    image: "/svg/possible_2.svg",
  },
];
export const OperatingPrinciplesData: OperatingPrinciplesProps[] = [
  {
    id: 0,
    image: "/assets/images/operating_principles_1.png",
    title: "Yummy_data.OperatingPrinciplesData.title_0",
    content: [
      "Yummy_data.OperatingPrinciplesData.content_0_0",
      "Yummy_data.OperatingPrinciplesData.content_0_1",
      "Yummy_data.OperatingPrinciplesData.content_0_2",
    ],
  },
  {
    id: 1,
    image: "/assets/images/operating_principles_2.png",
    title: "Yummy_data.OperatingPrinciplesData.title_1",
    content: [
      "Yummy_data.OperatingPrinciplesData.content_1_0",
      "Yummy_data.OperatingPrinciplesData.content_1_1",
      "Yummy_data.OperatingPrinciplesData.content_1_2",
      "Yummy_data.OperatingPrinciplesData.content_1_3",
      "Yummy_data.OperatingPrinciplesData.content_1_4",
      "Yummy_data.OperatingPrinciplesData.content_1_5",
      "Yummy_data.OperatingPrinciplesData.content_1_6",
      "Yummy_data.OperatingPrinciplesData.content_1_7",
      "Yummy_data.OperatingPrinciplesData.content_1_8",
    ],
  },
  {
    id: 2,
    image: "/assets/images/operating_principles_3.png",
    title: "Yummy_data.OperatingPrinciplesData.title_2",
    content: [
      "Yummy_data.OperatingPrinciplesData.content_2_0",
      "Yummy_data.OperatingPrinciplesData.content_2_1",
    ],
  },
  {
    id: 3,
    image: "/assets/images/operating_principles_4.png",
    title: "Yummy_data.OperatingPrinciplesData.title_3",
    content: [
      "Yummy_data.OperatingPrinciplesData.content_3_0",
      "Yummy_data.OperatingPrinciplesData.content_3_1",
      "Yummy_data.OperatingPrinciplesData.content_3_2",
      "Yummy_data.OperatingPrinciplesData.content_3_3",
      "Yummy_data.OperatingPrinciplesData.content_3_4",
      "Yummy_data.OperatingPrinciplesData.content_3_5",
      "Yummy_data.OperatingPrinciplesData.content_3_6",
      "Yummy_data.OperatingPrinciplesData.content_3_7",
      "Yummy_data.OperatingPrinciplesData.content_3_8",
      "Yummy_data.OperatingPrinciplesData.content_3_9",
      "Yummy_data.OperatingPrinciplesData.content_3_10",
      "Yummy_data.OperatingPrinciplesData.content_3_11",
    ],
  },
];

export const KeyHighlightsData: OperatingPrinciplesProps[] = [
  {
    id: 0,
    image: "/assets/images/key_highlights_0.png",
    title: "Yummy_data.KeyHighlightsData.title_0",
    content: ["Yummy_data.KeyHighlightsData.content_0"],
  },
  {
    id: 1,
    image: "/assets/images/key_highlights_1.png",
    title: "Yummy_data.KeyHighlightsData.title_1",
    content: ["Yummy_data.KeyHighlightsData.content_1"],
  },
  {
    id: 2,
    image: "/assets/images/key_highlights_2.png",
    title: "Yummy_data.KeyHighlightsData.title_2",
    content: ["Yummy_data.KeyHighlightsData.content_2"],
  },
  {
    id: 3,
    image: "/assets/images/key_highlights_3.png",
    title: "Yummy_data.KeyHighlightsData.title_3",
    content: ["Yummy_data.KeyHighlightsData.content_3"],
  },
]; 
export const SolutionData: IntroductionIdentificationProps[] = [
    {
      id: 1,
      title: "Solutions.OverviewPioneSwap.Connectivity",
      content: "Solutions.OverviewPioneSwap.enables"
    },
    {
      id: 2,
      title: "Solutions.OverviewPioneSwap.Secure",
      content: "Solutions.OverviewPioneSwap.leveraging"
    },
    {
      id: 3,
      title: "Solutions.OverviewPioneSwap.Intermediaries",
      content: "Solutions.OverviewPioneSwap.Eliminating"
    }
  ]
export const ApplicationData: OperatingPrinciplesProps[] = [
  { 
    id: 1,
    image: "/assets/images/application_1.png",
    title: "Yummy_data.ApplicationData.title_0",
    content: [
      "Yummy_data.ApplicationData.content_0_0",
      "Yummy_data.ApplicationData.content_0_1",
      "Yummy_data.ApplicationData.content_0_2",
    ],
  },
  {
    id: 2,
    image: "/assets/images/application_2.png",
    title: "Yummy_data.ApplicationData.title_1",
    content: [
      "Yummy_data.ApplicationData.content_1_0",
      "Yummy_data.ApplicationData.content_1_1",
      "Yummy_data.ApplicationData.content_1_2",
    ],
  },
  {
    id: 3,
    image: "/assets/images/application_3.png",
    title: "Yummy_data.ApplicationData.title_2",
    content: [
      "Yummy_data.ApplicationData.content_2_0",
      "Yummy_data.ApplicationData.content_2_1",
      "Yummy_data.ApplicationData.content_2_2",
    ],
  },
  {
    id: 4,
    image: "/assets/images/application_4.png",
    title: "Yummy_data.ApplicationData.title_3",
    content: [
      "Yummy_data.ApplicationData.content_3_0",
      "Yummy_data.ApplicationData.content_3_1",
      "Yummy_data.ApplicationData.content_3_2",
    ],
  },
  {
    id: 5,
    image: "/assets/images/application_5.png",
    title: "Yummy_data.ApplicationData.title_4",
    content: [
      "Yummy_data.ApplicationData.content_4_0",
      "Yummy_data.ApplicationData.content_4_1",
      "Yummy_data.ApplicationData.content_4_2",
    ],
  },
  {
    id: 6,
    image: "/assets/images/application_6.png",
    title: "Yummy_data.ApplicationData.title_5",
    content: [
      "Yummy_data.ApplicationData.content_5_0",
      "Yummy_data.ApplicationData.content_5_1",
      "Yummy_data.ApplicationData.content_5_2",
      "Yummy_data.ApplicationData.content_5_3",
      "Yummy_data.ApplicationData.content_5_4",
    ],
  },
];

export const OverviewData: OperatingPrinciplesProps[] = [
  {
    id: 1,
    image: "/assets/images/overview_1.png",
    title: "Yummy_data.OverviewData.title_0",
    content: [
      "Yummy_data.OverviewData.content_0_0",
      "Yummy_data.OverviewData.content_0_1",
    ],
  },

  {
    id: 2,
    image: "/assets/images/overview_2.png",
    title: "Yummy_data.OverviewData.title_1",
    content: [
      "Yummy_data.OverviewData.content_1_0",
      "Yummy_data.OverviewData.content_1_1",
      "Yummy_data.OverviewData.content_1_2",
    ],
  },
  {
    id: 3,
    image: "/assets/images/overview_3.png",
    title: "Yummy_data.OverviewData.title_2",
    content: ["Yummy_data.OverviewData.content_2"],
  },
];

export const TechnologyOperationsData: OperatingPrinciplesProps[] = [
  {
    id: 0,
    title: "Yummy_data.TechnologyOperationsData.title_0",
    content: [
      "Yummy_data.TechnologyOperationsData.content_0_0",
      "Yummy_data.TechnologyOperationsData.content_0_1",
      "Yummy_data.TechnologyOperationsData.content_0_2",
      "Yummy_data.TechnologyOperationsData.content_0_3",
      "Yummy_data.TechnologyOperationsData.content_0_4",
      "Yummy_data.TechnologyOperationsData.content_0_5",
    ],
  },
  {
    id: 1,
    title: "Yummy_data.TechnologyOperationsData.title_1",
    content: [
      "Yummy_data.TechnologyOperationsData.content_1_0",
      "Yummy_data.TechnologyOperationsData.content_1_1",
    ],
  },
  {
    id: 2,
    title: "Yummy_data.TechnologyOperationsData.title_2",
    content: ["Yummy_data.TechnologyOperationsData.content_2_0"],
  },
  {
    id: 3,
    title: "Yummy_data.TechnologyOperationsData.title_3",
    content: [
      "Yummy_data.TechnologyOperationsData.content_3_0",
      "Yummy_data.TechnologyOperationsData.content_3_1",
    ],
  },
  {
    id: 4,
    title: "Yummy_data.TechnologyOperationsData.title_4",
    content: [
      "Yummy_data.TechnologyOperationsData.content_4_0",
      "Yummy_data.TechnologyOperationsData.content_4_1",
    ],
  },
  {
    id: 5,
    title: "Yummy_data.TechnologyOperationsData.title_5",
    content: [
      "Yummy_data.TechnologyOperationsData.content_5_0",
      "Yummy_data.TechnologyOperationsData.content_5_1",
    ],
  },
];

export const WorksCardData: infoCardType[] = [
  {
    id: 0,
    title: "Yummy_data.WorksCardData.title_0",
    description: [
      "Yummy_data.WorksCardData.description_0_0",
      "Yummy_data.WorksCardData.description_0_1",
      "Yummy_data.WorksCardData.description_0_2",
    ],
  },
  {
    id: 1,
    title: "Yummy_data.WorksCardData.title_1",
    description: [
      "Yummy_data.WorksCardData.description_1_0",
      "Yummy_data.WorksCardData.description_1_1",
    ],
  },
  {
    id: 2,
    title: "Yummy_data.WorksCardData.title_2",
    description: [
      "Yummy_data.WorksCardData.description_2_0",
      "Yummy_data.WorksCardData.description_2_1",
      "Yummy_data.WorksCardData.description_2_2",
    ],
  },
  {
    id: 3,
    title: "Yummy_data.WorksCardData.title_3",
    description: [
      "Yummy_data.WorksCardData.description_3_0",
      "Yummy_data.WorksCardData.description_3_1",
    ],
  },
  {
    id: 4,
    title: "Yummy_data.WorksCardData.title_4",
    description: [
      "Yummy_data.WorksCardData.description_4_0",
      "Yummy_data.WorksCardData.description_4_1",
    ],
  },
];

export const CurrentProblemsData: VisionsMissionsProps[] = [
  {
    id: 1,
    title: "Yummy_data.CurrentProblemsData.title_0",
    content: "Yummy_data.CurrentProblemsData.content_0",
    image: "/assets/images/current_problems_0.png",
  },
  {
    id: 2,
    title: "Yummy_data.CurrentProblemsData.title_1",
    content: "Yummy_data.CurrentProblemsData.content_1",
    image: "/assets/images/current_problems_1.png",
  },
  {
    id: 3,
    title: "Yummy_data.CurrentProblemsData.title_2",
    content: "Yummy_data.CurrentProblemsData.content_2",
    image: "/assets/images/current_problems_2.png",
  },
];

export const DigitalAssetManagementData: DigitalAssetManagementProps[] = [
  {
    id: 1,
    title: "Yummy_data.DigitalAssetManagementData.title_0",
    content: [
      "Yummy_data.DigitalAssetManagementData.content_0_0",
      "Yummy_data.DigitalAssetManagementData.content_0_1",
      "Yummy_data.DigitalAssetManagementData.content_0_2",
    ],
  },
  {
    id: 2,
    title: "Yummy_data.DigitalAssetManagementData.title_1",
    content: [
      "Yummy_data.DigitalAssetManagementData.content_1_0",
      "Yummy_data.DigitalAssetManagementData.content_1_1",
    ],
  },
  {
    id: 3,
    title: "Yummy_data.DigitalAssetManagementData.title_2",
    content: ["Yummy_data.DigitalAssetManagementData.content_2"],
  },
];

export const IntroductionIdentificationData: IntroductionIdentificationProps[] =
  [
    {
      id: 1,
      title: "Yummy_data.IntroductionIdentificationData.title_0",
      content: "Yummy_data.IntroductionIdentificationData.content_0",
    },
    {
      id: 2,
      title: "Yummy_data.IntroductionIdentificationData.title_1",
      content: "Yummy_data.IntroductionIdentificationData.content_0",
    },
    {
      id: 3,
      title: "Yummy_data.IntroductionIdentificationData.title_2",
      content: "Yummy_data.IntroductionIdentificationData.content_0",
    },
    {
      id: 4,
      title: "Yummy_data.IntroductionIdentificationData.title_3",
      content: "Yummy_data.IntroductionIdentificationData.content_0",
    },
  ];

export const VisionsMissionsData: VisionsMissionsProps[] = [
  {
    id: 0,
    title: "Yummy_data.VisionsMissionsData.title_0",
    content: "Yummy_data.VisionsMissionsData.content_0",
    image: "/assets/images/visions_missions_0.png",
  },
  {
    id: 1,
    title: "Yummy_data.VisionsMissionsData.title_1",
    content: "Yummy_data.VisionsMissionsData.content_1",
    image: "/assets/images/visions_missions_1.png",
  },
  {
    id: 2,
    title: "Yummy_data.VisionsMissionsData.title_2",
    content: "Yummy_data.VisionsMissionsData.content_2",
    image: "/assets/images/visions_missions_2.png",
  },
];

export const SolutionPioneWalletData: IntroductionIdentificationProps[] = [
  {
    id: 0,
    title: "Yummy_data.SolutionPioneWalletData.title_0",
    content: "Yummy_data.SolutionPioneWalletData.description_0",
  },
  {
    id: 1,
    title: "Yummy_data.SolutionPioneWalletData.title_1",
    content: "Yummy_data.SolutionPioneWalletData.description_1",
  },
  {
    id: 2,
    title: "Yummy_data.SolutionPioneWalletData.title_2",
    content: "Yummy_data.SolutionPioneWalletData.description_2",
  },
];

export const ConnectedEcosystemData: VisionsMissionsProps[] = [
  {
    id: 1,
    title: "Yummy_data.ConnectedEcosystemData.title_0",
    content: "Yummy_data.ConnectedEcosystemData.content_0",
    image: "/assets/images/RealWorldApplications_3.png",
  },
  {
    id: 2,
    title: "Yummy_data.ConnectedEcosystemData.title_1",
    content: "Yummy_data.ConnectedEcosystemData.content_1",
    image: "/assets/images/RealWorldApplications_4.png",
  },
  {
    id: 3,
    title: "Yummy_data.ConnectedEcosystemData.title_2",
    content: "Yummy_data.ConnectedEcosystemData.content_2",
    image: "/assets/images/RealWorldApplications_5.png",
  },
];

export const BenefitsData: ConclusionProps[] = [
  {
    id: 0,
    title: "Yummy_data.BenefitsData.title_0",
    description: [
      "Yummy_data.BenefitsData.description_0_0",
      "Yummy_data.BenefitsData.description_0_1",
      "Yummy_data.BenefitsData.description_0_2",
    ],
  },
  {
    id: 1,
    title: "Yummy_data.BenefitsData.title_1",
    description: ["Yummy_data.BenefitsData.description_1"],
  },
  {
    id: 2,
    title: "Yummy_data.BenefitsData.title_2",
    description: ["Yummy_data.BenefitsData.description_2"],
  },
];
export const CoreFeaturesData: ConclusionProps[] = [
  {
    id: 0,
    title: "Yummy_data.CoreFeaturesData.title_0",
    description: [
      "Yummy_data.CoreFeaturesData.description_0_0",
      "Yummy_data.CoreFeaturesData.description_0_1",
    ],
  },
  {
    id: 1,
    title: "Yummy_data.CoreFeaturesData.title_1",
    description: [
      "Yummy_data.CoreFeaturesData.description_1_0",
      "Yummy_data.CoreFeaturesData.description_1_1",
      "Yummy_data.CoreFeaturesData.description_1_2",
    ],
  },
  {
    id: 2,
    title: "Yummy_data.CoreFeaturesData.title_2",
    description: [
      "Yummy_data.CoreFeaturesData.description_2_0",
      "Yummy_data.CoreFeaturesData.description_2_1",
    ],
  },

  {
    id: 3,
    title: "Yummy_data.CoreFeaturesData.title_3",
    description: [
      "Yummy_data.CoreFeaturesData.description_3_0",
      "Yummy_data.CoreFeaturesData.description_3_1",
      "Yummy_data.CoreFeaturesData.description_3_2",
    ],
  },
  {
    id: 4,
    title: "Yummy_data.CoreFeaturesData.title_4",
    description: [
      "Yummy_data.CoreFeaturesData.description_4_0",
      "Yummy_data.CoreFeaturesData.description_4_1",
    ],
  },
];

export const BenefitsBuyersData: VisionsMissionsProps[] = [
  {
    id: 0,
    title: "Yummy_data.BenefitsBuyersData.title_0",
    content: "Yummy_data.BenefitsBuyersData.content_0",
    image: "/assets/images/benefits_buyers_0.png",
  },
  {
    id: 1,
    title: "Yummy_data.BenefitsBuyersData.title_1",
    content: "Yummy_data.BenefitsBuyersData.content_1",
    image: "/assets/images/benefits_buyers_1.png",
  },
  {
    id: 2,
    title: "Yummy_data.BenefitsBuyersData.title_2",
    content: "Yummy_data.BenefitsBuyersData.content_2",
    image: "/assets/images/benefits_buyers_2.png",
  },
];

export const BenefitsSellersData: VisionsMissionsProps[] = [
  {
    id: 0,
    title: "Yummy_data.BenefitsSellersData.title_0",
    content: "Yummy_data.BenefitsSellersData.content_0",
    image: "/assets/images/benefits_sellers_0.png",
  },
  {
    id: 1,
    title: "Yummy_data.BenefitsSellersData.title_1",
    content: "Yummy_data.BenefitsSellersData.content_1",
    image: "/assets/images/benefits_sellers_1.png",
  },
  {
    id: 2,
    title: "Yummy_data.BenefitsSellersData.title_2",
    content: "Yummy_data.BenefitsSellersData.content_2",
    image: "/assets/images/benefits_sellers_2.png",
  },
];

export const ForRegulatoryAuthoritiesData: VisionsMissionsProps[] = [
  {
    id: 0,
    title: "Yummy_data.ForRegulatoryAuthoritiesData.title_0",
    content: "Yummy_data.ForRegulatoryAuthoritiesData.content_0",
    image: "/assets/images/for_regulatory_authorities_0.png",
  },
  {
    id: 1,
    title: "Yummy_data.ForRegulatoryAuthoritiesData.title_1",
    content: "Yummy_data.ForRegulatoryAuthoritiesData.content_1",
    image: "/assets/images/for_regulatory_authorities_1.png",
  },
  {
    id: 2,
    title: "Yummy_data.ForRegulatoryAuthoritiesData.title_2",
    content: "Yummy_data.ForRegulatoryAuthoritiesData.content_2",
    image: "/assets/images/for_regulatory_authorities_2.png",
  },
];

export const FeaturesOfPioneHouseData: DigitalAssetManagementProps[] = [
  {
    id: 0,
    title: "Yummy_data.FeaturesOfPioneHouseData.title_0",
    content: [
      "Yummy_data.FeaturesOfPioneHouseData.content_0_0",
      "Yummy_data.FeaturesOfPioneHouseData.content_0_1",
    ],
  },
  {
    id: 1,
    title: "Yummy_data.FeaturesOfPioneHouseData.title_1",
    content: [
      "Yummy_data.FeaturesOfPioneHouseData.content_1_0",
      "Yummy_data.FeaturesOfPioneHouseData.content_1_1",
    ],
  },
  {
    id: 2,
    title: "Yummy_data.FeaturesOfPioneHouseData.title_2",
    content: [
      "Yummy_data.FeaturesOfPioneHouseData.content_2_0",
      "Yummy_data.FeaturesOfPioneHouseData.content_2_1",
    ],
  },
  {
    id: 3,
    title: "Yummy_data.FeaturesOfPioneHouseData.title_3",
    content: [
      "Yummy_data.FeaturesOfPioneHouseData.content_3_0",
      "Yummy_data.FeaturesOfPioneHouseData.content_3_1",
    ],
  },
];

export const WhyChoosePioneCareData: IntroductionIdentificationProps[] = [
  {
    id: 0,
    title: "Yummy_data.WhyChoosePioneCareData.title_0",
    content: "Yummy_data.WhyChoosePioneCareData.content_0",
  },
  {
    id: 1,
    title: "Yummy_data.WhyChoosePioneCareData.title_1",
    content: "Yummy_data.WhyChoosePioneCareData.content_1",
  },
  {
    id: 2,
    title: "Yummy_data.WhyChoosePioneCareData.title_2",
    content: "Yummy_data.WhyChoosePioneCareData.content_2",
  },
];

export const GoalsMissionsData: VisionsMissionsProps[] = [
  {
    id: 0,
    title: "Yummy_data.GoalsMissionsData.title_0",
    content: "Yummy_data.GoalsMissionsData.content_0",
    image: "/assets/images/goals_mission_0.png",
  },
  {
    id: 1,
    title: "Yummy_data.GoalsMissionsData.title_1",
    content: "Yummy_data.GoalsMissionsData.content_1",
    image: "/assets/images/goals_mission_1.png",
  },
  {
    id: 2,
    title: "Yummy_data.GoalsMissionsData.title_2",
    content: "Yummy_data.GoalsMissionsData.content_2",
    image: "/assets/images/goals_mission_2.png",
  },
];

export const BenefitsPatientsData: VisionsMissionsProps[] = [
  {
    id: 0,
    title: "Yummy_data.BenefitsPatientsData.title_0",
    content: "Yummy_data.BenefitsPatientsData.content_0",
    image: "/assets/images/benefits_patients_0.png",
  },
  {
    id: 1,
    title: "Yummy_data.BenefitsPatientsData.title_1",
    content: "Yummy_data.BenefitsPatientsData.content_1",
    image: "/assets/images/benefits_patients_1.png",
  },
  {
    id: 2,
    title: "Yummy_data.BenefitsPatientsData.title_2",
    content: "Yummy_data.BenefitsPatientsData.content_2",
    image: "/assets/images/benefits_patients_2.png",
  },
];

export const HealthcareProviderData: VisionsMissionsProps[] = [
  {
    id: 0,
    title: "Yummy_data.HealthcareProviderData.title_0",
    content: "Yummy_data.HealthcareProviderData.content_0",
    image: "/assets/images/healthcare_provider_0.png",
  },
  {
    id: 1,
    title: "Yummy_data.HealthcareProviderData.title_1",
    content: "Yummy_data.HealthcareProviderData.content_1",
    image: "/assets/images/healthcare_provider_1.png",
  },
  {
    id: 2,
    title: "Yummy_data.HealthcareProviderData.title_2",
    content: "Yummy_data.HealthcareProviderData.content_2",
    image: "/assets/images/healthcare_provider_2.png",
  },
];

export const RegulatoryAuthoritiesData: VisionsMissionsProps[] = [
  {
    id: 0,
    title: "Yummy_data.RegulatoryAuthoritiesData.title_0",
    content: "Yummy_data.RegulatoryAuthoritiesData.content_0",
    image: "/assets/images/regulatory_authorities_0.png",
  },
  {
    id: 1,
    title: "Yummy_data.RegulatoryAuthoritiesData.title_1",
    content: "Yummy_data.RegulatoryAuthoritiesData.content_1",
    image: "/assets/images/regulatory_authorities_1.png",
  },
];

export const KeyFeaturesData: DigitalAssetManagementProps[] = [
  {
    id: 1,
    title: "Yummy_data.KeyFeaturesData.title_0",
    content: [
      "Yummy_data.KeyFeaturesData.content_0_0",
      "Yummy_data.KeyFeaturesData.content_0_1",
    ],
  },
  {
    id: 2,
    title: "Yummy_data.KeyFeaturesData.title_1",
    content: [
      "Yummy_data.KeyFeaturesData.content_1_0",
      "Yummy_data.KeyFeaturesData.content_1_1",
      "Yummy_data.KeyFeaturesData.content_1_2",
    ],
  },
  {
    id: 3,
    title: "Yummy_data.KeyFeaturesData.title_2",
    content: [
      "Yummy_data.KeyFeaturesData.content_2_0",
      "Yummy_data.KeyFeaturesData.content_2_1",
    ],
  },
];

export const HealthcareServiceSearchData: IntroductionIdentificationProps[] = [
  {
    id: 1,
    title: "Yummy_data.HealthcareServiceSearchData.title_0",
    content: "Yummy_data.HealthcareServiceSearchData.content_0",
  },
  {
    id: 2,
    title: "Yummy_data.HealthcareServiceSearchData.title_1",
    content: "Yummy_data.HealthcareServiceSearchData.content_1",
  },
  {
    id: 3,
    title: "Yummy_data.HealthcareServiceSearchData.title_2",
    content: "Yummy_data.HealthcareServiceSearchData.content_2",
  },
];

export const ExecutiveSummaryData: OperatingPrinciplesProps[] = [
  {
    id: 0,
    title: "Yummy_data.ExecutiveSummaryData.title_0",
    content: [
      "Yummy_data.ExecutiveSummaryData.content_0_0",
      "Yummy_data.ExecutiveSummaryData.content_0_1",
      "Yummy_data.ExecutiveSummaryData.content_0_2",
    ],
  },
  {
    id: 1,
    title: "Yummy_data.ExecutiveSummaryData.title_1",
    content: [
      "Yummy_data.ExecutiveSummaryData.content_1_0",
      "Yummy_data.ExecutiveSummaryData.content_1_1",
    ],
  },
  {
    id: 2,
    title: "Yummy_data.ExecutiveSummaryData.title_2",
    content: [
      "Yummy_data.ExecutiveSummaryData.content_2_0",
      "Yummy_data.ExecutiveSummaryData.content_2_1",
      "Yummy_data.ExecutiveSummaryData.content_2_2",
      "Yummy_data.ExecutiveSummaryData.content_2_3",
    ],
  },
  {
    id: 3,
    title: "Yummy_data.ExecutiveSummaryData.title_3",
    content: [
      "Yummy_data.ExecutiveSummaryData.content_3_0",
      "Yummy_data.ExecutiveSummaryData.content_3_1",
    ],
  },
];

export const RealWorldApplicationsData: OperatingPrinciplesProps[] = [
  {
    title: "Yummy_data.RealWorldApplicationsData.title_0",
    content: [
      "Yummy_data.RealWorldApplicationsData.content_0_0",
      "Yummy_data.RealWorldApplicationsData.content_0_1",
      "Yummy_data.RealWorldApplicationsData.content_0_2",
      "Yummy_data.RealWorldApplicationsData.content_0_3",
      "Yummy_data.RealWorldApplicationsData.content_0_4",
      "Yummy_data.RealWorldApplicationsData.content_0_5",
      "Yummy_data.RealWorldApplicationsData.content_0_6",
      "Yummy_data.RealWorldApplicationsData.content_0_7",
    ],
    image: "/assets/images/RealWorldApplications_1.png",
    id: 1,
  },
  {
    title: "Yummy_data.RealWorldApplicationsData.title_1",
    content: [
      "Yummy_data.RealWorldApplicationsData.content_1_0",
      "Yummy_data.RealWorldApplicationsData.content_1_1",
      "Yummy_data.RealWorldApplicationsData.content_1_2",
      "Yummy_data.RealWorldApplicationsData.content_1_3",
      "Yummy_data.RealWorldApplicationsData.content_1_4",
      "Yummy_data.RealWorldApplicationsData.content_1_5",
      "Yummy_data.RealWorldApplicationsData.content_1_6",
      "Yummy_data.RealWorldApplicationsData.content_1_7",
    ],
    image: "/assets/images/RealWorldApplications_2.png",
    id: 2,
  },
  {
    title: "Yummy_data.RealWorldApplicationsData.title_2",
    content: [
      "Yummy_data.RealWorldApplicationsData.content_2_0",
      "Yummy_data.RealWorldApplicationsData.content_2_1",
      "Yummy_data.RealWorldApplicationsData.content_2_2",
      "Yummy_data.RealWorldApplicationsData.content_2_3",
      "Yummy_data.RealWorldApplicationsData.content_2_4",
      "Yummy_data.RealWorldApplicationsData.content_2_5",
      "Yummy_data.RealWorldApplicationsData.content_2_6",
      "Yummy_data.RealWorldApplicationsData.content_2_7",
      "Yummy_data.RealWorldApplicationsData.content_2_8",
    ],
    id: 3,
    image: "/assets/images/RealWorldApplications_3.png",
  },
  {
    title: "Yummy_data.RealWorldApplicationsData.title_3",
    content: [
      "Yummy_data.RealWorldApplicationsData.content_3_0",
      "Yummy_data.RealWorldApplicationsData.content_3_1",
      "Yummy_data.RealWorldApplicationsData.content_3_2",
      "Yummy_data.RealWorldApplicationsData.content_3_3",
      "Yummy_data.RealWorldApplicationsData.content_3_4",
      "Yummy_data.RealWorldApplicationsData.content_3_5",
      "Yummy_data.RealWorldApplicationsData.content_3_6",
      "Yummy_data.RealWorldApplicationsData.content_3_7",
    ],
    image: "/assets/images/RealWorldApplications_4.png",
    id: 4,
  },
];

export const ConclusionData: ConclusionProps[] = [
  {
    id: 0,
    title: "Yummy_data.ConclusionData.title_0",
    description: [
      "Yummy_data.ConclusionData.content_0_0",
      "Yummy_data.ConclusionData.content_0_1",
    ],
  },
  {
    id: 1,
    title: "Yummy_data.ConclusionData.title_1",
    description: [
      "Yummy_data.ConclusionData.content_1_0",
      "Yummy_data.ConclusionData.content_1_1",
    ],
  },
];
