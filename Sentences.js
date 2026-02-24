const sentenceData = {
    // Level 1: Parts of Speech (Simple Subject/Verb/Object/Adjective)
    1: [
        { english: "He is a good boy", tamil: "அவன் ஒரு நல்ல பையன்" },
        { english: "The red car is fast", tamil: "சிவப்பு கார் வேகமாக உள்ளது" },
        { english: "She sings very beautifully", tamil: "அவள் மிகவும் அழகாக பாடுகிறாள்" },
        { english: "They play with a round ball", tamil: "அவர்கள் ஒரு வட்டமான பந்துடன் விளையாடுகிறார்கள்" },
        { english: "The black dog barks loudly", tamil: "கருப்பு நாய் சத்தமாக குரைக்கிறது" },
        { english: "I have two small cats", tamil: "என்னிடம் இரண்டு சிறிய பூனைகள் உள்ளன" },
        { english: "We live in a big house", tamil: "நாங்கள் ஒரு பெரிய வீட்டில் வசிக்கிறோம்" },
        { english: "The tall tree has green leaves", tamil: "உயரமான மரத்தில் பச்சை இலைகள் உள்ளன" },
        { english: "She wears a blue dress", tamil: "அவள் நீல நிற ஆடை அணிந்திருக்கிறாள்" },
        { english: "He reads a thick book", tamil: "அவன் ஒரு தடிமனான புத்தகத்தைப் படிக்கிறான்" }
        // Add 20 more sentences here following the exact same format!
    ],

    // Level 2: Present Tenses (Simple, Continuous, Perfect)
    2: [
        { english: "I drink milk every day", tamil: "நான் தினமும் பால் குடிக்கிறேன்" },
        { english: "She is writing a letter now", tamil: "அவள் இப்போது ஒரு கடிதம் எழுதிக்கொண்டிருக்கிறாள்" },
        { english: "They are playing in the garden", tamil: "அவர்கள் தோட்டத்தில் விளையாடிக்கொண்டிருக்கிறார்கள்" },
        { english: "We have finished our homework", tamil: "நாங்கள் எங்கள் வீட்டுப்பாடத்தை முடித்துவிட்டோம்" },
        { english: "He has lived here for years", tamil: "அவன் பல வருடங்களாக இங்கே வசிக்கிறான்" },
        { english: "The sun rises in the east", tamil: "சூரியன் கிழக்கில் உதிக்கிறது" },
        { english: "I am watching a movie", tamil: "நான் ஒரு திரைப்படம் பார்த்துக்கொண்டிருக்கிறேன்" },
        { english: "She has lost her keys", tamil: "அவள் தன் சாவியை தொலைத்துவிட்டாள்" },
        { english: "They know the correct answer", tamil: "அவர்களுக்கு சரியான பதில் தெரியும்" },
        { english: "It is raining outside right now", tamil: "இப்போது வெளியே மழை பெய்துகொண்டிருக்கிறது" }
    ],

    // Level 3: Past Tenses (Simple, Continuous, Perfect)
    3: [
        { english: "I went to the market yesterday", tamil: "நான் நேற்று சந்தைக்குச் சென்றேன்" },
        { english: "She bought a new phone", tamil: "அவள் ஒரு புதிய தொலைபேசியை வாங்கினாள்" },
        { english: "They were sleeping at that time", tamil: "அவர்கள் அந்த நேரத்தில் தூங்கிக்கொண்டிருந்தார்கள்" },
        { english: "He was driving the car fast", tamil: "அவன் காரை வேகமாக ஓட்டிக்கொண்டிருந்தான்" },
        { english: "We had already eaten lunch", tamil: "நாங்கள் ஏற்கனவே மதிய உணவு சாப்பிட்டுவிட்டோம்" },
        { english: "The train had left the station", tamil: "ரயில் நிலையத்தை விட்டு புறப்பட்டுவிட்டது" },
        { english: "I saw him last week", tamil: "நான் அவனை கடந்த வாரம் பார்த்தேன்" },
        { english: "She did not come to school", tamil: "அவள் பள்ளிக்கு வரவில்லை" },
        { english: "They were playing football", tamil: "அவர்கள் கால்பந்து விளையாடிக்கொண்டிருந்தார்கள்" },
        { english: "He had finished the work", tamil: "அவன் வேலையை முடித்திருந்தான்" }
    ],

    // Level 4: Future Tenses (Simple, Continuous, Perfect)
    4: [
        { english: "I will go to Chennai tomorrow", tamil: "நான் நாளை சென்னை செல்வேன்" },
        { english: "She will buy a new car", tamil: "அவள் ஒரு புதிய கார் வாங்குவாள்" },
        { english: "They will be traveling next week", tamil: "அவர்கள் அடுத்த வாரம் பயணம் செய்துகொண்டிருப்பார்கள்" },
        { english: "He will be working late", tamil: "அவன் தாமதமாக வேலை செய்துகொண்டிருப்பான்" },
        { english: "We will have reached by evening", tamil: "நாங்கள் மாலைக்குள் சென்றடைந்திருப்போம்" },
        { english: "The show will start soon", tamil: "நிகழ்ச்சி விரைவில் தொடங்கும்" },
        { english: "I shall help you with this", tamil: "இதற்கு நான் உங்களுக்கு உதவுவேன்" },
        { english: "She will have finished cooking", tamil: "அவள் சமைத்து முடித்திருப்பாள்" },
        { english: "They will win the match", tamil: "அவர்கள் போட்டியில் வெற்றி பெறுவார்கள்" },
        { english: "It will rain tomorrow", tamil: "நாளை மழை பெய்யும்" }
    ],

    // Level 5: Active & Passive Voice
    5: [
        { english: "The cat killed the rat", tamil: "பூனை எலியை கொன்றது" },
        { english: "The rat was killed by the cat", tamil: "எலி பூனையால் கொல்லப்பட்டது" },
        { english: "She is singing a song", tamil: "அவள் ஒரு பாடல் பாடுகிறாள்" },
        { english: "A song is being sung by her", tamil: "ஒரு பாடல் அவளால் பாடப்படுகிறது" },
        { english: "He wrote a beautiful letter", tamil: "அவன் ஒரு அழகான கடிதம் எழுதினான்" },
        { english: "A beautiful letter was written by him", tamil: "ஒரு அழகான கடிதம் அவனால் எழுதப்பட்டது" },
        { english: "They will complete the project", tamil: "அவர்கள் திட்டத்தை முடிப்பார்கள்" },
        { english: "The project will be completed by them", tamil: "திட்டம் அவர்களால் முடிக்கப்படும்" },
        { english: "I have eaten the apple", tamil: "நான் ஆப்பிளை சாப்பிட்டுவிட்டேன்" },
        { english: "The apple has been eaten by me", tamil: "ஆப்பிள் என்னால் சாப்பிடப்பட்டுள்ளது" }
    ],

    // Level 6: Direct & Indirect Speech
    6: [
        { english: "He said I am happy", tamil: "அவர் நான் மகிழ்ச்சியாக இருக்கிறேன் என்று கூறினார்" },
        { english: "He said that he was happy", tamil: "அவர் தான் மகிழ்ச்சியாக இருப்பதாக கூறினார்" },
        { english: "She asked where are you going", tamil: "நீ எங்கே போகிறாய் என்று அவள் கேட்டாள்" },
        { english: "She asked me where I was going", tamil: "நான் எங்கே போகிறேன் என்று அவள் என்னிடம் கேட்டாள்" },
        { english: "They said we won the match", tamil: "நாங்கள் போட்டியில் வெற்றி பெற்றோம் என்று அவர்கள் கூறினர்" },
        { english: "They exclaimed that they had won the match", tamil: "அவர்கள் போட்டியில் வெற்றி பெற்றதாக மகிழ்ச்சியுடன் கூறினர்" },
        { english: "He said to me please help me", tamil: "தயவுசெய்து எனக்கு உதவுங்கள் என்று அவர் என்னிடம் கூறினார்" },
        { english: "He requested me to help him", tamil: "அவருக்கு உதவுமாறு அவர் என்னிடம் கோரினார்" },
        { english: "She said the sun rises in the east", tamil: "சூரியன் கிழக்கில் உதிக்கிறது என்று அவள் கூறினாள்" },
        { english: "She said that the sun rises in the east", tamil: "சூரியன் கிழக்கில் உதிக்கிறது என்று அவள் கூறினாள்" }
    ]
};
