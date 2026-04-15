import { motion } from 'framer-motion';

const SectionWrapper = ({ id, className = '', children, ...props }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65, ease: 'easeOut' }}
    className={`relative ${className}`}
    {...props}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
