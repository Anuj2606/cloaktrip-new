import Image from "next/image";
import { Mail} from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">

      <div className="bg-[#3C3C3C] rounded-[37px] w-[1325px] sm:h-[717px] h-[750px] shadow-2xl overflow-hidden p-4">
        
        <div className="flex h-full w-full gap-4">

          <div className="hidden sm:block sm:relative w-[380px] h-full rounded-[20px] overflow-hidden">
            <Image
              src="/contactUs.jpg"
              alt="Left Image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-30" />
          </div>

          <div className="relative flex-1 h-full rounded-[37px] overflow-hidden">
            <Image
              src="/contactUsright.jpg"
              alt="Right Image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#3C3C3C]/90" />

            <div className="absolute inset-0 flex flex-col justify-between text-white p-6">
              <div className="text-center">
                <h2
                  className={`${montserrat.className} text-[30px] font-semibold`}
                >
                  Contact Us
                </h2>
                <p
                  className={`${montserrat.className} text-[15px] text-[#FFFFFF99] mt-1`}
                >
                  Reach out and we will get in touch within 24 hours.
                </p>
              </div>

              
              <form className="space-y-4">
                
                <div className="flex flex-col sm:flex-row gap-4">
                  
                  <div className="flex flex-col flex-1 gap-1">
                    <p
                      className={`${montserrat.className} text-[15px] text-[#FFFFFF99]`}
                    >
                      First Name
                    </p>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div className="flex flex-col flex-1 gap-1">
                    <p
                      className={`${montserrat.className} text-[15px] text-[#FFFFFF99]`}
                    >
                      Last Name
                    </p>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <p
                    className={`${montserrat.className} text-[15px] text-[#FFFFFF99]`}
                  >
                    Email
                  </p>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <p
                    className={`${montserrat.className} text-[15px] text-[#FFFFFF99]`}
                  >
                    Message
                  </p>
                  <textarea
                    placeholder="Leave us a message..."
                    rows={4}
                    className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-300 transition cursor-pointer"
                >
                  Send Message
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-gray-400 mb-2 text-[15px]">
                  Reach out to us directly on
                </p>
                <div className="flex justify-center gap-4 flex-wrap text-sm">

                  <a href="https://wa.me/+917559319992">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition cursor-pointer">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.03638 0.975586C11.265 0.976496 13.3554 1.85336 14.9299 3.44922C16.5047 5.04553 17.3722 7.1666 17.3713 9.42578C17.3694 14.0869 13.6242 17.8699 9.03735 17.8701H9.03345L8.77271 17.8662C7.46903 17.8245 6.19354 17.4736 5.05298 16.8438L4.88599 16.751L4.70142 16.8008L0.826416 17.8291L1.86157 14.002L1.91333 13.8125L1.81567 13.6426C1.08603 12.3621 0.701792 10.9089 0.702393 9.41895C0.704294 4.75799 4.44906 0.975852 9.03638 0.975586ZM9.04028 1.53125C4.73368 1.53125 1.24137 5.07482 1.2395 9.41895C1.2389 10.9077 1.65079 12.3589 2.43091 13.6152L2.49536 13.7197L1.80981 16.2568L1.59497 17.0518L2.39087 16.8398L4.96802 16.1553L5.06274 16.2129C6.26078 16.9326 7.63372 17.3138 9.03345 17.3145H9.03735C13.3409 17.3142 16.8324 13.77 16.8342 9.42578C16.835 7.32082 16.0257 5.33753 14.5549 3.84668C13.1757 2.44869 11.3667 1.63755 9.42896 1.54102L9.04028 1.53125ZM5.91821 5.77539C6.06342 5.77539 6.20015 5.77643 6.31567 5.78223C6.32846 5.78288 6.3412 5.78206 6.35278 5.78223C6.36406 5.80252 6.37929 5.83106 6.39575 5.87109C6.48704 6.0932 6.6419 6.47652 6.78247 6.82227C6.91637 7.1516 7.04972 7.47973 7.08716 7.55566H7.08813L7.08911 7.55762C7.01959 7.69956 7.00874 7.7307 6.94946 7.80078C6.80944 7.96644 6.72736 8.07977 6.64478 8.16309C6.60189 8.20632 6.46557 8.33458 6.39771 8.51953C6.31373 8.7485 6.354 8.98117 6.47388 9.18945C6.60999 9.42604 7.08098 10.2081 7.79126 10.8496C8.69338 11.6643 9.49164 11.9384 9.66528 12.0264C9.80666 12.098 9.99658 12.1709 10.2112 12.1445C10.4451 12.1157 10.6082 11.9835 10.717 11.8574C10.8287 11.728 11.2011 11.2819 11.3948 11.0107C11.481 11.045 11.7626 11.1792 12.0852 11.3369C12.4067 11.4941 12.7304 11.6563 12.8381 11.7109C12.8966 11.7406 12.9518 11.7672 12.9944 11.7881C13.0064 11.794 13.0175 11.7997 13.0276 11.8047C13.0268 11.8258 13.0289 11.8497 13.0266 11.876C13.0139 12.0248 12.9768 12.2274 12.8987 12.4492C12.8609 12.5561 12.7078 12.7321 12.4348 12.9092C12.1726 13.0793 11.9118 13.1778 11.7903 13.1963C11.4511 13.2476 11.0519 13.2647 10.6204 13.126C10.3078 13.0255 9.91454 12.8933 9.4104 12.6729C7.34308 11.7691 5.97682 9.64443 5.84106 9.46094C5.79095 9.39323 5.58615 9.11694 5.3938 8.7334C5.1981 8.34313 5.0354 7.88043 5.0354 7.4375C5.03551 6.76228 5.28826 6.35751 5.49829 6.10449L5.68384 5.89746C5.78089 5.79033 5.88236 5.77539 5.91821 5.77539Z" fill="#FFD09A" stroke="#D3D3D3" strokeWidth="0.9504"/>
                      </svg>
                      WhatsApp
                  </button>
                  </a>

                  <a href="mailto:pratiklodge203@gmail.com">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition cursor-pointer">
                      <Mail size={18} /> Email
                    </button>
                  </a>

                  <a href="tel:+917559319992">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition cursor-pointer">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3034 5.99412C12.2829 6.15381 13.1727 6.60385 13.883 7.29344C14.5933 7.98302 15.0532 8.84682 15.2214 9.79772M11.453 2.87646C13.1951 3.16319 14.784 3.96528 16.0476 5.18838C17.3113 6.41512 18.1337 7.95761 18.4291 9.6489M17.0682 16.3778C17.0682 16.3778 16.1224 17.2815 15.8906 17.5464C15.513 17.9384 15.0681 18.1235 14.4849 18.1235C14.4288 18.1235 14.369 18.1235 14.3129 18.1199C13.2026 18.0509 12.1708 17.6299 11.3969 17.2706C9.28088 16.2762 7.42283 14.8643 5.87881 13.075C4.60398 11.5834 3.75159 10.2042 3.18707 8.72341C2.83939 7.81969 2.71228 7.11559 2.76836 6.45141C2.80574 6.02677 2.97398 5.67472 3.28428 5.37348L4.55911 4.13586C4.7423 3.96891 4.93671 3.87817 5.12737 3.87817C5.3629 3.87817 5.55356 4.01609 5.6732 4.13223C5.67693 4.13586 5.68067 4.13949 5.68441 4.14312C5.91246 4.34999 6.1293 4.56413 6.35735 4.79278C6.47324 4.90892 6.59287 5.02506 6.71251 5.14483L7.73312 6.13565C8.12941 6.52037 8.12941 6.87605 7.73312 7.26076C7.62471 7.36602 7.52003 7.47127 7.41161 7.57289C7.09757 7.88502 7.34427 7.64552 7.01902 7.92862C7.01154 7.93588 7.00406 7.93951 7.00032 7.94676C6.67881 8.25889 6.73863 8.56376 6.80592 8.77063C6.80966 8.78152 6.8134 8.79241 6.81714 8.8033C7.08257 9.42755 7.45642 10.0155 8.02468 10.716L8.02842 10.7196C9.06025 11.9536 10.1482 12.9154 11.3482 13.6522C11.5015 13.7465 11.6585 13.8227 11.8081 13.8953C11.9427 13.9607 12.0698 14.0224 12.1782 14.0877C12.1931 14.0949 12.2081 14.1058 12.223 14.1131C12.3502 14.1748 12.4698 14.2038 12.5932 14.2038C12.9035 14.2038 13.0979 14.0151 13.1614 13.9534L13.8942 13.242C14.0213 13.1186 14.2232 12.9698 14.4587 12.9698C14.6905 12.9698 14.8812 13.1113 14.9971 13.2347C15.0008 13.2384 15.0008 13.2384 15.0046 13.242L17.0645 15.2418C17.4496 15.612 17.0682 16.3778 17.0682 16.3778Z" stroke="#D3D3D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                      Call Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
