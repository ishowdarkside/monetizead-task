import AccordionItem from "../../AccordionItem/AccordionItem";
import styles from "./AccordionSection.module.scss";
export default function AccordionSection(): JSX.Element {
  return (
    <section className={styles.accordionSection}>
      <div className="container">
        <h2>You Ask We Answer</h2>
        <AccordionItem question="Find your boot size">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          cupiditate autem quidem tempora, temporibus dolores eaque voluptates,
          voluptate vel rem totam sapiente iusto nihil ratione doloremque
          quisquam magni cumque recusandae?
        </AccordionItem>

        <AccordionItem question="Free shipping globally">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          cupiditate autem quidem tempora, temporibus dolores eaque voluptates,
          voluptate vel rem totam sapiente iusto nihil ratione doloremque
          quisquam magni cumque recusandae?
        </AccordionItem>

        <AccordionItem question="Easy returns">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          cupiditate autem quidem tempora, temporibus dolores eaque voluptates,
          voluptate vel rem totam sapiente iusto nihil ratione doloremque
          quisquam magni cumque recusandae?
        </AccordionItem>

        <AccordionItem question="FAQ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          cupiditate autem quidem tempora, temporibus dolores eaque voluptates,
          voluptate vel rem totam sapiente iusto nihil ratione doloremque
          quisquam magni cumque recusandae?
        </AccordionItem>
      </div>
    </section>
  );
}
