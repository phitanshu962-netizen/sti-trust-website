import React from 'react';

export default function AboutUsPage() {
  const title = 'ABOUT US';

  return (
    <div className="flex flex-col w-full bg-white p-6 md:p-10 shadow-sm border border-gray-200 min-h-[500px]">
      <div className="border-b-2 border-blue-900 pb-4 mb-6">
         <h1 className="text-2xl md:text-3xl font-extrabold text-[#244186] font-serif uppercase tracking-wider">
           {title}
         </h1>
      </div>
      
      <div className="text-gray-700 leading-relaxed font-medium space-y-6 text-justify">
        {/* English Section */}
        <div className="space-y-4">
          <p>
            <strong>Kaushal Education of Vocational and Skill Training Council</strong> is a forward-looking organization dedicated to transforming lives through high-quality vocational education and skill development. We are driven by a strong commitment to empower individuals with practical knowledge, industry-relevant competencies, and the confidence required to succeed in a rapidly evolving global economy.
          </p>
          <p>
            Our core mission is to bridge the critical gap between formal education and employability by offering structured, outcome-oriented training programs. We focus on equipping learners with hands-on skills that align with current industry standards, enabling them to become job-ready, self-reliant, and future-focused professionals.
          </p>
          <p>
            At Kaushal Education, we believe that skill development is not just an educational initiative, but a catalyst for socio-economic transformation. Through our diverse range of programs, we aim to uplift youth, women, and aspiring professionals by providing accessible, affordable, and career-driven training opportunities.
          </p>

          <h2 className="text-xl font-bold text-[#244186] mt-8 mb-3">Our Areas of Focus</h2>
          <p>We offer comprehensive training across multiple sectors, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Healthcare and Allied Services</strong> – Preparing individuals for essential roles in the healthcare ecosystem.</li>
            <li><strong>Management and Entrepreneurship</strong> – Building leadership, business acumen, and decision-making capabilities.</li>
            <li><strong>Technical and Vocational Trades</strong> – Delivering hands-on training in job-oriented technical skills.</li>
            <li><strong>Soft Skills and Employability Enhancement</strong> – Developing communication, personality, and workplace readiness.</li>
          </ul>
          <p>
            Each program is carefully designed to combine theoretical knowledge with practical exposure, ensuring that learners are well-prepared to meet real-world challenges.
          </p>

          <h2 className="text-xl font-bold text-[#244186] mt-8 mb-3">Our Approach</h2>
          <p>Our training model is built on three fundamental pillars:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Industry Alignment</strong> – Curriculum designed in consultation with industry experts to match market demands.</li>
            <li><strong>Practical Learning</strong> – Emphasis on hands-on training, workshops, and real-life simulations.</li>
            <li><strong>Quality Assurance</strong> – Standardized training, assessments, and certification processes to maintain credibility.</li>
          </ul>
          <p>
            We collaborate closely with training centres, educators, and industry professionals to deliver consistent, high-quality education and skill development solutions.
          </p>

          <h2 className="text-xl font-bold text-[#244186] mt-8 mb-3">Our Commitment</h2>
          <p>At Kaushal Education of Vocational and Skill Training Council, we are committed to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Empowering individuals with sustainable livelihood skills.</li>
            <li>Promoting lifelong learning and continuous upskilling.</li>
            <li>Supporting innovation, productivity, and economic development.</li>
            <li>Contributing to nation-building by developing a future-ready workforce.</li>
          </ul>
        </div>

        <hr className="my-10 border-gray-300" />

        {/* Marathi Section */}
        <div className="space-y-4">
          <p>
            <strong>कौशल एज्युकेशन ऑफ व्होकेशनल अँड स्ककल ट्रेननिंग कौस्सिल</strong> ही एक दूरदृष्टी असलेली संस्था आहे, जी उच्च दर्जाच्या व्यावसायिक शिक्षण आणि कौशल्य विकासाच्या माध्यमातून व्यक्तींच्या जीवनात सकारात्मक परिवर्तन घडविण्यास कटिबद्ध आहे. आम्ही व्यक्तींना व्यावहारिक ज्ञान, उद्योगानुरूप कौशल्ये आणि वेगाने बदलणाऱ्या जागतिक अर्थव्यवस्थेत यशस्वी होण्यासाठी आवश्यक आत्मविश्वास प्रदान करण्यासाठी समर्पित आहोत.
          </p>
          <p>
            आमचे मुख्य उद्दिष्ट म्हणजे औपचारिक शिक्षण आणि रोजगाराच्या संधी यांमधील दरी भरून काढणे. यासाठी आम्ही संरचित आणि परिणामाभिमुख प्रशिक्षण कार्यक्रम राबवितो. आमचे प्रशिक्षण कार्यक्रम उद्योगातील सध्याच्या गरजांशी सुसंगत असून, प्रशिक्षणार्थींना रोजगारक्षम, स्वावलंबी आणि भविष्याभिमुख बनविण्यावर आमचा भर असतो.
          </p>
          <p>
            कौशल एज्युकेशनमध्ये आम्ही मानतो की कौशल्य विकास हा केवळ शिक्षणाचा भाग नसून सामाजिक आणि आर्थिक परिवर्तनाचा एक प्रभावी मार्ग आहे. विविध प्रशिक्षण कार्यक्रमांच्या माध्यमातून आम्ही युवक, महिला आणि उद्योजक बनू इच्छिणाऱ्या व्यक्तींना सुलभ, परवडणारे आणि करिअर-केंद्रित शिक्षण उपलब्ध करून देतो.
          </p>

          <h2 className="text-xl font-bold text-[#244186] mt-8 mb-3">आमचे प्रमुख कायक्षेत्र (Our Areas of Focus)</h2>
          <p>आम्ही विविध क्षेत्रांमध्ये सर्वसमावेशक प्रशिक्षण प्रदान करतो:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>आरोग्य सेवा व संबंधित क्षेत्रे</strong> – आरोग्य व्यवस्थेमधील महत्त्वाच्या भूमिकांसाठी प्रशिक्षण.</li>
            <li><strong>व्यवस्थापन व उद्योजकता</strong> – नेतृत्वगुण, व्यवसाय कौशल्ये आणि निर्णयक्षमता विकसित करणे.</li>
            <li><strong>तांत्रिक व व्यावसायिक प्रशिक्षण</strong> – रोजगाराभिमुख तांत्रिक कौशल्यांवर आधारित प्रत्यक्ष प्रशिक्षण.</li>
            <li><strong>सॉफ्ट स्किल्स व रोजगारक्षमतेचा विकास</strong> – संवाद कौशल्य, व्यक्तिमत्त्व विकास आणि कार्यस्थळासाठी तयारी.</li>
          </ul>
          <p>
            प्रत्येक प्रशिक्षण कार्यक्रम सैद्धांतिक ज्ञान आणि प्रत्यक्ष अनुभव यांचा समतोल साधून तयार करण्यात आला आहे, ज्यामुळे प्रशिक्षणार्थी प्रत्यक्ष जीवनातील आव्हानांना समर्थपणे सामोरे जाऊ शकतात.
          </p>

          <h2 className="text-xl font-bold text-[#244186] mt-8 mb-3">आमचा दृष्टिकोन (Our Approach)</h2>
          <p>आमची प्रशिक्षण पद्धती खालील तीन मूलभूत तत्त्वांवर आधारित आहे:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>उद्योग सुसंगता (Industry Alignment)</strong> – उद्योग तज्ज्ञांच्या सल्ल्यानुसार अभ्यासक्रमाची रचना.</li>
            <li><strong>व्यावहारिक शिक्षण (Practical Learning)</strong> – प्रत्यक्ष प्रशिक्षण, कार्यशाळा आणि वास्तव परिस्थितीवर आधारित सराव.</li>
            <li><strong>गुणवत्ता हमी (Quality Assurance)</strong> – प्रमाणित प्रशिक्षण, मूल्यांकन आणि प्रमाणपत्र प्रक्रियेद्वारे गुणवत्ता टिकवून ठेवणे.</li>
          </ul>
          <p>
            आम्ही प्रशिक्षण केंद्रे, शिक्षणतज्ज्ञ आणि उद्योग क्षेत्रातील तज्ज्ञ यांच्यासोबत घनिष्ठ सहकार्य करून दर्जेदार आणि सातत्यपूर्ण कौशल्य विकास सेवा पुरवितो.
          </p>

          <h2 className="text-xl font-bold text-[#244186] mt-8 mb-3">आमची बांधिलकी (Our Commitment)</h2>
          <p>कौशल एज्युकेशन ऑफ व्होकेशनल अँड स्ककल ट्रेननिंग कौस्सिल येथे आम्ही खालील बाबींना कटिबद्ध आहोत:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>व्यक्तींना शाश्वत उपजीविकेसाठी आवश्यक कौशल्ये प्रदान करणे.</li>
            <li>आयुष्यभर शिक्षण आणि सातत्यपूर्ण कौशल्यविकासाला प्रोत्साहन देणे.</li>
            <li>नवोन्मेष, उत्पादकता आणि आर्थिक प्रगतीला समर्थन देणे.</li>
            <li>भविष्याभिमुख आणि सक्षम कार्यबल घडवून राष्ट्रनिर्मितीत योगदान देणे.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
