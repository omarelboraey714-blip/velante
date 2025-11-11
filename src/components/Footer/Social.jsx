'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaBehance, FaFacebook } from 'react-icons/fa';

export default function Social() {
  const socialMedia = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: '#' },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/velante_official?igsh=ZmI1ZW1maGFrbDRu',
    },
    { name: 'Behance', icon: <FaBehance />, url: '#' },
    { name: 'Facebook', icon: <FaFacebook />, url: '#' },
  ];

  return (
    <motion.div
      className="vf-social"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h4 className="vf-social-title">تابعنا على</h4>
      <div className="vf-social-icons">
        {socialMedia.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            className="vf-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
