'use client';
import { motion } from 'framer-motion';
import { styles } from '../styles/styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus"
      textStyles="text-center"/>
      <motion.p 
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
        Let's explore the <strong>metaverse</strong> world with us.
        Metaverse is a collective of artists, designers, and developers who are passionate about the future of the metaverse.
        Metaverse is a new digital world that is parallel to our own. It is a place where people can create, own, and trade digital assets.
        Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling the real world. you can enjoy the virtual world by feeling the real world, using only <strong>VR</strong> devices you can easily explore the metaverse world you want, turn your dreams into reality.

      </motion.p>

      <motion.img 
      variants={fadeIn('up', 'tween', 0.3, 1)}
      src="/arrow-down.svg" alt="arrow-down" className="w-[18px] h-[28px] object-contain mt-[28px]" />
    </motion.div>
    
  </section>
);

export default About;
