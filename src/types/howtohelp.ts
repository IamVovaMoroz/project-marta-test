export interface AccordionDataProps {
  subtitle?: string;
  img: string;
  icon: string;
  alt: string;
  text: string[];
  qrImg: string;
  button: string[];
  buttonPrivat: string;
  buttonCurrency: { title: string; content: string[] }[];
  content: string[];
  title: string;
}

export interface AccordionSectionProps {
  section: AccordionDataProps;
  isActiveSection: boolean;
  // eslint-disable-next-line no-unused-vars
  setActiveIndex: (index: number | null) => void;
  sectionIndex: number;
}

export interface IHowToHelpProps {
  data: {
    title: string;
    paragraph: string;
    accordionItemOne: AccordionDataProps;
    accordionItemTwo: AccordionDataProps;
    accordionItemThree: AccordionDataProps;
    accordionItemFour: AccordionDataProps;
    accordionItemFive: AccordionDataProps;
    accordionItemSix: AccordionDataProps;
    accordionItemSeven: AccordionDataProps;
  };
}
