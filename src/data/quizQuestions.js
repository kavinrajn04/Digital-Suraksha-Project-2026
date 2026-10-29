export const questions = [
  // ---------- SET A (pre-test / Quiz 1) ----------
  {
    id: "otp-A",
    concept: "otp",
    set: "A",
    en: {
      question: "A caller from your 'bank' asks for the OTP you just received. What should you do?",
      options: ["Never share it, and hang up", "Share it, since he knows my name", "Share only half of it"],
      answer: 0,
      explanation: "No genuine bank asks for your OTP. Anyone who asks for it is trying to take your money.",
    },
    ta: {
      question: "உங்கள் 'வங்கியிலிருந்து' அழைப்பவர், உங்களுக்கு இப்போது வந்த OTP-ஐக் கேட்கிறார். என்ன செய்ய வேண்டும்?",
      options: [
        "ஒருபோதும் சொல்லாமல் அழைப்பைத் துண்டிப்பேன்",
        "அவருக்கு என் பெயர் தெரிந்திருப்பதால் சொல்வேன்",
        "பாதியை மட்டும் சொல்வேன்",
      ],
      answer: 0,
      explanation: "உண்மையான எந்த வங்கியும் OTP கேட்காது. அதைக் கேட்பவர் உங்கள் பணத்தை எடுக்க முயல்கிறார்.",
    },
  },
  {
    id: "upi-pin-A",
    concept: "upi-pin",
    set: "A",
    en: {
      question: "A buyer says, 'Enter your UPI PIN to receive my payment.' What does this mean?",
      options: [
        "It is a normal step",
        "Only the first digit is needed",
        "It is a scam, because a PIN is never needed to receive money",
      ],
      answer: 2,
      explanation: "A UPI PIN is needed only to send money. Anyone asking for it to give you money is a scammer.",
    },
    ta: {
      question: "வாங்குபவர், 'என் பணத்தைப் பெற உங்கள் UPI PIN-ஐ உள்ளிடுங்கள்' என்கிறார். இதன் பொருள் என்ன?",
      options: ["இது சாதாரண நடைமுறை", "முதல் இலக்கம் மட்டும் போதும்", "இது மோசடி, பணம் பெற PIN தேவையில்லை"],
      answer: 2,
      explanation: "UPI PIN பணம் அனுப்புவதற்கு மட்டுமே. பணம் தர PIN கேட்பவர் மோசடிக்காரர்.",
    },
  },
  {
    id: "collect-A",
    concept: "collect",
    set: "A",
    en: {
      question: "Your UPI app shows 'Mohan is requesting ₹3,000 from you'. You do not know Mohan. What do you do?",
      options: [
        "Approve it, since it may be a refund",
        "Enter my PIN to see who he is",
        "Decline it and do not enter my PIN",
      ],
      answer: 2,
      explanation: "A collect request takes money from you. Decline requests from people you do not know.",
    },
    ta: {
      question:
        "உங்கள் UPI செயலியில் 'மோகன் உங்களிடம் ₹3,000 கோருகிறார்' என்று வருகிறது. உங்களுக்கு மோகனைத் தெரியாது. என்ன செய்வீர்கள்?",
      options: [
        "திருப்பிச் செலுத்துதலாக இருக்கலாம் என்று ஒப்புக்கொள்வேன்",
        "அவர் யார் என்று பார்க்க PIN உள்ளிடுவேன்",
        "நிராகரிப்பேன், PIN உள்ளிடமாட்டேன்",
      ],
      answer: 2,
      explanation: "Collect request உங்களிடமிருந்து பணத்தை எடுக்கும். தெரியாதவர்களின் கோரிக்கைகளை நிராகரியுங்கள்.",
    },
  },
  {
    id: "kyc-A",
    concept: "kyc",
    set: "A",
    en: {
      question: "An SMS says your KYC has expired and gives a link to update it. What is the safest action?",
      options: [
        "Click the link and enter my details",
        "Ignore the link and check with the bank's official app or branch",
        "Reply with my Aadhaar number",
      ],
      answer: 1,
      explanation: "Do not use links in messages for KYC. Check through the official app or at the branch.",
    },
    ta: {
      question: "KYC காலாவதியாகிவிட்டது என்றும் புதுப்பிக்க ஒரு இணைப்பையும் தரும் SMS வருகிறது. பாதுகாப்பான செயல் எது?",
      options: [
        "இணைப்பைத் தொட்டு விவரங்களை உள்ளிடுவேன்",
        "இணைப்பைப் புறக்கணித்து, வங்கியின் அதிகாரப்பூர்வ செயலி அல்லது கிளையில் சரிபார்ப்பேன்",
        "ஆதார் எண்ணைப் பதிலாக அனுப்புவேன்",
      ],
      answer: 1,
      explanation:
        "KYC-க்கு செய்திகளில் வரும் இணைப்புகளைப் பயன்படுத்தாதீர்கள். அதிகாரப்பூர்வ செயலி அல்லது கிளையில் சரிபாருங்கள்.",
    },
  },
  {
    id: "family-A",
    concept: "family",
    set: "A",
    en: {
      question: "A message from a new number says 'I am your son, send ₹10,000 urgently.' What do you do first?",
      options: ["Call his old number to check", "Send the money, he may be in trouble", "Ask for a photo, then pay"],
      answer: 0,
      explanation: "Photos can be copied. Calling a number you already know is the most reliable check.",
    },
    ta: {
      question:
        "புதிய எண்ணிலிருந்து 'நான் உங்கள் மகன், உடனே ₹10,000 அனுப்புங்கள்' என்று செய்தி வருகிறது. முதலில் என்ன செய்வீர்கள்?",
      options: [
        "அவனது பழைய எண்ணை அழைத்துச் சரிபார்ப்பேன்",
        "அவன் சிக்கலில் இருக்கலாம் என்று பணம் அனுப்புவேன்",
        "புகைப்படம் கேட்டு, பிறகு பணம் தருவேன்",
      ],
      answer: 0,
      explanation: "புகைப்படங்களை நகலெடுக்க முடியும். ஏற்கனவே தெரிந்த எண்ணை அழைப்பதே நம்பகமான சரிபார்ப்பு.",
    },
  },
  {
    id: "password-A",
    concept: "password",
    set: "A",
    en: {
      question: "Which is the safest way to create a password?",
      options: [
        "Use your birth date",
        "Use the same simple password everywhere",
        "Use a long mix of words, numbers and symbols",
      ],
      answer: 2,
      explanation: "Long, mixed passwords without personal details are the hardest to guess.",
    },
    ta: {
      question: "கடவுச்சொல்லை உருவாக்க பாதுகாப்பான வழி எது?",
      options: [
        "பிறந்த தேதியைப் பயன்படுத்துவது",
        "எல்லா இடங்களிலும் ஒரே எளிய கடவுச்சொல்லைப் பயன்படுத்துவது",
        "சொற்கள், எண்கள், குறியீடுகள் கலந்த நீண்ட கடவுச்சொல்லைப் பயன்படுத்துவது",
      ],
      answer: 2,
      explanation: "தனிப்பட்ட விவரங்கள் இல்லாத, கலவையான நீண்ட கடவுச்சொற்களை ஊகிப்பது மிகக் கடினம்.",
    },
  },
  {
    id: "app-A",
    concept: "app",
    set: "A",
    en: {
      question: "Where is it safest to download a new app?",
      options: [
        "A link sent by a stranger",
        "A website offering free premium versions",
        "The official Play Store or App Store",
      ],
      answer: 2,
      explanation: "Official stores check apps for safety. Links and unknown websites may install harmful apps.",
    },
    ta: {
      question: "புதிய செயலியைப் பதிவிறக்க மிகப் பாதுகாப்பான இடம் எது?",
      options: [
        "தெரியாதவர் அனுப்பிய இணைப்பு",
        "இலவசமாக பிரீமியம் பதிப்பு தரும் இணையதளம்",
        "அதிகாரப்பூர்வ Play Store அல்லது App Store",
      ],
      answer: 2,
      explanation:
        "அதிகாரப்பூர்வ கடைகள் செயலிகளின் பாதுகாப்பைச் சோதிக்கின்றன. இணைப்புகளும் தெரியாத இணையதளங்களும் தீங்கான செயலிகளை நிறுவக்கூடும்.",
    },
  },
  {
    id: "remote-A",
    concept: "remote",
    set: "A",
    en: {
      question: "A 'customer care' caller asks you to install a screen-sharing app. What is the risk?",
      options: [
        "None, it only helps them fix problems",
        "They can see your screen and OTPs and control your phone",
        "It will only use more battery",
      ],
      answer: 1,
      explanation:
        "Screen-sharing apps give a stranger access to your phone, messages and banking apps. Never install them at a caller's request.",
    },
    ta: {
      question: "'வாடிக்கையாளர் சேவை' அழைப்பாளர் திரை பகிர்வு செயலியை நிறுவச் சொல்கிறார். இதில் உள்ள ஆபத்து என்ன?",
      options: [
        "எதுவும் இல்லை, அது பிரச்சினையைச் சரிசெய்ய மட்டுமே உதவும்",
        "அவர் உங்கள் திரையையும் OTP-களையும் பார்த்து போனைக் கட்டுப்படுத்த முடியும்",
        "பேட்டரி அதிகம் செலவாகும், அவ்வளவுதான்",
      ],
      answer: 1,
      explanation:
        "திரை பகிர்வு செயலிகள் தெரியாதவருக்கு உங்கள் போன், செய்திகள், வங்கிச் செயலிகளுக்கான அணுகலைத் தருகின்றன. அழைப்பாளர் கேட்டால் ஒருபோதும் நிறுவாதீர்கள்.",
    },
  },
  {
    id: "prize-A",
    concept: "prize",
    set: "A",
    en: {
      question: "A message says you won ₹50,000 but must pay ₹100 to claim it. What should you do?",
      options: ["Pay, because ₹100 is small", "Ignore and delete it", "Share it so friends can also win"],
      answer: 1,
      explanation: "Real prizes do not ask for fees first. This is a common trick.",
    },
    ta: {
      question: "₹50,000 வென்றுள்ளீர்கள், பெற ₹100 செலுத்த வேண்டும் என்று செய்தி வருகிறது. என்ன செய்வீர்கள்?",
      options: [
        "₹100 சிறிய தொகை என்று செலுத்துவேன்",
        "புறக்கணித்து நீக்குவேன்",
        "நண்பர்களும் வெல்ல அவர்களுக்குப் பகிர்வேன்",
      ],
      answer: 1,
      explanation: "உண்மையான பரிசுகள் முதலில் கட்டணம் கேட்காது. இது பொதுவான தந்திரம்.",
    },
  },
  {
    id: "report-A",
    concept: "report",
    set: "A",
    en: {
      question: "You lost money in an online fraud. What should you do first?",
      options: [
        "Call the cyber fraud helpline 1930 and tell my bank immediately",
        "Wait a few days to see if the money returns",
        "Delete all messages and tell no one",
      ],
      answer: 0,
      explanation:
        "Reporting quickly gives a better chance of stopping the money. Keep messages and screenshots as evidence.",
    },
    ta: {
      question: "ஆன்லைன் மோசடியில் பணம் இழந்துவிட்டீர்கள். முதலில் என்ன செய்ய வேண்டும்?",
      options: [
        "சைபர் மோசடி உதவி எண் 1930-ஐ அழைத்து, வங்கிக்கும் உடனே தெரிவிப்பேன்",
        "பணம் திரும்பி வருகிறதா என்று சில நாட்கள் காத்திருப்பேன்",
        "எல்லா செய்திகளையும் நீக்கி யாரிடமும் சொல்லமாட்டேன்",
      ],
      answer: 0,
      explanation:
        "உடனே புகார் செய்தால் பணத்தைத் தடுக்க வாய்ப்பு அதிகம். செய்திகளையும் ஸ்கிரீன்ஷாட்களையும் ஆதாரமாக வைத்திருங்கள்.",
    },
  },

  // ---------- SET B (post-test / Quiz 2): same concepts, different wording ----------
  {
    id: "otp-B",
    concept: "otp",
    set: "B",
    en: {
      question:
        "You get an OTP for a payment you did not make. A caller says 'read it to me so I can cancel it.' What is right?",
      options: [
        "Do not share it, and call the bank on the number printed on my card",
        "Read it so the payment is cancelled",
        "Reply to the SMS with the OTP",
      ],
      answer: 0,
      explanation: "An OTP never cancels a payment. It approves one. Sharing it lets the scammer complete the payment.",
    },
    ta: {
      question:
        "நீங்கள் செய்யாத பணப்பரிவர்த்தனைக்கு OTP வருகிறது. 'ரத்து செய்ய அதைப் படியுங்கள்' என்று ஒருவர் அழைத்துச் சொல்கிறார். எது சரி?",
      options: [
        "சொல்லாமல், கார்டில் அச்சிடப்பட்ட எண்ணில் வங்கியை அழைப்பேன்",
        "பரிவர்த்தனை ரத்தாக OTP-ஐப் படித்துச் சொல்வேன்",
        "SMS-க்கு OTP-ஐப் பதிலாக அனுப்புவேன்",
      ],
      answer: 0,
      explanation:
        "OTP எந்தப் பரிவர்த்தனையையும் ரத்து செய்யாது, அது ஒப்புதல் அளிக்கும். பகிர்ந்தால் மோசடிக்காரர் பரிவர்த்தனையை முடித்துவிடுவார்.",
    },
  },
  {
    id: "upi-pin-B",
    concept: "upi-pin",
    set: "B",
    en: {
      question: "Which statement about the UPI PIN is true?",
      options: [
        "Bank staff may ask for it on a call",
        "You can send it by SMS if the bank asks",
        "It is private and used only when you send money",
      ],
      answer: 2,
      explanation: "Your UPI PIN is private. You enter it only when you are sending money.",
    },
    ta: {
      question: "UPI PIN பற்றிய எந்தக் கூற்று சரி?",
      options: [
        "வங்கி ஊழியர்கள் அழைப்பில் கேட்கலாம்",
        "வங்கி கேட்டால் SMS-ல் அனுப்பலாம்",
        "அது ரகசியமானது, பணம் அனுப்பும்போது மட்டுமே உள்ளிட வேண்டும்",
      ],
      answer: 2,
      explanation: "UPI PIN ரகசியமானது. பணம் அனுப்பும்போது மட்டுமே அதை உள்ளிடுவீர்கள்.",
    },
  },
  {
    id: "collect-B",
    concept: "collect",
    set: "B",
    en: {
      question: "You are selling a bicycle. How should a buyer pay you safely?",
      options: [
        "By sending to my UPI ID or scanning my QR code",
        "By asking me to approve a request with my PIN",
        "By asking for my card number and CVV",
      ],
      answer: 0,
      explanation: "To receive money you only share your UPI ID or QR code. Never share a PIN, CVV or OTP.",
    },
    ta: {
      question: "நீங்கள் ஒரு சைக்கிளை விற்கிறீர்கள். வாங்குபவர் பாதுகாப்பாக எப்படிப் பணம் தர வேண்டும்?",
      options: [
        "என் UPI ID-க்கு அனுப்பியோ என் QR குறியீட்டை ஸ்கேன் செய்தோ",
        "என் PIN கொடுத்து ஒரு கோரிக்கையை ஒப்புக்கொள்ளச் சொல்லி",
        "என் கார்டு எண்ணையும் CVV-யையும் கேட்டு",
      ],
      answer: 0,
      explanation:
        "பணம் பெற உங்கள் UPI ID அல்லது QR குறியீட்டை மட்டும் பகிர்ந்தால் போதும். PIN, CVV, OTP-ஐ ஒருபோதும் பகிராதீர்கள்.",
    },
  },
  {
    id: "kyc-B",
    concept: "kyc",
    set: "B",
    en: {
      question: "Which sign suggests a message is a phishing attempt?",
      options: [
        "It has no links",
        "It comes from your bank's official app",
        "It threatens to block your account today unless you click a link",
      ],
      answer: 2,
      explanation: "Urgent threats plus a link are classic phishing signs. Real banks do not pressure you this way.",
    },
    ta: {
      question: "ஒரு செய்தி ஃபிஷிங் முயற்சி என்பதற்கான அறிகுறி எது?",
      options: [
        "அதில் எந்த இணைப்பும் இல்லை",
        "அது வங்கியின் அதிகாரப்பூர்வ செயலியிலிருந்து வருகிறது",
        "இணைப்பைத் தொடாவிட்டால் இன்றே கணக்கு முடக்கப்படும் என்று மிரட்டுகிறது",
      ],
      answer: 2,
      explanation: "அவசர மிரட்டலும் இணைப்பும் ஃபிஷிங்கின் அறிகுறிகள். உண்மையான வங்கிகள் இப்படி அழுத்தம் தராது.",
    },
  },
  {
    id: "family-B",
    concept: "family",
    set: "B",
    en: {
      question: "Someone on WhatsApp says 'Do not call me, just send money.' What does this suggest?",
      options: [
        "It is safe because they are busy",
        "Payment proves trust",
        "It is a warning sign that the sender does not want you to verify",
      ],
      answer: 2,
      explanation: "Scammers avoid calls so you cannot check. Always verify using a number you already know.",
    },
    ta: {
      question:
        "வாட்ஸ்அப்பில் ஒருவர், 'என்னை அழைக்காதீர்கள், பணம் மட்டும் அனுப்புங்கள்' என்கிறார். இது எதைக் காட்டுகிறது?",
      options: [
        "அவர் வேலையாக இருக்கிறார், பணம் அனுப்புவது பாதுகாப்பு",
        "பணம் அனுப்புவதே நம்பிக்கையை நிரூபிக்கும்",
        "நீங்கள் சரிபார்ப்பதை அவர் விரும்பவில்லை என்ற எச்சரிக்கை அறிகுறி",
      ],
      answer: 2,
      explanation:
        "மோசடிக்காரர்கள் நீங்கள் சரிபார்க்கக் கூடாது என்பதற்காக அழைப்பைத் தவிர்ப்பார்கள். எப்போதும் உங்களுக்குத் தெரிந்த எண்ணில் சரிபாருங்கள்.",
    },
  },
  {
    id: "password-B",
    concept: "password",
    set: "B",
    en: {
      question:
        "A friend says to use the same password for email and banking 'so you do not forget'. What is the risk?",
      options: [
        "If one account is hacked, the others can be broken into too",
        "There is no risk",
        "Banks will block your account",
      ],
      answer: 0,
      explanation:
        "If thieves learn one password, they try it on your other accounts. Use different passwords for important accounts.",
    },
    ta: {
      question:
        "'மறக்காமல் இருக்க' மின்னஞ்சலுக்கும் வங்கிக்கும் ஒரே கடவுச்சொல்லைப் பயன்படுத்தச் சொல்கிறார் ஒரு நண்பர். இதில் உள்ள ஆபத்து என்ன?",
      options: [
        "ஒரு கணக்கு ஹேக் ஆனால் மற்றவையும் பாதிக்கப்படலாம்",
        "எந்த ஆபத்தும் இல்லை",
        "வங்கி உங்கள் கணக்கை முடக்கிவிடும்",
      ],
      answer: 0,
      explanation:
        "ஒரு கடவுச்சொல் திருடர்களுக்குத் தெரிந்தால் உங்கள் மற்ற கணக்குகளிலும் முயல்வார்கள். முக்கியமான கணக்குகளுக்கு வெவ்வேறு கடவுச்சொற்களைப் பயன்படுத்துங்கள்.",
    },
  },
  {
    id: "app-B",
    concept: "app",
    set: "B",
    en: {
      question: "A torch (flashlight) app asks for permission to read your messages and contacts. What should you do?",
      options: [
        "Allow it, apps need everything",
        "Deny the permission, or do not install the app",
        "Allow it only on weekends",
      ],
      answer: 1,
      explanation: "A torch app does not need your messages or contacts. Deny permissions that do not make sense.",
    },
    ta: {
      question: "ஒரு டார்ச் செயலி உங்கள் செய்திகளையும் தொடர்புகளையும் படிக்க அனுமதி கேட்கிறது. என்ன செய்வீர்கள்?",
      options: [
        "செயலிகளுக்கு எல்லாம் தேவை என்று அனுமதிப்பேன்",
        "அனுமதியை மறுப்பேன் அல்லது செயலியை நிறுவமாட்டேன்",
        "வார இறுதியில் மட்டும் அனுமதிப்பேன்",
      ],
      answer: 1,
      explanation: "டார்ச் செயலிக்கு உங்கள் செய்திகளோ தொடர்புகளோ தேவையில்லை. பொருந்தாத அனுமதிகளை மறுத்துவிடுங்கள்.",
    },
  },
  {
    id: "remote-B",
    concept: "remote",
    set: "B",
    en: {
      question: "Where should you find your bank's customer-care number?",
      options: [
        "Printed on your bank card or on the official website",
        "The first number in an online search",
        "A number sent by an unknown caller",
      ],
      answer: 0,
      explanation:
        "Scammers place fake numbers in search results. Use the number on your card or the official website.",
    },
    ta: {
      question: "உங்கள் வங்கியின் வாடிக்கையாளர் சேவை எண்ணை எங்கு பார்க்க வேண்டும்?",
      options: [
        "வங்கிக் கார்டில் அல்லது அதிகாரப்பூர்வ இணையதளத்தில்",
        "இணையத் தேடலில் முதலில் வரும் எண்",
        "தெரியாத அழைப்பாளர் அனுப்பும் எண்",
      ],
      answer: 0,
      explanation:
        "மோசடிக்காரர்கள் தேடல் முடிவுகளில் போலி எண்களை வைக்கிறார்கள். கார்டு அல்லது அதிகாரப்பூர்வ இணையதளத்தைப் பயன்படுத்துங்கள்.",
    },
  },
  {
    id: "prize-B",
    concept: "prize",
    set: "B",
    en: {
      question: "Which is a warning sign of a lottery or job scam?",
      options: [
        "You are asked to pay a fee first",
        "You applied on the company's official website",
        "The company contacts you only through its official email",
      ],
      answer: 0,
      explanation: "Asking for money first is the main warning sign of prize, lottery and job scams.",
    },
    ta: {
      question: "லாட்டரி அல்லது வேலை மோசடியின் எச்சரிக்கை அறிகுறி எது?",
      options: [
        "முதலில் கட்டணம் செலுத்தச் சொல்வது",
        "நிறுவனத்தின் அதிகாரப்பூர்வ இணையதளத்தில் விண்ணப்பித்தது",
        "நிறுவனம் அதிகாரப்பூர்வ மின்னஞ்சலில் மட்டுமே தொடர்பு கொள்வது",
      ],
      answer: 0,
      explanation: "முதலில் பணம் கேட்பதே பரிசு, லாட்டரி, வேலை மோசடிகளின் முக்கிய எச்சரிக்கை அறிகுறி.",
    },
  },
  {
    id: "report-B",
    concept: "report",
    set: "B",
    en: {
      question: "Where can you report an online financial fraud in India?",
      options: ["Only at a local shop", "Nowhere, it cannot be reported", "On cybercrime.gov.in or by calling 1930"],
      answer: 2,
      explanation:
        "You can report on the national cybercrime portal, cybercrime.gov.in, or call 1930. Also inform your bank.",
    },
    ta: {
      question: "இந்தியாவில் ஆன்லைன் நிதி மோசடியை எங்கு புகாரளிக்கலாம்?",
      options: ["உள்ளூர் கடையில் மட்டும்", "எங்கும் புகாரளிக்க முடியாது", "cybercrime.gov.in-ல் அல்லது 1930-ஐ அழைத்து"],
      answer: 2,
      explanation:
        "தேசிய சைபர் குற்றப் புகார் தளமான cybercrime.gov.in-ல் புகாரளிக்கலாம் அல்லது 1930-ஐ அழைக்கலாம். உங்கள் வங்கிக்கும் தெரிவியுங்கள்.",
    },
  },
]

export const getQuestionSet = (set) => questions.filter((q) => q.set === set)
