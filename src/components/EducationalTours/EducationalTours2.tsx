"use client";
import { motion } from "framer-motion";

const EducationalTours2 = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      };
    
      const staggerContainer = {
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      };
    
      const focusAreas = [
        { 
          icon: "🏥", 
          title: "Healthcare & Medical Tours", 
          description: "Visits to leading Malaysian hospitals, nursing schools, and medical research centers." 
        },
        { 
          icon: "⚙", 
          title: "Engineering and Technology", 
          description: "Factory visits, semiconductor labs, smart manufacturing plants, and robotics centers." 
        },
        { 
          icon: "🍴", 
          title: "Hospitality and Culinary", 
          description: "Learning from Malaysia's world-renowned hospitality industry and culinary schools." 
        },
        { 
          icon: "🏛", 
          title: "Cultural Immersion", 
          description: "Explorations of Malaysia's rich multicultural heritage across vibrant cities." 
        },
        { 
          icon: "🌱", 
          title: "Sustainability Programs", 
          description: "Environmental workshops, plantation visits, and eco-initiatives." 
        },
        { 
          icon: "🎓", 
          title: "University Collaborations", 
          description: "Structured academic partnerships with top Malaysian institutions." 
        }
      ];
    
   
    
    
    
   

  return (
    
    <>
   <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-center mb-12 text-[#EB7C19]"
            >
              Why Choose Comfort Vacanze for Edu Tourism
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Specialized educational programs aligned with academic objectives",
                "Direct exposure to industry leaders across key sectors",
                "End-to-end tour management (flights, visas, accommodation)",
                "24/7 student support and expert ground teams",
                "Vetted academic venues and industry partners",
                "Blend of academic visits with cultural experiences"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#EB7C19] shadow-sm"
                >
                  <div className="flex items-start">
                    <span className="text-2xl text-[#EB7C19] mr-4">✓</span>
                    <h3 className="text-lg font-semibold">{item}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#EB7C19] mb-3">Academic Focus Areas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Customized educational tours across diverse disciplines</p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    
    </>
   
         
   
  );
};

export default EducationalTours2;