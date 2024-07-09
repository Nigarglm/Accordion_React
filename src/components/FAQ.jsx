// Components
import ListItem from "./ListItem";

const FAQ = (props) => {
  return (
    <div className="p-10">
      <ul>
       {props.questions.map((item, index) =>{
        return <ListItem item={item} index={index} listItemClick={props.faqClick} /> })
       }
      </ul>
    </div>
  );
};

export default FAQ;