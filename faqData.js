const faqData = [
  { question: "What should I look for when buying a laptop?", answer: "Consider processor, RAM, storage, screen size, battery life, and budget." },
  { question: "Which is better: SSD or HDD?", answer: "SSDs are faster and more reliable, while HDDs are cheaper and offer more storage." },
  { question: "How much RAM do I need?", answer: "8GB is sufficient for most users. Opt for 16GB+ for gaming or heavy multitasking." },
  { question: "Is a dedicated GPU necessary?", answer: "Yes for gaming and content creation. Not necessary for basic tasks like browsing." },
  { question: "What screen size is ideal for portability?", answer: "13–14 inches strikes a good balance between portability and usability." },
  { question: "Should I choose Intel or AMD processors?", answer: "Both are good. AMD often provides better value, Intel is known for stability." },
  { question: "Is macOS or Windows better?", answer: "Depends on preference. macOS is seamless and secure; Windows is flexible and widely compatible." },
  { question: "What is the best laptop brand?", answer: "Popular and reliable brands include Dell, HP, Lenovo, ASUS, Acer, and Apple." },
  { question: "What is a 2-in-1 laptop?", answer: "A laptop that can also function as a tablet, typically with a touchscreen and foldable or detachable keyboard." },
  { question: "How long should a laptop battery last?", answer: "6–8 hours is average. Ultrabooks may offer 10+ hours." },
  { question: "Are Chromebooks good?", answer: "Yes, for light users focused on web apps. Not ideal for gaming or software development." },
  { question: "What is an ultrabook?", answer: "A slim, lightweight laptop with strong battery life and SSD storage, like the Dell XPS 13 or MacBook Air." },
  { question: "Do I need antivirus software?", answer: "Windows 10/11 includes Defender, which is good enough. Extra antivirus can add more protection." },
  { question: "What ports should I look for?", answer: "At least 2 USB ports, HDMI, and USB-C are useful. SD card readers are helpful for photographers." },
  { question: "Is Linux good for laptops?", answer: "Yes, especially for developers or privacy-focused users. Compatibility may vary with hardware." },
  { question: "How often should I clean my laptop?", answer: "Every few months. Keep the keyboard, screen, and vents dust-free." },
  { question: "How can I speed up a slow laptop?", answer: "Upgrade to SSD, add RAM, clean junk files, and limit startup programs." },
  { question: "What is refresh rate on a laptop display?", answer: "It’s how many times per second the screen updates. 60Hz is standard, 120Hz+ is better for gaming." },
  { question: "Do gaming laptops overheat?", answer: "They can, especially under load. Cooling pads and regular cleaning help manage temps." },
  { question: "Should I buy refurbished laptops?", answer: "Yes, if from a trusted source with warranty. Great value for money." },
  { question: "What is the difference between i5 and i7 processors?", answer: "i7s are faster and better for multitasking, while i5s offer a balance of price and performance." },
  { question: "What is Thunderbolt 4?", answer: "A high-speed USB-C connector that supports fast data, video, and power delivery." },
  { question: "What’s the difference between DDR4 and DDR5 RAM?", answer: "DDR5 is newer and faster, but DDR4 is still very common and cost-effective." },
  { question: "Can laptops run without a battery?", answer: "Yes, when plugged in. But performance may be limited without a battery in some models." },
  { question: "Is 256GB SSD enough?", answer: "Yes for most users. Add cloud or external storage for extra space." },
  { question: "Should I prioritize CPU or RAM?", answer: "Balance both. RAM helps multitasking; CPU handles processing power." },
  { question: "Do I need a backlit keyboard?", answer: "Not necessary, but useful for typing in low light." },
  { question: "Can I upgrade a laptop later?", answer: "Depends on the model. RAM and storage are most commonly upgradable." },
  { question: "How long do laptops usually last?", answer: "Average 3–5 years, longer if well maintained." },
  { question: "Is touchscreen necessary on a laptop?", answer: "Not required, but handy for navigation and drawing on 2-in-1s." },
  { question: "What resolution is best?", answer: "1080p is standard. 2K/4K screens are better for creatives but reduce battery life." },
  { question: "Do laptops come with MS Office?", answer: "Some do, but most require separate purchase or subscription." },
  { question: "Should I buy a laptop or desktop?", answer: "Laptops offer portability, desktops are better for performance per dollar." },
  { question: "Can I play games on a laptop?", answer: "Yes, if it has a good GPU and cooling system." },
  { question: "What's a good budget for a decent laptop?", answer: "$600–$900 for a balanced mid-range machine." },
  { question: "How do I maintain battery health?", answer: "Avoid deep discharges, use balanced charging, and keep it cool." },
  { question: "Should students buy gaming laptops?", answer: "Only if they game. Otherwise, ultrabooks are more portable and efficient." },
  { question: "What’s the difference between business and consumer laptops?", answer: "Business laptops are durable, secure, and built for productivity." },
  { question: "What is hybrid storage?", answer: "A combination of SSD (for speed) and HDD (for capacity)." },
  { question: "Why are MacBooks expensive?", answer: "Premium build, display, macOS integration, and brand reputation." },
  { question: "Are Ryzen laptops good?", answer: "Yes, AMD Ryzen offers excellent performance and value." },
  { question: "What is a fanless laptop?", answer: "It has no internal fans. These are silent but may throttle under load." },
  { question: "Should I buy an extended warranty?", answer: "Depends on usage. Worth it for expensive laptops or business users." },
  { question: "Can I use a laptop for coding?", answer: "Yes. Prioritize RAM (8GB+) and a good CPU." },
  { question: "What is a convertible laptop?", answer: "A laptop that flips or folds to become a tablet." },
  { question: "Do I need a 4K screen?", answer: "Only if you do photo/video editing. 1080p is fine for general use." },
  { question: "Can I charge my laptop with USB-C?", answer: "Yes, if your laptop supports USB-C PD charging." },
  { question: "How to protect data on a laptop?", answer: "Use strong passwords, enable encryption, and back up regularly." },
  { question: "What’s a good laptop for video editing?", answer: "At least 16GB RAM, fast CPU, dedicated GPU, and SSD storage." },
  { question: "Are all laptops upgradeable?", answer: "No, many ultrabooks have soldered components. Check specs before buying." },
  { question: "How do I choose a laptop for online classes?", answer: "Look for a webcam, mic, good battery, and lightweight build." },
  { question: "Can I run Photoshop on a laptop?", answer: "Yes. Aim for 16GB RAM, i5/Ryzen 5 or better, and SSD." },
  { question: "Is cooling important in laptops?", answer: "Yes, especially for gaming or heavy multitasking." },
  { question: "How do I know if a laptop is fast?", answer: "Look at CPU model, SSD storage, and RAM size." },
  { question: "Can I add graphics card to laptop?", answer: "Usually no, but some support external GPUs (eGPUs)." },
  { question: "What is Wi-Fi 6?", answer: "The latest Wi-Fi standard offering better speed and lower latency." },
  { question: "How do I check laptop specs?", answer: "Go to 'System Info' on Windows or 'About This Mac' on macOS." },
  { question: "Can I connect two monitors to a laptop?", answer: "Yes, if it supports multiple display outputs (HDMI/USB-C/DisplayPort)." },
  { question: "Is weight important?", answer: "Yes, especially for travel. Under 1.5kg is ideal for portability." },
  { question: "How can I extend battery life?", answer: "Lower brightness, disable background apps, and use power-saving mode." },
  { question: "What is TPM in laptops?", answer: "Trusted Platform Module for hardware-based security (required for Windows 11)." },
  { question: "Are touchscreens more fragile?", answer: "Slightly. Use screen protectors and handle with care." },
  { question: "What’s a good laptop for kids?", answer: "Durable laptops with parental controls and spill-resistant keyboards." },
  { question: "Is storage speed important?", answer: "Yes. SSDs provide fast boot and load times." },
  { question: "Can I dual-boot on a laptop?", answer: "Yes, you can install Windows + Linux on separate partitions." },
  { question: "Do laptops need cooling pads?", answer: "Not mandatory, but useful for gaming or old laptops." },
  { question: "Can I game on integrated graphics?", answer: "Yes, but only for light or older games." },
  { question: "How to secure a laptop while traveling?", answer: "Use locks, carry in a padded case, and never leave it unattended." },
  { question: "Are plastic laptops less durable?", answer: "Usually yes, compared to aluminum builds. But they’re lighter and cheaper." },
  { question: "How do I connect a printer?", answer: "Via USB or Wi-Fi. Install drivers from the printer manufacturer." },
  { question: "What’s the difference between IPS and TN displays?", answer: "IPS has better colors and viewing angles. TN is cheaper and faster for gaming." },
  { question: "Can I use a laptop as a desktop?", answer: "Yes, by connecting an external monitor, keyboard, and mouse." },
  { question: "What is RAM frequency?", answer: "The speed at which RAM operates (e.g., 3200 MHz). Higher is better but limited by CPU support." },
  { question: "How often should I update drivers?", answer: "Check every few months or when facing performance issues." },
  { question: "Is there a difference between business and gaming laptops?", answer: "Yes, gaming laptops focus on performance and graphics, business laptops prioritize durability and security." },
  { question: "Do laptops support Bluetooth?", answer: "Most modern laptops do. You can check in device settings." },
  { question: "How to connect to external display?", answer: "Use HDMI, DisplayPort, or USB-C. Configure in display settings." },
  { question: "Can laptops charge phones?", answer: "Yes, via USB. Some support charging even when turned off." },
  { question: "Is BIOS update necessary?", answer: "Only if recommended by the manufacturer or facing compatibility issues." },
  { question: "Are mini laptops worth it?", answer: "Yes for note-taking and web use, but limited performance." },
  { question: "Can I use laptop for music production?", answer: "Yes. Prioritize CPU, RAM, SSD, and audio interface compatibility." },
  { question: "What's a rugged laptop?", answer: "A laptop designed to withstand harsh environments like dust, shock, and water." },
  { question: "How do I increase FPS in games?", answer: "Lower graphics settings, close background apps, update drivers." },
  { question: "Should I defragment an SSD?", answer: "No. SSDs don’t need defragmentation and doing so reduces lifespan." },
  { question: "Can I install Windows on a MacBook?", answer: "Yes, using Boot Camp or virtualization software like Parallels." },
  { question: "Are expensive laptops always better?", answer: "Not necessarily. Match the specs to your actual needs." },
  { question: "Do laptops support facial recognition?", answer: "Some do, using Windows Hello and compatible webcams." },
  { question: "What is overclocking?", answer: "Running CPU/GPU at higher speed than rated. Risky for laptops due to heat." },
  { question: "What is NVMe SSD?", answer: "A faster type of SSD that uses PCIe interface for high-speed performance." },
];

export default faqData;
