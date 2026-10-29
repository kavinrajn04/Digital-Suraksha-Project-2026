import {} from "lucide-react"

export const modules = [
  {
    id: "smartphone-basics",
    icon: "📱",
    en: {
      title: "Smartphone Basics",
      summary: "Use your phone with confidence: updates, screen lock and safe apps.",
      intro: "A smartphone is like a small computer. A few simple habits keep it and your information safe.",
      points: [
        "Set a screen lock (PIN, pattern or fingerprint) so no one else can open your phone.",
        "Install apps only from the official store: Google Play Store on Android or App Store on iPhone.",
        "Install software updates when your phone asks. Updates fix security problems.",
        "Make text larger in Settings, under Display, if reading is difficult.",
      ],
      example:
        "You get a message: 'Install this app to claim your free gift.' The link is not from the official store, so it may be a harmful app.",
      warnings: [
        "Apps that ask for permissions they do not need, such as a torch app asking for your contacts.",
        "Links or files sent by unknown people.",
        "Pop-ups saying your phone is infected.",
      ],
      actions: [
        "Install apps only from the official store.",
        "Deny permissions that do not make sense for the app.",
        "Ask a trusted family member if you are not sure.",
      ],
      check: {
        question: "Where should you download apps from?",
        options: [
          "Links sent on WhatsApp",
          "The official Play Store or App Store",
          "Any website that offers free apps",
        ],
        answer: 1,
        explanation:
          "Official stores check apps for safety. Links from messages or random websites may install harmful apps.",
      },
    },
    ta: {
      title: "ஸ்மார்ட்போன் அடிப்படைகள்",
      summary: "புதுப்பிப்புகள், திரை பூட்டு, பாதுகாப்பான செயலிகளுடன் நம்பிக்கையாக போனைப் பயன்படுத்துங்கள்.",
      intro: "ஸ்மார்ட்போன் ஒரு சிறிய கணினி போன்றது. சில எளிய பழக்கங்கள் உங்கள் போனையும் தகவல்களையும் பாதுகாக்கும்.",
      points: [
        "வேறு யாரும் உங்கள் போனைத் திறக்க முடியாதபடி திரை பூட்டு (PIN, பேட்டர்ன் அல்லது கைரேகை) வையுங்கள்.",
        "செயலிகளை அதிகாரப்பூர்வ கடையிலிருந்து மட்டுமே பதிவிறக்குங்கள்: ஆண்ட்ராய்டில் Google Play Store, ஐபோனில் App Store.",
        "போன் கேட்கும்போது மென்பொருள் புதுப்பிப்புகளை நிறுவுங்கள். புதுப்பிப்புகள் பாதுகாப்புக் குறைபாடுகளைச் சரிசெய்கின்றன.",
        "படிக்க கடினமாக இருந்தால் Settings-ல் Display பகுதியில் எழுத்தின் அளவைப் பெரிதாக்குங்கள்.",
      ],
      example:
        "'இலவச பரிசைப் பெற இந்த செயலியை நிறுவுங்கள்' என்ற செய்தி வருகிறது. அந்த இணைப்பு அதிகாரப்பூர்வ கடையிலிருந்து வரவில்லை, எனவே அது தீங்கு விளைவிக்கும் செயலியாக இருக்கலாம்.",
      warnings: [
        "தேவையில்லாத அனுமதிகளைக் கேட்கும் செயலிகள், உதாரணமாக டார்ச் செயலி உங்கள் தொடர்புகளைக் கேட்பது.",
        "தெரியாதவர்கள் அனுப்பும் இணைப்புகள் அல்லது கோப்புகள்.",
        "உங்கள் போனில் வைரஸ் உள்ளது என்று காட்டும் பாப்-அப்கள்.",
      ],
      actions: [
        "செயலிகளை அதிகாரப்பூர்வ கடையிலிருந்து மட்டுமே நிறுவுங்கள்.",
        "செயலிக்குப் பொருந்தாத அனுமதிகளை மறுத்துவிடுங்கள்.",
        "உறுதியில்லையெனில் நம்பிக்கையான குடும்ப உறுப்பினரிடம் கேளுங்கள்.",
      ],
      check: {
        question: "செயலிகளை எங்கிருந்து பதிவிறக்க வேண்டும்?",
        options: [
          "வாட்ஸ்அப்பில் வந்த இணைப்புகளிலிருந்து",
          "அதிகாரப்பூர்வ Play Store அல்லது App Store-ல் இருந்து",
          "இலவச செயலிகளை வழங்கும் எந்த இணையதளத்திலிருந்தும்",
        ],
        answer: 1,
        explanation:
          "அதிகாரப்பூர்வ கடைகள் செயலிகளின் பாதுகாப்பைச் சோதிக்கின்றன. செய்திகளில் வரும் இணைப்புகள் அல்லது தெரியாத இணையதளங்கள் தீங்கான செயலிகளை நிறுவக்கூடும்.",
      },
    },
  },
  {
    id: "upi-safety",
    icon: "💳",
    en: {
      title: "UPI and Digital Payment Safety",
      summary: "Send and receive money safely with UPI.",
      intro:
        "UPI makes payments quick, but scammers use it too. Remember one rule: your UPI PIN is only needed to send money.",
      points: [
        "You never need to enter your UPI PIN to receive money.",
        "If someone sends a 'collect request' and you approve it with your PIN, money leaves your account.",
        "Before paying, check that the name shown on the screen matches the person or shop.",
        "Never share your UPI PIN, OTP or card details with anyone, even someone who says they are from the bank.",
      ],
      example:
        "A stranger buying your old fan says, 'I sent you money by mistake. Approve this request to get it.' Approving it with your PIN would send your money to them.",
      warnings: [
        "Anyone asking you to enter your PIN to 'receive' money.",
        "Pressure to act immediately.",
        "Payment requests from people you do not know.",
      ],
      actions: [
        "Decline unknown collect requests.",
        "Check the name before you pay.",
        "If money is lost, call 1930 immediately.",
      ],
      check: {
        question: "When do you need to enter your UPI PIN?",
        options: ["To receive money", "To send money", "To check a message from the bank"],
        answer: 1,
        explanation:
          "Your UPI PIN is only for sending money. If someone asks for your PIN to give you money, it is a scam.",
      },
    },
    ta: {
      title: "UPI மற்றும் டிஜிட்டல் பணப்பரிவர்த்தனை பாதுகாப்பு",
      summary: "UPI மூலம் பணத்தை பாதுகாப்பாக அனுப்புங்கள், பெறுங்கள்.",
      intro:
        "UPI பணப்பரிவர்த்தனையை விரைவாக்குகிறது, ஆனால் மோசடிக்காரர்களும் இதைப் பயன்படுத்துகிறார்கள். ஒரு விதியை நினைவில் கொள்ளுங்கள்: UPI PIN பணம் அனுப்புவதற்கு மட்டுமே தேவை.",
      points: [
        "பணத்தைப் பெற நீங்கள் ஒருபோதும் UPI PIN உள்ளிட வேண்டியதில்லை.",
        "யாராவது 'collect request' அனுப்பி, நீங்கள் PIN கொடுத்து ஒப்புக்கொண்டால், உங்கள் கணக்கிலிருந்து பணம் செல்லும்.",
        "பணம் செலுத்துவதற்கு முன், திரையில் தெரியும் பெயர் அந்த நபர் அல்லது கடையின் பெயருடன் பொருந்துகிறதா என்று பாருங்கள்.",
        "வங்கியிலிருந்து பேசுவதாகச் சொல்பவரிடம் கூட UPI PIN, OTP, கார்டு விவரங்களைப் பகிராதீர்கள்.",
      ],
      example:
        "உங்கள் பழைய மின்விசிறியை வாங்குபவர், 'தவறுதலாக பணம் அனுப்பிவிட்டேன். இந்த கோரிக்கையை ஏற்றால் பணம் வந்துவிடும்' என்கிறார். PIN கொடுத்து ஏற்றால் உங்கள் பணம் அவருக்குச் சென்றுவிடும்.",
      warnings: [
        "பணத்தைப் 'பெற' PIN உள்ளிடச் சொல்பவர்.",
        "உடனே செய்யுங்கள் என்ற அவசரப்படுத்தல்.",
        "உங்களுக்குத் தெரியாதவர்களிடமிருந்து வரும் பணக் கோரிக்கைகள்.",
      ],
      actions: [
        "தெரியாதவர்களின் collect request-களை நிராகரியுங்கள்.",
        "பணம் செலுத்தும் முன் பெயரைச் சரிபாருங்கள்.",
        "பணம் இழந்தால் உடனே 1930-ஐ அழையுங்கள்.",
      ],
      check: {
        question: "UPI PIN எப்போது தேவை?",
        options: ["பணத்தைப் பெறும்போது", "பணத்தை அனுப்பும்போது", "வங்கியிலிருந்து வந்த செய்தியைச் சரிபார்க்க"],
        answer: 1,
        explanation: "UPI PIN பணம் அனுப்புவதற்கு மட்டுமே. பணம் தர PIN கேட்டால் அது மோசடி.",
      },
    },
  },
  {
    id: "whatsapp-safety",
    icon: "💬",
    en: {
      title: "WhatsApp Safety",
      summary: "Protect your account and avoid fake messages.",
      intro: "WhatsApp is great for staying in touch, but scammers pretend to be family, officials or companies.",
      points: [
        "Turn on two-step verification in WhatsApp: Settings, then Account, then Two-step verification.",
        "Set 'Who can add me to groups' to 'My contacts' under Settings, Privacy, Groups.",
        "Do not click links from unknown numbers.",
        "If a 'relative' asks for money from a new number, call them on their old number first.",
      ],
      example:
        "A message from a new number says, 'Hi Dad, my phone is broken, this is my new number. Please send ₹20,000 urgently.' Call your child's known number before doing anything.",
      warnings: [
        "A new number claiming to be family.",
        "Requests for the 6-digit code WhatsApp sends you.",
        "Messages promising prizes, jobs or investment profits.",
      ],
      actions: [
        "Call the person on their old number to confirm.",
        "Never share the 6-digit code that WhatsApp sends you.",
        "Block and report the sender.",
      ],
      check: {
        question: "A 'family member' messages from a new number asking for money. What should you do?",
        options: ["Send money quickly", "Call them on their old number to confirm", "Reply with your bank details"],
        answer: 1,
        explanation:
          "Scammers copy photos and names. A call to the known number quickly shows whether the message is real.",
      },
    },
    ta: {
      title: "வாட்ஸ்அப் பாதுகாப்பு",
      summary: "உங்கள் கணக்கைப் பாதுகாத்து, போலிச் செய்திகளைத் தவிருங்கள்.",
      intro:
        "வாட்ஸ்அப் தொடர்பில் இருக்க சிறந்தது, ஆனால் மோசடிக்காரர்கள் உறவினர்கள், அதிகாரிகள் அல்லது நிறுவனங்கள் போல நடிக்கிறார்கள்.",
      points: [
        "வாட்ஸ்அப்பில் two-step verification-ஐ இயக்குங்கள்: Settings, பிறகு Account, பிறகு Two-step verification.",
        "Settings, Privacy, Groups-ல் 'என்னை குழுக்களில் யார் சேர்க்கலாம்' என்பதை 'My contacts' என்று வையுங்கள்.",
        "தெரியாத எண்களிலிருந்து வரும் இணைப்புகளைத் தொடாதீர்கள்.",
        "புதிய எண்ணிலிருந்து 'உறவினர்' பணம் கேட்டால், முதலில் அவரது பழைய எண்ணில் அழைத்துப் பேசுங்கள்.",
      ],
      example:
        "புதிய எண்ணிலிருந்து 'அப்பா, என் போன் உடைந்துவிட்டது, இது என் புதிய எண். உடனே ₹20,000 அனுப்புங்கள்' என்று செய்தி வருகிறது. எதையும் செய்யும் முன் உங்கள் பிள்ளையின் தெரிந்த எண்ணில் அழையுங்கள்.",
      warnings: [
        "குடும்ப உறுப்பினர் என்று கூறும் புதிய எண்.",
        "வாட்ஸ்அப் அனுப்பும் 6 இலக்கக் குறியீட்டைக் கேட்பது.",
        "பரிசு, வேலை அல்லது முதலீட்டு லாபம் என்று வாக்குறுதி தரும் செய்திகள்.",
      ],
      actions: [
        "அந்த நபரின் பழைய எண்ணில் அழைத்து உறுதிசெய்யுங்கள்.",
        "வாட்ஸ்அப் அனுப்பும் 6 இலக்கக் குறியீட்டை யாரிடமும் பகிராதீர்கள்.",
        "அனுப்பியவரை Block செய்து Report செய்யுங்கள்.",
      ],
      check: {
        question: "புதிய எண்ணிலிருந்து 'குடும்ப உறுப்பினர்' பணம் கேட்கிறார். என்ன செய்ய வேண்டும்?",
        options: [
          "உடனே பணம் அனுப்ப வேண்டும்",
          "அவரது பழைய எண்ணில் அழைத்து உறுதிசெய்ய வேண்டும்",
          "உங்கள் வங்கி விவரங்களை அனுப்ப வேண்டும்",
        ],
        answer: 1,
        explanation:
          "மோசடிக்காரர்கள் புகைப்படங்களையும் பெயர்களையும் நகலெடுக்கிறார்கள். தெரிந்த எண்ணில் அழைத்தால் செய்தி உண்மையா என்று உடனே தெரியும்.",
      },
    },
  },
  {
    id: "password-security",
    icon: "🔑",
    en: {
      title: "Password Security",
      summary: "Create strong passwords and keep them private.",
      intro: "A password is the key to your accounts. A weak or shared key lets thieves in.",
      points: [
        "Use a long password: at least 12 characters, mixing words, numbers and symbols.",
        "Do not use birth dates, phone numbers or names of family members.",
        "Use a different password for important accounts like email and banking.",
        "Turn on two-step verification where it is available.",
      ],
      example:
        "'Ravi1950' is easy to guess because it uses a name and a birth year. 'BlueMango#Train72' is longer and much harder to guess.",
      warnings: [
        "Anyone asking for your password or OTP.",
        "Using the same password everywhere.",
        "Sending your password in a message.",
      ],
      actions: [
        "Change your password at once if you think someone knows it.",
        "If you write passwords down, keep the notebook safe at home, not in your wallet.",
        "Ask a trusted family member to help you set up two-step verification.",
      ],
      check: {
        question: "Which password is the strongest?",
        options: ["ravi1950", "12345678", "BlueMango#Train72"],
        answer: 2,
        explanation:
          "Long passwords that mix words, numbers and symbols, and avoid personal details, are the hardest to guess.",
      },
    },
    ta: {
      title: "கடவுச்சொல் பாதுகாப்பு",
      summary: "வலுவான கடவுச்சொற்களை உருவாக்கி, அவற்றை ரகசியமாக வைத்திருங்கள்.",
      intro: "கடவுச்சொல் உங்கள் கணக்குகளுக்கான சாவி. பலவீனமான அல்லது பகிரப்பட்ட சாவி திருடர்களை உள்ளே விடும்.",
      points: [
        "நீண்ட கடவுச்சொல்லைப் பயன்படுத்துங்கள்: குறைந்தது 12 எழுத்துகள், சொற்கள், எண்கள், குறியீடுகள் கலந்தது.",
        "பிறந்த தேதி, தொலைபேசி எண், குடும்பத்தினர் பெயர்களைப் பயன்படுத்தாதீர்கள்.",
        "மின்னஞ்சல், வங்கி போன்ற முக்கியமான கணக்குகளுக்கு வெவ்வேறு கடவுச்சொற்களைப் பயன்படுத்துங்கள்.",
        "வசதி இருக்கும் இடங்களில் two-step verification-ஐ இயக்குங்கள்.",
      ],
      example:
        "'Ravi1950' என்பது பெயரும் பிறந்த ஆண்டும் கொண்டதால் எளிதில் ஊகிக்கப்படும். 'BlueMango#Train72' நீளமானது, ஊகிக்க கடினமானது.",
      warnings: [
        "உங்கள் கடவுச்சொல் அல்லது OTP-ஐக் கேட்கும் எவரும்.",
        "எல்லா இடங்களிலும் ஒரே கடவுச்சொல்லைப் பயன்படுத்துவது.",
        "கடவுச்சொல்லைச் செய்தியில் அனுப்புவது.",
      ],
      actions: [
        "யாருக்காவது தெரிந்திருக்கலாம் என்று சந்தேகித்தால் உடனே மாற்றுங்கள்.",
        "எழுதி வைத்தால், பணப்பையில் அல்லாமல் வீட்டில் பாதுகாப்பான இடத்தில் வையுங்கள்.",
        "two-step verification அமைக்க நம்பிக்கையான குடும்ப உறுப்பினரின் உதவியைப் பெறுங்கள்.",
      ],
      check: {
        question: "எது மிக வலுவான கடவுச்சொல்?",
        options: ["ravi1950", "12345678", "BlueMango#Train72"],
        answer: 2,
        explanation:
          "சொற்கள், எண்கள், குறியீடுகள் கலந்த நீண்ட கடவுச்சொற்கள், தனிப்பட்ட விவரங்கள் இல்லாதவை ஊகிக்க மிகவும் கடினம்.",
      },
    },
  },
  {
    id: "phishing-awareness",
    icon: "🎣",
    en: {
      title: "Phishing Awareness",
      summary: "Spot fake messages, emails and websites.",
      intro:
        "Phishing means a fake message or website tricks you into sharing private details or clicking a harmful link.",
      points: [
        "Banks, government offices and delivery companies do not ask for OTPs, PINs or passwords by message or call.",
        "Look at the web address carefully. Fake sites use small spelling changes.",
        "Scammers create urgency, such as 'Your account will be blocked today!'",
        "Official Indian government websites usually end in .gov.in or .nic.in.",
      ],
      example:
        "SMS: 'Your bank account will be blocked today. Update KYC at http://bank-kyc-update.example'. A real bank would not send such a link. Use the bank's official app or visit the branch instead.",
      warnings: [
        "Urgent threats or offers that seem too good to be true.",
        "Spelling mistakes and odd web addresses.",
        "Links that ask for OTP, PIN or card details.",
      ],
      actions: [
        "Do not click the link.",
        "Open your bank's official app or visit the branch.",
        "Delete the message, and report it if you can.",
      ],
      check: {
        question: "A message says your account will be blocked unless you click a link. What is the safest action?",
        options: [
          "Click quickly and update details",
          "Ignore the link and contact your bank using its official number or app",
          "Forward it to friends",
        ],
        answer: 1,
        explanation: "Real banks do not threaten you through links. Use the official app, website or branch.",
      },
    },
    ta: {
      title: "ஃபிஷிங் விழிப்புணர்வு",
      summary: "போலிச் செய்திகள், மின்னஞ்சல்கள், இணையதளங்களைக் கண்டறியுங்கள்.",
      intro:
        "Phishing என்பது போலிச் செய்தி அல்லது இணையதளம் மூலம் உங்களை ஏமாற்றி தனிப்பட்ட விவரங்களைப் பெறுவது அல்லது தீங்கான இணைப்பைத் தொடச் செய்வது.",
      points: [
        "வங்கிகள், அரசு அலுவலகங்கள், கூரியர் நிறுவனங்கள் செய்தி அல்லது அழைப்பில் OTP, PIN, கடவுச்சொல் கேட்காது.",
        "இணைய முகவரியை கவனமாகப் பாருங்கள். போலி தளங்கள் சிறு எழுத்து மாற்றங்களுடன் இருக்கும்.",
        "மோசடிக்காரர்கள் அவசரத்தை உருவாக்குவார்கள், உதாரணமாக 'இன்றே உங்கள் கணக்கு முடக்கப்படும்!'",
        "இந்தியாவில் அதிகாரப்பூர்வ அரசு இணையதளங்கள் பொதுவாக .gov.in அல்லது .nic.in என்று முடியும்.",
      ],
      example:
        "SMS: 'இன்றே உங்கள் வங்கிக் கணக்கு முடக்கப்படும். KYC-ஐப் புதுப்பிக்க http://bank-kyc-update.example'. உண்மையான வங்கி இப்படி இணைப்பு அனுப்பாது. வங்கியின் அதிகாரப்பூர்வ செயலியைப் பயன்படுத்துங்கள் அல்லது கிளைக்குச் செல்லுங்கள்.",
      warnings: [
        "அவசர மிரட்டல்கள் அல்லது நம்ப முடியாத சலுகைகள்.",
        "எழுத்துப்பிழைகள், விசித்திரமான இணைய முகவரிகள்.",
        "OTP, PIN, கார்டு விவரங்களைக் கேட்கும் இணைப்புகள்.",
      ],
      actions: [
        "இணைப்பைத் தொடாதீர்கள்.",
        "உங்கள் வங்கியின் அதிகாரப்பூர்வ செயலியைத் திறங்கள் அல்லது கிளைக்குச் செல்லுங்கள்.",
        "செய்தியை நீக்கி, முடிந்தால் புகார் செய்யுங்கள்.",
      ],
      check: {
        question: "இணைப்பைத் தொடாவிட்டால் கணக்கு முடக்கப்படும் என்று செய்தி வருகிறது. பாதுகாப்பான செயல் எது?",
        options: [
          "உடனே தொட்டு விவரங்களைப் புதுப்பிப்பது",
          "இணைப்பைப் புறக்கணித்து, வங்கியின் அதிகாரப்பூர்வ எண் அல்லது செயலி மூலம் தொடர்பு கொள்வது",
          "நண்பர்களுக்கு அனுப்புவது",
        ],
        answer: 1,
        explanation:
          "உண்மையான வங்கிகள் இணைப்புகள் மூலம் மிரட்டாது. அதிகாரப்பூர்வ செயலி, இணையதளம் அல்லது கிளையைப் பயன்படுத்துங்கள்.",
      },
    },
  },
  {
    id: "scam-calls",
    icon: "📞",
    en: {
      title: "Scam Calls and Impersonation",
      summary: "Handle calls from fake officials, banks and customer care.",
      intro:
        "Scammers phone you pretending to be from a bank, the police, a courier or customer care. They want you to panic and act fast.",
      points: [
        "Real banks and officials never ask for your OTP, PIN or CVV on a call.",
        "No genuine agency demands money over a phone or video call to avoid arrest. This scam is often called 'digital arrest'.",
        "Never install screen-sharing apps like AnyDesk because a caller asks you to.",
        "Hang up, then call the number printed on your bank card or on the official website.",
      ],
      example:
        "A caller says, 'I am from your bank. Your card is blocked. Tell me the OTP to unblock it.' The OTP would let them take your money. Hang up and call your bank.",
      warnings: [
        "The caller creates fear or urgency.",
        "They ask for an OTP or PIN, or ask you to install an app.",
        "They say 'do not tell anyone' or 'do not disconnect'.",
      ],
      actions: [
        "Hang up without sharing anything.",
        "Call the bank using the number printed on your card.",
        "If you shared details or lost money, call 1930 right away.",
      ],
      check: {
        question: "A caller says he is from your bank and asks for an OTP. What do you do?",
        options: [
          "Share it, because he knows my name",
          "Hang up and call the bank using the number on my card",
          "Ask him to call back and share it later",
        ],
        answer: 1,
        explanation: "Banks never ask for OTPs. Callers can know your name from leaked data, so a name proves nothing.",
      },
    },
    ta: {
      title: "மோசடி அழைப்புகளும் ஆள்மாறாட்டமும்",
      summary: "போலி அதிகாரிகள், வங்கிகள், வாடிக்கையாளர் சேவை அழைப்புகளை எப்படிக் கையாள்வது.",
      intro:
        "மோசடிக்காரர்கள் வங்கி, காவல்துறை, கூரியர் அல்லது வாடிக்கையாளர் சேவை போல நடித்து அழைப்பார்கள். நீங்கள் பயந்து அவசரமாகச் செயல்பட வேண்டும் என்பதே அவர்கள் நோக்கம்.",
      points: [
        "உண்மையான வங்கிகளும் அதிகாரிகளும் அழைப்பில் OTP, PIN, CVV கேட்க மாட்டார்கள்.",
        "கைது செய்யாமல் இருக்க பணம் கேட்டு தொலைபேசி அல்லது வீடியோ அழைப்பில் மிரட்டுவதை எந்த உண்மையான அமைப்பும் செய்யாது. இந்த மோசடி 'டிஜிட்டல் கைது' என்று அழைக்கப்படுகிறது.",
        "அழைப்பவர் கேட்டாலும் AnyDesk போன்ற திரை பகிர்வு செயலிகளை நிறுவாதீர்கள்.",
        "அழைப்பைத் துண்டித்து, உங்கள் கார்டில் அச்சிடப்பட்ட எண்ணை அல்லது அதிகாரப்பூர்வ இணையதளத்தில் உள்ள எண்ணை அழையுங்கள்.",
      ],
      example:
        "அழைப்பவர், 'நான் உங்கள் வங்கியிலிருந்து பேசுகிறேன். உங்கள் கார்டு முடக்கப்பட்டுள்ளது. திறக்க OTP சொல்லுங்கள்' என்கிறார். OTP கொடுத்தால் அவர்கள் உங்கள் பணத்தை எடுத்துவிடுவார்கள். அழைப்பைத் துண்டித்து வங்கியை அழையுங்கள்.",
      warnings: [
        "பயத்தையோ அவசரத்தையோ உருவாக்கும் அழைப்பாளர்.",
        "OTP, PIN கேட்பது அல்லது செயலியை நிறுவச் சொல்வது.",
        "'யாரிடமும் சொல்லாதீர்கள்' அல்லது 'அழைப்பைத் துண்டிக்காதீர்கள்' என்று சொல்வது.",
      ],
      actions: [
        "எதையும் பகிராமல் அழைப்பைத் துண்டியுங்கள்.",
        "உங்கள் கார்டில் உள்ள வங்கியின் எண்ணை அழையுங்கள்.",
        "விவரங்களைப் பகிர்ந்திருந்தால் அல்லது பணம் இழந்தால் உடனே 1930-ஐ அழையுங்கள்.",
      ],
      check: {
        question: "வங்கி அதிகாரி என்று கூறுபவர் OTP கேட்கிறார். என்ன செய்வீர்கள்?",
        options: [
          "அவருக்கு என் பெயர் தெரிந்திருப்பதால் சொல்வேன்",
          "அழைப்பைத் துண்டித்து, கார்டில் உள்ள எண்ணில் வங்கியை அழைப்பேன்",
          "பிறகு அழைக்கச் சொல்லி அப்போது சொல்வேன்",
        ],
        answer: 1,
        explanation:
          "வங்கிகள் OTP கேட்காது. கசிந்த தகவல்களால் அழைப்பவருக்கு உங்கள் பெயர் தெரிந்திருக்கலாம். பெயர் எதையும் நிரூபிக்காது.",
      },
    },
  },
]
