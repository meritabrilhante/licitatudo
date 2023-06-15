
import styles from "./Button.module.scss"
export interface ButtonProps {
  text: string;
  type?: ButtonType;
  children?: React.ReactNode
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary'


const Button = ({ text, children }:ButtonProps) => {

  return(
    <button className={styles.button}>
      {children}
      {text}
    </button>
  );
};

export default Button;