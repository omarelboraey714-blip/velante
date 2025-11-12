'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const response = await fetch('/api/team-members');
        const result = await response.json();

        if (!result.success) throw new Error(result.error);

        setTeamMembers(result.data || []);
      } catch (error) {
        toast.error('حدث خطأ أثناء جلب أعضاء الفريق');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTeamMembers();
  }, []);

  return (
    <section className="va-team">
      <div className="va-container">
        <motion.h2
          className="va-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          تعرف على العقول المبدعة خلف <span>velante</span>
        </motion.h2>
        {isLoading ? (
          <p>جاري تحميل أعضاء الفريق...</p>
        ) : (
          <div className="va-team-grid">
            {teamMembers.map(member => (
              <motion.div
                key={member.id}
                className="va-team-member"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="va-member-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="va-member-img"
                    onError={e =>
                      (e.target.src = '/images/placeholder-avatar.png')
                    }
                  />
                </div>
                <div className="va-member-info">
                  <h3 className="va-member-name">{member.name}</h3>
                  <p className="va-member-position">{member.position}</p>
                  <p className="va-member-description">{member.description}</p>
                  {/* <div className="va-member-social">
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        className="va-social-link"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        💼
                      </motion.a>
                    )}
                    {member.social.behance && (
                      <motion.a
                        href={member.social.behance}
                        className="va-social-link"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        🎨
                      </motion.a>
                    )}
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        className="va-social-link"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        💻
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        className="va-social-link"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        🐦
                      </motion.a>
                    )}
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
