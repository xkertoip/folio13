'useClient';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {FunctionComponent, ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

const variants = {
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  initial: {
    y: 50,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};
const PageTransition: FunctionComponent<Props> = ({ children }) => {
  const router  = useRouter();
  console.log(router)
  return (
    <>
      <AnimatePresence mode={'wait'}>
        <motion.div
          variants={variants}
          initial={'initial'}
          animate={'center'}
          exit={'exit'}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
export default PageTransition;
