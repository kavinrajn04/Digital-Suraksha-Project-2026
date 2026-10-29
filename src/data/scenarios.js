export const scenarios = [
  {
    id: "fake-kyc",
    kind: "sms",
    en: {
      title: "Fake KYC message",
      sender: "AX-BNKALRT",
      message:
        "Dear customer, your bank KYC has expired and your account will be blocked today. Update now: http://bank-kyc-verify.example",
      options: [
        {
          text: "Click the link and update my details quickly",
          safe: false,
          why: "The link does not belong to your bank. It probably opens a fake website that steals your details.",
        },
        {
          text: "Ignore the link and check my KYC in the bank's official app or at the branch",
          safe: true,
          why: "Correct. Banks may remind you about KYC, but you should never enter details through a link in an SMS. Check through the official app or at the branch.",
        },
        {
          text: "Reply to the SMS with my account number",
          safe: false,
          why: "Replying confirms your number is active, and your account number helps scammers. Never reply to such messages.",
        },
      ],
      warnings: [
        "Urgent threat: 'your account will be blocked today'",
        "A link with an unofficial web address",
        "A general greeting, 'Dear customer', instead of your name",
      ],
      recommended:
        "Do not click the link. Open your bank's official app or visit the branch to check your KYC status. Delete the message.",
    },
    ta: {
      title: "போலி KYC செய்தி",
      sender: "AX-BNKALRT",
      message:
        "அன்புள்ள வாடிக்கையாளரே, உங்கள் வங்கி KYC காலாவதியாகிவிட்டது. இன்றே உங்கள் கணக்கு முடக்கப்படும். இப்போதே புதுப்பிக்கவும்: http://bank-kyc-verify.example",
      options: [
        {
          text: "இணைப்பைத் தொட்டு விவரங்களை உடனே புதுப்பிப்பேன்",
          safe: false,
          why: "அந்த இணைப்பு உங்கள் வங்கியுடையது அல்ல. அது உங்கள் விவரங்களைத் திருடும் போலி இணையதளத்துக்குச் செல்லக்கூடும்.",
        },
        {
          text: "இணைப்பைப் புறக்கணித்து, வங்கியின் அதிகாரப்பூர்வ செயலியில் அல்லது கிளையில் KYC நிலையைச் சரிபார்ப்பேன்",
          safe: true,
          why: "சரி. வங்கிகள் KYC பற்றி நினைவூட்டலாம், ஆனால் SMS-ல் வரும் இணைப்பின் மூலம் விவரங்களை உள்ளிடக் கூடாது. அதிகாரப்பூர்வ செயலி அல்லது கிளை மூலம் சரிபாருங்கள்.",
        },
        {
          text: "SMS-க்குப் பதிலாக என் வங்கிக் கணக்கு எண்ணை அனுப்புவேன்",
          safe: false,
          why: "பதிலளித்தால் உங்கள் எண் செயலில் உள்ளது என்று மோசடிக்காரர்களுக்குத் தெரிந்துவிடும். கணக்கு எண்ணும் அவர்களுக்கு உதவும். இத்தகைய செய்திகளுக்குப் பதிலளிக்காதீர்கள்.",
        },
      ],
      warnings: [
        "அவசர மிரட்டல்: 'இன்றே கணக்கு முடக்கப்படும்'",
        "அதிகாரப்பூர்வமற்ற இணைய முகவரியுடன் கூடிய இணைப்பு",
        "உங்கள் பெயருக்குப் பதிலாக பொதுவான வணக்கம் 'அன்புள்ள வாடிக்கையாளரே'",
      ],
      recommended:
        "இணைப்பைத் தொடாதீர்கள். வங்கியின் அதிகாரப்பூர்வ செயலியைத் திறங்கள் அல்லது கிளைக்குச் சென்று KYC நிலையைச் சரிபாருங்கள். செய்தியை நீக்கிவிடுங்கள்.",
    },
  },
  {
    id: "otp-request",
    kind: "call",
    en: {
      title: "OTP request from a courier caller",
      sender: "Unknown number",
      message:
        "Sir, I am from the courier office. Your parcel is stuck at our centre. A code is coming to your phone right now. Please read it out so I can release the parcel.\n\nYou have not ordered anything. At that moment an SMS arrives: 'OTP 482913 for payment of ₹4,999. Do not share this with anyone.'",
      options: [
        {
          text: "Read out the OTP, because he says he is from the courier",
          safe: false,
          why: "An OTP is a key to your money. This one is for a payment of ₹4,999 that you did not make. Never read out an OTP to a caller.",
        },
        {
          text: "Share only the last three digits",
          safe: false,
          why: "Even part of an OTP can help scammers. Never share any part of it.",
        },
        {
          text: "Refuse, hang up, and contact my bank if I did not make this payment",
          safe: true,
          why: "Correct. A real courier never needs an OTP. The message shows a payment, so the caller is trying to take your money.",
        },
      ],
      warnings: [
        "The caller asks you to read out an OTP",
        "The OTP message mentions a payment you did not make",
        "A 'stuck parcel' story to create pressure",
      ],
      recommended:
        "Hang up without sharing any digits. If you did not make the payment, call your bank using the number printed on your card.",
    },
    ta: {
      title: "கூரியர் அழைப்பில் OTP கோரிக்கை",
      sender: "தெரியாத எண்",
      message:
        "ஐயா, நான் கூரியர் அலுவலகத்திலிருந்து பேசுகிறேன். உங்கள் பார்சல் எங்கள் மையத்தில் நின்றுவிட்டது. இப்போதே உங்கள் போனுக்கு ஒரு குறியீடு வரும். பார்சலை விடுவிக்க அதைப் படித்துச் சொல்லுங்கள்.\n\nநீங்கள் எதையும் ஆர்டர் செய்யவில்லை. அந்த நேரத்தில் ஒரு SMS வருகிறது: '₹4,999 பணம் செலுத்துவதற்கான OTP: 482913. இதை யாரிடமும் பகிராதீர்கள்.'",
      options: [
        {
          text: "கூரியர் என்று சொல்வதால் OTP-ஐப் படித்துச் சொல்வேன்",
          safe: false,
          why: "OTP உங்கள் பணத்துக்கான சாவி. இது நீங்கள் செய்யாத ₹4,999 பணப்பரிவர்த்தனைக்கானது. அழைப்பவரிடம் OTP-ஐ ஒருபோதும் சொல்லாதீர்கள்.",
        },
        {
          text: "கடைசி மூன்று இலக்கங்களை மட்டும் சொல்வேன்",
          safe: false,
          why: "OTP-யின் ஒரு பகுதி கூட மோசடிக்காரர்களுக்கு உதவும். எந்தப் பகுதியையும் பகிராதீர்கள்.",
        },
        {
          text: "மறுத்து, அழைப்பைத் துண்டித்து, நான் செய்யாத பணப்பரிவர்த்தனை என்றால் வங்கியைத் தொடர்பு கொள்வேன்",
          safe: true,
          why: "சரி. உண்மையான கூரியர் ஊழியருக்கு OTP தேவையில்லை. செய்தி ஒரு பணப்பரிவர்த்தனையைக் காட்டுகிறது, எனவே அழைப்பவர் உங்கள் பணத்தை எடுக்க முயல்கிறார்.",
        },
      ],
      warnings: [
        "OTP-ஐப் படித்துச் சொல்லுமாறு அழைப்பவர் கேட்கிறார்",
        "நீங்கள் செய்யாத பணப்பரிவர்த்தனையைக் குறிப்பிடும் OTP செய்தி",
        "அழுத்தம் தர 'நின்றுவிட்ட பார்சல்' கதை",
      ],
      recommended:
        "எந்த இலக்கத்தையும் சொல்லாமல் அழைப்பைத் துண்டியுங்கள். நீங்கள் பணம் செலுத்தவில்லை என்றால், உங்கள் கார்டில் அச்சிடப்பட்ட எண்ணில் வங்கியை அழையுங்கள்.",
    },
  },
  {
    id: "prize-link",
    kind: "sms",
    en: {
      title: "Suspicious prize and payment link",
      sender: "+91 98XXX XXXXX",
      message:
        "Congratulations! You have won ₹25,000 in our lucky draw. Pay a small processing fee of ₹49 to claim your prize: http://lucky-prize-claim.example",
      options: [
        {
          text: "Delete the message and block the sender",
          safe: true,
          why: "Correct. You cannot win a contest you never entered, and real prizes never ask you to pay a fee first.",
        },
        {
          text: "Pay the ₹49 fee, since it is a small amount",
          safe: false,
          why: "The small fee is bait. The link may also collect your payment details and take more money.",
        },
        {
          text: "Forward it to friends so they can win too",
          safe: false,
          why: "Forwarding spreads the scam and could put your friends at risk.",
        },
      ],
      warnings: [
        "A prize for a contest you never entered",
        "You must pay money to receive money",
        "An unknown sender and an unofficial link",
      ],
      recommended:
        "Ignore and delete the message, then block the sender. If you are unsure, ask a trusted family member.",
    },
    ta: {
      title: "சந்தேகத்துக்குரிய பரிசு மற்றும் பணம் செலுத்தும் இணைப்பு",
      sender: "+91 98XXX XXXXX",
      message:
        "வாழ்த்துகள்! எங்கள் அதிர்ஷ்டக் குலுக்கலில் நீங்கள் ₹25,000 வென்றுள்ளீர்கள். பரிசைப் பெற ₹49 சிறு கையாளுதல் கட்டணத்தைச் செலுத்துங்கள்: http://lucky-prize-claim.example",
      options: [
        {
          text: "செய்தியை நீக்கி, அனுப்பியவரை Block செய்வேன்",
          safe: true,
          why: "சரி. நீங்கள் கலந்துகொள்ளாத போட்டியில் உங்களால் வெல்ல முடியாது. உண்மையான பரிசுகள் முதலில் கட்டணம் கேட்காது.",
        },
        {
          text: "சிறிய தொகைதானே என்று ₹49 செலுத்துவேன்",
          safe: false,
          why: "சிறிய கட்டணம் ஒரு தூண்டில். அந்த இணைப்பு உங்கள் பணம் செலுத்தும் விவரங்களையும் சேகரித்து மேலும் பணத்தை எடுக்கக்கூடும்.",
        },
        {
          text: "நண்பர்களும் வெல்ல அவர்களுக்கு அனுப்புவேன்",
          safe: false,
          why: "அனுப்புவது மோசடியைப் பரப்பும். உங்கள் நண்பர்களையும் ஆபத்தில் ஆழ்த்தும்.",
        },
      ],
      warnings: [
        "நீங்கள் கலந்துகொள்ளாத போட்டியில் பரிசு",
        "பணம் பெற நீங்கள் பணம் செலுத்த வேண்டும்",
        "தெரியாத அனுப்புநர், அதிகாரப்பூர்வமற்ற இணைப்பு",
      ],
      recommended:
        "செய்தியைப் புறக்கணித்து நீக்குங்கள், அனுப்பியவரை Block செய்யுங்கள். உறுதியில்லையெனில் நம்பிக்கையான குடும்ப உறுப்பினரிடம் கேளுங்கள்.",
    },
  },
  {
    id: "fake-customer-care",
    kind: "call",
    en: {
      title: "Fake customer-care call",
      sender: "Number found through an online search",
      message:
        "You searched online for your bank's customer care and called the first number you found. The person says: 'Sir, to fix your problem, please install the AnyDesk app and tell me the nine-digit code it shows. Then I can see your screen and help you.'",
      options: [
        {
          text: "Install the app and share the code",
          safe: false,
          why: "That code gives the caller control over your phone. They can see your OTPs and make payments.",
        },
        {
          text: "Install it, but keep my banking apps closed",
          safe: false,
          why: "The caller can still see your messages and OTPs, and can open apps on your phone. Never allow remote access to a stranger.",
        },
        {
          text: "Hang up, then find the number on my bank card or the bank's official website",
          safe: true,
          why: "Correct. Scammers put fake numbers in search results. Only trust the number printed on your card or on the bank's official website.",
        },
      ],
      warnings: [
        "The number came from an online search, not from your card or the official website",
        "The caller asks you to install a screen-sharing app",
        "Sharing a code gives them control of your phone",
      ],
      recommended:
        "Hang up. Call only the customer-care number printed on your bank card or shown on the bank's official website or app.",
    },
    ta: {
      title: "போலி வாடிக்கையாளர் சேவை அழைப்பு",
      sender: "இணையத் தேடலில் கிடைத்த எண்",
      message:
        "உங்கள் வங்கியின் வாடிக்கையாளர் சேவை எண்ணை இணையத்தில் தேடி, முதலில் கிடைத்த எண்ணை அழைத்தீர்கள். அவர் சொல்கிறார்: 'ஐயா, உங்கள் பிரச்சினையைச் சரிசெய்ய AnyDesk செயலியை நிறுவி, அது காட்டும் ஒன்பது இலக்கக் குறியீட்டைச் சொல்லுங்கள். அப்போது உங்கள் திரையைப் பார்த்து உதவ முடியும்.'",
      options: [
        {
          text: "செயலியை நிறுவி, குறியீட்டைச் சொல்வேன்",
          safe: false,
          why: "அந்தக் குறியீடு உங்கள் போனின் கட்டுப்பாட்டை அழைப்பவருக்குத் தரும். அவர் உங்கள் OTP-களைப் பார்த்து பணம் செலுத்தவும் முடியும்.",
        },
        {
          text: "நிறுவுவேன், ஆனால் வங்கிச் செயலிகளை மூடி வைப்பேன்",
          safe: false,
          why: "அப்போதும் அழைப்பவர் உங்கள் செய்திகளையும் OTP-களையும் பார்க்க முடியும், போனில் செயலிகளையும் திறக்க முடியும். தெரியாதவருக்கு தொலைவிலிருந்து அணுகும் அனுமதியை ஒருபோதும் தராதீர்கள்.",
        },
        {
          text: "அழைப்பைத் துண்டித்து, வங்கிக் கார்டில் அல்லது வங்கியின் அதிகாரப்பூர்வ இணையதளத்தில் உள்ள எண்ணைக் கண்டுபிடிப்பேன்",
          safe: true,
          why: "சரி. மோசடிக்காரர்கள் தேடல் முடிவுகளில் போலி எண்களை வைக்கிறார்கள். கார்டில் அச்சிடப்பட்ட எண்ணை அல்லது வங்கியின் அதிகாரப்பூர்வ இணையதள எண்ணை மட்டுமே நம்புங்கள்.",
        },
      ],
      warnings: [
        "எண் உங்கள் கார்டிலிருந்தோ அதிகாரப்பூர்வ இணையதளத்திலிருந்தோ அல்லாமல் இணையத் தேடலில் கிடைத்தது",
        "திரை பகிர்வு செயலியை நிறுவச் சொல்கிறார்",
        "குறியீட்டைப் பகிர்ந்தால் உங்கள் போனின் கட்டுப்பாடு அவர்களிடம் செல்லும்",
      ],
      recommended:
        "அழைப்பைத் துண்டியுங்கள். உங்கள் வங்கிக் கார்டில் அச்சிடப்பட்ட அல்லது வங்கியின் அதிகாரப்பூர்வ இணையதளம் அல்லது செயலியில் உள்ள வாடிக்கையாளர் சேவை எண்ணை மட்டுமே அழையுங்கள்.",
    },
  },
  {
    id: "upi-collect",
    kind: "upi",
    en: {
      title: "Fraudulent UPI request",
      sender: "Request from Arun (buyer)",
      message:
        "You are selling an old sofa online. The buyer says, 'I have sent you ₹4,500. Please approve it on your UPI app to receive it.' Your app shows: 'Arun is requesting ₹4,500 from you. Enter UPI PIN to approve.'",
      options: [
        {
          text: "Enter my UPI PIN to approve and receive the money",
          safe: false,
          why: "This is a collect request, which takes money from you. Approving it with your PIN would send ₹4,500 to the buyer.",
        },
        {
          text: "Decline the request, and ask the buyer to pay by scanning my QR code or sending to my UPI ID",
          safe: true,
          why: "Correct. To receive money, you only share your UPI ID or QR code. You never need a PIN to receive money.",
        },
      ],
      warnings: [
        "The buyer says you will 'receive' money, but the app asks you to 'approve' a request",
        "It asks for your UPI PIN, which is only for sending money",
        "A stranger rushing you to approve quickly",
      ],
      recommended:
        "Decline the request. Share only your UPI ID or QR code, and hand over the item only after the money shows in your account.",
    },
    ta: {
      title: "மோசடியான UPI கோரிக்கை",
      sender: "அருண் (வாங்குபவர்) அனுப்பிய கோரிக்கை",
      message:
        "நீங்கள் உங்கள் பழைய சோபாவை ஆன்லைனில் விற்கிறீர்கள். வாங்குபவர், 'உங்களுக்கு ₹4,500 அனுப்பியுள்ளேன். பெற, உங்கள் UPI செயலியில் ஒப்புக்கொள்ளுங்கள்' என்கிறார். உங்கள் செயலி காட்டுகிறது: 'அருண் உங்களிடம் ₹4,500 கோருகிறார். ஒப்புக்கொள்ள UPI PIN உள்ளிடவும்.'",
      options: [
        {
          text: "பணத்தைப் பெற UPI PIN உள்ளிட்டு ஒப்புக்கொள்வேன்",
          safe: false,
          why: "இது உங்களிடமிருந்து பணத்தை எடுக்கும் collect request. PIN கொடுத்து ஒப்புக்கொண்டால் ₹4,500 வாங்குபவருக்குச் சென்றுவிடும்.",
        },
        {
          text: "கோரிக்கையை நிராகரித்து, என் QR குறியீட்டை ஸ்கேன் செய்யவோ UPI ID-க்கு அனுப்பவோ சொல்வேன்",
          safe: true,
          why: "சரி. பணம் பெற உங்கள் UPI ID அல்லது QR குறியீட்டை மட்டும் பகிர்ந்தால் போதும். பணம் பெற PIN தேவையே இல்லை.",
        },
      ],
      warnings: [
        "பணத்தைப் 'பெறுவீர்கள்' என்று வாங்குபவர் சொல்கிறார், ஆனால் செயலி கோரிக்கையை 'ஒப்புக்கொள்ள' சொல்கிறது",
        "பணம் அனுப்புவதற்கு மட்டுமே உள்ள UPI PIN-ஐக் கேட்கிறது",
        "விரைவாக ஒப்புக்கொள்ளச் சொல்லி அவசரப்படுத்தும் தெரியாதவர்",
      ],
      recommended:
        "கோரிக்கையை நிராகரியுங்கள். உங்கள் UPI ID அல்லது QR குறியீட்டை மட்டும் பகிருங்கள். பணம் உங்கள் கணக்கில் வந்ததைப் பார்த்த பிறகே பொருளைக் கொடுங்கள்.",
    },
  },
  {
    id: "whatsapp-impersonation",
    kind: "whatsapp",
    en: {
      title: "WhatsApp message from a new number",
      sender: "Unknown number, with your daughter's profile photo",
      message:
        "Hi Amma, this is my new number. My phone fell in water. I need to pay a supplier urgently. Please send ₹15,000 to this account right now. I will explain later. Please don't call, I am in a meeting.",
      options: [
        {
          text: "Send the money quickly, since my daughter needs help",
          safe: false,
          why: "A photo and a message can be copied. Sending money without checking is exactly what the scammer wants.",
        },
        {
          text: "Call my daughter's old number to confirm",
          safe: true,
          why: "Correct. A call to the number you already know quickly shows whether the message is real.",
        },
        {
          text: "Send half now and the rest later",
          safe: false,
          why: "Half of the amount is still lost money. Check first, then decide.",
        },
      ],
      warnings: [
        "A new number claiming to be family",
        "An urgent money request with no time to think",
        "'Don't call' and 'I will explain later' to stop you from checking",
      ],
      recommended:
        "Do not send money. Call your daughter's old number, or another family member, to confirm. If the message is fake, block and report the number.",
    },
    ta: {
      title: "புதிய எண்ணிலிருந்து வாட்ஸ்அப் செய்தி",
      sender: "தெரியாத எண், உங்கள் மகளின் புகைப்படத்துடன்",
      message:
        "அம்மா, இது என் புதிய எண். என் போன் தண்ணீரில் விழுந்துவிட்டது. நான் ஒரு சப்ளையருக்கு உடனே பணம் கொடுக்க வேண்டும். இந்தக் கணக்குக்கு இப்போதே ₹15,000 அனுப்புங்கள். பிறகு விளக்குகிறேன். அழைக்க வேண்டாம், நான் மீட்டிங்கில் இருக்கிறேன்.",
      options: [
        {
          text: "மகளுக்கு உதவி தேவை என்று உடனே பணம் அனுப்புவேன்",
          safe: false,
          why: "புகைப்படத்தையும் செய்தியையும் நகலெடுக்க முடியும். சரிபார்க்காமல் பணம் அனுப்புவதே மோசடிக்காரர் எதிர்பார்ப்பது.",
        },
        {
          text: "மகளின் பழைய எண்ணை அழைத்து உறுதிசெய்வேன்",
          safe: true,
          why: "சரி. உங்களுக்கு ஏற்கனவே தெரிந்த எண்ணில் அழைத்தால் செய்தி உண்மையா என்று உடனே தெரியும்.",
        },
        {
          text: "இப்போது பாதி அனுப்பி, மீதியை பிறகு அனுப்புவேன்",
          safe: false,
          why: "பாதித் தொகையும் இழந்த பணம்தான். முதலில் சரிபாருங்கள், பிறகு முடிவு செய்யுங்கள்.",
        },
      ],
      warnings: [
        "குடும்ப உறுப்பினர் என்று கூறும் புதிய எண்",
        "யோசிக்க நேரம் தராத அவசரப் பணக் கோரிக்கை",
        "நீங்கள் சரிபார்ப்பதைத் தடுக்க 'அழைக்க வேண்டாம்', 'பிறகு விளக்குகிறேன்'",
      ],
      recommended:
        "பணம் அனுப்பாதீர்கள். மகளின் பழைய எண்ணை அல்லது வேறு குடும்ப உறுப்பினரை அழைத்து உறுதிசெய்யுங்கள். செய்தி போலி என்றால் அந்த எண்ணை Block செய்து Report செய்யுங்கள்.",
    },
  },
]
