import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import { 
  Users, 
  BookOpen, 
  Mic, 
  GraduationCap,
  MessageCircle,
  Code,
  Briefcase,
  Target,
  Globe,
  Calendar,
  Award,
  ArrowRight,
  ExternalLink,
  Instagram,
  Youtube
} from 'lucide-react'

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const communityServices = [
    {
      id: 'mentorship',
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Connect with industry professionals and senior students for career guidance, interview prep, and technical mentoring.',
      features: ['1-on-1 Sessions', 'Group Mentoring', 'Career Guidance', 'Interview Prep'],
      stats: '25+ Sessions'
    },
    {
      id: 'learning',
      icon: BookOpen,
      title: 'Python Programming Course',
      description: 'Comprehensive Python course designed for CS students, covering fundamentals to advanced concepts with real projects.',
      features: ['Basic to Advanced Python', 'Hands-on Projects', 'Weekly Sessions', 'Certificate'],
      stats: '50+ Students'
    },
    {
      id: 'networking',
      icon: MessageCircle,
      title: 'Community Networking',
      description: 'Connect with 1,600+ CS students from top Pakistani universities through our multi-platform community.',
      features: ['WhatsApp Groups', 'Discord Server', 'University Networks', 'Study Groups'],
      stats: '1,600+ Members'
    },
    {
      id: 'events',
      icon: GraduationCap,
      title: 'Entry Test Sessions',
      description: 'Comprehensive preparation sessions for university entry tests including FAST NAT, NUST NET, and other CS admission tests.',
      features: ['Mock Tests', 'Solution Sessions', 'Strategy Planning', 'Practice Materials'],
      stats: '300+ Students'
    },
    {
      id: 'opportunities',
      icon: Briefcase,
      title: 'Career Opportunities',
      description: 'Get notified about internships, job openings, and freelance opportunities shared by community members.',
      features: ['Job Postings', 'Internship Alerts', 'Freelance Gigs', 'Startup Opportunities'],
      stats: '50+ Posted'
    },
    {
      id: 'tools',
      icon: Code,
      title: 'Study Tools & Utilities',
      description: 'Custom-built tools by our community to help students with calculations and mock tests for better preparation.',
      features: ['UniCalc Calculator', 'FastMock Tests', 'Free Access', 'Regular Updates'],
      stats: '2 Live Tools'
    }
  ]

  const platforms = [
    {
      name: 'WhatsApp Groups',
      description: '1,200+ active members across focused discussion groups',
      icon: MessageCircle,
      members: '1,200+',
      color: 'bg-green-500'
    },
    {
      name: 'Discord Server',
      description: '800+ members with voice chats and collaboration rooms',
      icon: Users,
      members: '800+',
      color: 'bg-indigo-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      description: '300+ followers for updates and community highlights',
      category: 'Social Media',
      members: '300+',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      description: '300+ subscribers for educational content and sessions',
      category: 'Educational',
      members: '300+',
      color: 'from-red-500 to-red-600'
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Focused Learning',
      description: 'Structured learning paths designed specifically for CS/IT students in Pakistan'
    },
    {
      icon: Users,
      title: 'Peer Support',
      description: 'Learn from and collaborate with students from top universities nationwide'
    },
    {
      icon: Award,
      title: 'Industry Connections',
      description: 'Direct access to professionals working at top tech companies globally'
    },
    {
      icon: Globe,
      title: 'National Network',
      description: 'Connect with students from 50+ universities across Pakistan'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
          <div className="text-center max-w-6xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 mb-6 sm:mb-8 shadow-sm">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
              <span className="text-xs sm:text-sm font-bold text-blue-700 tracking-wide">Our Services</span>
            </div>

            {/* MUCH LARGER main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900 tracking-tight">
              Comprehensive Support for
              <br />
              <span className="relative inline-block ml-3">
                <span className="text-blue-600">CS Students</span>
                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </span>
            </h1>

            {/* Better subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              From mentorship and learning resources to career opportunities and community support across Pakistan
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12">
              <a href="#services">
                <button className="group flex items-center bg-blue-600 text-white px-6 py-3 sm:px-7 sm:py-4 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                  <BookOpen className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                  Explore Services
                </button>
              </a>
              
              <a href="/join">
                <button className="group flex items-center border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto max-w-[180px] sm:max-w-none">
                  <Users className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                  Join Community
                </button>
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
              <div className="text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  6+
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Core Services
                </div>
              </div>
              
              <div className="text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  2,000+
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Students Served
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1 text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Free Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 tracking-tight text-black">
              What We <span className="text-gray-600">Offer</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Simple, authentic community services for CS students
            </p>
          </motion.div>

          <div className="space-y-12 lg:space-y-16">
            {communityServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border-b border-gray-200 pb-8 lg:pb-12 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-black">
                          {service.title}
                        </h3>
                        <span className="text-sm font-medium text-blue-600">
                          {service.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-gray-600 leading-relaxed mb-4 text-base lg:text-lg">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 text-sm lg:text-base flex items-center">
                          <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our <span className="text-gray-600">Platforms</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Active across multiple platforms to ensure you stay connected wherever you are
            </p>
          </motion.div>

          <div className="space-y-8 lg:space-y-12">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border-b border-gray-200 pb-6 lg:pb-8 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-center">
                  <div className="flex items-center lg:col-span-1">
                    <div className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center mr-4`}>
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black">{platform.name}</h3>
                      <div className="text-xl font-bold text-black">{platform.members}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{platform.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Community */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 tracking-tight leading-tight text-black">
                Why Join
                <br />
                <span className="text-gray-600">Our Community?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 leading-relaxed">
                Join a supportive community of CS students building their tech careers together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Join WhatsApp Community
                </motion.button>
                <motion.a
                  href="https://csconnect.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-black/20 text-black px-8 py-4 rounded-xl font-semibold hover:bg-black/5 transition-all duration-300 text-lg flex items-center justify-center"
                >
                  Visit csconnect.pk
                  <ExternalLink className="ml-2 w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:space-y-10"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-gray-200 pb-6 lg:pb-8 last:border-b-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-black mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Study Tools Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
              Study <span className="text-gray-600">Tools</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom-built tools by our community to help you excel in your studies
            </p>
          </motion.div>

          <div className="space-y-8 lg:space-y-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-b border-gray-200 pb-8 lg:pb-12 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
                <div className="flex items-center lg:col-span-1">
                  <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">UniCalc Calculator</h3>
                    <a
                      href="https://unicalc.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center"
                    >
                      Visit UniCalc
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    University grade calculator for different grading systems including CGPA, GPA, and percentage calculations. Built by our community for students.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="border-b border-gray-200 pb-8 lg:pb-12 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
                <div className="flex items-center lg:col-span-1">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">FastMock Tests</h3>
                    <a
                      href="https://fastmock.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors flex items-center"
                    >
                      Start Mock Test
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    Practice mock tests for university entry tests including FAST NAT, NUST NET, and other admission tests. Developed by students for students.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Community in <span className="text-gray-300">Numbers</span>
            </h2>
          </motion.div>

          <div className="space-y-8 lg:space-y-12 max-w-4xl mx-auto">
            {[
              { number: '1,600+', label: 'Active Members', icon: Users },
              { number: '50+', label: 'Universities', icon: GraduationCap },
              { number: '25+', label: 'Expert Sessions', icon: Mic },
              { number: '6', label: 'Months Growth', icon: Calendar },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-white/20 pb-6 lg:pb-8 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-center">
                  <div className="flex items-center justify-center lg:justify-start lg:col-span-1">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-bold">{stat.number}</div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 text-center lg:text-left">
                    <p className="text-gray-300 text-base lg:text-lg">
                      {stat.label === 'Active Members' && 'Growing community of passionate CS students from across Pakistan'}
                      {stat.label === 'Universities' && 'Connected students from top universities nationwide'}
                      {stat.label === 'Expert Sessions' && 'Industry sessions by professionals from leading tech companies'}
                      {stat.label === 'Months Growth' && 'Rapid growth building Pakistan\'s largest CS community'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services