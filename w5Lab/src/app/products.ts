export interface Product {
  id: number;
  categoryName: string;
  name: string;
  price: number;
  description: string;
  // separator
  image: string;
  rating: number;
  likes: number;
  link: string;
}

export const products = [
  {
    id: 1,
    categoryName: 'Smartphones',
    name: 'Google Pixel 4 XL - Just Black - 128GB - Unlocked',
    price: 799.99,
    description: 'Point and shoot for the perfect photo. Capture brilliant color and control the exposure balance of different parts of your photos.\n' +
      'Get the shot without the flash. Night Sight is now faster and easier to use it can even take photos of the Milky Way.\n' +
      'Get more done with your voice. The new Google Assistant is the easiest way to send texts, share photos, and more.\n' +
      'A new way to control your phone. Quick Gestures let you skip songs and silence calls – just by waving your hand above the screen.\n' +
      'End the robocalls. With Call Screen, the Google Assistant helps you proactively filter our spam before your phone ever rings.',
    image: 'https://m.media-amazon.com/images/I/71Ns3Z6KFcL._AC_SL1500_.jpg',
    rating: 4.4,
    likes: 0,
    link: 'https://www.amazon.com/Google-Pixel-XL-Black-Unlocked/dp/B07YMNVXVV/ref=sr_1_1?crid=NZV35PNYN9GZ&keywords=phone+xl&qid=1646750003&s=wireless&sprefix=phone+xl%2Caps%2C369&sr=1-1',
  },
  {
    id: 2,
    categoryName: 'Smartphones',
    name: 'SOYES XS11 3G Mini Smartphone 2.5 Inch WiFi GPS RAM 1GB ROM 8GB Quad Core Android 6.0',
    price: 699.99,
    description: 'Soyes XS11 Smart Phone: Lead to the trend of the mini smart phone.\n' +
      '️ Mini Cute phone: phone size: 85mm*43mm*9mm, just like a bank card.\n' +
      '️3G Mini Saprtphone: Please make sure your sim card supports 2G GSM 850/900/1800/1900; 3G WCDMA B1/B5 Android 6.0: Suppiort APP download\n' +
      '️ Best Backup Phone: 1000mAh Battery; Dual Camera: front 0.3 Mpx(with Beautifying), back 2Mpx. Dual Sim dual standby,\n' +
      '️ We provide 12 months warranty. If you meet any problems or concerns when using it, please contact the seller via the Amazon Message, we will reply to you with the solution in 12 hours.\n',
    image: 'https://m.media-amazon.com/images/I/61lFK0IvCML._AC_SL1200_.jpg',
    rating: 3.8,
    likes: 0,
    link: 'https://www.amazon.com/Smartphone-Android-Phones-Camera-Google/dp/B08KTHNWX3/ref=sr_1_3?crid=1VU0BLWRWRRV2&keywords=phone+mini&qid=1646750197&sprefix=phone+mini%2Caps%2C233&sr=8-3',
  },
  {
    id: 3,
    categoryName: 'Smartphones',
    name: 'AT&T CL4940 Corded Standard Phone with Answering System and Backlit Display, White',
    price: 299.99,
    description: 'Simple, Corded Operation . Line Power Mode . Display Dial . Mute . Last Number Redial . Flash\n' +
      'Receiver Volume Control . Ringer Volume Control . Table and Wall Mountable . Hearing Aid Compatible . English/Spanish/French Setup Menu\n' +
      'Clear speak Dial-in-Base Speakerphone . Speakerphone Volume Control . Caller ID / Call Waiting . 50 Name and Number Caller ID History\n' +
      'Digital Answering System . Call Screen/Intercept . Time and Date Stamp . Message Counter . Big button Display;Message guardR memory for power failure\n' +
      'Backlit Display . Extra-Large Tilt Display . Extra-Large Buttons.Power adapter input:AC120V 60Hz\n' +
      'Refer the user manual for wall mount procedures.\n' +
      'DSL Subscribers may need to us a DSL Filter',
    image: 'https://m.media-amazon.com/images/I/71EFZFyYnIL._AC_SL1500_.jpg',
    rating: 4.4,
    likes: 0,
    link: 'https://www.amazon.com/AT-Standard-Answering-Backlit-Improved/dp/B07QDZD8C7/ref=sr_1_2?crid=3NCDM8HXHQM9T&keywords=phone+standard&qid=1646750261&sprefix=phone+standar%2Caps%2C227&sr=8-2',
  },
  {
    id: 4,
    categoryName: 'Smartphones',
    name: 'Google Pixel 6 – 5G Android Phone - Unlocked Smartphone with Wide and Ultrawide Lens - 128GB - Stormy Black',
    price: 189.99,
    description: 'Unlocked Android 5G phone gives you the flexibility to change carriers and choose your own data plan[1]; Pixel 6 is fast, smart, and secure, and adapts to you\n' +
      'The powerful Google Tensor processor is the first processor designed by Google and made for Pixel; it keeps your phone fast, your games rich, and your personal info safe\n' +
      'Pixel’s 50 megapixel rear camera captures 150% more light for photos with richer colors and more detail[2]\n' +
      'Professional tools like Magic Eraser[3], Motion Mode, and Portrait Mode keep your photos sharp, accurate, and focused\n' +
      'Pixel’s fast charging[4] all day battery adapts to you and saves power for apps you use most[5]\n' +
      'Privacy and protection are built into your Pixel smartphone; backed by the Titan M2 security chip, 5 years of updates, and the security core[6]\n' +
      'New Pixel experience is more modern and intuitive, with colors that reflect your personal style; the At a Glance feature shows you the apps and info you need when you need it, like a boarding pass before a flight[7]\n' +
      'Live Translate helps you translate live video captions, private chats and messages, and signs in up to 55 languages right on your cell phone[8]; no apps, internet, or language courses required[9]\n' +
      'New 6.4 inch Smooth Display[10] is made with the toughest Gorilla Glass yet[11] to keep your smartphone protected; the high refresh rate means more responsive gaming and scrolling\n' +
      'Please refer to the product description section below for all applicable legal disclaimers denoted by the bracketed numbers in the preceding bullet points (e.g., [1], [2], etc.)',
    image: 'https://m.media-amazon.com/images/I/61oQtjPpM-L._AC_SL1500_.jpg',
    rating: 4.3,
    likes: 0,
    link: 'https://www.amazon.com/Google-Pixel-Unlocked-Smartphone-Ultrawide/dp/B09HJZPFDD/ref=sr_1_1?crid=2B4E5SI9MDKC9&keywords=Google+Pixel+6&qid=1646750613&sprefix=google+pixel+6%2Caps%2C214&sr=8-1',
  },
  {
    id: 5,
    categoryName: 'Smartphones',
    name: 'Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Premium)',
    price: 799.99,
    description: 'Unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).\n' +
      'Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity.\n' +
      'Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm\'s length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.\n' +
      'Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card.\n' +
      'Backed by a one-year satisfaction guarantee.',
    image: 'https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg',
    rating: 4.5,
    likes: 0,
    link: 'https://www.amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JF9WMR9/ref=sr_1_1?crid=SE0MKFIXGF3C&keywords=Apple+iPhone+12+Pro+Max&qid=1646750632&sprefix=apple+iphone+12+pro+max%2Caps%2C222&sr=8-1',
  },



  {
    id: 6,
    categoryName: 'Smartwatches',
    name: 'HAFURY Android Smart Watch, Activity Fitness Tracker for Women Men, Smartwatch for Android & iOS Phones, Heart Rate Monitor, IP68 Waterproof Fitness Watch, Sleep, Calories, Step Tracker, Black',
    price: 59.9,
    description: '★🎄【Smart Watch for Android Phones&iPhone&Samsung】This Android smartwatch is compatible with iOS 8.0 and above & Android 4.4 and above the cellphone. You can read notify of Calling, WhatsApp, Facebook, Wechat, SMS, App, Alarm, Target reaching, Calendar, Binding, and also hang up incoming calls. Soft and no easy dirty band offers your comfortable feelings.\n' +
      '★🎄【Heart Rate Monitor Watch with Sleep Tracker】Mens smart watch can automatically 24-hour real-time heart rate monitor, sleep, steps, distance, calorie, active time to helps you optimally adjust your exercise intensity and enables a more accurate record of your burned calories and sleep quality.\n' +
      '★🎄【Fitness Tracker Watch for Men Women】Waterproof smartwatch can set 9 exercise modes: running, treadmill, fitness, cycling, climbing, yoga, walking, hiking, spinning, and stepping, it provides you with daily health analysis and improvement reference data. High sensitive large 1.3 Inch TFT-LCD screen makes it easy to operate.\n' +
      '★🎄【IP68 Waterproof Watch with Longer Battery Life】Womens smart watch ​is IP68 waterproof, you can wear it when you are swimming, washing your hands or even it is raining. After fully charged, the smartwatch can be used for at least 10 days. With a full touch screen, 3-level Adjustable Brightness, 4-different watch faces, not only easy for you to operate, but also provides you with a clear display.\n' +
      '★🎄【More Practical Functions】This big screen smart watch support a music controller, Bluetooth 5.0, stopwatch, timer, reset function, Firmware information, Restart, Shut down and some gestures, such as lift the wrist (lift the wrist to automatically brighten), lay down (put down the automatic shut down the screen)\n' +
      '★★When you receive the watch or do not use the smartwatch for a long time, connect the charger correctly and charge the watch for 2 hours before using it. The above situation is caused by excessive discharge of the watch due to unused for a long time. For other questions, please contact us.',
    image: 'https://m.media-amazon.com/images/I/61ISEH7-4CS._AC_SL1500_.jpg',
    rating: 4.2,
    likes: 0,
    link: 'https://www.amazon.com/HAFURY-Compatible-Bluetooth-Smartwatch-Waterproof/dp/B087R6YMX4/ref=sr_1_1_sspa?crid=3TJVKPPNE8BOL&keywords=smartwatch&qid=1647022193&sprefix=smartwatch%2Caps%2C293&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTk5CSUZOVUtQREtOJmVuY3J5cHRlZElkPUEwOTg2NjMxM01PVUpOS0hKREkwViZlbmNyeXB0ZWRBZElkPUEwMzkwMjMzMjkyQU5RN1hMOVNVRSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
  },
  {
    id: 7,
    categoryName: 'Smartwatches',
    name: 'Smart Watch, Fenlay Advanced smartwatch for Men, Fitness Tracker Smart Watches for iOS/ Android Compatible iPhone Samsung',
    price: 89.9,
    description: '【1.32 HD Color Screen】Large, clear, fully laminated touch screen. It adopts a high-definition full-round large screen so that the field of view is more natural, the full-screen touch is more smooth, and obvious details are distinct and vivid. Or show a variety of content data, can be clear and vivid. Bring a unique visual experience for users.\n' +
      '【Your Ultimate Personal Assistant】 Smart watch notifies you of any incoming text messages or calls, scheduled alarms, to prevent you from missing any important information. And includes more practical functions, email, calendar, weather, alarm clock, Music & Camera Control, social applications new messages in real-time to remind.\n' +
      '【Multiple sports modes Enjoy the fun of sports】Pre-set walking, running, cycling, badminton and other mainstream sports mode, professional sports prop analysis so that sports more scientific, efficient let you experience the fun of intelligent wear.\n' +
      '【Automatic motion recognition】Steps, miles, calories for you to accurately record, you can synchronize data on the phone as well as view historical data, record your progress.\n' +
      '【Heart Rate Blood Pressure Monitoring】Measuring heart rate continuously throughout the day not only helps us to keep an eye on our fitness level but is also a barometer of fatigue and recovery from training. Enjoy a healthier life fast and more accurate algorithm, more intimate. Unlike other similar products, a wide range of data can be monitored and a variety of historical data can be viewed directly on the watch.（Please remove the protective film from the back of the watch before measurement）',
    image: 'https://m.media-amazon.com/images/I/71VPbZh054L._AC_SL1500_.jpg',
    rating: 5.0,
    likes: 0,
    link: 'https://www.amazon.com/Fenlay-Advanced-smartwatch-Fitness-Compatible/dp/B09R4663TN/ref=sr_1_2_sspa?crid=3TJVKPPNE8BOL&keywords=smartwatch&qid=1647022193&sprefix=smartwatch%2Caps%2C293&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTk5CSUZOVUtQREtOJmVuY3J5cHRlZElkPUEwOTg2NjMxM01PVUpOS0hKREkwViZlbmNyeXB0ZWRBZElkPUEwMDcwOTgyMlM1TUFQMjdXM1oyTiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
  },
  {
    id: 8,
    categoryName: 'Smartwatches',
    name: 'Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)',
    price: 199.9,
    description: 'Use amazon Alexa built in to get quick news and information, check the weather, set timers and alarms, control your smart home devices and more all through the sound of your voice (third party app may be required; amazon Alexa not available in all countries)\n' +
      'Based on your heart rate, time asleep and restlessness, sleep score helps you better understand your sleep quality each night; also track your time in light, deep and REM sleep stages and get personal insights\n' +
      'Control your Spotify app, download Pandora stations and add Deezer playlists (subscription required; Pandora is US only)\n' +
      'With a larger display and an always on option, your information’s always a quick glance away (always on display requires more frequent charging)\n' +
      'Track heart rate 24x7, steps, distance, calories burned, hourly activity, active minutes and floors climbed. Syncing range - up to 6.1 meters\n' +
      'Works around the clock with 6 plus day battery life (varies with use and other factors)\n' +
      'Get a call, text, calendar and smartphone app notifications when your phone is nearby; plus send quick replies and a voice replies on android only. Works with Bluetooth headphones & 200 plus leading iOS and Android devices.',
    image: 'https://m.media-amazon.com/images/I/610q610KVfL._AC_SL1500_.jpg',
    rating: 4.7,
    likes: 0,
    link: 'https://www.amazon.com/Fitbit-Fitness-Smartwatch-Tracking-Included/dp/B07TWFVDWT/ref=sr_1_4?crid=3TJVKPPNE8BOL&keywords=smartwatch&qid=1647022193&sprefix=smartwatch%2Caps%2C293&sr=8-4',
  },
  {
    id: 9,
    categoryName: 'Smartwatches',
    name: 'Samsung Electronics Galaxy Watch 4 40mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version, Black',
    price: 89.9,
    description: 'Get Ready To Crush Your Wellness Goals With Body Readings Right On Your Wrist\n' +
      'Better Sleep Starts Here: Wake Up Feeling Refreshed And Recharged With Advanced Sleep Tracking; When You Go To Bed, Your Galaxy Watch4 Sleep Tracker Starts Monitoring Your Sleep And Spo2 Levels Continuously\n' +
      'Be Smart About Your Heart: Take Care Of Your Heart With Accurate Ecg Monitoring And Keep An Eye On Possible Atrial Fibrillation, A Common Form Of Irregular Heart Rhythm; Share Personalized Readings With Your Doctor Using The Samsung Health Monitor App On Your Compatible Galaxy Phone\n' +
      'Make Every Workout Count: Get The Most Out Of Every Exercise Session With Advanced Workout Tracking That Recognizes 6 Popular Activities, From Running To Rowing To Swimming, Automatically In Just 3 Minutes; Stay Motivated By Connecting To Live Coaching Sessions Via Your Smartphone Or To Dynamic Group Challenges With Your Friends',
    image: 'https://m.media-amazon.com/images/I/61f2cmAiQoS._AC_SL1500_.jpg',
    rating: 4.8,
    likes: 0,
    link: 'https://www.amazon.com/Samsung-Electronics-Smartwatch-Detection-Bluetooth/dp/B096BJLZZM/ref=sr_1_5?crid=3TJVKPPNE8BOL&keywords=smartwatch&qid=1647022891&sprefix=smartwatch%2Caps%2C293&sr=8-5&th=1',
  },
  {
    id: 10,
    categoryName: 'Smartwatches',
    name: 'Garmin Venu 2 Plus, GPS Smartwatch with Call and Text, Advanced Health Monitoring and Fitness Features, Silver with Gray Band',
    price: 499.9,
    description: 'Suit your style with a smartwatch that’s available in three colors and features a bright, crisp AMOLED display\n' +
      'Enjoy the convenience of making and taking phone calls from your wrist when paired with your compatible smartphone\n' +
      'Use your compatible smartphone’s voice assistant to respond to text messages, ask questions, control compatible smart home devices and more\n' +
      'Know your body better with extensive health monitoring features, including the Health Snapshot feature, Body Battery energy levels, sleep score and insights, fitness age, stress tracking and more (this device is intended to be an estimation of your activity and metrics; it is not a medical device)\n' +
      'Find new ways to keep your body moving with more than 25 built-in indoor and GPS sports apps, including walking, running, cycling, HIIT, swimming, golf and many more\n' +
      'Use preloaded workouts that include cardio, yoga, strength, HIIT and Pilates, create your own in the Garmin Connect app on your compatible smartphone, or try Garmin Coach free adaptive training plans to help you prepare for your next running challenge\n' +
      'Download up to 650 songs to your watch, including playlists from Spotify, Amazon Music or Deezer (may require a premium subscription) and connect with your wireless headphones for phone-free listening',
    image: 'https://m.media-amazon.com/images/I/61ihJe-+lhL._AC_SL1500_.jpg',
    rating: 4.9,
    likes: 0,
    link: 'https://www.amazon.com/Garmin-Smartwatch-Advanced-Monitoring-Features/dp/B099X8RSWN/ref=sr_1_6?crid=3TJVKPPNE8BOL&keywords=smartwatch&qid=1647022891&sprefix=smartwatch%2Caps%2C293&sr=8-6&th=1',
  },



  {
    id: 11,
    categoryName: 'Tablets',
    name: 'Fire 7 tablet, 7" display, 16 GB, latest model, Black',
    price: 99.9,
    description: 'The ad-supported option (also known as Special Offers or Lockscreen Ads) displays sponsored screensavers on your device\'s lockscreen. Learn more\n' +
      '7" IPS display; 16 or 32 GB of internal storage (add up to 512 GB with microSD)\n' +
      'Faster 1.3 GHz quad-core processor\n' +
      'Up to 7 hours of reading, browsing the web, watching video, and listening to music\n' +
      'Hands-free with Alexa, including on/off toggle\n' +
      '1 GB of RAM\n' +
      '2 MP front and rear-facing cameras with 720p HD video recording\n' +
      'Stay on track – Check email, make video calls, update shopping lists, and set reminders. Use your favorite apps like Zoom, Outlook, and OneNote\n' +
      '90-day limited warranty\n' +
      'Enjoy your favorite apps like Netflix, Facebook, Hulu, Instagram, TikTok, and more through Amazon’s Appstore (Google Play not supported)',
    image: 'https://m.media-amazon.com/images/I/71POuqajw1L._AC_SL1500_.jpg',
    rating: 4.9,
    likes: 0,
    link: 'https://www.amazon.com/Fire-Tablet-7/dp/B07FKR6KXF/ref=sr_1_1_sspa?crid=2RHIXSL604ZMV&keywords=tablets&qid=1647023041&sprefix=tablets%2Caps%2C293&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQURaUzIzS1NEVllIJmVuY3J5cHRlZElkPUEwNDAwNjIyMTg4MVJaWkpWUUFCUyZlbmNyeXB0ZWRBZElkPUEwNzM3MTY2V1dKWFlYRzZJUkcmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
  },
  {
    id: 12,
    categoryName: 'Tablets',
    name: 'Fire HD 10 tablet, 10.1", 1080p Full HD, 64 GB, latest model (2021 release), Black, without lockscreen ads',
    price: 89.9,
    description: 'Fast and responsive - powerful octa-core processor and 3 GB RAM. 50% more RAM than previous generation.\n' +
      'Long-lasting 12-hour battery and 32 or 64 GB internal storage. Add up to 1 TB with microSD (sold separately).\n' +
      'Brighter display - Vivid 10.1" 1080p Full HD display is 10% brighter than previous generation, with more than 2 million pixels.\n' +
      'Enjoy your favorite apps like Netflix, Facebook, Hulu, Instagram, TikTok, and more through Amazon’s Appstore (Google Play not supported. Subscription for some apps required).\n' +
      'Stay connected - Download apps like Zoom, or ask Alexa to make video calls to friends and family.\n' +
      'Get more done – Check email, update shopping lists, and set reminders. Use your favorite apps like Microsoft Office, OneNote, and Dropbox.\n' +
      'Hands-free with Alexa, including on/off toggle.',
    image: 'https://m.media-amazon.com/images/I/61uE03cRsyS._AC_SL1000_.jpg',
    rating: 4.7,
    likes: 0,
    link: 'https://www.amazon.com/Fire-HD-10-tablet/dp/B08F6HDRWN/ref=sr_1_2_sspa?crid=2RHIXSL604ZMV&keywords=tablets&qid=1647023245&sprefix=tablets%2Caps%2C293&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFPWVdJQUNSNzlLSjImZW5jcnlwdGVkSWQ9QTA5NDUyMzUySTdUUTMxTFBVN1VXJmVuY3J5cHRlZEFkSWQ9QTA3NzI5MTYySTZFMkZYMjAzTVVOJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
  },
  {
    id: 13,
    categoryName: 'Tablets',
    name: 'Tablet 10.1 Inch Android 10 32GB 6000mAh Battery Quad Core HD Touchscreen Tablets',
    price: 89.9,
    description: '✅【Best Entry-level Tablet】 Our Tablet is equipped with a highly integrated A133 application processor, 2 GB RAM, 32 GB ROM, quad-core processor, dual cameras, dual speakers.\n' +
      '✅【All-new 10.1" HD Touchscreen】 Vivid 10.1-inch tablet, 1280*800 IPS HD touchscreen, 323 PPI resolution, 178 degree wide viewing angle, bright display with more vibrant colors, superb picture quality. Supports wireless projection and is equipped with dual cameras & dual speakers. Gives you an outstanding audiovisual experience.\n' +
      '✅【Full Google Service Access】 The 10" tablet is equipped with the latest version of the GMS-certified Android 10.0 operating system, which is more secure and faster than Android 9.0, and has an ad-blocking function. Enjoy full access to Google services and apps, such as Gmail, Youtube, Google Drive, Maps, Play Store, etc.\n' +
      '✅【Incredible Storage】 Thanks to the internal 32GB of high speed built-in memory (expandable up to 128GB with microSD), you can download your favorite books, songs, photos or movies. Running on a 64-bit Quad-Core CPU, 2GB RAM, the tablet will provides strong performance ensuring smooth web browsing and video playback.\n' +
      '✅【Long-lasting 6000mAh Battery】 The 6000mAh built-in rechargeable battery and low-power CPU enhance your experience, enabling 4-8 hours of mixed-use on the go. Perfect for long-distance commuting and travel, reading, watching movies & TV, listening to music and more. Note: Battery life will vary based on device settings and app usage.',
    image: 'https://m.media-amazon.com/images/I/61Uxn7OGnmL._AC_SL1500_.jpg',
    rating: 4.9,
    likes: 0,
    link: 'https://www.amazon.com/Android-6000mAh-Battery-Touchscreen-Tablets/dp/B09C5MJYTG/ref=sr_1_3?crid=2RHIXSL604ZMV&keywords=tablets&qid=1647023245&sprefix=tablets%2Caps%2C293&sr=8-3&th=1',
  },
  {
    id: 14,
    categoryName: 'Tablets',
    name: 'Samsung Electronics Galaxy Tab A8 Android Tablet, 10.5” LCD Screen, 32GB Storage, Long-Lasting Battery, Samsung Electronics Kids Content, Smart Switch, Expandable Memory, Dark Gray',
    price: 199.9,
    description: 'A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends, the Galaxy Tab A8 tablet brings out the best in every moment on a 10.5" LCD screen\n' +
      'Power and Storage for All: Get the power, storage and speed your family needs with an upgraded chipset and plenty of room to keep files — up to 128GB of storage; A long-lasting battery lets you go unplugged for hours to keep the family fun going\n' +
      'Charge Fast, Power for Hours: Go for hours on a single charge* and back to 100% with the fast charging USB C port; *Battery life may vary depending on network environment, usage patterns and other factors\n' +
      'Galaxy Ecosystem Experience: Open up a new world of convenient possibilities with the Galaxy ecosystem experience — your devices, including your phone, laptop computer, and tablet, all automatically talk to one another seamlessly\n' +
      'Your Notes, All in One Place: Do more with your notes with Galaxy connectivity that automatically syncs everything from to-do lists to school work, whether you’re on your tablet, phone or watch\n' +
      'Kids Digital Learning: Children can enjoy access to Samsung Kids, a library of safe and fun games, books and videos that are kid friendly and parent approved\n' +
      'Easiest. Transfer. Ever: No matter what operating system you\'re using, Smart Switch makes it a breeze to move your data and favorite files in three easy steps',
    image: 'https://m.media-amazon.com/images/I/61krikJxTmL._AC_SL1200_.jpg',
    rating: 4.7,
    likes: 0,
    link: 'https://www.amazon.com/Samsung-Electronics-Android-Long-Lasting-Expandable/dp/B09N41RC6L/ref=sr_1_5?crid=2RHIXSL604ZMV&keywords=tablets&qid=1647023245&sprefix=tablets%2Caps%2C293&sr=8-5&th=1',
  },
  {
    id: 15,
    categoryName: 'Tablets',
    name: 'Lenovo Tab M8 Tablet, HD Android Tablet, Quad-Core Processor, 2GHz, 32GB Storage, Full Metal Cover, Long Battery Life, Android 9 Pie, Slate Black',
    price: 69.9,
    description: 'Stunning performance and stylish design combine in this quick, powerful Android tablet, powered by a Quad-Core, 2.0 GHz processor and Android 9 Pie\n' +
      'The modern, refined look and feel are accentuated by the full metal cover and 82% panel-to-body ratio\n' +
      'The stunning 8" HD (1280 x 800) display brings you a crisper and brighter image, so you can watch your favorite movies and shows without missing a detail\n' +
      'Stay connected with built-in Bluetooth 5.0 and Wi-Fi 802.11 a/b/g/n/ac (2.4/5 GHz), and capture the moment with front and rear cameras\n' +
      'Long-life battery – Watch or browse all day long without the need to recharge with 5000 mAh battery capacity',
    image: 'https://m.media-amazon.com/images/I/61o0EbhjKDL._AC_SL1500_.jpg',
    rating: 4.9,
    likes: 0,
    link: 'https://www.amazon.com/Lenovo-Android-Quad-Core-Proocessor-ZA5G0060US/dp/B07Y2KBBTD/ref=sr_1_6?crid=2RHIXSL604ZMV&keywords=tablets&qid=1647023245&sprefix=tablets%2Caps%2C293&sr=8-6',
  },



  {
    id: 16,
    categoryName: 'Laptops',
    name: 'Acer Aspire 5 A515-46-R3UB | 15.6" Full HD IPS Display | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | FPR | Amazon Alexa | Windows 11 Home in S mode',
    price: 399.9,
    description: 'Powerful Productivity: AMD Ryzen 3 3350U delivers desktop-class performance and amazing battery life in a slim notebook. With Precision Boost, get up to 3.5GHz for your high-demand applications\n' +
      'Maximized Visuals: See even more on the stunning 15.6" Full HD display with 82.58% screen-to-body, 16:9 aspect ratio and narrow bezels\n' +
      'Backlit Keyboard and Fingerprint Reader: Biometric fingerprint reader and Windows Hello sign-in options help keep your Acer PC secure\n' +
      'Internal Specifications: 4GB DDR4 on-board memory (1 slot available); 128GB NVMe solid-state drive storage (1 hard drive bay available) to store your files and media\n' +
      'Acer\'s Purified.Voice technology, features enhanced digital signal processing to cancel out background noise, improve speech accuracy and far-field pickup, which not only makes calls clearer, but makes talking to Alexa easier than before.\n' +
      'With Alexa Show Mode, you can use your PC as a full-screen interactive experience that features rich visuals and lets you talk to Alexa from across the room.\n' +
      'Secure Operating System: Windows 11 Home in S mode comes with advanced security features built right in, like protections against phishing and malicious software so you don\'t have to think twice when navigating to a new webpage or downloading an app',
    image: 'https://m.media-amazon.com/images/I/7189iXimfWL._AC_SL1500_.jpg',
    rating: 4.9,
    likes: 0,
    link: 'https://www.amazon.com/Acer-A515-46-R3UB-Display-Quad-Core-Processor/dp/B09HVC79PC/ref=sr_1_3?crid=3OVOW8MQ6YZLU&keywords=laptops&qid=1647023544&s=pc&sprefix=Laptops%2Ccomputers%2C236&sr=1-3&th=1',
  },
  {
    id: 17,
    categoryName: 'Laptops',
    name: 'HP Pavilion 15 Laptop, 11th Gen Intel Core i7-1165G7 Processor, 16 GB RAM, 512 GB SSD Storage, Full HD IPS Micro-Edge Display, Windows 11 Pro, Compact Design, Long Battery Life (15-eg0025nr, 2021)',
    price: 799.9,
    description: 'INSTANT GRATIFICATION – Experience a laptop with premium performance, so you can spend less time getting more done; it’s like a small PC that’s compact enough to go where you go with a long-lasting battery to power you through your day\n' +
      'EPIC ENTERTAINMENT – With audio by B&O, a larger screen-to-body ratio, and a 15.6-inch Full HD micro-edged screen to maximize your view, entertainment on your laptop feels like bringing the theater home (1)\n' +
      'IMPRESSIVE GRAPHICS – The Intel Iris Xe Graphics gives you a new level of graphics performance with crisp, stunning visuals, plus the convenience of a thin and light laptop (2)\n' +
      'UNSTOPPABLE PERFORMANCE – Get things done fast with the 11th Generation Intel Core i7-1165G7 processor, which delivers instant responsiveness and best-in-class connectivity (3)\n' +
      'MEMORY AND STORAGE – Enjoy up to 15x faster performance than a traditional hard drive with 512 GB PCIe NVMe M.2 SSD storage (4) and experience improved multitasking with higher bandwidth thanks to 16 GB of RAM\n' +
      'WORK ON THE GO – Get work done on the go with a long battery life of up to 8 hours (5) while HP Fast Charge lets you go from 0 to 50% charge in approximately 45 minutes (6)\n' +
      'OS AND WARRANTY – Do more with better peace of mind thanks to the HP 1-year limited hardware warranty and the seamlessly integrated Windows 10 Pro operating system (7); get ready for the Windows 11 upgrade, coming soon and at no additional cost (8)',
    image: 'https://m.media-amazon.com/images/I/711Nx6ZoRML._AC_SL1500_.jpg',
    rating: 4.9,
    likes: 0,
    link: 'https://www.amazon.com/HP-i7-1165G7-Processor-Micro-Edge-15-eg0025nr/dp/B09FX1YF28/ref=sr_1_4?crid=3OVOW8MQ6YZLU&keywords=laptops&qid=1647023544&s=pc&sprefix=Laptops%2Ccomputers%2C236&sr=1-4',
  },
  {
    id: 18,
    categoryName: 'Laptops',
    name: 'HP 15-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (15-dy2024nr, Natural silver)',
    price: 999.9,
    description: 'TAKE IT ANYWHERE – With its thin and light design, 6.5 millimeter micro-edge bezel display, and 82% screen to body ratio, you can take this PC anywhere and see more of what you love (1).\n' +
      'REVOLUTIONARY ENTERTAINMENT – Enjoy ultra-wide viewing angles and seamlessly perform multi-monitor set-ups with a 15.6-inch, Full HD, IPS, micro-edge, and anti-glare display (2).\n' +
      'IMPESSIVE GRAPHICS – The Intel Iris Xe Graphics gives you a new level of performance with crisp, stunning visuals, plus the convenience of a thin and light laptop (3).\n' +
      'UNSTOPPABLE PERFORMANCE – Get things done fast with the 11th Generation Intel Core i5-1135G7 processor, which delivers instant responsiveness and best-in-class connectivity (4).\n' +
      'MEMORY AND STORAGE – Get up to 15x faster performance than a traditional hard drive with 256 GB PCIe NVMe M.2 SSD storage and experience improved multitasking with higher bandwidth thanks to 8 GB of RAM (5).\n' +
      'WORK ON THE GO – Get work done on the go with a long battery life of up to 7 hours and 15 minutes (6), while HP Fast Charge lets you go from 0 to 50% charge in approximately 45 minutes (7).\n' +
      'OS AND WARRANTY – Do more with greater peace of mind thanks to the familiar feel of the Windows 11 Home operating system and the HP 1-year limited hardware warranty (8).',
    image: 'https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_SL1500_.jpg',
    rating: 4.9,
    likes: 0,
    link: 'https://www.amazon.com/HP-Generation-i5-1135G7-Graphics-15-dy2024nr/dp/B09FXFDGN3/ref=sr_1_5?crid=3OVOW8MQ6YZLU&keywords=laptops&qid=1647023544&s=pc&sprefix=Laptops%2Ccomputers%2C236&sr=1-5&th=1',
  },
  {
    id: 19,
    categoryName: 'Laptops',
    name: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold',
    price: 1199.9,
    description: 'All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.\n' +
      'Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.\n' +
      'Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.\n' +
      'Stunning Display – With a 13.3” Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.\n' +
      'Why Mac – Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use right out of the box. Mac is designed to let you work, play, and create like never before.\n' +
      'Simply Compatible – All your existing apps work, including Adobe Creative Cloud, Microsoft 365, and Google Drive. Plus you can use your favorite iPhone and iPad apps directly on macOS. Altogether you’ll have access to the biggest collection of apps ever for Mac. All available on the App Store.\n' +
      'Easy to Learn – If you already have an iPhone, MacBook Air feels familiar from the moment you turn it on. And it works perfectly with all your Apple devices. Use your iPad to extend the workspace of your Mac, answer texts and phone calls directly on your Mac, and more.',
    image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg',
    rating: 5.0,
    likes: 0,
    link: 'https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5M7S6K/ref=sr_1_1?keywords=macbook&qid=1647023721&s=pc&sprefix=mac%2Ccomputers%2C227&sr=1-1',
  },
  {
    id: 20,
    categoryName: 'Laptops',
    name: '2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Silver',
    price: 2299.9,
    description: 'Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance\n' +
      'Up to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever\n' +
      'Up to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games\n' +
      '16-core Neural Engine for up to 11x faster machine learning performance\n' +
      'Longer battery life, up to 17 hours\n' +
      'Up to 64GB of unified memory so everything you do is fast and fluid\n' +
      'Up to 8TB of superfast SSD storage launches apps and opens files in an instant',
    image: 'https://m.media-amazon.com/images/I/61cCf94xIEL._AC_SL1500_.jpg',
    rating: 5.0,
    likes: 0,
    link: 'https://www.amazon.com/Apple-MacBook-14-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQWSQK7/ref=sr_1_3?keywords=macbook&qid=1647023721&s=pc&sprefix=mac%2Ccomputers%2C227&sr=1-3',
  },
];
