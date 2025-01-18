import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { PiGraduationCapThin } from "react-icons/pi";

function ItemBoxImg({ img, title, desc, job, linkedin, scholar }) {
   return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
         <img
            className="w-full h-64 object-cover"
            src={
               img ||
               "https://img.freepik.com/free-photo/happy-successful-man-clenches-fists-yells-from-happiness-celebrates-triumph_273609-18626.jpg"
            }
            alt={title}
         />

         <div className="text-center p-5">
            <p className="text-xl font-semibold text-gray-800">{title}</p>
            <p className="text-gray-600 text-sm">{desc}</p>
            {job && <p className="my-3 text-sm text-blue-600">{job}</p>}
            <div className="flex justify-center items-center gap-3 my-2">
               {linkedin && (
                  <a
                     href={linkedin}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-600 text-2xl hover:text-blue-900 hover:text-3xl"
                     aria-label="LinkedIn"
                  >
                     <FaLinkedin />
                  </a>
               )}
               {scholar && (
                  <a
                     href={scholar}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-600 text-2xl hover:text-gray-900 hover:text-3xl"
                     aria-label="Google Scholar"
                  >
                     <PiGraduationCapThin />

                  </a>
               )}
            </div>
         </div>
      </div>
   );
}

const users = [
   {
      title: "دکتر اعظم امین",
      job: "",
      img: "/img/user1.jpg",
      desc: (
         <span>
               عضو هیئت هوش مصنوعی بنیادملی نخبگان و مرکز تحقیقات هوش مصنوعی در پزشکی     
         </span>
      ),
      linkedin: "https://www.linkedin.com/in/azam-amin-abshouri-85bb43194/",
      scholar: "https://scholar.google.com/citations?user=O-jewBYAAAAJ&hl=id",
   },
   {
      title: "پروفسور بهروز مینایی",
      job: "",
      img: "/img/user2.jpg",
      desc: "رییس ستاد هوش مصنوعی",
      linkedin: "https://www.linkedin.com/in/behrouz-minaei-bidgoli-58770227/",
      scholar: "https://scholar.google.com/citations?user=M8tgU-wAAAAJ&hl=en",
   },
   {
      title: " دکتر سید علی حسینی",
      job: "",
      img: "/img/user3.jpg",
      desc: "مدیر آزمایشگاه داده کاوی",
   },
   {
      title: "دکتر نجمه ترابیان",
      job: "",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVoU6CsTAIbWjS3Ne8wuDttMvS4-1WPCiTBi-PveIUh7K_koDSgu5wBJR4ICTih7oZSU&usqp=CAU",
      desc: "مدیر آزمایشگاه داده کاوی",
      scholar: "https://scholar.google.com/citations?user=5wryiGgAAAAJ&hl=en",
   },
];

export default function PerconHelsa() {
   return (
      <div className="bg-blueGray-100 mt-44 text-gray-800 pb-20 p-5 md:p-0">
         <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
            {users.map((item, index) => (
               <ItemBoxImg key={index} {...item} />
            ))}
         </div>
      </div>
   );
}
