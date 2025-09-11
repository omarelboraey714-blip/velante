import { motion } from "framer-motion";
import { teamMembers } from "@/data/aboutData";

export default function Team() {
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
          تعرف على العقول المبدعة behind فيلانتي
        </motion.h2>
        <div className="va-team-grid">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="va-team-member"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotateY: 10, rotateX: 5, translateY: -5 }}
              transition={{ duration: 0.5, delay: member.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="va-member-image">
                <img
                  src={member.image}
                  alt={member.name}
                  className="va-member-img"
                  onError={(e) =>
                    (e.target.src = "/images/placeholder-avatar.png")
                  }
                />
              </div>
              <div className="va-member-info">
                <h3 className="va-member-name">{member.name}</h3>
                <p className="va-member-position">{member.position}</p>
                <p className="va-member-description">{member.description}</p>
                <div className="va-member-social">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
