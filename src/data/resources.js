export const resourceCategories = {
  report: { en: "Report a fraud", ta: "மோசடியைப் புகாரளிக்க" },
  learn: { en: "Learn more", ta: "மேலும் கற்க" },
  protect: { en: "Protect your phone and payments", ta: "போன் மற்றும் பணப்பரிவர்த்தனைகளைப் பாதுகாக்க" },
}

export const resourcesText = {
  en: {
    title: "Trusted Resources",
    subtitle: "Official sources for learning about cyber safety and reporting fraud.",
    open: "Open website",
    newTab: "(opens in a new tab)",
    tip: "For your own bank, use the website or phone number printed on your bank card or passbook.",
    note: "These links open external websites that we do not control. Web addresses can change over time.",
  },
  ta: {
    title: "நம்பகமான வளங்கள்",
    subtitle: "சைபர் பாதுகாப்பைப் பற்றிக் கற்கவும் மோசடியைப் புகாரளிக்கவும் உதவும் அதிகாரப்பூர்வ ஆதாரங்கள்.",
    open: "இணையதளத்தைத் திற",
    newTab: "(புதிய தாவலில் திறக்கும்)",
    tip: "உங்கள் சொந்த வங்கிக்கு, வங்கிக் கார்டு அல்லது பாஸ்புக்கில் அச்சிடப்பட்ட இணையதளம் அல்லது தொலைபேசி எண்ணைப் பயன்படுத்துங்கள்.",
    note: "இந்த இணைப்புகள் எங்கள் கட்டுப்பாட்டில் இல்லாத வெளி இணையதளங்களைத் திறக்கும். இணைய முகவரிகள் காலப்போக்கில் மாறக்கூடும்.",
  },
}

export const resources = [
  {
    id: "ncrp",
    category: "report",
    url: "https://cybercrime.gov.in/",
    en: {
      title: "National Cyber Crime Reporting Portal",
      description:
        "Official Government of India portal to report cyber crimes, including online financial fraud, and to track your complaint. For financial fraud you can also call 1930.",
    },
    ta: {
      title: "தேசிய சைபர் குற்றப் புகார் தளம்",
      description:
        "ஆன்லைன் நிதி மோசடி உட்பட சைபர் குற்றங்களைப் புகாரளிக்கவும், உங்கள் புகாரின் நிலையைக் கண்காணிக்கவும் உதவும் இந்திய அரசின் அதிகாரப்பூர்வ தளம். நிதி மோசடிக்கு 1930-ஐயும் அழைக்கலாம்.",
    },
  },
  {
    id: "rbi-kehta-hai",
    category: "learn",
    url: "https://rbikehtahai.rbi.org.in/",
    en: {
      title: 'RBI Kehta Hai ("RBI Says")',
      description:
        "The Reserve Bank of India's awareness initiative on safe digital banking and avoiding financial fraud.",
    },
    ta: {
      title: 'RBI கெஹ்தா ஹை ("RBI சொல்கிறது")',
      description:
        "பாதுகாப்பான டிஜிட்டல் வங்கிச் சேவை மற்றும் நிதி மோசடியைத் தவிர்ப்பது குறித்த இந்திய ரிசர்வ் வங்கியின் விழிப்புணர்வு முயற்சி.",
    },
  },
  {
    id: "rbi-raju",
    category: "learn",
    url: "https://website.rbi.org.in/web/rbi/rbi-kehta-hai/raju-and-forty-thieves",
    en: {
      title: "RBI: Raju and the Forty Thieves",
      description:
        "Short films and a picture booklet from the Reserve Bank of India showing how common frauds work, such as phishing links, QR code scams and fake job offers.",
    },
    ta: {
      title: "RBI: ராஜு மற்றும் நாற்பது திருடர்கள்",
      description:
        "ஃபிஷிங் இணைப்புகள், QR குறியீட்டு மோசடிகள், போலி வேலை வாய்ப்புகள் போன்ற பொதுவான மோசடிகள் எப்படி நடக்கின்றன என்பதைக் காட்டும் இந்திய ரிசர்வ் வங்கியின் குறும்படங்களும் படப் புத்தகமும்.",
    },
  },
  {
    id: "sanchar-saathi",
    category: "protect",
    url: "https://sancharsaathi.gov.in/",
    en: {
      title: "Sanchar Saathi",
      description:
        "A Department of Telecommunications portal that helps mobile users track and block lost or stolen phones and disconnect unauthorised connections.",
    },
    ta: {
      title: "சஞ்சார் சாத்தி",
      description:
        "தொலைந்த அல்லது திருடப்பட்ட போன்களைக் கண்டறிந்து முடக்கவும், அனுமதியின்றி எடுக்கப்பட்ட இணைப்புகளைத் துண்டிக்கவும் மொபைல் பயனர்களுக்கு உதவும் தொலைத்தொடர்புத் துறையின் தளம்.",
    },
  },
  {
    id: "npci",
    category: "protect",
    url: "https://www.npci.org.in/",
    en: {
      title: "NPCI (National Payments Corporation of India)",
      description: "The organisation that runs UPI. Look here for official information about UPI and digital payments.",
    },
    ta: {
      title: "NPCI (இந்திய தேசிய பணப்பரிவர்த்தனை கழகம்)",
      description:
        "UPI-ஐ இயக்கும் அமைப்பு. UPI மற்றும் டிஜிட்டல் பணப்பரிவர்த்தனைகள் பற்றிய அதிகாரப்பூர்வ தகவல்களை இங்கே பார்க்கலாம்.",
    },
  },
]
