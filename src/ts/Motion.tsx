import { ReactNode, FunctionComponent } from "react";
import { motion } from "framer-motion";

interface AnimatedProps {
  children: ReactNode;
  className?: string;
  style?: {
    color: string
  }
}

/**
 * @description An animated &lt;p&gt; component.
 */
export const Paragraph: FunctionComponent<AnimatedProps> = (props): JSX.Element => {
  return (<motion.p className={props.className}>{props.children}</motion.p>);
};

/**
 * @description An animated &lt;div&gt; component.
 */
export const Division: FunctionComponent<AnimatedProps> = (props) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: {
          opacity: 0,
          y: 100
        }
      }}

      className={props.className}>

      {props.children}
    </motion.div>
  );
};

/**
 * @description An animated &lt;h1&gt; component.
 */
export const Heading1: FunctionComponent<AnimatedProps> = (props) => {
  return (
    <motion.h1
      className={props.className}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.5, duration: 2 }}
    >
      {props.children}
    </motion.h1>
  );
};

/**
 * @description An animated &lt;h2&gt; component.
 */
export const Heading2: FunctionComponent<AnimatedProps> = (props) => {
  return (<motion.h2 className={props.className} style={props.style}>{props.children}</motion.h2>);
};

/**
 * @description An animated &lt;h3&gt; component.
 */
export const Heading3: FunctionComponent<AnimatedProps> = (props) => {
  return (<motion.h3 className={props.className} style={props.style}>{props.children}</motion.h3>);
};

/**
 * @description An animated &lt;h4&gt; component.
 */
export const Heading4: FunctionComponent<AnimatedProps> = (props) => {
  return (<motion.h4 className={props.className} style={props.style}>{props.children}</motion.h4>);
};

/**
 * @description An animated &lt;h5&gt; component.
 */
export const Heading5: FunctionComponent<AnimatedProps> = (props) => {
  return (<motion.h5 className={props.className} style={props.style}>{props.children}</motion.h5>);
};

/**
 * @description An animated &lt;h6&gt; component.
 */
export const Heading6: FunctionComponent<AnimatedProps> = (props) => {
  return (<motion.h6 className={props.className} style={props.style}>{props.children}</motion.h6>);
};